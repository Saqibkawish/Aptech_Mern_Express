let mongo = require("mongoose");
require("dotenv").config();

let db = process.env.DB_URL

let db_func = async function (){
    mongo.connect(db).then(()=>{
        console.log("Connection has been build SuccessFully");
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = db_func;