const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var myEngine, myWorld; 
var ground; 
var ball;
var ball2;

function setup() { 
  createCanvas(800,400); 
  myEngine = Engine.create(); 
  ///my engine's world 
  myWorld = myEngine.world; 

  options= { isStatic :true, } 

  ground= Bodies.rectangle(400,380,800,30, options); 
  World.add(myWorld,ground);
  
  groundOption={restitution:0.8}
  
  ball= Bodies.circle(400,200,40,groundOption);
  World.add(myWorld,ball);

 groundOption2={restitution:1}
  ball2= Bodies.circle(600,200,20,groundOption2);
  World.add(myWorld,ball2);
  console.log(ground); 
} 
function draw() { 
  background("black"); 
  Engine.update(myEngine); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);

  //ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,20,20);
}
