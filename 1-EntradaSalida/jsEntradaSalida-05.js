/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	let edad;

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;
	
	// Primera forma de cocatenar resultados
	//alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	// segunda forma de cocatenar
	alert(`Ustede se llama ${nombre} y tiene ${edad} años`)

 
}
