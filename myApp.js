
var express = require('express');
var app = express();

console.log('Hello World');

app.get("/",(req,res)=>res.sendFile(__dirname + '/views/index.html'));

app.use("/public", express.static( __dirname + "/public"));

/*
app.get('/json', function (req, res) {
  res.json({"message": "Hello json"});
})
*/

app.get('/json', function (req, res ) {
    let message = {"message" : "hello json"};
    if (process.env.MESSAGE_STYLE == "uppercase"){
     message.message= message.message.toUpperCase() ;
    } else {
    message.message= message.message.toLowerCase() ;
    }
    res.json(message);
  });

 module.exports = app;
