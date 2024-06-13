(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AdjustmentEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAdjusting'],'I',['value','adjustmentType'],'O',['adjustable','java.awt.Adjustable']]]

Clazz.newMeth(C$, 'c$$java_awt_Adjustable$I$I$I',  function (source, id, type, value) {
C$.c$$java_awt_Adjustable$I$I$I$Z.apply(this, [source, id, type, value, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Adjustable$I$I$I$Z',  function (source, id, type, value, isAdjusting) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
this.adjustable=source;
this.adjustmentType=type;
this.value=value;
this.isAdjusting=isAdjusting;
}, 1);

Clazz.newMeth(C$, 'getAdjustable$',  function () {
return this.adjustable;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getAdjustmentType$',  function () {
return this.adjustmentType;
});

Clazz.newMeth(C$, 'getValueIsAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 601:
typeStr="ADJUSTMENT_VALUE_CHANGED";
break;
default:
typeStr="unknown type";
}
var adjTypeStr;
switch (this.adjustmentType) {
case 1:
adjTypeStr="UNIT_INCREMENT";
break;
case 2:
adjTypeStr="UNIT_DECREMENT";
break;
case 4:
adjTypeStr="BLOCK_INCREMENT";
break;
case 3:
adjTypeStr="BLOCK_DECREMENT";
break;
case 5:
adjTypeStr="TRACK";
break;
default:
adjTypeStr="unknown type";
}
return typeStr + ",adjType=" + adjTypeStr + ",value=" + this.value + ",isAdjusting=" + this.isAdjusting ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
