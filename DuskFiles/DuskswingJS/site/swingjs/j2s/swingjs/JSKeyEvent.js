(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSMouse','java.awt.AWTKeyStroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSKeyEvent", null, 'java.awt.event.KeyEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newJSKeyEvent$javax_swing_JComponent$O$I$Z',  function (source, jqevent, id, isList) {
var evType=null;
var jskey=null;
var jskeyCode=0;
var jskeyLocation=0;
var ev=jqevent;

evType = ev.type; jskey = ev.key;
jskeyCode = ev.keyCode || ev.which;
jskeyLocation = ev.originalEvent.location || 0;
if (isList && evType == "keypress") ev.originalEvent.preventDefault();
if (id == 0) id=$I$(1).fixEventType$O$I(jqevent, 0);
if (id == 0) return null;
var keyCode=C$.getJavaKeyCode$I$S(jskeyCode, jskey);
var keyChar=C$.getJavaKeyChar$I$S(keyCode, jskey);
return (keyChar == "\uffff" && id == 400  ? null : Clazz.new_(C$.c$$javax_swing_JComponent$O$I$I$C$I,[source, jqevent, id, (id == 400 ? 0 : keyCode), keyChar, (id == 400 ? 0 : jskeyLocation + 1)]));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$O$I$I$C$I',  function (source, ev, id, keyCode, keyChar, location) {
;C$.superclazz.c$$java_awt_Component$I$J$I$I$C$I.apply(this,[source, id, System.currentTimeMillis$(), 0, keyCode, keyChar, location]);C$.$init$.apply(this);
var bdata=Clazz.array(Byte.TYPE, [0]);

bdata.jqevent = ev;
this.setBData$BA(bdata);
this.modifiers=$I$(1).getModifiers$O(ev);
}, 1);

Clazz.newMeth(C$, 'getJavaKeyCode$I$S',  function (jskeyCode, jskey) {
if (jskeyCode <= 40) {
if (jskeyCode == 13) return 10;
return jskeyCode;
}if (jskey.length$() == 1) {
return jskeyCode;
}switch (jskeyCode) {
case 91:
return 157;
case 93:
return 525;
case 144:
case 145:
return jskeyCode;
case 244:
return 25;
}
var keyName="VK_" + jskey.toUpperCase$();
try {
return $I$(2).getVKValue$S(keyName);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("JSKeyEvent adding key/keyCode " + keyName + " " + jskeyCode );
$I$(2).addKeyCode$S$I(keyName, jskeyCode);
} else {
throw e;
}
}
return jskeyCode;
}, 1);

Clazz.newMeth(C$, 'getJavaKeyChar$I$S',  function (jsKeyCode, jskey) {
if (jskey.length$() == 1) return jskey.charAt$I(0);
switch (jsKeyCode) {
case 13:
jsKeyCode=10;
case 10:
case 8:
case 9:
case 127:
case 27:
return String.fromCharCode(jsKeyCode);
default:
return "\uffff";
}
}, 1);

Clazz.newMeth(C$, 'hasKeyChar$I$S',  function (javaKeyCode, jskey) {
switch (javaKeyCode) {
case 10:
case 8:
case 9:
case 127:
case 27:
return true;
default:
return (jskey.length$() == 1);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
