'use strict'

import { d,necesarios } from "./index.mjs"


const $SectionAnnadir = document.getElementById('sectionAnnadirFruta');
const $frutasActuales = document.getElementById('frutasActuales')
const $frutasActualesResta = document.getElementById('frutasActualesResta')

// aparacion botón añadir
d.addEventListener('click', e =>{
    const {$form} = necesarios;
    if(e.target.matches('.edit'))
    {
        $SectionAnnadir.classList.add('visible')
        $SectionAnnadir.classList.remove('hidden')
        $SectionAnnadir.classList.add('absolute')
        $frutasActuales.value = $form.cFrutasVendidas.value;
        $frutasActualesResta.value = $form.cFrutasVendidas.value;
    }
})


d.addEventListener('click', e =>{
    if(e.target.matches('#buttonAnnadir')){
        $SectionAnnadir.querySelector('.annadirYes').classList.add('visible')
        $SectionAnnadir.querySelector('.annadirYes').classList.remove('hidden')
        $SectionAnnadir.querySelector('#buttonRestar').classList.add('hidden')
    }
})


d.addEventListener('click', e => {
    if(e.target.matches('#buttonRestar')){
        $SectionAnnadir.querySelector('.restarYes').classList.add('visible')
        $SectionAnnadir.querySelector('.restarYes').classList.remove('hidden')
        $SectionAnnadir.querySelector('#buttonAnnadir').classList.add('hidden')
    }
})



d.addEventListener('click', e => {
    if(e.target.matches('.cerrar')){
        $SectionAnnadir.classList.remove('visible')
        $SectionAnnadir.classList.add('hidden')
        $SectionAnnadir.querySelector('.annadirYes').classList.add('hidden')
        $SectionAnnadir.querySelector('.restarYes').classList.remove('visible')
        $SectionAnnadir.querySelector('.restarYes').classList.add('hidden')
        $SectionAnnadir.querySelector('.annadirYes').classList.remove('visible')
        $SectionAnnadir.classList.remove('absolute')
        $SectionAnnadir.querySelector('#buttonRestar').classList.remove('hidden')
        $SectionAnnadir.querySelector('#buttonAnnadir').classList.remove('hidden')
    }
})





function suma(a,b) {
    return a + b;
}


function resta(a,b) {
    return a - b;
}



// para la suma
d.addEventListener('click',e=>{
    const {$form} = necesarios;
    if(e.target.matches('.buttonSuma')){
       let a =  suma(Number($frutasActuales.value), Number($SectionAnnadir.querySelector('#fruticas').value))
       alert(a)
       console.log(a)
       $form.cFrutasVendidas.value = a
       $SectionAnnadir.classList.add('hidden')
    }

})
// para la restarYes

d.addEventListener('click',e=>{
    const {$form} = necesarios;
    if(e.target.matches('.buttonResta')){
       let a =  resta(Number($frutasActuales.value), Number($SectionAnnadir.querySelector('#fruticasResta').value))
       alert(a)
       console.log(a)
       $form.cFrutasVendidas.value = a
       $SectionAnnadir.classList.add('hidden')
       $form.sub.style.backgroundColor = "green"
    }

})