const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const uuid = require("uuid");

app.use(bodyParser.json());
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3084;

const web = require("./routes/web");
const db = require("./db/conn");

app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Server is finding port ...");
});

app.use("/web", web);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//--------------------------------------------------------

app.post("/Singup", (req, res) => {
  const { mail, name, password } = req.body;

  const userId = uuid.v4();

  const sql = "INSERT INTO Uporabnik (`id`, `mail`, `name`, `password`) VALUES (?, ?, ?, ?)";
  const values = [userId, mail, name, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ Message: "Error in Node" });
    }

    return res.json(result);
  });
});

app.get("/checkEmailAvailability", (req, res) => {
  const { mail } = req.query;
  const sql = "SELECT COUNT(*) AS count FROM Uporabnik WHERE mail = ?";
  const values = [mail];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ Message: "Error in Node" });
    }

    const count = result[0].count;
    const exists = count > 0;

    return res.json({ exists });
  });
});

app.post("/Login", (req, res) => {
  const { mail, password } = req.body;
  const sql = "SELECT * FROM Uporabnik WHERE `mail` = ? AND `password` = ?";
  db.query(sql, [req.body.mail, req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error in Node");
    } else if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

//-----------------------------------------------------------------------------

app.post("/Make_profile", (req, res) => {
  const { mail, firstname, lastname, about } = req.body;

  const sqlUpdate = "UPDATE Profil SET `firstname` = ?, `lastname` = ?, `about` = ? WHERE `mail` = ?";
  const sqlInsert = "INSERT INTO Profil (`profil_id`, `mail`, `firstname`, `lastname`, `about`) VALUES (?, ?, ?, ?, ?)";
  const selectQuery = "SELECT `mail` FROM Profil WHERE `mail` = ?";

  db.query(selectQuery, [mail], (selectErr, selectResult) => {
    if (selectErr) {
      console.error(selectErr);
      return res.status(500).json({ message: "Error in Node - SELECT query" });
    }

    if (selectResult.length > 0) {
      db.query(sqlUpdate, [firstname, lastname, about, mail], (updateErr, updateResult) => {
        if (updateErr) {
          console.error(updateErr);
          return res.status(500).json({ message: "Error in Node - UPDATE query" });
        }

        return res.json("Success");
      });
    } else {
      const profil_id = uuid.v4(); 
      db.query(sqlInsert, [profil_id, mail, firstname, lastname, about], (insertErr, insertResult) => {
        if (insertErr) {
          console.error(insertErr);
          return res.status(500).json({ message: "Error in Node - INSERT query" });
        }

        return res.json("Success");
      });
    }
  });
});

app.get("/Get_profile/:email", (req, res) => {
  const email = req.params.email;

  const sql = "SELECT `firstname`, `lastname`, `about` FROM Profil WHERE `mail` = ?";
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error in Node" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const { firstname, lastname, about } = result[0];
    return res.json({ firstname, lastname, about });
  });
});

//-------------------------------------------------------------------

app.post("/Comments", (req, res) => {
  const { user_mail, recipe_id, rating, comment, recipe_title } = req.body;

  const com_id = uuid.v4();

  const sql = "INSERT INTO Komentar (`com_id`, `user_mail`, `recipe_id`, `rating`, `comment`, `recipe_title`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [com_id, user_mail, recipe_id, rating, comment, recipe_title];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error in Node" });
    }

    return res.json(result);
  });
});

app.get("/api/comments", (req, res) => {
  const recipeTitle = req.query.recipe_title;

  if (!recipeTitle) {
    return res.status(400).json({ error: "Missing recipe_title query parameter" });
  }

  const query = "SELECT rating, comment, user_mail FROM Komentar WHERE recipe_title = ?";
  db.query(query, [recipeTitle], (err, results) => {
    if (err) {
      console.error("Error fetching comments from MySQL:", err);
      res.status(500).json({ error: "Error fetching comments from MySQL" });
    } else {
      res.json(results);
    }
  });
});

// --------------------------------------------------------------------------------------

app.post("/Save_favorite", (req, res) => {
  const { recipeId, userEmail, recipeTitle } = req.body;
  const uniqueId = uuid.v4(); 

  const query = `INSERT INTO Najboljsi (fav_id, user_mail, recipe_title) VALUES (?, ?, ?)`;
  db.query(query, [uniqueId, userEmail, recipeTitle], (err, result) => {
    if (err) {
      console.error("Error saving to favorites:", err);
      res.status(500).json({ error: "Failed to save to favorites" });
      return;
    }
    console.log("Data saved to favorites successfully!");
    res.status(200).json({ success: true });
  });
});

app.get("/Get_favourite", (req, res) => {
  const userEmail = req.query.user_mail;

  const query = "SELECT recipe_title FROM Najboljsi WHERE user_mail = ?";
  db.query(query, [userEmail], (err, results) => {
    if (err) {
      console.error("Error fetching favourite recipes:", err);
      res.status(500).json({ error: "Failed to fetch favourite recipes" });
      return;
    }

    res.status(200).json(results);
  });
});

//--------------------------------------------------------------------------

app.get("/Commented", (req, res) => {
  const userEmail = req.query.user_mail;

  if (!userEmail) {
    return res.status(400).json({ error: "Missing user_mail query parameter" });
  }

  const query = "SELECT DISTINCT recipe_title FROM Komentar WHERE user_mail = ?";
  db.query(query, [userEmail], (err, results) => {
    if (err) {
      console.error("Error fetching comments from MySQL:", err);
      res.status(500).json({ error: "Error fetching comments from MySQL" });
    } else {
      res.json(results);
    }
  });
});