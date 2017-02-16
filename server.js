require('dotenv').config();
var express     = require('express');
var bodyPrser   = require("body-parser");
var app = express();
app.use(bodyPrser.json());
app.use(bodyPrser.urlencoded({extended: true}));
require("./config/routes")(app);
app.listen(process.env.PORT, ()=>{
    console.log("server is running on PORT", process.env.PORT);
});