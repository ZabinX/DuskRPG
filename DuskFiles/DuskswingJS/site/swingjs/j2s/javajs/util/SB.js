(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SB");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s'],'O',['sb','StringBuilder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
{
this.s = "";
}
}, 1);

Clazz.newMeth(C$, 'newN$I',  function (n) {
{
return new javajs.util.SB();
}
}, 1);

Clazz.newMeth(C$, 'newS$S',  function (s) {
{
var sb = new javajs.util.SB();
sb.s = s;
return sb;
}
}, 1);

Clazz.newMeth(C$, 'append$S',  function (s) {
{
this.s += s
}
return this;
});

Clazz.newMeth(C$, 'appendC$C',  function (c) {
{
this.s += c;
}
return this;
});

Clazz.newMeth(C$, 'appendI$I',  function (i) {
{
this.s += i
}
return this;
});

Clazz.newMeth(C$, 'appendB$Z',  function (b) {
{
this.s += b
}
return this;
});

Clazz.newMeth(C$, 'appendF$F',  function (f) {
{
var sf = "" + f;
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0) sf += ".0" ;
this.s += sf;
}
return this;
});

Clazz.newMeth(C$, 'appendD$D',  function (d) {
{
var sf = "" + d;
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0) sf += ".0" ;
this.s += sf;
}
return this;
});

Clazz.newMeth(C$, 'appendSB$javajs_util_SB',  function (buf) {
{
this.s += buf.s;
}
return this;
});

Clazz.newMeth(C$, 'appendO$O',  function (data) {
if (data != null ) {
{
this.s += data.toString();
}
}return this;
});

Clazz.newMeth(C$, 'appendCB$CA$I$I',  function (cb, off, len) {
{
this.s += cb.slice(off,off+len).join("");
}
});

Clazz.newMeth(C$, 'toString',  function () {
{
return this.s;
}
});

Clazz.newMeth(C$, 'length$',  function () {
{
return this.s.length;
}
});

Clazz.newMeth(C$, 'indexOf$S',  function (s) {
{
return this.s.indexOf(s);
}
});

Clazz.newMeth(C$, 'charAt$I',  function (i) {
{
return this.s.charAt(i);
}
});

Clazz.newMeth(C$, 'charCodeAt$I',  function (i) {
{
return this.s.charCodeAt(i);
}
});

Clazz.newMeth(C$, 'setLength$I',  function (n) {
{
this.s = this.s.substring(0, n);
}
});

Clazz.newMeth(C$, 'lastIndexOf$S',  function (s) {
{
return this.s.lastIndexOf(s);
}
});

Clazz.newMeth(C$, 'indexOf2$S$I',  function (s, i) {
{
return this.s.indexOf(s, i);
}
});

Clazz.newMeth(C$, 'substring$I',  function (i) {
{
return this.s.substring(i);
}
});

Clazz.newMeth(C$, 'substring2$I$I',  function (i, j) {
{
return this.s.substring(i, j);
}
});

Clazz.newMeth(C$, 'toBytes$I$I',  function (off, len) {
if (len == 0) return Clazz.array(Byte.TYPE, [0]);
var cs;
{
cs = "UTF-8";
}
return (len > 0 ? this.substring2$I$I(off, off + len) : off == 0 ? this.toString() : this.substring2$I$I(off, this.length$() - off)).getBytes$java_nio_charset_Charset(cs);
});

Clazz.newMeth(C$, 'replace$I$I$S',  function (start, end, str) {
{
this.s = this.s.substring(0, start) + str + this.s.substring(end);
}
});

Clazz.newMeth(C$, 'insert$I$S',  function (offset, str) {
this.replace$I$I$S(offset, offset, str);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
