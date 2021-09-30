/*

Hoisting é quando as declarações de varáveis, function declarations e classes
são movidas para o topo de seu escopo.

Com isso é possível utilizar uma variável ou função antes de ser declarada.

*/

const myCatName = catName("Chloe");
console.log(myCatName);

console.log(greeting);
// undefined pois somente a declaração
// foi movida para o topo e não a atribuição do valor

function catName(name) {
  return `O nome do meu gato é ${name}`;
}

var greeting = "Hello World";

String.prototype.toAlternatingCase = function () {
  const letters = Array.from(this);
  console.log(letters);
  const result = [];

  for (let index = 0; index < letters.length; index++) {
    const letter = letters[index];
    if (letter === " ") {
      result.push(letter);
    } else {
      if (letter == letter.toUpperCase()) {
        result.push(letter.toLowerCase());
        continue;
      }
      result.push(letter.toUpperCase());
    }
  }

  return result.join("");
};
