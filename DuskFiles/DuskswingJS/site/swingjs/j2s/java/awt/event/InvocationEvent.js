(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvocationEvent", null, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.exception=null;
this.throwable=null;
},1);

C$.$fields$=[['Z',['catchExceptions'],'J',['when'],'O',['runnable','Runnable','notifier','java.lang.Object','exception','Exception','throwable','Throwable']]]

Clazz.newMeth(C$, 'c$$O$Runnable',  function (source, runnable) {
C$.c$$O$I$Runnable$O$Z.apply(this, [source, 1200, runnable, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Runnable$O$Z',  function (source, runnable, notifier, catchThrowables) {
C$.c$$O$I$Runnable$O$Z.apply(this, [source, 1200, runnable, notifier, catchThrowables]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$Runnable$O$Z',  function (source, id, runnable, notifier, catchThrowables) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
this.runnable=runnable;
this.notifier=notifier;
this.catchExceptions=catchThrowables;
this.when=System.currentTimeMillis$();
}, 1);

Clazz.newMeth(C$, 'dispatch$',  function () {
if (this.catchExceptions) {
try {
this.runnable.run$();
} catch (t) {
if (Clazz.instanceOf(t, "java.lang.Exception")) {
this.exception=t;
}this.throwable=t;
System.err.println$S("InvocationException: " + t);
try {
t.printStackTrace$();
} catch (e) {
}
}
} else {
this.runnable.run$();
}if (this.notifier != null ) {
{
this.notifier.notifyAll$();
}}});

Clazz.newMeth(C$, 'getException$',  function () {
return (this.catchExceptions) ? this.exception : null;
});

Clazz.newMeth(C$, 'getThrowable$',  function () {
return (this.catchExceptions) ? this.throwable : null;
});

Clazz.newMeth(C$, 'getWhen$',  function () {
return this.when;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 1200:
typeStr="INVOCATION_DEFAULT";
break;
default:
typeStr="unknown type";
}
return typeStr + ",runnable=" + this.runnable + ",notifier=" + this.notifier + ",catchExceptions=" + this.catchExceptions + ",when=" + Long.$s(this.when) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
