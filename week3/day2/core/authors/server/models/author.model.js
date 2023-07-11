const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    name: { type: String,
    required: [true,"Name is required"],
    minlength: [3, "Name must be at least 3 charracters"]
    }, 
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorsSchema);