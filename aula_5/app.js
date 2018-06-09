let File = require("fs");

console.time("Assincrono");
let counter = 0;
for(let i = 0; i < 1000; i++) {
    File.readFile("my_file.txt", function (err, data) {
        if(err) console.log(err);
        counter++;
        //console.log("Assincrono: " + data.toString());
        if(counter === 1000) {
            console.timeEnd("Assincrono");
        }
    });
}

console.time("Sincrono");
for(let i = 0; i < 100; i++) {
    let data = File.readFileSync("my_file.txt");
    //console.log("Sincrono: " + data.toString());
}
console.timeEnd("Sincrono");