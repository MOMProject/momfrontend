//Specifing constanst for our app
// 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Body parser is need for reading json objects 
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true}));

//Creating Connection to Database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "misha"
  
});
//Connecting to our Database
con.connect((err) => {
  if (err) {
    throw err;
  }
 console.log("Connected to Database!");
 
});

// Query for gathering dataset from database 
// limit is 500 records can be changed in procedure
/*
con.query('CALL allInfo(0)', 
 function(err, results, fields) {
        console.log(err);
        console.log(results);
        connection.end();
    });
*/

// Specifing route for creating database 
app.get('/createdb',(req,res) =>{
let sql = 'CREATE DATABASE allMe';
con.query(sql, (err,result) =>{
  if(err) throw err;
  console.log(result);
  res.send('Database Created');
});
});
 
 // Gathering Url Information from database
 app.get('/getpost', (req,res) =>{
  let sql = 'Select * FROM alllinktheme';
  let query = con.query(sql, (err,results) =>{
      if(err) throw err;
  
  res.send(results);
    });
  });
// Launching our api (express.js)
app.listen(3005,() =>{
  console.log('Api started');
});