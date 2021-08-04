function mostrar() {
  let precio = 15000;
  let precioFinal;
  let destino;
  let estacion;
  let descuento = 0;
  let aumento = 0;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = precio * 0.2;
      } else if (destino == "Mar del plata") {
        descuento = precio * 0.2;
      } else {
        descuento = precio * 0.1;
      }

      break;
    case "Verano":
      if (destino == "Bariloche") {
        descuento = precio * 0.2;
      } else if (destino == "Mar del plata") {
        aumento = precio * 0.2;
      } else {
        aumento = precio * 0.2;
      }

      break;
    case "Otoño":
    case "Primavera":
      if (destino != "Cordoba") {
        aumento = precio * 0.1;
      }
  }

  precioFinal = precio + aumento - descuento;
  alert(`El precio final es ${precioFinal}`);



  /* switch (destino) {
    case "Bariloche":
      if (estacion == "Invierno") {
        aumento = precio * 0.2;
      } else if (estacion == "Verano") {
        descuento = precio * 0.2;
      } else {
        aumento = precio * 0.1;
      }

      break;
    case "Cataratas":
      if (estacion == "Invierno") {
        descuento = precio * 0.1;
      } else {
        aumento = precio * 0.1;
      }

      break;
    case "Cordoba":
      if (estacion == "Invierno") {
        descuento = precio * 0.1;
      } else if (estacion == "Verano") {
        aumento = precio * 0.1;
      } else {
        precioFinal = precio;
      }

      break;
    case "Mar del plata":
      if (estacion == "Invierno") {
        descuento = precio * 0.2;
      } else if (estacion == "Verano") {
        aumento = precio * 0.2;
      } else {
        aumento = precio * 0.1;
      }

      break;
  }
  precioFinal = precio + aumento - descuento;
  alert(`El precio final es ${precioFinal}`);*/
} //FIN DE LA FUNCIÓN