const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const { timeLog } = require("console");
const { resolve } = require("path");

const url =
  "mongodb+srv://databaseadmin:admin123@casino.jytkg.mongodb.net/Casino?retryWrites=true&w=majority";
const dbName = "Casino";
const client = MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db; //holds database name

//databaseadmin
//admin123

exports.createUser = function ({ email, username, password, varified }) {
  const newUser = {
    email: email,
    username: username,
    password: password,
    varified: varified,
  };

  return new Promise((resolve, reject)=>{
    const collection = db.collection('users');
    collection.insertOne(newUser, (err, res) => {
        if (err){
            reject(err);
        }
        console.log("New user added to database");
        resolve("User Approved!");
    });
  });
};

//this starts connection to database
exports.initialize = function () {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      assert.strictEqual(null, err);
      db = client.db(dbName);
      reject("Cannot connect to database");
    });
    resolve("Connected successfully to database");
  });
};
