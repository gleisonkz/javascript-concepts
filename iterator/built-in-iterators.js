const array = [10, 20, 30, 40, 50];
const typedArray = new Uint8Array([10, 20, 30, 40, 50]);
const string = "Hello World";
const map = new Map([["one", 1]]);
const set = new Set([1, 2, 3, 4, 5]);

console.log(array[Symbol.iterator]);
console.log(typedArray[Symbol.iterator]);
console.log(string[Symbol.iterator]);
console.log(map[Symbol.iterator]);
console.log(set[Symbol.iterator]);
