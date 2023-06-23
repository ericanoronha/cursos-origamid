const menu = {
  seletor: '.principal',
};

function upperName(name) {
  return name.toUpperCase();
}

const lowerName = (name) => name.toLowerCase();

console.log(menu.seletor);

console.log(upperName('Erica'));

console.log(lowerName('Erica'));

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'Andre', 'Rafael', 'Item 2');

const numeros = [...Array(10)].map((e) => ~~(Math.random() * 40));
const maior = Math.max(...numeros);
console.log(numeros);
// numeros.fill(Math.floor(Math.random() * 40), 0, 6);
// const novoNumero = Math.floor(Math.random() * 40);
// numeros.fill(novoNumero, 4);
console.log(maior);
