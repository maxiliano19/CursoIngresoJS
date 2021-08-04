/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let acumPos = 0;
  let acumNeg = 0;
  let contPos = 0;
  let contNeg = 0;
  let contCeros = 0;
  let contPares = 0;
  let promPos = 0;
  let promNeg = 0;
  let diferencia = 0;
  let respuesta;
  let flagPos = 1;
  let flagNeg = 1;

  do {
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
      numero = prompt("Eso no es un numero. Ingrese un nuevo numero:");
    }
    if (numero > 0) {
      acumPos = acumPos + numero; // acumPos += numero
      contPos++;
      flagPos = 0;
    } else if (numero < 0) {
      acumNeg = acumNeg + numero; // acumNeg += numero
      contNeg++;
      flagNeg = 0;
    } else {
      contCeros++;
    }
    // me fijo si el numero es par
    if (numero % 2 == 0) {
      contPares++;
    }

    if (flagPos == 1) {
      promPos = acumPos / contPos;
    }
    if (flagNeg == 1) {
      promNeg = acumNeg / contNeg;
    }
    respuesta = prompt("Quiere ingresar otro numero: (si/no)").toLowerCase();
  } while (respuesta == "si");
  {
    respuesta = prompt("Respuesta invalida. Ingrese nuevamente").toLowerCase();
  }

  diferencia = acumPos - acumNeg;

  alert ("1- suma de los negativos" + acumNeg +
        "\n2- suma de los positivos " + acumPos +
        "\n3- cantidad de positivos " + contPos +
        "\n4- cantidad de negativos " + contNeg +
        "\n5- cantidad de ceros " + contCeros +
        "\n6- cantidad de numeros pares " + contPares +
        "\n7- promedio de positivos " + promPos +
        "\n8- premedio de negativos " + promNeg +
        "\n9- Diferencia entre positivos y negativos " + diferencia);




} //FIN DE LA FUNCIÓN
// estrateguia de resolusion
// 1- declarar variables numero
// -- acumulador negativos / acumulador positivos / contador de positivos / contador de negativos / contador de ceros / contador de pares / promedio positivos / promedio de negativos / diferencia / respuesta
// 2- generar un bucle del tipo mientras el usuario quiera (do-while)
// -- cosas que se repiten van dentro del bucle
// 2.1- pido el numero
// 2.2- valido que sea numero
// 2.3- indentifico el signo del numero (positivo / negativo/ cero)
// 2.3.1- positivo ----> acumulo el numero y lo cuento
// 3.3.2- negativo ----> acumulo el numero y lo cuento
// 3.3.3- cero --> lo cuento
// 3.4- me fijo si el numero es par
// 3.4.1- es par ---> lo cuento
//-------------------------------------------------
// cosas que tengo que hacer despues del bucle
// 4- calculo el primedio de los positivos
// 4.1- calculo el promedio de los negativos
// 4.2- calculo la diferencia entre cantidad de positivos y cantidad de negativos

// 5- muestro los resultados
