(function(){var P$=Clazz.newPackage("java.nio.file"),p$1={},I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DirectoryIteratorException", null, 'java.util.ConcurrentModificationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_io_IOException',  function (cause) {
;C$.superclazz.c$$Throwable.apply(this,[$I$(1).requireNonNull$O(cause)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCause$',  function () {
return C$.superclazz.prototype.getCause$.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var cause=C$.superclazz.prototype.getCause$.apply(this, []);
if (!(Clazz.instanceOf(cause, "java.io.IOException"))) throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Cause must be an IOException"]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
