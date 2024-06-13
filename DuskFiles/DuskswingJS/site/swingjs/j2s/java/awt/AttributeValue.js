(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AttributeValue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value'],'O',['names','String[]']]]

Clazz.newMeth(C$, 'c$$I$SA',  function (value, names) {
;C$.$init$.apply(this);
this.value=value;
this.names=names;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.names[this.value];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
