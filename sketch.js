var boy1Img, boy1;
var boy2Img, boy2;
var background1, background1Img;
var background2, background2Img;
var spaceship1, spaceship1Img;
var spaceship2, spaceship2Img;
var spaceship3, spaceship3Img;
function preload() {
boy1Img = loadImage("images/boy1.png");
boy2Img = loadImage("images/boy2.png");
background1Img = loadImage("images/background1.jpg");
background2Img = loadImage("images/background2.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background1 = createSprite(windowWidth/2, windowHeight/2);
  background1.addImage(background1Img);
  //background1.x = background1.width/2
  background1.scale = 2.5;
  background1.velocityX = -6;
  boy1 = createSprite(200, 500, 30, 40);
  boy1.addImage("shooting",boy1Img);
}

function draw() {
  background(0,0,0);  
  console.log(background1.x);
  if(background1.x> width) {
    background1.x = width/2;
  }
//if(keyPressed === R) {
  //boy1.changeImage(boy2)
//}
  drawSprites();
}
