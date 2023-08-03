const validarEMail = /\w+@\w+\.\w+/;

console.log(validarEMail.test("matheus@gmail.com"));
console.log(validarEMail.test("alexandre25@hotmail.com"));
console.log(validarEMail.test("hotmail.com"));
