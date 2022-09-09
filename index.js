const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let activities = [];

app.use(bodyParser.urlencoded({extended : true}))

app.set('view engine', 'ejs');
app.get('/', function(req, res){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("index", { kindOfDay: day, newActivity: activities })
});

app.post("/", function(req, res){
  activity = req.body.newItem;
  console.log(activity);
  activities.push(activity);
  res.redirect("/")
})
app.listen(3000, function(req, res){
  console.log("Server Started on Port 3000")
});
