function imprimirNoConsole(){
    console.log("ola mundo")
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("o Numero é:"+ num);
}
imprimirUmNumero(2);
imprimirUmNumero(7);
imprimirUmNumero(10);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}
console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("o valor de mult é "+mult);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true) {
        console.log("pode Dirigir");
    }else{
        console.log("não pode dirigir");
    }
}
podeDirigir(19, true);
podeDirigir(16, true);
podeDirigir(20, 1); // o 1 funciona como true e o 0 como false
