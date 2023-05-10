const mongoose = require('mongoose')

const vaccineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    origin: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    place: {
        type: String,
        required: true
    },


    updateAt: Date,
}, { timestamps: true })



module.exports = mongoose.model('vaccineinfo', vaccineSchema)