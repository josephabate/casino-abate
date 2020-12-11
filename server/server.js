/* --- Modules --- */
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
require("dotenv").config();

/* --- Files --- */
const User = require('./user');

/* --- Variables --- */
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

/* --- Database Connection --- */
mongoose.connect("mongodb+srv://databaseadmin:admin123@casino.jytkg.mongodb.net/Casino?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log("Mongoose is connected!");
})

/* --- Middleware --- */
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//passport code
app.use(session({
  secret: "secretcode",
  resave: false,
  saveUninitialized: false, //could turn this back to false for login when someoen leaves the site
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

/* --- Routes --- */
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
        money: "150",
        password: hashedPassword,
        verified: false
      });
      await newUser.save();
      res.status(202).send("Account created");
    }
  })
});

app.post("/login", (req, res, next) => {
  console.log("----" + req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(404).send("User not found");
    else {
      req.logIn(user, err => {
        if (err) throw err;
        //only send back this user data
        const userObj = {
          id: req.user._id,
          username: req.user.username,
          verified: req.user.verified,
          money: req.user.money
        }
        res.status(200).json(userObj);
      })
    }
  })(req, res, next);
})

//sends user to application
app.get("/user", (req, res) => {
  console.log(req.user);
  const userObj = {
    username: req.user.username,
    verified: req.user.verified,
    money: req.user.money
  }
  res.send(userObj); //authentication is stored here
})

app.put("/user/money", (req, res) => {
  const findId = req.body.id;
  const newMoney = req.body.money;
  User.updateOne({ '_id': findId },
    { money: newMoney }, function (err, docs) {
      if (err) {
        res.status(406).send(docs)
      }
      else {
        res.status(200).send(docs)
      }
    });
})

//Helpers 
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.listen(HTTP_PORT, onHttpStart);