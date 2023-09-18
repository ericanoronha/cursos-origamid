// Boolean: true (1) || false (0)
let possuiGraduacao = true;
let possuiMestrado = false;

if (possuiMestrado) {
  console.log("Possui graduação e mestrado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui mestrado");
} else {
  console.log("Não possui graduação");
}

// Falsy
// if(false)
// if (0) // ou -0
// if (NaN)
// if (null)
// if (undefined)
// if('') // ou "" ou ``

// Truthy
// if (true)
// if (1)
// if (' ')
// if ('erica')
// if (-5)
// if({})

// Operadores lógicos
// true && true; // true
// true && false; // false
// false && true; // false
// 'Gato' && 'Cão'; // 'Cão'
// (5 - 5) && (5 + 5); // 0
// 'Gato' && false; // false
// (5 >= 5) && (3 < 6); // true
