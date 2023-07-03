
function supportsParameter(num){
    let a = 0;
    let b= 1;

    for ( i = 2; i<= num; i++){
         let temp = b;
        b = a + b;
        a = temp;
    }

    return b;
}

console.log(supportsParameter(6));