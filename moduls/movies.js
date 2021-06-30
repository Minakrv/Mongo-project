const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const Movie = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    year: {
        type: String, 
        required: true 
    },
    type: {
        type: String, 
        required: false 
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Owner",
        required: true
    }
});

module.exports = mongoose.model("movies", Movie);





    
    
    