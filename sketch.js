
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
  Engine.run(engine);
  
  hammer = new Hammer(400,350,100,20);
  ground = new Ground(400,660);
  stone = new Stone(300,600,60,60);
  rubber = new Rubber(250,550,6);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}



