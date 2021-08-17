/*

Kata Nível 8 kyu - Count by X

Crie uma função com dois argumentos que retornará 
um array dos primeiros (n) números de acordo com o step informado.

Suponha que o número fornecido e o número de vezes 
para contar serão números positivos maiores que 0.

Retorne os resultados como um array

Exemplos:

countBy(1,10) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
countBy(2,5) =>  [2, 4, 6, 8, 10];

*/

function countBy(step, times) {
  return Array.from(Array(times), (_, i) => ++i * step);
}

function countBy(step, times) {
  return [...Array(times)].map((_, i) => ++i * step);
}

function countBy(step, times) {
  return [...Array(times)].reduce((acc, _, index) => {
    return acc.push(++index * step) && acc;
  }, []);
}

function countBy(step, times) {
  const arr = [];
  for (let index = 1; index <= times; index = ++index) {
    const multiply = index * step;
    arr.push(multiply);
  }

  return arr;
}

{
  //Teste 1 deve retornar [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [sampleStep, sampleTime] = [1, 10];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(countBy(sampleStep, sampleTime));
  console.log(assert(sampleStep, sampleTime, expected));
}
{
  //Teste 2 deve retornar [2, 4, 6, 8, 10]
  const [sampleStep, sampleTime] = [2, 5];
  const expected = [2, 4, 6, 8, 10];
  console.log(countBy(sampleStep, sampleTime));
  console.log(assert(sampleStep, sampleTime, expected));
}
{
  //Teste 3 deve retornar [3, 6, 9, 12, 15, 18, 21]
  const [sampleStep, sampleTime] = [3, 7];
  const expected = [3, 6, 9, 12, 15, 18, 21];
  console.log(countBy(sampleStep, sampleTime));
  console.log(assert(sampleStep, sampleTime, expected));
}
{
  //Teste 4 deve retornar [50, 100, 150, 200, 250]
  const [sampleStep, sampleTime] = [50, 5];
  const expected = [50, 100, 150, 200, 250];
  console.log(countBy(sampleStep, sampleTime));
  console.log(assert(sampleStep, sampleTime, expected));
}
{
  //Teste 5 deve retornar [100, 200, 300, 400, 500, 600]
  const [sampleStep, sampleTime] = [100, 6];
  const expected = [100, 200, 300, 400, 500, 600];
  console.log(countBy(sampleStep, sampleTime));
  console.log(assert(sampleStep, sampleTime, expected));
}

function assert(sampleStep, sampleTime, expected) {
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

  const resultFn = countBy(sampleStep, sampleTime);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
