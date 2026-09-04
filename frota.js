/* 
=========================================================
RELATÓRIO DE NIVELAMENTO - COMPOSIÇÃO E POLIMORFISMO
Engenheira de Software: Laís Alves de Oliveira

1. O que é um Array de Objetos? Como ele ajudou a organizar o aeroporto em vez de criar 50 variáveis separadas para cada avião?
R: Array de objetos é uma lista que armazena varios objetos juntos. No caso do aeroporto, em vez de criar 50 variáveis separadas deu pra pôr todos os aviões dentro de um único array, deixando o código mais organizado.

2. Defina Polimorfismo com suas palavras. No laço 'forEach', nós chamamos o comando 'aviao.calcularTaxa()' UMA única vez. Como o JavaScript soube que tinha que cobrar valores diferentes para o VIP e para o Cargueiro?
R: polimorfismo é quando o mesmo comando pode ter comportamentos diferentes. Cada classe filha sobrescreve o calcularTaxa() da classe mãe, o JavaScript executa o método correspondente ao tipo de avião, então VIP e Cargueiro calculam taxas diferentes.
=========================================================
*/
// 1. AS CLASSES BASE
class Voo {
    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
    }

    // Método padrão de cobrança
    calcularTaxa() {
        return 50.00; 
    }
}

class VooVIP extends Voo {
    constructor(codigo, destino, servicoLuxo) {
        super(codigo, destino);
        this.servicoLuxo = servicoLuxo;
    }

    // [DESAFIO 1 : APLICAR POLIMORFISMO AQUI PARA COBRAR R$ 300,00]
    calcularTaxa() {
        return 300.00;
    }
}

class VooCarga extends Voo {
    constructor(codigo, destino, pesoToneladas) {
        super(codigo, destino);
        this.pesoToneladas = pesoToneladas;
    }

    // [DESAFIO 1: APLICAR POLIMORFISMO AQUI PARA COBRAR R$ 100,00 POR TONELADA]
    calcularTaxa() {
        return this.pesoToneladas * 100.00;
    }
}


// ========================================================
// 2. O SISTEMA (DOM E ARRAYS)
// ========================================================

// DESAFIO 2: Criar uma lista (Array) contendo 3 instâncias diferentes!
let frotaNoPatio = [
    new Voo("G3-100", "São Paulo"),
    new VooVIP("VIP-777", "Madri", "Open Bar e Poltrona Cama"), 
    new VooCarga("BR-99", "Manaus", 12) 
];

let botao = document.getElementById("btnCalcular");
let tela = document.getElementById("telaRelatorio");

botao.addEventListener("click", function() {
    tela.innerHTML = "<h3>Relatório de Arrecadação:</h3>";
    
    // DESAFIO 3: O Laço de Repetição (forEach)
    // Vamos percorrer a frota inteira e mandar cada um calcular sua taxa
    frotaNoPatio.forEach(aviao => {
        
        let valorDaTaxa = aviao.calcularTaxa();
        
        tela.innerHTML += `
            <div class="card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 5px;">
                Voo: ${aviao.codigo} | Destino: ${aviao.destino} <br>
                <strong>Taxa a Pagar: R$ ${valorDaTaxa.toFixed(2)}</strong>
            </div>
        `;
    });
});