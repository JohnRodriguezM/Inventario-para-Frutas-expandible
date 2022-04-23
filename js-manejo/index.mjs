'use strict';

export const d = document;
export const url = " http://localhost:8000/frutas"
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
    /* console.log(response); */
    // en el objeto data tenemos toda la data que nos brinda la api
    let data = await response.json();
    /* console.log(data); */
    // si en el objeto response el su propiedad ok hay un error, se maneja desde acá
    if (!response.ok) throw {
      status: response.status,
      response: response.ok,
    }
    // permite "pintar" los elementos en el dom, la función está declarada más abajo
    pintarDom(data,$template,fragment,$tbody)
  }
  catch (error) {
    let mensajeError = `Se ha producido un error ${error.status} -- la respuesta ha sido ${error.response}`
    alert(mensajeError);
  }
}

// se le pega al documento el evento DOMContentLoaded para que ejecute la función getData que trae los datos de la fake rest api generada con el json- server
// esta ejecucion de la función se realiza a la carga del contenido del documento
d.addEventListener('DOMContentLoaded', getData)

// el botón traer datos esta dentro del objeto necesarios
d.addEventListener("click", e => {
  const { $form } = necesarios;
  if (e.target.matches("#traerDatos")) {
    location.reload();
    $form.cFrutasVendidas.value = fruta.value
  }
});


// esta función me permite pintar los elementos en el dom de manera dinamica usando un array de objetos y elementos html, en este caso se usa un template HTML
// esta funcion es usada dentro de la funcion async getData que trae los datos de la fake api rest de json server

function pintarDom(objArrays, elHTML,fragmento,elementoDondeSePega) {
  objArrays.map((el, index) => {
    elHTML.querySelector('.fruta').textContent = el.fruta;
    elHTML.querySelector('.cantidadFruta').textContent = el.cantidad
    // le añado data-atributtes para identificarlo mas adelante, en operaciones de put o delete
    elHTML.querySelector('.edit').dataset.id = el.id;
    elHTML.querySelector('.edit').dataset.fruta = el.fruta;
    elHTML.querySelector('.edit').dataset.cantidad = el.cantidad;
    elHTML.querySelector('.delete').dataset.id = el.id;

    let clone = d.importNode(elHTML, true);
    fragmento.appendChild(clone);
  })
  elementoDondeSePega.appendChild(fragmento);
}