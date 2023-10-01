// DOM
// Interface que representa documentos HTML e XML através de objetos
// Com ela é possível manipular a estrutura, estilo
// e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser

const href = window.location.href;
console.log(href);

// Node
// Toda tag html é representada pelo objeto Element e por isso
// herda os seus métodos e propriedades.
// Element é um tipo de objeto Node.

const titulo = document.querySelector("h1");

titulo.innerText; // retorna texto apresentado no elemento
titulo.classList; // retorna as classes
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener("click", () => {
  titulo.style.color = "#FF0000";
});
