//exec

const digitos = /\d+/;

console.log(digitos.exec("tem o numero 100 aqui"));
console.log(digitos.exec("tem o numero aqui"));

//match

const frase = "O numero 100 esta aqui".match(/\d+/);
const frase2 = "o numero esta aqui".match(/\d+/);

console.log(frase);
console.log(frase2);

//choice pattern

const reg = /\w+: (Matheus|João|Maria)/;

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Alexandre"));