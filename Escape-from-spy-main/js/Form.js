class Form {

  constructor() {
    this.input = createInput(" ").attribute("placeholder","name");
    this.button = createButton('Play');
    this.kill = createButton('Kill');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('reset');
    this.greet2 = createElement('h2');
    this.task = createButton('Task');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("ASSIGNING IMPOSTER");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

this.reset.position(displayWidth-160 , 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
   this.reset.mousePressed(()=>{
      
      player.updateCount(0)
      game.update(0)
   
      var playerRef=database.ref('players')
      playerRef.remove()
      clear();
      game.start()
  })
  /*if(player.type==="Imposter")
  var imposterplayer=player.type
  this.kill.position(imposterplayer.x,imposterplayer.y);
  this.kill.mousePressed(()=>{
    allPlayers.some((player,index) => {
      if(player.x - imposterPlayer.x <= 20 && player.type !=="Imposter"){
        player.death = true;
        return true;
      }
    })
  })
  if(player.type==="Crewmate")
  var crewplayer=player.type
  this.task.position(crewplayers.x,crewplayers.y);
  this.task.mousePressed(()=>{
    var index=element.index()
    var boxindex=boxes.slice(index,1)
    boxes.some((box,index) => {
      if(player.x - box.x <= 20 && player.type !=="Imposter"){
        box.visible="false";
        return true;
      }
    })
  })*/

}
}