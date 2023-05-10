const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    password: String
})

module.exports = mongoose.model('users', userSchema)