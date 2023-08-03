function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("o parametro nome precisa ser string");
    }else{
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Matheus");
saudacao(5);
