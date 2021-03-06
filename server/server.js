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
const path = require('path');
const nodemailer = require('nodemailer');
const stripe = require("stripe")("sk_test_51HyNSwFH0EgpdBvsvaP4ax2S1j0OHQ6sUV1E8KTr2RYh3rYhnWdgNOcaHVZGEUWPEyqWXTXrHIWhOOxKCwbSsMLh00pXZ4tJEw");
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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

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

//log the user out
app.get('/logout', (req, res) => {
  console.log("LOGOUT")
  req.logout();
});

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

app.post("/checkout", async (req, res) => {
  try {
    const { amount, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: "cad",
      customer: customer.id,
      receipt_email: token.email,
      description: "Added funds to Account"
    });

    res.status(200).send("Charge Complete");
  } catch (err) {
    console.log(err);
    res.status(500).send("Issue with charge Charge");
  }
})

app.post("/forget-password", (req, res) => {
  sendEmail(req.body.email)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
});

function sendEmail(emailFind) {
  return new Promise((resolve, reject) => {
    let userId = "";

    User.findOne({ email: emailFind }, (err, user) => {
      if (err) throw err;
      else if (!user) {
        console.log("NO USER REGISTERED BY THE EMAIL: " + emailFind);
        return;
      }
      else {
        email(user._id, emailFind, reject, resolve);
      }
    })
  })
}

app.post("/reset-password", async (req, res) =>{
  const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
  User.updateOne({ '_id': req.body.id },
  { password: hashedPassword }, function (err, docs) {
    if (err) {
      res.status(406).send(docs)
    }
    else {
      res.status(200).send(docs)
    }
  });
})

//Helpers 
function email(userId, emailFind, reject, resolve) {
  const emailPassword = process.env.EMAILPASSWORD;
  const sendLink = process.env.SENDLINK;
  const output = `<h1>CLICK THE LINK TO RESET PASSWORD</h1> <a href="${sendLink}/reset-password/${userId}">click me to reset password</a>`

  const transporter = nodemailer.createTransport({
    host: 'pop3.live.com',
    port: 587,
    secure: false,
    auth: {
      user: 'joseph_abate_@hotmail.com',
      pass: emailPassword
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: '"Casino Abate" <joseph_abate_@hotmail.com',
    to: emailFind,
    subject: "Casno Abate - Reset Email",
    text: '',
    html: output
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      reject(err);
    } else {
      console.log(nodemailer.getTestMessageUrl(info));
      resolve(info);
    }
  })
}


function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.listen(HTTP_PORT, onHttpStart);