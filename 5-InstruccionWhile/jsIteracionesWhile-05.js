/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m").toLowerCase();

	while (sexo != `f` && sexo != `m`){
		sexo = prompt("El sexo es incorrecto. Ingrese f ó m").toLowerCase();
	}
	document.getElementById("txtIdSexo").value = sexo;

/* while (!(sexo == "f" || sexo == "m")) {
	sexo = prompt("El sexo es incorrecto. Ingrese f ó m")
}
document.getElementById("txtIdSexo").value = sexo;
*/
}//FIN DE LA FUNCIÓN