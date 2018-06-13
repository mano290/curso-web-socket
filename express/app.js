let Express = require("express"),
    MongoClient = require("./Mongo"),
    BodyParser = require("body-parser");

const app = Express();

app.use("/static", Express.static('public'));
app.use("/assets", Express.static('assets'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true
}));

app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.get("/", (request, response) => {
    MongoClient.getCursos((cursos) => {
        response.render("index", {
            cursos: cursos
        });
    });
});

app.post("/new-curso", (request, response) => {

    MongoClient.insertCurso({
        nome: request.body.nome,
        categoria: request.body.categoria,
    });

    response.redirect('/');
});

app.listen(3000, () => {
   console.log("app is alive...");
});