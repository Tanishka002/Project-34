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
    box1 = new Block(500,400,70,70);
    box2 = new Block(500,400,70,70);
    box3 = new Block(500,400,70,70);
    box4 = new Block(500,400,70,70);
    box5 = new Block(500,400,70,70);
    box6 = new Block(500,400,70,70);
    box7 = new Block(500,400,70,70);
    box8 = new Block(900,400,70,70);
    box9 = new Block(900,400,70,70);
    box10 = new Block(900,400,70,70);
    box11 = new Block(900,400,70,70);
    box12 = new Block(900,400,70,70);
    box13 = new Block(900,400,70,70);
    box14 = new Block(650,400,70,70);
    box15 = new Block(650,400,70,70);
    box16 = new Block(650,400,70,70);
    box17 = new Block(650,400,70,70);
    box18 = new Block(650,400,70,70);
    box19 = new Block(650,400,70,70);
    box20 = new Block(650,400,70,70);
    monster = new Monster (1000,400,25)
}

function draw(){
    background("backgroundImg");
    Engine.update(engine);
    //strokeWeight(4);
   hero.display();   
   ground.display();
   fly.display();
   box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display(); 
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    monster.display(); 
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  fly.fly();
}




