let express = require("express");
let route = express.Router();

let func = require("../Logics/Functions");

route.get("/", func.Registration);
route.get("/login", func.Login);
route.get("/dash", func.Dashboard);

module.exports = route;