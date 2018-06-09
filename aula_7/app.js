const Io = require("socket.io")(3000),
      File = require("./files");

Io.on("connection", (socket) => {

    console.log("usuario conectado!");

    socket.on("client_hello", (data)=> {

        File.append(data);

        Io.sockets.emit("server_hello", data);

    });

    socket.on("client_history",(data) => {
        File.read(File._logMessages).then((result) => {
            socket.emit("server_client_history_loaded", result.toString());
        });
    });

});

