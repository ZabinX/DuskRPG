(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PropertyChangeEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['propertyName'],'O',['newValue','java.lang.Object','+oldValue','+propagationId']]]

Clazz.newMeth(C$, 'c$$O$S$O$O',  function (source, propertyName, oldValue, newValue) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.propertyName=propertyName;
this.newValue=newValue;
this.oldValue=oldValue;
}, 1);

Clazz.newMeth(C$, 'getPropertyName$',  function () {
return this.propertyName;
});

Clazz.newMeth(C$, 'getNewValue$',  function () {
return this.newValue;
});

Clazz.newMeth(C$, 'getOldValue$',  function () {
return this.oldValue;
});

Clazz.newMeth(C$, 'setPropagationId$O',  function (propagationId) {
this.propagationId=propagationId;
});

Clazz.newMeth(C$, 'getPropagationId$',  function () {
return this.propagationId;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
