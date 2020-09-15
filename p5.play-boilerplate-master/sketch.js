var car,wall, speed,weight, deformation;


function setup() {
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50)
  car.shapeColor="grey"
  wall=createSprite(1500,200,60,200)
  createCanvas(1600,400);
  car.velocityX=speed
}

function draw() {
  background(80,80,80);  
 background.shapeColor="yellow"
  console.log(deformation)
  
  if(car.x>1420){ 
reset()
deformation=0.5*weight*speed*speed/22500
}
if(deformation<100){
car.shapeColor="green"
}
if(deformation>100&&deformation<180){
car.shapeColor="yellow"
}
if(car.shapeColor>180){
car.shapeColor="red"
}

drawSprites();
}
function reset(){
car.velocityX=0

}