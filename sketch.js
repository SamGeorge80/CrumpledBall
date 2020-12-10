
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,bin;

function preload()
{

}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);

	ground = new Ground(width/2,670,width,20);

	binLeft = new DustBin(1200,480,30,300);

	binBase = new DustBin(1300,630,200,30);

	binRight = new DustBin(1400,480,30,300);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
  paper.display();
  ground.display();
  binLeft.display();
  binBase.display();
  binRight.display();
  
  drawSprites(); 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-450});
	}
}
