Array.prototype.where = function (callback) {
  const newArr = [];
  if (this.length === 0) return newArr;
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    const isMatch = callback(element, index, this);
    isMatch && newArr.push(element);
  }
  return newArr;
};

const numbers = [1, 2, 3, 4, 5, 6];
const letters = ["a", "b", "c", "d", "e"];

console.log(numbers.where((c) => c > 4));
console.log(letters.where((c) => c === "b"));
