var game;
function initializevars(){
  game={
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
      existance:false,
      etime:false,
      thought:false,
      energy:false,
      convexista:false,
      convetime:false,
      convthought:false,
      autobuyshop:false
    },
    canbuy:{
      existance:(function (){return game.currency.existance<Math.pow(2,game.currency.etimebought+4);}),
      etime:(function (){return (game.currency.existance>=Math.pow(2,game.currency.etimebought+4))&&(Math.floor(game.currency.etime)<game.currency.thought*2+4);}),
      thought:(function (){return (Math.floor(game.currency.etime)>=game.currency.thought*2+4)&&(game.currency.existivity>=50*Math.pow(game.currency.thought+2,2))&&!((game.currency.thought>=(game.currency.energy*(game.currency.energy+1)/2+3)&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.5))*25+100)));}),
      energy:(function (){return (game.currency.thought>=Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.8))*5+15);}),
      autoconvexisti:(function (){return (game.currency.existance>=200)&&!game.autobuy.existivity;})
    },
    autobuy:{
      existivity:false,
      existivityon:(function (){return Number(document.getElementById("input.autoconvexisti").value);})
    }
  };
}
initializevars();
var cookieaccepted=false;
function acceptcookie(){
  cookieaccepted=true;
  document.getElementById("button.confirmcookie").className="hidden";
  document.getElementById("button.savecookie").className="";
  document.getElementById("button.deletecookie").className="";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} //code from https://www.w3schools.com/js/js_cookies.asp at 2018/03/18 11:39 EDT
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} //code from https://www.w3schools.com/js/js_cookies.asp at 2018/03/18 12:36 EDT
function savecookie(){
  if (!cookieaccepted){return;}
  setCookie("game.currency.existivity",game.currency.existivity,7);
  setCookie("game.currency.existance",game.currency.existance,7);
  setCookie("game.currency.etime",game.currency.etime,7);
  setCookie("game.currency.etimebought",game.currency.etimebought,7);
  setCookie("game.currency.thought",game.currency.thought,7);
  setCookie("game.currency.energy",game.currency.energy,7);
  setCookie("game.unlocked.existance",game.unlocked.existance,7);
  setCookie("game.unlocked.etime",game.unlocked.etime,7);
  setCookie("game.unlocked.thought",game.unlocked.thought,7);
  setCookie("game.unlocked.energy",game.unlocked.energy,7);
  setCookie("game.unlocked.convexita",game.unlocked.convexista,7);
  setCookie("game.unlocked.convetime",game.unlocked.convetime,7);
  setCookie("game.unlocked.convthought",game.unlocked.convthought,7);
  setCookie("game.unlocked.autobuyshop",game.unlocked.autobuyshop,7);
  setCookie("game.autobuy.existivity",game.autobuy.existivity,7);
  setCookie("lasttime",lasttime,7);
  setCookie("cookieaccepted",cookieaccepted,7);
}
function loadcookie(){
  if (!document.cookie){return;}
  game.currency.existivity=Number(getCookie("game.currency.existivity"));
  game.currency.existance=Number(getCookie("game.currency.existance"));
  game.currency.etime=Number(getCookie("game.currency.etime"));
  game.currency.etimebought=Number(getCookie("game.currency.etimebought"));
  game.currency.thought=Number(getCookie("game.currency.thought"));
  game.currency.word=Number(getCookie("game.currency.word"));
  game.currency.energy=Number(getCookie("game.currency.energy"));
  game.unlocked.existance=getCookie("game.unlocked.existance")=="true";
  game.unlocked.etime=getCookie("game.unlocked.etime")=="true";
  game.unlocked.thought=getCookie("game.unlocked.thought")=="true";
  game.unlocked.energy=getCookie("game.unlocked.energy")=="true";
  game.unlocked.convexista=getCookie("game.unlocked.convexista")=="true";
  game.unlocked.convetime=getCookie("game.unlocked.convetime")=="true";
  game.unlocked.convthought=getCookie("game.unlocked.convthought")=="true";
  game.unlocked.autobuyshop=getCookie("game.unlocked.autobuyshop")=="true";
  game.autobuy.existivity=getCookie("game.autobuy.existivity")=="true";
  lasttime=Number(getCookie("lasttime"));
  if (getCookie("cookieaccepted")){acceptcookie();}
}
function deletecookie(){
  if (!window.confirm("Do you REALLY want to reset? No going back!")){return;}
  initializevars();
  savecookie();
  setCookie("lasttime",0,7);
  window.location.reload(true);
}
function showhide(x,t){
  if (t){
      x.className="";
  }else{
      x.className="hidden";
  }
}
function passive(){
  updateauto();
  updateprod();
  updatecurr();
  updatedisp();
}
var timeelapsed=0;
var lasttime=0;
var d=new Date();
function updateauto(){
  if (game.autobuy.existivity&&(game.currency.existivity>=game.autobuy.existivityon())){
    convexisti();
  }
}
function updateprod(){
  game.production.existivity=(Math.floor(game.currency.existance)+1)*0.01*Math.pow(1.2,Math.floor(game.currency.etime));
  game.production.existance=game.currency.word/100;
  game.production.etime=game.production.energy*(Math.max(Math.pow(Math.floor(game.currency.existance),0.03)-1.2,0)+Math.max(Math.pow(game.currency.existivity,0.003)-1.016,0));
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
  document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+Math.round(game.currency.existivity*100)/100+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existability())/10+"%</span> change of existing.";
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="You know <span class=\"large\">"+Math.floor(game.currency.existance)+"</span> existances. They produce <span class=\"large\">"+Math.round(game.production.existivity*100)/100+"</span> existivity each second.";}
  if (game.unlocked.etime){document.getElementById("disp.etime").innerHTML="Existances experienced as much as <span class=\"large\">"+Math.floor(game.currency.etime)+"</span> seconds. It boosts the production of existivity by <span class=\"large\">"+Math.round(Math.pow(1.2,Math.floor(game.currency.etime))*100-100)+"%</span>.";}
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="You have <span class=\"large\">"+game.currency.thought+"</span> thoughts and think "+game.currency.thought+" strings per second.";}
  if (game.unlocked.thought){document.getElementById("disp.word").innerHTML="You have thought of <span class=\"large\">"+game.currency.word+"</span> <span title=\"More to do, Less you have to.\">words in the title</span> and finds <span class=\"large\">"+Math.round(game.production.existance*100)/100+"</span> existances per second. Recently generated: ";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="There are <span class=\"large\">"+game.currency.energy+"</span> joules of energy in your system. Existances and existivity together experience <span class=\"large\">"+Math.round(game.production.etime*1000)/1000+"</span> seconds per second.";}
  if (game.canbuy.existance()){
    document.getElementById("button.convexisti").className="";
  }else{
    document.getElementById("button.convexisti").className="unavailable";
  }
  if (document.getElementById("button.convexista").className=="hidden"){
    if (game.unlocked.convexista){document.getElementById("button.convexista").className="";}
  }else{
    if (game.canbuy.etime()){
      document.getElementById("button.convexista").className="";
    }else{
      document.getElementById("button.convexista").className="unavailable";
    }
  }
  if (document.getElementById("button.convetime").className=="hidden"){
    if (game.unlocked.convetime){document.getElementById("button.convetime").className="";}
  }else{
    if (game.canbuy.thought()){
      document.getElementById("button.convetime").className="";
    }else{
      document.getElementById("button.convetime").className="unavailable";
    }
  }
  if (document.getElementById("button.convthought").className=="hidden"){
    if (game.unlocked.convthought){document.getElementById("button.convthought").className="";}
  }else{
    if (game.canbuy.energy()){
      document.getElementById("button.convthought").className="";
    }else{
      document.getElementById("button.convthought").className="unavailable";
    }
  }
  if (game.canbuy.autoconvexisti()){
    document.getElementById("button.buyautoconvexisti").className="";
  }else{
    document.getElementById("button.buyautoconvexisti").className="unavailable";
  }
  if (game.unlocked.autobuyshop){document.getElementById("changescr").className="";}
  if (game.autobuy.existivity){document.getElementById("form.autoconvexisti").className="";}
  document.getElementById("button.convexista").innerHTML="Experience.<br/>Cost: "+Math.round(Math.pow(2,game.currency.etimebought+4))+" existances";
  document.getElementById("button.convetime").innerHTML="Thought for the words.<br/>Cost: "+Math.round(game.currency.thought*2+4)+" experienced time,<br/>  "+Math.round(50*Math.pow(game.currency.thought+2,2))+" existivity";
  document.getElementById("button.convthought").innerHTML="Be energetic!!<br/>Cost: "+Math.floor(game.currency.energy*(game.currency.energy+1)/2+3)+" thoughts,<br/>  "+(Math.floor(Math.pow(game.currency.energy,1.8))*5+15)+" words found";
}
function changescr_shop_general(){
  document.getElementById("scr.shop.general")="";
  document.getElementById("scr.shop.autoconv")="hidden";
}
function changescr_shop_autoconv(){
  document.getElementById("scr.shop.general")="hidden";
  document.getElementById("scr.shop.autoconv")="";
}
function convexisti(){
  if (!game.canbuy.existance()){return;}
  if (Math.random()<game.currency.existability()){
    game.currency.existance++;
    game.unlocked.existance=true;
    updateprod();
    if (game.currency.existance>=16){game.unlocked.convexista=true;}
    if (game.currency.existance>=200){game.unlocked.autobuyshop=true;}
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
  if (game.currency.etime>=4){game.unlocked.convetime=true;}
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
  clearInterval(genwordinterval);
  genwordinterval=setInterval(genword,1000/game.currency.thought);
  if (game.currency.thought>=3){game.unlocked.convthought=true;}
}
function genword(){
  var word="";
  var characterset="abcdefghijklmnopqrstuvwxyz";
  var wordlength=Math.floor(Math.random()*5)+1;
  for (var i=0;i<wordlength;i++){word+=characterset.charAt(Math.floor(Math.random()*characterset.length));}
  if (["more","to","do","less","you","have","to"].includes(word)){
    game.currency.word++;
    word="<mark>"+word+"</mark>";
  }
  document.getElementById("disp.genword").innerHTML=word;
  return word;
}
var genwordinterval;
function convthought(){
  if (!game.canbuy.energy()){return;}
  game.currency.energy++;
  clearInterval(genwordinterval);
  game.currency.word=0;
  game.currency.thought=0;
  game.currency.etime=0;
  game.currency.etimebought=0;
  game.currency.existivity=0;
  game.currency.existance=0;
  game.unlocked.energy=true;
  updateprod();
}
function buyautoconvexisti(){
  if (!game.canbuy.autoconvexisti()){return;}
  game.currency.existance-=200;
  game.autobuy.existiviy=false;
}
loadcookie();
loading=false;
