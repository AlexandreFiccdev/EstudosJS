function* criadorID(){
    let id = 0;
    while(true){
        yield id++;
    }
};

let gerarID = criadorID();

console.log(gerarID.next().value);
console.log(gerarID.next().value);
console.log(gerarID.next().value);
console.log(gerarID.next().value);
console.log(gerarID.next().value);
console.log(gerarID.next().value);
console.log(gerarID.next().value);

