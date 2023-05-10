let express = require('express');
let app = express();
require('dotenv').config();



console.log("Hello World");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
/*
app.get('/json', function (req, res) {
  res.json({"message": "Hello json"});
})
*/

/** 6) Use the .env file to configure the app */
app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase")
      res.json({"message": "HELLO JSON"})
    else
      res.json({"message": "Hello json"})
  })



























 module.exports = app;
