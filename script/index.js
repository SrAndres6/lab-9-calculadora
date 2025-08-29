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


// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Manejo del botón de MULTIPLICAR
function calcularMultiplicacion() {
  const num1 = parseFloat(document.getElementById("multi1").value);
  const num2 = parseFloat(document.getElementById("multi2").value);

  const resultado = multiplicar(num1, num2);

  document.getElementById("resultadoMultiplicacion").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs y resultado de multiplicación
function limpiarMultiplicacion() {
  document.getElementById("multi1").value = "";
  document.getElementById("multi2").value = "";
  document.getElementById("resultadoMultiplicacion").innerHTML = "";
}

// Función para dividir dos números
function dividir(a, b) {
  if (b === 0) {
    return "Error: división entre 0";
  }
  return a / b;
}

// Manejo del botón de DIVISIÓN
function calcularDivision() {
  const num1 = parseFloat(document.getElementById("div1").value);
  const num2 = parseFloat(document.getElementById("div2").value);

  const resultado = dividir(num1, num2);

  document.getElementById("resultadoDivision").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs y resultado de división
function limpiarDivision() {
  document.getElementById("div1").value = "";
  document.getElementById("div2").value = "";
  document.getElementById("resultadoDivision").innerHTML = "";
}

// ========== Operación EXPONENTE ==========

// Función para calcular exponente (base^exponente)
function exponente(base, exp) {
  return Math.pow(base, exp);
}

// Manejo del botón EXPONENTE
function calcularExponente() {
  const base = parseFloat(document.getElementById("base").value);
  const exp = parseInt(document.getElementById("exp").value);

  const resultado = exponente(base, exp);

  document.getElementById("resultadoExponente").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs
function limpiarExponente() {
  document.getElementById("base").value = "";
  document.getElementById("exp").value = "";
  document.getElementById("resultadoExponente").innerHTML = "";
}
