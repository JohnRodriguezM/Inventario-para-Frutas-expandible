// TODO: SUPER pendiente
// EXTENDER A LOS DEMÁS TIPO DE FRUTAS Y MIRAR SI SE PUEDEN AGREGAR FRUTAS A TRÁVES DE PERSONALIZACIÓN DEL USUARIO

'use strict';

import {
    frutas
} from "./dom1.mjs";
import {
    elemento,atributo
} from "./estilosEHijosFoo.mjs";
// se exporta para uso en otro documento
export const inicializadora = new frutas()
export const introductoria = inicializadora.frutera()

// traigo el nodo de los elementos, y los almaceno dentro de un array
const listaFrutass = document.querySelectorAll('.elementoFruta')
const arrayFrutas = [...listaFrutass]
console.log(arrayFrutas)

// traigo los elmentos del formulario

// creo un array de objetos con un array para darles push
const coleccionFrutas = [{
        manzana: [
            // poner la cantidad de manzanas aquí dentro(se hizo push)
        ],
    },
    {
        peras: [
            // poner la cantidad de peras aquí dentro(se hizo push)
        ],
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



export function tipoFrutaSuma() {
    // cantidad de frutas
    let $inputFrutass = document.getElementById('cFrutas').value;
    $inputFrutass = Number($inputFrutass)
    // frutas vendidas
    let $inputVentas = document.getElementById('cFrutasVendidas').value;
    $inputVentas = Number($inputVentas)
    // tipo de fruta
    let tipo = document.getElementById('listaFrutas').value;


    if (tipo === "manzana") {
        let empuje = coleccionFrutas[0].manzana.push($inputFrutass - $inputVentas)
        let array = coleccionFrutas[0].manzana
        let arrayReduce = array.reduce((a, b) => {
            return a + b;
        })
        let arrayPush = coleccionFrutas[0].manzana.push(arrayReduce)
        let contenido = elemento.textContent = `${arrayReduce}`;
    }
    // SE EMPIEZAN A REALIZAR PRUEBAS DEL LOCAL_STORAGE, PENDIENTE DE MANEJO

    //let y = localStorage.setItem("valorManzana", JSON.stringify//(arrayReduce))
    //let obtener = localStorage.getItem("valorManzana")
    //window.onload.console.log(obtener)
    //let obtener = localStorage.getItem//("valorManzana")
    //elemento.textContent = obtener;
    //console.log(obtener);
    //s
    let x = (`las manzanas que has sacado son iguales a ${$inputVentas}`)
    console.log(x);
}




/*

function actual(){
    let manza = document.getElementById(atributo)
    localStorage.setItem('valorM',manza)
    let traer = localStorage.getItem('manzana')
    console.log(traer);
}
actual()
/*if (tipo === "pera")
{
    let empuje = coleccionFrutas[1].peras.push($inputFrutas)
    let array = coleccionFrutas[1].peras
    let arrayReduce = array.reduce((a,b)=>{
        return a + b;
    })
    console.log(arrayReduce)
}
*/



// esta funcion maneja el surtido // está perfecta no modificar
function surtidoFrutas(a) {
    a.preventDefault()
    let $inputFrutas = document.getElementById('cFrutas').value;
    let $inputVentas = document.getElementById('cFrutasVendidas').value;
    $inputFrutas = Number($inputFrutas)
    $inputVentas = Number($inputVentas)

    // condicional para el input frutas ("surtidor de frutas")
    if (!$inputFrutas) {
        // document.getElementById('form').reset();
        true;
    } else {
        let surtidor = introductoria.surtir($inputFrutas)
    }
    // condicional para el input ventas ("ventas de frutas")
    if (!$inputVentas) {
        //document.getElementById('form').reset();
        true;
    } else {
        let ventas = introductoria.decrementar($inputVentas)
    }
    tipoFrutaSuma()
    document.getElementById('form').reset();
}
document.getElementById('form').addEventListener('submit', surtidoFrutas)

// todo, crear funcion que reciba el valor del tipo de fruta

//function surtidoFrutasa(a,)