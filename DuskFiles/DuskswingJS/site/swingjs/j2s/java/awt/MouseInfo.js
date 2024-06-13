(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Point','java.awt.PointerInfo']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MouseInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPointerInfo$',  function () {
var point=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
var retval=Clazz.new_($I$(2,1).c$$java_awt_GraphicsDevice$java_awt_Point,[null, point]);
return retval;
}, 1);

Clazz.newMeth(C$, 'getNumberOfButtons$',  function () {
return 2;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
