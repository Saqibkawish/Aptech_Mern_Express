let express = require("express");
let route = express.Router();

let func = require("../Logics/functions");

route.get("/", func.Home);
route.get("/c", func.Contact);
route.get("/f", func.Feedback);
route.get("/h", func.Help);
route.get("/fa", func.Faqs);
route.get("/p", func.PrivacyPolicy);

route.post("/save",func.saveData)

module.exports = route;