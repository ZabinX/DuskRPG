(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Event");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.consumed=false;
},1);

C$.$fields$=[['Z',['consumed'],'I',['id','x','y','key','modifiers','clickCount'],'J',['data','when'],'O',['target','java.lang.Object','+arg','evt','java.awt.Event']]
,['O',['actionKeyCodes','int[][]']]]

Clazz.newMeth(C$, 'c$$O$J$I$I$I$I$I$O',  function (target, when, id, x, y, key, modifiers, arg) {
;C$.$init$.apply(this);
this.target=target;
this.when=when;
this.id=id;
this.x=x;
this.y=y;
this.key=key;
this.modifiers=modifiers;
this.arg=arg;
this.data=0;
this.clickCount=0;
switch (id) {
case 1001:
case 201:
case 203:
case 204:
case 205:
case 601:
case 602:
case 603:
case 604:
case 605:
case 606:
case 607:
case 701:
case 702:
this.consumed=true;
break;
default:
}
}, 1);

Clazz.newMeth(C$, 'c$$O$J$I$I$I$I$I',  function (target, when, id, x, y, key, modifiers) {
C$.c$$O$J$I$I$I$I$I$O.apply(this, [target, when, id, x, y, key, modifiers, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$O',  function (target, id, arg) {
C$.c$$O$J$I$I$I$I$I$O.apply(this, [target, 0, id, 0, 0, 0, 0, arg]);
}, 1);

Clazz.newMeth(C$, 'translate$I$I',  function (dx, dy) {
this.x+=dx;
this.y+=dy;
});

Clazz.newMeth(C$, 'shiftDown$',  function () {
return (this.modifiers & 1) != 0;
});

Clazz.newMeth(C$, 'controlDown$',  function () {
return (this.modifiers & 2) != 0;
});

Clazz.newMeth(C$, 'metaDown$',  function () {
return (this.modifiers & 4) != 0;
});

Clazz.newMeth(C$, 'consume$',  function () {
switch (this.id) {
case 401:
case 402:
case 403:
case 404:
this.consumed=true;
break;
default:
}
});

Clazz.newMeth(C$, 'isConsumed$',  function () {
return this.consumed;
});

Clazz.newMeth(C$, 'getOldEventKey$java_awt_event_KeyEvent',  function (e) {
var keyCode=e.getKeyCode$();
for (var i=0; i < C$.actionKeyCodes.length; i++) {
if (C$.actionKeyCodes[i][0] == keyCode) {
return C$.actionKeyCodes[i][1];
}}
return e.getKeyChar$().$c();
}, 1);

Clazz.newMeth(C$, 'getKeyEventChar$',  function () {
for (var i=0; i < C$.actionKeyCodes.length; i++) {
if (C$.actionKeyCodes[i][1] == this.key) {
return "\uffff";
}}
return String.fromCharCode(this.key);
});

Clazz.newMeth(C$, 'paramString$',  function () {
var str="id=" + this.id + ",x=" + this.x + ",y=" + this.y ;
if (this.key != 0) {
str+=",key=" + this.key;
}if (this.shiftDown$()) {
str+=",shift";
}if (this.controlDown$()) {
str+=",control";
}if (this.metaDown$()) {
str+=",meta";
}if (this.target != null ) {
str+=",target=" + this.target;
}if (this.arg != null ) {
str+=",arg=" + this.arg;
}return str;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[" + this.paramString$() + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.actionKeyCodes=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [36, 1000]), Clazz.array(Integer.TYPE, -1, [35, 1001]), Clazz.array(Integer.TYPE, -1, [33, 1002]), Clazz.array(Integer.TYPE, -1, [34, 1003]), Clazz.array(Integer.TYPE, -1, [38, 1004]), Clazz.array(Integer.TYPE, -1, [40, 1005]), Clazz.array(Integer.TYPE, -1, [37, 1006]), Clazz.array(Integer.TYPE, -1, [39, 1007]), Clazz.array(Integer.TYPE, -1, [112, 1008]), Clazz.array(Integer.TYPE, -1, [113, 1009]), Clazz.array(Integer.TYPE, -1, [114, 1010]), Clazz.array(Integer.TYPE, -1, [115, 1011]), Clazz.array(Integer.TYPE, -1, [116, 1012]), Clazz.array(Integer.TYPE, -1, [117, 1013]), Clazz.array(Integer.TYPE, -1, [118, 1014]), Clazz.array(Integer.TYPE, -1, [119, 1015]), Clazz.array(Integer.TYPE, -1, [120, 1016]), Clazz.array(Integer.TYPE, -1, [121, 1017]), Clazz.array(Integer.TYPE, -1, [122, 1018]), Clazz.array(Integer.TYPE, -1, [123, 1019]), Clazz.array(Integer.TYPE, -1, [154, 1020]), Clazz.array(Integer.TYPE, -1, [145, 1021]), Clazz.array(Integer.TYPE, -1, [20, 1022]), Clazz.array(Integer.TYPE, -1, [144, 1023]), Clazz.array(Integer.TYPE, -1, [19, 1024]), Clazz.array(Integer.TYPE, -1, [155, 1025])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
