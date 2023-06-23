// fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

async function fetchPokemons(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return response;
}

const pokemons = fetchPokemons('https://pokeapi.co/api/v2/pokemon/');

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a pagar',
  'R$ 300',
  'R$ 800',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => preco.includes('R$'));
const precoNumeros = precosFiltro.map((preco) => preco.substring(3));
console.log('precosFiltro :', precosFiltro, 'precosNumeros: ', precoNumeros);

const nome = prompt('Digite seu primeiro nome');
console.log('Seu apelido paulistano é:', nome.slice(-2));
