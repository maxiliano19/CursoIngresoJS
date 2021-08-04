function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		default:
			alert("Tiene 28 dias");
	}
	
}//FIN DE LA FUNCIÓN