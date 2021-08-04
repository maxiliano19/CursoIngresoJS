/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() 
{
	// declaracion de variables
	let numero1;
	let numero2;
	let suma;

	// levanto los datos de las cajas de texto
	//primera forma de hacerlo
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1)
	// segunda manera de hacerlo declarando dentro de la linea el parseInt
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );
	

	// realizo la operación
	suma = numero1 + numero2;

	alert("La suma es " + suma);
}

