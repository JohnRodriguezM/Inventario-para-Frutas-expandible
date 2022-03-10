"use strict";

import { d, url } from "./index.mjs";

// manejo del delete
d.addEventListener("click", (e) => {
  if (e.target.matches(".delete")) {
    try {
      let options = {
        method: "DELETE",
      };
      let isDelete = confirm("Are you sure you want to delete?");
      if (isDelete) {
        fetch(`${url}/${e.target.dataset.id}`, options);
      }
    } catch (err) {}
  }
});


/* <nav class="navbar " role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <h1>Inventario de frutas</h1>
                </a>
                <!---->
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <!---->
            <!---->
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable" aria-hidden="true" aria-expanded="false">
                        <a class="navbar-link" aria-hidden="true" aria-expanded="false">
                            More
                        </a>

                        <div class="navbar-dropdown" aria-hidden="true" aria-expanded="false">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <!-- <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <button>
                                <a class="button is-primary">
                                    <i class="fa-solid fa-apple-core"></i>
                                </a>
                            </button>
                            <button>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </button>
                        </div>
                    </div>
                </div> -->
            </div>
        </nav> */