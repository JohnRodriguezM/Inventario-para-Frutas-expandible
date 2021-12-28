'use strict';

/*
function frutera() {
    let frutas = 200;
    return {
        surtir(frutasCompradas) {
            frutas += frutasCompradas
            return console.log(`Han ingresado al inventario ${frutasCompradas} frutas la cantidad actual de frutas es ${frutas}`);
        },
        decrementar(frutasVendidas) {
            frutas -= frutasVendidas
            return console.log(`Han salido del inventario ${frutas} frutas`);
        },
        actual() {
            return console.log(`La cantidad actual de frutas es ${frutas}`);
        }
    }
}

let fruteria = frutera();

fruteria.decrementar(10)
fruteria.decrementar(15)
fruteria.actual()
fruteria.surtir(60)*/

// se crea una clase para las frutas la cual puede ser reutilizada, en ella se almacena la clausura del "contador de frutas"

//tipoFrutas(el) {
//    console.log(`el tipo de fruta añadido es ${el}`)



export class frutas {
    frutera() {
        const $footer = document.getElementById('footer');
        let elemento = document.createElement("div")
        $footer.appendChild(elemento)
        let frutas = 0;
        return {
            surtir: function (frutasCompradas) {
                //pendiente validaciones internas
                frutas += frutasCompradas
                console.log(`Han ingresado al inventario ${frutasCompradas} frutas la cantidad actual de frutas es ${frutas}`);
                return frutas;
            },
            decrementar: function (frutasVendidas) {
                //pendiente validaciones internas
                frutas -= frutasVendidas
                console.log(`Han salido del inventario ${frutasVendidas} frutas, la cantidad actual de frutas es ${frutas}`);
                return frutas;
            },
            actual: function () {
                //pendiente validaciones internas
                elemento.innerHTML = `cantidad de frutas actuales es igual a  ${frutas}`;
                //return console.log(`La cantidad actual de frutas es ${frutas}`);
            }
        }
    }
}

let fruticas = new frutas()

let a = fruticas.frutera()
/*
a.surtir(40)
a.decrementar(10)
//a.actual()
a.surtir(100)*/




//////

//let fruteria = frutera()
//fruteria.surtir(20)
//fruteria.decrementar(10)
//fruteria.actual()




// esta es una prueba:
let numero = 100;
numero = numero - 50;

//appendChild(elemento)