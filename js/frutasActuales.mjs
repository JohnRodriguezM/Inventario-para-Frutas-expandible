import { frutas } from "./dom1.mjs";
import { inicializadora,introductoria } from "./surtido.mjs";

function actuales(a) {
    a.preventDefault()
    introductoria.actual()
}

document.getElementById('button').addEventListener('click', actuales)
