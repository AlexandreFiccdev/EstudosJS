function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("por favor, passe só os numeros para o programa");
    }else{
        return number;
    }
}
let number = prompt("digite um numero: ");
checarNumero(number);
