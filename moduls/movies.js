const mongoose = require("mongoose");
const { INTEGER } = require("sequelize/types");


const movie = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: INTEGER, required: true },
    type: { type: String, required: false },
});

module.exports = mongoose.model("movies", movie);