(function(){var P$=java.io,I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringWriter", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['buf','StringBuffer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.buf=Clazz.new_($I$(1,1).c$$I,[16]);
this.lock=this.buf;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialSize) {
Clazz.super_(C$, this);
if (initialSize >= 0) {
this.buf=Clazz.new_($I$(1,1).c$$I,[initialSize]);
this.lock=this.buf;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}, 1);

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'getBuffer$',  function () {
{
return this.buf;
}});

Clazz.newMeth(C$, 'toString',  function () {
{
return this.buf.toString();
}});

Clazz.newMeth(C$, 'write$CA$I$I',  function (cbuf, offset, count) {
if (0 <= offset && offset <= cbuf.length  && 0 <= count  && count <= cbuf.length - offset ) {
{
this.buf.append$CA$I$I(cbuf, offset, count);
}} else {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}});

Clazz.newMeth(C$, 'write$I',  function (oneChar) {
{
this.buf.append$C(String.fromCharCode(oneChar));
}});

Clazz.newMeth(C$, 'write$S',  function (str) {
{
this.buf.append$S(str);
}});

Clazz.newMeth(C$, 'write$S$I$I',  function (str, offset, count) {
var sub=str.substring$I$I(offset, offset + count);
{
this.buf.append$S(sub);
}});

Clazz.newMeth(C$, 'append$C',  function (c) {
this.write$I(c.$c());
return this;
});

Clazz.newMeth(C$, 'append$CharSequence',  function (csq) {
if (null == csq ) {
this.append$CharSequence$I$I("null", 0, "null".length$());
} else {
this.append$CharSequence$I$I(csq, 0, csq.length$());
}return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (csq, start, end) {
if (null == csq ) {
csq="null";
}var output=csq.subSequence$I$I(start, end).toString();
this.write$S$I$I(output, 0, output.length$());
return this;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
