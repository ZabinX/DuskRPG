(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicLong','java.util.concurrent.atomic.AtomicInteger','ThreadLocal','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LogRecord", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['needToInferCaller'],'I',['threadID'],'J',['sequenceNumber','millis'],'S',['sourceClassName','sourceMethodName','message','loggerName','resourceBundleName'],'O',['level','java.util.logging.Level','thrown','Throwable','parameters','Object[]']]
,['O',['globalSequenceNumber','java.util.concurrent.atomic.AtomicLong','nextThreadId','java.util.concurrent.atomic.AtomicInteger','threadIds','ThreadLocal']]]

Clazz.newMeth(C$, 'defaultThreadID',  function () {
var tid=$I$(4).currentThread$().getId$();
if (Long.$lt(tid,1073741823 )) {
return Long.$ival(tid);
} else {
var id=C$.threadIds.get$();
if (id == null ) {
id=Integer.valueOf$I(C$.nextThreadId.getAndIncrement$());
C$.threadIds.set$O(id);
}return (id).$c();
}}, p$1);

Clazz.newMeth(C$, 'c$$java_util_logging_Level$S',  function (level, msg) {
;C$.$init$.apply(this);
level.getClass$();
this.level=level;
this.message=msg;
this.sequenceNumber=C$.globalSequenceNumber.getAndIncrement$();
this.threadID=p$1.defaultThreadID.apply(this, []);
this.millis=System.currentTimeMillis$();
this.needToInferCaller=true;
}, 1);

Clazz.newMeth(C$, 'getLoggerName$',  function () {
return this.loggerName;
});

Clazz.newMeth(C$, 'setLoggerName$S',  function (name) {
this.loggerName=name;
});

Clazz.newMeth(C$, 'getResourceBundle$',  function () {
return null;
});

Clazz.newMeth(C$, 'setResourceBundle$java_util_ResourceBundle',  function (bundle) {
});

Clazz.newMeth(C$, 'getResourceBundleName$',  function () {
return this.resourceBundleName;
});

Clazz.newMeth(C$, 'setResourceBundleName$S',  function (name) {
this.resourceBundleName=name;
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level',  function (level) {
if (level == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.level=level;
});

Clazz.newMeth(C$, 'getSequenceNumber$',  function () {
return this.sequenceNumber;
});

Clazz.newMeth(C$, 'setSequenceNumber$J',  function (seq) {
this.sequenceNumber=seq;
});

Clazz.newMeth(C$, 'getSourceClassName$',  function () {
if (this.needToInferCaller) {
p$1.inferCaller.apply(this, []);
}return this.sourceClassName;
});

Clazz.newMeth(C$, 'setSourceClassName$S',  function (sourceClassName) {
this.sourceClassName=sourceClassName;
this.needToInferCaller=false;
});

Clazz.newMeth(C$, 'getSourceMethodName$',  function () {
if (this.needToInferCaller) {
p$1.inferCaller.apply(this, []);
}return this.sourceMethodName;
});

Clazz.newMeth(C$, 'setSourceMethodName$S',  function (sourceMethodName) {
this.sourceMethodName=sourceMethodName;
this.needToInferCaller=false;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return this.message;
});

Clazz.newMeth(C$, 'setMessage$S',  function (message) {
this.message=message;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return this.parameters;
});

Clazz.newMeth(C$, 'setParameters$OA',  function (parameters) {
this.parameters=parameters;
});

Clazz.newMeth(C$, 'getThreadID$',  function () {
return this.threadID;
});

Clazz.newMeth(C$, 'setThreadID$I',  function (threadID) {
this.threadID=threadID;
});

Clazz.newMeth(C$, 'getMillis$',  function () {
return this.millis;
});

Clazz.newMeth(C$, 'setMillis$J',  function (millis) {
this.millis=millis;
});

Clazz.newMeth(C$, 'getThrown$',  function () {
return this.thrown;
});

Clazz.newMeth(C$, 'setThrown$Throwable',  function (thrown) {
this.thrown=thrown;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (out) {
out.defaultWriteObject$();
out.writeByte$I(1);
out.writeByte$I(0);
if (this.parameters == null ) {
out.writeInt$I(-1);
return;
}out.writeInt$I(this.parameters.length);
for (var i=0; i < this.parameters.length; i++) {
if (this.parameters[i] == null ) {
out.writeObject$O(null);
} else {
out.writeObject$O(this.parameters[i].toString());
}}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
$in.defaultReadObject$();
var major=$in.readByte$();
var minor=$in.readByte$();
if (major != 1) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["LogRecord: bad version: " + major + "." + minor ]);
}var len=$in.readInt$();
if (len == -1) {
this.parameters=null;
} else {
this.parameters=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < this.parameters.length; i++) {
this.parameters[i]=$in.readObject$();
}
}this.needToInferCaller=false;
}, p$1);

Clazz.newMeth(C$, 'inferCaller',  function () {
this.needToInferCaller=false;
var depth=20;
var lookingForLogger=true;
var c=arguments.callee.caller ||null;
for (var ix=0; ix < depth && c != null  ; ix++) {
var clazz=(c.exClazz ||null);
if (clazz == null ) return;
var cname=clazz.__CLASS_NAME__ ||"?";
var isLoggerImpl=p$1.isLoggerImplFrame$S.apply(this, [cname]);
if (lookingForLogger) {
if (isLoggerImpl) {
lookingForLogger=false;
}} else {
if (!isLoggerImpl) {
if (!cname.startsWith$S("java.lang.reflect.") && !cname.startsWith$S("sun.reflect.") ) {
this.setSourceClassName$S(cname);
var mname=c.exName ||null;
this.setSourceMethodName$S(mname);
return;
}}}
c = c.caller;
}
}, p$1);

Clazz.newMeth(C$, 'isLoggerImplFrame$S',  function (cname) {
return (cname.equals$O("java.util.logging.Logger") || cname.startsWith$S("java.util.logging.LoggingProxyImpl") || cname.startsWith$S("sun.util.logging.")  );
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.globalSequenceNumber=Clazz.new_($I$(1,1).c$$J,[0]);
C$.nextThreadId=Clazz.new_($I$(2,1).c$$I,[1073741823]);
C$.threadIds=Clazz.new_($I$(3,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
