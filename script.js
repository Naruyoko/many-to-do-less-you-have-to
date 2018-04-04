var game;
function initializevars(){
  game={
    currency:{
      existivity:0,
      existability:(function (){
        if (!game.upgrade.convexisti_1.ison()){
          return (2/(1+Math.exp(-game.currency.existivity))-1)*(1-game.currency.existabilityboost)+game.currency.existabilityboost;
        }else{
          return Math.pow(Math.log(Math.sqrt(game.currency.existivity)),1.35)/(10+Math.exp(game.currency.convexistiearn()/50));
        }
      }),
      convexistiearn:(function (){
        if (game.upgrade.convexisti_1.ison()){
          return Math.floor((Math.pow(game.currency.existivity,1/3)/1.5+0.8)*game.currency.convexistiearnmult());
        }else{
          return Math.floor(game.currency.convexistiearnmult());
        }
      }),
      convexistiearnmult:(function (){
        var x=1;
        if (game.upgrade.convexisti_2.ison()){x*=Math.log(game.currency.existivity)+1;}
      }),
      existabilityboost:0,
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
      changescr:(function (){return game.unlocked.upgrade||game.unlocked.autobuyshop;}),
      upgrade:false,
      autobuyshop:false,
      buyautoconvexista:false
    },
    canbuy:{
      existance:(function (){return game.currency.existance<Math.pow(2,game.currency.etimebought+4);}),
      etime:(function (){return (game.currency.existance>=Math.pow(2,game.currency.etimebought+4))&&(Math.floor(game.currency.etime)<game.currency.thought*2+4);}),
      thought:(function (){return (Math.floor(game.currency.etime)>=game.currency.thought*2+4)&&(game.currency.existivity>=50*Math.pow(game.currency.thought+2,2))&&!((game.currency.thought>=(game.currency.energy*(game.currency.energy+1)/2+3)&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.5))*25+100)));}),
      energy:(function (){return (game.currency.thought>=Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.8))*5+15);}),
      upgrade_convexisti_1:(function (){return (game.currency.existivity>=200000)&&!game.upgrade.convexisti_1.bought;}),
      upgrade_convexisti_2:(function (){return (game.currency.existance>=150)&&!game.upgrade.convexisti_2.bought;}),
      autoconvexisti:(function (){return (game.currency.existance>=200)&&!game.autobuy.existivity;}),
      autoconvexista:(function (){return (game.currency.thought>=6)&&(game.currency.word>=60)&&(game.currency.etime>=10)&&!game.autobuy.existance.bought;})
    },
    upgrade:{
      convexisti_1:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.convexisti_1.enable").checked;}),
        ison:(function (){return game.upgrade.convexisti_1.bought&&game.upgrade.convexisti_1.enable();})
      },
      convexisti_2:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.convexisti_2.enable").checked;}),
        ison:(function (){return game.upgrade.convexisti_2.bought&&game.upgrade.convexisti_2.enable();})
      }
    },
    autobuy:{
      existivity:false,
      existivityon:(function (){return Number(document.getElementById("input.autoconvexisti").value);}),
      existance:{
        bought:false,
        enable:(function (){return document.getElementById("autobuy.existance.enable").checked;}),
        ison:(function (){return game.autobuy.existance.bought&&game.autobuy.existance.enable();})
      }
    }
  };
}
initializevars();
function notation(i){
  if (i<1000){return String(i);}
  if ((i>=1000)&&(i<1e+6)){
    var l;
    var r=Math.floor(i%1000);
    l=String(r);
    if (r<10){l="00"+l;}
    if ((r>=10)&&(r<100)){l="0"+l;}
    return Math.floor(i/1000)+","+l;}
  if (i>=1e+15){
    var e=3*Math.floor(Math.log10(i)/3);
    return Math.floor(i/Math.pow(10,e)*1000)/1000+"E+"+e;
  }
  var numbernames=["million","billion","trillion"]
  var e=3*Math.floor(Math.log10(i)/3);
  return Math.floor(i/Math.pow(10,e)*1000)/1000+" "+numbernames[Math.round(e/3)-2];
}
var cookieaccepted=false;
function acceptcookie(){
  cookieaccepted=true;
  document.getElementById("button.confirmcookie").className="hidden";
  document.getElementById("div.cookie").className="";
  saved=new Date();
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
  setCookie("game.currency.word",game.currency.word,7);
  setCookie("game.currency.energy",game.currency.energy,7);
  setCookie("game.unlocked.existance",game.unlocked.existance,7);
  setCookie("game.unlocked.etime",game.unlocked.etime,7);
  setCookie("game.unlocked.thought",game.unlocked.thought,7);
  setCookie("game.unlocked.energy",game.unlocked.energy,7);
  setCookie("game.unlocked.convexista",game.unlocked.convexista,7);
  setCookie("game.unlocked.convetime",game.unlocked.convetime,7);
  setCookie("game.unlocked.convthought",game.unlocked.convthought,7);
  setCookie("game.unlocked.upgrade",game.unlocked.upgrade,7);
  setCookie("game.unlocked.autobuyshop",game.unlocked.autobuyshop,7);
  setCookie("game.unlocked.buyautoconvexista",game.unlocked.buyautoconvexista,7);
  setCookie("game.upgrade.convexisti_1.bought",game.upgrade.convexisti_1.bought,7);
  setCookie("game.upgrade.convexisti_1.enable",game.upgrade.convexisti_1.enable(),7);
  setCookie("game.autobuy.existivity",game.autobuy.existivity,7);
  setCookie("game.autobuy.existivityon",game.autobuy.existivityon(),7);
  setCookie("game.autobuy.existance.bought",game.autobuy.existance.bought,7);
  setCookie("game.autobuy.existance.enable",game.autobuy.existance.enable(),7);
  setCookie("lasttime",lasttime,7);
  setCookie("cookieaccepted",cookieaccepted,7);
  saved=new Date();
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
  game.unlocked.upgrade=getCookie("game.unlocked.upgrade")=="true";
  game.unlocked.autobuyshop=getCookie("game.unlocked.autobuyshop")=="true";
  game.unlocked.buyautoconvexista=getCookie("game.unlocked.buyautoconvexista")=="true";
  game.upgrade.convexisti_1.bought=getCookie("game.upgrade.convexisti_1.bought")=="true";
  document.getElementById("upgrade.convexisti_1.enable").checked=getCookie("game.upgrade.convexisti_1.enable")=="true";
  game.autobuy.existivity=getCookie("game.autobuy.existivity")=="true";
  document.getElementById("input.autoconvexisti").value=getCookie("game.autobuy.existivityon");
  game.autobuy.existance.bought=getCookie("game.autobuy.existance.bought")=="true";
  document.getElementById("autobuy.existance.enable").checked=getCookie("game.autobuy.existance.enable");
  lasttime=Number(getCookie("lasttime"));
  if (getCookie("cookieaccepted")){
    acceptcookie();
    saved=new Date();
  }
  setgenwordinterval();
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
  updateautosave();
  updatedisp();
  updatebutton();
}
var timeelapsed=0;
var lasttime=0;
var d=new Date();
function updateauto(){
  if (game.autobuy.existivity&&(game.currency.existivity>=game.autobuy.existivityon())&&!isNaN(game.autobuy.existivityon())){
    convexisti();
  }
  if (game.autobuy.existance.ison()){
    convexista();
  }
}
function updateprod(){
  game.production.existivity=(Math.floor(game.currency.existance)+1)*0.01*Math.pow(1.2,Math.floor(game.currency.etime));
  game.production.existance=game.currency.word/100;
  game.production.etime=(game.currency.energy*(Math.max(Math.pow(Math.floor(game.currency.existance),0.03)-1.2,0)+Math.max(Math.pow(game.currency.existivity,0.003)-1.016,0)))/40;
}
function updatecurr(){
  if (lasttime!==0){
    d=new Date();
    timeelapsed=(d.getTime()-lasttime)/1000;}
  lasttime=d.getTime();
  game.currency.existivity+=game.production.existivity*timeelapsed;
  if (game.currency.existivity>=15000){game.unlocked.upgrade=true;}
  game.currency.existance+=game.production.existance*timeelapsed;
  if (game.currency.existance>Math.pow(2,game.currency.etimebought+4)){game.currency.existance=Math.pow(2,game.currency.etimebought+4);}
  game.currency.etime+=game.production.etime*timeelapsed;
  if (game.currency.etime>Math.round(game.currency.thought*2+4)){game.currency.etime=Math.round(game.currency.thought*2+4);}
  if ((timeelapsed>1/game.currency.thought)&&(game.currency.thought!=0)){
    var x=timeelapsed*game.currency.thought-1;
    var r=Math.random();
    var p_0=(2/Math.pow(26,2)+1/Math.pow(26,3)+3/Math.pow(26,4))/5;
    var p=exp.conv(0);
    var i=0;
    for (i=0;(i<=Math.ceil(x))&&(r>Math.pow(10,p[0]));i++){
      p=exp.add(p,exp.mult(exp.mult(exp.pow(exp.conv(1-p_0),exp.conv(x-i)),exp.pow(exp.conv(p_0),exp.conv(i))),exp.div(exp.fact(exp.conv(x)),exp.mult(exp.fact(exp.conv(i)),exp.fact(exp.conv(x-i))))));
    }
    game.currency.word+=i-1;
  }
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
}
var saved=false;
function updateautosave(){
  if (!saved){return;}
  if (d.getTime()-saved.getTime()>=60000){savecookie();}
}
function updatedisp(){
  if (game.upgrade.convexisti_1.ison()){
    document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+notation(Math.round(game.currency.existivity*100)/100)+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existability())/10+"%</span> chance of <span class=\"large\">"+notation(game.currency.convexistiearn())+"</span> existances existing.";
  }else{
    var m="";
    if (game.currency.existabilityboost){m="<span style=\"color:#009933\">(+"+Math.round(game.currency.existabilityboost*1000)/10+"%)</span>";}
    document.getElementById("disp.existivity").innerHTML="Your existivity is <span class=\"large\">"+notation(Math.round(game.currency.existivity*100)/100)+"</span> and has <span class=\"large\">"+Math.round(1000*game.currency.existability())/10+"%</span>"+m+" chance of existing.";
  }
  if (game.unlocked.existance){document.getElementById("disp.existance").innerHTML="You know <span class=\"large\">"+notation(Math.floor(game.currency.existance))+"</span> existances. They produce <span class=\"large\">"+notation(Math.round(game.production.existivity*100)/100)+"</span> existivity each second.";}
  if (game.unlocked.etime){
    var m;
    if (Math.round(Math.pow(1.2,Math.floor(game.currency.etime))*100-100<1000)){
      m="<span class=\"large\">+"+notation(Math.round(Math.pow(1.2,Math.floor(game.currency.etime))*100-100))+"%</span>";
    }else{
      m="<span class=\"large\">×"+notation(Math.round(Math.pow(1.2,Math.floor(game.currency.etime))*100)/100)+"</span>";
    }
    document.getElementById("disp.etime").innerHTML="Existances experienced as much as <span class=\"large\">"+notation(Math.floor(game.currency.etime))+"</span> seconds. It boosts the production of existivity by "+m+".";
  }
  if (game.unlocked.thought){document.getElementById("disp.thought").innerHTML="You have <span class=\"large\">"+notation(game.currency.thought)+"</span> thoughts and think "+notation(game.currency.thought)+" strings per second.";}
  if (game.unlocked.thought){document.getElementById("disp.word").innerHTML="You have thought of <span class=\"large\">"+notation(game.currency.word)+"</span> <span title=\"More to do, Less you have to.\">words in the title</span> and finds <span class=\"large\">"+notation(Math.round(game.production.existance*100)/100)+"</span> existances per second. Recently generated: ";}
  if (game.unlocked.energy){document.getElementById("disp.energy").innerHTML="There are <span class=\"large\">"+notation(game.currency.energy)+"</span> joules of energy in your system. Existances and existivity together experience <span class=\"large\">"+notation(Math.round(game.production.etime*1000)/1000)+"</span> seconds per second.";}
  if (saved){document.getElementById("disp.saved").innerHTML="Saved "+Math.floor((d.getTime()-saved.getTime())/10)/100+" seconds ago";}
}
function updatebutton(){
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
  if (document.getElementById("button.convthought").className=="hidden"){
    if (game.unlocked.buyautoconvexista){document.getElementById("button.buyautoconvexista").className="";}
  }else{
    if (game.canbuy.autoconvexista()){
      document.getElementById("button.buyautoconvexista").className="";
    }else{
      document.getElementById("button.buyautoconvexista").className="unavailable";
    }
  }
  if ((document.getElementById("div.autobuy.existance.enable").className=="hidden")&&game.autobuy.existance.bought){document.getElementById("div.autobuy.existance.enable").className="";}
  if (game.canbuy.upgrade_convexisti_1()){
    document.getElementById("button.upgrade.convexisti_1").className="";
  }else{
    document.getElementById("button.upgrade.convexisti_1").className="unavailable";
  }
  if (game.unlocked.changescr()){document.getElementById("changescr").className="";}
  if (game.unlocked.upgrade){document.getElementById("button.changescr_shop_upgrade").className="changescr";}
  if (game.unlocked.autobuyshop){document.getElementById("button.changescr_shop_autoconv").className="changescr";}
  if (game.autobuy.existivity){document.getElementById("form.autoconvexisti").className="";}
  document.getElementById("button.convexista").innerHTML="Experience.<br/>Cost: "+Math.round(Math.pow(2,game.currency.etimebought+4))+" existances";
  document.getElementById("button.convetime").innerHTML="Thought for the words.<br/>Cost: "+Math.round(game.currency.thought*2+4)+" experienced time,<br/>  "+Math.round(50*Math.pow(game.currency.thought+2,2))+" existivity";
  document.getElementById("button.convthought").innerHTML="Be energetic!!<br/>Cost: "+Math.floor(game.currency.energy*(game.currency.energy+1)/2+3)+" thoughts,<br/>  "+(Math.floor(Math.pow(game.currency.energy,1.8))*5+15)+" words thought";
}
function changescr_shop_general(){
  document.getElementById("scr.shop.general").className="";
  document.getElementById("scr.shop.upgrade").className="hidden";
  document.getElementById("scr.shop.autoconv").className="hidden";
}
function changescr_shop_upgrade(){
  document.getElementById("scr.shop.general").className="hidden";
  document.getElementById("scr.shop.upgrade").className="";
  document.getElementById("scr.shop.autoconv").className="hidden";
}
function changescr_shop_autoconv(){
  document.getElementById("scr.shop.general").className="hidden";
  document.getElementById("scr.shop.upgrade").className="hidden";
  document.getElementById("scr.shop.autoconv").className="";
}
function convexisti(){
  if (!game.canbuy.existance()){return;}
  if (game.upgrade.convexisti_1.ison()){
    if (Math.random()<game.currency.existability()){
      game.currency.existance+=game.currency.convexistiearn();
      updateprod();
      if (game.currency.existance>=16){game.unlocked.convexista=true;}
      if (game.currency.existance>=30){game.unlocked.autobuyshop=true;}
    }
    game.currency.existivity=0;
  }else{
    if (Math.random()<game.currency.existability()){
      game.currency.existance++;
      game.unlocked.existance=true;
      updateprod();
      if (game.currency.existance>=16){game.unlocked.convexista=true;}
      if (game.currency.existance>=30){game.unlocked.autobuyshop=true;}
    }else{
      game.currency.existabilityboost+=game.currency.existability()/2.5;
    }
    game.currency.existabilityboost/=2;
    if (game.currency.existivity>=10){
      game.currency.existivity=Math.sqrt(game.currency.existivity);
    }else{
      game.currency.existivity=0;
    }
  }
  if (game.currency.existabilityboost<0.01){game.currency.existabilityboost=0;}
}
function convexista(){
  if (!game.canbuy.etime()){return;}
  game.currency.etime++;
  game.currency.etimebought++;
  game.currency.existivity=0;
  game.currency.existabilityboost=0;
  game.currency.existance=game.currency.etimebought;
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
  game.currency.existabilityboost=0;
  game.currency.existance=0;
  game.unlocked.thought=true;
  updateprod();
  setgenwordinterval();
  if (game.currency.thought>=3){game.unlocked.convthought=true;}
  if (game.currency.thought>=4){game.unlocked.buyautoconvexista=true;}
}
function setgenwordinterval(){
  clearInterval(genwordinterval);
  if (game.currency.thought===0){return;}
  genwordinterval=setInterval(genword,Math.max(1000/game.currency.thought,100));
}
function genword(){
  var word="";
  var characterset="abcdefghijklmnopqrstuvwxyz";
  var wordlength=Math.floor(Math.random()*5)+1;
  for (var i=0;i<wordlength;i++){word+=characterset.charAt(Math.floor(Math.random()*characterset.length));}
  if (["many","to","do","less","you","have","to"].includes(word)){
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
  game.currency.existabilityboost=0;
  game.currency.existance=0;
  game.unlocked.energy=true;
  updateprod();
}
function buy_upgrade_convexisti_1(){
  if (!game.canbuy.upgrade_convexisti_1()){return;}
  game.currency.existivity-=200000;
  game.upgrade.convexisti_1.bought=true;
}
function buy_upgrade_convexisti_2(){
  if (!game.canbuy.upgrade_convexisti_2()){return;}
  game.currency.existance-=150;
  game.upgrade.convexisti_2.bought=true;
}
function buyautoconvexisti(){
  if (!game.canbuy.autoconvexisti()){return;}
  game.currency.existance-=200;
  game.autobuy.existivity=true;
}
function buyautoconvexista(){
  if (!game.canbuy.autoconvexista()){return;}
  game.currency.thought-=6;
  game.currency.word-=60;
  game.currency.etime-=10;
  game.currency.etimebought=Math.floor(Math.min(game.currency.etimebought,game.currency.etime));
  setgenwordinterval();
  game.autobuy.existance.bought=true;
}
function changelogtoggle(t){
  showhide(document.getElementById("changelog"),t);
}
loadcookie();
var loading=false;
