'use strict';
var exp=exp||{}
exp=(function (){
  return{
    add:function (a,b){
      if (a[1]&&b[1]||(!a[1])&&(!b[1])){
        return [Math.max(a[0],b[0])+Math.log10(1+Math.pow(10,-Math.abs(a[0]-b[0]))),a[1]];
      }else{
        return [Math.max(a[0],b[0])+Math.log10(1-Math.pow(10,-Math.abs(a[0]-b[0]))),!a[1]&&(a[0]<b[0])||a[1]&&(a[0]>b[0])];
      }
    },
    sub:function (a,b){return exp.add(a,[b[0],!b[1]]);},
    mult:function (a,b){return [a[0]+b[0],!a[1]&&b[1]||a[1]&&!b[1]];},
    div:function (a,b){return exp.mult(a,[-b[0],b[1]]);},
    pow:function (a,b){
      if (a[1]){
        return [NaN,false];
      }else{
        return [a[0]*Math.pow(10,b[0])*Math.pow(-1,b[1]),false];
      }
    },
    sqrt:function (a){return exp.root(a,exp.conv(2));},
    cbrt:function (a){return exp.root(a,exp.conv(3));},
    root:function (a,b){return exp.pow(a,[-b[0],b[1]]);},
    log:function (a,b){
      if (a[1]||b[1]||(b[0]==0)){
        return [NaN,false];
      }else{
        return [Math.log10(Math.abs(a[0]/b[0])),(a[0]<0)&&(b[0]>0)||(a[0]>0)&&(b[0]<0)];
      }
    },
    fact:function (a){
      if (a[1]){return [NaN,false];}
      var A=Math.pow(10,a[0]);
      if (A<=30){
        var f=parseFloat("0."+(String(A)).split(".")[1]);
        if (isNaN(f)||(f==0)){f=1;}
        var x=1;
        var y=1;
        var z=1;
        var i;
        for (i=f;i<=A;i++){
          x*=i;
        }
        for (i=z+1;i<=f-1;i++){
          y*=i;
        }
        for (i=1;i<=500;i++){ //middle statement may be modified for precision
          z*=Math.pow((1+1/i),(f))/(1+f/i);
        }
        return exp.conv(x/(f*y)*z);
      }else{
        return exp.mult(exp.sqrt(exp.mult(exp.conv(2*Math.PI),a)),exp.pow(exp.div(a,exp.conv(Math.E)),a));
      }
    },
    sfc1:function(a){
      if (a[1]){return [NaN,false];}
      if (!isFinite(Math.pow(10,a[0]))){return [Infinity,false];}
      var f=exp.conv(1);
      var i;
      for (i=1;i<=Math.round(Math.pow(10,a[0]));i++){
        f=exp.mult(f,exp.fact(exp.conv(i)));
      }
      return f;
    },
    sfc2:function (a){
      if (a[1]){return [NaN,false];}
      return exp.tetr(exp.fact(a),exp.fact(a));
    },
    sfc3:function (a){
      if (a[1]){return [NaN,false];}
      if (a[0]>3){return [Infinity,false];}
      var A=Math.round(Math.pow(10,a[0]));
      var r=[0,false];
      var i;
      var j;
      var f;
      for (i=1;i<=A;i++){
        f=exp.mult(exp.sub([i,false],exp.conv(1)),exp.conv(A/9));
        for (j=1;j<=A-i;j++){
          f=exp.fact(f);
        }
        r=exp.mult(r,f);
      }
      return r;
    },
    hfac:function (a){
      if (a[1]){return [NaN,false];}
      if (a[0]>Math.log10(1.53)+153){return [Infinity,false];}
      return exp.mult(exp.mult(exp.conv(1.2824271291),exp.pow(exp.conv(Math.round(Math.pow(10,a[0]))),exp.div(exp.add(exp.add(exp.mult(exp.conv(6),exp.pow(exp.conv(Math.round(Math.pow(10,a[0]))),exp.conv(2))),exp.mult(exp.conv(6),exp.conv(Math.round(Math.pow(10,a[0]))))),exp.conv(1)),exp.conv(12)))),exp.pow(exp.conv(Math.E),exp.mult(exp.conv(-1),exp.div(exp.pow(exp.conv(Math.round(Math.pow(10,a[0]))),exp.conv(2)),exp.conv(4)))));
    },
    exfc:function (a){
      if (a[1]){return [NaN,false];}
      if (a[0]>1){return [Infinity,false];}
      var A=exp.conv(Math.round(Math.power(10,a[0])));
      var f=[0,false];
      var i;
      for (i=2;i<=A;i++){
        f=exp.pow(exp.comv(i),f);
      }
      return f;
    },
    tetr:function (a,b){
      if (a[1]){return [NaN,false];}
      if (b[0]>2){return [Infinity,false];}
      var B=Math.pow(10,b[0])*Math.pow(-1,b[1]);
      var z=B-Math.ceil(B);
      var f=[Math.log10(1+(2*a[0]*Math.log(10))/(1+a[0]*Math.log(10))*z-(1-a[0]*Math.log(10))/(1+a[0]*Math.log(10))*Math.pow(z,2)),false];
      var i;
      if (B>0){
        for (i=0;i<Math.ceil(B);i++){
          f=exp.pow(a,f);
        }
      }
      if (B<=-1){
        for (i=0;i>Math.ceil(B);i--){
          f=exp.log(f,a);
        }
      }
      return f;
    },
    slog:function (a,b){
      if (a[1]||b[1]){return [NaN,false];}
      var z=a;
      var f=[0,false];
      while ((z[0]<=0)&&!z[1]){
        f=exp.add(f,[0,false]);
        z=exp.log(z,b);
      }
      while (z[1]||!isFinite(z[0])&&z[0]<0){
        f=exp.sub(f,[0,false]);
        z=exp.pow(b,z);
      }
      f=exp.add(f,exp.conv(-1-(2*a[0])/(1+a[0])*Math.pow(10,z[0])*Math.pow(-1,z[1])+(1-a[0])/(1+a[0])*Math.pow(Math.pow(10,z[0]),2)));
      return f;
    },
    conv:function (a){return [Math.log10(Math.abs(a)),a<0];},
    text:function (a,m){
      var n="";
      if (a[1]){n="-";}
      if (isFinite(a[0])){
        return n+String(Math.pow(10,a[0]-Math.floor(a[0])))+m+String(Math.floor(a[0]));
      }else{
        if (isNaN(a[0])){return n+"NaN";}
        if (a[0]>0){
          return n+"NaN"+m+"Infinity";
        }else{
          return n+"0";
        }
      }
    }
  };
}());
