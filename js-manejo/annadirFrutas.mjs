'use strict'

import { d,necesarios } from "./index.mjs"


const $SectionAnnadir = document.getElementById('sectionAnnadirFruta');
const $frutasActuales = document.getElementById('frutasActuales')

// aparacion botón añadir
d.addEventListener('click', e =>{
    const {$form} = necesarios;
    if(e.target.matches('.edit'))
    {
        $SectionAnnadir.style.display = "block"
        $frutasActuales.value = $form.cFrutasVendidas.value;
    }
})


d.addEventListener('click', e =>{
    if(e.target.matches('#buttonAnnadir')){
        $SectionAnnadir.querySelector('.annadirYes').style.display = "block"
        /* $SectionAnnadir.querySelector('.cerrar').classList.toggle('visible') 
        
        pendiente manejo del visible
        */
    }
})




function suma(a,b) {
    return a + b;
}

d.addEventListener('click',e=>{
    const {$form} = necesarios;
    if(e.target.matches('.buttonSuma')){
       let a =  suma(Number($frutasActuales.value), Number($SectionAnnadir.querySelector('#fruticas').value))
       alert(a)
       console.log(a)
       $form.cFrutasVendidas.value = a
    }

})