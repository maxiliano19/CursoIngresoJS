function mostrar()
{
let ubicacion;
ubicacion = document.getElementById("txtIdDestino").value;

switch(ubicacion){
	case "Bariloche":
		alert("Oeste");
		break;
	case "Cataratas":
		alert("Norte");
		break;
	case "Ushuaia":
		alert("Sur");
		break;
	case "Mar del Plata":
		alert("Este");
		break;
}

/*if (ubicacion == "Bariloche"){
	alert("Oeste");
}else if (ubicacion == "Cataratas"){
	alert("Norte");
} else if (ubicacion == "Ushuaia"){
	alert("Sur");
} else {
	alert("Este");
}*/



}//FIN DE LA FUNCIÓN