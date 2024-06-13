(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.logging.LogManager','java.util.logging.Level','java.util.logging.SimpleFormatter','java.util.logging.LogRecord']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemoryHandler", null, 'java.util.logging.Handler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size','start','count'],'O',['pushLevel','java.util.logging.Level','target','java.util.logging.Handler','buffer','java.util.logging.LogRecord[]']]]

Clazz.newMeth(C$, 'configure',  function () {
var manager=$I$(1).getLogManager$();
var cname=this.getClass$().getName$();
this.pushLevel=manager.getLevelProperty$S$java_util_logging_Level(cname + ".push", $I$(2).SEVERE);
this.size=manager.getIntProperty$S$I(cname + ".size", 1000);
if (this.size <= 0) {
this.size=1000;
}this.setLevel$java_util_logging_Level(manager.getLevelProperty$S$java_util_logging_Level(cname + ".level", $I$(2).ALL));
this.setFilter$java_util_logging_Filter(manager.getFilterProperty$S$java_util_logging_Filter(cname + ".filter", null));
this.setFormatter$java_util_logging_Formatter(manager.getFormatterProperty$S$java_util_logging_Formatter(cname + ".formatter", Clazz.new_($I$(3,1))));
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.sealed=false;
p$1.configure.apply(this, []);
this.sealed=true;
var manager=$I$(1).getLogManager$();
var handlerName=this.getClass$().getName$();
var targetName=manager.getProperty$S(handlerName + ".target");
if (targetName == null ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["The handler " + handlerName + " does not specify a target" ]);
}var clz;
try {
clz=ClassLoader.getSystemClassLoader$().loadClass$S(targetName);
this.target=clz.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["MemoryHandler can't load handler target \"" + targetName + "\"" , e]);
} else {
throw e;
}
}
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init',  function () {
this.buffer=Clazz.array($I$(4), [this.size]);
this.start=0;
this.count=0;
}, p$1);

Clazz.newMeth(C$, 'c$$java_util_logging_Handler$I$java_util_logging_Level',  function (target, size, pushLevel) {
Clazz.super_(C$, this);
if (target == null  || pushLevel == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.sealed=false;
p$1.configure.apply(this, []);
this.sealed=true;
this.target=target;
this.pushLevel=pushLevel;
this.size=size;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'publish$java_util_logging_LogRecord',  function (record) {
if (!this.isLoggable$java_util_logging_LogRecord(record)) {
return;
}var ix=(this.start + this.count) % this.buffer.length;
this.buffer[ix]=record;
if (this.count < this.buffer.length) {
++this.count;
} else {
++this.start;
this.start%=this.buffer.length;
}if (record.getLevel$().intValue$() >= this.pushLevel.intValue$()) {
this.push$();
}});

Clazz.newMeth(C$, 'push$',  function () {
for (var i=0; i < this.count; i++) {
var ix=(this.start + i) % this.buffer.length;
var record=this.buffer[ix];
this.target.publish$java_util_logging_LogRecord(record);
}
this.start=0;
this.count=0;
});

Clazz.newMeth(C$, 'flush$',  function () {
this.target.flush$();
});

Clazz.newMeth(C$, 'close$',  function () {
this.target.close$();
this.setLevel$java_util_logging_Level($I$(2).OFF);
});

Clazz.newMeth(C$, 'setPushLevel$java_util_logging_Level',  function (newLevel) {
if (newLevel == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.checkPermission$();
this.pushLevel=newLevel;
});

Clazz.newMeth(C$, 'getPushLevel$',  function () {
return this.pushLevel;
});

Clazz.newMeth(C$, 'isLoggable$java_util_logging_LogRecord',  function (record) {
return C$.superclazz.prototype.isLoggable$java_util_logging_LogRecord.apply(this, [record]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
