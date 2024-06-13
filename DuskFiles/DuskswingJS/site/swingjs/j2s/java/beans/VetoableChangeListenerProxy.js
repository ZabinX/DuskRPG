(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VetoableChangeListenerProxy", null, 'java.util.EventListenerProxy', 'java.beans.VetoableChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['propertyName']]]

Clazz.newMeth(C$, 'c$$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
;C$.superclazz.c$$java_util_EventListener.apply(this,[listener]);C$.$init$.apply(this);
this.propertyName=propertyName;
}, 1);

Clazz.newMeth(C$, 'vetoableChange$java_beans_PropertyChangeEvent',  function (evt) {
(this.getListener$()).vetoableChange$java_beans_PropertyChangeEvent(evt);
});

Clazz.newMeth(C$, 'getPropertyName$',  function () {
return this.propertyName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
