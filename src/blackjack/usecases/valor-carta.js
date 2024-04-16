/**
 * Obtener el valor o puntaje de la carta
 * @param {String} carta Ejemplo: 3D
 * @returns {Number} retorna el valor de la carta tomada
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
