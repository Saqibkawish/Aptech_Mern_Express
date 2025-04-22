let express = require('express');
let database = require('./Database');
let rou = require('./Route/userRoute');
let cors = require('cors');
const User = require('./Collection/User');
require("dotenv").config();

let portNo = process.env.PORT

let myApp = express();

myApp.use(cors());
myApp.use(express.json());
myApp.use("/gymfit/", rou);

database().then(() => {
    myApp.listen(portNo, () => {
        console.log(`Server is running on port http://localhost:${portNo}`);
    });
}).catch((error) => {
    console.log(error);
})
