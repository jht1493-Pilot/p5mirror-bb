var rouge,bleu,vert;
function setup() {
  createCanvas(400, 400);
    background(0);
  frameRate(5);
  noStroke();
}

function draw() {
for (var x = 5; x < width; x+= 50){
  //nested loop
for (var y = 10; y < height; y+=50){
fill(random(200,255),random(150,255),0,100);
    rect(x,y,40,30);
 }
}
}

