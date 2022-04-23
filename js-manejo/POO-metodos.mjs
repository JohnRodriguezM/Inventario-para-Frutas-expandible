'use strict';

// se crea una clase que genera unas funciones (closures), para administrar la variable frutas, sin embargo, se hace innecesario su uso de actualmente ya que se está trabajando con la fake rest api de json-server
/* export class Manejador_Frutas {
	// se crea funcion para generar las diferentes clasuras
	frutera() {
		let frutas = 0;
		return {
			surtir: function (frutasCompradas) {
				// permite realizar un surtido de frutas, aumentando en x el valor de la variable frutas
				frutas += frutasCompradas
				console.log(`Han ingresado al inventario ${frutasCompradas} frutas la cantidad actual de frutas es ${frutas}`);
				return frutas;
			},
			decrementar: function (frutasVendidas) {
				// permite realizar una "venta" de frutas, disminuyendo en x el valor de la variable frutas
				frutas -= frutasVendidas
				console.log(`Han salido del inventario ${frutasVendidas} frutas, la cantidad actual de frutas es ${frutas}`);
				return frutas;
			},
			actual: function () {
				// este elemento es inexistente en el momento
				elemento.style.marginTop = "35px"
				elemento.style.color = "red"
				if (frutas > 0) {
					elemento.style.color = "green"
				}
				elemento.innerHTML = `Las frutas actuales son  ${frutas}`;
				// la función básica es mostrar los números de frutas actuales
			}
		}
	}
}
 */

export class Manejador_Frutas{frutera(){let e=0;return{surtir:function(a){return e+=a,console.log(`Han ingresado al inventario ${a} frutas la cantidad actual de frutas es ${e}`),e},decrementar:function(a){return e-=a,console.log(`Han salido del inventario ${a} frutas, la cantidad actual de frutas es ${e}`),e},actual:function(){elemento.style.marginTop="35px",elemento.style.color="red",e>0&&(elemento.style.color="green"),elemento.innerHTML=`Las frutas actuales son  ${e}`}}}}