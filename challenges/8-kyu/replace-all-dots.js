/*

Kata Nível 8 kyu - Replace all dots

Seu objetivo é substituir todos os pontos 
na String str especificada com traços 

Nota: A string str nunca será nula.
*/

const replaceDots = (str) => {
  return str.replace(/\./g, "-");
};

const replaceDots2 = (str) => {
  return str.split(".").join("-");
};

// Teste 1 deve retornar one-two-three
let sample = "one.two.three";
console.log(replaceDots(sample));
console.log(assert(sample, "one-two-three"));

// Teste 2 deve retornar ""
sample = "";
console.log(replaceDots(sample));
console.log(assert(sample, ""));

// Teste 3 deve retornar no dots
sample = "no dots";
console.log(replaceDots(sample));
console.log(assert(sample, "no dots"));

// Teste 4 deve retornar no dots
sample = "...";
console.log(replaceDots(sample));
console.log(assert(sample, "---"));

function assert(sample, expected) {
  return replaceDots(sample) === expected ? "OK" : "Algo deu errado";
}
