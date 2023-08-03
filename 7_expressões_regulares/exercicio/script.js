//exercicio 1
const Maiuscula = /[A-Z]/;
console.log("1");
console.log(Maiuscula.test("ABCD"));
console.log(Maiuscula.test("abcderfg"));
console.log(Maiuscula.test("12abc312"));

//exercicio 2

const id = /\d+\ID\b/;
console.log("2");
console.log(id.test("2353ID"));
console.log(id.test("3ID"));
console.log(id.test("2353ID245"));
console.log(id.test("2353"));
console.log(id.test("id"));

//exercicio 3

const marca = /Marca: (Nike|Adidas|Puma|Asics)/;
console.log("3");
console.log(marca.test("Marca: Nike"));
console.log(marca.test("Marca: Adidas"));
console.log(marca.test("Marca: Puma"));
console.log(marca.test("Marca: Asics"));
console.log(marca.test("Marca: Versati"));
console.log(marca.test("Nike"));


//exercicio 4

const validaIP = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
console.log("4");
console.log(validaIP.test("155.100.100.10"));
console.log(validaIP.test("127.0.0.100"));
console.log(validaIP.test("260.0.0.100"));

//exercicio 5

const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log("5");
console.log(validaUsuario.test("um dois tres quatro cinco seis"));
console.log(validaUsuario.test("alexandre92"));
console.log(validaUsuario.test("al"))
console.log(validaUsuario.test("alexandr_92-"));
console.log(validaUsuario.test("alexandr_92@"));