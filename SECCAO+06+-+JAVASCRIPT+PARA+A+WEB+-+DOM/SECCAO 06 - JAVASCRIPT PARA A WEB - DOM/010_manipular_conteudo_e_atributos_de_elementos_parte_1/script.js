/* 
Independentemente do tipo de selector de elemento, vamos ver como podemos 
manipular o conteúdo e os atributos de um elemento.
*/

// vamos alterar o texto de um elemento
document.querySelector('#titulo').innerHTML = 'FORMULARIO DO CLIENTE'

// alterar o texto do label para adicionar html pelo meio
document.querySelector('label[for="nome"]').innerHTML = 'Seu nome <strong>(username)</strong>'
document.querySelector('label[for="email"]').innerHTML = 'Seu email <strong>(user-mail)</strong>'

// alterar o valor de um input  
document.querySelector('input[id="nome"]').value = 'Pedro Madruga'
document.querySelector('input[id="email"]').value = 'pedromadruga@email.com'

// vamos colocar o foco no input email
document.querySelector('input[type="email"]').focus();

// inserir a mesma senha nos inputs de senha e confirmar senha
const passwordInput = document.querySelectorAll('input[type="password"]');


const showPassword = (password) => {
  passwordInput.forEach((input) => {
    return (input.value = password);
  });
};

showPassword('MyN3wP4ssw0rd1sV3ryH4rd');