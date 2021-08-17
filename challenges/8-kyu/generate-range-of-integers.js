/*

Kata Nível 8 kyu - Generate range of integers

Implemente uma função chamada generateRange(min, max, step), 
que recebe três argumentos e gera um array de inteiros de min a max, 
com a etapa passada. 

- O primeiro inteiro é o valor mínimo, 
- O segundo é o máximo do intervalo
- O terceiro é a etapa.
*/

function generateRange(min, max, step) {
  let arr = [];

  for (let index = min; index <= max; index += step) {
    arr.push(index);
  }

  return arr;
}

function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

function generateRange(min, max, step) {
  return [...rangeGenerator(min, max, step)];
}

function* rangeGenerator(min, max, step) {
  while (min <= max) {
    yield min;
    min += step;
  }
}

function generateRange(min, max, step) {
  const length = 1 + (max - min) / step;
  return Array.from(Array(length), (_, i) => min + i * step);
}

{
  // Teste 1 deve retornar [2, 4, 6, 8, 10]
  const [min, max, step] = [2, 10, 2];
  const expected = [2, 4, 6, 8, 10];
  console.log(generateRange(min, max, step));
  console.log(assert(min, max, step, expected));
}

{
  // Teste 2 deve retornar [1, 4, 7, 10]
  const [min, max, step] = [1, 10, 3];
  const expected = [1, 4, 7, 10];
  console.log(generateRange(min, max, step));
  console.log(assert(min, max, step, expected));
}

function assert(min, max, step, expected) {
  function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  const resultFn = generateRange(min, max, step);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
