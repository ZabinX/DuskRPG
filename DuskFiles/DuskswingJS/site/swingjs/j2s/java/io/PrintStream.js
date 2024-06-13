(function(){var P$=java.io,p$1={},I$=[[0,'java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.BufferedWriter','java.io.FileOutputStream','Thread','java.util.Locale',['java.util.Locale','.Category'],'java.util.Formatter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintStream", null, 'java.io.FilterOutputStream', ['Appendable', 'java.io.Closeable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.trouble=false;
this.closing=false;
},1);

C$.$fields$=[['Z',['autoFlush','trouble','closing'],'O',['formatter','java.util.Formatter','textOut','java.io.BufferedWriter','charOut','java.io.OutputStreamWriter']]]

Clazz.newMeth(C$, 'requireNonNull$O$S',  function (obj, message) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[message]);
return obj;
}, 1);

Clazz.newMeth(C$, 'toCharset$S',  function (csn) {
C$.requireNonNull$O$S(csn, "charsetName");
try {
return $I$(1).forName$S(csn);
} catch (unused) {
if (Clazz.exceptionOf(unused,"java.nio.charset.IllegalCharsetNameException") || Clazz.exceptionOf(unused,"java.nio.charset.UnsupportedCharsetException")){
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[csn]);
} else {
throw unused;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$Z$java_io_OutputStream',  function (autoFlush, out) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
this.autoFlush=autoFlush;
this.charOut=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[this]);
this.textOut=Clazz.new_($I$(3,1).c$$java_io_Writer,[this.charOut]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$java_nio_charset_Charset$java_io_OutputStream',  function (autoFlush, charset, out) {
C$.c$$java_io_OutputStream$Z$java_nio_charset_Charset.apply(this, [out, autoFlush, charset]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
C$.c$$java_io_OutputStream$Z.apply(this, [out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z',  function (out, autoFlush) {
C$.c$$Z$java_io_OutputStream.apply(this, [autoFlush, C$.requireNonNull$O$S(out, "Null output stream")]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z$S',  function (out, autoFlush, encoding) {
C$.c$$java_io_OutputStream$Z$java_nio_charset_Charset.apply(this, [C$.requireNonNull$O$S(out, "Null output stream"), autoFlush, C$.toCharset$S(encoding)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z$java_nio_charset_Charset',  function (out, autoFlush, charset) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
this.autoFlush=autoFlush;
this.charOut=Clazz.new_($I$(2,1).c$$java_io_OutputStream$java_nio_charset_Charset,[this, charset]);
this.textOut=Clazz.new_($I$(3,1).c$$java_io_Writer,[this.charOut]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fileName) {
C$.c$$Z$java_io_OutputStream.apply(this, [false, Clazz.new_($I$(4,1).c$$S,[fileName])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (fileName, csn) {
C$.c$$Z$java_nio_charset_Charset$java_io_OutputStream.apply(this, [false, C$.toCharset$S(csn), Clazz.new_($I$(4,1).c$$S,[fileName])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_nio_charset_Charset',  function (fileName, charset) {
C$.c$$Z$java_nio_charset_Charset$java_io_OutputStream.apply(this, [false, C$.requireNonNull$O$S(charset, "charset"), Clazz.new_($I$(4,1).c$$S,[fileName])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
C$.c$$Z$java_io_OutputStream.apply(this, [false, Clazz.new_($I$(4,1).c$$java_io_File,[file])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S',  function (file, csn) {
C$.c$$Z$java_nio_charset_Charset$java_io_OutputStream.apply(this, [false, C$.toCharset$S(csn), Clazz.new_($I$(4,1).c$$java_io_File,[file])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$java_nio_charset_Charset',  function (file, charset) {
C$.c$$Z$java_nio_charset_Charset$java_io_OutputStream.apply(this, [false, C$.requireNonNull$O$S(charset, "charset"), Clazz.new_($I$(4,1).c$$java_io_File,[file])]);
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.out == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'flush$',  function () {
{
try {
p$1.ensureOpen.apply(this, []);
this.out.flush$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
}});

Clazz.newMeth(C$, 'close$',  function () {
{
if (!this.closing) {
this.closing=true;
try {
this.textOut.close$();
this.out.close$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
this.textOut=null;
this.charOut=null;
this.out=null;
}}});

Clazz.newMeth(C$, 'checkError$',  function () {
if (this.out != null ) this.flush$();
if (Clazz.instanceOf(this.out, "java.io.PrintStream")) {
var ps=this.out;
return ps.checkError$();
}return this.trouble;
});

Clazz.newMeth(C$, 'setError$',  function () {
this.trouble=true;
});

Clazz.newMeth(C$, 'clearError$',  function () {
this.trouble=false;
});

Clazz.newMeth(C$, 'write$I',  function (b) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$I(b);
if ((b == 10 ) && this.autoFlush ) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'write$BA$I$I',  function (buf, off, len) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$BA$I$I(buf, off, len);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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
try {
{
p$1.ensureOpen.apply(this, []);
this.textOut.write$CA(buf);
this.textOut.flushBuffer$();
this.charOut.flushBuffer$();
if (this.autoFlush) {
for (var i=0; i < buf.length; i++) if (buf[i] == "\n") this.out.flush$();

}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'write$S',  function (s) {
try {
{
p$1.ensureOpen.apply(this, []);
this.textOut.write$S(s);
this.textOut.flushBuffer$();
this.charOut.flushBuffer$();
if (this.autoFlush && (s.indexOf$I("\n") >= 0) ) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'newLine',  function () {
try {
{
p$1.ensureOpen.apply(this, []);
this.textOut.newLine$();
this.textOut.flushBuffer$();
this.charOut.flushBuffer$();
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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
p$1.write$S.apply(this, [String.valueOf$Z(b)]);
});

Clazz.newMeth(C$, 'print$C',  function (c) {
p$1.write$S.apply(this, [String.valueOf$C(c)]);
});

Clazz.newMeth(C$, 'print$I',  function (i) {
p$1.write$S.apply(this, [String.valueOf$I(i)]);
});

Clazz.newMeth(C$, 'print$J',  function (l) {
p$1.write$S.apply(this, [String.valueOf$J(l)]);
});

Clazz.newMeth(C$, 'print$F',  function (f) {
p$1.write$S.apply(this, [String.valueOf$F(f)]);
});

Clazz.newMeth(C$, 'print$D',  function (d) {
p$1.write$S.apply(this, [String.valueOf$D(d)]);
});

Clazz.newMeth(C$, 'print$CA',  function (s) {
p$1.write$CA.apply(this, [s]);
});

Clazz.newMeth(C$, 'print$S',  function (s) {
p$1.write$S.apply(this, [String.valueOf$O(s)]);
});

Clazz.newMeth(C$, 'print$O',  function (obj) {
p$1.write$S.apply(this, [String.valueOf$O(obj)]);
});

Clazz.newMeth(C$, 'println$',  function () {
p$1.newLine.apply(this, []);
});

Clazz.newMeth(C$, 'println$Z',  function (x) {
{
this.print$Z(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$C',  function (x) {
{
this.print$C(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$I',  function (x) {
{
this.print$I(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$J',  function (x) {
{
this.print$J(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$F',  function (x) {
{
this.print$F(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$D',  function (x) {
{
this.print$D(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$CA',  function (x) {
{
this.print$CA(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$S',  function (x) {
{
this.print$S(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$O',  function (x) {
var s=String.valueOf$O(x);
{
this.print$S(s);
p$1.newLine.apply(this, []);
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
if ((this.formatter == null ) || (this.formatter.locale$() !== $I$(6,"getDefault$java_util_Locale_Category",[$I$(7).FORMAT]) ) ) this.formatter=Clazz.new_($I$(8,1).c$$Appendable,[this]);
this.formatter.format$java_util_Locale$S$OA($I$(6,"getDefault$java_util_Locale_Category",[$I$(7).FORMAT]), format, args);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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
if ((this.formatter == null ) || (this.formatter.locale$() !== l ) ) this.formatter=Clazz.new_($I$(8,1).c$$Appendable$java_util_Locale,[this, l]);
this.formatter.format$java_util_Locale$S$OA(l, format, args);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
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
this.print$S(String.valueOf$O(csq));
return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (csq, start, end) {
if (csq == null ) csq="null";
return this.append$CharSequence(csq.subSequence$I$I(start, end));
});

Clazz.newMeth(C$, 'append$C',  function (c) {
this.print$C(c);
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
