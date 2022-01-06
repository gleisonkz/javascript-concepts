const map = new Map();

map.set("string", "value");
map.set(1, "value");
map.set(true, "value");
map.set(null, "value");
map.set(undefined, "value");
map.set(Symbol("symbol"), "value");

map.forEach((value, key) => {
  console.log(key, value);
});

const weakMap = new WeakMap();
const obj1 = {};
const date = new Date();
const num = new Number(1);

weakMap.set(obj1, "value");
weakMap.set(date, "value");
weakMap.set(num, "value");

weakMap.forEach((value, key) => {
  console.log(key, value);
});
