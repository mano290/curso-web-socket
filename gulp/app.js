var Cachorro = {
    nome: "",
    latir: function() {
        console.log("Au Au!")
    },
    sentar: function () {
        console.log(Cachorro.nome + "sentou!");
    }
};

module.exports = Cachorro;