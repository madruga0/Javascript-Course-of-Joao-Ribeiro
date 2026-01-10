// variáveis locais só podem ser acedidas dentro da função

let myName = "John";

let mySurname = "Doe";
function showMyName() {
    console.log(myName);
    console.log(mySurname)
}

showMyName();
console.log(mySurname); // erro: mySurname não está definida, porque é uma variável local da função showMyName

// assim, variáveis locais só existem dentro do escopo da função onde são definidas