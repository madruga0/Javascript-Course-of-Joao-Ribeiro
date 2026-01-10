/* 
Vamos concentrar a nossa atenção na lista
*/

// vamos buscar os elementos do DOM
let lista = document.querySelector('#lista');

// vamos adicionar item no final da lista
let item1 = document.createElement('li');   //<li></li>
item1.innerHTML = "Novo item da lista";
item1.classList.add('text-red-500');
lista.appendChild(item1);

let item1_2 = document.createElement('li')
item1_2.innerHTML = "Novo item 1.2"
item1_2.style.backgroundColor = 'blue'
lista.appendChild(item1_2)

// vamos adicionar item no início da lista
let item2 = document.createElement('li');   //<li></li>
item2.innerHTML = "Novo item da lista";
item2.classList.add('text-green-500');
lista.insertBefore(item2, lista.firstChild);

let item2_1 = document.createElement('p')
item2_1.innerHTML = 'Some thing was wrote'
item2_1.style.backgroundColor = 'green'
lista.insertBefore(item2_1, lista.firstChild)

// vamos adicionar item no meio da lista
let item3 = document.createElement('li');   //<li></li>
item3.innerHTML = "Novo item da lista";
item3.classList.add('text-blue-500');

// insertBefore(newNode, referenceNode)
lista.insertBefore(item3, lista.children[3]);

let item3_1 = document.createElement('h3');
item3_1.innerHTML = 'Novo h3 title'
item3_1.style.backgroundColor = 'yellow'
item3_1.style.fontSize = '32px'
lista.insertAdjacentElement('beforeend', item3_1)

let item4 = document.createElement('li')
item4.innerHTML = 'Item 3 was replaced'
item4.style.color = 'purple'
let children4 = lista.children[5]
lista.replaceChild(item4, children4)


let removeDiv2 = document.querySelector('#div2');
removeDiv2.remove();


// outros métodos para adicionar elementos ao DOM:
// - replaceChild() - substitui um elemento por outro
// - removeChild() - remove um elemento do DOM
// - remove() - remove o elemento do DOM

// vamos substituir o primeiro parágrafo por outro parágrafo
let p1 = document.querySelector('#p1'); // vamos buscar o primeiro parágrafo
let p2 = document.createElement('p'); // cria um novo elemento p
p2.innerHTML = 'Novo parágrafo adicionado ao DOM'; // adiciona o conteúdo ao elemento p
p2.classList.add('text-yellow-500'); // adiciona a classe ao elemento p

p1.parentNode.replaceChild(p2, p1); // substitui o elemento p1 pelo elemento p2
// como é fora do p1, temos que usar o parentNode para aceder ao elemento pai do p1
// NOTA: Neste caso, pode ser mais prático alterar o conteúdo do p1 diretamente, mas o objetivo é mostrar o método replaceChild()

// vamos remover o elemento div1 do DOM
let div1 = document.querySelector('#div1'); // vamos buscar o elemento div1
div1.remove(); // remove o elemento div1 do DOM

// remover um item da lista
let item5 = document.querySelector('#lista li:nth-child(5)'); // vamos buscar o segundo item da lista
item5.remove(); // remove o elemento item4 do DOM