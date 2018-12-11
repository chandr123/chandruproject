var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! test");
});

app.listen(3000, function(){
	
	console.log("running port on 3000")
});