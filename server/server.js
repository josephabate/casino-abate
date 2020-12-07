//modules
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();
//Files
const User = require('./user');

//variables
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//database connection
mongoose.connect("mongodb+srv://databaseadmin:admin123@casino.jytkg.mongodb.net/Casino?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log("Mongoose is connected!");
})


//Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "secretcode",
  resave: false,
  saveUninitialized: false, //could turn this back to false for login when someoen leaves the site
}));
//app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


//Routes 
app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err
    else if (doc) res.status(405).send("Email is taken!")
    else {
      //encryped password fopr secuirty reasons 
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        verified: false
      });
      await newUser.save();
      res.status(202).send("Account created");
    }
  })
});

app.post("/login", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, user, info) =>{
    if(err) throw err;
    if(!user) res.status(404).send("User not found");
    else{
      req.logIn(user, err=>{
        if(err) throw err;
        res.status(200).send("User logged in");
        console.log("user logged in " + req.user.email + " " + req.user.id);
      })

      console.log("second time user logged in " + req.user.email + " " + req.user.id);
    }
  })(req,res,next);

  setTimeout(() => {
    console.log("third user logged in " + req.user.email + " " + req.user.id);
  }, 1000);
  
})

app.get("/user", (req, res)=>{
  console.log(req.user)
  res.send(req.user); //authentication is stored here
})



//Helpers 
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.listen(HTTP_PORT, onHttpStart);



/**
 *

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


databaseCalls
.initialize()
.then((res) => {
  console.log(res);
  app.listen(HTTP_PORT, onHttpStart);
})
.catch((err) => {
  console.log(err);
});
 */
