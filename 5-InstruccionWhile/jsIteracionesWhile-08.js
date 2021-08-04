/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  // 1- declaro variables (respuesta/numero/acumulador de positivos y acumuladores de negativos)
  let numero;
  let respuesta;
  let acumPos = 0;
  let acumNeg = 1;
  let flag = 1;

  // 2- generar un bucle del tipo mientras el usuario quiera (do-while)
  do {
    // 2.1- pido el numero
    numero = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
	}
    // 2.2- analizar el signo del numero (generar un scope para los positivos y otro para los negativos)
    if (numero >= 0) {
      //positivos
      //sumo los positivos
      acumPos += numero; // acumPos = acumPos + numero;
    } else {
      //negativos
      //multiplico los negativos
      acumNeg *= numero; // acumNeg = acumNeg * numero;
	  flag = 0;
    }
	respuesta = prompt ("Quiere ingresar otro numero?:");
  } while (respuesta == "si");
  if (flag){
	  acumNeg = 0;
  }
  // 3- mostramos los resultados
  document.getElementById("txtIdSuma").value = acumPos;
  document.getElementById("txtIdProducto").value = acumNeg;
} //FIN DE LA FUNCIÓN