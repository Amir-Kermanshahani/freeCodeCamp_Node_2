let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    const mySecret = process.env['MESSAGE_STYLE'];
    message = "Hello json";
    mySecret === 'uppercase' ? 
        res.json({ "message": message.toUpperCase() }):
        res.json({ "message": message })
})



























 module.exports = app;
