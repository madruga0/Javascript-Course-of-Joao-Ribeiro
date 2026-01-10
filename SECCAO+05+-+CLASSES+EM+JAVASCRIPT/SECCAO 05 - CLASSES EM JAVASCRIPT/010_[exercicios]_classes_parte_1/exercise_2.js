/* 
    Crie uma classe Human com as propriedades nome e idade.
    A classe deve conter um método que devolva a frase:
    "Olá, o meu nome é [nome] e tenho [idade] anos."
    Crie dois objetos desta classe e teste o método criado.
*/

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  selfPresentation() {
    console.log(
      `Hello, my name is ${this.name} and I have ${this.age} years old.`
    );
  }
}

let human1 = {
  name: "Pedro",
  age: 2,
  selfPresentation: () => {
    console.log(
      `Hello, my name is ${human1.name} and I have ${human1.age} years old.`
    );
  },
};

let human2 = {
  name: "Marciano",
  age: 42,
  selfPresentation: () => {
    console.log(
      "Hello, my name is " +
        human2.name +
        " and I have " +
        human2.age +
        " years old."
    );
  },
};

human1.selfPresentation();
human2.selfPresentation();
