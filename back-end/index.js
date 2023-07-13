const express = require("express");
const cors = require("cors");
const app = express();
const uuid = require("uuid");

// Enable CORS for all routes
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3061;

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
  const values = [
    userId,
    mail,
    name,
    password
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ Message: "Error in Node" });
    }
    
    return res.json(result);
  });
});

app.post("/Login", (req, res) => {
  const { mail, password } = req.body;
  const sql = "SELECT * FROM Uporabnik WHERE `mail` = ? AND `password` = ?";
  db.query(sql, [req.body.mail,req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error in Node");
    }
    else if (data.length > 0) {
      return res.json("Success");
    }
    else {
      return res.json("Failed");
    }
    
    return res.json(result);
  });
});
