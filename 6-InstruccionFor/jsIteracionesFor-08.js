function mostrar() {
  let numero;
  let primos = 0;

  numero = parseInt(prompt("Ingrese un numero"));
  while(isNaN(numero) || numero <= 0){
	  numero = parseInt(prompt("ERROR. Ingrese un numero"));
  }

  for (let contador = 1; contador < numero; contador++) {
    if (numero % contador == 0) {
      primos++;
    }
  }
  if (primos == 2 || primos == 1) {
    console.log(numero + " es primo");
  } else {
    console.log(numero + " no es primo");
  }
} //FIN DE LA FUNCIÓN