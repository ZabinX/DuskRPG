(function(){var P$=java.util,I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyValueHolder", null, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['key','<K>','value','<V>']]]

Clazz.newMeth(C$, 'c$$O$O',  function (k, v) {
;C$.$init$.apply(this);
this.key=$I$(1).requireNonNull$O(k);
this.value=$I$(1).requireNonNull$O(v);
}, 1);

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return this.key.equals$O(e.getKey$()) && this.value.equals$O(e.getValue$()) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.key.hashCode$() ^ this.value.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.key + "=" + this.value ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
