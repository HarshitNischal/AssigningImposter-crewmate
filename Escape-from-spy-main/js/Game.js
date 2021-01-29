class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    p1 = createSprite(960,253);
    p1.addImage(c1)
    p1.scale=0.11
    p2 = createSprite(1019,239);
    p2.addImage(c2)
    p2.scale=0.07
    p3 = createSprite(965,303);
    p3.addImage(c3)
    p3.scale=0.11
    p4 = createSprite(987,338);
    p4.addImage(c4)
    p4.scale=0.11
    p5 = createSprite(1037,354);
    p5.addImage(c5)
    p5.scale=0.07
    p6 = createSprite(1058,242);
    p6.addImage(c6)
    p6.scale=0.07
    p7 = createSprite(1100,262);
    p7.addImage(c7)
    p7.scale=0.019
    p8 = createSprite(1113,300);
    p8.addImage(c8)
    p8.scale=0.10
    p9 = createSprite(1106,334);
    p9.addImage(c9)
    p9.scale=0.12
    p10 = createSprite(1076,358);
    p10.addImage(c10)
    p10.scale=0.11
    
    ps = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
    
 
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("#c68767")
      image(t,0,0,displayWidth,displayHeight)
    
    fill("black")
      text(mouseX,displayWidth-100,100)
      text(mouseY,displayWidth-100,150)
      //index of the array
      var index = 0;

      //x and y position of the ps
      var x;
      var y;

      

      for(var plr in allPlayers){
       index = index+1;
                 x = 500-allPlayers[plr].positionx;
                 y=500-allPlayers[plr].positiony;
                     
                    ps[index -1].x = x;
                    ps[index - 1].y =y;
                       
                 if(index === player.index){
                        
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                       
                     }
      }

    }
    
    if(player.index===r)
    {
      player.type ="Imposter"
      player.update()
      textSize(50)
      text("red")
      text("YOU ARE AN IMPOSTER" , displayWidth/2,displayHeight/2)
    }
    
    if(keyIsDown(LEFT_ARROW))
    {
      player.x+=5;
      player.update()
      textSize(50)
      text("white")
      text("YOU ARE AN CREWMATE" , displayWidth/2,displayHeight/2)
    }    
    if(keyIsDown(RIGHT_ARROW))
    {
      player.x-=5;
      player.update()
    }
    if(keyIsDown(UP_ARROW))
    {
      player.y+=5;
      player.update()
    }
    if(keyIsDown(DOWN_ARROW))
    {
      player.y-=5;
      player.update()
    }
    drawSprites();
  }
  end(){
    console.log("gameEnded")
  
  }
}
