/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let importe1;
    let importe2;
    let importe3;
    let suma;

    importe1 = parseInt(document.getElementById("txtIdPrecioUno").value );
    importe2 = parseInt(document.getElementById("txtIdPrecioDos").value );
    importe3 = parseInt(document.getElementById("txtIdPrecioTres").value );


    suma = importe1 + importe2 + importe3;

    alert(`La suma es ${suma}`);

}
function Promedio () 
{

    let importe1;
    let importe2;
    let importe3;
    let suma
    let porcentaje;


    importe1 = parseInt(document.getElementById("txtIdPrecioUno").value );
    importe2 = parseInt(document.getElementById("txtIdPrecioDos").value );
    importe3 = parseInt(document.getElementById("txtIdPrecioTres").value );


    suma = importe1 + importe2 + importe3;
    porcentaje = suma / 3;

    alert(`El porcentaje es ${porcentaje}`)

}
function PrecioFinal () 
{
	// declaracion de variables
    let importe1;
    let importe2;
    let importe3;
    let iva;
    let importe;
    let precioFinal;

    //relevo de datos
    importe1 = parseInt(document.getElementById("txtIdPrecioUno").value );
    importe2 = parseInt(document.getElementById("txtIdPrecioDos").value );
    importe3 = parseInt(document.getElementById("txtIdPrecioTres").value );

    // calculo de importe
    importe = importe1 + importe2 + importe3;

    //calculo de impuesto
    iva = importe * 0.21;
    
    //calculo del importe a pagar
    precioFinal = importe + iva;

    // muestro los resultados
    alert(`El precio final es ${precioFinal}`);
    
    
}