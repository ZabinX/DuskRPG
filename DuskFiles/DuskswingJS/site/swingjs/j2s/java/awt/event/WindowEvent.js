(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[[0,'sun.awt.SunToolkit','sun.awt.AppContext']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WindowEvent", null, 'java.awt.event.ComponentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['oldState','newState'],'O',['opposite','java.awt.Window']]]

Clazz.newMeth(C$, 'c$$java_awt_Window$I$java_awt_Window$I$I',  function (source, id, opposite, oldState, newState) {
;C$.superclazz.c$$java_awt_Component$I.apply(this,[source, id]);C$.$init$.apply(this);
this.opposite=opposite;
this.oldState=oldState;
this.newState=newState;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$I$java_awt_Window',  function (source, id, opposite) {
C$.c$$java_awt_Window$I$java_awt_Window$I$I.apply(this, [source, id, opposite, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$I$I$I',  function (source, id, oldState, newState) {
C$.c$$java_awt_Window$I$java_awt_Window$I$I.apply(this, [source, id, null, oldState, newState]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$I',  function (source, id) {
C$.c$$java_awt_Window$I$java_awt_Window$I$I.apply(this, [source, id, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'getWindow$',  function () {
return ((this.source).isWindowOrJSApplet$()) ? this.source : null;
});

Clazz.newMeth(C$, 'getOppositeWindow$',  function () {
if (this.opposite == null ) {
return null;
}return ($I$(1).targetToAppContext$O(this.opposite) === $I$(2).getAppContext$() ) ? this.opposite : null;
});

Clazz.newMeth(C$, 'getOldState$',  function () {
return this.oldState;
});

Clazz.newMeth(C$, 'getNewState$',  function () {
return this.newState;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 200:
typeStr="WINDOW_OPENED";
break;
case 201:
typeStr="WINDOW_CLOSING";
break;
case 202:
typeStr="WINDOW_CLOSED";
break;
case 203:
typeStr="WINDOW_ICONIFIED";
break;
case 204:
typeStr="WINDOW_DEICONIFIED";
break;
case 205:
typeStr="WINDOW_ACTIVATED";
break;
case 206:
typeStr="WINDOW_DEACTIVATED";
break;
case 207:
typeStr="WINDOW_GAINED_FOCUS";
break;
case 208:
typeStr="WINDOW_LOST_FOCUS";
break;
case 209:
typeStr="WINDOW_STATE_CHANGED";
break;
default:
typeStr="unknown type";
}
typeStr+=",opposite=" + this.getOppositeWindow$() + ",oldState=" + this.oldState + ",newState=" + this.newState ;
return typeStr;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
