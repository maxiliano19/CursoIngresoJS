function mostrar() {
  let mes;
  mes = document.getElementById("txtIdMes").value;

 
 switch ( mes ){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno");
		break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio");
		break;
	default:
		alert("Ya pasamos el frio, ahora hace calor");
		break;
	
 }
 
 
 
 /* if (
    mes == "Enero" ||
    mes == "Febrero" ||
    mes == "Marzo" ||
    mes == "Abril" ||
    mes == "Mayo" ||
    mes == "Junio"
  ) {
    alert("Falta para el invierno");
  } else if (mes == "Julio" || mes == "Agosto") {
    alert("Abrigate que hace frio");
  } else {
    alert("Ya pasamos el frio ahora hace calor");
  }*/
}