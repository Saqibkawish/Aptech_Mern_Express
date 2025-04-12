
let func = require("../LogicsFunctions/controller");

let express = require("express");
let route = express.Router();

route.get("/", func.Index);
route.get("/a", func.About);
route.get("/c", func.Contact);
route.get("/s", func.Service);

module.exports = route;