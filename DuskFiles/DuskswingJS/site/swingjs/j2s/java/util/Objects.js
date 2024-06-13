(function(){var P$=java.util,I$=[[0,'AssertionError','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Objects");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(1,1).c$$O,["No java.util.Objects instances for you!"]);
}, 1);

Clazz.newMeth(C$, 'equals$O$O',  function (a, b) {
return (a === b ) || (a != null  && a.equals$O(b) ) ;
}, 1);

Clazz.newMeth(C$, 'deepEquals$O$O',  function (a, b) {
if (a === b ) return true;
 else if (a == null  || b == null  ) return false;
 else return $I$(2).deepEquals0$O$O(a, b);
}, 1);

Clazz.newMeth(C$, 'hashCode$O',  function (o) {
return o != null  ? o.hashCode$() : 0;
}, 1);

Clazz.newMeth(C$, 'hash$OA',  function (values) {
return $I$(2).hashCode$OA(values);
}, 1);

Clazz.newMeth(C$, 'toString$O',  function (o) {
return String.valueOf$O(o);
}, 1);

Clazz.newMeth(C$, 'toString$O$S',  function (o, nullDefault) {
return (o != null ) ? o.toString() : nullDefault;
}, 1);

Clazz.newMeth(C$, 'compare$O$O$java_util_Comparator',  function (a, b, c) {
return (a === b ) ? 0 : c.compare$O$O(a, b);
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O',  function (obj) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return obj;
}, 1);

Clazz.newMeth(C$, 'requireNonNullElse$O$O',  function (obj, defaultObj) {
return (obj != null ) ? obj : C$.requireNonNull$O$S(defaultObj, "defaultObj");
}, 1);

Clazz.newMeth(C$, 'requireNonNullElseGet$O$java_util_function_Supplier',  function (obj, supplier) {
return (obj != null ) ? obj : C$.requireNonNull$O$S(C$.requireNonNull$O$S(supplier, "supplier").get$(), "supplier.get()");
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O$S',  function (obj, message) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[message]);
return obj;
}, 1);

Clazz.newMeth(C$, 'isNull$O',  function (obj) {
return obj == null ;
}, 1);

Clazz.newMeth(C$, 'nonNull$O',  function (obj) {
return obj != null ;
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O$java_util_function_Supplier',  function (obj, messageSupplier) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[messageSupplier.get$()]);
return obj;
}, 1);

Clazz.newMeth(C$, 'checkIndex$I$I',  function (index, length) {
if (index < 0 || index >= length ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return index;
}, 1);

Clazz.newMeth(C$, 'checkFromToIndex$I$I$I',  function (fromIndex, toIndex, length) {
if (fromIndex < 0 || toIndex < fromIndex  || toIndex >= length ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return fromIndex;
}, 1);

Clazz.newMeth(C$, 'checkFromIndexSize$I$I$I',  function (fromIndex, size, length) {
if (fromIndex < 0 || fromIndex + size < length  || fromIndex >= length ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return fromIndex;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
