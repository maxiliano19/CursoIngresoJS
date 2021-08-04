/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// declaro variables
	let sueldo;
	let aumento;
	let nuevoSueldo;

	//obtengo datos de cajas
	sueldo = parseInt(document.getElementById("txtIdSueldo").value );

	//realizo operacio
	aumento = sueldo * .1; // diferente manera de representar 0.1 // 10 / 100
	nuevoSueldo = sueldo + aumento;
	
	//
	document.getElementById("txtIdResultado").value = nuevoSueldo;
	
}
