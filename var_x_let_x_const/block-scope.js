BlockScope: {
  var a = 5;
  {
    var x = 2;
    let y = 3;
    const z = 10;
  }

  console.log(x);
  console.log(z);
  console.log(y); // also same error as const
}
