/*

Kata Nível 8 kyu - Check the exam

O primeiro array de entrada contém as respostas corretas de um exame, como ["a", "a", "b", "d"]. 
O segundo contém as respostas enviadas por um aluno.

Os dois arrays não estarão vazios e têm o mesmo comprimento. 

Retorne a pontuação do aluno de acordo com o array de de respostas, 
dando:

+4 para cada resposta correta, 
-1 para cada resposta incorreta e 
+0 para cada resposta em branco (string vazia), 


caso o total te pontos seja negativo retorne 0.

*/

function checkExam(examAnswers, studentAnswers) {
  const zip = (...rows) => rows[0].map((_, index) => rows.map((row) => row[index]));
  const getFactor = (studentAnswer, examAnswer) =>
    (studentAnswer && (studentAnswer === examAnswer ? 4 : -1)) || 0;

  const zippedAnswers = zip(studentAnswers, examAnswers);

  const total = zippedAnswers.reduce((acc, [studentAnswer, examAnswer]) => {
    return acc + getFactor(studentAnswer, examAnswer);
  }, 0);

  return total;
}

function checkExam(examAnswers, studentAnswers) {
  const getFactor = (studentAnswer, examAnswer) =>
    (studentAnswer && (studentAnswer === examAnswer ? 4 : -1)) || 0;

  let total = 0;

  for (let index = 0; index < examAnswers.length; index++) {
    const studentAnswer = studentAnswers[index];
    const examAnswer = examAnswers[index];

    const factor = getFactor(studentAnswer, examAnswer);
    total += factor;
  }

  const isNegative = total < 0;
  return isNegative ? 0 : total;
}

function checkExam(examAnswers, studentAnswers) {
  const points = studentAnswers.map((studentAnswer, index) => {
    if (studentAnswer === "") return 0;
    const examAnswer = examAnswers[index];
    return examAnswer === studentAnswer ? 4 : -1;
  });

  const total = points.reduce((acc, point) => acc + point, 0);
  const isNegative = total < 0;
  return isNegative ? 0 : total;
}

{
  //Teste 1
  const [a, b] = [
    ["a", "a", "b", "b"],
    ["a", "c", "b", "d"],
  ];

  const expected = 6; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 2
  const [a, b] = [
    ["a", "a", "c", "b"],
    ["a", "a", "b", ""],
  ];

  const expected = 7; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 3
  const [a, b] = [
    ["a", "a", "b", "c"],
    ["a", "a", "b", "c"],
  ];
  const expected = 16; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 4
  const [a, b] = [
    ["b", "c", "b", "a"],
    ["", "a", "a", "c"],
  ];
  const expected = 0; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

function assert(a, b, expected) {
  const resultFn = checkExam(a, b);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
