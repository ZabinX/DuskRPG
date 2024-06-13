(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.Timer','javax.swing.SwingUtilities',['javax.swing.SwingWorker','.StateValue'],'java.util.concurrent.FutureTask',['javax.swing.SwingWorker','.SwingWorkerPropertyChangeSupport'],'sun.swing.AccumulativeRunnable','sun.awt.AppContext','java.util.concurrent.Executors','java.util.concurrent.ThreadPoolExecutor','java.util.concurrent.TimeUnit','java.util.concurrent.LinkedBlockingQueue',['javax.swing.SwingWorker','.DoSubmitAccumulativeRunnable']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingWorker", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.concurrent.RunnableFuture');
C$.$classes$=[['StateValue',25],['DoSubmitAccumulativeRunnable',10],['SwingWorkerPropertyChangeSupport',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doSubmit=C$.getDoSubmit$();
},1);

C$.$fields$=[['I',['progress'],'O',['state','javax.swing.SwingWorker.StateValue','future','java.util.concurrent.FutureTask','propertyChangeSupport','java.beans.PropertyChangeSupport','doProcess','sun.swing.AccumulativeRunnable','+doNotifyProgressChange','+doSubmit']]
,['O',['DO_SUBMIT_KEY','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var callable=((P$.SwingWorker$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.Callable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'call$',  function () {
p$1.setState$javax_swing_SwingWorker_StateValue.apply(this.b$['javax.swing.SwingWorker'], [$I$(3).STARTED]);
return this.b$['javax.swing.SwingWorker'].doInBackground$.apply(this.b$['javax.swing.SwingWorker'], []);
});
})()
), Clazz.new_(P$.SwingWorker$1.$init$,[this, null]));
this.future=((P$.SwingWorker$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.concurrent.FutureTask'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'done$',  function () {
p$1.doneEDT.apply(this.b$['javax.swing.SwingWorker'], []);
p$1.setState$javax_swing_SwingWorker_StateValue.apply(this.b$['javax.swing.SwingWorker'], [$I$(3).DONE]);
});
})()
), Clazz.new_($I$(4,1).c$$java_util_concurrent_Callable,[this, null, callable],P$.SwingWorker$2));
this.state=$I$(3).PENDING;
this.propertyChangeSupport=Clazz.new_($I$(5,1).c$$O,[this, null, this]);
this.doProcess=null;
this.doNotifyProgressChange=null;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.future.run$();
});

Clazz.newMeth(C$, 'publish$OA',  function (chunks) {
{
if (this.doProcess == null ) {
this.doProcess=((P$.SwingWorker$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.swing.AccumulativeRunnable'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$java_util_List',  function (args) {
this.b$['javax.swing.SwingWorker'].process$java_util_List.apply(this.b$['javax.swing.SwingWorker'], [args]);
});

Clazz.newMeth(C$, 'submit$',  function () {
this.b$['javax.swing.SwingWorker'].doSubmit.add$OA(Clazz.array(Runnable, -1, [this]));
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.SwingWorker$3));
}}this.doProcess.add$OA(chunks);
});

Clazz.newMeth(C$, 'process$java_util_List',  function (chunks) {
});

Clazz.newMeth(C$, 'done$',  function () {
});

Clazz.newMeth(C$, 'setProgress$I',  function (progress) {
if (progress < 0 || progress > 100 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["the value should be from 0 to 100"]);
}if (this.progress == progress) {
return;
}var oldProgress=this.progress;
this.progress=progress;
if (!this.getPropertyChangeSupport$().hasListeners$S("progress")) {
return;
}{
if (this.doNotifyProgressChange == null ) {
this.doNotifyProgressChange=((P$.SwingWorker$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.swing.AccumulativeRunnable'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$java_util_List',  function (args) {
this.b$['javax.swing.SwingWorker'].firePropertyChange$S$O$O.apply(this.b$['javax.swing.SwingWorker'], ["progress", args.get$I(0), args.get$I(args.size$() - 1)]);
});

Clazz.newMeth(C$, 'submit$',  function () {
this.b$['javax.swing.SwingWorker'].doSubmit.add$OA(Clazz.array(Runnable, -1, [this]));
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.SwingWorker$4));
}}this.doNotifyProgressChange.add$OA(Clazz.array(Integer, -1, [Integer.valueOf$I(oldProgress), Integer.valueOf$I(progress)]));
});

Clazz.newMeth(C$, 'getProgress$',  function () {
return this.progress;
});

Clazz.newMeth(C$, 'execute$',  function () {
C$.getWorkersExecutorService$().execute$Runnable(this);
});

Clazz.newMeth(C$, 'cancel$Z',  function (mayInterruptIfRunning) {
return this.future.cancel$Z(mayInterruptIfRunning);
});

Clazz.newMeth(C$, 'isCancelled$',  function () {
return this.future.isCancelled$();
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.future.isDone$();
});

Clazz.newMeth(C$, 'get$',  function () {
return this.future.get$();
});

Clazz.newMeth(C$, 'get$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.future.get$J$java_util_concurrent_TimeUnit(timeout, unit);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.getPropertyChangeSupport$().addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.getPropertyChangeSupport$().removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
this.getPropertyChangeSupport$().firePropertyChange$S$O$O(propertyName, oldValue, newValue);
});

