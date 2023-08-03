let idade = prompt("qual sua idade?");

if (idade == null){
    console.log("valor nulo");
}else if(idade < 18){
    console.log("menor de idade");
}else {
    console.log("maior de idade");
}