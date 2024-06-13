(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'sun.misc.TimerThread','sun.misc.TimerTickThread','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Timer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['regular','stopped'],'J',['interval','sleepUntil','remainingTime'],'O',['owner','sun.misc.Timeable','next','sun.misc.Timer']]
,['O',['timerThread','sun.misc.TimerThread']]]

Clazz.newMeth(C$, 'c$$sun_misc_Timeable$J',  function (owner, interval) {
;C$.$init$.apply(this);
this.owner=owner;
this.interval=interval;
this.remainingTime=interval;
this.regular=true;
this.sleepUntil=System.currentTimeMillis$();
this.stopped=true;
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getClass$());
{
if (C$.timerThread == null ) {
C$.timerThread=Clazz.new_($I$(1,1));
}}}, 1);

Clazz.newMeth(C$, 'isStopped$',  function () {
return this.stopped;
});

Clazz.newMeth(C$, 'stop$',  function () {
var now=System.currentTimeMillis$();
{
{
if (!this.stopped) {
$I$(1).dequeue$sun_misc_Timer(this);
this.remainingTime=Math.max$J$J(0, Long.$sub(this.sleepUntil,now));
this.sleepUntil=now;
this.stopped=true;
}}}});

Clazz.newMeth(C$, 'cont$',  function () {
{
{
if (this.stopped) {
this.sleepUntil=Math.max$J$J(Long.$add(this.sleepUntil,1), Long.$add(System.currentTimeMillis$(),this.remainingTime));
$I$(1).enqueue$sun_misc_Timer(this);
this.stopped=false;
}}}});

Clazz.newMeth(C$, 'reset$',  function () {
{
{
this.setRemainingTime$J(this.interval);
}}});

Clazz.newMeth(C$, 'getStopTime$',  function () {
return this.sleepUntil;
});

Clazz.newMeth(C$, 'getInterval$',  function () {
return this.interval;
});

Clazz.newMeth(C$, 'setInterval$J',  function (interval) {
this.interval=interval;
});

Clazz.newMeth(C$, 'getRemainingTime$',  function () {
return this.remainingTime;
});

Clazz.newMeth(C$, 'setRemainingTime$J',  function (time) {
{
{
if (this.stopped) {
this.remainingTime=time;
} else {
this.stop$();
this.remainingTime=time;
this.cont$();
}}}});

Clazz.newMeth(C$, 'setRegular$Z',  function (regular) {
this.regular=regular;
});

Clazz.newMeth(C$, 'getTimerThread$',  function () {
return $I$(1).timerThread;
});

C$.$static$=function(){C$.$static$=0;
C$.timerThread=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
