function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//manera contraria o negatoria de hacerlo
	/* if (!( edad < 13 || edad > 17)) { // si no estoy fuera del rango
		 alert("Es adolescente");
	}
	*/
	// forma directa de hacerlo
	if ( edad >= 13 && edad <=17 ){ // si estoy dentro del rango
			
			alert("usted es adolescente");
	}
}//FIN DE LA FUNCIÓN