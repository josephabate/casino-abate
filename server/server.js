const express = require("express");
const cors = require("cors");
require('dotenv').config();
const databaseCalls = require('./database.js');

//variables
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//USE 
app.use(cors());
app.use(express.json());

app.post('/user', (req,res)=>{
    console.log(req.body);
    databaseCalls.createUser(req.body)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })  
});

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

databaseCalls.initialize()
.then((res)=>{
    console.log(res);
    app.listen(HTTP_PORT, onHttpStart);
})
.catch((err)=>{
    console.log(err)
})