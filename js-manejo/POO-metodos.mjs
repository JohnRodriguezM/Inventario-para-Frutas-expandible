'usu strict';
// d es la constante donde se guarda el documento.
import {d} from './index.mjs'


export class Manejador_Frutas {
    // se crea funcion para generar las diferentes clasuras
    frutera() {
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
                elemento.style.marginTop = "35px" // este elemento es inexistente en el momento
                elemento.style.color = "red"
                if(frutas > 0){
                    elemento.style.color = "green"
                }
                elemento.innerHTML = `Las frutas actuales son  ${frutas}`;
            }
        }
    }
}