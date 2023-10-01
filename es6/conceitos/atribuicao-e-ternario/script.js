// Operadores de atribuição
// Podem funcionar como formas abreviadas
let x = 5;
let y = 10;
console.log((x += y)); // x = x + y (15)
console.log((x -= y)); // x = x - y (-5)
console.log((x *= y)); // x = x * y (50)
console.log((x /= y)); // x = x / y (0.5)
console.log((x %= y)); // x = x % y (0)
console.log((x **= y)); // x = x ** y (9765625)

// Operador ternário
// Abreviação de condicionais com if e else
const idade = 25;
const podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// If abreviado
// Não é necessário abrir e fechar as chaves {}
// quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");
