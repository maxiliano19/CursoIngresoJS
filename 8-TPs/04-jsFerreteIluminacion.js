/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let precio = 35;
    let cantidad;
    let marca;
    let descuento;
    let porcDesc;
    let precioDescuento;
    let importeTotal;
    let IIBB;
   

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    // de acuerdo a la cantidad y marca obtengo el porcentaje que debo hacer
 	switch ( cantidad ){
        case 1:
        case 2:
            porcDesc = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz"){
                porcDesc = 0.15;
            } else if (marca == "FelipeLamparas") { 
                porcDesc = 0.1;
            } else {
                porcDesc = 0.05;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                porcDesc = 0.25;
            } else {
                porcDesc = 0.2;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz"){
                porcDesc = 0.4;
            } else {
                porcDesc = 0.3;
            }
            break;
        default:
            porcDesc = 0.5;
        } // fin de switch

// calculo el descuento
descuento = precio * porcDesc;
//calculo el precio de una lampara una vez aplicado el descuento
precioDescuento = precio - descuento;

// muestro el precio unitario con descuento en la caja de texto inferior
document.getElementById("txtIdprecioDescuento").value = precioDescuento;

// caluclo el importe final
importeTotal = cantidad * precioDescuento;

// me fijo si corresponde calcular ingresos brutos
    if (importeTotal > 120 ){
        IIBB = importeTotal * 0.1;
        importeTotal = importeTotal + IIBB;
        flag= 1;
        alert("Importe total $ " + importeTotal + " usted pago IIBB $" + IIBB);
    } else {
    alert("importe total $ " + importeTotal);
    }
}
