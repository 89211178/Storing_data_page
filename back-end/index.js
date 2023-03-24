const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 5895
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

