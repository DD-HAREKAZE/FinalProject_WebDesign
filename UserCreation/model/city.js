const mongoose = require('mongoose');

const City = mongoose.Schema({
    image: String,
    location: String,
    price: String,
    score: String,
    describe: String
}, {collection: 'citys'});

module.exports = mongoose.model('City', City);
