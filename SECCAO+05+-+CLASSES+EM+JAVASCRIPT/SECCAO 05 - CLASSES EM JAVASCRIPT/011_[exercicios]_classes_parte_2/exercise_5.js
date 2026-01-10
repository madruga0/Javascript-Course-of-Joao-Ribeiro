/* 
    Crie uma classe que tenha 4 métodos estáticos:
    - sum(a, b)
    - subtract(a, b)
    - multiply(a, b)
    - divide(a, b)

    Cada método deve devolver a respetiva operação entre a e b.
    Teste todos os métodos com os valores 100 e 20.
*/

class Operations {
    
  static sum(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

let multiply = Operations.multiply(100, 20);
let sum = Operations.sum(100, 20);
let subtract = Operations.subtract(100, 20);
let divide = Operations.divide(100, 20);

console.log(multiply);
console.log(sum);
console.log(subtract);
console.log(divide);
