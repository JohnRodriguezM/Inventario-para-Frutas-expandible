'use strict';

export const d = document;
export const url = " http://localhost:8000/frutas"
// es el mismo frutas actuales, pero no me dejó importarlo del modulo de annadir frutas
const fruta = document.getElementById('frutasActuales')

export const necesarios = {
  $tbody: d.querySelector('tbody'),
  fragment: d.createDocumentFragment(),
  $template: d.getElementById('crud-template').content,
  $form: d.getElementById('form'),
  $datos: d.getElementById('traerDatos'),
  $title: d.getElementById('title'),
  $return: d.getElementById('return')
}

const getData = async e => {
  // se realiza el destructuring del objeto necesarios;
  const { fragment, $template, $tbody } = necesarios;
  try {
    // el response que genera el uso de la api Fetch (contiene la información de la peticion)
    let response = await fetch(url)
    console.log(response);
    let data = await response.json();
    // verificacion de falla
    if (!response.ok) throw {
      status: response.status,
      response: response.ok,
    }
    data.forEach((el) => {
      $template.querySelector('.fruta').textContent = el.fruta;
      $template.querySelector('.cantidadFruta').textContent = el.cantidad
      $template.querySelector('.edit').dataset.id = el.id;
      $template.querySelector('.edit').dataset.fruta = el.fruta;
      $template.querySelector('.edit').dataset.cantidad = el.cantidad;
      $template.querySelector('.delete').dataset.id = el.id;

      let clone = d.importNode($template, true);
      fragment.appendChild(clone);
    })
    $tbody.appendChild(fragment);
  }
  catch (error) {
    let mensajeError = 'Se ha producido un error ${error}'
    alert(mensajeError);
  }
}

// se le pega al documento el evento DOMContentLoaded para que ejecute la función getData que trae los datos de la fake rest api generada con el json- server

// esta ejecucion de la función se realiza a la carga del contenido del documento
d.addEventListener('DOMContentLoaded', getData)

d.addEventListener("click", e => {
  const { $form } = necesarios;
  if (e.target.matches("#traerDatos")) {
    location.reload();
    $form.cFrutasVendidas.value = fruta.value
  }
});