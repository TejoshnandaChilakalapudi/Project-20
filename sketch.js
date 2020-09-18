var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(10,50);

 car=createSprite(50, 200, 50, 20);
 car.shapeColor="blue";
 car.velocityX= speed;
 
 wall = createSprite(1400,200,30,60);
 wall.shapeColor="grey";
}

function draw() {
  background("black"); 
  
  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=(0.5*speed*weight*speed*speed)/22509;
   
    if(deformation>180){
     car.shapeColor="red";
  }
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
 }

 if(deformation<100){
  car.shapeColor="green";
}
console.log(deformation);
   }
   
   drawSprites();
}