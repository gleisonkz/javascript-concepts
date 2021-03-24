function grandfather() {
  const name = "John";
  // 'likes' não é acessível aqui
  function parent() {
    // 'name' é acessível aqui
    // 'likes' não é acessível aqui
    function child() {
      //  Nível mais interno do aninhamento
      // 'name' também é acessível aqui
      const likes = "Coding";
    }
  }
}
