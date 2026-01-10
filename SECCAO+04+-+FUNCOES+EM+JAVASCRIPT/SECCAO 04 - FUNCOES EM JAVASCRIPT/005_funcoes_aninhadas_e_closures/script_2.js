// Uma closure é uma função que tem lembranças do seu ambiente de execução,
// mesmo quando a função é executada fora desse ambiente.
// Isso significa que uma função interna pode acessar variáveis de uma função externa,
// mesmo depois que a função externa já foi executada.

// Exemplo de closure
function criarContador() {
  let contador = 0; // variável privada

  return () => {
    // função interna (closure)
    contador += 1;
    return contador;
  };
}

const contador1 = criarContador(); // cria um contador
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

contador1();

// closures podem ser usadas para encapsular variaveis
console.log("----------COUNTER----------");
const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    getValue() {
      return count;
    },
  };
};

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log("----------VALUE----------");
console.log(counter.getValue()); // I CAN
console.log(counter.count); // I CAN'T, because it's a 'private' variable;

