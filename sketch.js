const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var backgroundImg,background2Img,background3Img;
var backgroundI,background2I,background3I;
var snowA,snowB,snowC,snowD,snowE,snowF,snowG,snowH,snowI,snowJ;

function preload(){
backgroundI=loadImage("snow1.jpg")
background2I=loadImage("snow2.jpg")
background3I=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(990,700);
  engine=Engine.create();
  world=engine.world;

  snowA=new snow(random(100,950),random(40,180),random(25,70));
  snowB=new snow(random(100,950),random(40,180),random(25,70));
  snowC=new snow(random(100,950),random(40,180),random(25,70));
  snowD=new snow(random(100,950),random(40,180),random(25,70));
  snowE=new snow(random(100,950),random(40,180),random(25,70));
  snowF=new snow(random(100,950),random(40,180),random(25,70));
  snowG=new snow(random(100,950),random(40,180),random(25,70));
  snowH=new snow(random(100,950),random(40,180),random(25,70));
  snowI=new snow(random(100,950),random(40,180),random(25,70));
  snowJ=new snow(random(100,950),random(40,180),random(25,70));

  backgroundImg=createSprite(495, 370, 1000, 800);
  backgroundImg.addImage(backgroundI);
  backgroundImg.scale=1.95;

  background2Img=createSprite(-995, 370, 1000, 800);
  background2Img.addImage(background2I);
  background2Img.scale=1;

  background3Img=createSprite(-995, 370, 1000, 800);
  background3Img.addImage(background3I);
  background3Img.scale=1;

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
  if(frameCount % 40===0){
    background2Img.x=495;
  }
    textSize(50);
    fill("red");
    text("MERRY CHRISTMAS",270,100);

  if(frameCount % 60===0){
    background3Img.x=495;
  }

  snowA.display();
  snowB.display();
  snowC.display();
  snowD.display();
  snowE.display();
  snowF.display();
  snowG.display();
  snowH.display();
  snowI.display();
  snowJ.display();
}