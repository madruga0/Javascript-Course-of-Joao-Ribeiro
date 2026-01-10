/* 
    Crie uma classe Animal apenas com duas propriedades: espécie e nome.
    Esta classe deve ter um método para mostrar ambas as propriedades:
    "Este animal é um(a) [espécie] e o seu nome é [nome]."
    Crie duas subclasses, Dog e Bird, que herdam da classe Animal.
    Instancie um objeto de cada classe e teste-os.
*/

class Animal {
  constructor(species, name) {
    this.name = name;
    this.species = species;
  }

  showInfo() {
    return `Este animal eh um(a) ${this.species}, e o seu nome eh ${this.name}`;
  }
}

class Dog extends Animal {
//   bark() {
//     console.log("woof woof");
//   }
}

class Bird extends Animal {
//   sing() {
//     console.log("cantando");
//   }
}

const dog = new Dog("cachorro", "Rex");
const bird = new Bird("passaro", "Kiko");

console.log(bird.showInfo());
bird.sing();
console.log(dog.showInfo());
dog.bark();
