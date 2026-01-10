// usar 'this' num método de uma classe
class Person {

  constructor(name) {
    this.name = name;
  }

  // this seguido de um ponto refere-se à propriedade name do objeto
  sayHello() {
    console.log("Olá, o meu nome é " + this.name);
  }

  test() {
    this.sayHello();
  }
}

let person = new Person("Pedro");

person.name;
person.test();
