(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.AWTKeyStroke']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyStroke", null, 'java.awt.AWTKeyStroke');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$C$I$I$Z',  function (keyChar, keyCode, modifiers, onKeyRelease) {
;C$.superclazz.c$$C$I$I$Z.apply(this,[keyChar, keyCode, modifiers, onKeyRelease]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getKeyStroke$C',  function (keyChar) {
{
$I$(1,"registerSubclass$Class",[Clazz.getClass(C$)]);
return $I$(1).getAWTKeyStroke$C(keyChar);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$C$Z',  function (keyChar, onKeyRelease) {
return Clazz.new_(C$.c$$C$I$I$Z,[keyChar, 0, 0, onKeyRelease]);
}, 1);

Clazz.newMeth(C$, 'getKeyStroke$Character$I',  function (keyChar, modifiers) {
{
$I$(1,"registerSubclass$Class",[Clazz.getClass(C$)]);
return $I$(1).getAWTKeyStroke$Character$I(keyChar, modifiers);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$I$I$Z',  function (keyCode, modifiers, onKeyRelease) {
{
$I$(1,"registerSubclass$Class",[Clazz.getClass(C$)]);
return $I$(1).getAWTKeyStroke$I$I$Z(keyCode, modifiers, onKeyRelease);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$I$I',  function (keyCode, modifiers) {
{
$I$(1,"registerSubclass$Class",[Clazz.getClass(C$)]);
return $I$(1).getAWTKeyStroke$I$I(keyCode, modifiers);
}}, 1);

Clazz.newMeth(C$, 'getKeyStrokeForEvent$java_awt_event_KeyEvent',  function (anEvent) {
{
$I$(1,"registerSubclass$Class",[Clazz.getClass(C$)]);
return $I$(1).getAWTKeyStrokeForEvent$java_awt_event_KeyEvent(anEvent);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$S',  function (s) {
if (s == null  || s.length$() == 0 ) {
return null;
}{
$I$(1,"registerSubclass$Class",[Clazz.getClass(C$)]);
try {
return $I$(1).getAWTKeyStroke$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
}}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
