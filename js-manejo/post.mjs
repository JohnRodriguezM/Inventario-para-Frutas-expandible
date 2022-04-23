'use strict';


// EN ESTE ARCHVIVO JS se maneja el post(create) de un CRUD

// se importa d, que almacena a document,
// se importa url
// se importa objeto de necesarios
import { d, url, necesarios } from './index.mjs';


d.addEventListener('submit', async e => {
	const { $form } = necesarios;
	// poner el form con destructuracion
	if (e.target === $form) {
		e.preventDefault();
		// si dentro de la etiqueta form no tiene id la etiqueta con name (id) que es un input hidden el cual va a modificar su value de manera dinamica gracias al data-atributte
		if (!e.target.id.value) {
			// va a ejecutar el metodo post (create)
			try {
				let options = {
					method: 'POST',
					headers: {
						"Content-type": "application/json; charset=utf-8",
					},
					body: JSON.stringify({
						fruta: e.target.cFrutas.value,
						cantidad: e.target.cFrutasVendidas.value,
					}),
				}
				let peticion = await fetch(url, options)
				let data = await peticion.json()
				location.reload()
				console.log(data)
			}
			catch (err) {
				console.log(err)
			}
		} else {
			// manejo del put
			try {
				const options = {
					method: 'PUT',
					headers: {
						"Content-type": "application/json; charset=utf-8",
					},
					// son dos elementos los que se van a crear, (fruta) y (cantidad) de frutras
					body: JSON.stringify({
						fruta: e.target.cFrutas.value,
						cantidad: e.target.cFrutasVendidas.value,
					}),
				}
				let peticion = await fetch(`${url}/${e.target.id.value}`, options)
				let data = await peticion.json()
				console.log(data)
				location.reload()
			}
			catch (err) {
				console.log(err)
			}
		}
	}
})

// manejo del PUT
// en el momento en que se hace click en el botón de editar, el input hidden toma el valor que venga en ese botón editar, de esta manera no se confunde la operacion con un post(create)
d.addEventListener('click', e => {
	const { $title, $form, $datos } = necesarios;
	if (e.target.matches('.edit')) {
		$title.textContent = "editar cantidad de frutas";
		$form.cFrutas.value = e.target.dataset.fruta;
		$form.cFrutas.disabled = true;
		$form.cFrutasVendidas.value = e.target.dataset.cantidad;
		$form.id.value = e.target.dataset.id;
		$datos.style.display = "block";
		$datos.style.backgroundColor = "red";
		$datos.style.width = "200px";
		$form.sub.value = "enviar cambios";
	}
})



