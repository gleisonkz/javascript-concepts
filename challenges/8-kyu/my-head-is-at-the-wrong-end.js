/*

Kata Nível 8 kyu - My head is at the wrong end!

Você está no zoológico, todos os suricatos parecem estranhos. 
Algo deu terrivelmente errado e alguém mudou suas cabeças e caudas!

Salve os animais trocando-os de volta. 
Você receberá um array que terá três valores [tail, body, head] (cauda, ​​corpo, cabeça). 

É sua função é ordenar-lo de modo que o animal fique do jeito certo
[head, body, tail] (cabeça, corpo, cauda).

O mesmo vale para todos os outros arrays que você obterá nos testes: 
você deve alterar as posições dos elementos com a mesma lógica.
*/

function fixTheMeerkat([tail, body, head]) {
  return [head, body, tail];
}

function fixTheMeerkat(arr) {
  const end = arr.shift();
  const begin = arr.pop();
  arr.push(end);
  arr.unshift(begin);
  return arr;
}
function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}

{
  // Teste 1 deve retornar ["head", "body", "tail"]
  const sample = ["tail", "body", "head"];
  const expected = ["head", "body", "tail"];
  console.log(fixTheMeerkat(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar ["heads", "body", "tails"]
  const sample = ["tails", "body", "heads"];
  const expected = ["heads", "body", "tails"];
  console.log(fixTheMeerkat(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar ["upper legs", "torso", "lower legs"]
  const sample = ["lower legs", "torso", "upper legs"];
  const expected = ["upper legs", "torso", "lower legs"];
  console.log(fixTheMeerkat(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar ["sky", "rainbow", "ground"]
  const sample = ["ground", "rainbow", "sky"];
  const expected = ["sky", "rainbow", "ground"];
  console.log(fixTheMeerkat(sample));
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

  const resultFn = fixTheMeerkat(sample);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
