function convertirNumero(numero) {
    if (numero % 2 === 0) {
        return numero.toString(2); 
    } else {
        return numero.toString(16); 
    }
}


console.log(convertirNumero(10)); 
console.log(convertirNumero(15)); 