/*

Kata Nível 8 kyu - Alan Partridge II - Apple Turnover

Alan é conhecido por se referir à temperatura 
do giro da maçã como "Mais quente que o sol!". 

De acordo com o site space.com, a temperatura 
da coroa solar é de 2.000.000 graus C, mas vamos 
ignorar a ciência por enquanto.

Seu trabalho é simples, se (x) ao quadrado for maior que 1000, 
retorne "It's hotter than the sun!!", 
caso contrário, retorne "Help yourself to a honeycomb Yorkie for the glovebox."

*/

function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

{
  // Teste 1 deve retornar It's hotter than the sun!!
  const sample = "50";
  const expected = "It's hotter than the sun!!";
  console.log(apple(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar Help yourself to a honeycomb Yorkie for the glovebox.
  const sample = 4;
  const expected = "Help yourself to a honeycomb Yorkie for the glovebox.";
  console.log(apple(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return apple(sample) === expected ? "OK" : "Algo deu errado";
}
