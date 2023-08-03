//exercicio 01
class Banco{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        }else{
            console.log("saldo indisponivel"); 
        }
    }
    
}
let conta1 = new Banco(1000);
conta1.deposito(200);
console.log(conta1.saldo);
conta1.saque(500);
console.log(conta1.saldo);
conta1.saque(2000);
