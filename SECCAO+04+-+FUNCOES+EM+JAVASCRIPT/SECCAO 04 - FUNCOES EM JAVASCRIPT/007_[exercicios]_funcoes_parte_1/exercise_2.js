/*
    Crie a mesma função do exercício 1, mas com 2 parâmetros: firstName e lastName.
    Dentro da função, exiba o nome completo.
*/

/* MAIN SOLUTION
function sayMyName(firstName, lastName) {
    console.log( firstName + " " + lastName )
}
    sayMyName('Pedro', 'Madruga')
*/
const sayMyName = (firstName, lastName) => firstName + " " + lastName;

console.log(sayMyName("Pedro", "Madruga"));
