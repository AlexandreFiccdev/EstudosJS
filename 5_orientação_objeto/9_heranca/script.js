class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero {
    constructor(patas,raca){
        super(patas,patas);
        this.raca = raca;
    }
    latir(){
        console.log("au au");
    }
}

let viraLata = new Cachorro(4, "vira lata");

console.log(viraLata.patas);

viraLata.latir();

console.log(new Cachorro instanceof Mamifero);