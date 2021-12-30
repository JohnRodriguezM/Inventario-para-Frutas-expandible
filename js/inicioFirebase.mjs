import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS5ndnQlqDTycQ_lPYv7dMAog1O5ndgfY",
    authDomain: "frutasss.firebaseapp.com",
    projectId: "frutasss",
    storageBucket: "frutasss.appspot.com",
    messagingSenderId: "799424522741",
    appId: "1:799424522741:web:1dbbabc8d0ea227d4098bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


// creacion de funcion para base de datos

function sendFruits(a) {
    a.preventDefault();
    const envioDatos = async() => {
        try {
        const docRef = await addDoc(collection(db, "frutas"),{
            frutas_Surtidas: document.getElementById('cFrutas').value,
            frutas_Vendidas : document.getElementById('cFrutasVendidas').value,
            tipo_Fruta: document.getElementById('listaFrutas').value,
        });
        console.log("Document written with ID: ",docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }
    envioDatos();
}

const envio1 = document.getElementById('form').addEventListener("submit",sendFruits) // debia traer el id del formulario,