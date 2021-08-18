/*

Kata Nível 8 kyu - The Feast of Many Beasts

Todos os animais estão dando uma festa! Cada animal está trazendo um prato. 

A regra é única: 
o prato deve começar e terminar com as mesmas letras do nome do animal. 
Por exemplo, a garça azul está trazendo alho naan e o chapim traz bolo de chocolate.

Implemente a função fest abaixo que leva o nome do animal e prato como argumentos 
e retorna verdadeiro ou falso para indicar se o animal tem permissão 
para trazer o prato para o banquete.

Suponha que beast e dish (prato) sejam sempre strings em minúsculas e 
que cada um tenha pelo menos duas letras. 

beast (animal) e dish (prato) podem conter hífens e espaços, 
mas não aparecerão no início ou no final da string. Eles não conterão numerais.



*/
function feast(beast, dish) {
  const extractFirstAndLastChar = (arr) => [arr[0], arr.slice(-1)];
  const [firstCharBeast, lastCharBeast] = extractFirstAndLastChar(beast);
  const [firstCharDish, lastCharDish] = extractFirstAndLastChar(dish);
  return firstCharBeast === firstCharDish && lastCharBeast === lastCharDish;
}

function feast(beast, dish) {
  String.prototype.first = function () {
    return this[0];
  };

  String.prototype.last = function () {
    return this[this.length - 1];
  };

  return beast.first() === dish.first() && beast.last() === dish.last();
}

{
  // Teste 1 deve retornar true
  const [beast, dish] = ["great blue heron", "garlic naan"];
  const expected = true;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

{
  // Teste 2 deve retornar true
  const [beast, dish] = ["chickadee", "chocolate cake"];
  const expected = true;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

{
  // Teste 3 deve retornar false
  const [beast, dish] = ["brown bear", "bear claw"];
  const expected = false;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

function assert(beast, dish, expected) {
  return feast(beast, dish) === expected ? "OK" : "Algo deu errado";
}
