function mostrar()
{
	//tomo la edad  
let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

// condicion
if ( edad >= 18 ){ // si es mayor de edad
	
	alert("Usted es mayor de edad");
}else{
	
	alert ("Usted es menor de edad");
}

// if ( edad < 18 ){ // si es menor de edad
	
// 	alert("Usted es manor de edad");
// }else{
	
// 	alert ("Usted es meyor de edad");
// }



}//FIN DE LA FUNCIÓN