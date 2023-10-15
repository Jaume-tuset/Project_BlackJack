// juego.js
import { crearDeck, pedirCarta, valorCarta } from './deck.js';

let deck = [];
let puntosJugador = 0;
let puntosComputadora = 0;

const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta(deck);
    puntosComputadora += valorCarta(carta);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('TABLAS!!');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana!!');
    } else if (puntosComputadora > 21) {
      alert('Jugador gana!');
    } else {
      alert('Computadora gana!!');
    }
  }, 500);
};

export { turnoComputadora, puntosComputadora,puntosJugador };
