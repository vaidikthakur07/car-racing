class Form{

constructor(){
this.input = createInput("Name");
this.button = createButton("Play");
this.greeting = createElement('h2');
}

display(){

var title = createElement('h2');
title.html("carr racing game");
title.position(130,0);
this.input.position(130,160);
this.button.position(250,100);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello "+ player.name);
    this.greeting.position(130,100);
})

}

hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
}

}

