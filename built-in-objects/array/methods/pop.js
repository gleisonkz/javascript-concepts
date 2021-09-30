/* Array.prototype.pop

remove e retorna o ultimo item de um array.
*/

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
const removedPlant = plants.pop();
console.log(removedPlant);
console.log(plants);
plants.pop();
console.log(plants);

const fishes = ["angel", "clown", "mandarin", "sturgeon"];
const popped = fishes.pop();
console.log(popped);
console.log(fishes);
fishes.pop();
console.log(fishes);
fishes.pop();
console.log(fishes);
fishes.pop();
console.log(fishes);
console.log(fishes.pop());
