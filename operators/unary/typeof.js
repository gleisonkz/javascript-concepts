// Numbers
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof Number("1"));

// Strings
console.log(typeof "");
console.log(typeof "bla");
console.log(typeof `template literal`);
console.log(typeof "1");
console.log(typeof typeof 1);
console.log(typeof String(1));

// Booleans
console.log(typeof true);
console.log(typeof false);
console.log(typeof Boolean(1));
console.log(typeof !!1);

// Symbols
console.log(typeof Symbol());
console.log(typeof Symbol("foo"));
console.log(typeof Symbol.iterator);

// Undefined

var declaredButUndefinedVariable;
console.log(typeof undeclaredVariable);
console.log(typeof undefined);
console.log(typeof declaredButUndefinedVariable);

// Objects

console.log(typeof { a: 1 });
console.log(typeof [1, 2, 4]);
console.log(typeof new Date());
console.log(typeof /[a-z]/);
console.log(typeof arguments);
console.log(typeof null);
console.log(typeof new String("a"));
console.log(typeof new Number(1));

// Functions

console.log(typeof function () {});
console.log(typeof (() => {}));
console.log(typeof class Human {});
console.log(typeof Math.max);
console.log(typeof new Function());
console.log(typeof Symbol);

{
  console.log(typeof 42);
  console.log(typeof 3.14);
  console.log(typeof "");
  console.log(typeof "bla");
  console.log(typeof Symbol());
  console.log(typeof Symbol("foo"));
  console.log(typeof undeclaredVariable);
  console.log(typeof undefined);
  console.log(typeof { a: 1 });
  console.log(typeof [1, 2, 4]);
  console.log(typeof new Date());
  console.log(typeof /[a-z]/);
  console.log(typeof function () {});
  console.log(typeof (() => {}));
  console.log(typeof class Human {});
  console.log(typeof Math.max);
}
