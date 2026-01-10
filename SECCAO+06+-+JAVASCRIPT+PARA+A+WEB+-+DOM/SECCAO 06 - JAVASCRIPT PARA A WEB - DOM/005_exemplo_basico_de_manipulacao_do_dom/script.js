/* 
O que significa interação com o DOM?
Como fazemos com o JavaScript?
- buscar o elemento
- alterar atributos e propriedades do elemento
*/

const paragrafo = document.getElementById("paragrafo");

document.querySelector("#btn1").addEventListener("click", () => {
  paragrafo.innerHTML = "Texto alterado com JavaScript!";
});

document.querySelector("#btn2").addEventListener("click", () => {
  paragrafo.classList.add("text-red-500");
});

document.querySelector("#btn3").addEventListener("click", () => {
  paragrafo.classList.toggle("hidden");
});

document.querySelector("#btn4").addEventListener("click", () => {
  console.log("Hello world in console");
});
