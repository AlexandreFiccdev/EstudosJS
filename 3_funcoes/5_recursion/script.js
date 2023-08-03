function recursao(n){
    if(n - 1 < 2){
        console.log("recursão Parou");
    }else if(n % 2 != 0){
        console.log(n+" é numero impar");
        recursao(n - 1)
    }else{
        console.log(n+" é Numero par");
        recursao(n - 2);
    }
}
recursao(39);
recursao(10);
recursao(55)