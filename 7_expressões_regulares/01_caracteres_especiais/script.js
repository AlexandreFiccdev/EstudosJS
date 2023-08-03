//(.) aceita qualquer coisa alem de quebra de linha
const pontoRegex = /./;
console.log('.');
console.log(pontoRegex.test("ads122sa"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test("123"));

const dRegex = /\d/; //[0 - 9]
console.log('\d');
console.log(dRegex.test("ads122sa"));
console.log(dRegex.test(" "));
console.log(dRegex.test("asd"));
console.log(dRegex.test("123"));

const dRegex2 = /\D/; //da false se só tiver numeros 
console.log('\D');
console.log(dRegex2.test("ads122sa"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("asd"));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("isso 123"));

const sRegex = /\s/; //serve pra verificar caracteres vazio o. o S faria o inverso
console.log('\s');
console.log(sRegex.test("ads122sa"));
console.log(sRegex.test(" "));
console.log(sRegex.test("asd"));
console.log(sRegex.test("123"));
console.log(sRegex.test("esse eu tenho duvida"));


const wRegex = /\w/; //qualquer caracter alfanumerico. o W faria o inverso
console.log('\w');
console.log(wRegex.test("ads122sa"));
console.log(wRegex.test(" "));
console.log(wRegex.test("asd"));
console.log(wRegex.test("123"));
console.log(wRegex.test("esse eu tenho duvida"));

console.log("\d\d")
const dia = /\d\d/;
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("052") && "052".length == 2);
console.log(dia.test("asd") && "asd".length == 2);
console.log(dia.test("asdsd23") && "asdsd23".length == 2);

const peloMenostresLetras = /\w\w\w/
console.log(peloMenostresLetras.test("asd"));
console.log(peloMenostresLetras.test("as2d2"));
console.log(peloMenostresLetras.test("as"));
console.log(peloMenostresLetras.test("2222"));

//operador not
const nottaz = /[^a-z]/ //nega qualquer string que tem só letras de A a Z
console.log("^")
console.log(nottaz.test("abcsdsdea"));
console.log(nottaz.test("a2bcsds3dea"));

//operador question
const padrao = /Abacax?i/;
console.log("?")
console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));
console.log(padrao.test("Abaaxi"));

const padrao2 = /\d+\w?/;
console.log(padrao2.test("asd"));
console.log(padrao2.test("as2d2"));
console.log(padrao2.test("2222"));

//operador de precisão

const cep = /\d{5}-\d{3}/;
console.log(cep.test("20201-732"));
console.log(cep.test("2021-72"));

const telefone = /\(\d{2}\) \d{4,5}-\d{4}/;

console.log(telefone.test("(65) 90920-2323"));
console.log(telefone.test("90920-2323"));





