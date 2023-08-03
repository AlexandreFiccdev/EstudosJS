class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("au au");
    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let viraLata = new Cachorro('vira lata','sem cor');
console.log(viraLata);

viraLata.setCor = 'caramelo';

console.log(viraLata.getCor);
