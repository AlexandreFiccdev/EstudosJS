function verificarNumeroDois(num){
    return new Promise((resolve,reject) => {
        if(num == 2){
            resolve(console.log(`o numero é ${num}`));
        }else{
            reject(new Error("Falhou"));
        }
    });
}

verificarNumeroDois(2);
verificarNumeroDois(3);