// A High Order Function is a function that return another function, or a function that
// takes another function as an argument.

// Returning a function from a function
function add(a, b) {
  return () => a + b;
}

add(2, 3)();

// takes a function as an argument
function multiply(a, b, doneFn) {
  const multiply = a * b;
  doneFn(multiply);
}

multiply(2, 3, (result) => console.log(result));
