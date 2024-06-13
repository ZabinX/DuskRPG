(function(){var P$=Clazz.newPackage("java.util.prefs"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "PreferenceChangeEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['key','newValue']]]

Clazz.newMeth(C$, 'c$$java_util_prefs_Preferences$S$S',  function (node, key, newValue) {
;C$.superclazz.c$$O.apply(this,[node]);C$.$init$.apply(this);
this.key=key;
this.newValue=newValue;
}, 1);

Clazz.newMeth(C$, 'getNode$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getNewValue$',  function () {
return this.newValue;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (out) {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["Not serializable."]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["Not serializable."]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
