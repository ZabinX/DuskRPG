(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.P3']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "P3d", null, 'javajs.util.T3d');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['unlikely','javajs.util.P3d']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'newP$javajs_util_T3d',  function (t) {
var p=Clazz.new_(C$);
p.x=t.x;
p.y=t.y;
p.z=t.z;
return p;
}, 1);

Clazz.newMeth(C$, 'getUnlikely$',  function () {
return (C$.unlikely == null  ? C$.unlikely=C$.new3$D$D$D(3.141592653589793, 2.718281828459045, (8.539734222673566)) : C$.unlikely);
}, 1);

Clazz.newMeth(C$, 'new3$D$D$D',  function (x, y, z) {
var p=Clazz.new_(C$);
p.x=x;
p.y=y;
p.z=z;
return p;
}, 1);

Clazz.newMeth(C$, 'newPd$javajs_util_T3',  function (a) {
return C$.new3$D$D$D(a.x, a.y, a.z);
}, 1);

Clazz.newMeth(C$, 'newA$DA',  function (a) {
return C$.new3$D$D$D(a[0], a[1], a[2]);
}, 1);

Clazz.newMeth(C$, 'copyToP3$',  function () {
return $I$(1).new3$F$F$F(this.x, this.y, this.z);
});

Clazz.newMeth(C$, 'asP3$',  function () {
{
return this;
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
