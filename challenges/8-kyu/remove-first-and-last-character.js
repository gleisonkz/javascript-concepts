/*

Kata Nível 8 kyu - Remove First and Last Character

É muito simples. Seu objetivo é criar uma função que remova 
o primeiro e o último caracteres de uma string. 
Você recebe um parâmetro, a string original. 

Nota:
Você não precisa se preocupar com strings com menos de dois caracteres.
*/

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

function removeChar2(str) {
  return str.replace(/^.|.$/g, "");
}

// Teste 1 deve retornar "loquen"
{
  const sample = "eloquent";
  console.log(removeChar(sample));
  console.log(assert(sample, "loquen"));
}

// Teste 2 deve retornar "ountr"
{
  const sample = "country";
  console.log(removeChar(sample));
  console.log(assert(sample, "ountr"));
}

// Teste 3 deve retornar "erso"
{
  const sample = "person";
  console.log(removeChar(sample));
  console.log(assert(sample, "erso"));
}

// Teste 4 deve retornar "oopss"
{
  const sample = "ooopsss";
  console.log(removeChar(sample));
  console.log(assert(sample, "oopss"));
}

function assert(sample, expected) {
  return removeChar(sample) === expected ? "OK" : "Algo deu errado";
}
