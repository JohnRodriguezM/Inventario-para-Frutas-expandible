'use strict';

import {
    frutas
} from "./dom1.mjs";
export const inicializadora = new frutas()
export const introductoria = inicializadora.frutera()

let listaFrutass = document.querySelectorAll('.elementoFruta')

console.log(listaFrutass)

listaFrutass.forEach((el,index)=>{
    console.log(`el elemento es ${el} y su pocision en el array es ${index}`)
})


function tipoFruta(){
    const tipo = document.getElementById('listaFrutas').value;
    console.log(`haz ingresado ${tipo}`)
}


function surtidoFrutas(a) {
    a.preventDefault()
    let inputFrutas = document.getElementById('cFrutas').value;
    let inputVentas = document.getElementById('cFrutasVendidas').value;
    inputFrutas = Number(inputFrutas)
    inputVentas = Number(inputVentas)

    // condicional para el input frutas ("surtidor de frutas")
    if (!inputFrutas) {
        document.getElementById('form').reset();
    } else {
            let surtidor = introductoria.surtir(inputFrutas)
            tipoFruta()
    }


    // condicional para el input ventas ("ventas de frutas")


    if (!inputVentas) {
        true;
    } else {
        let ventas = introductoria.decrementar(inputVentas)
    }

    document.getElementById('form').reset();
}



document.getElementById('form').addEventListener('submit', surtidoFrutas)

// todo, crear funcion que reciba el valor del tipo de fruta