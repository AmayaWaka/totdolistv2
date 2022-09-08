// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
//
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended : true}));
//

let express = require('express');
let app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  var today = new Date();


  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocalDatesString("en-US", options);

  

  res.render("index", { kindOfDay: day })


});

app.listen(3000, function(req, res){
  console.log("Server Started on Port 3000")
});
