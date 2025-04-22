let mongoose = require('mongoose');
require("dotenv").config()
let db_url = process.env.DB_URL

let db_work = async function () {
    mongoose.connect(db_url).
        then(() => {
            console.log("Connected to MongoDB")
        }).catch((error)=>{
            console.log(error)
        })
}

module.exports = db_work