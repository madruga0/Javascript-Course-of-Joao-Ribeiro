/*
    Crie um script simples que exiba a tabuada do 5.
*/

let multiply = function (num) {
  for (let i = 1; i <= 10; i++) {
    let msg = num + " x " + i + " = " + num * i;
    console.log(msg);
  }
};

multiply(5);
