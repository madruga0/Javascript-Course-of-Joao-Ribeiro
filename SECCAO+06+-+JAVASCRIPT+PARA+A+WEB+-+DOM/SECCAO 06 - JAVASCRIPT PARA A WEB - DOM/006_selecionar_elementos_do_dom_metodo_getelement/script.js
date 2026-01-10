/* 
Vamos aprender a selecionar elementos do DOM utilizando o método mais conhecido:
getElementById
getElementByName
getElementsByTagName
getElementsByClassName
*/

// getElementById
let elementById = document.getElementById("paragrafo");
console.log(elementById);
elementById.innerHTML = "ESTE FOI O ELEMENTO SELECIONADO";

// getElementByName
let elementsByName = document.getElementsByName("outro_paragrafo"); // retorna um array de objects
if (elementsByName.length > 0) {
  console.log(elementsByName);
  elementsByName[0].innerHTML = "PRIMEIRO FOI ALTERADO";
}

// getElementByTagName
let elementsByTagName = document.getElementsByTagName("p"); // div, h1, p, body
if (elementsByTagName.length > 0) {
  console.log(elementsByTagName);
  elementsByTagName[0].innerHTML = "first p was changed";
  console.log(elementsByTagName[0]);
}

// getElementByClassName
let elementsByClassName = document.getElementsByClassName("text-blue-500");
if (elementsByClassName.length > 0) {
  for (let i = 0; elementsByClassName.length > i; i++) {
    console.log(elementsByClassName);
    elementsByClassName[0].innerHTML = "este elemento foi selecionado";
  }
}
