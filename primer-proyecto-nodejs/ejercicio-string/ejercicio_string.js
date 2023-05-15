let nombre = "Francisco Javier";
let apellido = "Estrada Flores";
let estudiante = "Estudiante";
let mayus = "Mayus";
let minus = "Minus";
let primeraLetra = nombre.slice(0,1);
let ultimaLetra = apellido.slice(13, 14);

estudiante.concat(nombre, " ", apellido);
estudiante.toUpperCase().concat(mayus);
estudiante.toLowerCase().concat(minus);
estudiante.length;
estudiante.includes(nombre);