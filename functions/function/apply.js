{
  const numbers = [5, 6, 2, 3, 7];

  const max = Math.max.apply(null, numbers);
  console.log(max);

  const min = Math.min.apply(null, numbers);
  console.log(min);

  const array = ["a", "b"];
  const elements = [0, 1, 2];
  array.push.apply(array, elements);
  console.log(array);
}
