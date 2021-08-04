/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let respuesta;
	let acumulador = 0;
	let contador = 0;

	do{
		numero = parseInt(prompt("Dame un numero").toLowerCase());
		acumulador += numero; //acumulador = acumulador + numero; //acumulador acumula numeros variables: siempre hay que inicializarlos 
		contador ++; //contador = contador + 1; //contador acumula numeros constante: siempre inicializarlos
		respuesta = prompt("Quiere ingresar otro numero. si/no").toLowerCase();
		 

	}while(respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
	


	

}//FIN DE LA FUNCIÓN