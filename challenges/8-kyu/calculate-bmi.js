/*

Kata Nível 8 kyu - Calculate BMI

Escreva a função bmi que calcula o 
índice de massa corporal (bmi = weight / height ** 2). 

se bmi <= 18,5 retornar "Underweight" 
se bmi <= 25,0 retornar "Normal" 
se bmi <= 30,0 retornar "Overweight" 
se bmi> 30 retornar "Obese"

*/

function bmi(weight, height) {
  const bmi = weight / height ** 2;

  const expectations = [
    { expect: bmi <= 18.5, action: "Underweight" },
    { expect: bmi <= 25, action: "Normal" },
    { expect: bmi <= 30, action: "Overweight" },
    { expect: true, action: "Obese" },
  ];

  const expectation = expectations.find(
    (expectation) => expectation.expect
  ).action;

  return expectation;
}

{
  // Teste 1 deve retornar Underweight
  const [weight, height] = [50, 1.8];
  const expected = "Underweight";
  console.log(bmi(weight, height));
  console.log(assert(weight, height, expected));
}

{
  // Teste 2 deve retornar Normal
  const [weight, height] = [80, 1.8];
  const expected = "Normal";
  console.log(bmi(weight, height));
  console.log(assert(weight, height, expected));
}

{
  // Teste 3 deve retornar Overweight
  const [weight, height] = [90, 1.8];
  const expected = "Overweight";
  console.log(bmi(weight, height));
  console.log(assert(weight, height, expected));
}

{
  // Teste 4 deve retornar Obese
  const [weight, height] = [110, 1.8];
  const expected = "Obese";
  console.log(bmi(weight, height));
  console.log(assert(weight, height, expected));
}

function assert(weight, height, expected) {
  return bmi(weight, height) === expected ? "OK" : "Algo deu errado";
}
