//falha nas promisses
let p = Promise.resolve(new Error("não deu certo"));
console.log("ai minha pika");

p.then(value => console.log(value))
    .catch(reason => console.log("falhou: "+reason));
