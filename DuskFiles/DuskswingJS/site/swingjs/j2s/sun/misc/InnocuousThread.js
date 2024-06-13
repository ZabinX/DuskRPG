(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.security.AccessControlContext','java.security.ProtectionDomain','sun.misc.Unsafe','Thread','ThreadGroup','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InnocuousThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasRun']]
,['J',['THREADLOCALS','INHERITABLETHREADLOCALS','INHERITEDACCESSCONTROLCONTEXT'],'O',['UNSAFE','sun.misc.Unsafe','THREADGROUP','ThreadGroup','ACC','java.security.AccessControlContext']]]

Clazz.newMeth(C$, 'c$$Runnable',  function (target) {
;C$.superclazz.c$$ThreadGroup$Runnable$S.apply(this,[C$.THREADGROUP, target, "anInnocuousThread"]);C$.$init$.apply(this);
C$.UNSAFE.putOrderedObject$O$J$O(this, C$.INHERITEDACCESSCONTROLCONTEXT, C$.ACC);
this.eraseThreadLocals$();
}, 1);

Clazz.newMeth(C$, 'getContextClassLoader$',  function () {
return ClassLoader.getSystemClassLoader$();
});

Clazz.newMeth(C$, 'setUncaughtExceptionHandler$Thread_UncaughtExceptionHandler',  function (x) {
});

Clazz.newMeth(C$, 'setContextClassLoader$ClassLoader',  function (cl) {
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["setContextClassLoader"]);
});

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(4).currentThread$() === this  && !this.hasRun ) {
this.hasRun=true;
C$.superclazz.prototype.run$.apply(this, []);
}});

Clazz.newMeth(C$, 'eraseThreadLocals$',  function () {
C$.UNSAFE.putObject$O$J$O(this, C$.THREADLOCALS, null);
C$.UNSAFE.putObject$O$J$O(this, C$.INHERITABLETHREADLOCALS, null);
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.ACC=Clazz.new_([Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1).c$$java_security_CodeSource$java_security_PermissionCollection,[null, null])])],$I$(1,1).c$$java_security_ProtectionDomainA);
C$.UNSAFE=$I$(3).getUnsafe$();
var tk=Clazz.getClass($I$(4));
var gk=Clazz.getClass($I$(5));
C$.THREADLOCALS=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("threadLocals"));
C$.INHERITABLETHREADLOCALS=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("inheritableThreadLocals"));
C$.INHERITEDACCESSCONTROLCONTEXT=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("inheritedAccessControlContext"));
var tg=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("group"));
var gp=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(gk.getDeclaredField$S("parent"));
var group=C$.UNSAFE.getObject$O$J($I$(4).currentThread$(), tg);
while (group != null ){
var parent=C$.UNSAFE.getObject$O$J(group, gp);
if (parent == null ) break;
group=parent;
}
C$.THREADGROUP=Clazz.new_($I$(5,1).c$$ThreadGroup$S,[group, "InnocuousThreadGroup"]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(6,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
