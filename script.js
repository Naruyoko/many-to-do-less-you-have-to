var game={
  currency:{
    existivity:0,
    existability:0,
    existance:0,
    etime:0, //experienced time
    thought:0,
    word:0,
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
function passive(){
  updateprod();
  updatedisp();
}
var timeelapsed=0;
var lasttime=0;
var d=new Date();
function updateprod(){
  if (lasttime!==0){
    d=new Date();
    timeelapsed=(d.getTime()-lasttime)/1000;}
  lasttime=d.getTime();
  game.production.existivity=(Math.floor(game.currency.existance)+1)*0.01*Math.pow(1.2,game.currency.etime)
  game.currency.existivity+=game.production.existivity*timeelapsed;
  game.currency.existability=2/(1+Math.exp(-game.currency.existivity))-1;
  game.production.existance=game.currency.word/100;
  game.currency.existance+=game.production.existance*timeelapsed;
  game.currency.etime+=game.production.etime*timeelapsed;
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
}
function updatedisp(){
  if (game.unlocked.existivity){document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+Math.round(game.currency.existivity*100)/100+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existability)/10+"%</span> change of existing.";}
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="You know <span class=\"large\">"+game.currency.existance+"</span> existances. They produce <span class=\"large\">"+Math.round(game.production.existivity*100)/100+"</span> existivity each second.";}
  if (game.unlocked.etime){document.getElementById("disp.etime").innerHTML="Existances experienced as much as <span class=\"large\">"+Math.round(game.currency.etime)+"</span> seconds. It boosts the production of existivity by <span class=\"large\">"+Math.round(Math.pow(1.2,game.currency.etime)*100-100)+"%</span>.";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="You have <span class=\"large\">"+game.currency.thought+"</span> thoughts and think "+game.currency.thought+" strings per second.";}
  if (game.unlocked.thought){document.getElementById("disp.word").innerHTML="You have thought of <span class=\"large\">"+game.currency.word+"</span> <span title=\"More to do, Less you have to.\">words in the title</span> and finds <span class=\"large\">"+Math.round(game.production.existance*100)/100+"</span> existances per second. Recently generated: ";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="Energy: <span class=\"large\">"+game.currency.energy+"</span>";}
  if (!(document.getElementById("button.convexisti").className=="hidden")){
      if (game.currency.existance>=Math.pow(2,game.currency.etime+4)){
      document.getElementById("button.convexisti").className="unavailable";
    }else{
      document.getElementById("button.convexisti").className="";
    }
  }
  if (!(document.getElementById("button.convexista").className=="hidden")){
    if ((game.currency.existance<Math.pow(2,game.currency.etime+4))||(game.currency.etime>=game.currency.thought*2+4)){
      document.getElementById("button.convexista").className="unavailable";
    }else{
      document.getElementById("button.convexista").className="";
    }
  }
  if (!(document.getElementById("button.convetime").className=="hidden")){
    if ((game.currency.etime<game.currency.thought*2+4)||(game.currency.existivity<400*Math.pow(game.currency.thought+1,2))){
      document.getElementById("button.convetime").className="unavailable";
    }else{
      document.getElementById("button.convetime").className="";
    }
  }
  document.getElementById("button.convexista").innerHTML="Experience.<br/>Cost: "+Math.round(Math.pow(2,game.currency.etime+4))+" existances";
  document.getElementById("button.convetime").innerHTML="Thought the word.<br/>Cost: "+Math.round(game.currency.thought*2+4)+" experienced time,<br/>  "+Math.round(400*Math.pow(game.currency.thought,2))+" existivity";
}
function convexisti(){
  if (game.currency.existance>=Math.pow(2,game.currency.etime+4)){return;}
  if (Math.random()<game.currency.existability){
    game.currency.existance++;
    game.unlocked.existance=true;
    if (game.currency.existance>=16){showhide(document.getElementById("button.convexista"),true);}
  }
  game.currency.existivity=0;
}
function convexista(){
  if (game.currency.existance<Math.pow(2,game.currency.etime+4)||game.currency.etime>=game.currency.thought*2+4){return;}
  game.currency.etime++;
  game.currency.existivity=0;
  game.currency.existance=0;
  game.unlocked.etime=true;
  if (game.currency.etime>=4){showhide(document.getElementById("button.convetime"),true);}
}
function convetime(){
  if ((game.currency.etime<game.currency.thought*2+4)||(game.currency.existivity<400*Math.pow(game.currency.thought+1,2))){return;}
  game.currency.thought++;
  game.currency.etime=0;
  game.currency.existivity=0;
  game.currency.existance=0;
  game.unlocked.thought=true;
  var genwordinterval=setInterval(genword,1000/game.currency.thought);
}
function genword(){
  var word="";
  var characterset="abcdefghijklmnopqrstuvwxyz";
  var wordlength=Math.floor(Math.random()*5)+1
  for (var i=0;i<wordlength;i++){word+=characterset.charAt(Math.floor(Math.random()*characterset.length));}
  if (["more","to","do","less","you","have","to"].includes(word)){
    game.currency.word++;
    word="<mark>"+word+"</mark>";
  }
  document.getElementById("disp.genword").innerHTML=word;
  return word
}
loading=false;
