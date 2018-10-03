/*"Many to do, Less You Have to by Naruyoko"
Hey llo, haxxor! (btw the word "hack" isn't necessarily bad.)
I can't take responsibility for messing around with code.
.......##.....##....###....##....##.##....##....########..#######.....########...#######.............
.......###...###...##.##...###...##..##..##........##....##.....##....##.....##.##.....##............
.......####.####..##...##..####..##...####.........##....##.....##....##.....##.##.....##............
.......##.###.##.##.....##.##.##.##....##..........##....##.....##....##.....##.##.....##.####.......
.......##.....##.#########.##..####....##..........##....##.....##....##.....##.##.....##.####.......
.......##.....##.##.....##.##...###....##..........##....##.....##....##.....##.##.....##..##........
.......##.....##.##.....##.##....##....##..........##.....#######.....########...#######..##.........
.............##.......########..######...######.....##....##..#######..##.....##.....................
.............##.......##.......##....##.##....##.....##..##..##.....##.##.....##.....................
.............##.......##.......##.......##............####...##.....##.##.....##.....................
.............##.......######....######...######........##....##.....##.##.....##.....................
.............##.......##.............##.......##.......##....##.....##.##.....##.....................
.............##.......##.......##....##.##....##.......##....##.....##.##.....##.....................
.............########.########..######...######........##.....#######...#######......................
.........................##.....##....###....##.....##.########....########..#######.................
.........................##.....##...##.##...##.....##.##.............##....##.....##................
.........................##.....##..##...##..##.....##.##.............##....##.....##................
.........................#########.##.....##.##.....##.######.........##....##.....##................
.........................##.....##.#########..##...##..##.............##....##.....##................
.........................##.....##.##.....##...##.##...##.............##....##.....##.###............
.........................##.....##.##.....##....###....########.......##.....#######..###............
oof, the above ASCII takes alot of space.*/
var game;
function initializevars(){
  game={
    currency:{
      existivity:0,
      existability:{
        total:(function (){
          var r=game.currency.existability.base();
          if (game.upgrade.existability_1) r=game.currency.existability.upgrade_existability_1(r);
          if (game.upgrade.existability_2) r=game.currency.existability.upgrade_existability_2(r);
          if (game.upgrade.existance_2) r=game.currency.existability.upgrade_existance_2(r);
          return r;
        }),
        base:(function (){
          if (game.upgrade.convexisti_1.ison()&&game.upgrade.convexisti_3.ison()){
            var r=Math.pow(Math.sin(Math.pow(game.currency.existivity,0.392)/51.9372)/(10.3+Math.exp(Math.log(Math.pow(game.currency.existivity,0.34))/Math.log(6.72)))+1/(1.1+Math.exp(-Math.pow(Math.log(Math.pow(game.currency.existivity,0.8)/421337)/Math.log(49),8.4)))-1/(1+Math.exp(game.currency.existivity-1e6)),42*Math.PI/Math.E);
            if (isNaN(r)||!isFinite(r)) return 0;
            return Math.min(Math.max(r,0),1);
          }else if (game.upgrade.convexisti_1.ison()){
            return Math.pow(Math.log(Math.sqrt(game.currency.existivity+1)),1.35)/(10+Math.exp(game.currency.convexistiearn.upgrade_convexisti_1()/50));
          }else{
            return (2/(1+Math.exp(-game.currency.existivity))-1)*(1-game.currency.existabilityboost)+game.currency.existabilityboost;
          }
        }),
        upgrade_existability_1:(function (r){
          return game.upgrade.existability_1?Math.cbrt(r):r;
        }),
        upgrade_existability_2:(function (r){
          return game.upgrade.existability_1?Math.cbrt(r):r;
        }),
        upgrade_existance_2:(function (r){
          return game.upgrade.existability_1?Math.pow(r,1/4):r;
        })
      },
      convexistiearn:{
        total:(function (){
          var x=1;
          if (game.upgrade.convexisti_1.ison()) x*=game.currency.convexistiearn.upgrade_convexisti_1();
          if (game.upgrade.convexisti_2.ison()) x*=game.currency.convexistiearn.upgrade_convexisti_2();
          return Math.floor(x);
        }),
        upgrade_convexisti_1:(function (){return game.upgrade.convexisti_3.ison()?(Math.pow((Math.log(Math.pow(game.currency.existivity,0.2323)/11.642+1))/Math.log(2.512),6.23234)+1):(Math.max(Math.cbrt(game.currency.existivity)/1.5+0.8,1));}),
        upgrade_convexisti_2:(function (){return Math.max(Math.log(Math.floor(game.currency.existance))+1,1);})
      },
      existabilityboost:0,
      existance:0,
      etime:0, //experienced time
      etimebought:0,
      thought:0,
      genworddelay:1,
      word:0,
      energy:0,
      explosion:0,
      residue:[0,false]
    },
    production:{
      existivity:0.01,
      existance:0,
      existanceboost:{
        total:(function (){
          var r=game.production.existanceboost.etime.total();
          if (game.upgrade.existance_1) r*=5;
          if (game.upgrade.existance_2) r*=10;
          if (game.upgrade.word_1.ison()) r*=game.production.existanceboost.upgrade_word_1();
          if (game.achievement.done[31]) r*=game.production.existanceboost.achievement_31();
          if (game.achievement.done[33]) r*=game.production.existanceboost.achievement_33();
          return r;
        }),
        etime:{
          total:(function (){
            return Math.pow(game.production.existanceboost.etime.each(),Math.floor(game.currency.etime));
          }),
          each:(function (){
            var m=1;
            if (game.upgrade.etime_1.ison()){
              m=1.44;
            }else{
              m=1.2;
            }
            if (game.achievement.done[33]) m*=1+0.01*game.achievement.completed();
            if (game.achievement.done[41]) m*=Math.pow(Math.log(game.status.timeplayed/3600+8.6)/Math.log(8.6),0.28);
            return m;
          })
        },
        upgrade_word_1:(function (){
          var r=Math.pow(Math.pow(game.currency.word*1.2,0.02),Math.log(Math.pow(game.currency.word*5,0.12))/Math.log(2));
          if (isNaN(r)||!isFinite(r)) return 1;
          return Math.max(1,r);
        }),
        achievement_31:(function (){return Math.max(Math.pow(1.000001,Math.floor(game.currency.existance))/(Math.log(Math.pow(Math.floor(game.currency.existance)+1,1/1000)+1)+0.3),1);}),
        achievement_33:(function (){return 1+0.01*game.achievement.completed();})
      },
      etime:0,
      thought:0,
      genword:(function (){
        var r=game.currency.thought;
        if (game.achievement.done[36]&&game.achievement.done[37]){r*=3}
        return r;
      }),
      energy:0,
      residue:[-Infinity,false]
    },
    unlocked:{
      existance:false,
      etime:false,
      thought:false,
      energy:false,
      explosion:false,
      residue:false,
      convexista:false,
      convetime:false,
      convthought:false,
      convenergy:false,
      changescr:(function (){return game.unlocked.upgrade.shop()||game.unlocked.autobuyshop||game.achievement.done[4];}),
      upgrade:{
        shop:(function (){return game.unlocked.upgrade.convexisti_1||game.unlocked.upgrade.convexisti_2||game.unlocked.upgrade.existability_1||game.unlocked.upgrade.existance_1||game.unlocked.upgrade.word_1;}),
        convexisti_1:false,
        convexisti_2:false,
        convexisti_3:false,
        existability_1:false,
        existability_2:false,
        existance_1:false,
        convexista_1:false,
        etime_1:false,
        thought_1:false,
        word_1:false,
        convthought_1:false,
        energy_2:false
      },
      autobuyshop:false,
      buyautoconvexista:false,
      buyautoconvetime:false
    },
    canbuy:{
      existance:(function (){return game.currency.existance<Math.pow(2,game.currency.etimebought+4);}),
      etime:(function (){return (game.currency.existance>=Math.pow(2,game.currency.etimebought+4))&&(Math.floor(game.currency.etime)<game.currency.thought*2+4);}),
      thought:(function (){return (Math.floor(game.currency.etime)>=game.currency.thought*2+4)&&(game.currency.existivity>=50*Math.pow(game.currency.thought+2,2))&&!((game.currency.thought>=(game.currency.energy*(game.currency.energy+1)/2+3)&&(game.currency.word>=Math.floor(Math.pow(game.currency.energy,1.5))*25+100)));}),
      energy:(function (){
        var r=Math.floor(Math.pow(game.currency.energy,1.8))*5+15;
        if (game.upgrade.convthought_1){r=Math.ceil(r/4);}
        return (game.currency.thought>=Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))&&(game.currency.word>=r);
      }),
      explosion:(function (){return (game.currency.energy>=5)&&(game.currency.existivity>=1e+9);}),
      residue:(function (){return !game.unlocked.residue&&(game.currency.explosion>=1000);}),
      upgrade_convexisti_1:(function (){return (game.currency.existivity>=200000)&&!game.upgrade.convexisti_1.bought;}),
      upgrade_convexisti_2:(function (){return (game.currency.existance>=150)&&!game.upgrade.convexisti_2.bought;}),
      upgrade_convexisti_3:(function (){return (game.currency.explosion>=3)&&(game.currency.existivity>=614.778e12)&&!game.upgrade.convexisti_3.bought;}),
      upgrade_existability_1:(function (){return (game.currency.existance>=4000)&&!game.upgrade.existability_1;}),
      upgrade_existability_2:(function (){return (game.currency.etime>=20)&&(game.currency.existance>=700000)&&!game.upgrade.existability_2;}),
      upgrade_existance_1:(function (){return (game.currency.energy>=1)&&!game.upgrade.existance_1;}),
      upgrade_existance_2:(function (){return (game.currency.explosion>=4)&&!game.upgrade.existance_2;}),
      upgrade_convexista_1:(function (){return (game.currency.explosion>=1)&&(game.currency.experience>=12)&&!game.upgrade.convexista_1.bought;}),
      upgrade_etime_1:(function (){return (game.currency.explosion>=1)&&!game.upgrade.etime_1.bought;}),
      upgrade_thought_1:(function (){return (game.currency.explosion>=2)&&(game.currency.thought>=10)&&(game.currency.word>=700)&&!game.upgrade.thought_1.bought;}),
      upgrade_word_1:(function (){return (game.currency.thought>=2)&&(game.currency.word>=100)&&(game.currency.existance>=1000)&&!game.upgrade.word_1;}),
      upgrade_convthought_1:(function (){return (game.currency.energy>=4)&&(game.currency.thought>=5)&&!game.upgrade.convthought_1;}),
      upgrade_energy_1:(function (){return (game.currency.explosion>=2)&&!game.upgrade.energy_1;}),
      upgrade_energy_2:(function (){return (game.currency.word>=500)&&!game.upgrade.energy_2;}),
      autoconvexisti:(function (){return (game.currency.existance>=200)&&!game.autobuy.existivity.bought;}),
      autoconvexista:(function (){return (game.currency.thought>=6)&&(game.currency.word>=60)&&(game.currency.etime>=10)&&!game.autobuy.existance.bought;}),
      autoconvetime:(function (){return (game.currency.explosion>=3)&&(game.currency.energy>=4)&&!game.autobuy.etime.bought;})
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
      convexisti_3:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.convexisti_3.enable").checked;}),
        ison:(function (){return game.upgrade.convexisti_3.bought&&game.upgrade.convexisti_3.enable();})
      },
      existability_1:false,
      existability_2:false,
      existance_1:false,
      existance_2:false,
      convexista_1:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.convexista_1.enable").checked;}),
        ison:(function (){return game.upgrade.convexista_1.bought&&game.upgrade.convexista_1.enable();})
      },
      etime_1:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.etime_1.enable").checked;}),
        ison:(function (){return game.upgrade.etime_1.bought&&game.upgrade.etime_1.enable();})
      },
      thought_1:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.thought_1.enable").checked;}),
        ison:(function (){return game.upgrade.thought_1.bought&&game.upgrade.thought_1.enable();})
      },
      word_1:{
        bought:false,
        enable:(function (){return document.getElementById("upgrade.word_1.enable").checked;}),
        ison:(function (){return game.upgrade.word_1.bought&&game.upgrade.word_1.enable();})
      },
      convthought_1:false,
      energy_1:false,
      energy_2:false
    },
    autobuy:{
      existivity:{
        bought:false,
        enable:(function (){return document.getElementById("autobuy.existivity.enable").checked;}),
        threshold:(function (){return Number(document.getElementById("input.autoconvexisti").value);}),
        ison:(function (){return game.autobuy.existivity.bought&&game.autobuy.existivity.enable();})
      },
      existance:{
        bought:false,
        enable:(function (){return document.getElementById("autobuy.existance.enable").checked;}),
        ison:(function (){return game.autobuy.existance.bought&&game.autobuy.existance.enable();})
      },
      etime:{
        bought:false,
        enable:(function (){return document.getElementById("autobuy.etime.enable").checked;}),
        ison:(function (){return game.autobuy.etime.bought&&game.autobuy.etime.enable();})
      }
    },
    achievement:{
      arrangement:[
        [ 0, 1, 3,10,11,28, 8,25,29,33],
        [ 2, 4, 5,12,13,16,17,43,44,19],
        [23,27, 6, 7, 9,14,26,20,30,42],
        [24,22,18,21,41,15,39,31,36,40],
        [46,47,53,35,45,32,38,37,34,48],
        [56,-1,54,52,49,-1,55,57,51,50]
      ],
      condition:["true","game.currency.existance>=1","undefined","game.currency.existance>=8","game.currency.etime>=1","Math.pow(1.2,game.currency.etime)>=3","game.currency.thought>=1","game.currency.word>=1","game.currency.existability.total()>0.9999999","(game.currency.thought>=4)&&(game.currency.word>=120)",//0x
      "undefined","undefined","undefined","undefined","game.currency.energy>=1","game.currency.energy>=4","game.currency.existance>=1000","game.currency.existance>=100000","Math.pow(1.2,game.currency.etime)>=100","game.currency.existance>=1e+7",//1x
      "game.currency.existivity>=1000","game.currency.existivity>=1e+7","game.currency.thought>=6","undefined","undefined","game.currency.convexistiearn.total()>=100","game.autobuy.existivity.bought","undefined","game.status.timeplayed>=20*60","undefined",//2x
      "game.currency.existabilityboost>=0.25","Math.floor(game.currency.existance)==123456","game.currency.explosion>=1","function temp(){var it=true;for(var i=0;i<9;i++){if (!game.achievement.done[game.achievement.arrangement[0][i]]){it=false;break;}}return it;}temp();","game.currency.existivity>=1e+15","game.production.existanceboost.etime.total()>=1e+6","(game.currency.word>=150)&&(game.currency.thought<=1)","(game.currency.thought>=8)&&(game.currency.word<=4)","game.status.explosion>=5","game.autobuy.etime.bought",//3x
      "game.currency.existivity>=1e+9","game.status.etime>=3600","game.status.word>=1000","(game.currency.convexistiearn.total()>=3000)&&(game.currency.existability.total()>=0.9)","game.production.existivity>=1e+12","game.currency.etime>=20","(game.currency.word>=5000)||(game.status.word>=25000)","game.achievement.completed()>=40","game.currency.existabilityboost>=0.35","game.production.existanceboost.etime.total()>=Math.pow(Number.MAX_VALUE,3/100)",//4x
      "(game.currency.thought>=12)&&(game.currency.word>=1000)","(game.currency.existability.total()>=2e-8)&&(game.currency.existability.total()<=4e-8)","game.status.timeplayed>=172800","(Math.floor(game.currency.etime)>game.currency.etimebought*2)&&(game.currency.etimebought>12)","(game.currency.etime-game.currency.etimebought>=1)&&(game.currency.thought<=1)","game.currency.energy>=6","(game.currency.word>=game.currency.thought*1000)&&(game.currency.thought>=1)","undefined"],//5x
      name:["Big Bang?,Open game.","There IS Something Rather Than Nothing,Find an existance.","Bad Roll,Fail to find an existance.","Crowding,Find 8 existances.","Time\u2122,Let them experience.","Good experience,Have +200% boost by experiences.","Non-mechanic Integration,Have a thought.\nReward: Unlock Achievemnts","0.6\u2030,Get a word.","Almost Gurantee,Have probability exceed 99.9999%.","Yes Brainer,Have 4 thoughts and 120 words.",//0x
      "Quantum Fluctuation I,Successfully find existance with less than 5% chance.","Quantum Fluctuation II,Successfully find existance with less than 0.5% chance.","Quantum Fluctuation -I,Fail to find existance with more than 98% chance.","Quantum Fluctuation -II,Fail to find existance with more than 99.5% chance.","W=F·d·cos\u03b8,Have some energy in your system.","Work!,Have 4 joules of energy.","Swarn,A group of 1,000 existances.","Stream,A group of 100,000 existances.","Overpowered,Get ×100 boost by experienced time.","Okay$ You had Enough.,Have 10 million existances.",//1x
      "You don't need this much.,Reach 1,000 existivity.","Why Would You Need That?!,Reach 10 million existivity.","Confused,Have 6 thoughts.","Quantum Fluctuation III,Successfully find existance with less than 0.01% chance.","Quantum Fluctuation -III,Fail to find existance with more than 99.999% chance.","Gimme More!,Let 100 experiences available in a click.","You have a Coop,Have an autobuyer.","Don't you dare sleep,Be offline for over 6 hours in a row.","You Are In This,Play for 20 minutes","Comeback,Leave game for a week.",//2x
      "Was this your intention?,Have boost to probability of existances existing exceed 25%.","Nice Work.,Get EXACTLY 123456 existances. No more or no less.\nReward: Your existances are slightly stronger for every existance you have.","Boom, I guess,Explosion","Line up,Complete the 1st row of achievements.\nReward: Each achievement completed give +1% boost to energy,\n  experience and existances.","Do you know this?,Have 1 quadrillion existivity.","You know POWER OF EXPOENTIAL FUNCTION?,Have ×1 million by experienced time.","Would You Mind?,Have 150 words with only 1 thought.\nReward: With achievement \"Wouldn't You Mind?\"$ thoughts will generate triple the strings,\n and thinking will give 5 words.","Wouldn't You Mind?,Have 8 thoughts with at most 4 words.\nReward: With achievement \"Would You Mind?\"$ thoughts will generate triple the strings,\n and thinking will give 5 words.","Something happened,Explode 5 times.","Unconditioned Reflex,Have auto thinker.",//3x
      "Something is happening,Have 10 billion existivity.","An hour 'round,Experience 3,600 seconds total.\nReward: Experiences are slightly more effective longer you play.","Thoughter,Think 1,000 words in total.\nReward: Words produce quadruple existances.","Thats alot.,Have 3,000 existances available in a click with 90% certainty.","WAAAAAAAAAAAA...,Produce 1 trillion existivity per second.","You've having alot of boost,Have 20 seconds experienced.","You Should Write a Book.,Think of 5,000 words in moment or 25,000 words total.","Good Luck,Complete 40 achievements.","You Must have Tried,Have +35% boost to chance of existing by fails.","3% to Infinity,Have ×1.769 billion boost by experienced time.",//4x
      "Brain Brainer,Have 12 thoughts and 1,000 words.","Hey$ you done too much,Have between 0.000002% to 0.000004% probability of existances existing.","time_wasted.online = 172800,Play online for 2 days.","Better than Your Clicks,Have more energy produced experienced time than manually experienced time of more than 12 seconds.","Yup$ I'm Sure that It's Better.,Have a second of experience produced by energy with only 1 thought.","You didn't need though...,Have 6 joules of energy.","You didn't have to wait that long...,Have 1,000 times more words than thoughts.","You funny., Follow the direction on import."],//5x
      done:[],
      completed:(function (){
        var a=0;
        for (var i=0;i<game.achievement.done.length;i++){
          if (game.achievement.done[i]) a++;
        }
        return a;
      })
    },
    status:{
      timeplayed:0,
      totaltime:0,
      existivity:0,
      existance:0,
      etime:0,
      thought:0,
      word:0,
      energy:0,
      explosion:0
    },
    option:{
      disableshake:(function (){return document.getElementById("checkbox.disableshake").checked;}),
      disablewrap:(function (){return document.getElementById("checkbox.disablewrap").checked;}),
      smallui:(function (){return document.getElementById("checkbox.smallui").checked;})
    },
    datainfo:{
      version:"α 0.0.5",
      release:201809263, //YYYYMMDDX
      lasttime:0
    }
  };
}
initializevars();
function notation(i){
  if (typeof i=="number") return notations.normalsmall(i);
  if (typeof i=="object") return notations.normallarge(i);
}
function timeFormat(t){
  var m="";
  if (t>=86400*365) m+=notation(Math.floor(t/(86400*365)))+" years ";
  if (t>=86400) m+=Math.floor(t/86400%365)+" days ";
  if (t>=3600) m+=Math.floor(t/3600%24)+" hours ";
  if (t>=60) m+=Math.floor(t/60%60)+" minutes ";
  if (t>=10){m+=Math.floor(t%60)+" seconds";}else{m=t.toFixed(3)+" seconds";}
  return m;
}
var cookieaccepted=false;
/*function acceptcookie(){
  cookieaccepted=true;
  document.getElementById("button.confirmcookie").className="hidden";
  document.getElementById("cookienotice").className="hidden";
  document.getElementById("div.cookie").className="";
  saved=new Date().getTime();
}*/
function setCookie(cname, cvalue, exdays) {//used only for data migration
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    return String(cvalue);
} //code from https://www.w3schools.com/js/js_cookies.asp at 2018/03/18 11:39 EDT
function getCookie(cname) {//used only for data migration
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
function savecookie(){//used only for data migration
  //if (!cookieaccepted){return;}
  setCookie("game.currency.existivity",game.currency.existivity,365);
  setCookie("game.currency.existance",game.currency.existance,365);
  setCookie("game.currency.etime",game.currency.etime,365);
  setCookie("game.currency.etimebought",game.currency.etimebought,365);
  setCookie("game.currency.thought",game.currency.thought,365);
  setCookie("game.currency.genworddelay",game.currency.genworddelay,365);
  setCookie("game.currency.word",game.currency.word,365);
  setCookie("game.currency.energy",game.currency.energy,365);
  setCookie("game.currency.explosion",game.currency.explosion,365);
  setCookie("game.unlocked.existance",game.unlocked.existance,365);
  setCookie("game.unlocked.etime",game.unlocked.etime,365);
  setCookie("game.unlocked.thought",game.unlocked.thought,365);
  setCookie("game.unlocked.energy",game.unlocked.energy,365);
  setCookie("game.unlocked.explosion",game.unlocked.explosion,365);
  setCookie("game.unlocked.convexista",game.unlocked.convexista,365);
  setCookie("game.unlocked.convetime",game.unlocked.convetime,365);
  setCookie("game.unlocked.convthought",game.unlocked.convthought,365);
  setCookie("game.unlocked.convenergy",game.unlocked.convenergy,365);
  setCookie("game.unlocked.upgrade.convexisti_1",game.unlocked.upgrade.convexisti_1,365);
  setCookie("game.unlocked.upgrade.convexisti_2",game.unlocked.upgrade.convexisti_2,365);
  setCookie("game.unlocked.upgrade.existability_1",game.unlocked.upgrade.existability_1,365);
  setCookie("game.unlocked.upgrade.existability_2",game.unlocked.upgrade.existability_2,365);
  setCookie("game.unlocked.upgrade.existance_1",game.unlocked.upgrade.existance_1,365);
  setCookie("game.unlocked.upgrade.word_1",game.unlocked.upgrade.word_1,365);
  setCookie("game.unlocked.upgrade.convthought_1",game.unlocked.upgrade.convthought_1,365);
  setCookie("game.unlocked.autobuyshop",game.unlocked.autobuyshop,365);
  setCookie("game.unlocked.buyautoconvexista",game.unlocked.buyautoconvexista,365);
  setCookie("game.unlocked.buyautoconvetime",game.unlocked.buyautoconvetime,365);
  setCookie("game.upgrade.convexisti_1.bought",game.upgrade.convexisti_1.bought,365);
  setCookie("game.upgrade.convexisti_1.enable",game.upgrade.convexisti_1.enable(),365);
  setCookie("game.upgrade.convexisti_2.bought",game.upgrade.convexisti_2.bought,365);
  setCookie("game.upgrade.convexisti_2.enable",game.upgrade.convexisti_2.enable(),365);
  setCookie("game.upgrade.existability_1",game.upgrade.existability_1,365);
  setCookie("game.upgrade.existability_2",game.upgrade.existability_2,365);
  setCookie("game.upgrade.existance_1",game.upgrade.existance_1,365);
  setCookie("game.upgrade.existance_2",game.upgrade.existance_2,365);
  setCookie("game.upgrade.etime_1",game.upgrade.etime_1,365);
  setCookie("game.upgrade.word_1.bought",game.upgrade.word_1.bought,365);
  setCookie("game.upgrade.word_1.enable",game.upgrade.word_1.enable(),365);
  setCookie("game.upgrade.convthought_1",game.upgrade.convthought_1,365);
  setCookie("game.upgrade.energy_1",game.upgrade.energy_1,365);
  setCookie("game.upgrade.energy_2",game.upgrade.energy_2,365);
  setCookie("game.autobuy.existivity.bought",game.autobuy.existivity.bought,365);
  setCookie("game.autobuy.existivity.threshold",game.autobuy.existivity.threshold(),365);
  setCookie("game.autobuy.existivity.enable",game.autobuy.existivity.enable(),365);
  setCookie("game.autobuy.existance.bought",game.autobuy.existance.bought,365);
  setCookie("game.autobuy.existance.enable",game.autobuy.existance.enable(),365);
  setCookie("game.autobuy.etime.bought",game.autobuy.etime.bought,365);
  setCookie("game.autobuy.etime.enable",game.autobuy.etime.enable(),365);
  setCookie("game.achievement.done",JSON.stringify(game.achievement.done),365);
  setCookie("game.status.timeplayed",game.status.timeplayed,365);
  setCookie("game.status.totaltime",game.status.totaltime,365);
  setCookie("game.status.existivity",game.status.existivity,365);
  setCookie("game.status.existance",game.status.existance,365);
  setCookie("game.status.etime",game.status.etime,365);
  setCookie("game.status.thought",game.status.thought,365);
  setCookie("game.status.word",game.status.word,365);
  setCookie("game.status.energy",game.status.energy,365);
  setCookie("game.status.explosion",game.status.explosion,365);
  setCookie("cookieaccepted",cookieaccepted,365);
  setCookie("game.option.disableshake",game.option.disableshake(),365);
  setCookie("game.option.disablewrap",game.option.disablewrap(),365);
  setCookie("game.option.smallui",game.option.smallui(),365);
  setCookie("game.datainfo.version",game.datainfo.version,365);
  setCookie("game.datainfo.release",game.datainfo.release,365);
  setCookie("game.datainfo.lasttime",game.datainfo.lasttime,365);
  saved=new Date().getTime();
}
function loadcookie(){//used only for data migration
  //if (!document.cookie){return;}
  game.currency.existivity=Number(getCookie("game.currency.existivity"));
  game.currency.existance=Number(getCookie("game.currency.existance"));
  game.currency.etime=Number(getCookie("game.currency.etime"));
  game.currency.etimebought=Number(getCookie("game.currency.etimebought"));
  game.currency.thought=Number(getCookie("game.currency.thought"));
  game.currency.genworddelay=Number(getCookie("game.currency.genworddelay"));
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
  game.unlocked.upgrade.existability_1=getCookie("game.unlocked.upgrade.existability_1")=="true";
  game.unlocked.upgrade.existability_2=getCookie("game.unlocked.upgrade.existability_2")=="true";
  game.unlocked.upgrade.existance_1=getCookie("game.unlocked.upgrade.existance_1")=="true";
  game.unlocked.upgrade.word_1=getCookie("game.unlocked.upgrade.word_1")=="true";
  game.unlocked.upgrade.convthought_1=getCookie("game.unlocked.upgrade.convthought_1")=="true";
  game.unlocked.autobuyshop=getCookie("game.unlocked.autobuyshop")=="true";
  game.unlocked.buyautoconvexista=getCookie("game.unlocked.buyautoconvexista")=="true";
  game.unlocked.buyautoconvetime=getCookie("game.unlocked.buyautoconvetime")=="true";
  game.upgrade.convexisti_1.bought=getCookie("game.upgrade.convexisti_1.bought")=="true";
  document.getElementById("upgrade.convexisti_1.enable").checked=getCookie("game.upgrade.convexisti_1.enable")=="true";
  game.upgrade.convexisti_2.bought=getCookie("game.upgrade.convexisti_2.bought")=="true";
  document.getElementById("upgrade.convexisti_2.enable").checked=getCookie("game.upgrade.convexisti_2.enable")=="true";
  game.upgrade.existability_1=getCookie("game.upgrade.existability_1")=="true";
  game.upgrade.existability_2=getCookie("game.upgrade.existability_2")=="true";
  game.upgrade.existance_1=getCookie("game.upgrade.existance_1")=="true";
  game.upgrade.existance_2=getCookie("game.upgrade.existance_2")=="true";
  game.upgrade.etime_1=getCookie("game.upgrade.etime_1")=="true";
  game.upgrade.word_1.bought=getCookie("game.upgrade.word_1.bought")=="true";
  document.getElementById("upgrade.word_1.enable").checked=getCookie("game.upgrade.word_1.enable")=="true";
  game.upgrade.convthought_1=getCookie("game.upgrade.convthought_1")=="true";
  game.upgrade.energy_1=getCookie("game.upgrade.energy_1")=="true";
  game.upgrade.energy_2=getCookie("game.upgrade.energy_2")=="true";
  if (getCookie("game.datainfo.release")>=201805211){
    game.autobuy.existivity.bought=getCookie("game.autobuy.existivity.bought")=="true";
    document.getElementById("input.autoconvexisti").value=getCookie("game.autobuy.existivity.threshold");
    document.getElementById("autobuy.existivity.enable").checked=getCookie("game.autobuy.existivity.enable");
  }else{
    game.autobuy.existivity.bought=getCookie("game.autobuy.existivity")=="true";
    document.getElementById("input.autoconvexisti").value=getCookie("game.autobuy.existivityon");
  }
  game.autobuy.existance.bought=getCookie("game.autobuy.existance.bought")=="true";
  document.getElementById("autobuy.existance.enable").checked=getCookie("game.autobuy.existance.enable");
  game.autobuy.etime.bought=getCookie("game.autobuy.etime.bought")=="true";
  document.getElementById("autobuy.etime.enable").checked=getCookie("game.autobuy.etime.enable");
  if (getCookie("game.achievement.done").length!==0){
    game.achievement.done=JSON.parse(getCookie("game.achievement.done"));
    if (getCookie("game.datainfo.release")<201808092){
      game.achievement.done[56]=false;
    }
  }
  game.status.timeplayed=Number(getCookie("game.status.timeplayed"));
  if (getCookie("game.datainfo.release")>=201807231){
    game.status.totaltime=Number(getCookie("game.status.totaltime"));
  }else{
    game.status.totaltime=Number(getCookie("game.status.timeplayed"));
  }
  game.status.existivity=Number(getCookie("game.status.existivity"));
  game.status.existance=Number(getCookie("game.status.existance"));
  game.status.etime=Number(getCookie("game.status.etime"));
  game.status.thought=Number(getCookie("game.status.thought"));
  game.status.word=Number(getCookie("game.status.word"));
  game.status.energy=Number(getCookie("game.status.energy"));
  game.status.explosion=Number(getCookie("game.status.explosion"));
  document.getElementById("checkbox.disableshake").checked=getCookie("game.option.disableshake")=="true";
  document.getElementById("checkbox.disablewrap").checked=getCookie("game.option.disablewrap")=="true";
  document.getElementById("checkbox.smallui").checked=getCookie("game.option.smallui")=="true";
  if (getCookie("game.datainfo.release")<201807022){
    game.datainfo.lasttime=Number(getCookie("lasttime"));
  }else{
    game.datainfo.lasttime=Number(getCookie("game.datainfo.lasttime"));
  }
  if (getCookie("cookieaccepted")){
    cookieaccepted=true;
  }
}
var wasoffline=true;
function deletecookie(force=false){//used only for data migration
  if (!force&&(!window.confirm("Do you REALLY want to reset? No going back!")||!window.confirm("Are you REALLY, ＲＥＡＬＬＹ that sure want to reset? There's seriously no going back!"))) return;
  initializevars();
  savecookie();
  setCookie("game.datainfo.lasttime",0,365);
  if (!force) window.location.reload(true);
}
function savegame(){
  var save=JSON.parse(JSON.stringify(game));
  delete save.currency.existability;
  delete save.currency.convexistiearn;
  delete save.production;
  delete save.unlocked.changescr;
  delete save.unlocked.upgrade.shop;
  delete save.canbuy;
  save.upgrade.convexisti_1.enable=game.upgrade.convexisti_1.enable();
  delete save.upgrade.convexisti_1.ison;
  save.upgrade.convexisti_2.enable=game.upgrade.convexisti_2.enable();
  delete save.upgrade.convexisti_2.ison;
  save.upgrade.convexisti_3.enable=game.upgrade.convexisti_3.enable();
  delete save.upgrade.convexisti_3.ison;
  save.upgrade.convexista_1.enable=game.upgrade.convexista_1.enable();
  delete save.upgrade.convexista_1.ison;
  save.upgrade.etime_1.enable=game.upgrade.etime_1.enable();
  delete save.upgrade.etime_1.ison;
  save.upgrade.thought_1.enable=game.upgrade.thought_1.enable();
  delete save.upgrade.thought_1.ison;
  save.upgrade.word_1.enable=game.upgrade.word_1.enable();
  delete save.upgrade.word_1.ison;
  save.autobuy.existivity.enable=game.autobuy.existivity.enable();
  save.autobuy.existivity.threshold=game.autobuy.existivity.threshold();
  delete save.autobuy.existivity.ison;
  save.autobuy.existance.enable=game.autobuy.existance.enable();
  delete save.autobuy.existance.ison;
  save.autobuy.etime.enable=game.autobuy.etime.enable();
  delete save.autobuy.etime.ison;
  delete save.achievement.arrangement;
  delete save.achievement.condition;
  delete save.achievement.name;
  delete save.achievement.completed;
  save.option.disableshake=game.option.disableshake();
  save.option.disablewrap=game.option.disablewrap();
  save.option.smallui=game.option.smallui();
  localStorage.setItem("MtdLYHt.save",encodedata(JSON.stringify(save)));
  saved=new Date().getTime();
}
function loadgame(){
  var save=localStorage.getItem("MtdLYHt.save");
  if (!save){
    if (getCookie("game.currency.existivity")){
      if (getCookie("game.datainfo.release")>=201808151){
        alert("Something seems wrong with your old save... Did you modify it?");
      }
      alert("Migrating save...");
      loadcookie();
      savegame();
      deletecookie(true);
    }else{
      return false;
    }
  }
  try{
    var decodedsave=JSON.parse(decodedata(save));
  }catch(e){
    alert("Invalid save!");
    return false;
  }
  if ((decodedsave.datainfo.release>game.datainfo.release)&&!confirm("Your save somehow seems to have later version: "+decodedsave.datainfo.version+"\n Do you want to load it anyways?")){
    return false;
  }
  delete decodedsave.datainfo.version;
  delete decodedsave.datainfo.release;
  document.getElementById("upgrade.convexisti_1.enable").checked=decodedsave.upgrade.convexisti_1.enable;
  delete decodedsave.upgrade.convexisti_1.enable;
  document.getElementById("upgrade.convexisti_2.enable").checked=decodedsave.upgrade.convexisti_2.enable;
  delete decodedsave.upgrade.convexisti_2.enable;
  if (decodedsave.upgrade.convexisti_3){
    document.getElementById("upgrade.convexisti_3.enable").checked=decodedsave.upgrade.convexisti_3.enable;
    delete decodedsave.upgrade.convexisti_3.enable;
  }
  if (decodedsave.upgrade.convexista_1){
    document.getElementById("upgrade.convexista_1.enable").checked=decodedsave.upgrade.convexista_1.enable;
    delete decodedsave.upgrade.convexista_1.enable;
  }
  if (typeof decodedsave.upgrade.etime_1=="object"){
    document.getElementById("upgrade.etime_1.enable").checked=decodedsave.upgrade.etime_1.enable;
    delete decodedsave.upgrade.etime_1.enable;
  }else{
    decodedsave.upgrade.etime_1={bought:decodedsave.upgrade.etime_1};
  }
  if (decodedsave.upgrade.thought_1){
    document.getElementById("upgrade.thought_1.enable").checked=decodedsave.upgrade.thought_1.enable;
    delete decodedsave.upgrade.thought_1.enable;
  }
  document.getElementById("upgrade.word_1.enable").checked=decodedsave.upgrade.word_1.enable;
  delete decodedsave.upgrade.word_1.enable;
  document.getElementById("input.autoconvexisti").value=decodedsave.autobuy.existivity.threshold;
  delete decodedsave.autobuy.existivity.threshold;
  document.getElementById("autobuy.existivity.enable").checked=decodedsave.autobuy.existivity.enable;
  delete decodedsave.autobuy.existivity.enable;
  document.getElementById("autobuy.existance.enable").checked=decodedsave.autobuy.existance.enable;
  delete decodedsave.autobuy.existance.enable;
  document.getElementById("autobuy.etime.enable").checked=decodedsave.autobuy.etime.enable;
  delete decodedsave.autobuy.etime.enable;
  document.getElementById("checkbox.disableshake").checked=decodedsave.option.disableshake;
  delete decodedsave.option.disableshake;
  document.getElementById("checkbox.disablewrap").checked=decodedsave.option.disablewrap;
  delete decodedsave.option.disablewrap;
  document.getElementById("checkbox.smallui").checked=decodedsave.option.smallui;
  delete decodedsave.option.smallui;
  function isObject(item){
    return (item&&typeof item==='object'&&!Array.isArray(item));
  }
  function mergeDeep(target,source){
    let output=Object.assign({},target);
    if (isObject(target)&&isObject(source)){
      Object.keys(source).forEach(key=>{
        if (isObject(source[key])){
          if (!(key in target))
            Object.assign(output,{[key]:source[key]});
          else
            output[key]=mergeDeep(target[key],source[key]);
        }else{
          Object.assign(output,{[key]:source[key]});
        }
      });
    }
    return output;
  }//retrieved from https://stackoverflow.com/a/37164538
  game=mergeDeep(game,decodedsave);
  return true;
}
function exportgame(){
  savegame();
  var save=localStorage.getItem("MtdLYHt.save");
  if (!save) return;
  var textarea=document.getElementById("clipboard");
  textarea.value=save;
  showhide("clipboard",true);
  textarea.select();
  document.execCommand("copy");
  showhide("clipboard",false);
  alert("Copied to clipboard");
}
function importgame(){
  if (!window.confirm("Do you really want to import? This will overwrite your current save!")) return;
  var save=window.prompt("Paste your save.");
  if (!save){
    alert("Please put something to import.");
    return false;
  }
  if (save.charAt(save.length-2)!=":"){
    if (save=="your save"){
      earnachievement(57);
      return true;
    }else{
      alert("Invalid save");
      return false;
    }
  }
  try{
    atob(rotbase64(save.substr(0,save.length-2),-1*(save.charCodeAt(save.length-1))+128));
  }catch(e){
    alert("Invalid save");
    return false;
  }
  localStorage.setItem("MtdLYHt.save",save);
  window.location.reload(true);
  return true;
}
function deletegame(force=false){
  if (!force&&(!window.confirm("Do you REALLY want to reset? No going back!")||!window.confirm("Are you REALLY, ＲＥＡＬＬＹ that sure want to reset? There's seriously no going back!"))) return;
  localStorage.removeItem("MtdLYHt.save");
  if (!force) window.location.reload(true);
}
function showhide(x,t){
  toggleclass(x,"hidden",!t);
}
function toggleclass(x,c,t){
  var o=document.getElementById(x).className;
  if (!t){
    document.getElementById(x).className=o.replace(new RegExp(c,"g"),"");
  }else if (document.getElementById(x).className.search(c)==-1){
    document.getElementById(x).className+=" "+c;
  }
  o=document.getElementById(x).className;
  document.getElementById(x).className=o.replace(/  /g," ");
}
var timeelapsedleft=0;
var timeelapsed;
var d=new Date();
function passive(){
  if (game.datainfo.lasttime!==0){
    d=new Date();
    timeelapsedleft=(d.getTime()-game.datainfo.lasttime)/1000;
  }
  game.datainfo.lasttime=d.getTime();
  if (timeelapsedleft<=0) return;
  if (wasoffline){
    wasoffline=false;
  }else{
    game.status.timeplayed+=timeelapsedleft;
  }
    game.status.totaltime+=timeelapsedleft;
  if (timeelapsedleft>0.2){
    console.log("The game is lagging, was offline or inactive! Time elapsed: "+Math.round(timeelapsedleft*1000)+" ms, simulated with "+Math.floor(Math.log(timeelapsedleft)/Math.log(1.25)+9.2)+" ticks.");
  }
  if (timeelapsedleft>=21600) earnachievement(27);
  if (timeelapsedleft>=604800) earnachievement(29);
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
  if (game.autobuy.etime.ison()) convetime();
  if (game.autobuy.existance.ison()) convexista();
  if (game.autobuy.existivity.ison()&&(game.currency.existivity>=game.autobuy.existivity.threshold())&&!isNaN(game.autobuy.existivity.threshold())){
    convexisti();
  }
}
function updateprod(){
  game.production.existivity=(Math.floor(game.currency.existance)+1)*0.01*game.production.existanceboost.total();
  game.production.existance=game.currency.word/100;
  if (game.upgrade.word_1.ison()) game.production.existance*=Math.max(Math.min(Math.pow(1.4,Math.pow(game.currency.existance,0.16)),200),1);
  if (game.achievement.done[42]) game.production.existance*=4;
  game.production.etime=(game.currency.energy*(Math.max(Math.pow(Math.floor(game.currency.existance),0.03)-1.2,0)+Math.max(Math.pow(game.currency.existivity,0.003)-1.016,0)))/40;
  if (game.achievement.done[33]){
    game.production.etime*=1+0.01*game.achievement.completed();
  }
  if (game.upgrade.energy_1) game.production.etime*=2;
  if (game.upgrade.energy_2) game.production.etime*=Math.pow(Math.log10(6*game.currency.word+10.611),2.26)-0.1*Math.pow(2*game.currency.word*2+3,-0.36);
  if (game.unlocked.residue){
    game.production.residue=exp.pow(exp.conv(game.currency.existivity===0?game.production.existivity*timeelapsed:game.currency.existivity),exp.conv(1/3));
  }else{
    game.production.residue=[-Infinity,false];
  }
}
function updatecurr(){
  var f=game.currency.existivity;
  game.currency.existivity+=game.production.existivity*timeelapsed;
  if (game.currency.existivity>=15000) game.unlocked.upgrade.convexisti_1=true;
  if (game.unlocked.explosion&&(game.currency.existivity>=1e12)) game.unlocked.upgrade.convexisti_3=true;
  game.status.existivity+=Math.max(game.currency.existivity-f,0);
  f=Math.floor(game.currency.existance);
  game.currency.existance+=game.production.existance*timeelapsed;
  if (game.currency.existance>Math.pow(2,game.currency.etimebought+4)) game.currency.existance=Math.pow(2,game.currency.etimebought+4);
  game.status.existance+=Math.max(Math.floor(game.currency.existance)-f,0);
  f=Math.floor(game.currency.etime);
  game.currency.etime+=game.production.etime*timeelapsed;
  if (game.currency.etime>Math.round(game.currency.thought*2+4)) game.currency.etime=Math.round(game.currency.thought*2+4);
  game.status.etime+=Math.max(Math.floor(game.currency.etime)-f,0);
  game.currency.genworddelay-=game.production.genword()*timeelapsed;
  if (game.currency.genworddelay<=0){
    genword();
    game.currency.genworddelay+=1;
  }
  if (game.currency.genworddelay<=0){
    var x=Math.floor(-game.currency.genworddelay)+1;
    var p_0=(2/Math.pow(26,2)+1/Math.pow(26,3)+3/Math.pow(26,4))/5;
    if (game.upgrade.thought_1.ison()) p_0*=26/6;
    var i=0;
    if (x<100000){
      for (var n=0;n<x;n++){
        if (Math.random()<p_0) i++;
      }
    }else{
      var r=Math.random();
      var p=exp.conv(0);
      for (;(i<=Math.max(x,2500000))&&(r>Math.pow(10,p[0]));i++){
        p=exp.add(p,exp.mult(exp.mult(exp.pow(exp.conv(1-p_0),exp.conv(Math.max(x,2500000)-i)),exp.pow(exp.conv(p_0),exp.conv(i))),exp.div(exp.fact(Math.max(x,2500000)),exp.mult(exp.fact(exp.conv(i)),exp.fact(exp.conv(Math.max(x,2500000)-i))))));
      }
      i--;
      if (x>2500000) i=Math.floor(i*x/2500000);
    }
    game.currency.word+=i;
    game.status.word+=i;
    game.currency.genworddelay+=x;
  }
  game.currency.thought+=game.production.thought*timeelapsed;
  game.currency.energy+=game.production.energy*timeelapsed;
  game.currency.residue=exp.add(game.currency.residue,exp.mult(game.production.residue,exp.conv(timeelapsed)));
}
var saved=false;
function updateautosave(){
  if (!saved) return;
  if (d.getTime()-saved>=60000) savegame();
}
function updatedisp(){
  if (game.currency.convexistiearn.total()!=1){
    document.getElementById("disp.existivity2").innerHTML=notation(game.currency.convexistiearn.total());
    showhide("div.disp.existivity2",true);
  }else{
    showhide("div.disp.existivity2",false);
  }
  var exa=[];
  exa.push(game.currency.existability.base());
  exa.push(game.currency.existability.upgrade_existability_1(exa[0]));
  exa.push(game.currency.existability.upgrade_existability_2(exa[1]));
  exa.push(game.currency.existability.upgrade_existance_2(exa[2]));
  var m="";
  if ((game.currency.existabilityboost)&&!game.upgrade.convexisti_1.ison()){
    m="<span style=\"color:#009933\">(+"+Math.round(game.currency.existabilityboost*1000)/10+"%)</span>";
  }
  document.getElementById("disp.existivity").innerHTML=notation(Math.round(game.currency.existivity*100)/100);
  document.getElementById("disp.status.existivity").innerHTML=notation(Math.round(game.status.existivity*100)/100);
  if ((game.currency.existability.total()<0.01)&&(game.currency.existability.total()>=1e-8)){
    document.getElementById("disp.existability").innerHTML=(100*game.currency.existability.total()).toPrecision(2)+"%"+m;
  }else if ((game.currency.existability.total()>=0.99)&&(game.currency.existability.total()<1-1e-8)){
    document.getElementById("disp.existability").innerHTML=(100-(100-100*game.currency.existability.total()).toPrecision(2))+"%"+m;
  }else{
    document.getElementById("disp.existability").innerHTML=Math.round(1000*game.currency.existability.total())/10+"%"+m;
  }
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
    if (game.production.existanceboost.etime.total()-1<10){
      document.getElementById("disp.etime2").innerHTML="+"+notation(Math.round(game.production.existanceboost.etime.total()*100-100))+"%";
    }else{
      document.getElementById("disp.etime2").innerHTML="×"+notation(Math.round(game.production.existanceboost.etime.total()*100)/100);
    }
  }
  if (game.unlocked.thought){
    showhide("div.disp.thought",true);
    showhide("div.status.thought",true);
    document.getElementById("disp.thought").innerHTML=notation(game.currency.thought);
    document.getElementById("disp.thought2").innerHTML=notation(game.production.genword());
    document.getElementById("disp.status.thought").innerHTML=notation(game.status.thought);
    document.getElementById("disp.word").innerHTML=notation(game.currency.word);
    document.getElementById("disp.status.word").innerHTML=notation(game.status.word);
    document.getElementById("disp.thought3").innerHTML=notation(Math.round(game.production.existance*100)/100);
  }
  if (game.unlocked.energy){
    showhide("div.disp.energy",true);
    showhide("div.status.energy",true);
    document.getElementById("disp.energy").innerHTML=notation(game.currency.energy);
    document.getElementById("disp.energy2").innerHTML=game.production.etime>=0?"experience":"unexperience";
    var t=Math.abs(game.production.etime);
    var i;
    if (t===0){
      i="<span class=\"large\">0</span> seconds";
    }else if (t<1/600){
      i="<span class=\"large\">"+Math.floor(game.production.etime*3600000)/1000+"</span> seconds per <span class=\"middle\">hour</span>";
    }else if (t<0.1){
      i="<span class=\"large\">"+Math.floor(game.production.etime*60000)/1000+"</span> seconds per <span class=\"middle\">minute</span>";
    }else{
      i="<span class=\"large\">"+Math.floor(game.production.etime*100)/100+"</span> seconds per <span class=\"middle\">second</span>";
    }
    document.getElementById("disp.energy3").innerHTML=i;
    document.getElementById("disp.energy4").innerHTML=t===0?"1 per ∞ seconds":("1 per "+timeFormat(1/game.production.etime));
    document.getElementById("disp.status.energy").innerHTML=notation(game.status.energy);
  }
  if (game.unlocked.explosion){
    showhide("div.explosion",true);
    showhide("div.status.explosion",true);
    document.getElementById("disp.explosion").innerHTML=notation(game.currency.explosion);
    document.getElementById("disp.status.explosion").innerHTML=notation(game.status.explosion);
  }
  if (game.unlocked.residue){
    showhide("div.residue",true);
    document.getElementById("disp.residue").innerHTML=game.currency.residue[0]>=3?notation(game.currency.residue):(Math.pow(10,game.currency.residue[0]).toFixed(3));
    document.getElementById("disp.residue.production").innerHTML=game.production.residue[0]>=3?notation(game.production.residue):(Math.pow(10,game.production.residue[0]).toFixed(3));
  }
  document.getElementById("disp.status.timeplayed").innerHTML=timeFormat(game.status.timeplayed);
  document.getElementById("disp.status.totaltime").innerHTML=timeFormat(game.status.totaltime);
  if (game.upgrade.convexisti_1.bought){
    showhide("div.upgrade.convexisti_1.bottom",true);
    document.getElementById("disp.upgrade.convexisti_1").innerHTML=notation(Math.round(game.currency.convexistiearn.upgrade_convexisti_1()*1000)/1000);
    document.getElementById("button.upgrade.convexisti_1").innerHTML="Bought";
  }
  if (game.upgrade.convexisti_2.bought){
    showhide("div.upgrade.convexisti_2.bottom",true);
    document.getElementById("disp.upgrade.convexisti_2").innerHTML=notation(Math.round(game.currency.convexistiearn.upgrade_convexisti_2()*1000)/1000);
    document.getElementById("button.upgrade.convexisti_2").innerHTML="Bought";
  }
  if (game.upgrade.convexisti_3.bought){
    showhide("div.upgrade.convexisti_3.bottom",true);
    document.getElementById("button.upgrade.convexisti_3").innerHTML="Bought";
  }
  if (game.upgrade.existability_1){
    showhide("div.upgrade.existability_1.bottom",true);
    document.getElementById("disp.upgrade.existability_1").innerHTML=Math.round((exa[1]-exa[0])*1000)/10+"%";
    document.getElementById("button.upgrade.existability_1").innerHTML="Bought";
  }
  if (game.upgrade.existability_2){
    showhide("div.upgrade.existability_2.bottom",true);
    document.getElementById("disp.upgrade.existability_2").innerHTML=Math.round((exa[2]-exa[1])*1000)/10+"%";
    document.getElementById("button.upgrade.existability_2").innerHTML="Bought";
  }
  if (game.upgrade.existance_1){
    document.getElementById("button.upgrade.existance_1").innerHTML="Bought";
    document.getElementById("disp.upgrade.existance_1").innerHTML=Math.round(Math.log(5)/Math.log(game.production.existanceboost.etime.each())*100000)/100000;
  }
  if (game.upgrade.existance_2){
    showhide("div.upgrade.existance_2.bottom",true);
    document.getElementById("disp.upgrade.existance_2").innerHTML=Math.round((exa[3]-exa[2])*1000)/10+"%";
    document.getElementById("button.upgrade.existance_2").innerHTML="Bought";
  }
  if (game.upgrade.convexista_1.bought){
    showhide("div.upgrade.convexista_1.bottom",true);
    document.getElementById("button.upgrade.convexista_1").innerHTML="Bought";
  }
  if (game.upgrade.etime_1.bought){
    showhide("div.upgrade.etime_1.bottom",true);
    document.getElementById("button.upgrade.etime_1").innerHTML="Bought";
  }
  if (game.upgrade.thought_1.bought){
    showhide("div.upgrade.thought_1.bottom",true);
    document.getElementById("button.upgrade.word_1").innerHTML="Bought";
  }
  if (game.upgrade.word_1.bought){
    showhide("div.upgrade.word_1.bottom",true);
    document.getElementById("disp.upgrade.word_1.1").innerHTML=notation(Math.round(Math.max(Math.min(Math.pow(1.4,Math.pow(game.currency.existance,0.16)),200),1)*1000)/1000);
    document.getElementById("disp.upgrade.word_1.2").innerHTML=notation(Math.round(game.production.existanceboost.upgrade_word_1()*1000)/1000);
    document.getElementById("button.upgrade.word_1").innerHTML="Bought";
  }
  if (game.upgrade.convthought_1){
    document.getElementById("button.upgrade.convthought_1").innerHTML="Bought";
  }
  if (game.upgrade.energy_1){
    document.getElementById("button.upgrade.energy_1").innerHTML="Bought";
  }
  if (game.upgrade.energy_2){
    showhide("div.upgrade.energy_2.bottom",true);
    document.getElementById("disp.upgrade.energy_2").innerHTML=notation(Math.pow(Math.log10(6*game.currency.word+10.611),2.26)-0.1*Math.pow(2*game.currency.word*2+3,-0.36));
    document.getElementById("button.upgrade.energy_2").innerHTML="Bought";
  }
  if (game.currency.energy>=5){
    if (!game.option.disableshake()){
      document.body.style.position="absolute";
      document.body.style.top=Math.random()*5+"px";
      document.body.style.left=Math.random()*5+"px";
      document.body.style.width="100%";
      document.body.style.height="100%";
    }else{
      document.body.style.position="";
      document.body.style.top="";
      document.body.style.left="";
      document.body.style.width="";
      document.body.style.height="";
    }
    showhide("div.disableshake",true);
  }else{
    document.body.style.position="";
    document.body.style.top="";
    document.body.style.left="";
    document.body.style.width="";
    document.body.style.height="";
    showhide("div.disableshake",false);
  }
  if (game.option.disablewrap()){
    document.getElementById("disp.currency").style.whiteSpace="nowrap";
  }else{
    document.getElementById("disp.currency").style.whiteSpace="";
  }
  if (game.option.smallui()){
    document.getElementById("disp.currency").style.zoom="80%";
  }else{
    document.getElementById("disp.currency").style.zoom="";
  }
  if (saved) document.getElementById("disp.saved").innerHTML="Saved "+Math.floor((d.getTime()-saved)/10)/100+" seconds ago"
}
function updatebutton(){
  toggleclass("button.convexisti","unavailable",!game.canbuy.existance());
  if (document.getElementById("button.convexista").className.search("hidden")!=-1){
    if (game.unlocked.convexista) showhide("button.convexista",true)
  }else{
    toggleclass("button.convexista","unavailable",!game.canbuy.etime());
  }
  if (document.getElementById("button.convetime").className.search("hidden")!=-1){
    if (game.unlocked.convetime) showhide("button.convetime",true);
  }else{
    toggleclass("button.convetime","unavailable",!game.canbuy.thought());
  }
  if (document.getElementById("button.convthought").className.search("hidden")!=-1){
    if (game.unlocked.convthought) showhide("button.convthought",true);
  }else{
    toggleclass("button.convthought","unavailable",!game.canbuy.energy());
  }
  if (document.getElementById("button.convenergy").className.search("hidden")!=-1){
    if (game.unlocked.convenergy) showhide("button.convenergy",true);
  }else{
    toggleclass("button.convenergy","unavailable",!game.canbuy.explosion());
  }
  toggleclass("button.buyautoconvexisti","unavailable",!game.canbuy.autoconvexisti());
  if (document.getElementById("button.buyautoconvexista").className=="hidden"){
    if (game.unlocked.buyautoconvexista) showhide("button.buyautoconvexista",true);
  }else{
    toggleclass("button.buyautoconvexista","unavailable",!game.canbuy.autoconvexista());
  }
  if (document.getElementById("button.buyautoconvetime").className=="hidden"){
    if (game.unlocked.buyautoconvetime) showhide("button.buyautoconvetime",true);
  }else{
    toggleclass("button.buyautoconvetime","unavailable",!game.canbuy.autoconvetime());
  }
  if ((document.getElementById("form.autoconvexisti").className=="hidden")&&game.autobuy.existivity.bought) showhide("form.autoconvexisti",true);
  if ((document.getElementById("div.autobuy.existance.enable").className=="hidden")&&game.autobuy.existance.bought) showhide("div.autobuy.existance.enable",true);
  if ((document.getElementById("div.autobuy.etime.enable").className=="hidden")&&game.autobuy.etime.bought) showhide("div.autobuy.etime.enable",true);
  toggleclass("button.upgrade.convexisti_1","unavailable",!game.canbuy.upgrade_convexisti_1());
  toggleclass("button.upgrade.convexisti_2","unavailable",!game.canbuy.upgrade_convexisti_2());
  toggleclass("button.upgrade.convexisti_3","unavailable",!game.canbuy.upgrade_convexisti_3());
  toggleclass("button.upgrade.existability_1","unavailable",!game.canbuy.upgrade_existability_1());
  toggleclass("button.upgrade.existability_2","unavailable",!game.canbuy.upgrade_existability_2());
  toggleclass("button.upgrade.existance_1","unavailable",!game.canbuy.upgrade_existance_1());
  toggleclass("button.upgrade.existance_2","unavailable",!game.canbuy.upgrade_existance_2());
  toggleclass("button.upgrade.convexista_1","unavailable",!game.canbuy.upgrade_convexista_1())
  toggleclass("button.upgrade.etime_1","unavailable",!game.canbuy.upgrade_etime_1());
  toggleclass("button.upgrade.thought_1","unavailable",!game.canbuy.upgrade_thought_1());
  toggleclass("button.upgrade.word_1","unavailable",!game.canbuy.upgrade_word_1());
  toggleclass("button.upgrade.convthought_1","unavailable",!game.canbuy.upgrade_convthought_1());
  toggleclass("button.upgrade.energy_1","unavailable",!game.canbuy.upgrade_energy_1());
  toggleclass("button.upgrade.energy_2","unavailable",!game.canbuy.upgrade_energy_2());
  toggleclass("button.unlock.residue","unavailable",!game.canbuy.residue());
  if (game.unlocked.changescr()) showhide("changescr",true);
  if (game.unlocked.upgrade.shop()) document.getElementById("button.changescr_shop_upgrade").className="changescr";
  if (game.unlocked.upgrade.convexisti_1) showhide("upgrade.convexisti_1",true);
  if (game.unlocked.upgrade.convexisti_2) showhide("upgrade.convexisti_2",true);
  if (game.unlocked.upgrade.convexisti_3) showhide("upgrade.convexisti_3",true);
  if (game.unlocked.upgrade.existability_1) showhide("upgrade.existability_1",true);
  if (game.unlocked.upgrade.existability_2) showhide("upgrade.existability_2",true);
  if (game.unlocked.upgrade.existance_1) showhide("upgrade.existance_1",true);
  if (game.unlocked.upgrade.convexista_1) showhide("upgrade.convexista_1",true);
  if (game.unlocked.upgrade.thought_1) showhide("upgrade.thought_1",true);
  if (game.unlocked.upgrade.word_1) showhide("upgrade.word_1",true);
  if (game.unlocked.upgrade.energy_2) showhide("upgrade.energy_2",true);
  if (game.unlocked.upgrade.convthought_1) showhide("upgrade.convthought_1",true);
  if (game.upgrade.etime_1.bought) showhide("upgrade.energy_1",true);
  if (game.upgrade.energy_1) showhide("upgrade.existance_2",true);
  if (game.status.explosion>=10) showhide("unlock.residue",true);
  if (game.unlocked.autobuyshop) showhide("button.changescr_shop_autoconv",true);
  if (game.achievement.done[4]) showhide("button.changescr_status",true);
  if (game.achievement.done[6]) showhide("button.changescr_achievement",true);
  if (game.autobuy.existivity.bought) document.getElementById("form.autoconvexisti").className="";
  document.getElementById("button.convexista").innerHTML="Experience.<br/>Cost: "+notation(Math.round(Math.pow(2,game.currency.etimebought+4)))+" existances";
  document.getElementById("button.convetime").innerHTML="Thought for the words.<br/>Cost: "+notation(Math.round(game.currency.thought*2+4))+" experienced time,<br/>  "+notation(Math.round(50*Math.pow(game.currency.thought+2,2)))+" existivity";
  var a=(Math.floor(Math.pow(game.currency.energy,1.8))*5+15);
  if (game.upgrade.convthought_1) a=Math.ceil(a/4);
  document.getElementById("button.convthought").innerHTML="Be energetic!!<br/>Cost: "+notation(Math.floor(game.currency.energy*(game.currency.energy+1)/2+3))+" thoughts,<br/>  "+notation(a)+" words thought";
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
  if (!game.canbuy.existance()) return;
  if (game.upgrade.convexisti_1.ison()){
    if (Math.random()<game.currency.existability.total()){
      game.currency.existance+=game.currency.convexistiearn.total();
      game.status.existance+=game.currency.convexistiearn.total();
      updateprod();
      if (game.currency.existance>=10) game.unlocked.convexista=true;
      if (game.currency.existance>=30) game.unlocked.autobuyshop=true;
      if (game.currency.existance>=80) game.unlocked.upgrade.convexisti_2=true;
      if (game.currency.existance>=1500) game.unlocked.upgrade.existability_1=true;
      if (game.currency.existability.total()<0.05) earnachievement(10);
      if (game.currency.existability.total()<0.005) earnachievement(11);
      if (game.currency.existability.total()<0.005) earnachievement(23);
    }else{
      earnachievement(2);
      if (game.currency.existability.total()>0.98) earnachievement(12);
      if (game.currency.existability.total()>0.995) earnachievement(13);
      if (game.currency.existability.total()>0.99999) earnachievement(24);
    }
    game.currency.existivity=0;
  }else{
    if (Math.random()<game.currency.existability.total()){
      game.currency.existance+=game.currency.convexistiearn.total();
      game.status.existance+=game.currency.convexistiearn.total();
      game.unlocked.existance=true;
      updateprod();
      if (game.currency.existance>=10) game.unlocked.convexista=true;
      if (game.currency.existance>=30) game.unlocked.autobuyshop=true;
      if (game.currency.existance>=80) game.unlocked.upgrade.convexisti_2=true;
      if (game.currency.existance>=1500) game.unlocked.upgrade.existability_1=true;
      if (game.currency.existability.total()<0.05) earnachievement(10);
      if (game.currency.existability.total()<0.005) earnachievement(11);
      if (game.currency.existability.total()<0.005) earnachievement(23);
    }else{
      earnachievement(2);
      if (game.currency.existability.total()>0.98) earnachievement(12);
      if (game.currency.existability.total()>0.995) earnachievement(13);
      if (game.currency.existability.total()>0.99999) earnachievement(24);
      game.currency.existabilityboost+=game.currency.existability.total()/2.5;
    }
    game.currency.existabilityboost/=2;
    if (game.currency.existivity>=10){
      game.currency.existivity=Math.pow(game.currency.existivity,0.61);
    }else{
      game.currency.existivity=0;
    }
  }
  if (game.currency.existabilityboost<0.01) game.currency.existabilityboost=0;
}
function convexista(){
  if (!game.canbuy.etime()) return;
  game.currency.etime++;
  game.status.etime++;
  game.currency.etimebought++;
  game.currency.existivity=0;
  game.currency.existabilityboost=0;
  game.currency.existance=game.currency.etimebought;
  if (game.upgrade.convexista_1.ison()) game.currency.existance+=Math.floor(Math.pow(Math.floor(game.currency.etime),2)/5);
  if (game.upgrade.etime_1.ison()) game.currency.existance+=5;
  game.unlocked.etime=true;
  updateprod();
  if (game.currency.etime>=2) game.unlocked.convetime=true;
  if (game.currency.etime>=20) game.unlocked.upgrade.existability_2=true;
 if (game.unlocked.explosion&&(game.currency.experience>=8)) game.unlocked.upgrade.convexisti_3=true;
}
function convetime(){
  if (!game.canbuy.thought()) return;
  game.currency.thought++;
  game.status.thought++;
  if (game.achievement.done[36]&&game.achievement.done[37]) game.currency.word+=5;
  game.currency.etime=0;
  game.currency.etimebought=0;
  game.currency.existivity=0;
  game.currency.existabilityboost=0;
  game.currency.existance=0;
  if (game.upgrade.convexista_1.ison()) game.currency.existance+=Math.floor(Math.pow(Math.floor(game.currency.etime),2)/5);
  if (game.upgrade.etime_1.ison()) game.currency.existance+=5;
  game.unlocked.thought=true;
  updateprod();
  if (game.currency.thought>=2) game.unlocked.convthought=true;
  if (game.unlocked.explosion&&(game.currency.thought>=7)) game.unlocked.upgrade.thought_1=true;
  if (game.currency.thought>=4){
    game.unlocked.buyautoconvexista=true;
    game.unlocked.upgrade.word_1=true;
  }
}
function genword(){
  var word="";
  var characterset="abcdefghijklmnopqrstuvwxyz";
  var firstletters="mtdlyh";
  var wordlength=Math.floor(Math.random()*5)+1;
  for (var i=0;i<wordlength;i++){
    if (game.upgrade.thought_1.ison()&&(i===0)){
      word+=firstletters.charAt(Math.floor(Math.random()*firstletters.length));
    }else{
      word+=characterset.charAt(Math.floor(Math.random()*characterset.length));
    }
  }
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
  if (!game.canbuy.energy()) return;
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
  if (game.upgrade.convexista_1.ison()) game.currency.existance+=Math.floor(Math.pow(Math.floor(game.currency.etime),2)/5);
  if (game.upgrade.etime_1.ison()) game.currency.existance+=5;
  game.unlocked.energy=true;
  updateprod();
  game.unlocked.upgrade.existance_1=true;
  if (game.currency.energy>=3) game.unlocked.upgrade.convthought_1=true;
  if (game.currency.energy>=5) game.unlocked.convenergy=true;
}
function convenergy(){
  if (!game.canbuy.explosion()) return;
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
  if (game.upgrade.convexista_1.ison()) game.currency.existance+=Math.floor(Math.pow(Math.floor(game.currency.etime),2)/5);
  if (game.upgrade.etime_1.ison()) game.currency.existance+=5;
  if (game.currency.existance===0) game.unlocked.existance=false;
  game.unlocked.etime=false;
  game.unlocked.thought=false;
  game.unlocked.energy=false;
  game.unlocked.convexista=false;
  game.unlocked.convetime=false;
  game.unlocked.convthought=false;
  game.unlocked.convenergy=false;
  showhide("div.disp.existance",false);
  showhide("div.disp.etime",false);
  showhide("div.disp.thought",false);
  showhide("div.disp.energy",false);
  showhide("button.convexista",false);
  showhide("button.convetime",false);
  showhide("button.convthought",false);
  showhide("button.convenergy",false);
  game.unlocked.explosion=true;
  updateprod();
  game.unlocked.upgrade.etime_1=true;
  if (game.status.explosion>=2) game.unlocked.buyautoconvetime=true;
}
function buy_upgrade_convexisti_1(){
  if (!game.canbuy.upgrade_convexisti_1()) return;
  game.currency.existivity-=200000;
  game.upgrade.convexisti_1.bought=true;
}
function buy_upgrade_convexisti_2(){
  if (!game.canbuy.upgrade_convexisti_2()) return;
  game.currency.existance-=150;
  game.upgrade.convexisti_2.bought=true;
}
function buy_upgrade_convexisti_3(){
  if (!game.canbuy.upgrade_convexisti_3()) return;
  game.currency.explosion-=3;
  game.currency.existivity-=614.778e12;
  game.upgrade.convexisti_3.bought=true;
}
function buy_upgrade_existability_1(){
  if (!game.canbuy.upgrade_existability_1()) return;
  game.currency.existance-=4000;
  game.upgrade.existability_1=true;
}
function buy_upgrade_existability_2(){
  if (!game.canbuy.upgrade_existability_2()) return;
  game.currency.etime-=20;
  game.currency.etimebought=Math.floor(Math.min(game.currency.etimebought,game.currency.etime));
  game.currency.existance-=700000;
  game.upgrade.existability_2=true;
}
function buy_upgrade_existance_1(){
  if (!game.canbuy.upgrade_existance_1()) return;
  game.currency.energy-=1;
  game.upgrade.existance_1=true;
}
function buy_upgrade_existance_2(){
  if (!game.canbuy.upgrade_existance_2()) return;
  game.currency.explosion-=4;
  game.upgrade.existance_2=true;
}
function buy_upgrade_convexista_1(){
  if (!game.canbuy.upgrade_convexista_1()) return;
  game.currency.explosion-=1;
  game.currency.experience-=12;
  game.upgrade.convexista_1.bought=true;
}
function buy_upgrade_etime_1(){
  if (!game.canbuy.upgrade_etime_1()) return;
  game.currency.explosion-=1;
  game.currency.existance+=5;
  showhide("div.disp.existance",true);
  game.unlocked.existance=true;
  game.upgrade.etime_1.bought=true;
}
function buy_upgrade_thought_1(){
  if (!game.canbuy.upgrade_thought_1()) return;
  game.currency.explosion-=1000;
  game.currency.thought-=10;
  game.currency.word-=700;
  game.upgrade.thought_1.bought=true;
}
function buy_upgrade_word_1(){
  if (!game.canbuy.upgrade_word_1()) return;
  game.currency.thought-=2;
  game.currency.word-=100;
  game.currency.existance-=1000;
  game.upgrade.word_1.bought=true;
}
function buy_upgrade_convthought_1(){
  if (!game.canbuy.upgrade_convthought_1()) return;
  game.currency.energy-=4;
  game.currency.thought-=5;
  game.upgrade.convthought_1=true;
}
function buy_upgrade_energy_1(){
  if (!game.canbuy.upgrade_energy_1()) return;
  game.currency.explosion-=2;
  game.upgrade.energy_1=true;
}
function buy_upgrade_energy_2(){
  if (!game.canbuy.upgrade_energy_2()) return;
  game.currency.word-=500;
  game.upgrade.energy_2=true;
}
function buy_unlock_residue(){
  if (!game.canbuy.residue()) return;
  game.currency.explosion-=1000;
  game.unlocked.residue=true;
}
function buyautoconvexisti(){
  if (!game.canbuy.autoconvexisti()) return;
  game.currency.existance-=200;
  game.autobuy.existivity.bought=true;
}
function buyautoconvexista(){
  if (!game.canbuy.autoconvexista()) return;
  game.currency.thought-=6;
  game.currency.word-=60;
  game.currency.etime-=10;
  game.currency.etimebought=Math.floor(Math.min(game.currency.etimebought,game.currency.etime));
  game.autobuy.existance.bought=true;
}
function buyautoconvetime(){
  if (!game.canbuy.autoconvetime()) return;
  game.currency.explosion-=3;
  game.currency.energy-=4;
  game.autobuy.etime.bought=true;
}
var achievinterval;
var achievshown=false;
function updateachiev(){
  var t=false;
  for (var y=0;y<game.achievement.arrangement.length;y++){
    for (var x=0;x<game.achievement.arrangement[y].length;x++){
      var a=game.achievement.arrangement[y][x];
      if (game.achievement.arrangement[y][x]!=-1){
        if (!game.achievement.done[a]&&eval(game.achievement.condition[a])){
          earnachievement(a);
        }
      }
    }
  }
}
function earnachievement(a){
  if (game.achievement.done[a]) return;
  game.achievement.done[a]=true;
  var m=game.achievement.name[a];
  var s=m.search(",");
  m=m.replace("$",",");
  if (achievshown){
    var n=document.getElementById("achievementearned").innerHTML;
  }else{
    var n="";
  }
  if (n!="") n+="<br/>";
  n+="<span style=\"color:#202020;\" title=\""+m.substr(s+1,m.length-s-1)+"\">"+m.substr(0,s)+"</span>";
  document.getElementById("achievementearned").innerHTML=n;
  showhide("achievementearned",true);
  clearInterval(achievinterval);
  achievinterval=setTimeout(function (){showhide("achievementearned",false);achievshown=false;},7500);
  achievshown=true;
  achievementupdate();
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
        o.innerHTML=m.substr(0,s)+"<span class=\"tooltiptext\">"+m.substr(s+1,m.length-s-1)+"</span>";
        o.className="achievement tooltip";
        if (game.achievement.done[a]){
          o.className+=" done";
        }else{
          var t=false;
          for (var u=-2;u<=2;u++){
            for (var v=-2+Math.abs(u);v<=2-Math.abs(u);v++){
              if (typeof game.achievement.arrangement[y+u]!=="undefined"){
                if (game.achievement.done[game.achievement.arrangement[y+u][x+v]]){
                  t=true;
                  break;
                }
              }
            }
          }
          if (!t) o.className+=" invisible";
        }
      }
    }
  }
}
function changelogtoggle(t){
  showhide("changelog",t);
}
var passiveinterval;
function onload(){
  console.log("Script Initilizing:"+(new Date).getTime());
  console.time("took");
  loadgame();
  saved=new Date().getTime();
  if (!Math.cbrt){ //define Math.cbrt() for older enviroments
    Math.cbrt=function (x){
      var y=Math.pow(Math.abs(x),1/3);
      return x<0?-y:y;
    };
  }
  document.getElementById("table.achievement").innerHTML+=("<tr>"+"<td></td>".repeat(10)+"</tr>").repeat(game.achievement.arrangement.length);
  showhide("div.loading",false);
  passiveinterval=setInterval(passive,100);
  console.log("Loaded:"+(new Date).getTime());
  console.timeEnd("took");
}
