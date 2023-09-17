// Números
// Precisão para até 15 dígitos
var numeroDaSorte = 4;
console.log(numeroDaSorte);

var gols = 1000;
console.log(gols);

var pi = 3.14;
console.log(pi);

var exp = 2e10;
console.log(exp);

// Operadores aritméticos binários
// A ordem importa: começa por multiplicação e divisão, depois soma e subtração.
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 1000 / 5;
var expoente = 2 ** 4;
var modulo = 14 % 5;

// Operadores aritméticos binários com Strings
var somaString = "100" + 50;
console.log(somaString); // 10050

var subtracaoString = "100" - 50;
console.log(subtracaoString); // 50

var multiplicacaoString = "100" * "2";
console.log(multiplicacaoString); // 200

var divisaoString = "Comprei 10" / 2;
console.log(divisaoString); // NaN

var testeNaN = "Isso é 100" / 2;
console.log(isNaN(testeNaN)); // true

// Operadores aritméticos unários
let incrementoA = 5;
console.log("incrementoA = ", incrementoA++);
console.log("incrementoA = ", incrementoA);

let incrementoB = 5;
console.log("incrementoB = ", ++incrementoB);
console.log("incrementoB = ", incrementoB);

console.log("****************");

let decrementoA = 5;
console.log("decrementoA = ", decrementoA--);
console.log("decrementoA = ", decrementoA);

let decrementoB = 5;
console.log("decrementoB = ", --decrementoB);
console.log("decrementoB = ", decrementoB);

console.log("****************");

// + e - tentam transformar o valor seguinte em Number
var frase = "Isso é um teste";
console.log("+frase = ", +frase); // NaN
console.log("-frase = ", -frase); // NaN

var idade = "29";
console.log("+idade = ", +idade); // 29 (número)
console.log("-idade = ", -idade); // -29 (número)
console.log("+idade + 5 = ", +idade + 5); // 34

var possuiFaculdade = true;
console.log("+possuiFaculdade = ", +possuiFaculdade); // 1
