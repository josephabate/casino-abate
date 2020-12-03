const mongoClient = require('mongodb').MongoClient;
const assert = require('assert'); 


const url = "mongodb+srv://databaseadmin:admin123@casino.jytkg.mongodb.net/Casino?retryWrites=true&w=majority";
const dbName = "Casino";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
let db; //holds database name

//databaseadmin
//admin123



//this starts connection to database
exports.initialize = function (){
    return new Promise((res, rej) => {
        client.connect((err)=>{

        })
    })
}