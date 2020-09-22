var car, wall;

var weight, speed, review;

function setup() {
  
  weight = Math.round(random(1000,3000));
  speed = Math.round(random(20,100));

  car = createSprite(350, 200, 50, 20);
  car.shapeColor = "white";
  car.velocityX = -(speed/10);
  

  wall = createSprite(25, 200, 50, 400);

 


  
}
function draw() {
  background(0,0,0); 
  


 if(car.position.x<75){
   car.velocityX = 0;
   
   text("Deformation: "+ Math.round((0.5*weight*speed*speed/22500)), 200, 100);

   if(Math.round((0.5*weight*speed*speed/22500))>180){
    text("BAD and LETHAL", 200, 200);
    car.shapeColor = "red";
   }
   else if(Math.round((0.5*weight*speed*speed/22500))<180 && Math.round((0.5*weight*speed*speed/22500))>80){

    text("AVERAGE and OK", 200, 200);
    car.shapeColor = "yellow";
   }
   else if(Math.round((0.5*weight*speed*speed/22500))<80){
    text("GOOD and PERFECT", 200, 200);
    car.shapeColor = "green";
   }


 }
  
  
  console.log(car.position.x);

  textColor = "white";
  text("Weight: "+ weight, 100, 350);
  text("Speed: "+ speed, 200, 350);
 
  drawSprites();
}
