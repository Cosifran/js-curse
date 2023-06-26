//ejercicios funcios

function siempreTrue() {
    return true;
}

//funcion asincrona
async function miFuncionAsincrona() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}

miFuncionAsincrona();

//funcion generadora de indices pares

function* generIndices() {
    let indices = 0;

    while (true) {
        indices = indices + 2;

         if(indices <= 30){
             yield indices;
         }
        
    }
    
}



const generadoraDeIndices = generIndices();

console.log(generadoraDeIndices.next().value);
console.log(generadoraDeIndices.next().value);
console.log(generadoraDeIndices.next().value);
console.log(generadoraDeIndices.next().value);
console.log(generadoraDeIndices.next().value);
console.log(generadoraDeIndices.next().value);







