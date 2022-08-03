var http = require("http");
var compression = require('compression');
var helmet = require("helmet");

 http.createServer(function(req,res){
    res.write("Welcome to Nodejs Server");
    res.end();
 })
 .listen(8000,()=> console.log("Server Started at port 8000"));

 const express = require ("express")
 var app = express();
 app.use(compression());
 app.use(helmet());
 
  app.get('/', (req,res)=>{
    res.send("Welcome to Express Server");
  })
  app.get('/', (req,res)=>{
    res.send("Sample Express Page");
  })
  app.listen(3000, ()=> console.log("Server started at port 3000"))