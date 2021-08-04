function mostrar()
{
	for (  ;  ;  ){
	
	numero = parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese nuevo numero"))
	}
	if (numero == 9){
		alert("usted Ingreso el numero 9");
		break;
	}
}



}//FIN DE LA FUNCIÓN