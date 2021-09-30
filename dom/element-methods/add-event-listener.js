{
  /* addEventListener()
registra um manipulador de eventos
para um tipo de evento específico de um elemento.
*/

  const $button = document.getElementById("myBtn");
  $button.addEventListener("click", hello);

  function hello() {
    alert("Hello World!");
  }
}
