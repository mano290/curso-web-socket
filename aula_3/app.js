let EventEmitter = require("events");

class Cao extends EventEmitter {
    latir() {
        console.log("Au au!");
    }
}

let Rex = new Cao();

Rex.on("pessoa_portao", Rex.latir);

Rex.emit("pessoa_portao");
Rex.emit("pessoa_portao");
Rex.emit("pessoa_portao");
Rex.removeListener("pessoa_portao", Rex.latir);
Rex.emit("pessoa_portao");
Rex.emit("pessoa_portao");