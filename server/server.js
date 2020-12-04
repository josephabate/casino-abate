//modules
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const passportlocal = require('passport-local').Strategy; 
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
require("dotenv").config();

//files
const databaseCalls = require("./database.js");

//variables
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//MIddleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true //could turn this back to false for login when someoen leaves the site
}));
app.use(cookieParser("secretcode"));


app.post("/register", (req, res) => {
  //search if user is aleady created with this email
  databaseCalls.searchUserByEmail(req.body.email).then((userData) => {
    if(userData == undefined){
      //add user if not taken
      databaseCalls.createUser(req.body).then((result) => {
        console.log(result + " - " + Date.now());
        res.status(202).send("user data accepted");
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send('database error');
      });

    }else{
      console.log("Email was taken");
      res.status(405).send('Email Was Taken');
    }
  }).catch((err)=>{
    console.log(err);
    res.status(400).send('bad');
  });
});

app.post("/login", (req, res)=>{
  console.log(req.body);
  databaseCalls.findUserAndLogin(req.body.email, req.body.password).then((userData) =>{
    console.log(userData);
    res.status(200).send("user logged in");
  }).catch((err)=>{
    console.log(err);
    res.status(500);
  })
})

app.get("/user", (req,res)=>{
  
})

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

databaseCalls
  .initialize()
  .then((res) => {
    console.log(res);
    app.listen(HTTP_PORT, onHttpStart);
  })
  .catch((err) => {
    console.log(err);
  });
