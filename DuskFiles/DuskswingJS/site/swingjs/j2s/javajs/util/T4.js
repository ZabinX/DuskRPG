(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.T3']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "T4", null, 'javajs.util.T3');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['w']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'set4$F$F$F$F',  function (x, y, z, w) {
this.x=x;
this.y=y;
this.z=z;
this.w=w;
});

Clazz.newMeth(C$, 'scale4$F',  function (s) {
this.scale$F(s);
this.w*=s;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).floatToIntBits$F(this.x) ^ $I$(1).floatToIntBits$F(this.y) ^ $I$(1).floatToIntBits$F(this.z) ^ $I$(1).floatToIntBits$F(this.w) ;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.T4"))) return false;
var t=o;
return (this.x == t.x  && this.y == t.y   && this.z == t.z   && this.w == t.w  );
});

Clazz.newMeth(C$, 'toString',  function () {
return "(" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + ", " + new Float(this.z).toString() + ", " + new Float(this.w).toString() + ")" ;
});

Clazz.newMeth(C$, 'toJSON$',  function () {
return "[" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + ", " + new Float(this.z).toString() + ", " + new Float(this.w).toString() + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
