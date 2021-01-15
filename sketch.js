const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg, backgroundImg
var score;

function preload()
{
  getBackgroundImg();
}

function setup() {
  createCanvas(1500, 700);
  
  score = 0;


	engine = Engine.create();
  world = engine.world;
  
 

  //Create the Bod(ies Here.
  base1 = new Base(width/2,520,500,20);
  base2 = new Base(1150,300,350,20);

  

  box1 = new Box(600,510,50,40);
  box2 = new Box(640,510,50,40);
  box3 = new Box(680,510,50,40);
  box4 = new Box(720,510,50,40);
  box5 = new Box(760,510,50,40);
  box6 = new Box(800,510,50,40);
  box7 = new Box(840,510,50,40);
  box8 = new Box(880,510,50,40);

  box9 = new Box(640,505,50,40);
  box10 = new Box(680,505,50,40);
  box11 = new Box(720,505,50,40);
  box12 = new Box(760,505,50,40);
  box13 = new Box(800,505,50,40);
  box14 = new Box(840,505,50,40);

  box15 = new Box(680,500,50,40);
  box16 = new Box(720,500,50,40);
  box17 = new Box(760,500,50,40);
  box18 = new Box(800,500,50,40);

  box19 = new Box(720,495,50,40);
  box20 = new Box(760,495,50,40);
 
  box21 = new Box(1070,290,50,40);
  box22 = new Box(1110,290,50,40);
  box23 = new Box(1150,290,50,40);
  box24 = new Box(1190,290,50,40);
  box25 = new Box(1230,290,50,40);

  box26 = new Box(1112,285,50,40);
  box27 = new Box(1150,285,50,40);
  box28 = new Box(1190,285,50,40);
  
  box29 = new Box(1150,280,50,40);

  box30 = new Box(1150,275,50,40);

  
 
  polygon = new Pentagon(200,200,60,60);
  sling = new SlingShot(polygon.body, {x:250,y:260})
  

  
  
  

 
  
  
     
	Engine.run(engine);
  
}


function draw() {

  if(backgroundImg)
    background(backgroundImg);

  rectMode(CENTER);

  
  drawSprites();

  noStroke();
  textSize(20);
  fill("white");
  text("Score: "+score,1140,50);

  stroke("white");
  textSize(30);
  fill("white");
  text("DESTRUCTION GAME",600,50);
  text("Drag the pentagon to hit the blocks...",510,90);
  text("Press space to replay",570,150);
  

  fill("brown");
  base1.display();
  base2.display();

  fill("blue");
  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box21.display();
  box21.score();

  box22.display();
  box22.score();

  box23.display();
  box23.score();

  box24.display();
  box24.score();

  box25.display();
  box25.score();

  fill("lightGreen");
  box9.display();
  box9.score();

  box10.display();
  box10.score();

  box11.display();
  box11.score();

  box12.display();
  box12.score();

  box13.display();
  box13.score();

  box14.display();
  box14.score();

  box26.display();
  box26.score();

  box27.display();
  box27.score();

  box28.display();
  box28.score();

  fill("red");
  box15.display();
  box15.score();

  box16.display();
  box16.score();

  box17.display();
  box17.score();

  box18.display();
  box18.score();

  box29.display();
  box29.score();

  fill("yellow");
  box19.display();
  box19.score();

  box20.display();
  box20.score();

  box30.display();
  box30.score();

  polygon.display();
  sling.display();

  
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
 
    sling.attach(polygon.body);
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=16){
      bg = "background_image-1.jpg";
  } else {
      bg = "night image.jpg";
  }
  backgroundImg = loadImage(bg);
  
}



