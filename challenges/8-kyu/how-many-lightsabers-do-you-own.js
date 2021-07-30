/*

Kata Nível 8 kyu - How many lightsabers do you own?

inspirado pela equipe de desenvolvimento da Vooza, 
escreva a função que aceita o nome de um programador, e
retorna o número de sabres de luz pertencentes a essa pessoa.

A propósito, a única pessoa que possui sabres de luz é Zach. 
Ele tem 18, o que é um número incrível de sabres de luz. 
Qualquer outra pessoa possui 0.

Nota: sua função deve ter um parâmetro padrão.

Por exemplo (entrada -> saída):

"qualquer outra pessoa" -> 0
"Zach" -> 18

*/

function howManyLightsabersDoYouOwn(name = "") {
  return name === "Zach" ? 18 : 0;
}

{
  // Teste 1 deve retornar 0.
  console.log(howManyLightsabersDoYouOwn());
  console.log(assert(null, 0));
}

{
  // Teste 2 deve retornar 0.
  const sample = "Adam";
  console.log(howManyLightsabersDoYouOwn(sample));
  console.log(assert(sample, 0));
}

{
  // Teste 3 deve retornar 18.
  const sample = "Zach";
  console.log(howManyLightsabersDoYouOwn(sample));
  console.log(assert(sample, 18));
}

function assert(sample, expected) {
  const result = sample
    ? howManyLightsabersDoYouOwn(sample)
    : howManyLightsabersDoYouOwn();
  return result === expected ? "OK" : "Algo deu errado";
}
