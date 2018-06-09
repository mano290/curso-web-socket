let File = require("fs"),
    Promise = require("promise");

function readFile(file) {
    return new Promise((fullFill, reject)=> {
        File.readFile(file, (err, data)=> {
            if(err) return reject(err.toString());
            fullFill(data.toString());
        });
    });
}

readFile("my_file.txt")
    .then((data)=> {
        console.log(data);
        return "Resultado x";
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err)=> {
        console.log(err);
    });

console.log("aquii");