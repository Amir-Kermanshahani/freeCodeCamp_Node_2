const { json } = require('body-parser');
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
    var jsonResponse = {"message" : "Hello json"};

    if (process.env.MESSAGE_STYLE === "uupercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse);
});



























 module.exports = app;
