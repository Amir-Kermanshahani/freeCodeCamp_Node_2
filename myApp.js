let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res){
    let response = {
      message : "Hello json"
    };
    
    if(process.env.MESSAGE_STYLE==='uppercase'){
      response.message = response.message.toUpperCase();  
    }
    
    return res.json(response);
    });



























 module.exports = app;
