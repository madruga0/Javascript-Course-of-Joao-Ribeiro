/* 
Podemos simplificar o código...
*/

// let success = false; // controla o sucesso da promise

// function getUsers() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         // sucesso
//         resolve([
//           { name: "Joao", age: 25 },
//           { name: "Luis", age: 35 },
//           { name: "Carlos", age: 45 },
//         ]);
//       } else {
//         // falha
//         reject("Falha ao obter os utilizadores");
//       }
//     }, 2000);
//   });
// }

// getUsers().then(
//   (dados) => {
//     console.log(dados);
//   },
//   (erro) => {
//     console.log(erro);
//   },
// );

// fragmentando para entender melhor

// let hasSucessful = true;

// const hasSuccesful = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (hasSucessful) {
//         resolve("sucess");
//       } else {
//         reject("unsucessful");
//       }
//     }, 1000);
//   });
// };

// hasSuccesful().then(
//   (dados) => {
//     console.log(dados);
//   },
//   (erro) => {
//     console.log(erro);
//   },
// );

// let hasSuccess = false;

// function gotSuccess() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (hasSuccess) {
//         resolve("success");
//       } else {
//         reject("rejected");
//       }
//     }, 2000);
//   });
// }

// gotSuccess().then(
//   (data) => {
//     console.log(data)
//   },
//   (error) => {
//     console.error(error)
//   },
// );

const arr = ["Pedro", "Tiago", "Joao"];

function getFirstName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundedName = arr.find((name) => name === "Joao");

      if (foundedName) {
        resolve("Found name: " + foundedName);
      } else {
        reject("Name not found");
      }
    }, 1000);
  });
}

getFirstName()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise finalizada."));

// const arrNumbers = ['1, 2, 3, 4, 5'];

// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const num = arrNumbers.find((num) => num == '1');
//       if (num) {
//         resolve("Number found: ", num);
//       } else {
//         reject("Number not FOUND: ");
//       }
//     }, 1500);
//   });
// }

// getNumber()
//   .then((msg) => {
//     console.log(msg);
//     return msg;
//   })
//   .catch((error) => console.error(error));
