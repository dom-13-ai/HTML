document.getElementById('btnConvertir').addEventListener('click', function () {
  const inputCampo = document.getElementById('temperatura');
  const valorTexto = inputCampo.value.trim();
  const tipoConversion = document.getElementById('tipoConversion').value;
  const contenedorResultado = document.getElementById('resultado');

  // Validación de campo vacío
  if (valorTexto === "") {
    alert("Por favor, ingresa una temperatura antes de convertir.");
    contenedorResultado.innerHTML = "";
    return;
  }

  const temperatura = parseFloat(valorTexto);

  if (isNaN(temperatura)) {
    alert("Por favor, ingresa un número válido.");
    contenedorResultado.innerHTML = "";
    return;
  }

  let resultado = 0;
  let mensaje = "";

  // Fórmulas de conversión
  if (tipoConversion === "cToF") {
    resultado = (temperatura * 9 / 5) + 32;
    mensaje = `Temperatura ingresada: ${temperatura} °C<br>` +
              `Tipo de conversión: Celsius a Fahrenheit<br>` +
              `<strong>Resultado: ${resultado.toFixed(2)} °F</strong>`;
  } else if (tipoConversion === "fToC") {
    resultado = (temperatura - 32) * 5 / 9;
    mensaje = `Temperatura ingresada: ${temperatura} °F<br>` +
              `Tipo de conversión: Fahrenheit a Celsius<br>` +
              `<strong>Resultado: ${resultado.toFixed(2)} °C</strong>`;
  }

  contenedorResultado.innerHTML = mensaje;
});