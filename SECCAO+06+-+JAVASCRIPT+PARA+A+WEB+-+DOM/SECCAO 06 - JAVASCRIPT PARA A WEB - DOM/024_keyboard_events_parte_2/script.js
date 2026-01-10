/* 
Já vimos que o comportamento padrão do navegador é permitir que o tab "salte"
entre os elementos de um formulário.
Mas vamos imaginar que queremos que seja a tecla "Enter" a fazer o mesmo.
*/

// const inputs = document.querySelectorAll('input[type="text"]');

// inputs.forEach((input) => {
// 	input.addEventListener("keydown", (event) => {
// 		if (event.key === "Enter") {

// 			event.preventDefault();

// 			const nextInput = event.target.nextElementSibling;
// 			if(nextInput){
// 				nextInput.focus();
// 			}

// 		}
// 	});
// });

const inputs = document.querySelectorAll('input[type="text"]');

// adicionando um evento de 'keydown para cada um dos inputs'
inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

	  const nextInput = e.target.nextElementSibling // proximo element irmao
	  if(nextInput) {
		nextInput.focus()
	  }

    //   const nextInput = inputs[index + 1]
    //   if (nextInput) {
    //     nextInput.focus();
    //   }
    }
  });
});
