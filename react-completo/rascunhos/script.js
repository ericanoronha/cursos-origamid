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
