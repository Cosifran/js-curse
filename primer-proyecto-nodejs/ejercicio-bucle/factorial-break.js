let resultado = 10; 
let factorial = 9;
iniciobucle:while(true){
    if(factorial > 0){
        resultado += resultado * factorial;
        factorial--;
    }else{
        break iniciobucle;
    }
}

console.log(resultado);