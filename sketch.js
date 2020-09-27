const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var slingShot, block8,block9,block10,block11,block12,block13,block14,block15,block16
var launchingForce=100
function preload() {
  img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  createSprite(400, 200, 50, 50);
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);
  block16=new Box(390,155,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  launcherObject=new launcher(polygon.body,{x:50,y:200})
  slingShot=new SlingShot(this.polygon,{x:100,y:100})


}

function draw() {
  background(255,255,255);  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  detectollision(polygon,block8);
  detectollision(polygon,block9);
  detectollision(polygon,block10);
  detectollision(polygon,block11);
  detectollision(polygon,block12);
  detectollision(polygon,block13);
  detectollision(polygon,block14);
  detectollision(polygon,block15);
  detectollision(polygon,block16);
  
  drawSprites();
}
function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}
  function detectollision(lpolygon,lblock){
blockBodyPosition=lblock.body.position
polygonBodyPosition=lpolygon.body.position
var distance=dist(polygonBodyPosition.x,polygonBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y)
if(distance<=lblock.r+lpolygon.r){
Matter.Body.setStatic(lblock.body,false)
}
  }