/*
Pra vocês que gostam de desafio, crie um algoritmo que verifique o fechamento dos seguintes símbolos: (  ) [  ] {  } < >.
Entradas corretas:
()
{}
<>
[{}]()
Entradas incorretas:
{
[{]}
({}[)]
][
*/

function checkSyntax(pattern) {
  const openings = ["(", "[", "{", "<"];
  const closings = { ")": "(", "]": "[", "}": "{", ">": "<" };
  let stack = [];

  for (let i = 0; i < pattern.length; i++) {
    let current = pattern[i];

    if (openings.includes(current)) {
      stack.push(current);
      continue;
    }

    if (stack.length == 0) return false;

    const popped = stack.pop();
    const opening = closings[current];
    if (popped !== opening) return false;
  }

  return stack.length == 0;
}

console.log(checkSyntax("["));
console.log(checkSyntax("{"));
console.log(checkSyntax("<"));
console.log(checkSyntax("["));

console.log(checkSyntax("}{"));
console.log(checkSyntax("><"));
console.log(checkSyntax("]["));
console.log(checkSyntax("}{"));

console.log(checkSyntax("{[{]}}"));
console.log(checkSyntax("(()[({(())}])"));
console.log(checkSyntax("(()[({(())}]))"));

console.log(checkSyntax("[]"));
console.log(checkSyntax("{}"));
console.log(checkSyntax("<>"));
console.log(checkSyntax("[]"));
console.log(checkSyntax("[]()<>{}"));
console.log(checkSyntax("{(([{}]))}"));
