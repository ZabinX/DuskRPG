(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractQueue", null, 'java.util.AbstractCollection', 'java.util.Queue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
if (this.offer$O(e)) return true;
 else throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Queue full"]);
});

Clazz.newMeth(C$, 'remove$',  function () {
var x=this.poll$();
if (x != null ) return x;
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'element$',  function () {
var x=this.peek$();
if (x != null ) return x;
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'clear$',  function () {
while (this.poll$() != null );
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var modified=false;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (this.add$O(e)) modified=true;

return modified;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
