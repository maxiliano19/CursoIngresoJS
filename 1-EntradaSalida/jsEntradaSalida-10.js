/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	//declaro variables
	let importe;
	let descuento;
	let resultado;


	//obtengo datos de cajas
	importe = parseInt(document.getElementById("txtIdImporte").value );

	//realizo operacion
	descuento = importe * .25;
	resultado = importe - descuento;

	//muestro resultado
	document.getElementById("txtIdResultado").value = resultado


}
