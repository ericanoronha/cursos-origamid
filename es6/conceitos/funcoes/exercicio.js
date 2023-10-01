// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}

console.log(isTruthy(true)); // true
console.log(isTruthy(0)); // false
console.log(isTruthy("Erica")); // true

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function getSquarePerimeter(side) {
  return side * 4;
}
console.log(getSquarePerimeter(4)); // 16

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function getFullName(name, surname) {
  return `${name} ${surname}`;
}
//console.log(getFullName("Erica", "Noronha")); // Erica Noronha

// Crie uma função que verifica se um número é par
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(3)); // false
console.log(isEven(10)); // true

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function getType(arg) {
  return typeof arg;
}
console.log(getType(5)); // number
console.log(getType({})); // object

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log(getFullName("Erica", "Noronha"));
});

// Corrija o erro abaixo
// Uncaught ReferenceError: totalPaises is not defined
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
