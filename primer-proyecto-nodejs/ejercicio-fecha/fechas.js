//fechas
//fecha de hoy
let fechaDeHoy = new Date();

console.log(fechaDeHoy);

//fecha de mi nacimiento
let fechaDeMiNadcimiento = new Date(2002, 1, 4);

console.log(fechaDeMiNadcimiento);

//se compara si hoy es mayor que mi fecha de nacimiento
console.log(fechaDeHoy > fechaDeMiNadcimiento);

//variables que contienen el día, mes y año de mi cumpleaños
let diaDeMiNacimiento = fechaDeMiNadcimiento.getDate();
let MesDeMiNaciemiento = fechaDeMiNadcimiento.getMonth() + 1; 
let anioDeMiNacimiento = fechaDeMiNadcimiento.getFullYear();

console.log(diaDeMiNacimiento);
console.log(MesDeMiNaciemiento);
console.log(anioDeMiNacimiento);