const mysql = require("mysql")
const  conn = mysql.createConnection({
    host: "localhost",
    user: "codeigniter",
    password: "codeigniter2019", 
    database: "SISIII2023_89211178",
  })

 conn.connect((err) => {
      if(err){
          console.log("ERROR: " + err.message);
          return;    
      }
      console.log('Connection established');
    })

module.exports=conn

/*
const mysql = require("mysql2")
const  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: process.env.DB_DATABASE,
  })
*/