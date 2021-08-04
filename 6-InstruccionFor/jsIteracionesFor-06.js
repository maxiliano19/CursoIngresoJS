function mostrar()
{

	let numero;
	let numPar = 0;

	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero) || numero <= 1){
		numero = parseInt(prompt("ERROR. Ingrese un nuevo numero:"));
	}

	for(let contador = 1; contador <= numero; contador++){
		if(contador % 2){
			continue;
		}
		console.log(contador)
		numPar++;
	}
	console.log("Cantidad: " + numPar);
	

	

}//FIN DE LA FUNCIÓN