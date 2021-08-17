/*

Kata Nível 8 kyu - Is it a palindrome?

Escreva uma função de que verifica se uma determinada string (não faz distinção entre maiúsculas e minúsculas) 
é um palíndromo.

palíndromo é uma palavra, número, frase ou outra sequência de caracteres 
que é lida da mesma forma para a frente ou para trás, 
como ana ou asa.
*/

function isPalindrome(string) {
  const reversed = string
    .split("")
    .map((char) => char.toLowerCase())
    .reverse()
    .join("");

  return reversed === string.toLowerCase();
}

{
  // Teste 1 deve retornar true
  const sample = "ana";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar true
  const sample = "asa";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar true
  const sample = "Abba";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar false
  const sample = "hello";
  const expected = false;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 5 deve retornar true
  const sample = "AbBa";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 6 deve retornar true
  const sample = "A";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 7 deve retornar true
  const sample = "Aa";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 8 deve retornar true
  const sample = "";
  const expected = true;
  console.log(isPalindrome(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = isPalindrome(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
