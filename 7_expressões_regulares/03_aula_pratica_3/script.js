const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1900-2023]/;


console.log(validarDataNasc.test("20/02/2002"));
console.log(validarDataNasc.test("5/2/2002"));
console.log(validarDataNasc.test("99/99/9999"));
