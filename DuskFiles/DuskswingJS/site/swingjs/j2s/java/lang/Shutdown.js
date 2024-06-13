(function(){var P$=java.lang,I$=[[0,'InternalError','java.util.Hashtable','Thread','swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Shutdown");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['runFinalizersOnExit','秘isHalted'],'I',['state','currentRunningHook'],'O',['groupHooks','java.util.Map','lock','java.lang.Object','+haltLock']]]

Clazz.newMeth(C$, 'setRunFinalizersOnExit$Z',  function (run) {
{
C$.runFinalizersOnExit=run;
}}, 1);

Clazz.newMeth(C$, 'add$I$Z$Runnable',  function (slot, registerShutdownInProgress, hook) {
{
var hooks=C$.getHooks$Z(true);
if (hooks[slot] != null ) throw Clazz.new_($I$(1,1).c$$S,["Shutdown hook at slot " + slot + " already registered" ]);
if (!registerShutdownInProgress) {
if (C$.state > 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Shutdown in progress"]);
} else {
if (C$.state > 1 || (C$.state == 1 && slot <= C$.currentRunningHook ) ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Shutdown in progress"]);
}hooks[slot]=hook;
}}, 1);

Clazz.newMeth(C$, 'getHooks$Z',  function (andCreate) {
if (C$.groupHooks == null ) {
if (!andCreate) return null;
C$.groupHooks=Clazz.new_($I$(2,1));
}var g=$I$(3).currentThread$().getThreadGroup$();
var hooks=C$.groupHooks.get$O($I$(4).getJSID$O(g));
if (hooks == null ) {
if (!andCreate) return null;
C$.groupHooks.put$O$O($I$(4).getJSID$O(g), hooks=Clazz.array(Runnable, [10]));
}return hooks;
}, 1);

Clazz.newMeth(C$, 'runHooks$',  function () {
var hooks=C$.getHooks$Z(false);
if (hooks == null ) return;
for (var i=0; i < 10; i++) {
try {
var hook;
{
C$.currentRunningHook=i;
hook=hooks[i];
}if (hook != null ) hook.run$();
} catch (t) {
if (Clazz.instanceOf(t, "java.lang.ThreadDeath")) {
var td=t;
throw td;
}}
}
}, 1);

Clazz.newMeth(C$, 'halt$I',  function (status) {
{
if (!C$.秘isHalted) {
C$.秘isHalted=true;
System.out.println$S("Shutdown(" + status + ") on " + $I$(3).currentThread$().getThreadGroup$().getName$() );
}}}, 1);

Clazz.newMeth(C$, 'sequence$',  function () {
{
if (C$.state != 1) return;
}C$.runHooks$();
{
C$.state=2;
}}, 1);

Clazz.newMeth(C$, 'exit$I',  function (status) {
var runMoreFinalizers=false;
{
if (status != 0) C$.runFinalizersOnExit=false;
switch (C$.state) {
case 0:
C$.state=1;
break;
case 1:
break;
case 2:
if (status != 0) {
C$.halt$I(status);
} else {
runMoreFinalizers=C$.runFinalizersOnExit;
}break;
}
}if (runMoreFinalizers) {
C$.halt$I(status);
}{
C$.sequence$();
C$.halt$I(status);
}}, 1);

Clazz.newMeth(C$, 'shutdown$',  function () {
{
switch (C$.state) {
case 0:
C$.state=1;
break;
case 1:
case 2:
break;
}
}{
C$.sequence$();
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.state=0;
C$.runFinalizersOnExit=false;
C$.currentRunningHook=0;
C$.lock=null;
C$.haltLock=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
