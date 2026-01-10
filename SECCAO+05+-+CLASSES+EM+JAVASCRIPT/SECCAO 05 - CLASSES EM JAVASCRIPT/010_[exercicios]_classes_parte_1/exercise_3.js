/* 
    Crie uma classe Human, com apenas uma propriedade: name.
    Esta propriedade deve ser privada e acessível apenas através de um getter e setter.
    Instancie um objeto desta classe e teste o getter e o setter.
*/

class Pessoa {
  #name = "";

  constructor(name) {
    this.#name = name;
  }

  get getName() {
    return this.#name;
  }

  set setName(value) {
    this.#name = value;
  }
}

let person = new Pessoa("Pedro");
console.log(person.getName);
person.setName = "Madruga";
console.log(person.getName);
