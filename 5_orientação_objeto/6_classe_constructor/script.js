/*class Cachorro {
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let viraLata = new Cachorro('vira Lata',4,'caramelo');

console.log(viraLata)*/

class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("au au");
    }
}

Cachorro.prototype.patas = 4;
Cachorro.prototype.raca = "Sem raça definida";

let viraLata = new Cachorro('vira Lata','caramelo');

console.log(viraLata.patas);

viraLata.latir();
console.log(Cachorro.prototype.raca);
console.log(viraLata.raca);