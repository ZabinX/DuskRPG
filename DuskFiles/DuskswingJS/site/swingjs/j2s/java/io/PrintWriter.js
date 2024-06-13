(function(){var P$=java.io,p$1={},I$=[[0,'java.util.Objects','java.nio.charset.Charset','java.io.BufferedWriter','java.io.OutputStreamWriter','java.io.FileOutputStream','java.io.File','Thread','java.util.Locale','java.util.Formatter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintWriter", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.trouble=false;
this.psOut=null;
},1);

C$.$fields$=[['Z',['autoFlush','trouble'],'O',['out','java.io.Writer','formatter','java.util.Formatter','psOut','java.io.PrintStream']]]

Clazz.newMeth(C$, 'toCharset$S',  function (csn) {
$I$(1).requireNonNull$O$S(csn, "charsetName");
try {
return $I$(2).forName$S(csn);
} catch (unused) {
if (Clazz.exceptionOf(unused,"java.nio.charset.IllegalCharsetNameException") || Clazz.exceptionOf(unused,"java.nio.charset.UnsupportedCharsetException")){
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[csn]);
} else {
throw unused;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (out) {
C$.c$$java_io_Writer$Z.apply(this, [out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$Z',  function (out, autoFlush) {
;C$.superclazz.c$$O.apply(this,[out]);C$.$init$.apply(this);
this.out=out;
this.autoFlush=autoFlush;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
C$.c$$java_io_OutputStream$Z.apply(this, [out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z',  function (out, autoFlush) {
C$.c$$java_io_OutputStream$Z$java_nio_charset_Charset.apply(this, [out, autoFlush, $I$(2).defaultCharset$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z$java_nio_charset_Charset',  function (out, autoFlush, charset) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_([Clazz.new_($I$(4,1).c$$java_io_OutputStream$java_nio_charset_Charset,[out, charset])],$I$(3,1).c$$java_io_Writer), autoFlush]);
if (Clazz.instanceOf(out, "java.io.PrintStream")) {
this.psOut=out;
}}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fileName) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_([Clazz.new_([Clazz.new_($I$(5,1).c$$S,[fileName])],$I$(4,1).c$$java_io_OutputStream)],$I$(3,1).c$$java_io_Writer), false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$java_io_File',  function (charset, file) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_([Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[file]), charset],$I$(4,1).c$$java_io_OutputStream$java_nio_charset_Charset)],$I$(3,1).c$$java_io_Writer), false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (fileName, csn) {
C$.c$$java_nio_charset_Charset$java_io_File.apply(this, [C$.toCharset$S(csn), Clazz.new_($I$(6,1).c$$S,[fileName])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_nio_charset_Charset',  function (fileName, charset) {
C$.c$$java_nio_charset_Charset$java_io_File.apply(this, [$I$(1).requireNonNull$O$S(charset, "charset"), Clazz.new_($I$(6,1).c$$S,[fileName])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_([Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[file])],$I$(4,1).c$$java_io_OutputStream)],$I$(3,1).c$$java_io_Writer), false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S',  function (file, csn) {
C$.c$$java_nio_charset_Charset$java_io_File.apply(this, [C$.toCharset$S(csn), file]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$java_nio_charset_Charset',  function (file, charset) {
C$.c$$java_nio_charset_Charset$java_io_File.apply(this, [$I$(1).requireNonNull$O$S(charset, "charset"), file]);
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.out == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'flush$',  function () {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.flush$();
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'close$',  function () {
try {
{
if (this.out == null ) return;
this.out.close$();
this.out=null;
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'checkError$',  function () {
if (this.out != null ) {
this.flush$();
}if (Clazz.instanceOf(this.out, "java.io.PrintWriter")) {
var pw=this.out;
return pw.checkError$();
} else if (this.psOut != null ) {
return this.psOut.checkError$();
}return this.trouble;
});

Clazz.newMeth(C$, 'setError$',  function () {
this.trouble=true;
});

Clazz.newMeth(C$, 'clearError$',  function () {
this.trouble=false;
});

Clazz.newMeth(C$, 'write$I',  function (c) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$I(c);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(7).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'write$CA$I$I',  function (buf, off, len) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$CA$I$I(buf, off, len);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(7).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'write$CA',  function (buf) {
this.write$CA$I$I(buf, 0, buf.length);
});

Clazz.newMeth(C$, 'write$S$I$I',  function (s, off, len) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$S$I$I(s, off, len);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(7).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'write$S',  function (s) {
this.write$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'newLine',  function () {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$S(System.lineSeparator$());
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(7).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'print$Z',  function (b) {
this.write$S(String.valueOf$Z(b));
});

Clazz.newMeth(C$, 'print$C',  function (c) {
this.write$I(c.$c());
});

Clazz.newMeth(C$, 'print$I',  function (i) {
this.write$S(String.valueOf$I(i));
});

Clazz.newMeth(C$, 'print$J',  function (l) {
this.write$S(String.valueOf$J(l));
});

Clazz.newMeth(C$, 'print$F',  function (f) {
this.write$S(String.valueOf$F(f));
});

Clazz.newMeth(C$, 'print$D',  function (d) {
this.write$S(String.valueOf$D(d));
});

Clazz.newMeth(C$, 'print$CA',  function (s) {
this.write$CA(s);
});

Clazz.newMeth(C$, 'print$S',  function (s) {
this.write$S(String.valueOf$O(s));
});

Clazz.newMeth(C$, 'print$O',  function (obj) {
this.write$S(String.valueOf$O(obj));
});

Clazz.newMeth(C$, 'println$',  function () {
p$1.newLine.apply(this, []);
});

Clazz.newMeth(C$, 'println$Z',  function (x) {
{
this.print$Z(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$C',  function (x) {
{
this.print$C(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$I',  function (x) {
{
this.print$I(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$J',  function (x) {
{
this.print$J(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$F',  function (x) {
{
this.print$F(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$D',  function (x) {
{
this.print$D(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$CA',  function (x) {
{
this.print$CA(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$S',  function (x) {
{
this.print$S(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$O',  function (x) {
var s=String.valueOf$O(x);
{
this.print$S(s);
this.println$();
}});

Clazz.newMeth(C$, 'printf$S$OA',  function (format, args) {
return this.format$S$OA(format, args);
});

Clazz.newMeth(C$, 'printf$java_util_Locale$S$OA',  function (l, format, args) {
return this.format$java_util_Locale$S$OA(l, format, args);
});

Clazz.newMeth(C$, 'format$S$OA',  function (format, args) {
try {
{
p$1.ensureOpen.apply(this, []);
if ((this.formatter == null ) || (this.formatter.locale$() !== $I$(8).getDefault$() ) ) this.formatter=Clazz.new_($I$(9,1).c$$Appendable,[this]);
this.formatter.format$java_util_Locale$S$OA($I$(8).getDefault$(), format, args);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(7).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
return this;
});

Clazz.newMeth(C$, 'format$java_util_Locale$S$OA',  function (l, format, args) {
try {
{
p$1.ensureOpen.apply(this, []);
if ((this.formatter == null ) || (this.formatter.locale$() !== l ) ) this.formatter=Clazz.new_($I$(9,1).c$$Appendable$java_util_Locale,[this, l]);
this.formatter.format$java_util_Locale$S$OA(l, format, args);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(7).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
return this;
});

Clazz.newMeth(C$, 'append$CharSequence',  function (csq) {
this.write$S(String.valueOf$O(csq));
return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (csq, start, end) {
if (csq == null ) csq="null";
return this.append$CharSequence(csq.subSequence$I$I(start, end));
});

Clazz.newMeth(C$, 'append$C',  function (c) {
this.write$I(c.$c());
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
