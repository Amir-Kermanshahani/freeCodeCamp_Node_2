let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    const messageStyle = process.env['MESSAGE_STYLE'];
    if (messageStyle === "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }
    res.json({message : response});
});



























 module.exports = app;
