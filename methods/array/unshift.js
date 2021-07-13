/* Array.prototype.push

adiciona um ou mais elementos ao ínicio 
de um array e retorna o novo length do array.
*/

const animals = ["pig", "goat", "sheep"];

// Adicionando 1 item
const count = animals.unshift("cow");
console.log(count);
console.log(animals);

// Adicionando vários itens
animals.unshift("chicken", "cat", "dog");
console.log(animals);

// Mesclando arrays com unshift + spread operator
{
  const vegetables = ["parsnip", "potato"];
  const moreVegs = ["celery", "beetroot"];

  vegetables.unshift(...moreVegs);
  console.log(vegetables);
}

// Mesclando arrays utilizando o método apply
{
  const vegetables = ["parsnip", "potato"];
  const moreVegs = ["celery", "beetroot"];

  Array.prototype.unshift.apply(vegetables, moreVegs);
  console.log(vegetables);
}
