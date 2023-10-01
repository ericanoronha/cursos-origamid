// Escopo de função
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
function getCarro() {
  let carro = "Fusca";
  console.log(carro);
}
// getCarro(); // Fusca
// console.log(carro); // Uncaught ReferenceError: carro is not defined

// Variável global
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
// 'use strict' impede isso.
// Uncaught ReferenceError: carro is not defined

// Escopo de função (pai)
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
var carro = "Fusca";
function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}
mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

// Escopo de bloco
// Variáveis criadas com var, vazam o bloco.
// Por isso com a introdução do ES6 a melhor forma de declarmos uma variável
// é utilizando const e let, pois estas respeitam o escopo de bloco.
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro

// var vaza o bloco
// Mesmo com a condição falsa, a variável ainda será declarada utilizando
// hoisting e o valor ficará como undefined.
if (false) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // undefined
