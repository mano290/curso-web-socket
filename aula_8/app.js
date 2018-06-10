let File = require("fs"),
    Http = require("http"),
    Url = require("url"),
    Path = require("path");


Http.createServer((request, response) => {

    if(request.url !== "/video.mp4") {

        response.writeHead(200, {"Content-Type": "text/html"});

        response.end("<video src='video.mp4' controls></video>");

    } else {

        let movie = Path.resolve(__dirname, "video.mp4");
        let range = request.headers.range;
        let positions = range.replace(/bytes=/, "").split("-");
        let start = parseInt(positions[0], 10);

        File.stat(movie, (err, stats) => {

            let total = stats.size;
            let end = positions[1] ? parseInt(positions[1], 10) : total - 1;
            let chunkSize = (end - start) + 1;

            response.writeHead(200, {
                "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Accept-Ranges": "bytes",
                "Content-Length": chunkSize,
                "Content-type": "video/mp4"
            });

            let stream = File.createReadStream(movie, {start: start, end: end})
                .on("open", () => {
                    stream.pipe(response);
                })
                .on("error", (err) => {
                    response.end(err.toString());
                });
        });
    }
}).listen(3000);