{
  function reverseWords(words) {
    const reverse = (str) => str.split("").reverse().join("");

    return words
      .split(" ")
      .map((word) => {
        return word.length > 4 ? reverse(word) : word;
      })
      .join(" ");
  }

  console.log(reverseWords("Hey fellow warriors"));
  console.log(reverseWords("This is a test"));
  console.log(reverseWords("This is another test"));
}
{
  function reverseWords(words) {
    return words.replace(/\w{5,}/g, (word) => word.split("").reverse().join(""));
  }

  console.log(reverseWords("Hey fellow warriors"));
  console.log(reverseWords("This is a test"));
  console.log(reverseWords("This is another test"));
}
