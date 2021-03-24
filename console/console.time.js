{
  let i = 0;
  console.time("test for loop");
  for (i = 0; i < 1000000; i++) {
    // some code
  }
  console.timeEnd("test for loop");

  i = 0;
  console.time("test while loop");
  while (i < 1000000) {
    i++;
  }
  console.timeEnd("test while loop");
}
