/**
Desafio 1: O Filtro Assíncrono

Imagine que você tem uma lista de usuários e precisa simular uma busca no banco de dados que demora 1.5 segundos.

Tarefa: Crie uma função chamada buscarUsuariosMaioresDeIdade que:

Receba um array de objetos: 
const pessoas = [{nome: "Ana", idade: 17}, {nome: "Beto", idade: 22}, {nome: "Carla", idade: 16}];

Retorne uma Promise.

Após 1.5s, a Promise deve dar resolve apenas com as pessoas que têm idade >= 18.

Se não houver ninguém maior de idade, dê um reject com a mensagem "Nenhum adulto encontrado".
 */

// function buscarusuariosMaioresDeIdade
// const arr = objectList

const people = [
  {
    name: "Chico",
    age: 13,
  },
  {
    name: "Joao",
    age: 19,
  },
  {
    name: "Pedro",
    age: 33,
  },
];

function filterByMajority() {
  return new Promise((resolve, reject) => {
    const peopleMajority = people.filter((people) => people.age >= 18);
    setTimeout(() => {
      if (peopleMajority.length) {
        resolve(peopleMajority);
      } else {
        reject("Doesn't have people ");
      }
    }, 1500);
  });
}

filterByMajority()
  .then((newMajorityArr) => {
    console.log(newMajorityArr);
    return people.length;
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log("End of PROMISE"));
