(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "Writer", null, null, ['Appendable', 'java.io.Closeable', 'java.io.Flushable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.lock=this;
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (lock) {
;C$.$init$.apply(this);
if (lock != null ) {
this.lock="";
} else {
throw Clazz.new_(Clazz.load('NullPointerException'));
}}, 1);

Clazz.newMeth(C$, 'write$CA',  function (buf) {
this.write$CA$I$I(buf, 0, buf.length);
});

Clazz.newMeth(C$, 'write$I',  function (oneChar) {
{
var oneCharArray=Clazz.array(Character.TYPE, [1]);
oneCharArray[0]=String.fromCharCode(oneChar);
this.write$CA(oneCharArray);
}});

Clazz.newMeth(C$, 'write$S',  function (str) {
var buf=Clazz.array(Character.TYPE, [str.length$()]);
str.getChars$I$I$CA$I(0, buf.length, buf, 0);
{
this.write$CA(buf);
}});

Clazz.newMeth(C$, 'write$S$I$I',  function (str, offset, count) {
if (count >= 0) {
var buf=Clazz.array(Character.TYPE, [count]);
str.getChars$I$I$CA$I(offset, offset + count, buf, 0);
{
this.write$CA(buf);
}} else {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
}});

Clazz.newMeth(C$, 'append$C',  function (c) {
this.write$I(c.$c());
return this;
});

Clazz.newMeth(C$, 'append$CharSequence',  function (csq) {
if (null == csq ) {
this.write$S("null");
} else {
this.write$S(csq.toString());
}return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (csq, start, end) {
if (null == csq ) {
this.write$S("null".substring$I$I(start, end));
} else {
this.write$S(csq.subSequence$I$I(start, end).toString());
}return this;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
