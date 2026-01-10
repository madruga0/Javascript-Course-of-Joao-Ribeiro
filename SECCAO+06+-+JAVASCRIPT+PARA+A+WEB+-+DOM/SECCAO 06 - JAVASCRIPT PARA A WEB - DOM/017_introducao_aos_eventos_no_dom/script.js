/* 
Vamos falar sobre eventos no DOM.
Eventos são ações que ocorrem no navegador, como cliques, teclas pressionadas, entre outros. 
Esses eventos podem ser capturados e manipulados usando JavaScript.
*/

function alertar(){
    alert("Você clicou no botão 1!");
}

const sayHello = () => {
    let btnChange = document.querySelector('button').style.color = 'red'
    btnChange

} 
document.querySelector('button').addEventListener('toggle', () => {
    this.classList.add('bg-red-600')
})

// Este tipo de definição de evento é chamada de "atributo de evento".
// De acordo com o JS mais moderno, não é recomendado usar atributos de evento no HTML.
// A recomendação é usar o método addEventListener() para adicionar eventos aos elementos do DOM.

document.querySelector("#botao2").addEventListener('click', () => {
    alert("Você clicou no botão 2!");
});

// o botão 3 tem uma outra particularidade.
// quanto o cursor passa por cima do botão, o botão muda de cor e quando o mouse sai do botão, a cor volta ao normal.
// Para isso, usamos o método addEventListener() para adicionar dois eventos: mouseover e mouseout.
document.querySelector("#botao3").addEventListener('mouseover', () => {
    this.classList.add('bg-yellow-500');
});

document.querySelector("#botao3").addEventListener('mouseout', () => {
    this.classList.remove('bg-yellow-500');
});

// TEST
document.querySelector("#botao4").addEventListener("click", () => {
    alert("Hello world from botao 4");
});


