/* 
No passado, para lidar com operações assíncronas, utilizávamos funções de callback.
No entanto, esta abordagem pode levar ao callback hell, onde o código se torna difícil de ler e manter.
Imagina que queres ler um ficheiro, depois processar os dados e, por fim, imprimir o resultado.
Terias de aninhar três funções de callback, o que pode ser difícil de ler.

No ES6, temos Promises, que são objetos que representam a conclusão (ou falha) eventual de uma operação assíncrona.

O ES2017 introduziu as palavras-chave async/await, que tornam mais fácil trabalhar com promises.
Tecnicamente, async/await é apenas uma sintaxe simplificada para promises, mas torna o código mais fácil de ler e escrever.
*/

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolvido");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("a chamar...");
  const result = await resolveAfter2Seconds(); // o resultado esta esperando a nova promessa, que apos 2s ira retornar alguma coisa
  console.log(result);
}

asyncCall(); // nao vao ficar a espera e serao enviados para as nossas API's
console.log("fim");

// parece não ser grande coisa, mas é uma grande vantagem quando tens de encadear múltiplas promises

/**
 * Promise para entender de fato o conceito
 */

// function fazerPedido(prato) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (prato == "lasanha") {
//         resolve("🍕 Pizza saindo!");
//       } else {
//         reject("❌ Desculpe, só temos pizza hoje.");
//       }
//     }, 1000);
//   });
// }

// // async function restaurante() {
// //   try {
// //     console.log("Preparando");
// //     await fazerPedido("lasanha");
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // restaurante();

// async function restaurante() {
//   try {
//     console.log("Garçom: Anotando pedido...");

//     // 1. Chamando o sucesso (Pizza)
//     const pratoPronto = await fazerPedido("pizza");
//     console.log(pratoPronto);

//     // 2. Chamando algo que não tem (Lasanha) para testar o erro
//     console.log("Garçom: Vou pedir uma lasanha agora...");
//     const segundoPrato = await fazerPedido("lasanha");
//     console.log(segundoPrato);
//   } catch (error) {
//     // Quando o pedido da lasanha falhar, o código pula direto para cá
//     console.error("Cozinha diz:", error);
//   } finally {
//     console.log("Garçom: Volte sempre!");
//   }
// }

// restaurante();

// // Uma Promise comum
// function pegarDados() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Dados da API"), 1000);
//   });
// }

// // O Essencial do Async/Await
// async function execucao() {
//   console.log("Passo 1: Começou");

//   // Em vez de .then(), usamos o await.
//   // O que estava no resolve() vai direto para a variável 'resultado'
//   const resultado = await pegarDados();

//   console.log("Passo 2: " + resultado);
//   console.log("Passo 3: Fim");
// }

// execucao();
