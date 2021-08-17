/*

Kata Nível 8 kyu - Is it a palindrome?

Implemente a função abaixo que adiciona no prototype de String um método que 
faz com que cada letra minúscula se torna maiúscula 
e cada letra maiúscula se torna minúscula.

*/

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((letter) => {
      const isLowerCase = (value) => value === value.toLowerCase();
      return isLowerCase(letter) ? letter.toUpperCase() : letter.toLowerCase();
    })
    .join("");
};

String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-Za-z]/g, (char) =>
    char > "Z" ? char.toUpperCase() : char.toLowerCase()
  );
};

{
  // Teste 1 deve retornar "HELLO WORLD"
  const sample = "hello world";
  const expected = "HELLO WORLD";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar "hello world"
  const sample = "HELLO WORLD";
  const expected = "hello world";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar "HELLO world"

  const sample = "hello WORLD";
  const expected = "HELLO world";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar "hEllO wOrld"

  const sample = "HeLLo WoRLD";
  const expected = "hEllO wOrld";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}
{
  // Teste 5 deve retornar "12345"
  const sample = "12345";
  const expected = "12345";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}
{
  // Teste 6 deve retornar "1A2B3C4D5E"
  const sample = "1a2b3c4d5e";
  const expected = "1A2B3C4D5E";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}
{
  // Teste 7 deve retornar "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
  const sample = "String.prototype.toAlternatingCase";
  const expected = "sTRING.PROTOTYPE.TOaLTERNATINGcASE";
  console.log(sample.toAlternatingCase());
  console.log(assert(sample, expected));
}
{
  // Teste 8 deve retornar "Hello World"
  const sample = "Hello World";
  const expected = "Hello World";
  console.log(sample.toAlternatingCase().toAlternatingCase());
  console.log(assert(sample.toAlternatingCase(), expected));
}

function assert(sample, expected) {
  const resultFn = sample.toAlternatingCase();
  return resultFn === expected ? "OK" : "Algo deu errado";
}
