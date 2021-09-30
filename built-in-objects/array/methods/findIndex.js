{
  /* Array.Prototype.findIndex

  retorna o índice do primeiro elemento do array que atender a condição passada.*/

  const numbers = [1, 4, 9, 16];
  const foundedIndexNumberGreaterThan5 = numbers.findIndex(
    (number) => number > 5
  );
  const foundedIndexNumberGreaterThan20 = numbers.findIndex(
    (number) => number > 20
  );
  console.log(foundedIndexNumberGreaterThan5);
  console.log(foundedIndexNumberGreaterThan20);

  const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
  const foundedIndexFruit = fruits.findIndex(
    (fruit) => fruit === "blueberries"
  );
  console.log(foundedIndexFruit);
}
