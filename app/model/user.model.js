const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    cratedAt: Date,
});

const userModel = mongoose.model('UserDetail', userschema);

module.exports = userModel;

