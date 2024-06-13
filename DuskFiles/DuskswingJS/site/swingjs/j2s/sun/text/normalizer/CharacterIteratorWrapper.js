(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharacterIteratorWrapper", null, 'sun.text.normalizer.UCharacterIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iterator','java.text.CharacterIterator']]]

Clazz.newMeth(C$, 'c$$java_text_CharacterIterator',  function (iter) {
Clazz.super_(C$, this);
if (iter == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.iterator=iter;
}, 1);

Clazz.newMeth(C$, 'current$',  function () {
var c=this.iterator.current$().$c();
if (c == 65535 ) {
return -1;
}return c;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return (this.iterator.getEndIndex$() - this.iterator.getBeginIndex$());
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.iterator.getIndex$();
});

Clazz.newMeth(C$, 'next$',  function () {
var i=this.iterator.current$().$c();
this.iterator.next$();
if (i == 65535 ) {
return -1;
}return i;
});

Clazz.newMeth(C$, 'previous$',  function () {
var i=this.iterator.previous$().$c();
if (i == 65535 ) {
return -1;
}return i;
});

Clazz.newMeth(C$, 'setIndex$I',  function (index) {
this.iterator.setIndex$I(index);
});

Clazz.newMeth(C$, 'getText$CA$I',  function (fillIn, offset) {
var length=this.iterator.getEndIndex$() - this.iterator.getBeginIndex$();
var currentIndex=this.iterator.getIndex$();
if (offset < 0 || offset + length > fillIn.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(length)]);
}for (var ch=this.iterator.first$(); ch != "\uffff"; ch=this.iterator.next$()) {
fillIn[offset++]=ch;
}
this.iterator.setIndex$I(currentIndex);
return length;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var result=C$.superclazz.prototype.clone$.apply(this, []);
result.iterator=this.iterator.clone$();
return result;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
