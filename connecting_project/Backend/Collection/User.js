let mongoose = require('mongoose');

let userCollection = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    age:{
        type:Number,
        required:true
    },
    contactNo:{
        type:Number,
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("User", userCollection);