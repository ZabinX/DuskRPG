(function(){var P$=java.util,I$=[[0,'java.util.Arrays','java.lang.reflect.Array','OutOfMemoryError','java.util.Objects','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractCollection", null, null, 'java.util.Collection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
var it=this.iterator$();
if (o == null ) {
while (it.hasNext$())if (it.next$() == null ) return true;

} else {
while (it.hasNext$())if (o.equals$O(it.next$())) return true;

}return false;
});

Clazz.newMeth(C$, 'toArray$',  function () {
var r=Clazz.array(java.lang.Object, [this.size$()]);
var it=this.iterator$();
for (var i=0; i < r.length; i++) {
if (!it.hasNext$()) return $I$(1).copyOf$OA$I(r, i);
r[i]=it.next$();
}
return it.hasNext$() ? C$.finishToArray$OA$java_util_Iterator(r, it) : r;
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var size=this.size$();
var r=a.length >= size ? a : Clazz.array(a.getClass$().getComponentType$(), size);
var it=this.iterator$();
for (var i=0; i < r.length; i++) {
if (!it.hasNext$()) {
if (a === r ) {
r[i]=null;
} else if (a.length < i) {
return $I$(1).copyOf$OA$I(r, i);
} else {
System.arraycopy$O$I$O$I$I(r, 0, a, 0, i);
if (a.length > i) {
a[i]=null;
}}return a;
}r[i]=it.next$();
}
return it.hasNext$() ? C$.finishToArray$OA$java_util_Iterator(r, it) : r;
});

Clazz.newMeth(C$, 'finishToArray$OA$java_util_Iterator',  function (r, it) {
var i=r.length;
while (it.hasNext$()){
var cap=r.length;
if (i == cap) {
var newCap=cap + (cap >> 1) + 1 ;
if (newCap - 2147483639 > 0) newCap=C$.hugeCapacity$I(cap + 1);
r=$I$(1).copyOf$OA$I(r, newCap);
}r[i++]=it.next$();
}
return (i == r.length) ? r : $I$(1).copyOf$OA$I(r, i);
}, 1);

Clazz.newMeth(C$, 'hugeCapacity$I',  function (minCapacity) {
if (minCapacity < 0) throw Clazz.new_($I$(3,1).c$$S,["Required array size too large"]);
return (minCapacity > 2147483639) ? 2147483647 : 2147483639;
}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
var it=this.iterator$();
if (o == null ) {
while (it.hasNext$()){
if (it.next$() == null ) {
it.remove$();
return true;
}}
} else {
while (it.hasNext$()){
if (o.equals$O(it.next$())) {
it.remove$();
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection',  function (c) {
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (!this.contains$O(e)) return false;

return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
var modified=false;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (this.add$O(e)) modified=true;

return modified;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection',  function (c) {
$I$(4).requireNonNull$O(c);
var modified=false;
var it=this.iterator$();
while (it.hasNext$()){
if (c.contains$O(it.next$())) {
it.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection',  function (c) {
$I$(4).requireNonNull$O(c);
var modified=false;
var it=this.iterator$();
while (it.hasNext$()){
if (!c.contains$O(it.next$())) {
it.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'clear$',  function () {
var it=this.iterator$();
while (it.hasNext$()){
it.next$();
it.remove$();
}
});

Clazz.newMeth(C$, 'toString',  function () {
var it=this.iterator$();
if (!it.hasNext$()) return "[]";
var sb=Clazz.new_($I$(5,1));
sb.append$C("[");
for (; ; ) {
var e=it.next$();
sb.append$O(e === this  ? "(this Collection)" : e);
if (!it.hasNext$()) return sb.append$C("]").toString();
sb.append$C(",").append$C(" ");
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
