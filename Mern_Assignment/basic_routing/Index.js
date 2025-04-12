var exp = require("express");
var r = require("./Routes/route");

require("dotenv").config();

var app = exp();
app.use("/",r)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});