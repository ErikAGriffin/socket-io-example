var app = require('express')();
var server = require('http').createServer(app);


server.listen(3000, function(){
  console.log("Listening on server port 3000");
});


app.get('/', function(req,res) {

  res.send('Hello World.');
});