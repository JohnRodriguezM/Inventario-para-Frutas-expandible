'use strict';
// se importa la clase que contiene los metodos y el closure
import {Manejador_Frutas} from './POO-metodos.mjs'
// se importa d, que almacena a document,
// se importa url
// se importa objeto de necesarios
import {d,url,necesarios} from './index.mjs';


console.log(Manejador_Frutas)


const inicializadoraDeClase = new Manejador_Frutas;
const accesoFunciones = inicializadoraDeClase.frutera();

console.log(accesoFunciones)


d.addEventListener('submit',async e => {
    const {$form} = necesarios;
    // poner el form con destructuracion
    if(e.target === $form){
        e.preventDefault();
        if(!e.target.id.value){
            // va a ejecutar el metodo post (create)
            try{
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
                let peticion = await fetch(url,options)
                let data = await peticion.json()
                console.log(data)
            }
            catch(err){

            }
        }else{
            // manejo del put
            try{
                let options = {
                    method: 'PUT',
                    headers: {
                        "Content-type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify({
                        fruta: e.target.cFrutas.value,
                        cantidad: e.target.cFrutasVendidas.value,
                    }),
                }
                let peticion = await fetch(`${url}/${e.target.id.value}`,options)
                let data = await peticion.json()
                console.log(data)
            }
            catch(err){
                console.log(err)
            }
        }
    }
})

// manejo del PUT

d.addEventListener('click', async e => {
    const {$title,$form,$datos} = necesarios;
    if(e.target.matches('.edit')){
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



