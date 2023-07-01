const { error } = require("winston");
const logger = require("./logger");

const miFuncion = val => {
    if (typeof val!== 'number'){
        return 2 * val;
    }

    throw new Error("El valor debe ser de tipo numero")
}

try{
       const resultado1 = miFuncion('hola'); 

       console.log(resultado1);
}catch(e){
    logger.error(e);
}