let mongodb = require("mongoose")
require("dotenv").config()

let url = process.env.ATLAS_URL

mongodb.connect("mongodb+srv://razashaikh:razashaikh56@cluster0.m6xug.mongodb.net/").
    then(() => {
        console.log("Database Connected SuccessFully");
    }
    ).catch((error) => {
        console.log(error)
    })

