
require('fcc-express-bground');
require('dotenv')
var express = require('express');
var app = express();

console.log('Hello World');

app.get("/",(req,res)=>res.sendFile(__dirname + '/views/index.html'));

app.use("/public", express.static( __dirname + "/public"));


app.get('/json', function (req, res) {

    let response = {"message": "Hello json"};

    if(process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    }
    else {
        res.json({"message": "Hello json"});
    }

    res.json(response);
    
})



module.exports = app;
