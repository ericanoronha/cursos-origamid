const grupoA = 100;
const grupoB = 200;

// if (grupoA > grupoB) {
//   console.log('GrupoA ganhou');
// } else {
//   console.log('Grupo B ganhou');
// }
const vencedor = grupoA > grupoB ? 'Grupo A venceu' : 'Grupo B venceu';
console.log(vencedor);

const active = false;
//const button = active && 'Botão está ativo';
const button = active ? 'Botão está ativo' : '';
console.log(button);