Clazz.newMeth(C$, 'getPropertyChangeSupport$',  function () {
return this.propertyChangeSupport;
});

Clazz.newMeth(C$, 'getState$',  function () {
if (this.isDone$()) {
return $I$(3).DONE;
} else {
return this.state;
}});

Clazz.newMeth(C$, 'setState$javax_swing_SwingWorker_StateValue',  function (state) {
var old=this.state;
this.state=state;
this.firePropertyChange$S$O$O("state", old, state);
}, p$1);

Clazz.newMeth(C$, 'doneEDT',  function () {
var doDone=((P$.SwingWorker$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.SwingWorker'].done$.apply(this.b$['javax.swing.SwingWorker'], []);
});
})()
), Clazz.new_(P$.SwingWorker$5.$init$,[this, null]));
if ($I$(2).isEventDispatchThread$()) {
doDone.run$();
} else {
this.doSubmit.add$OA(Clazz.array(Runnable, -1, [doDone]));
}}, p$1);

Clazz.newMeth(C$, 'getWorkersExecutorService$',  function () {
var appContext=$I$(7).getAppContext$();
var executorService=appContext.get$O(Clazz.getClass(C$));
if (executorService == null ) {
var threadFactory=((P$.SwingWorker$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.ThreadFactory', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultFactory=$I$(8).defaultThreadFactory$();
},1);

C$.$fields$=[['O',['defaultFactory','java.util.concurrent.ThreadFactory']]]

Clazz.newMeth(C$, 'newThread$Runnable',  function (r) {
var thread=this.defaultFactory.newThread$Runnable(r);
thread.setName$S("SwingWorker-" + thread.getName$());
thread.setDaemon$Z(true);
return thread;
});
})()
), Clazz.new_(P$.SwingWorker$6.$init$,[this, null]));
executorService=Clazz.new_([1, 1, 10, $I$(10).MINUTES, Clazz.new_($I$(11,1)), threadFactory],$I$(9,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory);
appContext.put$O$O(Clazz.getClass(C$), executorService);
var es=executorService;
appContext.addPropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", ((P$.SwingWorker$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (pce) {
var disposed=(pce.getNewValue$()).valueOf();
if (disposed) {
this.$finals$.es.shutdown$();
}});
})()
), Clazz.new_(P$.SwingWorker$7.$init$,[this, {es:es}])));
}return executorService;
}, 1);

Clazz.newMeth(C$, 'getDoSubmit$',  function () {
{
var appContext=$I$(7).getAppContext$();
var doSubmit=appContext.get$O(C$.DO_SUBMIT_KEY);
if (doSubmit == null ) {
doSubmit=Clazz.new_($I$(12,1));
appContext.put$O$O(C$.DO_SUBMIT_KEY, doSubmit);
}return doSubmit;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DO_SUBMIT_KEY="SwingWorker_doSubmit";
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.SwingWorker, "StateValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PENDING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STARTED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "DONE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingWorker, "DoSubmitAccumulativeRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.AccumulativeRunnable', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$java_util_List',  function (args) {
for (var runnable, $runnable = args.iterator$(); $runnable.hasNext$()&&((runnable=($runnable.next$())),1);) {
runnable.run$();
}
});

Clazz.newMeth(C$, 'submit$',  function () {
var timer=Clazz.new_($I$(1,1).c$$I$java_awt_event_ActionListener,[33, this]);
timer.setRepeats$Z(false);
timer.start$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (event) {
this.run$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingWorker, "SwingWorkerPropertyChangeSupport", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.beans.PropertyChangeSupport');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$O',  function (source) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'firePropertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if ($I$(2).isEventDispatchThread$()) {
C$.superclazz.prototype.firePropertyChange$java_beans_PropertyChangeEvent.apply(this, [evt]);
} else {
this.b$['javax.swing.SwingWorker'].doSubmit.add$OA(Clazz.array(Runnable, -1, [((P$.SwingWorker$SwingWorkerPropertyChangeSupport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingWorker$SwingWorkerPropertyChangeSupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.SwingWorker.SwingWorkerPropertyChangeSupport'].firePropertyChange$java_beans_PropertyChangeEvent.apply(this.b$['javax.swing.SwingWorker.SwingWorkerPropertyChangeSupport'], [this.$finals$.evt]);
});
})()
), Clazz.new_(P$.SwingWorker$SwingWorkerPropertyChangeSupport$1.$init$,[this, {evt:evt}]))]));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
