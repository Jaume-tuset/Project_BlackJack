// deck.js

//H: Hearts
//D: Diamonds
//S: Spades
//C: Clubs
//A: As
//J: J
//Q: Queen
//K: King

const tipos = ['H', 'D', 'S', 'C'];
const especiales = ['A', 'J', 'Q', 'K'];

function crearDeck() {
  const deck = [];

  for (let i = 2; i <= 10; i++) {
    tipos.forEach((tipo) => {
      deck.push(i + tipo);
    });
  }

  tipos.forEach((tipo) => {
    especiales.forEach((esp) => {
      deck.push(esp + tipo);
    });
  },)

  shuffleArray(deck);
  return deck;
}

function pedirCarta(deck) {
  if (deck.length === 0) {
    throw 'Ya no hay cartas';
  }

  const carta = deck.pop();
  return carta;
}

function valorCarta(carta) {
  const valor = carta.substring(0, carta.length - 1);
  let puntos = 0;

  if (isNaN(valor)) {
    if (valor === 'A') {
      puntos = 11;
    } else {
      puntos = 10;
    }
  } else {
    puntos = valor * 1;
  }

  return puntos;
}

// Función para barajar el mazo (shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export { crearDeck,pedirCarta,valorCarta };