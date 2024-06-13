(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AttributeEntry", null, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['key','java.text.AttributedCharacterIterator.Attribute','value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator_Attribute$O',  function (key, value) {
;C$.$init$.apply(this);
this.key=key;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.text.AttributeEntry"))) {
return false;
}var other=o;
return other.key.equals$O(this.key) && (this.value == null  ? other.value == null  : other.value.equals$O(this.value)) ;
});

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (newValue) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.key.hashCode$() ^ (this.value == null  ? 0 : this.value.hashCode$());
});

Clazz.newMeth(C$, 'toString',  function () {
return this.key.toString() + "=" + this.value.toString() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
