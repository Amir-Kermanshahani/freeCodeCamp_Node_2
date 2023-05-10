let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');
require('dotenv').config();



console.log("Hello World");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

/*
app.get('/json', function (req, res) {
  res.json({"message": "Hello json"});
})
*/


app.get('/json', function(req, res) {
    var jsonResponse = {"message" : "Hello json"};

    if (process.env.MESSAGE_STYLE === "upercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse);
});



























 module.exports = app;
