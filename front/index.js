

function laCajaDePandora(numero){
    if (!Number.isInteger(numero)) {
        return "Por favor, ingresa un número entero.";
    }
    
    if (numero % 2 === 0) {
        return numero.toString(2); // Convierte a binario
    } else {
        return numero.toString(16); // Convierte a hexadecimal
    }
}

const DanielVelazco = () => {

    const datos = {
        name: 'Daniel Velazco',
        edad: "35",
        nacionalidad: "Colombiano"
    }

}

return datos;

 

const TomasKMorelli = () => {
    const datos = {
        name: "Tomas Morelli",
        edad: "24",
        nacionalidad: "Argentino"
    }
    return datos;

}



function funcionRaul() {
    const dattosRaul = {
        nombre: "Raul",
        edad: 30,
        nacionalidad: "Colombiano"
    }
    return dattosRaul;
}

