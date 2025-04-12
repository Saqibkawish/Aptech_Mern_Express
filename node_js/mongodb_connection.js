let mongodb = require("mongoose")
require("dotenv").config()

mongodb.connect(process.env.URI).
    then(() => {
        console.log("Connection has been established");
    }
    ).catch((error) => {
        console.log(error)
    })








