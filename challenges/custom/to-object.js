/*

Kata Nível 8 kyu - Give me a object!

Implemente a função abaixo que receber um parâmetro key e value
que deve retornar um objeto onde na chave do objeto deve ser concatenada com ID.
e o value deve receber o valor.

caso não seja passado argumento para função o retorno deve ser null
*/

function toObjet(key, value) {
  const isEmpty = () => [key, value].includes(undefined);
  return isEmpty() ? null : { [key + "ID"]: value };
}

{
  // Teste 1 deve retornar { userID: 1 }
  const [key, value] = ["user", 1];
  const expected = { userID: 1 };
  console.log(toObjet(key, value));
  console.log(assert(key, value, expected));
}
{
  // Teste 2 deve retornar { chargeID: 5 }
  const [key, value] = ["charge", 5];
  const expected = { chargeID: 5 };
  console.log(toObjet(key, value));
  console.log(assert(key, value, expected));
}
{
  // Teste 3 deve retornar { accountID: 5 }

  const [key, value] = ["account", 21355];
  const expected = { accountID: 21355 };
  console.log(toObjet(key, value));
  console.log(assert(key, value, expected));
}
{
  // Teste 4 deve retornar null

  const expected = null;
  const result = toObjet();
  console.log(result);
  console.log(assertException(result, expected));
}

function assert(key, value, expected) {
  const resultFn = toObjet(key, value);
  const isEqual = JSON.stringify(resultFn) === JSON.stringify(expected);
  return isEqual ? "OK" : "Algo deu errado";
}

function assertException(result, expected) {
  return result === expected ? "OK" : "Algo deu errado";
}
