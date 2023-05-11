require('dotenv').config();
var express = require('express');
var app = express();


// console.log('Hello World');

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res)=>res.sendFile(__dirname + '/views/index.html'));


app.get("/json", (req,res) => {
    if (process.env['MESSAGE_STYLE'] == "uppercase") {
        res.json({"message" : "Hello json".toUpperCase()});
    }
    else {
        res.json({"message" : "Hello json"});
    }
    
});



 // This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------


 module.exports = app;