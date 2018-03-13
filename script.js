var game={
  currency:{
    existance:0,
    time:0,
    thought:0,
    energy:0
  },
  production:{
    existance:0.01,
    time:0,
    thought:0,
    energy:0
  },
  unlocked:{
    existance:true,
    time:false,
    thought:false,
    energy:false
  }
};
var timeelapsed=0;
var lasttime=0;
function passive(){
  if (lasttime!==0){timeelapsed=(Date.getTime()-lasttime)/1000;}
  lasttime=Date.getTime();
  game.currency.existance+=game.production.existance*timeelapsed;
  game.currency.time+=game.production.time*timeelapsed;
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="Existance: <p class=\"large\">"+game.currency.existance+"</p>";}
  if (game.unlocked.time){document.getElementById("disp.time").innerHTML="Time: <p class=\"large\">"+game.currency.time+"</p>";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="Thoughts: <p class=\"large\">"+game.currency.thought+"</p>";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="Energy: <p class=\"large\">"+game.currency.energy+"</p>";}
}
loading=false;
