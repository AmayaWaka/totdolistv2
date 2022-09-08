const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");
})


app.listen(3000, function(){
  console.log("Server Started On Port 3000")
})
