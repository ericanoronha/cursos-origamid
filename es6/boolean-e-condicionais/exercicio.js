// Exercício
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const minhaIdade = 29;
const idadePai = 70;

if (minhaIdade > idadePai) {
  console.log("É maior");
} else if (minhaIdade === idadePai) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Erica";
console.log(!!nome); // truthy

var idade = 29;
console.log(!!idade); // truthy

var possuiDoutorado = false;
console.log(!!possuiDoutorado); // falsy

var empregoFuturo; // undefined
console.log(!!empregoFuturo); // falsy

var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta); // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(brasil > china); // false

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // Falso
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Cão
} else {
  console.log("Falso");
}
