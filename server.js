var express = require('express');
var app = express();
var server = require('http').createServer(app);
var root = __dirname + '/public/';

app.use(express.static(root));




server.listen(3000, function(){
  console.log("Listening on server port 3000");
});


app.get('/', function(req,res) {

  res.sendFile(root+'home.html');

});