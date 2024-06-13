(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PaintEvent", null, 'java.awt.event.ComponentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['updateRect','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_Rectangle',  function (source, id, updateRect) {
;C$.superclazz.c$$java_awt_Component$I.apply(this,[source, id]);C$.$init$.apply(this);
this.updateRect=updateRect;
}, 1);

Clazz.newMeth(C$, 'getUpdateRect$',  function () {
return this.updateRect;
});

Clazz.newMeth(C$, 'setUpdateRect$java_awt_Rectangle',  function (updateRect) {
this.updateRect=updateRect;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 800:
typeStr="PAINT";
break;
case 801:
typeStr="UPDATE";
break;
default:
typeStr="unknown type";
}
return typeStr + ",updateRect=" + (this.updateRect != null  ? this.updateRect.toString() : "null") ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
