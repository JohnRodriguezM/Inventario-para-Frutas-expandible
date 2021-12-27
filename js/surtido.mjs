'use strict';

import {
    frutas
} from "./dom1.mjs";
// se exporta para uso en otro documento
export const inicializadora = new frutas()
export const introductoria = inicializadora.frutera()

let listaFrutass = document.querySelectorAll('.elementoFruta')
let arrayFrutas = [...listaFrutass]

let coleccionFrutas = [
    {
        manzana: [
            // poner la cantidad de manzanas aquí dentro
        ]
    },
    {
        pera : [
            // poner la cantidad de peras aquí dentro
        ]
    }
]

/*
arrayFrutas.forEach((el,index)=>{
    //console.log(`el elemento es ${el.value} y la pocision es ${index}`)
    // no funciona el forEach bien ahi
    if(el.value === "manzana"){
        coleccionFrutas[0].manzana.push(el.value)
        console.log(coleccionFrutas[0].manzana);
    }
})*/


/*
for(let fruta of arrayFrutas) {
    console.log(fruta.value)
}
*/


function tipoFruta(){
    let inputFrutas = document.getElementById('cFrutas').value;
    inputFrutas = Number(inputFrutas)
    const tipo = document.getElementById('listaFrutas').value;
    
    console.log(`haz ingresado ${tipo}`)
    if(tipo === "manzana"){
        coleccionFrutas[0].manzana.push(inputFrutas)
        console.log(coleccionFrutas[0].manzana);
    }
}



// esta funcion maneja el surtido // está perfecta no modificar


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