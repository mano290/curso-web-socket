let Express = require("express");

const app = Express();

app.use("/static", Express.static('public'));
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/abc/:id?", (request, response) => {
    response.send(`Params by URL ${request.params.id}`);
});

app.listen(3000, () => {
   console.log("app is alive...");
});