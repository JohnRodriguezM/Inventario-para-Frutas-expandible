import { frutas } from "./dom1.mjs";
export const inicializadora = new frutas()
export const introductoria = inicializadora.frutera()
function surtidoFrutas(a){
    a.preventDefault()
    let inputFrutas = document.getElementById('cFrutas').value;
    inputFrutas = Number(inputFrutas)
    let surtidor = introductoria.surtir(inputFrutas)
    //document.getElementById('form').reset()
    
    let inputVentas = document.getElementById('cFrutasVendidas').value;
    inputVentas = Number(inputVentas)
    if(!inputVentas){
        return true;
    }else{
        let ventas = introductoria.decrementar(inputVentas)
    }
    
    document.getElementById('form').reset();
}

document.getElementById('form').addEventListener('submit',surtidoFrutas)
