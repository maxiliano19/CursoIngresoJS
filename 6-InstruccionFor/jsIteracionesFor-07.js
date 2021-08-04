function mostrar()
{
	let numero;
	let contadorDiv = 0;

	numero = parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero) || numero <= 1){
		numero = parseInt(prompt("ERROR. Ingrese un nuevo numero"));
	}

	for(let contador = 1; contador <= numero; contador++){
		if (numero % contador == 0){
			console.log(contador);
			contadorDiv++;
		}
	}
	console.log("La cantidad de divisores es " + contadorDiv);

}//FIN DE LA FUNCIÓN