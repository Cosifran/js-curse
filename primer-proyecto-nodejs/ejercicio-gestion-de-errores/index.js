function mensajePersonalizado (mensaje){
    logger.info("Mensaje personalizado: " + mensaje);
}

try{
       mensajePersonalizado(2);
}catch(error){
    console.log(error);
}