const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    city: String,
    zip: Number
});

module.exports = mongoose.model('User', User);
