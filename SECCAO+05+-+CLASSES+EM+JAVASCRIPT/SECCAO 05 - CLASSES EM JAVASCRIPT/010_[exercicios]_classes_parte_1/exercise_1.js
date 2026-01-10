/* 
    Crie uma classe simples com duas propriedades, nome e apelido, e um método que
    devolva o nome completo. Instancie esta classe e teste o seu método.
*/

class Person {

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  fullName() {
    console.log(`My name is ${this.name} ${this.lastName}`);
  }
}

let person = new Person("Pedro", "Madruga");
person.fullName();
