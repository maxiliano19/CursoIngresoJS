function mostrar()
{
	let numero

	numero = parseInt(prompt("Ingrese un numero"));

	while(isNaN(numero) || numero <= 0){
		numero = parseInt(prompt("No es un numero positivo, eso no es un numero. Ingrese un nuevo numero"));
	}

	for(let cantidad = 0; cantidad < numero; cantidad++){
		console.log("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN