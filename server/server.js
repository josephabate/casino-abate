const { response } = require("express");
//required
const express = require("express");
const cors = require("cors");
require('dotenv').config();

//variables
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//USE 
app.use(cors());
app.use(express.json());


function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.listen(HTTP_PORT, onHttpStart);