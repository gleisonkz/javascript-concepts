({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: { file: "test.html" }, // Located in project root
});

const input$ = document.querySelector("input");
console.log(input$.value);
