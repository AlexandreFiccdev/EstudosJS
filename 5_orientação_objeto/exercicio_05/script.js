class ContaBancaria{
    constructor(saldoCC, saldoCP, jurosCP){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosCP = jurosCP;
    }
    deposito(valor){
        this.saldoCC += valor;
    }
    saque(valor){
        if(valor <= this.saldoCC){
            this.saldoCC -= valor;
        }else{
            console.log("saldo indisponivel"); 
        }
    }
    transferirDaPoupanca(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }    
    transferirDaCorrete(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }    
    mesAniversario(){
        this.saldoCP = this.saldoCP + (this.saldoCP * this.jurosCP);
    }

}

class ContaEspecial extends ContaBancaria{
    constructor(saldoCC, saldoCP, jurosCP){
        super(saldoCC,saldoCP,jurosCP);
        this.jurosCP = this.jurosCP * 2;
    }
}

let contaBancaria = new ContaBancaria(200,500,0.14);
console.log(contaBancaria);
contaBancaria.deposito(500);
console.log(contaBancaria);
contaBancaria.transferirDaCorrete(150)
console.log(contaBancaria);
contaBancaria.transferirDaPoupanca(340);
console.log(contaBancaria);
contaBancaria.mesAniversario();
contaBancaria.mesAniversario();
contaBancaria.mesAniversario();
console.log(contaBancaria);
let contaEspecial = new ContaEspecial(200, 500, 0.14);
contaEspecial.deposito(500);
contaEspecial.transferirDaCorrete(150)
contaEspecial.transferirDaPoupanca(340);
contaEspecial.mesAniversario();
contaEspecial.mesAniversario();
contaEspecial.mesAniversario();
console.log(contaEspecial);