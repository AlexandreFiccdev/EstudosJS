class WordCounter {
    constructor() {}
  
    countWords(str) {
      // Remove espaços em branco adicionais no início e no final da string
      str = str.trim();
  
      // Se a string estiver vazia, o resultado é 0
      if (str === "") {
        return 0;
      }
  
      // Divide a string em palavras usando os espaços em branco como delimitador
      const words = str.split(/\s+/);
  
      // Retorna o número de palavras na string
      return words.length;
    }
  }
  
// Exemplo de uso:
const wordCounter = new WordCounter();
const text = "Esta é uma frase de exemplo.";
console.log(wordCounter.countWords(text)); // Saída: 6
const text2 = "   ";
console.log(wordCounter.countWords(text2))

class Retangulo{
    constructor(largura,altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        let area = this.largura * this.altura;
        return area;
    }
    calcularPerimetro(){
        let perimetro = 2 * (this.largura + this.altura);
        return perimetro;
    }
}
let retangulo = new Retangulo(20,10);
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());

class ContaBancaria{
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        }else{
            console.log("saldo indisponivel"); 
        }
    }
    consultarSaldo(){
        return this.saldo;
    }
}

contaBancaria = new ContaBancaria("2502",400);
contaBancaria.depositar(200);
contaBancaria.sacar(300);
console.log(contaBancaria.consultarSaldo());

class Voo{
    constructor(codigoVoo,origem,destino,assentosDisponiveis){
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }
    reservarAssento(){
        if(this.assentosDisponiveis > 0){
            this.assentosDisponiveis -= 1;
        }else{
            console.log("Não há assentos disponíveis para reserva.");
        }
    }
    consultarAssentosDisponiveis(){
        if(this.assentosDisponiveis === 0){
            console.log("Não há assentos disponíveis para reserva.");
        }else{
            return this.assentosDisponiveis;
        }
    }
}
let voo = new Voo(1,"salvador","campo grande",2);
console.log(voo);
voo.reservarAssento();
voo.reservarAssento();
console.log(voo);
voo.reservarAssento();


class Livro{
    constructor(titulo,autor,disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    emprestar(){
        if(this.disponivel == false){
            console.log("O livro não está disponível para empréstimo.");
        }else{
            this.disponivel = false;
            console.log("O livro já está disponível.");
        }
    }
    devolver(){
        if(this.disponivel == false){
            this.disponivel = true;
        }else{
            console.log("O livro já está disponível.");
        }
    }
    consultarDisponibilidade(){
        if(this.disponivel == true){
            return "Disponível";
        }else if(this.disponivel == false){ 
            return "Indisponível";
        }else{
            return "Disponível";
        }
    }
}