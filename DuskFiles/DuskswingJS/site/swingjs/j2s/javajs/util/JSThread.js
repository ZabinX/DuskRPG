(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isJS=true ||false;
},1);

C$.$fields$=[['Z',['isJS']]
,['I',['threadCount']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$ThreadGroup$S.apply(this, [null, "JSThread-" + (++C$.threadCount)]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
C$.c$$ThreadGroup$S.apply(this, [null, name]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$S',  function (group, name) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[group, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.run1$I(0);
});

Clazz.newMeth(C$, 'start$',  function () {
{
this.started = true;
Clazz.load("swingjs.JSToolkit").dispatch$O$I$I(this, 1, 0);
}
});

Clazz.newMeth(C$, 'run1$I',  function (state) {
var executeFinally=true;
try {
while (!$I$(1).interrupted$()){
switch (state) {
case 0:
if (!this.myInit$()) return;
state=1;
continue;
case 1:
if (!this.isLooping$()) {
state=2;
continue;
}if (this.myLoop$() && this.sleepAndReturn$I$I(this.getDelayMillis$(), state) ) {
executeFinally=false;
return;
}continue;
case 2:
this.whenDone$();
return;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.onException$Exception(e);
state=2;
} else {
throw e;
}
} finally {
if (executeFinally) {
executeFinally=false;
this.doFinally$();
}}
});

Clazz.newMeth(C$, 'sleepAndReturn$I$I',  function (delay, state) {
if (!this.isJS) {
$I$(1).sleep$J(delay);
return false;
}var me=this;
var r=((P$.JSThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.me.run1$I(this.$finals$.state);
});
})()
), Clazz.new_(P$.JSThread$1.$init$,[this, {me:me,state:state}]));
{
setTimeout( function() { java.awt.Toolkit.getDefaultToolkit$().getSystemEventQueue$().postEvent$java_awt_AWTEvent( Clazz.new_(java.awt.event.InvocationEvent.c$$O$Runnable,[me, r]))}, delay);
}
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.threadCount=0;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
