function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(220);
  
  line(windowWidth/2,0,windowWidth/2,windowHeight) //lodrat linje afhænging af vinduet
  line(0,windowHeight/2,windowWidth, windowHeight/2) //Vandret linje afhænging af vinduet
  
    if(mouseX < windowWidth/2 && mouseY < windowHeight/2) c = color("white") //Højre top hvid
    if(mouseX > windowWidth/2 && mouseY < windowHeight/2) c = color("red") // Venstre top rød
    if(mouseX < windowWidth/2 && mouseY > windowHeight/2) c = color("red") //Venstre bund rød
    if(mouseX > windowWidth/2 && mouseY > windowHeight/2) c = color("white") // Højre bund hvid
  
  fill(c) // Farven til c
    circle(mouseX, mouseY,20);
 
}