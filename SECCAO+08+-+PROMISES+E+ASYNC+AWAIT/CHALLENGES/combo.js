/**
 Exercício 2: O "Combo" (Encadeamento de .then)
    Objetivo: Entender que o resultado de um .then pode ser passado para o próximo. No React, fazemos isso para transformar dados da API.

    O que fazer: Use a mesma função fazerSuco do exercício anterior.

    A lógica:

    No primeiro .then(), você recebe a frase do suco.

    Transformação: Retorne o tamanho (quantidade de letras) dessa frase.

    No segundo .then(), você recebe esse número e imprime: "O nome do pedido tem X caracteres".

    O que treinar: O retorno de valores entre blocos .then.
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
    return message.length; // variavel para os proximos then's
  })
  .then((message) => {
    console.log(`O nome do pedido tem ${message} caracteres`);
  })
  .catch((error) => console.error(error));
