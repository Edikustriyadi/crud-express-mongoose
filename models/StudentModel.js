const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nim:Number,
    name:String,
    majors:String
});
module.exports = mongoose.model("Student",Schema);