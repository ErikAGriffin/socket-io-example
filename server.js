var express = require('express');
var app = express();
var server = require('http').createServer(app);
var root = __dirname + '/public/';

app.use(express.static(root));


// -- Socket.io --
var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('A user has connected');


  socket.on('chat message', function(msg) {

    io.emit('chat message', msg);

  });

  socket.on('disconnect', function() {
    console.log('A user has disconnected');
  });
});



server.listen(3000, function(){
  console.log("Listening on server port 3000");
});

// +++ Routes +++

app.get('/', function(req,res) {

  res.sendFile(root+'home.html');

});