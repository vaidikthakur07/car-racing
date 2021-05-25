class player{

 constructor(){
     this.index = null;
     this.distance = 0;
     this.name = null;
 }
 
 updateCount(count){
     database.ref('/').update({
         playerCount:count
     })
 }

update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
    })
}

static getPlayerInfo(){
    var playerInforef = database.ref('players');
    playerInforef.on("value",(data)=>{
        allPlayers = data.val();
    })
}

getCount(){
    var playercountref = database.ref('playerCount');
    playercountref.on("value",(data)=>{
        playerCount = data.val();
    })
}


}