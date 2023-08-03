let nome = "matheus";

for(let i = 0; i < 100; i += 1){

    if(i == 3){
        nome = "joao";
    }

    else if(i == 5 && nome == "joao"){
        console.log("O nome e joao, pode parar");
        break;
    }
    console.log(i);
}

