'use strict';

export const d = document;
export const url = " http://localhost:8000/frutas"
// es el mismo frutas actuales, pero no me dejó importarlo del modulo de annadir frutas
let fruta = document.getElementById('frutasActuales')

export const necesarios = {
    $tbody : d.querySelector('tbody'),
    fragment: d.createDocumentFragment(),
    $template: d.getElementById('crud-template').content,
    $form : d.getElementById('form'),
    $datos: d.getElementById('traerDatos'),
    $title: d.getElementById('title'),
    $return: d.getElementById('return')
}

const getData = async e => {
    const {fragment, $template,$tbody} = necesarios;
    try{
        let response = await fetch(url)
        let data = await response.json();
        // verificacion de falla
        if (!response.ok) throw {
            status: response.status,
            response: response.ok,
        }
        data.forEach((el)=>{
            $template.querySelector('.fruta').textContent = el.fruta;
            $template.querySelector('.cantidadFruta').textContent = el.cantidad
            $template.querySelector('.edit').dataset.id = el.id;
            $template.querySelector('.edit').dataset.fruta = el.fruta;
            $template.querySelector('.edit').dataset.cantidad = el.cantidad;
            $template.querySelector('.delete').dataset.id = el.id;

            let clone = d.importNode($template,true);
            fragment.appendChild(clone);
        })
        $tbody.appendChild(fragment);
    }
    catch(error){

    }
}

d.addEventListener('DOMContentLoaded',getData)

d.addEventListener("click", e => {
    const {$form} = necesarios;
    if (e.target.matches("#traerDatos")) {
      location.reload();
      $form.cFrutasVendidas.value = fruta.value
    }
  });