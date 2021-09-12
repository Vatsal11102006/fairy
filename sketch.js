const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var fairyImg;
var starImg;
var starnightImg;



function preload(){

  fairyImg = loadImage("fairy.png");
  starImg = loadImage("star.png");
  starnightImg=loadImage("starnight.png");
}

function setup() {
  createCanvas(800, 800);

  fairy=createSprite(130,520);
  fairy.addImage("fairy",fairyImg);
  fairy.scale=0.2;

  star=createSprite(650,30);
  star.addImage("star",starImg);
  star.scale=0.5;
  engine = Engine.create();
   world = engine.world; 
   starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, starBody);
     Engine.run(engine);
  
  
  

}


function draw() {
  background(starnightImg);
  star.x=starBody.position.x;
  star.y=starBody.position.y;
  if(starBody.position.y>470){
    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();
}
 
 function keyPressed(){
  
    if(keyCode==LEFT_ARROW){
      fairy.x=fairy.x-8;
    }
    if(keyCode==RIGHT_ARROW){
      fairy.x=fairy.x+8;
    }
    if(keyCode==DOWN_ARROW){
      Matter.Body.setStatic(starBody,false);
  }
 

 }
