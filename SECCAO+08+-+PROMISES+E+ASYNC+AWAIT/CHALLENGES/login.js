/**
Desafio 4: O Sistema de Login (Fluxo Básico)
Imagine que você está criando a tela de login de um app.

Crie uma função autenticarUsuario(senha).

Ela deve retornar uma Promise.

Se a senha for "123456", dê resolve após 2 segundos com o objeto: { nome: "Admin", nivel: "Premium" }.

Se for qualquer outra senha, dê reject com a string: "Senha incorreta. Tente novamente.".

Obrigatório: Use async/await e try/catch para chamar essa função e exibir o nome do usuário ou o erro no console.
 */

function autenticarUser(senha) {
  return new Promise((resolve, reject) => {
    try {
      if (senha == "123456") {
        setTimeout(() => {
          resolve({
            nome: "Admin",
            nivel: "Premium",
          });
        }, 2000);
      }
    } catch (error) {
      reject("Senha incorreta. Tente novamente ", error);
    }
  });
}

autenticarUser()
  .then((password) => {
    console.log(password);
    return password;
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log("End of PROMISE"));
