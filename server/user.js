const mongoose = require('mongoose');
const user = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    verified: Boolean,
    money: Number
})

module.exports = mongoose.model("User", user);