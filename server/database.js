const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); 
const { resolve } = require('path');


const url = "mongodb+srv://databaseadmin:admin123@casino.jytkg.mongodb.net/Casino?retryWrites=true&w=majority";
const dbName = "Casino";
const client = MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
let db; //holds database name

//databaseadmin
//admin123



//this starts connection to database
exports.initialize = function (){
    return new Promise((resolve, reject) => {
        client.connect((err)=>{
            assert.strictEqual(null, err);
            db = client.db(dbName);
            reject("Cannot connect to database")
        })
        resolve("Connected successfully to database");
    })
}