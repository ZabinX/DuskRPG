(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[[0,'java.awt.event.KeyEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ActionEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modifiers'],'J',['when'],'S',['actionCommand']]]

Clazz.newMeth(C$, 'c$$O$I$S',  function (source, id, command) {
C$.c$$O$I$S$I.apply(this, [source, id, command, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$S$I',  function (source, id, command, modifiers) {
C$.c$$O$I$S$J$I.apply(this, [source, id, command, 0, modifiers]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$S$J$I',  function (source, id, command, when, modifiers) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
this.actionCommand=command;
this.when=when;
this.modifiers=modifiers;
this.bdata=Clazz.array(Byte.TYPE, [0]);
}, 1);

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return this.actionCommand;
});

Clazz.newMeth(C$, 'getWhen$',  function () {
return this.when;
});

Clazz.newMeth(C$, 'getModifiers$',  function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 1001:
typeStr="ACTION_PERFORMED";
break;
default:
typeStr="unknown type";
}
return typeStr + ",cmd=" + this.actionCommand + ",when=" + Long.$s(this.when) + ",modifiers=" + $I$(1).getKeyModifiersText$I(this.modifiers) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
