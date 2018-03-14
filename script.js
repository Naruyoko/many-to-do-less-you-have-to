var game={
  currency:{
    existivity:0,
    time:0,
    thought:0,
    energy:0
  },
  production:{
    existivity:0.01,
    time:0,
    thought:0,
    energy:0
  },
  unlocked:{
    existivity:true,
    time:false,
    thought:false,
    energy:false
  }
};
var timeelapsed=0;
var lasttime=0;
var d=new Date();
function passive(){
  if (lasttime!==0){
    d=new Date();
    timeelapsed=(d.getTime()-lasttime)/1000;}
  lasttime=d.getTime();
  game.currency.existivity+=game.production.existivity*timeelapsed;
  game.currency.existance=1/(1+Math.exp(game.currency.existivity));
  game.currency.time+=game.production.time*timeelapsed;
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
  if (game.unlocked.existivity){document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+Math.round(game.currency.existivity*10)/10+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existivity)/10+"%</span> change of existing.";}
  if (game.unlocked.time){document.getElementById("disp.time").innerHTML="Time: <span class=\"large\">"+game.currency.time+"</span>";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="Thoughts: <span class=\"large\">"+game.currency.thought+"</span>";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="Energy: <span class=\"large\">"+game.currency.energy+"</span>";}
}
loading=false;
