// Apenas let e const possuem escopo de bloco

var a = 5;
const age = 20;

if (age > 10) {
  var x = 2;
  let y = 3;
  const z = 10;
}

console.log(x);
console.log(z);
// erro pois y só existe no escopo do if also same error as const
console.log(y);
// erro pois y só existe no escopo do if also same error as const
