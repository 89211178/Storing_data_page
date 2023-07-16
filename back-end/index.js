const express = require("express");
const cors = require("cors");
const app = express();
const uuid = require("uuid");

// Enable CORS for all routes
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3078;

// Import our custom modules/controllers
const web = require("./routes/web");
const db = require("./db/conn");

app.use(express.json()); // Add this line to parse JSON requests

app.get("/", (req, res) => {
  res.send("Server is finding port ...");
});

// Routes
app.use("/web", web);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//--------------------------------------------------------

app.post("/Singup", (req, res) => {
  const { mail, name, password } = req.body;

  // Generate a unique ID for the user
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

app.put("/Make_profile/:email", (req, res) => {
  const email = req.params.email;
  const { firstname, lastname, about } = req.body;

  const sqlUpdate = "UPDATE Profil SET `firstname` = ?, `lastname` = ?, `about` = ? WHERE `mail` = ?";
  const selectQuery = "SELECT `mail` FROM Profil WHERE `mail` = ?";

  db.query(selectQuery, [email], (selectErr, selectResult) => {
    if (selectErr) {
      console.error(selectErr);
      return res.status(500).json({ message: "Error in Node - SELECT query" });
    }

    if (selectResult.length > 0) {
      // Profile exists, perform update
      db.query(sqlUpdate, [firstname, lastname, about, email], (updateErr, updateResult) => {
        if (updateErr) {
          console.error(updateErr);
          return res.status(500).json({ message: "Error in Node - UPDATE query" });
        }

        return res.json("Success");
      });
    } else {
      return res.status(404).json({ message: "Profile not found" });
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
  const { user_mail, recipe_id, rating, comment } = req.body;

  const com_id = uuid.v4();

  const sql = "INSERT INTO Komentar (`com_id`, `user_mail`, `recipe_id`, `rating`, `comment`) VALUES (?, ?, ?, ?, ?)";
  const values = [com_id, user_mail, recipe_id, rating, comment];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error in Node" });
    }

    return res.json(result);
  });
});