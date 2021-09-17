/*

Kata Nível 8 kyu - All Star Code Challenge

Implemente a função abaixo que deve recebe 2 argumentos do tipo string.
retorne um inteiro da contagem de ocorrências em que o segundo argumento é encontrado no primeiro. 

Se nenhuma ocorrência for encontrada, uma contagem de 0 deve ser retornada.

*/

function strCount(str, letter) {
  const letters = str.split("").filter((char) => char === letter);
  return letters.length;
}

{
  //Teste 1
  const [a, b] = ["Hello", "o"];
  const expected = 1; // valor esperado

  console.log(strCount(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 2
  const [a, b] = ["Hello", "l"];
  const expected = 2; // valor esperado

  console.log(strCount(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 3
  const [a, b] = ["", "z"];
  const expected = 0; // valor esperado

  console.log(strCount(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 4
  const [a, b] = ["Renato", "o"];
  const expected = 1; // valor esperado

  console.log(strCount(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 5
  const [a, b] = ["zigdcefzjdhkh", "f"];
  const expected = 1; // valor esperado

  console.log(strCount(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 6
  const [a, b] = ["bzijflbaddciigziizzbeibbddcjeibheeihke", "e"];
  const expected = 5; // valor esperado

  console.log(strCount(a, b));
  console.log(assert(a, b, expected));
}

function assert(a, b, expected) {
  const resultFn = strCount(a, b);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
