(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IndexedPropertyChangeEvent", null, 'java.beans.PropertyChangeEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'c$$O$S$O$O$I',  function (source, propertyName, oldValue, newValue, index) {
;C$.superclazz.c$$O$S$O$O.apply(this,[source, propertyName, oldValue, newValue]);C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
