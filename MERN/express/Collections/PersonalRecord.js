let mongoo = require("mongoose");

let personalRecord = mongoo.Schema({
    height: {
        type:Number,
        required: true
    },
    bmi: {
        type:Number,
        required: true
    },
    weight: {
        type:Number,
        required: true
    },
    category: {
        type:String,
        required: true,
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoo.model("Personal Record", personalRecord);