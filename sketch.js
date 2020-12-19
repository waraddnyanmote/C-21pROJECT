var wall;
var bullet;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
 bullet= createSprite(50, 200, 50, 50);
 bullet.velocityX=speed;
 bullet.shapeColor='black';
 wall=createSprite(1500,200,60,height/2);
wall.shapeColor='black';

}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(deformation>10){
  wall.shapeColor='red';

}
if(deformation<10 ){
  wall.shapeColor='green';
}

  } 
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
return false;
}