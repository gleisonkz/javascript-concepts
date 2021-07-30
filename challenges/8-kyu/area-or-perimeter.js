/*

Kata Nível 8 kyu - Area or Perimeter

Você recebe o length e a width de um polígono de 4 lados. 
O polígono pode ser um retângulo ou um quadrado. 
Se for um quadrado, retorne sua área. Se for um retângulo, 
retorne seu perímetro.

Nota: 
para os propósitos deste kata, 
você assumirá que é um quadrado quando o length e width forem iguais, 
caso contrário, é um retângulo.

*/

function areaOrPerimeter(length, width) {
  return length === width ? length * width : length * 2 + width * 2;
}

{
  // Teste 1 deve retornar 16.
  const [length, width] = [4, 4];
  console.log(areaOrPerimeter(length, width));
  console.log(assert(length, width, 16));
}

{
  // Teste 2 deve retornar 32.
  const [length, width] = [6, 10];
  console.log(areaOrPerimeter(length, width));
  console.log(assert(length, width, 32));
}

{
  // Teste 3 deve retornar 9.
  const [length, width] = [3, 3];
  console.log(areaOrPerimeter(length, width));
  console.log(assert(length, width, 9));
}

function assert(length, width, expected) {
  return areaOrPerimeter(length, width) === expected ? "OK" : "Algo deu errado";
}
