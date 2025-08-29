// ========== Operación RESTA ==========

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Manejo del botón de RESTA
function calcularResta() {
  const num1 = parseFloat(document.getElementById("resta1").value);
  const num2 = parseFloat(document.getElementById("resta2").value);

  const resultado = restar(num1, num2);

  document.getElementById("resultadoResta").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar los inputs y resultado de la resta
function limpiarResta() {
  document.getElementById("resta1").value = "";
  document.getElementById("resta2").value = "";
  document.getElementById("resultadoResta").innerHTML = "";
}

