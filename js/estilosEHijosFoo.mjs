import { tipoFrutaSuma } from "./surtido.mjs";


// elementos y nodos que se van a crear dinamicamente en el footer
/*
let $footer = document.getElementById('footer')
export let $hijo = document.createElement('p')

export let $textoManzanas = $footer.appendChild($hijo)
$textoManzanas.textContent = `La cantidad actual de manzanas es igual a`*/ // ¿se puede usar luego?

let th = document.getElementById('tdLinea1')
export let elemento = document.createElement('td');
export let atributo = elemento.setAttribute('id','elementoManzana')
export let agregarTd1 = th.appendChild(elemento)
elemento.textContent = 0;

// pendiente de revision
/*
let almacen = localStorage.setItem('manzana' ,JSON.stringify(elemento))
let vueltaAlmacen = localStorage.getItem('manzana')
elemento.textContent = vueltaAlmacen
*/
