(function(){var P$=java.io,p$1={},I$=[[0,'java.io.StringWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OutputStreamWriter", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['charsetName'],'O',['stream','java.io.OutputStream','writer','java.io.StringWriter']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream$S',  function (out, charsetName) {
;C$.superclazz.c$$O.apply(this,[out]);C$.$init$.apply(this);
this.stream=out;
try {
p$1.setCharset$S.apply(this, [charsetName]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
System.err.println$S("OutputStreamWriter: " + charsetName + " not supported (only UTF-8 in SwingJS)" );
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setCharset$S',  function (charsetName) {
p$1.checkName$S.apply(this, [charsetName]);
this.charsetName="UTF-8";
this.writer=Clazz.new_($I$(1,1));
}, p$1);

Clazz.newMeth(C$, 'checkName$S',  function (charsetName) {
if (charsetName == null ) charsetName="UTF-8";
if (!charsetName.equals$O("UTF-8")) throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException'));
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
;C$.superclazz.c$$O.apply(this,[out]);C$.$init$.apply(this);
this.stream=out;
try {
p$1.setCharset$S.apply(this, [null]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_nio_charset_Charset',  function (out, cs) {
C$.c$$java_io_OutputStream.apply(this, [out]);
try {
if (cs != null ) p$1.checkName$S.apply(this, [cs.name$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
System.err.println$S("OutputStreamWriter: " + cs.name$() + " not supported (only UTF-8 in SwingJS)" );
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_nio_charset_CharsetEncoder',  function (out, enc) {
;C$.superclazz.c$$O.apply(this,[out]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEncoding$',  function () {
return this.charsetName;
});

Clazz.newMeth(C$, 'flushBuffer$',  function () {
this.flush$();
});

Clazz.newMeth(C$, 'write$I',  function (c) {
this.writer.write$I(c);
});

Clazz.newMeth(C$, 'write$CA$I$I',  function (cbuf, off, len) {
this.writer.write$CA$I$I(cbuf, off, len);
});

Clazz.newMeth(C$, 'write$S$I$I',  function (str, off, len) {
this.writer.write$S$I$I(str, off, len);
});

Clazz.newMeth(C$, 'flush$',  function () {
this.writer.flush$();
var s=this.writer.getBuffer$().toString();
if (s.length$() > 0) {
var buf=s.getBytes$S(this.charsetName);
this.stream.write$BA$I$I(buf, 0, buf.length);
}this.writer=Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'close$',  function () {
this.flush$();
this.stream.close$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
