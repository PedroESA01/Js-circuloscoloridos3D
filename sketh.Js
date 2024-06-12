let cor
let posicaoHorizontal
let posicaoVertical

function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
}

function draw() {
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical, 50)
  posicaoHorizontal+=random(1, 3);
  posicaoVertical+=random(-3, 3)
  
}