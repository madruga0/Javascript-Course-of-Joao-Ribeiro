// uma função pode ser atribuída a uma variável

let myFunction = function () {
  console.log("Hello World!");
};

let testing = function () {
  console.log("Testing");
};

// IIFE => Immediately Invoked Function Expression.
// https://dev.to/cristuker/javascript-o-que-sao-funcoes-iife-2d4e
((testing) => {
  return "Hello world";
})(testing);

((num) => {
  for (let i = 0; i <= num; i++) {
    console.log("Couting... " + i);
  }
})(32);

myFunction();

// neste caso, a função não tem um nome
// é chamada de função anónima
// a função é atribuída a uma variável
// a variável é então usada para chamar a função
