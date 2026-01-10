/* 
No grupo de eventos que existem no DOM API, existem os eventos de teclado.
Quando pressionamos, mantemos pressionada ou soltamos uma tecla, o DOM API dispara um evento.
Esses eventos são muito importantes principalmente para aplicações web que utilizam formulários.
Eles permitem controlar a interação do usuário com os inputs.

Nos três inputs text que temos no HTML, dá para ver que o Tab permite navegar entre os inputs.
Esse é um comportamento padrão do navegador.

Vamos ver como funciona o evento keydown concentrano a atenção no primeiro input.
*/

const text1 = document.querySelector("#text_1");
const text2 = document.querySelector("#text_2");
const text3 = document.querySelector("#text_3");

// keydown é disparado quando a tecla é pressionada
// podemos ver na consola a tecla que está a ser pressionada.
// A propriedade key do evento contém o valor da tecla pressionada.
// Podemos também saber qual é o código da tecla pressionada através da propriedade code.
text1.addEventListener('keydown', (e) => {
    console.log('keydown', e.key);
    console.log('keydown', e.code);

    // outros métodos são considerados obsoletos, mas ainda funcionam.
    // não os devemos usar, uma vez que podem dar resultados diferentes em diferentes navegadores.
    // console.log('keydown', event.keyCode);
    // console.log('keydown', event.which);
    // console.log('keydown', event.keyIdentifier);
});

text2.addEventListener('keyup', (e) => {
    console.log('keyup', e.key);
    console.log('keyup', e.code);
});

text3.addEventListener('keydown', (e) => {
    
    // inserir apenas dígitos
    if(e.key < '0' || e.key > '9' ){
        e.preventDefault();
    }

    // aceitar apenas letras
    // if(e.key < 'a' || e.key > 'z' ){
    //     e.preventDefault();
    // }
});