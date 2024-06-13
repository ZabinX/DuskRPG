(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.T3d']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "T4d", null, 'javajs.util.T3d');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['w']]]

Clazz.newMeth(C$, 'set4$D$D$D$D',  function (x, y, z, w) {
this.x=x;
this.y=y;
this.z=z;
this.w=w;
});

Clazz.newMeth(C$, 'scale4$D',  function (s) {
this.scale$D(s);
this.w*=s;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).doubleToIntBits$D(this.x) ^ $I$(1).doubleToIntBits$D(this.y) ^ $I$(1).doubleToIntBits$D(this.z) ^ $I$(1).doubleToIntBits$D(this.w) ;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.T4"))) return false;
var t=o;
return (this.x == t.x  && this.y == t.y   && this.z == t.z   && this.w == t.w  );
});

Clazz.newMeth(C$, 'toString',  function () {
return "(" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + ", " + new Double(this.z).toString() + ", " + new Double(this.w).toString() + ")" ;
});

Clazz.newMeth(C$, 'toJSON$',  function () {
return "[" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + ", " + new Double(this.z).toString() + ", " + new Double(this.w).toString() + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
