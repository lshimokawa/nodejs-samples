var net = require('net');

var server = net.createServer(function (socket) {
  socket.end("Hello World\n");
});

server.listen(8000, "localhost");
console.log("Hello World TCP Server escuchando el puerto 8000 en localhost.");