{
  const numbers = Array.from(Array(124934), (_, i) => i + 1);
  {
    // Max + Apply
    const max = Math.min.apply(null, numbers);
    console.log(max);
  }

  {
    // Max + Spread
    const max = Math.min(...numbers);
    console.log(max);
  }
  {
    // Max + Reduce
    const max = numbers.reduce((a, b) => Math.min(a, b));
    console.log(max);
  }
}
