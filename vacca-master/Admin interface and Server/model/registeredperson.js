const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    phone: {
        type: String,
        default:""
    },
    age: {
        type: String,
        default:""
    },
    address: {
        type: String,
        default:""
    },
    mail: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        default:""
    },
    vname: {
        type: String,
        default:""
        
    },
    vdate: {
        type: String,
        default:""
    },

    status: {
        type: String,
        enum: ['','registered', 'mailSent', 'vaccinated'],
        default:""
    },

    updateAt: Date,
}, { timestamps: true })



module.exports = mongoose.model('registeredpeople', userSchema)