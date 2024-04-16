/**
 * Función que muestra una carta tomada por el jugador o la PC y la agrega a la sección de cartas.
 * @param {String} carta - La carta a mostrar.
 * @param {HTMLElement} divCartas - El elemento HTML donde se mostrarán las cartas.
 */

export const crearCarta = (carta, divCartas) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  divCartas.append(imgCarta);
};
