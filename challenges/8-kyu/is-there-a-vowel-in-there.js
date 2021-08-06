/*

Kata Nível 8 kyu - Is there a vowel in there?

Dado um array de números, 
verifique se algum dos números são 
códigos de caracteres para as vogais minúsculas (a, e, i, o, u). 
de acordo com a tabela ASCII

Caso seja , altere o valor do array para as respectivas vogais. 
Retorne  o array resultante.

Tabela:

Código | Letra

97  | a
101 | e
105 | i
111 | o
117 | u

*/

function isVow(codes) {
  const vowels = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  return codes.map((code) => vowels[code] ?? code);
}

function isVow(codes) {
  const vowels = new Set("aeiou");
  return codes.map((code) => {
    const codeAsString = String.fromCharCode(code);
    return vowels.has(codeAsString) ? codeAsString : code;
  });
}

{
  // Teste 1 deve retornar [118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116]
  const sample = [118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116];
  console.log(isVow(sample));
  const expected = [118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116];
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar false
  const sample = [101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103];
  console.log(isVow(sample));
  const expected = ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103];
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
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

  const resultFn = isVow(sample);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
