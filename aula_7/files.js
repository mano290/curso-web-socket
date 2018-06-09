const FilesHandler = require("fs"),
      Promisse = require("promise");

let Files = {
    _logMessages: "./log_message.txt",
    append: (data)=> {
        Files.read(Files._logMessages).then((history) => {

            history = history.toString();

            history = (history.length === 0) ? [] : JSON.parse(history);

            history.push(data);

            console.log(history);

            history = JSON.stringify(history);

            FilesHandler.writeFile(Files._logMessages, history, (err)=> {
                if(err) return console.log(err.toString());
            });
        });
    },
    read: (file)=> {
        return new Promisse((success, reject) => {
            FilesHandler.readFile(file, function (err, data) {
                if(err) return reject(err);
                return success(data);
            });
        });
    }
};

module.exports = Files;
