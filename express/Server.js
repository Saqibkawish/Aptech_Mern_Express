var exp = require("express");
var r = require("./Routes/router");

require("dotenv").config();

var app = exp();
app.use("/",r)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});