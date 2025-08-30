// ========== Operación RESTA ==========

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Manejo del botón de RESTA
function calcularResta() {
  const num1 = parseFloat(document.getElementById("restaA").value);
  const num2 = parseFloat(document.getElementById("restaB").value);

  const resultado = restar(num1, num2);

  document.getElementById("resultadoResta").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar los inputs y resultado de la resta
function limpiarResta() {
  document.getElementById("restaA").value = "";
  document.getElementById("restaB").value = "";
  document.getElementById("resultadoResta").innerHTML = "";
}


// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Manejo del botón de MULTIPLICAR
function calcularMultiplicacion() {
  const num1 = parseFloat(document.getElementById("multiA").value);
  const num2 = parseFloat(document.getElementById("multiB").value);

  const resultado = multiplicar(num1, num2);

  document.getElementById("resultadoMultiplicacion").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs y resultado de multiplicación
function limpiarMultiplicacion() {
  document.getElementById("multiA").value = "";
  document.getElementById("multiB").value = "";
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
  const num1 = parseFloat(document.getElementById("divA").value);
  const num2 = parseFloat(document.getElementById("divB").value);

  const resultado = dividir(num1, num2);

  document.getElementById("resultadoDivision").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs y resultado de división
function limpiarDivision() {
  document.getElementById("divA").value = "";
  document.getElementById("divB").value = "";
  document.getElementById("resultadoDivision").innerHTML = "";
}

// ========== Operación EXPONENTE ==========

// Función para calcular exponente (base^exponente)
function exponente(expBase, expEpx) {
  return Math.pow(expBase, expEpx);
}

// Manejo del botón EXPONENTE
function calcularExponente() {
  const base = parseFloat(document.getElementById("expBase").value);
  const exp = parseInt(document.getElementById("expExp").value);

  const resultado = exponente(expBase, expEpx);

  document.getElementById("resultadoExponente").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs
function limpiarExponente() {
  document.getElementById("expBase").value = "";
  document.getElementById("expExp").value = "";
  document.getElementById("resultadoExponente").innerHTML = "";
}

// ========== Operación RAÍZ CUADRADA ==========

// Función para calcular raíz cuadrada
function raizCuadrada(raizN) {
  if (n < 0) return "Error: no se puede con nEpxegativos";
  return Math.sqrt(raizN);
}

// Manejo del botón RAÍZ
function calcularRaiz() {
  const num = parseFloat(document.getElementById("raizN").value);

  const resultado = raizCuadrada(num);

  document.getElementById("resultadoRaiz").innerHTML = `Resultado: ${resultado}`;
}

// Limpiar inputs
function limpiarRaiz() {
  document.getElementById("raizN").value = "";
  document.getElementById("resultadoRaiz").innerHTML = "";
}
