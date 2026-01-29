/* 
Vamos criar um exemplo simples de fetch API.
A Fetch API é uma interface JavaScript que permite fazer requisições HTTP de forma assíncrona.
Os resultados provenientes de uma requisição feita com a Fetch API são sempre promises.

vamos usar a API pública das piadas do Chuck Norris
é uma API RESTful que fornece piadas aleatórias sobre Chuck Norris.

https://api.chucknorris.io/
https://api.chucknorris.io/jokes/random

*/

document.querySelector("#btn").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random  ")
    .then((response) => {
      if (!response.ok || response.status == 404) {
        throw new Error("Network response was not ok"); // Se a resposta não for ok, lança um erro
        // quando eh lancado um erro, a aplicacao vai parar.
      }
      return response.json(); // Converte a resposta em JSON e deixa a promise pronta para ser resolvida
      // cria a nova variavel para o proximo then -> encapsulamento magic
    })

    // O método .then() é chamado quando a promise é resolvida com sucesso
    .then((data) => {
      document.querySelector("#resultado").innerHTML = data.value; // value é o campo que contém a piada
    })

    // O método .catch() é chamado quando a promise é rejeitada
    .catch((error) => {
      document.querySelector("#resultado").innerHTML = error;
    });
});

// neste exemplo, o fetch() faz uma requisição GET para a URL especificada
// e retorna uma promise que resolve para a resposta da requisição.
// A resposta é convertida para JSON usando o método .json().
// O resultado é exibido no elemento HTML com o id "resultado".
// Se ocorrer um erro durante a requisição, o erro é exibido no mesmo elemento HTML.

// IMPORTANTE: Neste exemplo, estamos apenas a consumir os dados de uma URL via GET.
// O método fetch() é usado para fazer requisições HTTP com qualquer método (GET, POST, PUT, DELETE, etc.).
// Quando queremos enviar dados para o servidor, a requisição vai usar outro método e vai ser necessário
// passar um objeto de dados no fetch. Vamos ver como isso se processa.

async function gettingAllBlogEntries() {
  fetch(
    "http://localhost:8080/o/headless-delivery/v1.0/sites/20117/blog-postings/",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Basic " + btoa("test@liferay.com:learn"),
      },
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log("All Blog Entries:", data);
    })
    .catch((error) => console.log("Blog post was not available ", error));
}
