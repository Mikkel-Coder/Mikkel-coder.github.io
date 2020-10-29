let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  ellipse(x, y, r*2, r*2)
  x += xspeed
  y += yspeed
  if (x > windowWidth - r || x < r) {
    xspeed = -xspeed
  }
  if (y > windowHeight - r || y < r ) {
    yspeed = -yspeed
  } 
}