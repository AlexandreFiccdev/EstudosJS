class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("au au");
    }
}

let patas = Symbol();
Cachorro.prototype[patas] = 4;
Cachorro.prototype.raca = "Sem raça definida";


let viraLata = new Cachorro('vira Lata','caramelo');

console.log(viraLata.patas);

viraLata.latir();
console.log(Cachorro.prototype.raca);
console.log(viraLata.raca);

console.log(Cachorro.prototype[patas]);
console.log(viraLata[patas]);