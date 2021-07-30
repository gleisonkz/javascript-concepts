/*

Kata Nível 8 kyu - Convert boolean values to strings 'Yes' or 'No'.

Conclua o método que recebe um valor booleano e 
retorne uma string "Sim" 
para verdadeiro ou uma string "Não" para falso.

*/

function boolToWord(bool) {
  return ["No", "Yes"][+bool];
}

{
  // Teste 1 deve retornar "Yes"
  const sample = true;
  console.log(boolToWord(sample));
  console.log(assert(sample, "Yes"));
}

{
  // Teste 2 deve retornar "No"
  const sample = false;
  console.log(boolToWord(sample));
  console.log(assert(sample, "No"));
}

function assert(sample, expected) {
  return boolToWord(sample) === expected ? "OK" : "Algo deu errado";
}
