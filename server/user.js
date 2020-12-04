const mongoose = require('mongoose');
const user = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    varified: Boolean
})

module.exports = mongoose.model("User", user);