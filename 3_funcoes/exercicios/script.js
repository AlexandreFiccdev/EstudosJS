//exercicio 01

function imprimirMensagem(){
    console.log("Hello World!");
}
imprimirMensagem();

//exercicio 02

function idade(idade){
    console.log(`Voce tem ${idade} anos`);
}

idade(21);

//exercicio 03

function soma(a,b){
    return a + b;
}

console.log(soma(10,12));

//exercicio 04

function numeroAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(2));


// exercicio 05
function autoEscola(idade){
    if(idade < 18){
        console.log("não pode dirigir");
    }else{
        console.log("pode dirigir");
    }
}

autoEscola(20);
autoEscola(17);

// exercicio 06

function tipoDado(dado){
    if(typeof(dado) == typeof(10)){
        console.log(dado+" é do tipo number")
    }else if(typeof(dado) == typeof("ola")){
        console.log(dado+" é do tipo string")
    }else if(typeof(dado) == typeof(true)){
        console.log(dado+" é do tipo boolean")
    }
}
tipoDado(25);
tipoDado("cu");
tipoDado(false);

//exercicio 07

function numNegativo(num){
    return Math.abs(num);
}
console.log(numNegativo(-25));
console.log(numNegativo(5));
console.log(numNegativo(-12.5));

//exercicio 08
function tamanhoTexto(texto){
    if(texto.length > 10){
        console.log("Texto Muito Longo");
    }else{
        console.log("Texto dentro do limite");
    }
}

tamanhoTexto("esse texto ta muito grande");
tamanhoTexto("esse curto");

//exercicio 09

function potencia(a,b){
    return Math.pow(a,b);
}
console.log(potencia(2,2));
console.log(potencia(3,3));

//exercicio 10

function pares(num){
    for(i = num; i >= 1; i--){
        if(i % 2 == 0){
            console.log(i+" é par");
        }
    }
}

pares(20);

//inverte palavras
function reverseString(texto){
    let end = texto.length - 1;
    let novoTexto = "";
    while (end > -1) {
        novoTexto = novoTexto + texto[end]
        end--
    }
    return novoTexto;
}
console.log(reverseString("boi"));
console.log(reverseString("alexandre"));


//conta vogais
function countVowels(texto){
    texto = texto.toLowerCase();
    let end = texto.length - 1;
    let vogais = 0;
    while(end > -1) {
        if(texto[end] == "a" || texto[end] == "e" || texto[end] == "i" || texto[end] == "o" || texto[end] == "u"){
            vogais += 1
        }
        end--
    }
    return vogais;
}

console.log(countVowels("abAiXA e MamA"))
console.log(countVowels("abU ebA ibE oBI ubO"))



  

