// não é possível re-declarar variáveis usando let e const

var user = "John";
var user = "Doe";

console.log(user); // ok pois var pode ser re-declarada

const z = 1;
const z = 3; // erro pois não é possível re-declarar usando const
console.log(z);

let y = 1;
let y = 3; // erro pois não é possível re-declarar usando let
console.log(y);
