//Jeg har lavet koden med sammarbejde med Sander og Jonas. Jeg har fjernet nogle funktioner og værdier, da jeg synes de ikke var brugebare og ændret nogle.

let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (i=0;i<x.length;i++){ 
    circle(x[i], y[i], 20);

    
  if (x[i] > width - 20 ) {
    xSpeed[i] = -xSpeed[i];
  }

  if (x[i] < 0 + 20 ) {
    xSpeed[i] = -xSpeed[i];
  }

  if (y[i] > height - 20  || y[i] < 0 + 20 ) {
    ySpeed[i] = -ySpeed[i];
  }

  x[i] = x[i] + xSpeed[i];
  y[i] = y[i] + ySpeed[i];
  }
}

function keyPressed(){
  x.push(random(20,width-20))
  y.push(random(20,height-20))
  xSpeed.push(random(-5,5))
  ySpeed.push(random(-5,5))
}