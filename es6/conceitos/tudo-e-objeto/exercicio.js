// Exercício
// Nomeie 3 propriedades ou métodos de strings
const nome = "erica";
console.log(nome.length); // 5
console.log(nome.toUpperCase()); // ERICA
console.log(nome.includes("e")); // true

// Nomeie 5 propriedades ou métodos de elementos do DOM
document.querySelector("#btn").classList.add("newClass");
console.log(document.querySelector("#btn").attributes); // NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
document.querySelector("#btn").append("Hello world");
console.log(document.querySelector("#btn").innerHTML); // Hello world
console.log(document.querySelector("#btn").id); // btn

// Busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
const copy = async () => {
  try {
    await navigator.clipboard.writeText("Text");
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
document.querySelector("#btn").addEventListener("click", copy);
