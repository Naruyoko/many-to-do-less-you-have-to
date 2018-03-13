var game{
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
  }
};
var timeelapsed=0;
var lasttime=0;
function passive(){
  if (lasttime!=0){timeelapsed=(Date.getTime()-lasttime)/1000;}
  lasttime=Date.getTime();
  game.currency.existance+=game.production.existance*timeelapsed;
  game.currency.time+=game.production.time*timeelapsed;
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
}
