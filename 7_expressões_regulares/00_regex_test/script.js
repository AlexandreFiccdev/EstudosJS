const reg1 = new RegExp('bola');
const reg2 = /bola/;
let text = 'tem bola na cesta';

console.log(reg1.test("tem bola"));
console.log(reg1.test("não tem"));
console.log(reg2.test("tem bola"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));
console.log(/bola/.test("oia se tem bola"));

//conjunto de caracteres

const reg3 = /[12345]/;

console.log(reg3.test("temos o numero 6"));
console.log(reg3.test("temos o numero 2"));
console.log(reg3.test("temos o numero 23"));
console.log(reg3.test("temos o numero 60"));

const reg4 = /[0-9]/;
console.log(reg4.test("temos o numero 6029292982899"));
console.log(reg4.test("temos o numero"));

