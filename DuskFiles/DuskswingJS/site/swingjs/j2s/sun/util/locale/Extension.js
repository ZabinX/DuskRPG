(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Extension");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['key'],'S',['value','id']]]

Clazz.newMeth(C$, 'c$$C',  function (key) {
;C$.$init$.apply(this);
this.key=key;
}, 1);

Clazz.newMeth(C$, 'c$$C$S',  function (key, value) {
;C$.$init$.apply(this);
this.key=key;
this.setValue$S(value);
}, 1);

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
this.id=this.key + "-" + value ;
});

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getID$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
