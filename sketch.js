const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4, box5,box6,box7,box8,box9,box10,hero;



function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(700,250,400,20);

    box1 = new Box(550,220,50,50);
    box2 = new Box(650,220,50,50);
    box3 = new Box(750,220,50,50);
    box4 = new Box(850,220,50,50);
    box5 = new Box(600,170,50,50);
    box6 = new Box(700,170,50,50);
    box7 = new Box(800,170,50,50);
    box8 = new Box(650,120,50,50);
    box9 = new Box(750,120,50,50);
    box10 = new Box(700,70,50,50);
    hero = new Bird(200,200);
    
}

function draw(){
    

    
    Engine.update(engine);
   ground.display();

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
   hero.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

