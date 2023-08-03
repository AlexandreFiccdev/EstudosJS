// tira todos os espaços em branco da string
let nome = "\n         Alexandre";
let nomeCorrigido = nome.trim();

console.log(nome);
console.log(nomeCorrigido);

// insere caracteres antes da string
let sku = "234";
console.log(sku.padStart(7,"0"));

// divide uma string por um separador e retorna um array
let frase = "o rato roeu a roupa do rei de roma";
let palavras = frase.split(" ");

console.log(frase);
console.log(palavras);

// junta os elementos de um array em uma frase por meio de um separador
let fraseMontada = palavras.join('-');
console.log(fraseMontada);

// repete uma string de acordo com um parametro number
console.log(nomeCorrigido.repeat(5));
