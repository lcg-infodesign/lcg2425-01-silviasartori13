//Spectrum Colors Arranged by Chance - Ellsworth Kelly

let columns = 40; // Aumenta il numero di colonne per rendere i quadrati più piccoli
let rows;
let squareSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateGrid(); // Calcola la dimensione dei quadrati e delle righe in base alla dimensione dello schermo
  noLoop(); // Disegna solo una volta
  noStroke(); // Rimuove il contorno
  background(245, 245, 220); // Imposta lo sfondo beige
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateGrid(); // Aggiorna la griglia quando la finestra viene ridimensionata
  background(245, 245, 220); // Ripristina lo sfondo beige
  redraw(); // Ridisegna la griglia dopo il ridimensionamento
}

function updateGrid() {
  squareSize = width / columns; // Aggiorna la dimensione dei quadrati in base alla larghezza del canvas
  rows = floor(height / squareSize); // Calcola il numero di righe basato sull'altezza del canvas
}

function draw() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      // Probabilità del 45% che venga disegnato un quadrato
      if (random(1) > 0.55) {
        fill(randomColor()); // Colore casuale
        rect(x * squareSize, y * squareSize, squareSize, squareSize); // Quadrato nella posizione corretta
      }
      // Altrimenti non disegna nulla, mostrando lo sfondo beige
    }
  }
}

// Genera un colore casuale
function randomColor() {
  return color(random(255), random(255), random(255));
}

function mousePressed() {
  background(245, 245, 220); // Ripristina lo sfondo beige
  redraw(); // Ridisegna con nuovi colori e distribuzione
}
