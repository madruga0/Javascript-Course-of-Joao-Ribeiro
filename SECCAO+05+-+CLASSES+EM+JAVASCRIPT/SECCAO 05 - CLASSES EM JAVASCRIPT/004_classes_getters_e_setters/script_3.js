// Vamos imaginar que temos uma classe que simboliza uma conta bancária.
// A classe vai ter uma propriedade privada: #saldo.
// Vai ter um método para sacar dinheiro: sacarDinheiro(valor).
// O método vai controlar se o valor a sacar é maior que o saldo disponível.

// o nome das classes deve começar com letra maiúscula

class BankAccount {
  #balance;

  get getBalance() {
    return "Your balance R$" + this.#balance;
  }

  set setBalance(value) {
    this.#balance = value;
  }

  sacarDinheiro(valor) {
    if (this.#balance >= valor) {
      let saldoFinal = (this.#balance -= valor);
      console.log("Your balance: R$" + saldoFinal);
    } else {
      console.log("Saldo insuficiente!");
    }
  }
}

let bank = new BankAccount();

bank.setBalance = 4500;
console.log(bank.getBalance);

bank.sacarDinheiro(850);
bank.sacarDinheiro(1000);
