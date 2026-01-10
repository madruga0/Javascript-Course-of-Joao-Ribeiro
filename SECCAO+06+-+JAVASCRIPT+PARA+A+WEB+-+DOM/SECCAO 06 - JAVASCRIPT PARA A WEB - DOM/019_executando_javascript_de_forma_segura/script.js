
// script.js estiver dentro do head, ele vai disparar um erro, pois nao tem como procurar algo que nao foi carregado

// const btn = document.querySelector("#botao");
// btn.addEventListener('click', function(){
//   alert("Você clicou no botão!");
// });


window.addEventListener('load', () => {

    const btn = document.querySelector("#botao");
    btn.addEventListener('click', () => {
      alert("Você clicou no botão!");
    });

});