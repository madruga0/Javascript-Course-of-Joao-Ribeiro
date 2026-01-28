/**
 * REFACA O DESAFIO 1
 * 
Desafio 1: O Filtro Assíncrono

Imagine que você tem uma lista de usuários e precisa simular uma busca no banco de dados que demora 1.5 segundos.

Tarefa: Crie uma função chamada buscarUsuariosMaioresDeIdade que:

Receba um array de objetos: 
const pessoas = [{nome: "Ana", idade: 17}, {nome: "Beto", idade: 22}, {nome: "Carla", idade: 16}];

Retorne uma Promise.

Após 1.5s, a Promise deve dar resolve apenas com as pessoas que têm idade >= 18.

Se não houver ninguém maior de idade, dê um reject com a mensagem "Nenhum adulto encontrado".
 */

const people = [
  {
    name: "Chico",
    age: 19,
  },
  {
    name: "Joao",
    age: 21,
  },
  {
    name: "Pedro",
    age: 16,
  },
  {
    name: "Maria",
    age: 9,
  },
];

const searchByMajority = () => {
  const majorityPeople = people.filter((person) => person.age >= 18);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (majorityPeople) {
        resolve(majorityPeople);
      } else {
        reject("Doesn't have adults");
      }
    }, 1500);
  });
};

/*
Desafio 2: Transformação de Dados (Encadeamento)
No React, raramente usamos o dado exatamente como ele vem da API. Precisamos transformá-lo.

Tarefa: Dado o resultado do Desafio 1 (o array de adultos), encadeie um .then() que:

Receba a lista de adultos.

Transforme essa lista em um array de apenas nomes (strings).

Exemplo de saída: ["Beto", "Marcelo"].

Dica: Use o método .map().
*/

// A dica de ouro é: Trate o parâmetro adults como se fosse qualquer outro array que você já manipulou fora da Promise.

searchByMajority()
  .then((adults) => {
    const onlyName = adults.map((people) => {
      return people.name;
    });

    return onlyName;
  })
  .then((names) => {
    console.log("Names: ", names);
  })
  .catch((error) => {
    console.log(error);
    return;
  })
  .finally(() => console.log("Promise ended"));
