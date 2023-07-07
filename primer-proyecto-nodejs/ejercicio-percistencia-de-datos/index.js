const nombre = 'Francisco';
const apellido = 'Apellido';

const objeto = {
    name: nombre,
    lastname: apellido
};

localStorage.setItem(nombre, JSON.stringify(objeto));
sessionStorage.setItem(nombre, JSON.stringify(objeto));

function setCookie(nombre, valor, minutosExpiracion) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + minutosExpiracion * 60 * 1000);
    document.cookie = `${nombre}=${valor};expires=${fechaExpiracion.toUTCString()};path=/`;
  }
  
  // Ejemplo de uso:
  setCookie("miCookie", "expira pronto", 2);