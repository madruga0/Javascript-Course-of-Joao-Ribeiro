/* 
Você tem 3 animais de estimação: um gato, um cachorro e papagaio.
Crie uma classe chamada Animal com as seguintes propriedades e métodos:
- Propriedades: nome, peso e especie.
- Métodos: comer(), dormir() e brincar().
- O método comer() deve receber um parâmetro que representa o tipo de alimento que o animal come.
- O método brincar() deve receber um parâmetro que representa o tipo de brinquedo com o qual o animal brinca.
- O método dormir() deve imprimir uma mensagem indicando que o animal está dormindo.
- Crie três instâncias da classe Animal, uma para cada animal de estimação.
*/

class Animal {
  // Properties with constructor
  constructor(name, species, weight) {
    this.name = name;
    this.weight = weight;
    this.species = species;
  }

  eat(food) {
    console.log(`The ${this.species} ${this.name} is eating ${food}.`);
  }

  sleep() {
    console.log(`The ${this.species} ${this.name} is sleeping...`);
  }

  play(toy) {
    console.log(`The ${this.species} ${this.name} is playing with ${toy}.`);
  }
}

// Instances
let parrot = new Animal("Chico", "parrot", 15);
let cat = new Animal("Garfield", "cat", 13);
let dog = new Animal("Negao", "dog", 36);

parrot.play("ball");
dog.eat("sausage");
parrot.eat("cashew nut");
cat.sleep();
