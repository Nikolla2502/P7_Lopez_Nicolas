const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
email: { 
    type: String, 
    required: true, 
    unique: true 
},
password: { 
    type: String, 
    required: true 
}
});

userSchema.plugin(uniqueValidator);  // verifie que l'utilisateur n'as pas deja un compte

module.exports = mongoose.model('User', userSchema);