//instanciando classes por new

function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}
Cachorro.prototype.uivar = function(){
    console.log("auuuuuuuuuuuuuuu");
}

Cachorro.prototype.latir = function(){
    console.log("au au ")
}


let viraLata = new Cachorro('Vira Lata', 4, 'caramelo');
console.log(viraLata);
viraLata.uivar();
viraLata.latir();




