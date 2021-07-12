/* Array.prototype.push

adiciona um ou mais elementos ao final 
de um array e retorna o novo length do array.
*/

const animals = ["pig", "goat", "sheep"];

// Adicionando 1 item ao array
const count = animals.push("cow");
console.log(count);
console.log(animals);

// Adicionando vários itens ao array
animals.push("chicken", "cat", "dog");
console.log(animals);

// Mesclando arrays com push + spread operator
{
  const vegetables = ["parsnip", "potato"];
  const moreVegs = ["celery", "beetroot"];

  vegetables.push(...moreVegs);
  console.log(vegetables);
}

// Mesclando arrays utilizando o método apply
{
  const vegetables = ["parsnip", "potato"];
  const moreVegs = ["celery", "beetroot"];

  Array.prototype.push.apply(vegetables, moreVegs);
  console.log(vegetables);
}
