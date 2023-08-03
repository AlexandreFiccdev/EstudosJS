//exercicio 02
class CarrinhoDeCompra{
    constructor(itens, qtdTotal, valorTotal){
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.valorTotal = valorTotal;
    }
    adicionarItens(item){

        let contador = 0;
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }
        if(contador == 0){
            this.itens.push(item);
        }
        this.qtdTotal += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }   

    removerItens(item){
        let contador = 0;
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].nome == item.nome){
                if(this.itens[itemCarrinho].qtd > item.qtd){
                    this.qtdTotal -= item.qtd;
                    this.valorTotal -= item.preco * item.qtd;
                    this.itens[itemCarrinho].qtd -= item.qtd;
                    contador = 1;
                }
            }
        }
        if(contador == 0){
            let index = this.itens.findIndex(function(item){return item.id});
            this.itens.splice(index, 1);
            this.qtdTotal -= item.qtd;
            this.valorTotal -= item.preco * item.qtd; 
        }
    }
}

let carrinho1 = new CarrinhoDeCompra([
    {
        id: 1,
        nome:"camisa",
        qtd: 2,
        preco:50
    },
    {
        id: 2,
        nome:"short",
        qtd: 4,
        preco: 40        
    }
],6, 260);
console.log(carrinho1);
carrinho1.adicionarItens({id:3,nome:"tenis",qtd: 1,preco: 300});
console.log(carrinho1);

carrinho1.removerItens({id:1,nome:"camisa",qtd: 1,preco:50});
console.log(carrinho1);
carrinho1.removerItens({id:1,nome:"camisa",qtd: 1,preco:50})
console.log(carrinho1);


