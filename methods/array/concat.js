{
  /* Array.Prototype.concat

    retorna um novo array mesclando dois ou mais arrays.
    este método não altera os arrays existentes, mas retorna um novo array.
  */

  {
    // mesclando 2 arrays
    const letters = ["a", "b", "c"];
    const numbers = [1, 2, 3];

    const mergedArray = letters.concat(numbers);
    console.log(mergedArray);
  }

  {
    // mesclando 3 arrays
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [7, 8, 9];

    const numbers = num1.concat(num2, num3);
    console.log(numbers);
  }

  {
    // mesclando valores primitivos e arrays

    const letters = ["a", "b", "c"];
    const alphaNumeric = letters.concat(1, [2, 3], 4);
    console.log(alphaNumeric);
  }
}
