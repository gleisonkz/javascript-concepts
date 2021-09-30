{
  /* Array.Prototype.map

projetar um novo array a partir do array
passado como parâmetro.*/

  const numbers = [1, 4, 9, 16];
  numbersSquared = numbers.map((number) => Math.pow(number, 2));
  console.log(numbersSquared);
}
