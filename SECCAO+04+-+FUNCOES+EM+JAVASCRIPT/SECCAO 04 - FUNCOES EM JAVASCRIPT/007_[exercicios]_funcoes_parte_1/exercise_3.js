/*
    Crie a mesma função do exercício 1 e 2, mas com 2 argumentos: firstName e lastName.
    Dessa vez, a função irá retornar o nome completo e armazená-lo em uma variável chamada myFullName.
    Exiba o nome completo no console.
*/

const sayMyName = (firstName, lastName) => firstName + " " + lastName;

const myFullName = sayMyName("Pedro", "Madruga");

console.log(myFullName);
