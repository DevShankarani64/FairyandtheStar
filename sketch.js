var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.15;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.19;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


	

}


function draw() {
  background(bgImg);

  fairy.setCollider("circle",0,0,493);

  fairyVoice.play();

  if (keyDown("right_arrow")){
	fairy.x= fairy.x+4;
  }

  if (keyDown("left_arrow")){
	fairy.x= fairy.x-4;
  }

  if (keyDown("down_arrow")){
	star.velocityY=4;
  }

  

  if (star.isTouching(fairy)){
	  star.velocityY=0;
	  fairyVoice.stop();
  }


  star.setCollider("circle",0,0,100);
  
  drawSprites();

}

function keyPressed() {
	//write code here
}
