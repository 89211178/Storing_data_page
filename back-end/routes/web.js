const express= require("express")
const web = express.Router();

web.get('/',(req,res)=>{
    console.log("The route has been reached")
    res.send("web")
})

module.exports=web