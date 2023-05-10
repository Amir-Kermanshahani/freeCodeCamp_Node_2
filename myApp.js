
var express = require('express');
var app = express();

console.log('Hello World');

app.get("/",(req,res)=>res.sendFile(__dirname + '/views/index.html'));

app.use("/public", express.static( __dirname + "/public"));

 app.get("/json",(req,res)=>{
   let resultMessage="Hello json";
   if (process.env.MESSAGE_STYLE==="uppercase"){
     resultMessage=resultMessage.toUpperCase();
   }
  
   res.json({"message": resultMessage});
                            
 });

 module.exports = app;
