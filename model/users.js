const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true 
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlen : 8,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },


},  {timestamps : true}

);


module.exports = mongoose.model('User' , UserSchema) ;