num = [10,2,12,13,14];

console.log(num[0]);
console.log(num[2]);
console.log(num[3]);

//exercicio 02
num2 = [10,2,12,13];
num3 = [10,2];
console.log(num2.length);
console.log(num3.length);

//exercicio 03

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}
console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);

//exercicio 04

onibus.janelas = 20;
console.log(onibus);
delete onibus.rodas;
console.log(onibus);

//exercicio 05

nomes = ["julio", "ana", "pedro", "alexandre", "marcos"];

if(nomes.includes("alexandre")){
    console.log("o nome alexandre se encontra no array")
}

//exercicio 06
nomes2 = ["julio", "ana", "pedro", "alexandre", "marcos", "maria"];
sobrenomes = ["silva", "arruda", "ferreira"];

function verificaElementos(elementos){
    if(elementos.length < 5){
        console.log("poucos elementos")
    }else{
        console.log("muitos elementos")
    }
}
verificaElementos(nomes2);
verificaElementos(sobrenomes);

//exercicio 07
nomes.forEach(nome => {
    console.log("O nome é "+nome);
});


//exercicio 08
let jogador = {
    "nick": "ficc",
    "elo": "mestre",
    "lane": "jungle"
};

console.log(jogador.nick);
console.log(jogador.elo);
console.log(jogador.lane);

//exercicio 09

let frase = "queria comer minha namorada";
let palavras = frase.split(" ");
for(let i = 0;i < palavras.length; i++){
    console.log(palavras[i])
}

//exercicio 10

let calculadora = {
    somar: function(a,b){
        return a+b;
    },
    dividir: function(a,b){
        return a/b;
    },
    subtrair: function(a,b){
        return a - b;
    },
    multiplicar: function(a,b){
        return a * b;
    }
}
console.log(calculadora.somar(10,2));
console.log(calculadora.dividir(10,2));
console.log(calculadora.multiplicar(10,2));
console.log(calculadora.subtrair(10,2));



const arr = []

for(let i = 0; i <= 4; i++){
    arr.push(i + 5);
}

console.log(arr);


function findMaxNumber(...args){
    let maior;
    for(let i = 0; i < args.length; i++){
        if(i === 0){
            maior = args[i];
        }else{
            if(maior < args[i]){
                maior = args[i];
            }
        }
    }
    return(maior);
}

console.log(findMaxNumber(1,2,3,4,5));


function sumUniqueNumbers(...args){
    let novoArray = [];
    let jaRemovido = [];
    for(let i = 0; i < args.length; i++){
        if(!novoArray.includes(args[i])){
            novoArray.push(args[i]);
        }else{
            index = novoArray.indexOf(args[i]);
            novoArray.splice(index, 1);
            jaRemovido.push(args[i]);
        }
    }
    let soma = 0;
    for(let i = 0; i < novoArray.length; i++){
        if(!jaRemovido.includes(novoArray[i])){
            soma += novoArray[i];
        }
    }
    return soma;
}

console.log(sumUniqueNumbers(0));

function removeDuplicates(...args){
    let novoArray = [];
    let arrayFinal = [];
    let jaRemovido = [];
    for(let i = 0; i < args.length; i++){
        if(!novoArray.includes(args[i])){
            novoArray.push(args[i]);
        }else{
            index = novoArray.indexOf(args[i]);
            novoArray.splice(index, 1);
            jaRemovido.push(args[i]);
        }
    }
    for(let i = 0; i < novoArray.length; i++){
        if(!jaRemovido.includes(novoArray[i])){
            arrayFinal.push(novoArray[i]);
        }
    }
    return arrayFinal;   
}

console.log(removeDuplicates(1,1,1,1,1,1))

