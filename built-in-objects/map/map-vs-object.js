// Supported keys type

{
  const obj = {};
  obj[Symbol("key")] = "value";
  obj[1] = "value";
  obj[true] = "value";
  obj[{}] = "using object as key";

  console.log(obj);
}
