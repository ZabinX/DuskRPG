(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "A2SContainer");

Clazz.newMeth(C$, 'fixAWTPaint$java_awt_Component$Class',  function (c, cl) {
var f=$I$(1).getJ2SAlias$O$S(c, "paint$java_awt_Graphics");
if (!$I$(1).isForClass$O$Class(f, cl) && f.toString().indexOf$S("C$.superclazz.prototype.paint$java_awt_Graphics.apply(this") < 0 ) {

c.paint$java_awt_Graphics = function(g) { cl.$clazz$.prototype.paint$java_awt_Graphics.apply(c,[g]);
f.apply(c,[g]);
}
}}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
