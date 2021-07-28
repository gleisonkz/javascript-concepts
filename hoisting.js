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
