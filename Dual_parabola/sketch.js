//Denne kode er primært kodet af Jonas Sørsdal, da jeg ikke selv kunne lave det, på grund af mangelde vide. Jeg kunne godt tænke mig at vi gennemgår hvad map er, og at vi skal læse en wikiartikel hjælper mig overhovedet ikke

function setup() {
  createCanvas(windowWidth, windowHeight ); 
}

function draw() {
  background(220);

  
  let n = map(mouseX, 0, windowWidth,0,10, true); //vi har ikke gennemgået hvad en map funktion er, med jeg har fët hjælp fra Jonas Sørsdal. 1000 tak Jonas
  n = round(n); //da makørens position kommer ud i kommer tal afrunder vi det til hele tal
  print(n);
  
  for(let i= 0; i <= n; i++){ //en løkke funtion som opdateres konstant. i er 0, og når musens markør (xværdi) er støre end 0, skal den ...
    x1 = map(i,0,n,0,width / 2, true); //inden for denne rækkevide i og musemarkøren (xværdi) er = sandt
    y1 = map(i,0,n,0,mouseY,true); //inden for denne rækkevide i og musemarkøren (yværdi) er = sandt
    x2 = map(i,0,n,width/2,width, true) //stregerne imellem x1
    y2 = map(i,0,n,mouseY,0, true) //stregnerne imellem y2 (højden)
    line(x1,y1,x2,y2); //de linjer der skal tegnes
  }
}