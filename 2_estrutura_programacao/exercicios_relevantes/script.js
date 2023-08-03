//exercicio sobre potencia
let baseDois = Math.pow(2, 2);
console.log(baseDois);
let baseTres = Math.pow(3, 2);
console.log(baseTres);
let baseDesoito = Math.pow(18, 2);
console.log(baseDesoito);
let baseZero = Math.pow(0, 2);
console.log(baseZero);

//exercicio 05
let velocidade = 70;

if(velocidade <80){
    console.log("velocidade permitida");    
}else{
    console.log("velocidade acima do permitido");
}

// exercicio 14

for(i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(`${i} e par`);
    }else{
        console.log(`${i} e impar`);
    }
}

// exercicio 15
let num = 15;
let primo = "primo";
for(i = 2;i <= num - 1; i++){
    if(num % i == 0){
        primo = "nao primo";
        break
    }
}
console.log(`${num} e ${primo}`);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const semPares = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    semPares.push(arr[i]);
  }
}

console.log(semPares);

function classificarNumero(numero) {
    if (numero > 0) {
      if (numero % 2 === 0) {
        return "Positivo e Par";
      } else {
        return "Positivo e Ímpar";
      }
    } else if (numero < 0) {
      return "Negativo";
    } else {
      return "Neutro";
    }
  }

console.log(classificarNumero(4)); // Positivo e Par
console.log(classificarNumero(7)); // Positivo e Ímpar
console.log(classificarNumero(-2)); // Negativo
console.log(classificarNumero(0)); // Neutro

