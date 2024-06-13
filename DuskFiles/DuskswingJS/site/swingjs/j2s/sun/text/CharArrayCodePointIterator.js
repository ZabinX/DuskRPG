(function(){var P$=Clazz.newPackage("sun.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharArrayCodePointIterator", null, 'sun.text.CodePointIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','limit','index'],'O',['text','char[]']]]

Clazz.newMeth(C$, 'c$$CA',  function (text) {
Clazz.super_(C$, this);
this.text=text;
this.limit=text.length;
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function (text, start, limit) {
Clazz.super_(C$, this);
if (start < 0 || limit < start  || limit > text.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.text=text;
this.start=this.index=start;
this.limit=limit;
}, 1);

Clazz.newMeth(C$, 'setToStart$',  function () {
this.index=this.start;
});

Clazz.newMeth(C$, 'setToLimit$',  function () {
this.index=this.limit;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.index < this.limit) {
var cp1=this.text[this.index++];
if (Character.isHighSurrogate$C(cp1) && this.index < this.limit ) {
var cp2=this.text[this.index];
if (Character.isLowSurrogate$C(cp2)) {
++this.index;
return Character.toCodePoint$C$C(cp1, cp2);
}}return cp1.$c();
}return -1;
});

Clazz.newMeth(C$, 'prev$',  function () {
if (this.index > this.start) {
var cp2=this.text[--this.index];
if (Character.isLowSurrogate$C(cp2) && this.index > this.start ) {
var cp1=this.text[this.index - 1];
if (Character.isHighSurrogate$C(cp1)) {
--this.index;
return Character.toCodePoint$C$C(cp1, cp2);
}}return cp2.$c();
}return -1;
});

Clazz.newMeth(C$, 'charIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
