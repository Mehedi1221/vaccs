const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    feedBack: String,
    mail: String,
})

module.exports = mongoose.model('feedback', feedbackSchema);