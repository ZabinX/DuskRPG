(function(){var P$=java.lang,I$=[[0,'swingjs.JSUtil','Runtime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "System");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['lineSeparator'],'O',['$in','java.io.InputStream','out','java.io.PrintStream','+err','cons','java.io.Console','props','java.util.Properties']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setIn$java_io_InputStream',  function ($in) {
System.$in=$in;
}, 1);

Clazz.newMeth(C$, 'setOut$java_io_PrintStream',  function (out) {
System.out=out;
}, 1);

Clazz.newMeth(C$, 'setErr$java_io_PrintStream',  function (err) {
System.err=err;
}, 1);

Clazz.newMeth(C$, 'console$',  function () {
$I$(1).notImplemented$S(null);
return System.cons;
}, 1);

Clazz.newMeth(C$, 'inheritedChannel$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'setSecurityManager$SecurityManager',  function (s) {
}, 1);

Clazz.newMeth(C$, 'getSecurityManager$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'currentTimeMillis$',  function () {
{
return new Date().getTime();
}
}, 1);

Clazz.newMeth(C$, 'nanoTime$',  function () {
{
return Math.round(window.performance.now() * 1e6);
}
}, 1);

Clazz.newMeth(C$, 'arraycopy$O$I$O$I$I',  function (src, srcPos, dest, destPos, length) {

if (src !== dest || srcPos > destPos) { for (var i = length; --i >= 0;) dest[destPos++] = src[srcPos++]; } else { destPos += length; srcPos += length; for (var i = length; --i >= 0;) src[--destPos] = src[--srcPos]; }
}, 1);

Clazz.newMeth(C$, 'identityHashCode$O',  function (x) {
{
return Clazz._identityHashCode(x);
}
}, 1);

Clazz.newMeth(C$, 'getProperties$',  function () {
return C$.getProps$();
}, 1);

Clazz.newMeth(C$, 'getProps$',  function () {
if (System.props == null ) {

C$.props = Clazz.new_("java.util.Properties");
Clazz._setSystemProperties(C$.props);
System.lineSeparator=System.props.getProperty$S("line.separator");
}return System.props;
}, 1);

Clazz.newMeth(C$, 'lineSeparator$',  function () {
if (System.lineSeparator == null ) C$.getProps$();
return System.lineSeparator;
}, 1);

Clazz.newMeth(C$, 'setProperties$java_util_Properties',  function (props) {
System.props=props;
}, 1);

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
C$.checkKey$S(key);
return C$.getProps$().getProperty$S(key);
}, 1);

Clazz.newMeth(C$, 'getProperty$S$S',  function (key, def) {
C$.checkKey$S(key);
return C$.getProps$().getProperty$S$S(key, def);
}, 1);

Clazz.newMeth(C$, 'setProperty$S$S',  function (key, value) {
C$.checkKey$S(key);
return C$.getProps$().setProperty$S$S(key, value);
}, 1);

Clazz.newMeth(C$, 'clearProperty$S',  function (key) {
C$.checkKey$S(key);
return C$.getProps$().remove$O(key);
}, 1);

Clazz.newMeth(C$, 'checkKey$S',  function (key) {
if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["key can\'t be null"]);
}if (key.equals$O("")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["key can\'t be empty"]);
}}, 1);

Clazz.newMeth(C$, 'getenv$S',  function (name) {
{
return Clazz._getenv(key);
}
}, 1);

Clazz.newMeth(C$, 'getenv$',  function () {
$I$(1).notImplemented$S(null);
return null;
}, 1);

Clazz.newMeth(C$, 'exit$I',  function (status) {
var r=Clazz.load("java.lang.Runtime").getRuntime$() ||null;
r=$I$(2).getRuntime$();
r.exit$I(status);
}, 1);

Clazz.newMeth(C$, 'gc$',  function () {
}, 1);

Clazz.newMeth(C$, 'runFinalization$',  function () {
}, 1);

Clazz.newMeth(C$, 'runFinalizersOnExit$Z',  function (value) {
}, 1);

Clazz.newMeth(C$, 'load$S',  function (filename) {
$I$(1).notImplemented$S(null);
}, 1);

Clazz.newMeth(C$, 'loadLibrary$S',  function (libname) {
$I$(1).notImplemented$S(null);
}, 1);

Clazz.newMeth(C$, 'mapLibraryName$S',  function (libname) {
$I$(1).notImplemented$S(null);
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$in=null;
C$.out=null;
C$.err=null;
C$.cons=null;
C$.lineSeparator="\n";
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
