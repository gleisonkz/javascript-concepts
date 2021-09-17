// Exemplo da técnica de debounce aplicada
// com uma função
function debounce(callback, timeout) {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(), timeout);
  };
}
