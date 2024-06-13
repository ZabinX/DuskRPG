(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RuleBasedCollationKey", null, 'java.text.CollationKey');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.key=null;
},1);

C$.$fields$=[['S',['key']]]

Clazz.newMeth(C$, ['compareTo$java_text_CollationKey','compareTo$O'],  function (target) {
var result=this.key.compareTo$S(((target)).key);
if (result <= -1) return -1;
 else if (result >= 1) return 1;
return 0;
});

Clazz.newMeth(C$, 'equals$O',  function (target) {
if (this === target ) return true;
if (target == null  || !this.getClass$().equals$O(target.getClass$()) ) {
return false;
}var other=target;
return this.key.equals$O(other.key);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.key.hashCode$());
});

Clazz.newMeth(C$, 'toByteArray$',  function () {
var src=this.key.toCharArray$();
var dest=Clazz.array(Byte.TYPE, [2 * src.length]);
var j=0;
for (var i=0; i < src.length; i++) {
dest[j++]=(((src[i]).$c() >>> 8)|0);
dest[j++]=(((src[i]).$c() & 255)|0);
}
return dest;
});

Clazz.newMeth(C$, 'c$$S$S',  function (source, key) {
;C$.superclazz.c$$S.apply(this,[source]);C$.$init$.apply(this);
this.key=key;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
