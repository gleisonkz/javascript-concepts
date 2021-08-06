{
  const expression = /test/g;
  const message = "test1test2";

  const result = [...message.matchAll(expression)];

  console.log(result.length);
  console.log(result);

  const [match] = result[0];
  const { index, input, groups } = result[0];
  console.log(match);
  console.log(index);
  console.log(input);
  console.log(groups);
}
