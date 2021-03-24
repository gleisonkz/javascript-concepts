{
  /* Array.Prototype.find

retorna o primeiro elemento do array que atender a condição passada.*/

  const numbers = [1, 4, 9, 16];
  const foundedNumber = numbers.find((number) => number > 5);
  console.log(foundedNumber);
}
