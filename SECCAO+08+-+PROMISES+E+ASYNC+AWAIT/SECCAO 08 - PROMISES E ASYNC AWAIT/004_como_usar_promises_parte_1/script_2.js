/* 
Vamos tornar o código mais conciso utilizando a sintaxe de funções de seta (arrow functions).
*/

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Pedro", age: 23 },
        { name: "Madruga", age: 24 },
      ]);
    }, 3000);
  })
}

const prom = getUsers();

prom.then( users => {
    console.log('Utilizadores: ', users);
});

// ou

getUsers().then(users => {
    console.log('Utilizadores: ', users);
});