// main.js
import { crearDeck, pedirCarta, valorCarta } from './deck.js';
import { turnoComputadora } from './juego.js';

let deck = crearDeck(); // Crear el mazo al iniciar el juego

// Obtener referencias a elementos HTML
const btnPedirCarta = document.querySelector('.btn-pedir');
const btnNuevo = document.querySelector('.btn-nuevo');
const btnDetener = document.querySelector('.btn-detener');
const player = document.querySelector('.player');
const computerCounter = document.querySelector('.computer');
const divComputadora = document.querySelector('.computadora-cartas');
const divJugador = document.querySelector('.jugador-cartas');
const loser = document.querySelector('.loser');
const win = document.querySelector('.win');

// Función para actualizar el contador de puntos en la interfaz
const actualizarPuntos = () => {
  player.innerText = puntosJugador;
  computerCounter.innerText = puntosComputadora;
};

// Evento al hacer clic en "Pedir Carta"
btnPedirCarta.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    puntosJugador += valorCarta(carta);
  
    // Actualizar puntos en la interfaz
    actualizarPuntos();
  
    // Mostrar la carta del jugador en la interfaz
    mostrarCartaEnInterfaz(carta, 'jugador-cartas');
  
    if (puntosJugador > 21) {
      // Resto del código para manejar la pérdida, deshabilitar botones, etc.
      // Aquí puedes mostrar un mensaje de pérdida, deshabilitar botones, etc.
      loser.style.visibility = 'visible';
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      // Resto del código para manejar la victoria, deshabilitar botones, etc.
      // Aquí puedes mostrar un mensaje de victoria, deshabilitar botones, etc.
      win.style.visibility = 'visible';
      turnoComputadora(puntosJugador);
    }
  });
  
 function mostrarCartaEnInterfaz(carta, contenedor) {
    // Crea una imagen para la carta y la muestra en el contenedor especificado
    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${carta}.png`;
    imgCarta.classList = 'cartas';
    document.querySelector(`.${contenedor}`).appendChild(imgCarta);
  }
  

// Evento al hacer clic en "Detener"
btnDetener.addEventListener('click', () => {
  btnDetener.disabled = true;
  btnPedirCarta.disabled = true;
  turnoComputadora(puntosJugador);
});

// Evento al hacer clic en "Nuevo Juego"
btnNuevo.addEventListener('click', () => {
  deck = crearDeck(); // Crear un nuevo mazo
  puntosJugador = 0;
  puntosComputadora = 0;
  divComputadora.innerHTML = '';
  divJugador.innerHTML = '';
  btnDetener.disabled = false;
  btnPedirCarta.disabled = false;
  loser.style.visibility = 'hidden';
  win.style.visibility = 'hidden';
  actualizarPuntos();
});
