/* 
Uma forma de lidar com código assíncrono é usar callbacks.
*/

function getUsers(callback) {
  setTimeout(() => {
    callback([
      { name: "Pedro", age: 25 },
      { name: "Madruga", age: 35 },
      { name: "Paulino", age: 45 },
    ]);
  }, 2000);
}

// function getUsers() {
//   setTimeout(() => {
//     ([
//       // objects will here
//     ])
//   }, 2000)
// }

function findUser(name, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.name === name);
    callback(user);
  });
}

// apresentar na consola o objeto com o nome específico
findUser("Pedro", console.log);
findUser("Madruga", console.log);
findUser("Paulino", console.log);

/* 
A função getUsers agora aceita uma função de callback como argumento.
A função de callback é chamada com a lista de utilizadores após o atraso.
Funciona, mas torna o código mais difícil de ler e manter, e adiciona complexidade ao código.
Promises são uma forma melhor de lidar com código assíncrono.
*/

// CODIGO ASSINCRONO -> codigo que nao eh executado numa ordem especifica
