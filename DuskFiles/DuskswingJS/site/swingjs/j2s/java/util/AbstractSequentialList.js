(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractSequentialList", null, 'java.util.AbstractList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'get$I',  function (index) {
try {
return this.listIterator$I(index).next$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.NoSuchElementException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
try {
var e=this.listIterator$I(index);
var oldVal=e.next$();
e.set$O(element);
return oldVal;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.NoSuchElementException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
try {
this.listIterator$I(index).add$O(element);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.NoSuchElementException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
try {
var e=this.listIterator$I(index);
var outCast=e.next$();
e.remove$();
return outCast;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.NoSuchElementException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
try {
var modified=false;
var e1=this.listIterator$I(index);
var e2=c.iterator$();
while (e2.hasNext$()){
e1.add$O(e2.next$());
modified=true;
}
return modified;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.NoSuchElementException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
return this.listIterator$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
