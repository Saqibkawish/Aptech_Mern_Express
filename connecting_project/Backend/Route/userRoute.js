let express = require('express');

let rout = express.Router();
let userLogic = require('../Controller/userLogics');

rout.post("/user", userLogic.register);

module.exports = rout;
