(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},I$=[[0,'Thread','javax.swing.ProgressMonitor','javax.swing.SwingUtilities',['javajs.async.SwingJSUtils','.StateHelper']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsyncSwingWorker", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.SwingWorker', [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);
C$.$classes$=[['AsyncSubtask',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doneRunnable=((P$.AsyncSwingWorker$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AsyncSwingWorker$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javajs.async.AsyncSwingWorker'].doneAsync$.apply(this.b$['javajs.async.AsyncSwingWorker'], []);
this.b$['javax.swing.SwingWorker'].firePropertyChange$S$O$O.apply(this.b$['javax.swing.SwingWorker'], ["state", null, "DONE_ASYNC"]);
});
})()
), Clazz.new_(P$.AsyncSwingWorker$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['isAsync','isPaused'],'I',['progressAsync','delayMillis','min','max','progressPercent'],'S',['note'],'O',['progressMonitor','javax.swing.ProgressMonitor','exception','Exception','helper','javajs.async.SwingJSUtils.StateHelper','doneRunnable','Runnable']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$S$I$I$I',  function (owner, title, delayMillis, min, max) {
Clazz.super_(C$, this);
if (title != null  && delayMillis > 0 ) {
this.progressMonitor=Clazz.new_([owner, title, "", Math.min(min, max), Math.max(min, max)],$I$(2,1).c$$java_awt_Component$O$S$I$I);
this.progressMonitor.setProgress$I(Math.min(min, max));
}this.delayMillis=Math.max(0, delayMillis);
this.isAsync=(delayMillis > 0);
this.min=min;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'executeAsync$',  function () {
this.firePropertyChange$S$O$O("state", null, "STARTED_ASYNC");
C$.superclazz.prototype.execute$.apply(this, []);
});

Clazz.newMeth(C$, 'executeSynchronously$',  function () {
this.firePropertyChange$S$O$O("state", null, "STARTED_SYNC");
this.isAsync=false;
this.delayMillis=0;
try {
this.doInBackground$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.exception=e;
e.printStackTrace$();
this.cancelAsync$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getException$',  function () {
return this.exception;
});

Clazz.newMeth(C$, 'getMinimum$',  function () {
return this.min;
});

Clazz.newMeth(C$, 'setMinimum$I',  function (min) {
this.min=min;
if (this.progressMonitor != null ) {
this.progressMonitor.setMinimum$I(min);
}});

Clazz.newMeth(C$, 'getMaximum$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'setMaximum$I',  function (max) {
if (this.progressMonitor != null ) {
this.progressMonitor.setMaximum$I(max);
}this.max=max;
});

Clazz.newMeth(C$, 'getProgressPercent$',  function () {
return this.progressPercent;
});

Clazz.newMeth(C$, 'setNote$S',  function (note) {
this.note=note;
if (this.progressMonitor != null ) {
this.progressMonitor.setNote$S(note);
}});

Clazz.newMeth(C$, 'cancelAsync$',  function () {
this.helper.interrupt$();
this.firePropertyChange$S$O$O("state", null, "CANCELED_ASYNC");
});

Clazz.newMeth(C$, 'isCanceledAsync$',  function () {
return !this.helper.isAlive$();
});

Clazz.newMeth(C$, 'isDoneAsync$',  function () {
return this.helper.getState$() == 99;
});

Clazz.newMeth(C$, 'getNote$I',  function (progress) {
return String.format$S$OA("Completed %d%%.\n", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(progress)]));
});

Clazz.newMeth(C$, 'getNote$',  function () {
return this.note;
});

Clazz.newMeth(C$, 'getProgressAsync$',  function () {
return this.progressAsync;
});

Clazz.newMeth(C$, 'setProgressAsync$I',  function (n) {
n=(this.max > this.min ? Math.max(this.min, Math.min(n, this.max)) : Math.max(this.max, Math.min(n, this.min)));
this.progressAsync=n;
n=((n - this.min) * 100/(this.max - this.min)|0);
n=(n < 0 ? 0 : n > 100 ? 100 : n);
this.progressPercent=n;
});

Clazz.newMeth(C$, 'getHelper$',  function () {
return this.helper;
});

Clazz.newMeth(C$, 'setPaused$Z',  function (tf) {
if (this.isPaused == tf ) return;
this.isPaused=tf;
this.firePropertyChange$S$O$O("pause", null, (tf ? "PAUSED" : "RESUMED"));
if (!tf) this.stateLoop$();
});

Clazz.newMeth(C$, 'isPaused$',  function () {
return this.isPaused;
});

Clazz.newMeth(C$, 'stateLoop$',  function () {
while (this.helper.isAlive$() && !this.isPaused ){
switch (this.helper.getState$()) {
case 0:
this.setProgressAsync$I(this.min);
this.initAsync$();
this.helper.setState$I(2);
continue;
case 1:
if (p$1.checkCanceled.apply(this, [])) {
this.helper.setState$I(99);
this.cancelAsync$();
} else {
var ret=this.doInBackgroundAsync$I(this.progressAsync);
if (!this.helper.isAlive$() || this.isPaused ) {
continue;
}this.progressAsync=ret;
this.setProgressAsync$I(this.progressAsync);
this.setNote$S(this.getNote$I(this.progressAsync));
this.setProgress$I(this.progressPercent);
if (this.progressMonitor != null ) {
this.progressMonitor.setProgress$I(this.max > this.min ? this.progressAsync : this.max + this.min - this.progressAsync);
}this.helper.setState$I(this.progressAsync == this.max ? 99 : 2);
}continue;
case 2:
this.helper.setState$I(1);
this.helper.sleep$I(this.delayMillis);
return true;
default:
case 99:
p$1.stopProgressMonitor.apply(this, []);
if (this.isAsync) {
$I$(3).invokeLater$Runnable(this.doneRunnable);
} else {
this.doneRunnable.run$();
}return false;
}
}
if (!this.helper.isAlive$()) {
p$1.stopProgressMonitor.apply(this, []);
}return false;
});

Clazz.newMeth(C$, 'stopProgressMonitor',  function () {
if (this.progressMonitor != null ) {
this.progressMonitor.close$();
this.progressMonitor=null;
}}, p$1);

Clazz.newMeth(C$, 'checkCanceled',  function () {
if (p$1.isMonitorCanceled.apply(this, []) || this.isCancelled$() ) {
this.helper.interrupt$();
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'isMonitorCanceled',  function () {
return (this.progressMonitor != null  && this.progressMonitor.isCanceled$() );
}, p$1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
this.helper=Clazz.new_($I$(4,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.setProgressAsync$I(this.min);
this.helper.next$I(0);
return null;
});

Clazz.newMeth(C$, 'done$',  function () {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AsyncSwingWorker, "AsyncSubtask", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nextProgress']]]

Clazz.newMeth(C$, 'c$$I',  function (nextProgress) {
;C$.$init$.apply(this);
this.nextProgress=nextProgress;
}, 1);

Clazz.newMeth(C$, 'start$Runnable',  function (r) {
this.b$['javajs.async.AsyncSwingWorker'].setPaused$Z.apply(this.b$['javajs.async.AsyncSwingWorker'], [true]);
Clazz.new_($I$(1,1).c$$Runnable,[r]).start$();
});

Clazz.newMeth(C$, 'done$',  function () {
this.b$['javajs.async.AsyncSwingWorker'].setProgressAsync$I.apply(this.b$['javajs.async.AsyncSwingWorker'], [this.nextProgress]);
this.b$['javajs.async.AsyncSwingWorker'].setPaused$Z.apply(this.b$['javajs.async.AsyncSwingWorker'], [false]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
