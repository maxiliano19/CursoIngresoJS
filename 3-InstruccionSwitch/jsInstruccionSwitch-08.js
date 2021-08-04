function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Mar del Plata":
		case "Cataratas":
			alert("En estos destinos hace calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("En estos destinos hace frio");
			break;
	}

	/* if (destino == "Bariloche" && destino == "Ushuaia"){
		alert("En estos destinos hace frio");
	} else if (destino == "Mar del plata" && destino == "Cataratas"){
		alert("En estos destinos hace calor");
	}
	*/


}//FIN DE LA FUNCIÓN