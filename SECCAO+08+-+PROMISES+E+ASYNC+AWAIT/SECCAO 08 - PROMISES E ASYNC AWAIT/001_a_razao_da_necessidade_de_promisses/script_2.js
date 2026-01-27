/* 
Vamos simular um atraso na função getUsers
*/

function getUsers() {
  setTimeout(() => {
    return [
      { name: "Pedro", age: 23 },
      { name: "Madruga", age: 24 },
      { name: "Paulino", age: 25 },
    ];
  }, 2000);
    // a espera comprometeu a devolucao de dados
}

/*
A função getUsers agora utiliza a função setTimeout para simular um atraso de 2 segundos.
Vamos assumir que este foi o tempo necessário para obter os utilizadores do servidor. Uma consulta a uma base de dados, por exemplo.
*/

function findUser(name) {
  const users = getUsers();
  return users.find((user) => user.name === name);
}

console.log(findUser("Pedro"));
console.log(findUser("Madruga"));
console.log(findUser("Paulino"));

/*
A função findUser agora devolve undefined. => 'nao consigo ler propriedades de uma colecao que nao esta definida'
A função getUsers não espera que os utilizadores sejam obtidos.
*/
