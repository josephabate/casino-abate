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

//added new user to a database
exports.createUser = function ({ email, username, password, varified }) {
  const newUser = {
    email: email,
    username: username,
    password: password,
    varified: varified,
  };

  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    collection.insertOne(newUser, (err, res) => {
      if (err) {
        reject(err);
      }
      console.log("New user added to database");
      resolve("User Approved!");
    });
  });
};

//search for a user
exports.searchUserByEmail = function (findEmail) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    collection.find(
      { 'email': findEmail }
    ).toArray((err, data) => {
      assert.strictEqual(err, null);
      if(data){
        resolve(data[0]);
      }else{
        reject("No Email Found");
      }
    });
  });
}

//finduser and login
exports.findUserAndLogin = function (userEmail, userPassword){
  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    console.log(userEmail)
    console.log(userPassword)
    collection.find({
      "email": userEmail,
      "password": userPassword
    })
    .toArray((err, data) =>{
      assert.strictEqual(err, null);
      if(data){
        console.log(data[0]);
        resolve (data[0]);
      }else{
        reject("No User found!");
      }
    });
  });
} 

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
