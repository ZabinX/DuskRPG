(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,['sun.awt.CausedFocusEvent','.Cause']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CausedFocusEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.event.FocusEvent');
C$.$classes$=[['Cause',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cause','sun.awt.CausedFocusEvent.Cause']]]

Clazz.newMeth(C$, 'getCause$',  function () {
return this.cause;
});

Clazz.newMeth(C$, 'toString',  function () {
return "java.awt.FocusEvent[" + C$.superclazz.prototype.paramString$.apply(this, []) + ",cause=" + this.cause + "] on " + this.getSource$() ;
});

Clazz.newMeth(C$, 'c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause',  function (source, id, temporary, opposite, cause) {
;C$.superclazz.c$$java_awt_Component$I$Z$java_awt_Component.apply(this,[source, id, temporary, opposite]);C$.$init$.apply(this);
if (cause == null ) {
cause=$I$(1).UNKNOWN;
}this.cause=cause;
}, 1);

Clazz.newMeth(C$, 'retarget$java_awt_event_FocusEvent$java_awt_Component',  function (e, newSource) {
if (e == null ) return null;
return Clazz.new_(C$.c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[newSource, e.getID$(), e.isTemporary$(), e.getOppositeComponent$(), (Clazz.instanceOf(e, "sun.awt.CausedFocusEvent")) ? (e).getCause$() : $I$(1).RETARGETED]);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.CausedFocusEvent, "Cause", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "UNKNOWN", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MOUSE_EVENT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "TRAVERSAL", 2, []);
Clazz.newEnumConst($vals, C$.c$, "TRAVERSAL_UP", 3, []);
Clazz.newEnumConst($vals, C$.c$, "TRAVERSAL_DOWN", 4, []);
Clazz.newEnumConst($vals, C$.c$, "TRAVERSAL_FORWARD", 5, []);
Clazz.newEnumConst($vals, C$.c$, "TRAVERSAL_BACKWARD", 6, []);
Clazz.newEnumConst($vals, C$.c$, "MANUAL_REQUEST", 7, []);
Clazz.newEnumConst($vals, C$.c$, "AUTOMATIC_TRAVERSE", 8, []);
Clazz.newEnumConst($vals, C$.c$, "ROLLBACK", 9, []);
Clazz.newEnumConst($vals, C$.c$, "NATIVE_SYSTEM", 10, []);
Clazz.newEnumConst($vals, C$.c$, "ACTIVATION", 11, []);
Clazz.newEnumConst($vals, C$.c$, "CLEAR_GLOBAL_FOCUS_OWNER", 12, []);
Clazz.newEnumConst($vals, C$.c$, "RETARGETED", 13, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
