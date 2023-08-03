//exercicio 3

class Endereco{
    constructor(rua,bairro, cidade,estado){
        this.bairro = bairro;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
    }
    set setRua(rua){
        this.rua = rua;
    }
    set setBairro(bairro){
        this.bairro = bairro;
    }
    set setCidade(cidade){
        this.cidade = cidade;
    }
    set setEstado(estado){
        this.estado = estado;
    }
}

let meuEndereco = new Endereco("Luis Pereira", "pioneiras", "Campo Grande", "Mato Grosso do Sul");
console.log(meuEndereco);
meuEndereco.setRua = "Rua portinho"
console.log(meuEndereco);
meuEndereco.setCidade = "rio de janeiro"
console.log(meuEndereco);
