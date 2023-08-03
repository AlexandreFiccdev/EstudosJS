let cachorro = {
    patas: 4,
    nome: 'nasus',
    latir: function(){
        console.log('au au');
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();
delete cachorro.nome;
console.log(cachorro);
cachorro.cor = "preto";
console.log(cachorro);

let coleira = {
    gps: true,
    nomeDoDono: "Matheus"
}

Object.assign(cachorro, coleira);
console.log(cachorro)

console.log(Object.keys(cachorro));

cachorro2 = cachorro;
console.log(cachorro == cachorro2);

cachorro2.nomeDoDono = "julio";
console.log(cachorro2);
console.log(cachorro);