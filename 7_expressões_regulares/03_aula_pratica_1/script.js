const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadeCodar"));
console.log(validaDominio.test("horadeCodar.com.br"));
