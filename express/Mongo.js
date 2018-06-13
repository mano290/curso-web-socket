let MongoClient = require("mongodb").MongoClient;

let Mongo = {
    _host: "mongodb://localhost:27017/treinaweb",
    _db: "treinaweb",
    getCursos: (callback) => {
        MongoClient.connect(Mongo._host, (err, database) => {
            if(err) return console.log(err.toString());
            let db = database.db(Mongo._db);
            db.collection("cursos").find().sort({nome: 1}).toArray((err, result) => {
                if(err) return console.log(err.toString());
                return callback(result);
            });
        });
    },
    insertCurso: (curso, callback) => {
        MongoClient.connect(Mongo._host, (err, database) => {
            if(err) return console.log(err.toString());
            let db = database.db(Mongo._db);
            db.collection("cursos").insertOne(curso, (err, result) => {
                return result;
            });
        });
    }
};

module.exports = Mongo;