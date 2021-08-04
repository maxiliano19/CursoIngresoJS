function mostrar() {
  //tomo la edad
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad >= 13 && edad <= 17) {
    alert("Es adolescente");
   } else if (edad < 13) {
      alert("Es un niño");
    } else {
      alert("Es adulto");
    }
}//FIN DE LA FUNCIÓN