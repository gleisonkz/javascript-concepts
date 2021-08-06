/*

Kata Nível 8 kyu - Convert boolean values to strings 'Yes' or 'No'.

Conclua o método que recebe um valor booleano e 
retorne uma string "Sim" para verdadeiro 
ou uma string "Não" para falso.

*/

function boolToWord(bool) {
  return ["No", "Yes"][+bool];
}

function boolToWord(bool) {
  if (bool) return "Yes";
  return "No";
}
function boolToWord(bool) {
  return (bool && "Yes") || "No";
}

{
  // Teste 1 deve retornar "Yes"
  const sample = true;
  const expected = "Yes";
  console.log(boolToWord(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar "No"
  const sample = false;
  const expected = "No";
  console.log(boolToWord(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return boolToWord(sample) === expected ? "OK" : "Algo deu errado";
}
