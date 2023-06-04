// Lista de compra

let listaDeCompra = ["Banano", "Fresa", "Leche", "Queso", "Pollo"];
//añadir aceite de girasol
listaDeCompra.push("Aceite de Girasol")
//eliminar aceite de girasol
listaDeCompra.pop();

//añde lista de mis peliculas fav

 let peliculasFav =  [
        {titulo: "El club de la pelea", director: "David Fincher", fecha: 1999},
        {titulo: "Caracortada", director: "Brian De Palma", fecha: 1983 },
        {titulo: "Taxi Driver", director: "Martin Scorsese", fecha: 1976}
    ];

//crear una nueva lista con pelis posteriores al 1980

 let pelisPosteriores = peliculasFav.filter( peliculas => peliculas.fecha > 1980 );

 // nueva lista con solo los nombres de los directores

 let nombreDeLosDirectores = peliculasFav.map( nombre => nombre.director);

 //nueva lista con solo los titulos de las peliculas 

 let tituloDeLasPelis = peliculasFav.map(titulos => titulos.titulo);

 //lista que concatena los directores y titulos

 let concatenacionDeLtituloYLdirector = nombreDeLosDirectores.concat(tituloDeLasPelis);

 //lista que concatena los directores y titulos pero usando el metodo de propagacion

 let concatenacionConMetodoDePropagacion = [...nombreDeLosDirectores, ...tituloDeLasPelis];


console.log(listaDeCompra);
console.log(pelisPosteriores);
console.log(nombreDeLosDirectores);
console.log(tituloDeLasPelis);
console.log(concatenacionDeLtituloYLdirector);
console.log(concatenacionConMetodoDePropagacion);