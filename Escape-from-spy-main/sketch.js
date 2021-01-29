var canvas, backgroundImage;
var ranks;
var gameState = 0;
var playerCount;
var allPlayers=[];
var distance = 0;
var database;


var form, player, game;
var r;
var boxes
var box, box2, box3, box4, box5, box6, box7 , box8, box9, box10; 
var wall1,wall2

var ps, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 ;

function preload(){
c1=loadImage("among us black.png")
c2=loadImage("among us cyan.png")
c3=loadImage("among us dark blue.png")
c4=loadImage("among us dark green.png")
t=loadImage("Among us map.png ")
c5=loadImage("among us orange.png")
c6=loadImage("among us pink.png")
c7=loadImage("among us purple.png")
c8=loadImage("Red.png")
c9=loadImage("among us white.png")
c10=loadImage("among us yellow.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 r=Math.round(random(1,10))
    console.log(r)

 
}



function draw(){
  
 
  if (gameState===0)
  {
   background("red")
  }
  if(playerCount === 10){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   
  }
  if(gameState===2){
    clear();
    background("yellow")

    game.end();
  }
}
