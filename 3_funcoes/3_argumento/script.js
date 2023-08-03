//argumento opcional
function soma(a,b) {

    if(a === undefined || b === undefined){
        console.log("esta função precisa ter os dois argumentos");
    }else{
        return a+b;
    }
}
console.log(soma(23));
console.log(soma(23,5));

function saudacao(nome, idade) {
    if(idade === undefined){
        console.log("Ola "+nome);
    }else{
        console.log("ola "+nome+" voce tem "+idade+" anos.");
    }
}
saudacao("joão");
saudacao("joão", 25);

//argumento default

function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));