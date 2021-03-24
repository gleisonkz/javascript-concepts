{
  function doSomething(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments.length);
    console.log(arguments.callee);
  }

  doSomething(1, 2, 3);
}
