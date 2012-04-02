var net = require('net');

var server = net.createServer(function (socket) {
  socket.addListener("connect", function () {
    sys.puts("Connection from " + socket.remoteAddress);
    socket.end("Hello World\n");
  });  
});

server.listen(7000, "localhost");
console.log("Servidor TCP escuchando el puerto 7000 en localhost.");