const mongoose = require("mongoose"); 
const { Schema } = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favouriteMovie: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
});

module.exports = mongoose.model("users", User);