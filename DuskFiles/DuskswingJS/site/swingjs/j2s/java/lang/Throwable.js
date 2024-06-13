(function(){var P$=java.lang,p$1={};
var C$=Clazz.newClass(P$, "Throwable", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.detailMessage=null;
this.cause=null;
this.stackTrace=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cause=this;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.fillInStackTrace$();
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.$init$.apply(this);
this.fillInStackTrace$();
this.detailMessage=message;
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, cause) {
C$.$init$.apply(this);
this.fillInStackTrace$();
this.detailMessage=message;
this.cause=cause;
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
C$.$init$.apply(this);
this.fillInStackTrace$();
this.detailMessage=(cause == null  ? null : cause.toString());
this.cause=cause;
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
{
if (typeof this.message != "undefined") { return this.message;
}
}
return this.detailMessage;
});

Clazz.newMeth(C$, 'getLocalizedMessage$', function () {
return this.getMessage$();
});

Clazz.newMeth(C$, 'getCause$', function () {
return (this.cause === this  ? null : this.cause);
});

Clazz.newMeth(C$, 'initCause$Throwable', function (cause) {
if (this.cause !== this ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t overwrite cause"]);
if (cause === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Self-causation not permitted"]);
this.cause=cause;
return this;
});

Clazz.newMeth(C$, 'toString', function () {
var s=this.getClass$().getName$();
var message=this.getLocalizedMessage$();
return (message != null ) ? (s + ": " + message ) : s;
});

Clazz.newMeth(C$, 'printStackTrace$', function () {
System.err.println$O(this);
for (var i=0; i < this.stackTrace.length; i++) {
var t = this.c[i];
var x = t.e.indexOf ("(");
var n = t.e.substring (0, x).replace (/\s+/g, "");
if (n != "construct" || t.z == null || Clazz.getInheritedLevel (t.z, Throwable) < 0) { System.err.println (t);
}
}

});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintStream', function (s) {

this.printStackTrace ();
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintWriter', function (s) {

this.printStackTrace ();
});

Clazz.newMeth(C$, 'fillInStackTrace$', function () {
alert('native method must be replaced! Ljava/lang/Throwable;.fillInStackTrace()Ljava/lang/Throwable;');
}
);

Clazz.newMeth(C$, 'setStackTrace$StackTraceElementA', function (stackTrace) {
var defensiveCopy=stackTrace.clone$();
for (var i=0; i < defensiveCopy.length; i++) if (defensiveCopy[i] == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["stackTrace[" + i + "]" ]);

this.stackTrace=defensiveCopy;
});

Clazz.newMeth(C$, 'getStackTraceDepth', function () {
alert('native method must be replaced! Ljava/lang/Throwable;.getStackTraceDepth()I');
}
, p$1);

Clazz.newMeth(C$, 'getStackTraceElement$I', function (index) {
alert('native method must be replaced! Ljava/lang/Throwable;.getStackTraceElement(I)Ljava/lang/StackTraceElement;');
}
, p$1);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:56 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
