//objetos
//mis datos personales
const datosPersonales = {
    nombre: "Francisco",
    apellido: "Estrada",
    edad: 21,
    altura: 180,
    eresDesarrollador: true
}
//variable que contiene mi edad
let miEdad = datosPersonales.edad;
//lista que contiene dos obetos con los datos de mis amigos
let listaQueContieneObjetos = [
    datosPersonales,
    {
        nombre: "Steven",
        apellido: "Gonzales",
        edad: 21,
        altura: 170,
        eresDesarrollador: false,
    },
    {
        nombre: "Leo",
        apellido: "Gutierrez",
        edad: 23,
        altura: 160,
        eresDesarrollador: false,  
    }
]

console.log(listaQueContieneObjetos)
//nueva lista ordenada con la edad de mayor a menor
let nuevaListaOrdenada = listaQueContieneObjetos.sort((a, b) => a.edad + b.edad);

console.log(nuevaListaOrdenada)