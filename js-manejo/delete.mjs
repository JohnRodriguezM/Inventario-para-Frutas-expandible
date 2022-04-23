"use strict";

import { d, url } from "./index.mjs";

// manejo del delete, con delegación de eventos
d.addEventListener("click", e => {
  if (e.target.matches(".delete")) {
    try {
      const options = {
        method: "DELETE",
      };
      let isDelete = confirm("Are you sure you want to delete?");
      // se hace uso del operador ternario
      isDelete ? fetch(`${url}/${e.target.dataset.id}`, options) : console.warn(' no eliminado')
      location.reload()
    }
    catch (err) { console.error('se produjo un', err) }
    finally { console.log('se ha usado el delete') }
  }
});
