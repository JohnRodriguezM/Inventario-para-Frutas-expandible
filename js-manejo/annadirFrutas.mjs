"use strict";
// funciones que se usan el calculo de las fruats
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
// este archivo js es el que me permite añadir una x cantidad de frutas luego de pulsar el botón editar del documento, BASICAMENTE MANEJA LA OPERACION EL PUT DEL CRUD (EDIT)

// sin embargo, dentro del archivo post.js se hace manejo desde la api de las operacion post y put

import { d, necesarios } from "./index.mjs";
// se importa la constante d que es la que contiene el document;
// se importan la constante necesarias que contiene los elementos del html, pero en este docuemento esta constante no se encuentra en uso

const $frutasActuales = d.getElementById("frutasActuales");
const $SectionAnnadir = d.getElementById("sectionAnnadirFruta");
const $frutasActualesResta = d.getElementById("frutasActualesResta");
const label = d.getElementById("label_cantidad");
const cerrar = d.querySelector(".return");
const seleccionados = {
  restar: $SectionAnnadir.querySelector(".restarYes"),
  sumar: $SectionAnnadir.querySelector(".annadirYes"),
  buttonSumar: $SectionAnnadir.querySelector("#buttonAnnadir"),
  buttonRestar: $SectionAnnadir.querySelector("#buttonRestar"),
};
// esta function me permite manejar un toggle para los elementos del objeto seleccionado
const seleccionadosToggle = (a, b) => {
  a.classList.add("visible");
  a.classList.remove("hidden");
  b.classList.add("hidden");
}

function Toggle(a, b) {
  a.classList.remove("visible");
  b.classList.add("hidden");
}
function ToggleInverse(a, b) {
  a.classList.add("visible");
  b.classList.remove("hidden");
}

// aparacion botón añadir, luego de pulsar el botón de editar
d.addEventListener("click", e => {
  const { $form } = necesarios;
  if (e.target.matches(".edit")) {
    d.body.style.visibility = "hidden";
    ToggleInverse($SectionAnnadir, $SectionAnnadir);
    $SectionAnnadir.classList.add("absolute");
    $frutasActuales.value = $form.cFrutasVendidas.value;
    $frutasActualesResta.value = $form.cFrutasVendidas.value;
    label.textContent = "cantidad de frutas actuales";
  }
});

// le pego esta funcion al documento la cual me permite añdir una frutas
d.addEventListener("click", e => {
  if (e.target.matches("#buttonAnnadir")) {
    cerrar.classList.add("hidden");
    // function super util
    seleccionadosToggle(seleccionados.sumar, seleccionados.buttonRestar);
  }
});

d.addEventListener("click", e => {
  if (e.target.matches("#buttonRestar")) {
    cerrar.classList.add("hidden");
    seleccionadosToggle(seleccionados.restar, seleccionados.buttonSumar);
  }
});

d.addEventListener("click", e => {
  if (e.target.matches(".return")) {
    d.body.style.visibility = "visible";
    Toggle($SectionAnnadir, $SectionAnnadir);
  }
});

d.addEventListener("click", e => {
  if (e.target.matches(".cerrar")) {
    d.body.style.visibility = "visible";
    cerrar.classList.remove("hidden");
    Toggle($SectionAnnadir, $SectionAnnadir);
    $SectionAnnadir.querySelector(".annadirYes").classList.add("hidden");
    $SectionAnnadir.querySelector(".annadirYes").classList.remove("visible");
    $SectionAnnadir.querySelector(".restarYes").classList.remove("visible");
    $SectionAnnadir.querySelector(".restarYes").classList.add("hidden");
    $SectionAnnadir.classList.remove("absolute");
    $SectionAnnadir.querySelector("#buttonRestar").classList.remove("hidden");
    $SectionAnnadir.querySelector("#buttonAnnadir").classList.remove("hidden");
  }
});


// para la suma
d.addEventListener("click", e => {
  const { $form } = necesarios;
  if (e.target.matches(".buttonSuma")) {
    let a = suma(
      Number($frutasActuales.value),
      Number($SectionAnnadir.querySelector("#fruticas").value)
    );
    alert("No olvides enviar los cambios");
    $form.cFrutasVendidas.value = a;
    $SectionAnnadir.classList.add("hidden");
    $form.sub.style.backgroundColor = "green";
    $form.sub.style.color = "#fff";
    d.body.style.visibility = "visible";
  }
});
// para la restarYes

d.addEventListener("click", (e) => {
  const { $form } = necesarios;
  if (e.target.matches(".buttonResta")) {
    let a = resta(
      Number($frutasActuales.value),
      Number($SectionAnnadir.querySelector("#fruticasResta").value)
    );
    alert("No olvides enviar los cambios");
    $form.cFrutasVendidas.value = a;
    $SectionAnnadir.classList.add("hidden");
    $form.sub.style.backgroundColor = "green";
    $form.sub.style.color = "#fff";
    d.body.style.visibility = "visible";
  }
});
