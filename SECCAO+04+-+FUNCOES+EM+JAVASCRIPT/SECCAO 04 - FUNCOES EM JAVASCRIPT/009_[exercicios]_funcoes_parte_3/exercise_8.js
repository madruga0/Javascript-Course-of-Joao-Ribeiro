/*
   1. Crie um array de alunos. Cada aluno é um objeto com os seguintes atributos:
    - name
    - phone number

   2. Crie uma função que mostre o nome e o telefone de cada aluno.
   3. Mostre todas as informações dos alunos no console.
*/

let students = [
  {
    name: "Pedro",
    phoneNumber: 81746583,
  },
  {
    name: "Madruga",
    phoneNumber: 84384304,
  },
  {
    name: "Brenda",
    phoneNumber: 84384382,
  },
  {
    name: "Fortes",
    phoneNumber: 48383483,
  },
];

const studentInfo = () => {
  for (let student of students) {
    console.log(student);
  }
};
studentInfo();
