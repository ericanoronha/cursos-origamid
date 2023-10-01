// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const person = {
  name: "Erica",
  surname: "Noronha",
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(person.getFullName()); // Erica Noronha

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
// console.log("Preço do carro: R$", carro.preco); // Preço do carro: R$ 1000
carro.preco = 3000;
// console.log("Preço do carro: R$", carro.preco); // Preço do carro: R$ 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: "Labrador",
  pelo: "Preto",
  idade: 10,
  onVerPessoa: function (pessoa) {
    if (pessoa === "homem") return "AU AU";
    return "";
  },
};
console.log(cachorro.raca); // Labrador
console.log(cachorro.onVerPessoa("mulher")); //
console.log(cachorro.onVerPessoa("homem")); // AU AU
