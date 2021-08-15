// ============================================== //
//                     START
// ============================================== //

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj;
var leftWall;
var rightWall;
var ball;

function setup() {
	createCanvas(1100, 400);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	//Create the Bodies Here.
    groundObj = new Ground(width/2,390,width,20);
    leftWall = new Ground(680,320,15,120);
	rightWall = new Ground(880,320,15,120);

	ball = Bodies.circle(150,10,15,ball_options);
	World.add(world,ball);
   
	Engine.run(engine);
	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show();
  leftWall.show();
  rightWall.show();
  fill("lime");
  text("*PRESS ▲ TO JUMP",0,15);
  text(" DON'T HOLD PRESS",0,30);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,15);
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(ball,{x:3,y:0},{x:3,y:0})
	}
}

// ============================================== //
//                     END
// ============================================== //