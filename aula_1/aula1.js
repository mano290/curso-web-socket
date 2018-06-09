let Cachorro = {
    nome: 'Rex',
    idade: 3,
    sentar: ()=> {
        console.log(Cachorro.nome + " sentou!");
    },
    latir: ()=> {
        console.log("Au au!");
    }
};

module.exports = Cachorro;