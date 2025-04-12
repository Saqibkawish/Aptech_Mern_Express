let mongoo = require("mongoose");

let healthInfo = mongoo.Schema({
    bp: {
        type:Number,
        required: true
    },
    heartRate: {
        type:Number,
        required: true
    },
    sugar: {
        type:Number,
        required: true
    },
    colestrol: {
        type:Number,
        required: true,
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoo.model("Health Info", healthInfo);