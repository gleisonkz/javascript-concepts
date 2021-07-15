/*

Desafio 6 kyu - Formate uma sequência de nomes como 'Bart, Lisa e Maggie'.

Escreva uma função que retorne uma string formatada como uma lista
de nomes separados por vírgula, exceto para os dois últimos nomes, 
que devem ser separados por um &.

Exemplo1: para os nomes 'Bart, Lisa e Maggie', a função deve retornar
'Bart, Lisa & Maggie'.

Exemplo2: para os nomes 'Bart, Lisa', a função deve retornar
'Bart & Lisa'.

Exemplo3: para os nomes 'Bart', a função deve retornar
'Bart'.

*/

function listNames(names) {
  return names
    .map((c) => c.name)
    .join(", ")
    .replace(/,\s([^,]+)$/, " & $1");
}

/* Regex
 ,\s seleciona a virgula + um espaço em branco

( Inicio do grupo de captura
  [^ Conjunto Negado - seleciona todos os caracteres que não contiver dentro do conjunto
    , seleciona o carácter da virgula
  ]
   + seleciona 1 ou mais do caracteres dentro do conjunto 
) Fim do grupo de captura

 $ seleciona o final da linha
*/

// Teste 1 deve retornar 'Bart, Lisa & Maggie';
console.log(
  listNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
);
console.log(
  listNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]) ===
    "Bart, Lisa & Maggie"
);

// Teste 2 deve retornar 'Bart & Lisa';
console.log(listNames([{ name: "Bart" }, { name: "Lisa" }]));
console.log(listNames([{ name: "Bart" }, { name: "Lisa" }]) === "Bart & Lisa");

// Teste 3 deve retornar 'Bart';
console.log(listNames([{ name: "Bart" }]));
console.log(listNames([{ name: "Bart" }]) === "Bart");

// Teste 4 deve retornar '';
console.log(listNames([]));
console.log(listNames([]) === "");
