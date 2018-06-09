const Http = require("http"),
      File = require("fs"),
      Url = require("url");

let server = Http.createServer((request, response) => {

    let url_parts = Url.parse(request.url);
    let url_path = url_parts.pathname;
    let file_path = __dirname + url_path;

    File.readFile(file_path, (err, data)=> {

        if(err) {

            response.writeHead(404, {"Content-Type": 'text-html'});

            response.write("<h1>Nao encontrado!</h1>");

        } else {

            response.writeHead(200, {"Content-Type": 'text-html'});

            response.write(data.toString());
        }

        response.end();

    });
});

server.listen(3000);