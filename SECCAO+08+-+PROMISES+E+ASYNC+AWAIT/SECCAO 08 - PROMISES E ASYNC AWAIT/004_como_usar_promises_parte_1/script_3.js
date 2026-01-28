/* 
O exemplo anterior devolve sempre valores com sucesso.
Mas e se a promise falhar?
Vamos simular uma falha na promise e ver como podemos lidar com isso.
*/

let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        // sucesso
        resolve([
          { name: "Pedro", age: 23 },
          { name: "Madruga", age: 24 },
        ]);
      } else {
        // falha
        reject("Falha ao receber os nomes");
        console.error(error);
      }
    }, 3000);
  });
}

const onSuccess = users => {
  console.log("Utilizadores: ", users);
};


// const onSuccess = users => {
//     console.log('Utilizadores: ', users);
// }

const onError = (error) => {
  console.log("Erro", error);
};

const prom = getUsers();
prom.then(onSuccess, onError);