const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var rock;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new Boggie(50,100,50,50)
  boggie2 = new Boggie(150,100,50,50)
  boggie3 = new Boggie(250,100,50,50)
  boggie4 = new Boggie(350,100,50,50)
  boggie5 = new Boggie(450,100,50,50)
  boggie6 = new Boggie(550,100,50,50)
  rock = new Rock(1000,100,200,100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  rock.show();
  }
