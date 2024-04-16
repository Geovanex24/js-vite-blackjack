import { crearCarta, pedirCarta, valorCarta } from "./";

/**
 * !Esta función podría ser refactorizada ya que realiza múltiples tareas simultáneamente, lo que aumenta su carga cognitiva.
 * !Los principios de Clean Code sugieren que las funciones deben ser simples y realizar una sola tarea a la vez.
 */

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos  - Puntos mínimos para que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML - Elemento HTML donde se mostrarán los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora - Elemento HTML donde se colocan las cartas de la computadora
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos mínimos son necesario");
  if (!puntosHTML) throw new Error("Argumento puntosHTML es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    crearCarta(carta, divCartasComputadora);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 1000);
};
