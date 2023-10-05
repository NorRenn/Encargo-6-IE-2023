let particles = [];
let numParticles = 1;
let sizeSlider;
let currentColor;
let particlesCreated = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  blendMode(ADD);
  noStroke();
  background(30); // Fondo gris oscuro

  sizeSlider = createSlider(5, 50, 20); // Control deslizante para el tamaño
  sizeSlider.position(10, height + 10);

  currentColor = color(255, 0, 0, random(100, 200)); // Inicialmente, color rojo

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].color = currentColor;
    particles[i].size = sizeSlider.value(); 
    particles[i].followMouse(); 
    particles[i].update();
    particles[i].display();
  }

  // Si se han creado 50 partículas, reinicia la simulación
  if (particlesCreated >= 50) {
    particles = [];
    particlesCreated = 0;
  }
}

function mouseClicked() {
  changeColor();
}

function changeColor() {
  let randomColor = floor(random(5));
  if (randomColor === 0) {
    currentColor = color(255, 0, 0, random(100, 200)); // Rojo
  } else if (randomColor === 1) {
    currentColor = color(0, 255, 0, random(100, 200)); // Verde
  } else if (randomColor === 2) {
    currentColor = color(0, 0, 255, random(100, 200)); // Azul
  } else if (randomColor === 3) {
    currentColor = color(255, 165, 0, random(100, 200)); // Naranja
  } else {
    currentColor = color(128, 0, 128, random(100, 200)); // Lila
  }
}

class Particle {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.size = random(5, 20);
  }

  followMouse() {
    this.x = mouseX;
    this.y = mouseY;
  }

  update() {
  }

  display() {
    fill(currentColor);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
