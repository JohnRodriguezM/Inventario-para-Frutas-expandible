'use strict';

const d = document;
let url = " http://localhost:8000/frutas"

const necesarios = {
    $tbody : d.querySelector('tbody'),
    fragment: d.createDocumentFragment(),
    $template: d.getElementById('crud-template').content,
    $form : d.getElementById('form'),
}

const getData = async e => {
    const {fragment, $template,$tbody} = necesarios;
    try{
        let response = await fetch(url)
        let data = await response.json();
        data.forEach((el)=>{
            $template.querySelector('.fruta').textContent = el.fruta;
            $template.querySelector('.cantidadFruta').textContent = el.cantidad


            let clone = d.importNode($template,true);
            fragment.appendChild(clone);
        })
        $tbody.appendChild(fragment);
    }
    catch(error){

    }
}

getData()