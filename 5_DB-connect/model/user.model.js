const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: String,     // short hand property
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobileNo: {
        type: Number
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    }
});

module.exports = mongoose.model('User', userSchema);