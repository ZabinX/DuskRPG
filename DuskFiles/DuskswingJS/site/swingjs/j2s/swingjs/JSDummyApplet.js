(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSDummyApplet", null, 'javax.swing.JApplet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['runMain$swingjs_JSAppletViewer$SA','runMain'],  function (v, args) {
var className=v.main;
var theClass=null;
try {
theClass=Clazz.forName(className);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.out.println$S("Running main but cannot find class " + className);
$I$(1,"alert$O",["Cannot find class " + className + " for running main(args)" ]);
e.printStackTrace$();
return null;
} else {
throw e;
}
}
System.out.println$S("Running main(args) in class " + className);

setTimeout(function(){ v.applet.app = theClass.$clazz$.main$SA.call(null, args || []) || null;
$I$(1).readyCallback$S$S$java_awt_JSComponent$swingjs_JSAppletViewer(v.appletName, v.fullName, v.applet, v);

},1);
return theClass;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
