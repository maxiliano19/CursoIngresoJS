/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // 1- declaracion de variables ----> numero / maximo / minimo / seguir/
  let numero;
  let maximo;
  let minimo;
  let respuesta;
  flag = 1;

  // 2- generar un bucle del tipo mientras el usuario quiera (do-while)
  do {
    // 2.1- pido un numero
    numero = parseInt(prompt("Ingrese un numero"));
    // 2.2- valido el dato (que sea un numero)
    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
    }
    if (flag) {
      maximo = numero;
      minimo = numero;
      flag = 0;
    } else {
      if (flag || numero > maximo) {
        maximo = numero;
      } else if (flag || numero < minimo) {
        minimo = numero;
      }
    }
    /*if (flag || numero > maximo){
		maximo = numero;
	}
	if (flag || numero < minimo){
		minimo = numero
		flag = 0;
	}*/ //manera corta de unificar todo el codigo
    respuesta = prompt("Desea ingresar un nuevo numero (si/no)").toLowerCase();
  } while (respuesta == "si");

  document.getElementById("txtIdMaximo").value = maximo;
  document.getElementById("txtIdMinimo").value = minimo;
} //FIN DE LA FUNCIÓN
// Estrategia de resolucion
// cosas que tengo que hacer dentro del bucle (mas de una vez)
// 2.3- me fijo si es la primera vez
// 2.3.1- si es la primera vez -----> asigno el numero a maximo y a minimo
// 2.3.2- si no es la primera vez
// 2.3.3- me fijo si el numero es un nuevo maximo o un nuevo minimo y
// de ser asi actualizo la variable maximo o minimo segun corresponda
//---------------------------------------------------------
// despues del bucle
// 3. muestro los resultados
