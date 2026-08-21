/* 
=========================================================
RELATÓRIO DE INTEGRAÇÃO VISUAL
Engenheira de Software: Laís Alves De Oliveira

1. Como o JavaScript (usando o innerHTML) provou para você que o Objeto criado com o 'new' realmente estava vivo e funcionando?
R:Ao clicar no botão, apareceu na tela que o voo G3-100 decolou para Tóquio. Isso mostra que o objeto estava funcionando, porque o método decolar() conseguiu ser executado. Também apareceu o combustível do avião.

2. Por que colocamos a hashtag (#) antes da variável combustível? O que isso previne?
R:O # antes de combustível é para deixar essa variável privada. Assim, outras partes do código não conseguem mexer nela diretamente. Isso protege o valor do combustível, impedindo que ele seja acessado ou alterado de fora da classe.

3. Como a Herança ('extends') evitou que você tivesse que digitar todo o código de origem e destino de novo na classe VooVIP?
R:O extends fez a classe VooVIP herdar o que já existia na classe Voo. O super() aproveitou o código que já configurava o código do voo e o destino. Assim, só foi necessário colocar as coisas que eram específicas do voo VIP, como a categoria e o champagne.
=========================================================
*/
// 1.Classe
class Voo {
    #combustivel; 

    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
        this.#combustivel = 100; 
    }

    //DESAFIO 2
    get lerCombustivel() {
        return this.#combustivel;
    }

    decolar() {
        return `O voo ${this.codigo} decolou para ${this.destino}!`;
    }
}

// 2.Herança
class VooVIP extends Voo {
    constructor(codigo, destino, categoria) {
        super(codigo, destino);
        this.categoria = categoria;
    }

    servirChampagne() {
        return `Servindo champagne de classe ${this.categoria} aos passageiros VIP!`;
    }
}


// CONECTANDO A LÓGICA COM A TELA (DOM)

let tela = document.getElementById("telaPainel");
let botaoNormal = document.getElementById("btnNormal");
let botaoVip = document.getElementById("btnVip");

// DESAFIO 1
botaoNormal.addEventListener("click", function() {
    // a) Criar o avião
    let meuPrimeiroVoo = new Voo("G3-100", "Tóquio");
    
    // b) Decolar
    tela.innerHTML = meuPrimeiroVoo.decolar();
    
    // c) Segurança (Desafio 2)
    tela.innerHTML += `<br>Combustível seguro: ${meuPrimeiroVoo.lerCombustivel}%`;
    tela.style.backgroundColor = "#a1cccf7"; 
});

// DESAFIO 3
botaoVip.addEventListener("click", function() {
    //Criar Jato vip
    let meuJato = new VooVIP("VIP-01", "Paris", "Ouro");
    
    //Servir champagne
    tela.innerHTML = meuJato.decolar();
    tela.innerHTML += `<br> ${meuJato.servirChampagne()}`;
    tela.style.backgroundColor = "goldenrod"; 
});