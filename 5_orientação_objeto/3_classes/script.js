let cachorro = {
    patas: 4,
    raca: 'Sem raça definida',
    latir: function(){
        console.log("au au");
    }
}

let dalmata = Object.create(cachorro);
dalmata.latir();

dalmata.raca = "dalmata";

console.log(dalmata.raca);
console.log(cachorro.raca);

let labrador = Object.create(cachorro);
labrador.raca = "labrador";

console.log(labrador.raca);
