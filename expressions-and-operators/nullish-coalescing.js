{
  const foo = null ?? "default string";
  console.log(foo);

  const baz = undefined ?? 42;
  console.log(baz);

  const nullValue = null;
  const emptyText = "";
  const someNumber = 42;

  const valueA = nullValue ?? "default for A";
  const valueB = emptyText ?? "default for B";
  const valueC = someNumber ?? 0;

  console.log(valueA);
  console.log(valueB);
  console.log(valueC);
}
