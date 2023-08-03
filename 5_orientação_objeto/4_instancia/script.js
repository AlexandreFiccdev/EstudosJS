//instanciando classespor funções

function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("au au");
    }
    return cachorro;
}

let labrador = criarCachorro('labrador', 4, 'caramelo');
console.log(labrador);
labrador.latir();

//instanciando classes por new

function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("auuuuuu");
    }
}

let viraLata = new Cachorro('Vira Lata', 4, 'caramelo');
console.log(viraLata);
viraLata.uivar();




