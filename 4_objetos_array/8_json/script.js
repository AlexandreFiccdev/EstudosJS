let cachorro = {
    "nome": "nasus",
    "cor": "amarelo",
    "dono": "alexandre",
    "irmãos": ["blade", "elise", "qiyana"]
}

let cachorrosTexto = JSON.stringify(cachorro);

console.log(cachorrosTexto);

let cachorroJSON = JSON.parse(cachorrosTexto);

console.log(cachorroJSON);
console.log(cachorroJSON.nome);
