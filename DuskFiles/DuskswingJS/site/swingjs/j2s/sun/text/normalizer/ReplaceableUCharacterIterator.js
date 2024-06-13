(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.ReplaceableString']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReplaceableUCharacterIterator", null, 'sun.text.normalizer.UCharacterIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['currentIndex'],'O',['replaceable','sun.text.normalizer.Replaceable']]]

Clazz.newMeth(C$, 'c$$S',  function (str) {
Clazz.super_(C$, this);
if (str == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.replaceable=Clazz.new_($I$(1,1).c$$S,[str]);
this.currentIndex=0;
}, 1);

Clazz.newMeth(C$, 'c$$StringBuffer',  function (buf) {
Clazz.super_(C$, this);
if (buf == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.replaceable=Clazz.new_($I$(1,1).c$$StringBuffer,[buf]);
this.currentIndex=0;
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return C$.superclazz.prototype.clone$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'current$',  function () {
if (this.currentIndex < this.replaceable.length$()) {
return this.replaceable.charAt$I(this.currentIndex).$c();
}return -1;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.replaceable.length$();
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.currentIndex;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.currentIndex < this.replaceable.length$()) {
return this.replaceable.charAt$I(this.currentIndex++).$c();
}return -1;
});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.currentIndex > 0) {
return this.replaceable.charAt$I(--this.currentIndex).$c();
}return -1;
});

Clazz.newMeth(C$, 'setIndex$I',  function (currentIndex) {
if (currentIndex < 0 || currentIndex > this.replaceable.length$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.currentIndex=currentIndex;
});

Clazz.newMeth(C$, 'getText$CA$I',  function (fillIn, offset) {
var length=this.replaceable.length$();
if (offset < 0 || offset + length > fillIn.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(length)]);
}this.replaceable.getChars$I$I$CA$I(0, length, fillIn, offset);
return length;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
