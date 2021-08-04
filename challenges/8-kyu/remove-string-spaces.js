/*

Kata Nível 8 kyu - Remove String Spaces

Simples, remova os espaços da string e retorne a string resultante.
*/

const noSpace = (string) => {
  // return string.split(' ').join('')
  return string.replace(/\s/g, "");
};

{
  // Teste 1 deve retornar 8j8mBliB8gimjB8B8jlB
  const sample = "8 j 8   mBliB8g  imjB8B8  jl  B";
  console.log(noSpace(sample));
  console.log(assert(sample, "8j8mBliB8gimjB8B8jlB"));
}
{
  // Teste 2 deve retornar 88Bifk8hB8BB8BBBB888chl8BhBfd
  const sample = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd";
  console.log(noSpace(sample));
  console.log(assert(sample, "88Bifk8hB8BB8BBBB888chl8BhBfd"));
}
{
  // Teste 3 deve retornar 8aaaaaddddr
  const sample = "8aaaaa dddd r     ";
  console.log(noSpace(sample));
  console.log(assert(sample, "8aaaaaddddr"));
}

function assert(sample, expected) {
  const resultFn = noSpace(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
