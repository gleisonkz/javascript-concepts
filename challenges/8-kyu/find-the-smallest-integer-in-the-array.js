/*

Kata Nível 8 kyu - Find the first non-consecutive number

Sua tarefa é encontrar o primeiro elemento de um array que não seja consecutivo.

Por não consecutivo, não queremos dizer exatamente 1 maior do que o elemento anterior da matriz.

Por exemplo. Se tivermos um array com [1,2,3,4,6,7,8], 

então 1, 2, 3 e 4 são todos consecutivos, mas 6 não, 
então esse é o primeiro número não consecutivo.

Se toda o array for consecutivo, retorne null.

Notas:

- O array matriz sempre terá pelo menos 2 elementos,e todos os elementos serão números. 
- Os números também serão únicos e em ordem crescente. 
- Os números podem ser positivos ou negativos e o primeiro não consecutivo também pode ser!

Você pode escrever uma solução que retornará null  para [] e [x] embora? 
(Este é um array vazio e um com um único número e não foi testado, mas você pode escrever seu próprio teste de exemplo.)

*/

function firstNonConsecutive(arr) {
  for (let index = 0; index < arr.length; index++) {
    const currentNumber = arr[index];
    const nextNumber = arr[index + 1];

    if (nextNumber === undefined) continue;

    const isNonConsecutive = currentNumber + 1 !== nextNumber;
    if (isNonConsecutive) return nextNumber;
  }
  return null;
}

{
  // Teste 1 deve retornar 6
  const sample = [1, 2, 3, 4, 6, 7, 8];
  console.log(firstNonConsecutive(sample));
  console.log(assert(sample, 6));
}

{
  // Teste 2 deve retornar 0
  const sample = [-3, -2, 0, 1, 2];
  console.log(firstNonConsecutive(sample));
  console.log(assert(sample, 0));
}

{
  // Teste 3 deve retornar -1
  const sample = [-3, -1, 0, 1, 2];
  console.log(firstNonConsecutive(sample));
  console.log(assert(sample, -1));
}

{
  // Teste 4 deve retornar null
  const sample = [1, 2, 3, 4];
  console.log(firstNonConsecutive(sample));
  console.log(assert(sample, null));
}

function assert(sample, expected) {
  return firstNonConsecutive(sample) === expected ? "OK" : "Algo deu errado";
}
