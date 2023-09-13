var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    }
});

var user = new mongoose.model('User', schema);

module.exports = user;
