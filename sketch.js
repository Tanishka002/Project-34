const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

  backgroundImg = loadImage("images/GamingBackground.png");
  
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    hero = new Hero(200,200)
    fly = new Fly(hero.body,{x:300, y:50})
    ground = new Ground(600,300,1200,50);
   

   
}

function draw(){
    background("backgroundImg");
    Engine.update(engine);
    //strokeWeight(4);
   hero.display();   
   ground.display();
   fly.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  fly.fly();
}




