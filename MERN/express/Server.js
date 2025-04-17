let exp = require("express");
let r = require("./Routes/route");
let db = require("./MongodbConnection");
// import User Collection
let user = require("./Collections/UserModel");
let cor = require("cors")
let perRecord = require("./Collections/PersonalRecord");
let HealInfo = require("./Collections/Healthinfo");
// import env file
require("dotenv").config();

let user_Model = async function () {
    try {
        user.create({
            u_name: "Raza Shaikh",
            u_password: "Raza123",
            u_address: "Karachi",
            u_email: "razashaikh@gmail.com",
            u_gender: "Male",
            u_age: 20,
        })
        console.log("User Create SuccessFully");
    } catch (error) {
        console.log(error)
    }
}

let personal_Record = async function () {
    try {
        perRecord.create({
            height: 6.4,
            bmi: 24,
            weight: 63,
            category: "Normal Weight",
        })
        console.log("User Create SuccessFully");
    } catch (error) {
        console.log(error)
    }
}

let health_Info = async function () {
    try {
        HealInfo.create({
            bp: 100,
            heartRate: 80,
            sugar: 90,
            colestrol: 200,
        })
        console.log("User Create SuccessFully");
    } catch (error) {
        console.log(error)
    }
}

let app = exp();
app.use(cor());
app.use(exp.json())
app.use("/", r)


db().then(() => {
    // user_Model();   
    // personal_Record();
    // health_Info();
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}/`);
    });
}).catch((error) => {
    console.log(error);
})
