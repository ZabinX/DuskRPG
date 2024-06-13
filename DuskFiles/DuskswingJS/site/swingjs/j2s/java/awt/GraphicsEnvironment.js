(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSUtil','java.awt.Toolkit','java.awt.Point','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphicsEnvironment");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['headless','Boolean']]
,['O',['localEnv','java.awt.GraphicsEnvironment']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLocalGraphicsEnvironment$',  function () {
if (C$.localEnv == null ) {
C$.localEnv=$I$(1).getInstance$S("swingjs.JSGraphicsEnvironment");
}return C$.localEnv;
}, 1);

Clazz.newMeth(C$, 'isHeadless$',  function () {
return C$.getHeadlessProperty$();
}, 1);

Clazz.newMeth(C$, 'getHeadlessProperty$',  function () {
return ("true" === System.getProperty$S("java.awt.headless") );
}, 1);

Clazz.newMeth(C$, 'checkHeadless$',  function () {
}, 1);

Clazz.newMeth(C$, 'isHeadlessInstance$',  function () {
return (this.headless != null  ? this.headless : (this.headless=C$.getHeadlessProperty$() ? Boolean.TRUE : Boolean.FALSE)).booleanValue$();
});

Clazz.newMeth(C$, 'registerFont$java_awt_Font',  function (font) {
return true;
});

Clazz.newMeth(C$, 'preferLocaleFonts$',  function () {
});

Clazz.newMeth(C$, 'preferProportionalFonts$',  function () {
});

Clazz.newMeth(C$, 'getCenterPoint$',  function () {
var dim=$I$(2).getDefaultToolkit$().getScreenSize$();
return Clazz.new_([(dim.width/2|0), (dim.height/2|0)],$I$(3,1).c$$I$I);
});

Clazz.newMeth(C$, 'getMaximumWindowBounds$',  function () {
var dim=$I$(2).getDefaultToolkit$().getScreenSize$();
return Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, dim.width, dim.height]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
