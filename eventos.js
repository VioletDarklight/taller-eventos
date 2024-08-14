// Primero se espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
 // Seleccionamos el div
 let barra = document.getElementsByTagName("div")[0];

 // Agregamos un evento al div al hacer click
 barra.addEventListener("click", () => {
  alert("Hola! Soy el Div")
 });
});