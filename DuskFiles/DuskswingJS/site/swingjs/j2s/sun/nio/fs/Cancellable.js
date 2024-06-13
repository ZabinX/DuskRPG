(function(){var P$=Clazz.newPackage("sun.nio.fs"),p$1={},I$=[[0,'sun.misc.Unsafe','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cancellable", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock= Clazz.new_();
},1);

C$.$fields$=[['Z',['completed'],'J',['pollingAddress'],'O',['lock','java.lang.Object','exception','Throwable']]
,['O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.pollingAddress=C$.unsafe.allocateMemory$J(4);
C$.unsafe.putIntVolatile$O$J$I(null, this.pollingAddress, 0);
}, 1);

Clazz.newMeth(C$, 'addressToPollForCancel$',  function () {
return this.pollingAddress;
});

Clazz.newMeth(C$, 'cancelValue$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'cancel$',  function () {
{
if (!this.completed) {
C$.unsafe.putIntVolatile$O$J$I(null, this.pollingAddress, this.cancelValue$());
}}});

Clazz.newMeth(C$, 'exception',  function () {
{
return this.exception;
}}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
try {
this.implRun$();
} catch (t) {
{
this.exception=t;
}} finally {
{
this.completed=true;
C$.unsafe.freeMemory$J(this.pollingAddress);
}}
});

Clazz.newMeth(C$, 'runInterruptibly$sun_nio_fs_Cancellable',  function (task) {
var t=Clazz.new_($I$(2,1).c$$Runnable,[task]);
t.start$();
var cancelledByInterrupt=false;
while (t.isAlive$()){
try {
t.join$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
cancelledByInterrupt=true;
task.cancel$();
} else {
throw e;
}
}
}
if (cancelledByInterrupt) $I$(2).currentThread$().interrupt$();
var exc=p$1.exception.apply(task, []);
if (exc != null ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[exc]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
