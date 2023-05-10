let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    let message = null;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = "Hello json".toUpperCase();
    } else {
        message = "Hello json";
    }
    res.json({"message" : message});
});



























 module.exports = app;
