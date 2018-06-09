let fs = require("fs");

// fs.writeFile("my_file.txt", "TreinaWeb NodeJS", function (err) {
//
//     if(err) {
//         console.log(err);
//     }
//
//     console.log("Arquivo criado!");
// });


// fs.readFile("my_file.txt", function (err, data) {
//
//     if(err) {
//         console.log(err);
//     }
//
//     console.log(data.toString());
//
// });

fs.appendFile("my_file.txt", "TreinaWeb NodeJS\r\n", function (err) {

    if(err) {
        console.log(err);
    }

    console.log("Arquivo editado!");
});

let data_file = fs.readFileSync("my_file.txt");

console.log(data_file.toString());