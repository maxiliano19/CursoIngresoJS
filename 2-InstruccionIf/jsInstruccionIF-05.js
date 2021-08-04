function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value );

/*	p
	if(edad < 13 || edad > 17 ) { //  
		alert("No es adolescente"),

	}

*/

	if (!( edad >=13 && edad <=17) ){ // cuando no este dentro del rango no va ser adolescente

		alert("Usted no es adolescente")

	}

}//FIN DE LA FUNCIÓN