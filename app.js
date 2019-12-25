const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    var nameOfDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    day = nameOfDay[currentDay];

    res.render("list", {kindOfDay: day})
  
})

app.listen(process.env.PORT, function(){
    console.log("Server is running on port 3000");
})