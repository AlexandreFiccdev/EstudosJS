const cachorro = {
    raca: "Sem raça definida",
    uivar: function(){
        console.log("auuuuuuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "a raça é " + this.raca;
    }
}

cachorro.uivar();
cachorro.rosnar();
console.log(cachorro.raca);
cachorro.setRaca("pastor belga");
console.log(cachorro.raca);
console.log(cachorro.getRaca());
