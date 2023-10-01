// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  var marca = "Fiat";
  var portas = 4;
}
console.log(cor, marca, portas);
// Somente var vaza o escopo de bloco

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2;
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
