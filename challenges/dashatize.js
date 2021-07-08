/*
Dashatize it
Dado uma variável n,

Se n for um inteiro, retorne uma string com traço '-' 
antes e depois de cada inteiro ímpar, 

porem a string do resultado final não pode começar ou terminar com uma marca de traço. 

Se n for negativo, o sinal negativo deve ser removido.

Se n não for um inteiro, retorna um valor vazio.

Ex:

*/

function dashatize(target) {
  const idOdd = (num) => num & 1;

  return [...String(target)]
    .reduce((acc, cur) => (idOdd(cur) ? `${acc}-${cur}-` : `${acc}${cur}`), "")
    .replace(/--/g, "-")
    .replace(/(^-|-$)/g, "");
}

// function dashatize(target) {
//   return [...String(target)]
//     .filter((c) => c != "-")
//     .map((item, index, array) =>
//       index > 0 && (item & 1 || array[index - 1] & 1) ? "-" + item : item
//     )
//     .join("");
// }

// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "");
// }

// Teste 1 deve retornar "2-7-4";
console.log(dashatize(274));
console.log(dashatize(274) === "2-7-4");

// Teste 2 deve retornar "5-3-1-1";
console.log(dashatize(5311));
console.log(dashatize(5311) === "5-3-1-1");

// Teste 3 deve retornar "86-3-20";
console.log(dashatize(86320));
console.log(dashatize(86320) === "86-3-20");

// Teste 4 deve retornar "9-7-4-3-02";
console.log(dashatize(974302));
console.log(dashatize(974302) === "9-7-4-3-02");

// Teste 5 deve retornar "68-1-5";
console.log(dashatize(6815));
console.log(dashatize(6815) === "68-1-5");

// Teste 6 deve retornar "1";
console.log(dashatize(-1));
console.log(dashatize(-1) === "1");

// Teste 7 deve retornar "0";
console.log(dashatize(0));
console.log(dashatize(0) === "0");

// Teste 8 deve retornar "-28-3-6-9";
console.log(dashatize(-28369));
console.log(dashatize(-28369) === "28-3-6-9");

// Teste 9 deve retornar "NaN";
console.log(dashatize(NaN));
console.log(dashatize(NaN) === "NaN");
