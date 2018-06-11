let Cluster = require("cluster"),
    Http = require("http"),
    Cpu = require("os").cpus().length;

if(Cluster.isMaster) {

    for(let i = 0; i < Cpu; i++) {
        Cluster.fork();
    }

    Cluster.on("online", (worker) => {
        console.log(`Worker ${worker.process.pid} is online!`);
    });

    Cluster.on("listening", (address) => {
       console.log(`Worker is listening`);
    });

    Cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} is die!`);
    });

} else {

    Http.createServer((request, response) => {

        response.writeHead(200);

        response.end(`Process ${process.pid} says hello`);

    }).listen(8000);

}