function calcularPropina(valorComida, porcentajePropina) {
  const propina = (valorComida * porcentajePropina) / 100;
  return propina;
}


document.querySelector("button").addEventListener("click", function() {
    const valorComida = parseFloat(document.querySelector("#Precio").value);
    const porcentajePropina = parseFloat(document.querySelector("#Propina").value);
  
    if (!isNaN(valorComida) && !isNaN(porcentajePropina)) {
      const propina = calcularPropina(valorComida, porcentajePropina);
      document.querySelector(".result p").textContent = `La propina a dar es: $${propina.toFixed(2)}`;
    } else {
      document.querySelector(".result p").textContent = "Por favor, ingrese valores válidos.";
    }
  });
  