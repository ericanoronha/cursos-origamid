// Exercício
// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementos = document.getElementsByClassName("ativo");
const primeiroElemento = elementos[0].outerHTML;
console.log(elementos);
console.log(primeiroElemento);

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela
console.log(window.innerWidth);
