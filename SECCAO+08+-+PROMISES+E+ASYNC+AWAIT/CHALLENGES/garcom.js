/*
Exercício 1: O "Garçom" (A Promise Básica)
Objetivo: Entender como criar uma promessa e usar o .then e .catch.

O que fazer: Crie uma função chamada fazerSuco(fruta).

A lógica:

Se a fruta for "Laranja", a Promise deve resolver após 2 segundos com a frase: "Aqui está seu suco de Laranja 🍊".

Se for qualquer outra fruta, a Promise deve rejeitar imediatamente com: "Desculpe, só temos laranja hoje ❌".

O que treinar: Use .then() para mostrar o suco no console e .catch() para mostrar o erro.


Dica de ouro: Sempre que escrever new Promise((resolve, reject) => { ... }), pense que o resolve é o seu "Sucesso" e o reject é o seu "Deu Ruim".

*/

function fazerSuco(fruta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fruta == "Laranja") {
        resolve("Aqui está seu suco de Laranja 🍊");
      } else {
        reject("Desculpe, só temos laranja hoje ❌");
      }
    }, 2000);
  });
}

fazerSuco("Laranja")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
