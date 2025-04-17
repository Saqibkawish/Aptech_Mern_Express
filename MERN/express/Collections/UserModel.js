let mongoo = require("mongoose");

let userCollection = mongoo.Schema({
    u_name: {
        type:String,
        required: true
    },
    u_password: {
        type:String,
        required: true
    },
    u_address: {
        type:String,
        required: true
    },
    u_email: {
        type:String,
        required: true,
        unique: true
    },
    u_gender: {
        type:String,
        required: true
    },
    u_age: {
        type:Number,
        required: true
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoo.model("Users", userCollection);