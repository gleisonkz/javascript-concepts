// global scope
let number = 10;

function getNumber() {
  // function or local scope

  function logNumber() {
    // function or local scope
    console.log(number);
  }
  logNumber();
}
getNumber();
