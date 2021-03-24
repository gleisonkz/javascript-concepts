{
  const $button = document.querySelector("button");
  const $input = document.querySelector("input");
  const $convertedValue = document.querySelector("#converted-value");

  $button.onclick = () => {
    const convertedValue = convertToReal(+$input.value);
    $convertedValue.innerHTML = convertedValue;
  };

  function convertToReal(value) {
    return !value ? "Valor inválido!" : `São R$ ${(value * 5.5).toFixed(2)}`;
  }
}
