const boton = document.getElementById("btn");

boton.addEventListener("click", () =>{
    alert('click en el botón!');
}); 


jQuery(document).ready(function() {
    jQuery("#btn").click(function() {
      console.log("Hola, estoy utilizando jQuery");
    });
  });