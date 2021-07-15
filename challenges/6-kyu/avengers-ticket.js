/*

Desafio Nível - 6 kyu

O novo filme dos "Vingadores" acaba de ser lançado! Há muitas pessoas na bilheteria 
do cinema em uma fila enorme. Cada um deles tem uma única nota de 100, 50 ou 25 dólares. 
Um ingresso para o filme "Avengers" custa 25 dólares.

John está trabalhando atualmente como caixa . 
Ele quer vender um ingresso para cada pessoa nesta fila.

John pode vender um ingresso para cada pessoa e dar o troco 
se ele inicialmente não tiver dinheiro e vender 
os ingressos estritamente na fila de espera das pessoas?

Retorne SIM, se John puder vender um ingresso para cada pessoa e dar o troco
com as notas que ele tem em mãos naquele momento. Caso contrário, retorne NÃO.

Exemplos:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. John não terá dinheiro o suficiente para dar troco para 100 dólares
tickets([25, 25, 50, 50, 100]) // => NO. John não terá notas para dar 75 dólares de troco (você não pode fazer duas notas de 25 de uma de 50)

*/

function ticketsOld(peopleBills) {
  let [$25, $50] = [0, 0];

  for (let i = 0; i < peopleBills.length; i++) {
    const currentBill = peopleBills[i];

    if (currentBill === 25) $25++;
    if (currentBill === 50) $50++, $25--;
    if (currentBill === 100) $25--, $50 ? $50-- : ($25 -= 2);
    if ($25 < 0 || $50 < 0) return "NO";
  }

  return "YES";
}

function tickets(queue) {
  const register = [];
  const ticketPrice = 25;
  queue = [...queue];

  function hasChangeFor(changeDue) {
    register.sort((a, b) => b - a);
    let billSum = 0;
    let calcChangeDue = changeDue;

    for (let index = 0; index < register.length; index++) {
      const bill = register[index];
      if (bill > changeDue) continue;
      calcChangeDue -= bill;
      if (calcChangeDue > -1) {
        billSum += register.splice(index, 1)[0];
        index--;
      }
      if (calcChangeDue === 0) break;
    }

    return billSum === changeDue;
  }

  while (queue.length) {
    const currentBill = queue.shift();
    const changeDue = currentBill - ticketPrice;
    if (changeDue > 0 && hasChangeFor(changeDue) == false) return "NO";
    register.push(currentBill);
  }

  return "YES";
}

// Teste 1 deve retornar YES
const sample1 = [25, 25];
console.log(tickets(sample1));
console.log(assert(sample1, "YES"));

// Teste 2 deve retornar NO
const sample2 = [25, 100];
console.log(tickets(sample2));
console.log(assert(sample2, "NO"));

// Teste 3 deve retornar YES
const sample3 = [25, 25, 50];
console.log(tickets(sample3));
console.log(assert(sample3, "YES"));

// Teste 3 deve retornar YES
const sample4 = [25, 25, 25, 100];
console.log(tickets(sample4));
console.log(assert(sample4, "YES"));

// Teste 5 deve retornar NO
const sample5 = [25, 25, 50, 50, 100];
console.log(tickets(sample5));
console.log(assert(sample5, "NO"));

// Teste 6 deve retornar YES
const sample6 = [
  25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100,
];
console.log(tickets(sample6));
console.log(assert(sample6, "YES"));

// Teste 7 deve retornar YES
const sample7 = [25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100];
console.log(tickets(sample7));
console.log(assert(sample7, "YES"));

// Teste 8 deve retornar NO
const sample8 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
console.log(tickets(sample8));
console.log(assert(sample8, "NO"));

// Teste 9 deve retornar NO
const sample9 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
console.log(tickets(sample9));
console.log(assert(sample9, "NO"));

// Teste 10 deve retornar NO
const sample10 = [25, 50, 100, 25, 25, 25, 50];
console.log(tickets(sample10));
console.log(assert(sample10, "NO"));

// Teste 11 deve retornar YES
const sample11 = [25, 25, 25, 25, 50, 100, 50];
console.log(tickets(sample11));
console.log(assert(sample11, "YES"));

function assert(sample, expected) {
  return tickets(sample) === expected ? "OK" : "Algo deu errado";
}
