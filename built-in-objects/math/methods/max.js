{
  const numbers = Array.from(Array(124934), (_, i) => i + 1);
  {
    // Max + Apply
    const max = Math.max.apply(null, numbers);
    console.log(max);
  }

  {
    // Max + Spread
    const max = Math.max(...numbers);
    console.log(max);
  }
  {
    // Max + Reduce
    const max = numbers.reduce((a, b) => Math.max(a, b));
    console.log(max);
  }
}
