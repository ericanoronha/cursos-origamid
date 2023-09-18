// Funções
// Bloco de código que pode ser executado e reutilizado.
// Valores podem ser passados por uma função e a mesma retorna outro valor ou executa uma ação (void)

function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4)); // 16

function pi() {
  return 3.14;
}
const total = 5 * pi();
console.log("total = ", total); // 15.700000000000001

// Parâmetros e argumentos
// Ao criar uma função você pode definir parâmetros
// Ao executar uma função você pode passar argumentos

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
imc(80, 1.8); // 80 e 1.8 são os argumentos

function corFavorita(cor) {
  if (cor === "azul") {
    return console.log("Você gosta do céu");
  } else if (cor === "verde") {
    return console.log("Você gosta de plantas");
  } else {
    return console.log("Você não gosta de nada");
  }
}

corFavorita();
corFavorita("azul");

// Argumentos podem ser funções
// Callbacks: funções que ocorrem após algum evento
document.querySelector("#btn").addEventListener("click", function () {
  //console.log("Clicou");
  this.innerHTML = "Clicou";
});

function faltaVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(4));
