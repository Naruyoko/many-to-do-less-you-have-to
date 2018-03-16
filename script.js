var game={
  currency:{
    existivity:0,
    existability:(function (){return 2/(1+Math.exp(-game.currency.existivity))-1;}),
    existance:0,
    etime:0, //experienced time
    etimebought:0,
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
  },
  canbuy:{
    existance:(function (){return game.currency.existance<Math.pow(2,game.currency.etimebought+4);}),
    etime:(function (){return (game.currency.existance>=Math.pow(2,game.currency.etimebought+4))&&(Math.floor(game.currency.etime)<game.currency.thought*2+4);}),
    thought:(function (){return (Math.floor(game.currency.etime)>=game.currency.thought*2+4)&&(game.currency.existivity>=50*Math.pow(game.currency.thought+2,2))&&!((game.currency.thought>=(game.currency.energy*(game.currency.energy+1)/2+3)&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.5))*25+100)));}),
    energy:(function (){return (game.currency.thought>=Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.5))*25+100);})
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
  updatecurr();
  updatedisp();
}
var timeelapsed=0;
var lasttime=0;
var d=new Date();
function updateprod(){
  game.production.existivity=(Math.floor(game.currency.existance)+1)*0.01*Math.pow(1.2,Math.floor(game.currency.etime));
  game.production.existance=game.currency.word/100;
  game.production.etime=Math.max(Math.pow(Math.floor(game.currency.existance),0.05)-1.4,0)+Math.max(Math.pow(game.currency.existivity,0.001)-1.0075,0);
}
function updatecurr(){
  if (lasttime!==0){
    d=new Date();
    timeelapsed=(d.getTime()-lasttime)/1000;}
  lasttime=d.getTime();
  game.currency.existivity+=game.production.existivity*timeelapsed;
  game.currency.existance+=game.production.existance*timeelapsed;
  if (game.currency.existance>Math.pow(2,game.currency.etimebought+4)){game.currency.existance=Math.pow(2,game.currency.etimebought+4);}
  game.currency.etime+=game.production.etime*timeelapsed;
  if (game.currency.etime>Math.round(game.currency.thought*2+4)){game.currency.etime=Math.round(game.currency.thought*2+4);}
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
}
function updatedisp(){
  if (game.unlocked.existivity){document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+Math.round(game.currency.existivity*100)/100+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existability())/10+"%</span> change of existing.";}
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="You know <span class=\"large\">"+Math.floor(game.currency.existance)+"</span> existances. They produce <span class=\"large\">"+Math.round(game.production.existivity*100)/100+"</span> existivity each second.";}
  if (game.unlocked.etime){document.getElementById("disp.etime").innerHTML="Existances experienced as much as <span class=\"large\">"+Math.floor(game.currency.etime)+"</span> seconds. It boosts the production of existivity by <span class=\"large\">"+Math.round(Math.pow(1.2,Math.floor(game.currency.etime))*100-100)+"%</span>.";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="You have <span class=\"large\">"+game.currency.thought+"</span> thoughts and think "+game.currency.thought+" strings per second.";}
  if (game.unlocked.thought){document.getElementById("disp.word").innerHTML="You have thought of <span class=\"large\">"+game.currency.word+"</span> <span title=\"More to do, Less you have to.\">words in the title</span> and finds <span class=\"large\">"+Math.round(game.production.existance*100)/100+"</span> existances per second. Recently generated: ";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="There are <span class=\"large\">"+game.currency.energy+"</span> joules of energy in your system. Existances and existivity together experience <span \"large\">"+Math.round(game.production.etime*1000)*1000+"</span> seconds per second.";}
  if (!(document.getElementById("button.convexisti").className=="hidden")){
      if (game.canbuy.existance()){
      document.getElementById("button.convexisti").className="";
    }else{
      document.getElementById("button.convexisti").className="unavailable";
    }
  }
  if (!(document.getElementById("button.convexista").className=="hidden")){
    if (game.canbuy.etime()){
      document.getElementById("button.convexista").className="";
    }else{
      document.getElementById("button.convexista").className="unavailable";
    }
  }
  if (!(document.getElementById("button.convetime").className=="hidden")){
    if (game.canbuy.thought()){
      document.getElementById("button.convetime").className="";
    }else{
      document.getElementById("button.convetime").className="unavailable";
    }
  }
  if (!(document.getElementById("button.convthought").className=="hidden")){
    if (game.canbuy.energy()){
      document.getElementById("button.convthought").className="";
    }else{
      document.getElementById("button.convthought").className="unavailable";
    }
  }
  document.getElementById("button.convexista").innerHTML="Experience.<br/>Cost: "+Math.round(Math.pow(2,game.currency.etimebought+4))+" existances";
  document.getElementById("button.convetime").innerHTML="Thought for the words.<br/>Cost: "+Math.round(game.currency.thought*2+4)+" experienced time,<br/>  "+Math.round(50*Math.pow(game.currency.thought+2,2))+" existivity";
  document.getElementById("button.convthought").innerHTML="Be energetic!!<br/>Cost: "+Math.floor(game.currency.energy*(game.currency.energy+1)/2+3)+" thoughts,<br/>  "+Math.floor(Math.pow(game.currency.energy,1.5))*25+100+" words found";
}
function convexisti(){
  if (!game.canbuy.existance()){return;}
  if (Math.random()<game.currency.existability()){
    game.currency.existance++;
    game.unlocked.existance=true;
    updateprod();
    if (game.currency.existance>=16){showhide(document.getElementById("button.convexista"),true);}
  }
  game.currency.existivity=0;
}
function convexista(){
  if (!game.canbuy.etime()){return;}
  game.currency.etime++;
  game.currency.etimebought++;
  game.currency.existivity=0;
  game.currency.existance=0;
  game.unlocked.etime=true;
  updateprod();
  if (game.currency.etime>=4){showhide(document.getElementById("button.convetime"),true);}
}
function convetime(){
  if (!game.canbuy.thought()){return;}
  game.currency.thought++;
  game.currency.etime=0;
  game.currency.etimebought=0;
  game.currency.existivity=0;
  game.currency.existance=0;
  game.unlocked.thought=true;
  updateprod();
  var genwordinterval;
  clearInterval(genwordinterval);
  genwordinterval=setInterval(genword,1000/game.currency.thought);
  if (game.currency.thought>=3){showhide(document.getElementById("button.convthought"),true);}
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
function convthought(){
  if (!game.canbuy.energy()){return;}
  game.currency.energy++;
  game.currency.word=0;
  game.currency.thought=0;
  game.currency.etime=0;
  game.currency.etimebought=0;
  game.currency.existivity=0;
  game.currency.existance=0;
  game.unlocked.energy=true;
  updateprod();
}
loading=false;
