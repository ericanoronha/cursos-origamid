// Arrays
// Grupo de valores geralmente relacionados.
// Servem para guardarmos diferentes valores em uma única variável.
const videoGames = ["Switch", "PS4", "XBOX"];
console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // XBOX

console.log(videoGames.pop()); // Remove o último item e retorna ele // XBOX
console.log(videoGames.push("3DS")); // Adiciona ao final da array // 3
console.log(videoGames.length); // 3

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

videoGames.forEach(function (item, index, array) {
  console.log("item: ", item);
  console.log("index: ", index);
  //console.log("array: ", array);
});
