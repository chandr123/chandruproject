var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! test");
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});