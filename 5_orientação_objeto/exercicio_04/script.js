//exercio 04
class Carro{
    constructor(marca, cor, gasolina, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }
    dirigirCarro(distancia){
        let gasolinaGasta = distancia / this.consumo;
        this.gasolina -= gasolinaGasta
    }
    abastecerCarro(quantidade){
        this.gasolina += quantidade;
    }
}

let fusca = new Carro("fusca","amarelo",20, 10);
console.log(fusca);
fusca.abastecerCarro(15);
console.log(fusca);
fusca.dirigirCarro(25);
console.log(fusca);
fusca.dirigirCarro(15);