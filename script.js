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
var d=new Date()
function passive(){
  if (lasttime!==0){
    timeelapsed=(d.getTime()-lasttime)/1000;}
  lasttime=d.getTime();
  game.currency.existance+=game.production.existance*timeelapsed;
  game.currency.time+=game.production.time*timeelapsed;
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="Existance: <span class=\"large\">"+game.currency.existance+"</span>";}
  if (game.unlocked.time){document.getElementById("disp.time").innerHTML="Time: <span class=\"large\">"+game.currency.time+"</span>";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="Thoughts: <span class=\"large\">"+game.currency.thought+"</span>";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="Energy: <span class=\"large\">"+game.currency.energy+"</span>";}
}
loading=false;
