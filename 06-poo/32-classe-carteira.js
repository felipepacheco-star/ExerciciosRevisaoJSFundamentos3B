// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital {
  #saldo = 0;

  adicionarCredito(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  realizarPagamento(valor) {
    if (valor > this.#saldo) {
      console.log("Pagamento recusado: Saldo insuficiente.");
      return;
    }
    this.#saldo -= valor;
  }

  consultarSaldo() {
    return this.#saldo;
  }
}


const minhaCarteira = new CarteiraDigital();

minhaCarteira.adicionarCredito(100);
console.log("Saldo atual:", minhaCarteira.consultarSaldo()); 

minhaCarteira.realizarPagamento(40);
console.log("Saldo após pagamento:", minhaCarteira.consultarSaldo()); 

minhaCarteira.realizarPagamento(80); 
console.log("Saldo final:", minhaCarteira.consultarSaldo()); 