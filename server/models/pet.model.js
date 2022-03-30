const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [
            3,
            "Name must be longer than 3 characters"
        ],
        unique: true
    },
    type: { 
        type: String,
        required: [
            true,
            "Type is required"
        ],
        minLength: [
            3,
            "Type must be longer than 3 characters"
        ]
    },
    description: { 
        type: String,
        required: [
            true,
            "Description is required"
        ],
        minLength: [
            3,
            "Description must be longer than 3 characters"
        ]
    },
    skill_1: {
        type: String
    },
    skill_2: {
        type: String
    },
    skill_3: {
        type: String
    },
}, { timestamps: true });
PetSchema.plugin(uniqueValidator, {message: 'Name must be unique'});
module.exports = mongoose.model('Pet', PetSchema);

