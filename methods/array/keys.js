/* 
Array.Prototype.keys

retorna um array iterator object
que contém as chaves de cada índice do array.
*/

const letters = ["a", "b", "c"];
const iterator = letters.keys();

// percorrendo o iterator
for (const key of iterator) {
  console.log(key);
}

// indices com valores
//  vazios também são considerados

const lettersWithHoles = ["a", , "c"];
const iteratorWithHoles = lettersWithHoles.keys();

for (const key of iteratorWithHoles) {
  console.log(key);
}
