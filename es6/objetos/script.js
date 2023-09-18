// Objetos
// Conjunto de variáveis e funções,
// que são chamadas de propriedades e métodos
// e consistem em chave e valor.

const pessoa = {
  nome: "Erica",
  idade: 29,
  profissao: "dev",
  possuiFaculdade: true,
};
console.log(pessoa.nome); // Erica
console.log(pessoa.possuiFaculdade); // true

const quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

console.log(Math.PI); // 3.141592653589793
console.log(Math.random()); // número aleatório
