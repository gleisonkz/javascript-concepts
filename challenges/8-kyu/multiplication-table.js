/*
Kata Nível 8 kyu - Multiplication table for number

Seu objetivo é retornar a tabuada para o número 
que é sempre um inteiro de 1 a 10. Por exemplo, 
uma tabuada como (string) para number == 5 
deverá ter a seguinte aparência:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

Você deve usar \n na string para pular para a próxima linha. 
porem os \n deve ser adicionado entre as linhas, 
a ultima linha não deve conter \n.
*/

function multiTable(number) {
  return Array.from(
    Array(10),
    (_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`
  ).join("\n");
}

// Teste 1
const expect1 =
  "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50";
console.log(multiTable(5));
console.log(multiTable(5) === expect1);

// Teste 2
const expect2 =
  "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10";
console.log(multiTable(1));
console.log(multiTable(1) === expect2);
