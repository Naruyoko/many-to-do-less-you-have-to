var game;
function initializevars(){
  game={
    currency:{
      existivity:0,
      existability:(function (){
        var r;
        if (!game.upgrade.convexisti_1.ison()){
          r=(2/(1+Math.exp(-game.currency.existivity))-1)*(1-game.currency.existabilityboost)+game.currency.existabilityboost;
        }else{
          r=Math.pow(Math.log(Math.sqrt(game.currency.existivity+1)),1.35)/(10+Math.exp(game.currency.convexistiearn.upgrade_convexisti_1()/50));
        }
        if (game.upgrade.existability_1){
          r=Math.cbrt(r);
        }
        return r;
      }),
      convexistiearn:{
        total:(function (){
          var x=1;
          if (game.upgrade.convexisti_1.ison()){x*=game.currency.convexistiearn.upgrade_convexisti_1();}
          if (game.upgrade.convexisti_2.ison()){x*=game.currency.convexistiearn.upgrade_convexisti_2();}
          return Math.floor(x);
        }),
        upgrade_convexisti_1:(function (){return Math.max(Math.cbrt(game.currency.existivity)/1.5+0.8,1);}),
        upgrade_convexisti_2:(function (){return Math.max(Math.log(game.currency.existance)+1,1);})
      },
      existabilityboost:0,
      existance:0,
      etime:0, //experienced time
      etimebought:0,
      thought:0,
      word:0,
      energy:0,
      explosion:0
    },
    production:{
      existivity:0.01,
      existance:0,
      existanceboost:{
        total:(function (){
          var r=game.production.existanceboost.etime();
          if (game.upgrade.existance_1){r*=5;}
          if (game.achievement.done[31]){r*=game.production.existanceboost.achievement_31();}
          if (game.achievement.done[33]){r*=game.production.existanceboost.achievement_33();}
          return r;
        }),
        etime:(function (){
          var m=1;
          if (game.upgrade.etime_1){
            m=1.44;
          }else{
            m=1.2;
          }
          if (game.achievement.done[33]){m*=1+0.01*game.achievement.completed();}
          return Math.pow(m,Math.floor(game.currency.etime));
        }),
        achievement_31:(function (){return Math.max(Math.pow(1.000001,Math.floor(game.currency.existance))/(Math.log(Math.pow(Math.floor(game.currency.existance)+1,1/1000)+1)+0.3),1);}),
        achievement_33:(function (){return 1+0.01*game.achievement.completed();})
      },
      etime:0,
      thought:0,
      energy:0
    },
    unlocked:{
      existance:false,
      etime:false,
      thought:false,
      energy:false,
      explosion:false,
      convexista:false,
      convetime:false,
      convthought:false,
      convenergy:false,
      changescr:(function (){return game.unlocked.upgrade.shop()||game.unlocked.autobuyshop||game.achievement.done[4];}),
      upgrade:{
        shop:(function (){return game.unlocked.upgrade.convexisti_1||game.unlocked.upgrade.convexisti_2||game.unlocked.upgrade.existability_1||game.unlocked.upgrade.existance_1;}),
        convexisti_1:false,
        convexisti_2:false,
        existability_1:false,
        existance_1:false,
        etime_1:false
      },
      autobuyshop:false,
      buyautoconvexista:false
    },
    canbuy:{
      existance:(function (){return game.currency.existance<Math.pow(2,game.currency.etimebought+4);}),
      etime:(function (){return (game.currency.existance>=Math.pow(2,game.currency.etimebought+4))&&(Math.floor(game.currency.etime)<game.currency.thought*2+4);}),
      thought:(function (){return (Math.floor(game.currency.etime)>=game.currency.thought*2+4)&&(game.currency.existivity>=50*Math.pow(game.currency.thought+2,2))&&!((game.currency.thought>=(game.currency.energy*(game.currency.energy+1)/2+3)&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.5))*25+100)));}),
      energy:(function (){return (game.currency.thought>=Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.8))*5+15);}),
      explosion:(function (){return (game.currency.energy>=5)&&(game.currency.existivity>=1e+9);}),
      upgrade_convexisti_1:(function (){return (game.currency.existivity>=200000)&&!game.upgrade.convexisti_1.bought;}),
      upgrade_convexisti_2:(function (){return (game.currency.existance>=150)&&!game.upgrade.convexisti_2.bought;}),
      upgrade_existability_1:(function (){return (game.currency.existance>=4000)&&!game.upgrade.existability_1;}),
      upgrade_existance_1:(function (){return (game.currency.energy>=1)&&!game.upgrade.existance_1;}),
      upgrade_etime_1:(function (){return (game.currency.explosion>=1)&&!game.upgrade.etime_1;}),
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
      },
      existability_1:false,
      existance_1:false,
      etime_1:false
    },
    autobuy:{
      existivity:false,
      existivityon:(function (){return Number(document.getElementById("input.autoconvexisti").value);}),
      existance:{
        bought:false,
        enable:(function (){return document.getElementById("autobuy.existance.enable").checked;}),
        ison:(function (){return game.autobuy.existance.bought&&game.autobuy.existance.enable();})
      }
    },
    achievement:{
      arrangement:[[0,1,3,10,11,28,8,25,29,33],[2,4,5,12,13,16,17,19],[23,27,6,7,9,14,26,20,30],[24,22,18,21,-1,15,-1,31],[-1,-1,-1,-1,-1,32]],
      condition:["true","game.currency.existance>=1","undefined","game.currency.etime>=8","game.currency.etime>=1","Math.pow(1.2,game.currency.etime)>=3","game.currency.thought>=1","game.currency.word>=1","game.currency.existability()>0.9999999","(game.currency.thought>=4)&&(game.currency.word>=120)","undefined","undefined","undefined","undefined","game.currency.energy>=1","game.currency.energy>=4","game.currency.existance>=1000","game.currency.existance>=100000","Math.pow(1.2,game.currency.etime)>=100","game.currency.existance>=1e+7","game.currency.existivity>=1000","game.currency.existivity>=1e+7","game.currency.thought>=6","undefined","undefined","game.currency.convexistiearn.total()>=100","game.autobuy.existivity","undefined","game.status.timeplayed>=20*60","undefined","game.currency.existabilityboost>=0.25","Math.floor(game.currency.existance)==123456","game.currency.explosion>=1","function temp(){var it=true;for(var i=0;i<9;i++){if (!game.achievement.done[game.achievement.arrangement[0][i]]){it=false;break;}}return it;}temp();"],
      name:["Big Bang?,Open game.","There IS Something Rather Than Nothing,Find an existance.","Bad Roll,Fail to find an existance.","Crowding,Find 8 existances.","Time\u2122,Let them experience.","Good experience,Have +200% boost by experiences.","Non-mechanic Integration,Have a thought.\nReward: Unlock Achievemnts","0.6\u2030,Get a word.","Almost Gurantee,Have probability exceed 99.9999%.","Yes Brainer,Have 4 thoughts and 120 words.","Quantum Fluctuation I,Successfully find existance with less than 5% chance.","Quantum Fluctuation II,Successfully find existance with less than 0.5% chance.","Quantum Fluctuation -I,Fail to find existance with more than 98% chance.","Quantum Fluctuation -II,Fail to find existance with more than 99.5% chance.","W=F·d·cos\u03b8,Have some energy in your system.","Work!,Have 4 joules of energy.","Swarn,A group of 1,000 existances.","Stream,A group of 100,000 existances.","Overpowered,Get ×100 boost by experienced time.","Okay$ You had Enough.,Have 10 million existances.","You don't need this much.,Reach 1,000 existivity.","Why Would You Need That?!,Reach 10 million existivity.","Confused,Have 6 thoughts.","Quantum Fluctuation III,Successfully find existance with less than 0.01% chance.","Quantum Fluctuation -III,Fail to find existance with more than 99.999% chance.","Gimme More!,Let 100 experiences available in a click.","You have a Coop,Have an autobuyer.","Don't you dare sleep,Be offline for over 6 hours in a row.","You Are In This,Play for 20 minutes","Comeback,Leave game for a week.","Was this your intention?,Have boost to probability of existances existing exceed 25%.","Nice Work.,Get EXACTLY 123456 existances. No more or no less.\nReward: Your existances are slightly stronger for every existance you have.","Boom, I guess,Explosion","Line up,Complete the 1st row of achievements.\nReward:Each achievement completed give +1% boost to energy,\n  experience and existances."],
      done:[],
      completed:(function (){
        var a=0;
        for (var i=0;i<game.achievement.done.length;i++){
          if (game.achievement.done[i]){a++;}
        }
        return a;
      })
    },
    status:{
      timeplayed:0,
      existivity:0,
      existance:0,
      etime:0,
      thought:0,
      word:0,
      energy:0,
      explosion:0
    },
    option:{
      disableshake:(function (){return document.getElementById("checkbox.disableshake").checked;})
    },
    datainfo:{
      version:"α 0.0.4 patch 1",
      release:201804301 //YYYYMMDDX
    }
  };
}
initializevars();
function notation(i){
  if (isNaN(i)){return "NaN";}
  if (!isFinite(i)){return "Infinity";}
  if (i<1000){return String(i);}
  if ((i>=1000)&&(i<1e+6)){
    var l;
    var r=Math.floor(i%1000);
    l=String(r);
    if (r<10){l="00"+l;}
    if ((r>=10)&&(r<100)){l="0"+l;}
    return Math.floor(i/1000)+","+l;
  }
  var numbernames=["thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion"];
  var namefragments=[["","un","duo","tre","quattuor","quinqua","se","septe","outo","nove"],["","deci","viginti","triginta","quadraginta","quinquaginta","sexaginta","septuaginta","octoginta","nonaginta"],["","centi","ducenti","trecenti","quadringenti","quingenti","sesgenti","septingenti","octingenti","nongenti"],["","milli","micri","nani","pici","femti","atti","zepti","yocti"]];
  var e=3*Math.floor(Math.log10(i)/3);
  var l=Math.floor(e/3)-1;
  if (l<=19){
    return Math.floor(i/Math.pow(10,e)*1000)/1000+" "+numbernames[l];
  }else{
    var r="";
    var s;
    var mu;
    for (var g=Math.floor(Math.log10(l)/3);g>=0;g--){
      var mu=Math.floor(l/Math.pow(1000,g))%1000;
      s="";
      var d=[mu%10,Math.floor(mu%100/10),Math.floor(mu/100)];
      s=namefragments[0][d[0]];
      if ([3,6].includes(d[0])&&(((d[1]!=0)&&[2,3,4,5].includes(d[1]))||((d[1]==0)&&[3,4].includes(d[2]==3)))){
        s+="s";
      }
      if ((d[0]==6)&&(((d[1]!=0)&&(d[1]==8))||((d[1]==0)&&(d[2]==8)))){
        s+="x";
      }
      if ([7,9].includes(d[0])&&(((d[1]!=0)&&[1,3,4,5,6,7].includes(d[1]))||((d[1]==0)&&[2,3,4,5,6,7].includes(d[2])))){
        s+="n";
      }
      if ([7,9].includes(d[0])&&(((d[1]!=0)&&((d[1]==2)||(d[1]==8)))||((d[1]==0)&&(d[2]==8)))){
        s+="m";
      }
      s+=namefragments[1][d[1]]+namefragments[2][d[2]]+namefragments[3][g];
      r+=s;
    }
    var w=r.charAt(r.length-1);
    if ((w=="a")||(w=="i")){
      r=r.substr(0,r.length-1);
    }
    r+="illion";
    return Math.floor(i/Math.pow(10,e)*1000)/1000+" "+r;
  }
}
var cookieaccepted=false;
function acceptcookie(){
  cookieaccepted=true;
  document.getElementById("button.confirmcookie").className="hidden";
  document.getElementById("div.cookie").className="";
  saved=new Date();
}
function setCookie(cname, cvalue, exdays) { //delete in α 0.0.5 update
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} //code from https://www.w3schools.com/js/js_cookies.asp at 2018/03/18 11:39 EDT
function getCookie(cname) {//delete in α 0.0.5 update
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
function savecookie(){//change name
  if (!cookieaccepted){return;}
  setCookie("game.currency.existivity",game.currency.existivity,7);
  setCookie("game.currency.existance",game.currency.existance,7);
  setCookie("game.currency.etime",game.currency.etime,7);
  setCookie("game.currency.etimebought",game.currency.etimebought,7);
  setCookie("game.currency.thought",game.currency.thought,7);
  setCookie("game.currency.word",game.currency.word,7);
  setCookie("game.currency.energy",game.currency.energy,7);
  setCookie("game.currency.explosion",game.currency.explosion,7);
  setCookie("game.unlocked.existance",game.unlocked.existance,7);
  setCookie("game.unlocked.etime",game.unlocked.etime,7);
  setCookie("game.unlocked.thought",game.unlocked.thought,7);
  setCookie("game.unlocked.energy",game.unlocked.energy,7);
  setCookie("game.unlocked.explosion",game.unlocked.explosion,7);
  setCookie("game.unlocked.convexista",game.unlocked.convexista,7);
  setCookie("game.unlocked.convetime",game.unlocked.convetime,7);
  setCookie("game.unlocked.convthought",game.unlocked.convthought,7);
  setCookie("game.unlocked.convenergy",game.unlocked.convenergy,7);
  setCookie("game.unlocked.upgrade.convexisti_1",game.unlocked.upgrade.convexisti_1,7);
  setCookie("game.unlocked.upgrade.convexisti_2",game.unlocked.upgrade.convexisti_2,7);
  setCookie("game.unlocked.upgrade.existance_1",game.unlocked.upgrade.existance_1,7);
  setCookie("game.unlocked.autobuyshop",game.unlocked.autobuyshop,7);
  setCookie("game.unlocked.buyautoconvexista",game.unlocked.buyautoconvexista,7);
  setCookie("game.upgrade.convexisti_1.bought",game.upgrade.convexisti_1.bought,7);
  setCookie("game.upgrade.convexisti_1.enable",game.upgrade.convexisti_1.enable(),7);
  setCookie("game.upgrade.convexisti_2.bought",game.upgrade.convexisti_2.bought,7);
  setCookie("game.upgrade.convexisti_2.enable",game.upgrade.convexisti_2.enable(),7);
  setCookie("game.upgrade.existability_1",game.upgrade.existability_1,7);
  setCookie("game.upgrade.existance_1",game.upgrade.existance_1,7);
  setCookie("game.upgrade.etime_1",game.upgrade.etime_1,7);
  setCookie("game.autobuy.existivity",game.autobuy.existivity,7);
  setCookie("game.autobuy.existivityon",game.autobuy.existivityon(),7);
  setCookie("game.autobuy.existance.bought",game.autobuy.existance.bought,7);
  setCookie("game.autobuy.existance.enable",game.autobuy.existance.enable(),7);
  setCookie("game.achievement.done",JSON.stringify(game.achievement.done),7);
  setCookie("game.status.timeplayed",game.status.timeplayed,7);
  setCookie("game.status.existivity",game.status.existivity,7);
  setCookie("game.status.existance",game.status.existance,7);
  setCookie("game.status.etime",game.status.etime,7);
  setCookie("game.status.thought",game.status.thought,7);
  setCookie("game.status.word",game.status.word,7);
  setCookie("game.status.energy",game.status.energy,7);
  setCookie("game.status.explosion",game.status.explosion,7);
  setCookie("lasttime",lasttime,7);
  setCookie("cookieaccepted",cookieaccepted,7);
  setCookie("game.datainfo.version",game.datainfo.version,7);
  setCookie("game.datainfo.release",game.datainfo.release,7);
  //save={
  //  game:game,
  //  version:version,
  //  release:release,
  //  lasttime:lasttime,
  //}
  //localStorage.setItem("save",JSON.stringify(game));
  //replace with above in α 0.0.5 update
  saved=new Date();
}
function loadcookie(){//changename
  if (!document.cookie){return;}
  //replace with !localStorage.getItem("save") in α 0.0.5 update
  //var save=JSON.parse(localStorage.getItem("save"));
  //if (typeof save.[varname]!=="undefined"){game.[varname]=save.[varname]};
  game.currency.existivity=Number(getCookie("game.currency.existivity"));
  game.currency.existance=Number(getCookie("game.currency.existance"));
  game.currency.etime=Number(getCookie("game.currency.etime"));
  game.currency.etimebought=Number(getCookie("game.currency.etimebought"));
  game.currency.thought=Number(getCookie("game.currency.thought"));
  game.currency.word=Number(getCookie("game.currency.word"));
  game.currency.energy=Number(getCookie("game.currency.energy"));
  game.currency.explosion=Number(getCookie("game.currency.explosion"));
  game.unlocked.existance=getCookie("game.unlocked.existance")=="true";
  game.unlocked.etime=getCookie("game.unlocked.etime")=="true";
  game.unlocked.thought=getCookie("game.unlocked.thought")=="true";
  game.unlocked.energy=getCookie("game.unlocked.energy")=="true";
  game.unlocked.explosion=getCookie("game.unlocked.explosion")=="true";
  game.unlocked.convexista=getCookie("game.unlocked.convexista")=="true";
  game.unlocked.convetime=getCookie("game.unlocked.convetime")=="true";
  game.unlocked.convthought=getCookie("game.unlocked.convthought")=="true";
  game.unlocked.convenergy=getCookie("game.unlocked.convenergy")=="true";
  game.unlocked.upgrade.convexisti_1=getCookie("game.unlocked.upgrade.convexisti_1")=="true";
  game.unlocked.upgrade.convexisti_2=getCookie("game.unlocked.upgrade.convexisti_2")=="true";
  game.unlocked.upgrade.existance_1=getCookie("game.unlocked.upgrade.existance_1")=="true";
  game.unlocked.autobuyshop=getCookie("game.unlocked.autobuyshop")=="true";
  game.unlocked.buyautoconvexista=getCookie("game.unlocked.buyautoconvexista")=="true";
  game.upgrade.convexisti_1.bought=getCookie("game.upgrade.convexisti_1.bought")=="true";
  document.getElementById("upgrade.convexisti_1.enable").checked=getCookie("game.upgrade.convexisti_1.enable")=="true";
  game.upgrade.convexisti_2.bought=getCookie("game.upgrade.convexisti_2.bought")=="true";
  document.getElementById("upgrade.convexisti_2.enable").checked=getCookie("game.upgrade.convexisti_2.enable")=="true";
  game.upgrade.existability_1=getCookie("game.upgrade.existability_1")=="true";
  game.upgrade.existance_1=getCookie("game.upgrade.existance_1")=="true";
  game.upgrade.etime_1=getCookie("game.upgrade.etime_1")=="true";
  game.autobuy.existivity=getCookie("game.autobuy.existivity")=="true";
  document.getElementById("input.autoconvexisti").value=getCookie("game.autobuy.existivityon");
  game.autobuy.existance.bought=getCookie("game.autobuy.existance.bought")=="true";
  document.getElementById("autobuy.existance.enable").checked=getCookie("game.autobuy.existance.enable");
  if (getCookie("game.achievement.done").length!==0){game.achievement.done=JSON.parse(getCookie("game.achievement.done"));}
  game.status.timeplayed=Number(getCookie("game.status.timeplayed"));
  game.status.existivity=Number(getCookie("game.status.existivity"));
  game.status.existance=Number(getCookie("game.status.existance"));
  game.status.etime=Number(getCookie("game.status.etime"));
  game.status.thought=Number(getCookie("game.status.thought"));
  game.status.word=Number(getCookie("game.status.word"));
  game.status.energy=Number(getCookie("game.status.energy"));
  game.status.explosion=Number(getCookie("game.status.explosion"));
  lasttime=Number(getCookie("lasttime"));
  if (getCookie("cookieaccepted")){
    acceptcookie();
    saved=new Date();
  }
  setgenwordinterval();
}
var wasoffline=true;
function deletecookie(){//changename
  if (!window.confirm("Do you REALLY want to reset? No going back!")){return;}
  initializevars();
  savecookie();
  setCookie("lasttime",0,7);
  //localStorage.removeItem("save");
  //replace with above in α 0.0.5 update
  window.location.reload(true);
}
function showhide(x,t){
  var o=document.getElementById(x).className;
  if (t){
    document.getElementById(x).className=o.replace(/hidden /g,"");
    document.getElementById(x).className=o.replace(/ hidden/g,"");
    document.getElementById(x).className=o.replace(/hidden/g,"");
  }else{
    if (document.getElementById(x).className.search("hidden")==-1){document.getElementById(x).className+=" hidden";}
  }
}
var timeelapsedleft=0;
var timeelapsed;
var lasttime=0;
var d=new Date();
function passive(){
  if (lasttime!==0){
    d=new Date();
    timeelapsedleft=(d.getTime()-lasttime)/1000;
  }
  lasttime=d.getTime();
  if (timeelapsedleft<=0){return;}
  if (wasoffline){
    wasoffline=false;
  }else{
    game.status.timeplayed+=timeelapsedleft;
  }
  if (timeelapsedleft>0.2){
    console.log("The game is lagging, was offline or inactive! Time elapsed: "+Math.round(timeelapsedleft*1000)+" ms, simulated with "+Math.floor(Math.log(timeelapsedleft)/Math.log(1.25)+9.2)+" ticks.");
  }
  if (timeelapsedleft>=21600){game.achievement.done[27]=true;}
  if (timeelapsedleft>=604800){game.achievement.done[29]=true;}
  for (;timeelapsedleft>0.2;){
    timeelapsed=timeelapsedleft/5;
    tick();
    timeelapsedleft=timeelapsedleft/1.25;
  }
  timeelapsed=timeelapsedleft;
  tick();
  updatedisp();
  updatebutton();
  updateachiev();
}
function tick(){
  updateauto();
  updateprod();
  updatecurr();
  updateautosave();
}
function updateauto(){
  if (game.autobuy.existivity&&(game.currency.existivity>=game.autobuy.existivityon())&&!isNaN(game.autobuy.existivityon())){
    convexisti();
  }
  if (game.autobuy.existance.ison()){
    convexista();
  }
}
function updateprod(){
  game.production.existivity=(Math.floor(game.currency.existance)+1)*0.01*game.production.existanceboost.total();
  game.production.existance=game.currency.word/100;
  game.production.etime=(game.currency.energy*(Math.max(Math.pow(Math.floor(game.currency.existance),0.03)-1.2,0)+Math.max(Math.pow(game.currency.existivity,0.003)-1.016,0)))/40;
  if (game.achievement.done[33]){
    game.production.etime*=1+0.01*game.achievement.completed();
  }
}
function updatecurr(){
  var f=game.currency.existivity;
  game.currency.existivity+=game.production.existivity*timeelapsed;
  if (game.currency.existivity>=15000){game.unlocked.upgrade.convexisti_1=true;}
  game.status.existivity+=Math.max(game.currency.existivity-f,0);
  f=Math.floor(game.currency.existance);
  game.currency.existance+=game.production.existance*timeelapsed;
  if (game.currency.existance>Math.pow(2,game.currency.etimebought+4)){game.currency.existance=Math.pow(2,game.currency.etimebought+4);}
  game.status.existance+=Math.max(Math.floor(game.currency.existance)-f,0);
  f=Math.floor(game.currency.etime);
  game.currency.etime+=game.production.etime*timeelapsed;
  if (game.currency.etime>Math.round(game.currency.thought*2+4)){game.currency.etime=Math.round(game.currency.thought*2+4);}
  game.status.etime+=Math.max(Math.floor(game.currency.etime)-f,0);
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
    game.status.word+=i-1;
  }
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
}
var saved=false;
function updateautosave(){
  if (!saved){return;}
  if (d.getTime()-saved.getTime()>=60000){savecookie();}
}
var bodyOffset=[0,0,0];
function updatedisp(){
  if (game.currency.convexistiearn.total()!=1){
    document.getElementById("disp.existivity2").innerHTML=notation(game.currency.convexistiearn.total());
    showhide("div.disp.existivity2",true);
  }else{
    showhide("div.disp.existivity2",false);
  }
  var m="";
  if ((game.currency.existabilityboost)&&(game.currency.convexistiearn.total()==1)){
    m="<span style=\"color:#009933\">(+"+Math.round(game.currency.existabilityboost*1000)/10+"%)</span>";
  }
  document.getElementById("disp.existivity").innerHTML=notation(Math.round(game.currency.existivity*100)/100);
  document.getElementById("disp.status.existivity").innerHTML=notation(Math.round(game.status.existivity*100)/100);
  document.getElementById("disp.existability").innerHTML=Math.round(1000*game.currency.existability())/10+"%"+m;
  if (game.unlocked.existance){
    showhide("div.disp.existance",true);
    showhide("div.status.existance",true);
    document.getElementById("disp.existance").innerHTML=notation(Math.floor(game.currency.existance));
    document.getElementById("disp.status.existance").innerHTML=notation(Math.floor(game.status.existance));
    document.getElementById("disp.existance2").innerHTML=notation(Math.round(game.production.existivity*100)/100);
  }
  if (game.unlocked.etime){
    showhide("div.disp.etime",true);
    showhide("div.status.etime",true);
    document.getElementById("disp.etime").innerHTML=notation(Math.floor(game.currency.etime));
    document.getElementById("disp.status.etime").innerHTML=notation(Math.floor(game.status.etime));
    if (game.production.existanceboost.etime()-1<10){
      document.getElementById("disp.etime2").innerHTML="+"+notation(Math.round(game.production.existanceboost.etime()*100-100))+"%";
    }else{
      document.getElementById("disp.etime2").innerHTML="×"+notation(Math.round(game.production.existanceboost.etime()*100)/100);
    }
  }
  if (game.unlocked.thought){
    showhide("div.disp.thought",true);
    showhide("div.status.thought",true);
    document.getElementById("disp.thought").innerHTML=notation(game.currency.thought);
    document.getElementById("disp.thought2").innerHTML=notation(game.currency.thought);
    document.getElementById("disp.status.thought").innerHTML=notation(game.status.thought);
    document.getElementById("disp.word").innerHTML=notation(game.currency.word);
    document.getElementById("disp.status.word").innerHTML=notation(game.status.word);
    document.getElementById("disp.thought3").innerHTML=notation(Math.round(game.production.existance*100)/100);
  }
  if (game.unlocked.energy){
    showhide("div.disp.energy",true);
    showhide("div.status.energy",true);
    document.getElementById("disp.energy").innerHTML=notation(game.currency.energy);
    document.getElementById("disp.energy2").innerHTML=notation(Math.round(game.production.etime*1000)/1000);
    document.getElementById("disp.status.energy").innerHTML=notation(game.status.energy);
  }
  if (game.unlocked.explosion){
    showhide("div.explosion",true);
    showhide("div.status.explosion",true);
    document.getElementById("disp.explosion").innerHTML=notation(game.currency.explosion);
    document.getElementById("disp.status.explosion").innerHTML=notation(game.status.explosion);
  }
  var m="";
  var t=game.status.timeplayed;
  if (t>=86400){m+=Math.floor(t/86400)+" days ";}
  if (t>=3600){m+=Math.floor(t/3600%24)+" hours ";}
  if (t>=60){m+=Math.floor(t/60%60)+" minutes ";}
  m+=Math.floor(t%60)+" seconds";
  document.getElementById("disp.status.timeplayed").innerHTML=m;
  if (game.upgrade.convexisti_1.bought){
    showhide("div.upgrade.convexisti_1.bottom",true);
    document.getElementById("disp.upgrade.convexisti_1").innerHTML=notation(Math.round(game.currency.convexistiearn.upgrade_convexisti_1()*1000)/1000);
  }
  if (game.upgrade.convexisti_2.bought){
    showhide("div.upgrade.convexisti_2.bottom",true);
    document.getElementById("disp.upgrade.convexisti_2").innerHTML=notation(Math.round(game.currency.convexistiearn.upgrade_convexisti_2()*1000)/1000);
  }
  if (game.upgrade.existability_1){
    showhide("div.upgrade.existability_1.bottom",true);
    document.getElementById("disp.upgrade.existability_1").innerHTML=Math.round((game.currency.existability()-Math.pow(game.currency.existability(),3))*1000)/10+"%";
  }
  if (game.currency.energy>=5){
    if (!game.option.disableshake()){
      document.body.style="position:absolute;top:"+Math.random()*5+"px;left:"+Math.random()*5+"px;transform:rotate("+Math.random()*100+");width:100%;height:100%;";
    }else{
      document.body.style="";
    }
    showhide("div.disableshake",true);
  }else{
    document.body.style="";
    showhide("div.disableshake",false);
  }
  if (saved){document.getElementById("disp.saved").innerHTML="Saved "+Math.floor((d.getTime()-saved.getTime())/10)/100+" seconds ago";}
}
function updatebutton(){
  if (game.canbuy.existance()){
    document.getElementById("button.convexisti").className="";
  }else{
    document.getElementById("button.convexisti").className="unavailable";
  }
  if (document.getElementById("button.convexista").className=="hidden"){
    if (game.unlocked.convexista){showhide("button.convexista",true);}
  }else{
    if (game.canbuy.etime()){
      document.getElementById("button.convexista").className="";
    }else{
      document.getElementById("button.convexista").className="unavailable";
    }
  }
  if (document.getElementById("button.convetime").className=="hidden"){
    if (game.unlocked.convetime){showhide("button.convetime",true);}
  }else{
    if (game.canbuy.thought()){
      document.getElementById("button.convetime").className="";
    }else{
      document.getElementById("button.convetime").className="unavailable";
    }
  }
  if (document.getElementById("button.convthought").className=="hidden"){
    if (game.unlocked.convthought){showhide("button.convthought",true);}
  }else{
    if (game.canbuy.energy()){
      document.getElementById("button.convthought").className="";
    }else{
      document.getElementById("button.convthought").className="unavailable";
    }
  }
  if (document.getElementById("button.convenergy").className=="hidden"){
    if (game.unlocked.convthought){showhide("button.convenergy",true);}
  }else{
    if (game.canbuy.explosion()){
      document.getElementById("button.convenergy").className="";
    }else{
      document.getElementById("button.convenergy").className="unavailable";
    }
  }
  if (game.canbuy.autoconvexisti()){
    document.getElementById("button.buyautoconvexisti").className="";
  }else{
    document.getElementById("button.buyautoconvexisti").className="unavailable";
  }
  if (document.getElementById("button.convthought").className=="hidden"){
    if (game.unlocked.buyautoconvexista){showhide("button.buyautoconvexista",true);}
  }else{
    if (game.canbuy.autoconvexista()){
      document.getElementById("button.buyautoconvexista").className="";
    }else{
      document.getElementById("button.buyautoconvexista").className="unavailable";
    }
  }
  if ((document.getElementById("div.autobuy.existance.enable").className=="hidden")&&game.autobuy.existance.bought){showhide("div.autobuy.existance.enable",true);}
  if (game.canbuy.upgrade_convexisti_1()){
    document.getElementById("button.upgrade.convexisti_1").className="";
  }else{
    document.getElementById("button.upgrade.convexisti_1").className="unavailable";
  }
  if (game.canbuy.upgrade_convexisti_2()){
    document.getElementById("button.upgrade.convexisti_2").className="";
  }else{
    document.getElementById("button.upgrade.convexisti_2").className="unavailable";
  }
  if (game.canbuy.upgrade_existability_1()){
    document.getElementById("button.upgrade.existability_1").className="";
  }else{
    document.getElementById("button.upgrade.existability_1").className="unavailable";
  }
  if (game.canbuy.upgrade_existance_1()){
    document.getElementById("button.upgrade.existance_1").className="";
  }else{
    document.getElementById("button.upgrade.existance_1").className="unavailable";
  }
  if (game.canbuy.upgrade_etime_1()){
    document.getElementById("button.upgrade.etime_1").className="";
  }else{
    document.getElementById("button.upgrade.etime_1").className="unavailable";
  }
  if (game.unlocked.changescr()){showhide("changescr",true);}
  if (game.unlocked.upgrade.shop()){document.getElementById("button.changescr_shop_upgrade").className="changescr";}
  if (game.unlocked.upgrade.convexisti_1){showhide("upgrade.convexisti_1",true);}
  if (game.unlocked.upgrade.convexisti_2){showhide("upgrade.convexisti_2",true);}
  if (game.unlocked.upgrade.existability_1){showhide("upgrade.existability_1",true);}
  if (game.unlocked.upgrade.existance_1){showhide("upgrade.existance_1",true);}
  if (game.unlocked.autobuyshop){showhide("button.changescr_shop_autoconv",true);}
  if (game.achievement.done[4]){showhide("button.changescr_status",true);}
  if (game.achievement.done[6]){showhide("button.changescr_achievement",true);}
  if (game.autobuy.existivity){document.getElementById("form.autoconvexisti").className="";}
  document.getElementById("button.convexista").innerHTML="Experience.<br/>Cost: "+notation(Math.round(Math.pow(2,game.currency.etimebought+4)))+" existances";
  document.getElementById("button.convetime").innerHTML="Thought for the words.<br/>Cost: "+notation(Math.round(game.currency.thought*2+4))+" experienced time,<br/>  "+notation(Math.round(50*Math.pow(game.currency.thought+2,2)))+" existivity";
  document.getElementById("button.convthought").innerHTML="Be energetic!!<br/>Cost: "+notation(Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))+" thoughts,<br/>  "+notation((Math.floor(Math.pow(game.currency.energy,1.8))*5+15))+" words thought";
}
function changescr_shop_general(){
  showhide("scr.shop.general",true);
  showhide("scr.shop.upgrade",false);
  showhide("scr.shop.autoconv",false);
  showhide("scr.status",false);
  showhide("table.achievement",false);
}
function changescr_shop_upgrade(){
  showhide("scr.shop.general",false);
  showhide("scr.shop.upgrade",true);
  showhide("scr.shop.autoconv",false);
  showhide("scr.status",false);
  showhide("table.achievement",false);
}
function changescr_shop_autoconv(){
  showhide("scr.shop.general",false);
  showhide("scr.shop.upgrade",false);
  showhide("scr.shop.autoconv",true);
  showhide("scr.status",false);
  showhide("table.achievement",false);
}
function changescr_status(){
  showhide("scr.shop.general",false);
  showhide("scr.shop.upgrade",false);
  showhide("scr.shop.autoconv",false);
  showhide("scr.status",true);
  showhide("table.achievement",false);
}
function changescr_achievement(){
  showhide("scr.shop.general",false);
  showhide("scr.shop.upgrade",false);
  showhide("scr.shop.autoconv",false);
  showhide("scr.status",false);
  showhide("table.achievement",false);
  achievementupdate();
  showhide("table.achievement",true);
}
function convexisti(){
  if (!game.canbuy.existance()){return;}
  if (game.upgrade.convexisti_1.ison()){
    if (Math.random()<game.currency.existability()){
      game.currency.existance+=game.currency.convexistiearn.total();
      game.status.existance+=game.currency.convexistiearn.total();
      updateprod();
      if (game.currency.existance>=10){game.unlocked.convexista=true;}
      if (game.currency.existance>=30){game.unlocked.autobuyshop=true;}
      if (game.currency.existance>=80){game.unlocked.upgrade.convexisti_2=true;}
      if (game.currency.existance>=1500){game.unlocked.upgrade.existability_1=true;}
      if (game.currency.existability()<0.05){game.achievement.done[10]=true;}
      if (game.currency.existability()<0.005){game.achievement.done[11]=true;}
      if (game.currency.existability()<0.005){game.achievement.done[23]=true;}
    }else{
      game.achievement.done[2]=true;
      if (game.currency.existability()>0.98){game.achievement.done[12]=true;}
      if (game.currency.existability()>0.995){game.achievement.done[13]=true;}
      if (game.currency.existability()>0.99999){game.achievement.done[24]=true;}
    }
    game.currency.existivity=0;
  }else{
    if (Math.random()<game.currency.existability()){
      game.currency.existance+=game.currency.convexistiearn.total();
      game.status.existance+=game.currency.convexistiearn.total();
      game.unlocked.existance=true;
      updateprod();
      if (game.currency.existance>=10){game.unlocked.convexista=true;}
      if (game.currency.existance>=30){game.unlocked.autobuyshop=true;}
      if (game.currency.existance>=80){game.unlocked.upgrade.convexisti_2=true;}
      if (game.currency.existance>=1500){game.unlocked.upgrade.existability_1=true;}
      if (game.currency.existability()<0.05){game.achievement.done[10]=true;}
      if (game.currency.existability()<0.005){game.achievement.done[11]=true;}
      if (game.currency.existability()<0.005){game.achievement.done[23]=true;}
    }else{
      game.achievement.done[2]=true;
      if (game.currency.existability()>0.98){game.achievement.done[12]=true;}
      if (game.currency.existability()>0.995){game.achievement.done[13]=true;}
      if (game.currency.existability()>0.99999){game.achievement.done[24]=true;}
      game.currency.existabilityboost+=game.currency.existability()/2.5;
    }
    game.currency.existabilityboost/=2;
    if (game.currency.existivity>=10){
      game.currency.existivity=Math.pow(game.currency.existivity,0.61);
    }else{
      game.currency.existivity=0;
    }
  }
  if (game.currency.existabilityboost<0.01){game.currency.existabilityboost=0;}
}
function convexista(){
  if (!game.canbuy.etime()){return;}
  game.currency.etime++;
  game.status.etime++;
  game.currency.etimebought++;
  game.currency.existivity=0;
  game.currency.existabilityboost=0;
  game.currency.existance=game.currency.etimebought;
  if (game.upgrade.etime_1){game.currency.existance+=5;}
  game.unlocked.etime=true;
  updateprod();
  if (game.currency.etime>=2){game.unlocked.convetime=true;}
}
function convetime(){
  if (!game.canbuy.thought()){return;}
  game.currency.thought++;
  game.status.thought++;
  game.currency.etime=0;
  game.currency.etimebought=0;
  game.currency.existivity=0;
  game.currency.existabilityboost=0;
  game.currency.existance=0;
  game.unlocked.thought=true;
  updateprod();
  setgenwordinterval();
  if (game.currency.thought>=2){game.unlocked.convthought=true;}
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
    game.status.word++;
    word="<mark>"+word+"</mark>";
  }
  document.getElementById("disp.genword").innerHTML=word;
  return word;
}
var genwordinterval;
function convthought(){
  if (!game.canbuy.energy()){return;}
  game.currency.energy++;
  game.status.energy++;
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
  game.unlocked.upgrade.existance_1=true;
  if (game.currency.energy>=5){game.unlocked.convenergy=true;}
}
function convenergy(){
  if (!game.canbuy.explosion()){return;}
  game.currency.explosion++;
  game.status.explosion++;
  game.currency.energy=0;
  game.currency.word=0;
  game.currency.thought=0;
  game.currency.etime=0;
  game.currency.etimebought=0;
  game.currency.existivity=0;
  game.currency.existabilityboost=0;
  game.currency.existance=0;
  if (!game.upgrade.etime_1){game.unlocked.existance=false};
  game.unlocked.etime=false;
  game.unlocked.thought=false;
  game.unlocked.energy=false;
  game.unlocked.convexista=false;
  game.unlocked.convetime=false;
  game.unlocked.convthought=false;
  showhide("div.disp.existance",false);
  showhide("div.disp.etime",false);
  showhide("div.disp.thought",false);
  showhide("div.disp.energy",false);
  showhide("button.convexista",false);
  showhide("button.convetime",false);
  showhide("button.convthought",false);
  game.unlocked.explosion=true;
  updateprod();
  game.unlocked.upgrade.etime_1=true;
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
function buy_upgrade_existability_1(){
  if (!game.canbuy.upgrade_existability_1()){return;}
  game.currency.existance-=4000;
  game.upgrade.existability_1=true;
}
function buy_upgrade_existance_1(){
  if (!game.canbuy.upgrade_existance_1()){return;}
  game.currency.energy-=1;
  game.upgrade.existance_1=true;
}
function buy_upgrade_etime_1(){
  if (!game.canbuy.upgrade_etime_1()){return;}
  game.currency.explosion-=1;
  game.currency.existance+=5;
  showhide("div.disp.existance",true);
  game.unlocked.existance=true;
  game.upgrade.etime_1=true;
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
var achievinterval;
var achievshown=false;
function updateachiev(){
  if (achievshown){
    var n=document.getElementById("achievementearned").innerHTML;
  }else{
    var n="";
  }
  var t=false;
  for (var y=0;y<game.achievement.arrangement.length;y++){
    for (var x=0;x<game.achievement.arrangement[y].length;x++){
      var a=game.achievement.arrangement[y][x];
      if (game.achievement.arrangement[y][x]!=-1){
        if (!game.achievement.done[a]&&eval(game.achievement.condition[a])){
          game.achievement.done[a]=true;
          var m=game.achievement.name[a];
          var s=m.search(",");
          m=m.replace("$",",");
          if (n!=""){n+="<br/>";}
          n+="<span style=\"color:#202020;\" title=\""+m.substr(s+1,m.length-s-1)+"\">"+m.substr(0,s)+"</span>";
          t=true;
        }
      }
    }
  }
  if (t){
    document.getElementById("achievementearned").innerHTML=n;
    showhide("achievementearned",true);
    clearInterval(achievinterval);
    achievinterval=setTimeout(function (){showhide("achievementearned",false);achievshown=false;},7500);
    achievshown=true;
  }
}
function achievementupdate(){
  updateachiev();
  for (var y=0;y<game.achievement.arrangement.length;y++){
    for (var x=0;x<game.achievement.arrangement[y].length;x++){
      var o=document.getElementById("table.achievement").rows[y].cells[x];
      var a=game.achievement.arrangement[y][x];
      if (a!=-1){
        var m=game.achievement.name[a];
        var s=m.search(",");
        m=m.replace("$",",");
        o.innerHTML=m.substr(0,s);
        o.title=m.substr(s+1,m.length-s-1);
        o.className="achievement";
        if (game.achievement.done[a]){
          o.className+=" done";
        }else{
          var t=false;
          for (var u=-2;u<=2;u++){
            for (var v=-2+Math.abs(u);v<=2-Math.abs(u);v++){
              if (typeof game.achievement.arrangement[y+u]!=="undefined"){
                if (game.achievement.done[game.achievement.arrangement[y+u][x+v]]){t=true;break;}}
            }
          }
          if (!t){o.className+=" hidden";}
        }
      }
    }
  }
}
function changelogtoggle(t){
  showhide("changelog",t);
}
loadcookie();
var loading=false;
