const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({

    setup: {
    type: String
    // required: [true, "first name is required"],
    // minlength: [6, "first name must be at least 6 characters long"]
    },
    

    punchline: {
        type: String
    }
    
}, {timestamps: true});
 
const joke = mongoose.model('joke', jokeSchema);
 
module.exports = joke;