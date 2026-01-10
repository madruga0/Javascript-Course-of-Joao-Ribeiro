/* 
    Classes - Encapsulamento
*/

// Encapsulamento

class Person {
  #name = "Pedro"; // propriedade privada
  #age = 100; // propriedade privada

  // método privado
  #showAge() {
    console.log(this.#age);
  }

  #showName() {
    console.log(this.#name);
  }

  test() {
    this.#showAge();
    this.#showName();
  }
}

// o método #showAge() não é acessível fora da classe.
// se tentarmos chamá-lo, iremos obter um erro

let person1 = new Person();
// person1.#showAge(); // SyntaxError: O campo privado '#showAge' deve ser declarado numa classe envolvente
person1.test(); // posso chamar metodos privados atraves de um metodo public utilizando o 'this'
