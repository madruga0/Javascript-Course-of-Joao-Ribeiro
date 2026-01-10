/*
    1. Crie uma função que retorne se um número é par ou ímpar.
    2. Depois, crie um loop de 10 a 20, e exiba se o número atual é ímpar ou par.
*/

const pairOrOdd = (num) => {
  if (num % 2 == 0) {
    console.log(`${num} is PAIR`);
  } else {
    console.log(`${num} is ODD`);
  }
};

for(let i = 10; i <= 20; i++) {
    pairOrOdd(i)
}
