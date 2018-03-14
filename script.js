var game={
  currency:{
    existivity:0,
    existability:0,
    existance:0,
    etime:0, //experienced time
    thought:0,
    energy:0
  },
  production:{
    existivity:0.01,
    existance:0,
    etime:0,
    thought:0,
    energy:0
  },
  unlocked:{
    existivity:true,
    existance:false,
    etime:false,
    thought:false,
    energy:false
  }
};
function showhide(x,t){
  if (t){
      x.className="";
  }else{
      x.className="hidden";
  }
}
var timeelapsed=0;
var lasttime=0;
var d=new Date();
function passive(){
  if (lasttime!==0){
    d=new Date();
    timeelapsed=(d.getTime()-lasttime)/1000;}
  lasttime=d.getTime();
  game.currency.existivity+=game.production.existivity*timeelapsed;
  game.currency.existability=2/(1+Math.exp(-game.currency.existivity))-1;
  game.currency.etime+=game.production.etime*timeelapsed;
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
  if (game.unlocked.existivity){document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+Math.round(game.currency.existivity*100)/100+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existability)/10+"%</span> change of existing.";}
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="You know <span class=\"large\">"+game.currency.existance+"</span> existances. They produce <span class=\"large\">"+Math.round(game.production.existivity*100)/100+"</span> existivity each second.";}
  if (game.unlocked.etime){document.getElementById("disp.etime").innerHTML="Existances experienced as much as <span class=\"large\">"+Math.round(game.currency.etime)+"</span> seconds. It boosts the production of existivity by <span class=\"large\">"+Math.round(Math.pow(1.2,game.currency.etime)*100-100)+"%</span>.";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="Thoughts: <span class=\"large\">"+game.currency.thought+"</span>";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="Energy: <span class=\"large\">"+game.currency.energy+"</span>";}
}
function convexisti(){
  if (Math.random()<game.currency.existability){
    game.currency.existance++;
    game.production.existivity=(game.currency.existance+1)*0.01*Math.pow(1.2,game.currency.etime);
    game.unlocked.existance=true;
    if (game.currency.existance>=Math.pow(2,game.currency.etime+4)){
      document.getElementById("button.convexisti").className="unavailable";
      showhide(document.getElementById("button.convexista"),true);
    }
  }afd
  game.currency.existivity=0;
}
function convexista(){
  if (game.currency.existance>=Math.pow(2,game.currency.etime+4)){
    game.currency.etime++;
    game.currency.existivity=0;
    game.currency.existance=0;
    game.production.existivity=0.01*Math.pow(1.2,game.currency.etime);
    game.unlocked.etime=true;
    document.getElementById("button.convexisti").className="";
    document.getElementById("button.convexista").className="unavailable";
  }
}
loading=false;
