'use strict';
// se importan las funciones requeridas para el uso en firebase en el
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
// pendiente de revisar la actualización de firebase

// La configuracion de mi app web
const firebaseConfig = {
  apiKey: "AIzaSyDsbBbYceGe4KsH0oE-jVp5sID02bhQr6s",
  authDomain: "inventarioproductos-838e2.firebaseapp.com",
  projectId: "inventarioproductos-838e2",
  storageBucket: "inventarioproductos-838e2.appspot.com",
  messagingSenderId: "1027906314946",
  appId: "1:1027906314946:web:83f76c17874fb5bfc8115b"
};

// esta constante app ejecuta inicialize app y como argumento pasa el obj de firebaseConfig
const app = initializeApp(firebaseConfig);