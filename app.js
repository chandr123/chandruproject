
const http = require('http');
const port=process.env.PORT || 3000


/*
var express = require('express');
var app = express();

app.get('/test', function(req, res){
   res.send("Hello world! test ya its me ");
});*/





const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World ya its me changes done</h1>');
});

server.listen(port,() => {
console.log(`Server running at port `+port);
});