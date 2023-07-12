const express = require('express')
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 3004
//Import opur custom modules-controllers
const web= require("./routes/web")
const db= require("./db/conn")

app.get("/",(req,res)=>{
res.send("Server is finding port ...")
})

//Routes
app.use('/web', web);

///App listening on port
app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})

app.post('/Singup', (req, res) => {
    const sql = "INSERT INTO Uporabnik (`mail`, `name`, `password`) VALUES (?)"
    const values = [
        req.body.mail,
        req.body.name,
        req.body.password
    ]
    index.query(sql, [values], (err, result) => {
        if(err) return res.json({Message: "Error in Node"})
        return res.json(result)
    })
})



