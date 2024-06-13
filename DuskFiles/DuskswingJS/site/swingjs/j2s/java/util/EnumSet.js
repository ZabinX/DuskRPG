(function(){var P$=java.util,I$=[[0,'java.util.RegularEnumSet','java.util.JumboEnumSet','AssertionError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnumSet", null, 'java.util.AbstractSet', ['Cloneable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['elementType','Class','universe','Enum[]']]]

Clazz.newMeth(C$, 'c$$Class$EnumA',  function (elementType, universe) {
Clazz.super_(C$, this);
this.elementType=elementType;
this.universe=universe;
}, 1);

Clazz.newMeth(C$, 'noneOf$Class',  function (elementType) {
var universe=C$.getUniverse$Class(elementType);
if (universe == null ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[elementType + " not an enum"]);
if (universe.length <= 32) return Clazz.new_($I$(1,1).c$$Class$EnumA,[elementType, universe]);
 else return Clazz.new_($I$(2,1).c$$Class$EnumA,[elementType, universe]);
}, 1);

Clazz.newMeth(C$, 'allOf$Class',  function (elementType) {
var result=C$.noneOf$Class(elementType);
result.addAll$();
return result;
}, 1);

Clazz.newMeth(C$, 'copyOf$java_util_EnumSet',  function (s) {
return s.clone$();
}, 1);

Clazz.newMeth(C$, 'copyOf$java_util_Collection',  function (c) {
if (Clazz.instanceOf(c, "java.util.EnumSet")) {
return (c).clone$();
} else {
if (c.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Collection is empty"]);
var i=c.iterator$();
var first=i.next$();
var result=C$.of$Enum(first);
while (i.hasNext$())result.add$O(i.next$());

return result;
}}, 1);

Clazz.newMeth(C$, 'complementOf$java_util_EnumSet',  function (s) {
var result=C$.copyOf$java_util_EnumSet(s);
result.complement$();
return result;
}, 1);

Clazz.newMeth(C$, 'of$Enum',  function (e) {
var result=C$.noneOf$Class(e.getDeclaringClass$());
result.add$O(e);
return result;
}, 1);

Clazz.newMeth(C$, 'of$Enum$Enum',  function (e1, e2) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$O(e1);
result.add$O(e2);
return result;
}, 1);

Clazz.newMeth(C$, 'of$Enum$Enum$Enum',  function (e1, e2, e3) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$O(e1);
result.add$O(e2);
result.add$O(e3);
return result;
}, 1);

Clazz.newMeth(C$, 'of$Enum$Enum$Enum$Enum',  function (e1, e2, e3, e4) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$O(e1);
result.add$O(e2);
result.add$O(e3);
result.add$O(e4);
return result;
}, 1);

Clazz.newMeth(C$, 'of$Enum$Enum$Enum$Enum$Enum',  function (e1, e2, e3, e4, e5) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$O(e1);
result.add$O(e2);
result.add$O(e3);
result.add$O(e4);
result.add$O(e5);
return result;
}, 1);

Clazz.newMeth(C$, 'of$Enum$EnumA',  function (first, rest) {
var result=C$.noneOf$Class(first.getDeclaringClass$());
result.add$O(first);
for (var e, $e = 0, $$e = rest; $e<$$e.length&&((e=($$e[$e])),1);$e++) result.add$O(e);

return result;
}, 1);

Clazz.newMeth(C$, 'range$Enum$Enum',  function (from, to) {
if (from.compareTo$Enum(to) > 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var result=C$.noneOf$Class(from.getDeclaringClass$());
result.addRange$Enum$Enum(from, to);
return result;
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3,1).c$$O,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'typeCheck$Enum',  function (e) {
var eClass=e.getClass$();
if (eClass !== this.elementType  && eClass.getSuperclass$() !== this.elementType  ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[eClass + " != " + this.elementType ]);
});

Clazz.newMeth(C$, 'getUniverse$Class',  function (elementType) {
return elementType.getEnumConstants$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
