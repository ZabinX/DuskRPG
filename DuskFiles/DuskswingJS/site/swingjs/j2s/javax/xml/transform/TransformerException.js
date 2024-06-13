(function(){var P$=Clazz.newPackage("javax.xml.transform"),I$=[[0,'StringBuffer','java.io.PrintWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransformerException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['locator','javax.xml.transform.SourceLocator','containedException','Throwable']]]

Clazz.newMeth(C$, 'getLocator$',  function () {
return this.locator;
});

Clazz.newMeth(C$, 'setLocator$javax_xml_transform_SourceLocator',  function (location) {
this.locator=location;
});

Clazz.newMeth(C$, 'getException$',  function () {
return this.containedException;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return ((this.containedException === this ) ? null : this.containedException);
});

Clazz.newMeth(C$, 'initCause$Throwable',  function (cause) {
if (this.containedException != null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t overwrite cause"]);
}if (cause === this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Self-causation not permitted"]);
}this.containedException=cause;
return this;
});

Clazz.newMeth(C$, 'c$$S',  function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.containedException=null;
this.locator=null;
}, 1);

Clazz.newMeth(C$, 'c$$Throwable',  function (e) {
;C$.superclazz.c$$S.apply(this,[e.toString()]);C$.$init$.apply(this);
this.containedException=e;
this.locator=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable',  function (message, e) {
;C$.superclazz.c$$S.apply(this,[((message == null ) || (message.length$() == 0) ) ? e.toString() : message]);C$.$init$.apply(this);
this.containedException=e;
this.locator=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_xml_transform_SourceLocator',  function (message, locator) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.containedException=null;
this.locator=locator;
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_xml_transform_SourceLocator$Throwable',  function (message, locator, e) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.containedException=e;
this.locator=locator;
}, 1);

Clazz.newMeth(C$, 'getMessageAndLocation$',  function () {
var sbuffer=Clazz.new_($I$(1,1));
var message=C$.superclazz.prototype.getMessage$.apply(this, []);
if (null != message ) {
sbuffer.append$S(message);
}if (null != this.locator ) {
var systemID=this.locator.getSystemId$();
var line=this.locator.getLineNumber$();
var column=this.locator.getColumnNumber$();
if (null != systemID ) {
sbuffer.append$S("; SystemID: ");
sbuffer.append$S(systemID);
}if (0 != line) {
sbuffer.append$S("; Line#: ");
sbuffer.append$I(line);
}if (0 != column) {
sbuffer.append$S("; Column#: ");
sbuffer.append$I(column);
}}return sbuffer.toString();
});

Clazz.newMeth(C$, 'getLocationAsString$',  function () {
if (null != this.locator ) {
var sbuffer=Clazz.new_($I$(1,1));
var systemID=this.locator.getSystemId$();
var line=this.locator.getLineNumber$();
var column=this.locator.getColumnNumber$();
if (null != systemID ) {
sbuffer.append$S("; SystemID: ");
sbuffer.append$S(systemID);
}if (0 != line) {
sbuffer.append$S("; Line#: ");
sbuffer.append$I(line);
}if (0 != column) {
sbuffer.append$S("; Column#: ");
sbuffer.append$I(column);
}return sbuffer.toString();
} else {
return null;
}});

Clazz.newMeth(C$, 'printStackTrace$',  function () {
this.printStackTrace$java_io_PrintWriter(Clazz.new_($I$(2,1).c$$java_io_OutputStream$Z,[System.err, true]));
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintStream',  function (s) {
this.printStackTrace$java_io_PrintWriter(Clazz.new_($I$(2,1).c$$java_io_OutputStream,[s]));
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintWriter',  function (s) {
if (s == null ) {
s=Clazz.new_($I$(2,1).c$$java_io_OutputStream$Z,[System.err, true]);
}try {
var locInfo=this.getLocationAsString$();
if (null != locInfo ) {
s.println$S(locInfo);
}C$.superclazz.prototype.printStackTrace$java_io_PrintWriter.apply(this, [s]);
} catch (e) {
}
var exception=this.getException$();
for (var i=0; (i < 10) && (null != exception ) ; i++) {
s.println$S("---------");
try {
if (Clazz.instanceOf(exception, "javax.xml.transform.TransformerException")) {
var locInfo=(exception).getLocationAsString$();
if (null != locInfo ) {
s.println$S(locInfo);
}}exception.printStackTrace$java_io_PrintWriter(s);
} catch (e) {
s.println$S("Could not print stack trace...");
}
try {
var meth=(exception).getClass$().getMethod$S$ClassA("getException", null);
if (null != meth ) {
var prev=exception;
exception=meth.invoke$O$OA(exception, null);
if (prev === exception ) {
break;
}} else {
exception=null;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ite = e$$;
{
exception=null;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
exception=null;
}
} else if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var nsme = e$$;
{
exception=null;
}
} else {
throw e$$;
}
}
}
s.flush$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
