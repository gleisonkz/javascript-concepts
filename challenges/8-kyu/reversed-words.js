/*

Kata Nível 8 kyu - Reversed Words

Implemente a função reverseWords que deve 
inverter todas as palavras dentro da string passada.

Exemplo :

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

const reverseWords = (str) => {
  return str.split` `.reverse().join` `;
};

{
  // Teste 1 deve retornar "world! hello"
  const sample = "hello world!";
  console.log(reverseWords(sample));
  console.log(assert(sample, "world! hello"));
}
{
  // Teste 2 deve retornar this like speak doesn't yoda
  const sample = "yoda doesn't speak like this";
  console.log(reverseWords(sample));
  console.log(assert(sample, "this like speak doesn't yoda"));
}
{
  // Teste 3 deve retornar foobar
  const sample = "foobar";
  console.log(reverseWords(sample));
  console.log(assert(sample, "foobar"));
}
{
  // Teste 4 deve retornar editor kata
  const sample = "kata editor";
  console.log(reverseWords(sample));
  console.log(assert(sample, "editor kata"));
}
{
  // Teste 5 deve retornar boat your row row row
  const sample = "row row row your boat";
  console.log(reverseWords(sample));
  console.log(assert(sample, "boat your row row row"));
}

function assert(sample, expected) {
  const resultFn = reverseWords(sample, expected);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
