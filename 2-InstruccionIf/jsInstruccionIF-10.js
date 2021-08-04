function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	
	nota = Math.floor(Math.random() * 10 + 1);

	if ( nota >= 4 && nota <=8 ){
		alert(`APROBO ${nota}`);
	}else if ( nota > 8){
		alert(`EXELENTE ${nota}`);
	}else {
		alert(`Vamos la proxima se puede ${nota}`);
	}

}//FIN DE LA FUNCIÓN