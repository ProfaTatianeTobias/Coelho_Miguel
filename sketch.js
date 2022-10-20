const Engine = Matter.Engine; //mecanismo de física
const Render = Matter.Render; //renderização
const World = Matter.World; //mundo
const Bodies = Matter.Bodies; //corpos
const Constraint = Matter.Constraint; //restrição/ união
const Body = Matter.Body; //corpo
const Composites = Matter.Composites; //grupos
const Composite = Matter.Composite; //grupo

let engine; //escopo de bloco
let world;
var corda;
var fruta;
var solo;
var link;
var coelho;

function preload()
{
  

}


function setup() 
{
  createCanvas(500,700);
 
  engine = Engine.create();
  world = engine.world;

  corda = new Rope(6,{x:250,y:30});

  solo = new Ground(width/2, height-10, width, 10);

  fruta = Bodies.circle(300,300,20);
  Composite.add(corda.body,fruta);

  link = new Link(corda,fruta);

  coelho = createSprite(width/2, height - 100);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  

}

function draw() 
{
  background(51);

  Engine.update(engine);

  ellipse(fruta.position.x, fruta.position.y,20);

  solo.show();

  corda.show();
  
   drawSprites();
}
