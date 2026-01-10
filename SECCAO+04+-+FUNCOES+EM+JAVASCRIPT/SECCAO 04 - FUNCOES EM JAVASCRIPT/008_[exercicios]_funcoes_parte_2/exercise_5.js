/*
    1. Crie uma função para calcular a soma de 2 números.

    2. Agora crie um loop for com 10 iterações, e dentro do loop chame a função para somar
    o índice do loop com o número 5.
*/

const sum = (a, b) => a + b;

for (let i = 0; i <= 10; i++) {
  console.log(sum(5, i));
}
// i => indice do loop
