const express = require("express");
const cors = require("cors");
require("dotenv").config();
const databaseCalls = require("./database.js");

//variables
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//USE
app.use(cors());
app.use(express.json());

app.post("/user", (req, res) => {
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
        res.status(400);
      });

    }else{
      console.log("Email was taken");
      res.status(405);
    }
  }).catch((err)=>{
    console.log(err);
    res.status(400);
  });
});

app.get("/user", (req, res)=>{
  
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
