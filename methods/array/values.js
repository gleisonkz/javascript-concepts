/* 
Array.Prototype.values

retorna um array iterator object
que contém os valores de cada índice do array.
*/

const letters = ["a", "b", "c"];
const iterator = letters.values();

// percorrendo o iterator
for (const value of iterator) {
  console.log(value);
}

// indices vazios também são considerados

const lettersWithHoles = ["a", , "c"];
const iteratorWithHoles = lettersWithHoles.values();

for (const value of iteratorWithHoles) {
  console.log(value);
}
