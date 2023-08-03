let cachorro = {
    nome: "João",
    cor: "preto",
    dono: "Ana"
}

const {nome: cnome, cor: ccor, dono: cdono} = cachorro;

console.log(cnome);
console.log(ccor);


let carros = ["ferrari", "fusca", "bmw"];

let [carro1, carro2, carro3] = carros;

console.log(carro1);
console.log(carro2);