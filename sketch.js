var fr,o1,o2;
var mr

function setup() {
  createCanvas(800,400);
  fr = createSprite(600, 200, 50, 50);
  fr.shapeColor = "green"
  fr.debug = true;
  //fr.velocityX = -4;

  mr = createSprite(200, 200, 50, 50);
  mr.shapeColor = "green"
  mr.debug = true;
  //mr.velocityX = 4;

  o1 = createSprite(300, 300, 50, 50);
  o1.shapeColor = "green"
  o1.debug = true;

  o2 = createSprite(400, 100, 50, 50);
  o2.shapeColor = "green"
  o2.debug = true;
 
}

function draw() {
  background(0);
  
  mr.x = World.mouseX;
  mr.y = World.mouseY;

 
  if(isTouching(mr,o1)){  // arguments
    o1.shapeColor = "red"
    mr.shapeColor = "red"
  }
  else{
    o1.shapeColor = "green";
    mr.shapeColor = "green";
  }
 
  drawSprites();
}
//arguments and parameters are almost same
//types of functions:
//1. no argument no return
//2. no argument but return
//3. argument with return


function bounceOff(){
   /*if(mr.x - fr.x < mr.width/2 + fr.width/2 && 
    fr.x - mr.x < mr.width/2 + fr.width/2 ){
      fr.velocityX = fr.velocityX * (-1)
      mr.velocityX = mr.velocityX * (-1)
    }   */
}