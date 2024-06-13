(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},p$2={},I$=[[0,'java.util.Hashtable',['java.util.logging.LogManager','.LogNode'],'java.util.logging.LogManager','java.util.logging.Logger',['java.util.logging.LogManager','.LoggerWeakRef'],'java.util.HashMap','java.util.logging.ConsoleHandler','AssertionError','java.util.logging.Level','Thread','java.util.Properties',['java.util.logging.LogManager','.SystemLoggerContext'],['java.util.logging.LogManager','.LoggerContext'],'Runtime',['java.util.logging.LogManager','.Cleaner'],['java.util.logging.LogManager','.RootLogger'],'java.util.Objects','java.util.ArrayList',['java.util.logging.LogManager','.Beans'],'java.util.logging.Logging']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LogManager", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Cleaner',2],['LoggerContext',0],['SystemLoggerContext',16],['LoggerWeakRef',16],['LogNode',10],['RootLogger',18],['Beans',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.props=Clazz.new_($I$(11,1));
this.listenerMap=Clazz.new_($I$(6,1));
this.systemContext=Clazz.new_($I$(12,1),[this, null]);
this.userContext=Clazz.new_($I$(13,1),[this, null]);
this.initializedGlobalHandlers=false;
this.initializedCalled=false;
this.initializationDone=false;
},1);

C$.$fields$=[['Z',['initializedGlobalHandlers','deathImminent','initializedCalled','initializationDone'],'O',['props','java.util.Properties','listenerMap','java.util.Map','systemContext','java.util.logging.LogManager.LoggerContext','+userContext','rootLogger','java.util.logging.Logger']]
,['O',['manager','java.util.logging.LogManager','defaultLevel','java.util.logging.Level','loggingMXBean','java.util.logging.LoggingMXBean']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Void.apply(this, [C$.checkSubclassPermissions$()]);
}, 1);

Clazz.newMeth(C$, 'c$$Void',  function (checked) {
;C$.$init$.apply(this);
try {
$I$(14).getRuntime$().addShutdownHook$Thread(Clazz.new_($I$(15,1),[this, null]));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'checkSubclassPermissions$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'ensureLogManagerInitialized$',  function () {
var owner=this;
if (this.initializationDone || owner !== C$.manager  ) {
return;
}{
var isRecursiveInitialization=(this.initializedCalled == true );
Clazz.assert(C$, this, function(){return this.initializedCalled || !this.initializationDone }, function(){return "Initialization can't be done if initialized has not been called!"});
if (isRecursiveInitialization || this.initializationDone ) {
return;
}this.initializedCalled=true;
try {
owner.rootLogger=Clazz.new_($I$(16,1),[owner, null]);
owner.addLogger$java_util_logging_Logger(owner.rootLogger);
if (!owner.rootLogger.isLevelInitialized$()) {
owner.rootLogger.setLevel$java_util_logging_Level(C$.defaultLevel);
}var global=$I$(4).global;
owner.addLogger$java_util_logging_Logger(global);
} finally {
this.initializationDone=true;
}
}});

Clazz.newMeth(C$, 'getLogManager$',  function () {
if (C$.manager != null ) {
C$.manager.ensureLogManagerInitialized$();
}return C$.manager;
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (l) {
var listener=$I$(17).requireNonNull$O(l);
this.checkPermission$();
{
var value=this.listenerMap.get$O(listener);
value=Integer.valueOf$I((value == null ) ? 1 : (((value).$c() + 1)|0));
this.listenerMap.put$O$O(listener, value);
}});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (l) {
this.checkPermission$();
if (l != null ) {
var listener=l;
{
var value=this.listenerMap.get$O(listener);
if (value != null ) {
var i=value.intValue$();
if (i == 1) {
this.listenerMap.remove$O(listener);
} else {
Clazz.assert(C$, this, function(){return i > 1});
this.listenerMap.put$O$O(listener, Integer.valueOf$I(i - 1));
}}}}});

Clazz.newMeth(C$, 'getUserContext',  function () {
var context=null;
return context != null  ? context : this.userContext;
}, p$2);

Clazz.newMeth(C$, 'getSystemContext$',  function () {
return this.systemContext;
});

Clazz.newMeth(C$, 'contexts',  function () {
var cxs=Clazz.new_($I$(18,1));
cxs.add$O(this.getSystemContext$());
cxs.add$O(p$2.getUserContext.apply(this, []));
return cxs;
}, p$2);

Clazz.newMeth(C$, 'demandLogger$S$S$Class',  function (name, resourceBundleName, $caller) {
var result=this.getLogger$S(name);
if (result == null ) {
var newLogger=Clazz.new_($I$(4,1).c$$S$S$Class$java_util_logging_LogManager$Z,[name, resourceBundleName, $caller, this, false]);
do {
if (this.addLogger$java_util_logging_Logger(newLogger)) {
return newLogger;
}result=this.getLogger$S(name);
} while (result == null );
}return result;
});

Clazz.newMeth(C$, 'demandSystemLogger$S$S',  function (name, resourceBundleName) {
var sysLogger=this.getSystemContext$().demandLogger$S$S(name, resourceBundleName);
var logger;
do {
if (this.addLogger$java_util_logging_Logger(sysLogger)) {
logger=sysLogger;
} else {
logger=this.getLogger$S(name);
}} while (logger == null );
if (logger !== sysLogger  && sysLogger.accessCheckedHandlers$().length == 0 ) {
var l=logger;
for (var hdl, $hdl = 0, $$hdl = l.accessCheckedHandlers$(); $hdl<$$hdl.length&&((hdl=($$hdl[$hdl])),1);$hdl++) {
sysLogger.addHandler$java_util_logging_Handler(hdl);
}
}return sysLogger;
});

Clazz.newMeth(C$, 'loadLoggerHandlers$java_util_logging_Logger$S$S',  function (logger, name, handlersPropertyName) {
var names=p$2.parseClassNames$S.apply(this, [handlersPropertyName]);
for (var i=0; i < names.length; i++) {
var word=names[i];
try {
var clz=ClassLoader.getSystemClassLoader$().loadClass$S(word);
var hdl=clz.newInstance$();
var levs=this.getProperty$S(word + ".level");
if (levs != null ) {
var l=$I$(9).findLevel$S(levs);
if (l != null ) {
hdl.setLevel$java_util_logging_Level(l);
} else {
System.err.println$S("Can't set level for " + word);
}}logger.addHandler$java_util_logging_Handler(hdl);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Can't load log handler \"" + word + "\"" );
System.err.println$S("" + ex);
ex.printStackTrace$();
} else {
throw ex;
}
}
}
}, p$2);

Clazz.newMeth(C$, 'addLogger$java_util_logging_Logger',  function (logger) {
var name=logger.getName$();
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var cx=p$2.getUserContext.apply(this, []);
if (cx.addLocalLogger$java_util_logging_Logger(logger)) {
p$2.loadLoggerHandlers$java_util_logging_Logger$S$S.apply(this, [logger, name, name + ".handlers"]);
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'doSetLevel$java_util_logging_Logger$java_util_logging_Level',  function (logger, level) {
logger.setLevel$java_util_logging_Level(level);
}, 1);

Clazz.newMeth(C$, 'doSetParent$java_util_logging_Logger$java_util_logging_Logger',  function (logger, parent) {
logger.setParent$java_util_logging_Logger(parent);
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
return p$2.getUserContext.apply(this, []).findLogger$S(name);
});

Clazz.newMeth(C$, 'getLoggerNames$',  function () {
return p$2.getUserContext.apply(this, []).getLoggerNames$();
});

Clazz.newMeth(C$, 'readConfiguration$',  function () {
});

Clazz.newMeth(C$, 'reset$',  function () {
this.checkPermission$();
{
this.props=Clazz.new_($I$(11,1));
this.initializedGlobalHandlers=true;
}for (var cx, $cx = p$2.contexts.apply(this, []).iterator$(); $cx.hasNext$()&&((cx=($cx.next$())),1);) {
var enum_=cx.getLoggerNames$();
while (enum_.hasMoreElements$()){
var name=enum_.nextElement$();
var logger=cx.findLogger$S(name);
if (logger != null ) {
p$2.resetLogger$java_util_logging_Logger.apply(this, [logger]);
}}
}
});

Clazz.newMeth(C$, 'resetLogger$java_util_logging_Logger',  function (logger) {
var targets=logger.getHandlers$();
for (var i=0; i < targets.length; i++) {
var h=targets[i];
logger.removeHandler$java_util_logging_Handler(h);
try {
h.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
var name=logger.getName$();
if (name != null  && name.equals$O("") ) {
logger.setLevel$java_util_logging_Level(C$.defaultLevel);
} else {
logger.setLevel$java_util_logging_Level(null);
}}, p$2);

Clazz.newMeth(C$, 'parseClassNames$S',  function (propertyName) {
var hands=this.getProperty$S(propertyName);
if (hands == null ) {
return Clazz.array(String, [0]);
}hands=hands.trim$();
var ix=0;
var result=Clazz.new_($I$(18,1));
while (ix < hands.length$()){
var end=ix;
while (end < hands.length$()){
if (Character.isWhitespace$C(hands.charAt$I(end))) {
break;
}if (hands.charAt$I(end) == ",") {
break;
}++end;
}
var word=hands.substring$I$I(ix, end);
ix=end + 1;
word=word.trim$();
if (word.length$() == 0) {
continue;
}result.add$O(word);
}
return result.toArray$OA(Clazz.array(String, [result.size$()]));
}, p$2);

Clazz.newMeth(C$, 'readConfiguration$java_io_InputStream',  function (ins) {
this.reset$();
p$2.setLevelsOnExistingLoggers.apply(this, []);
var listeners=null;
{
if (!this.listenerMap.isEmpty$()) listeners=Clazz.new_($I$(6,1).c$$java_util_Map,[this.listenerMap]);
}if (listeners != null ) {
Clazz.assert(C$, this, function(){return $I$(19).isBeansPresent$()});
var ev=$I$(19,"newPropertyChangeEvent$O$S$O$O",[Clazz.getClass(C$), null, null, null]);
for (var entry, $entry = listeners.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var listener=entry.getKey$();
var count=entry.getValue$().intValue$();
for (var i=0; i < count; i++) {
$I$(19).invokePropertyChange$O$O(listener, ev);
}
}
}{
this.initializedGlobalHandlers=false;
}});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.props.getProperty$S(name);
});

Clazz.newMeth(C$, 'getStringProperty$S$S',  function (name, defaultValue) {
var val=this.getProperty$S(name);
if (val == null ) {
return defaultValue;
}return val.trim$();
});

Clazz.newMeth(C$, 'getIntProperty$S$I',  function (name, defaultValue) {
var val=this.getProperty$S(name);
if (val == null ) {
return defaultValue;
}try {
return Integer.parseInt$S(val.trim$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return defaultValue;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getBooleanProperty$S$Z',  function (name, defaultValue) {
var val=this.getProperty$S(name);
if (val == null ) {
return defaultValue;
}val=val.toLowerCase$();
if (val.equals$O("true") || val.equals$O("1") ) {
return true;
} else if (val.equals$O("false") || val.equals$O("0") ) {
return false;
}return defaultValue;
});

Clazz.newMeth(C$, 'getLevelProperty$S$java_util_logging_Level',  function (name, defaultValue) {
var val=this.getProperty$S(name);
if (val == null ) {
return defaultValue;
}var l=$I$(9,"findLevel$S",[val.trim$()]);
return l != null  ? l : defaultValue;
});

Clazz.newMeth(C$, 'getFilterProperty$S$java_util_logging_Filter',  function (name, defaultValue) {
var val=this.getProperty$S(name);
try {
if (val != null ) {
var clz=ClassLoader.getSystemClassLoader$().loadClass$S(val);
return clz.newInstance$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return defaultValue;
});

Clazz.newMeth(C$, 'getFormatterProperty$S$java_util_logging_Formatter',  function (name, defaultValue) {
var val=this.getProperty$S(name);
try {
if (val != null ) {
var clz=ClassLoader.getSystemClassLoader$().loadClass$S(val);
return clz.newInstance$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return defaultValue;
});

Clazz.newMeth(C$, 'initializeGlobalHandlers',  function () {
if (this.initializedGlobalHandlers) {
return;
}this.initializedGlobalHandlers=true;
if (this.deathImminent) {
return;
}p$2.loadLoggerHandlers$java_util_logging_Logger$S$S.apply(this, [this.rootLogger, null, "handlers"]);
}, p$2);

Clazz.newMeth(C$, 'checkPermission$',  function () {
});

Clazz.newMeth(C$, 'checkAccess$',  function () {
this.checkPermission$();
});

Clazz.newMeth(C$, 'setLevelsOnExistingLoggers',  function () {
var enum_=this.props.propertyNames$();
while (enum_.hasMoreElements$()){
var key=enum_.nextElement$();
if (!key.endsWith$S(".level")) {
continue;
}var ix=key.length$() - 6;
var name=key.substring$I$I(0, ix);
var level=this.getLevelProperty$S$java_util_logging_Level(key, null);
if (level == null ) {
System.err.println$S("Bad level value for property: " + key);
continue;
}for (var cx, $cx = p$2.contexts.apply(this, []).iterator$(); $cx.hasNext$()&&((cx=($cx.next$())),1);) {
var l=cx.findLogger$S(name);
if (l == null ) {
continue;
}l.setLevel$java_util_logging_Level(level);
}
}
}, p$2);

Clazz.newMeth(C$, 'getLoggingMXBean$',  function () {
if (C$.loggingMXBean == null ) {
C$.loggingMXBean=Clazz.new_($I$(20,1));
}return C$.loggingMXBean;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.defaultLevel=$I$(9).INFO;
{
var mgr=null;
var cname=null;
try {
cname=System.getProperty$S("java.util.logging.manager");
if (cname != null ) {
try {
var clz=ClassLoader.getSystemClassLoader$().loadClass$S(cname);
mgr=clz.newInstance$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
var clz=$I$(10).currentThread$().getContextClassLoader$().loadClass$S(cname);
mgr=clz.newInstance$();
} else {
throw ex;
}
}
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Could not load Logmanager \"" + cname + "\"" );
ex.printStackTrace$();
} else {
throw ex;
}
}
if (mgr == null ) {
mgr=Clazz.new_(C$);
}C$.manager=mgr;
};
C$.loggingMXBean=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "Cleaner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setContextClassLoader$ClassLoader(null);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['java.util.logging.LogManager'].deathImminent=true;
this.b$['java.util.logging.LogManager'].initializedGlobalHandlers=true;
this.b$['java.util.logging.LogManager'].reset$.apply(this.b$['java.util.logging.LogManager'], []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "LoggerContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.namedLoggers=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['namedLoggers','java.util.Hashtable','root','java.util.logging.LogManager.LogNode']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.root=Clazz.new_($I$(2,1).c$$java_util_logging_LogManager_LogNode$java_util_logging_LogManager_LoggerContext,[null, this]);
}, 1);

Clazz.newMeth(C$, 'requiresDefaultLoggers$',  function () {
var requiresDefaultLoggers=(this.getOwner$() === $I$(3).manager );
if (requiresDefaultLoggers) {
this.getOwner$().ensureLogManagerInitialized$();
}return requiresDefaultLoggers;
});

Clazz.newMeth(C$, 'getOwner$',  function () {
return this.b$['java.util.logging.LogManager'];
});

Clazz.newMeth(C$, 'getRootLogger$',  function () {
return this.getOwner$().rootLogger;
});

Clazz.newMeth(C$, 'getGlobalLogger$',  function () {
var global=$I$(4).global;
return global;
});

Clazz.newMeth(C$, 'demandLogger$S$S',  function (name, resourceBundleName) {
var owner=this.getOwner$();
return owner.demandLogger$S$S$Class(name, resourceBundleName, null);
});

Clazz.newMeth(C$, 'ensureInitialized',  function () {
if (this.requiresDefaultLoggers$()) {
p$1.ensureDefaultLogger$java_util_logging_Logger.apply(this, [this.getRootLogger$()]);
p$1.ensureDefaultLogger$java_util_logging_Logger.apply(this, [this.getGlobalLogger$()]);
}}, p$1);

Clazz.newMeth(C$, 'findLogger$S',  function (name) {
p$1.ensureInitialized.apply(this, []);
var ref=this.namedLoggers.get$O(name);
if (ref == null ) {
return null;
}var logger=ref.get$();
if (logger == null ) {
ref.dispose$();
}return logger;
});

Clazz.newMeth(C$, 'ensureAllDefaultLoggers$java_util_logging_Logger',  function (logger) {
if (this.requiresDefaultLoggers$()) {
var name=logger.getName$();
if (!name.isEmpty$()) {
p$1.ensureDefaultLogger$java_util_logging_Logger.apply(this, [this.getRootLogger$()]);
if (!"global".equals$O(name)) {
p$1.ensureDefaultLogger$java_util_logging_Logger.apply(this, [this.getGlobalLogger$()]);
}}}}, p$1);

Clazz.newMeth(C$, 'ensureDefaultLogger$java_util_logging_Logger',  function (logger) {
if (!this.requiresDefaultLoggers$() || logger == null   || logger !== $I$(4).global  && logger !== this.b$['java.util.logging.LogManager'].rootLogger   ) {
Clazz.assert(C$, this, function(){return logger == null });
return;
}if (!this.namedLoggers.containsKey$O(logger.getName$())) {
this.addLocalLogger$java_util_logging_Logger$Z(logger, false);
}}, p$1);

Clazz.newMeth(C$, 'addLocalLogger$java_util_logging_Logger',  function (logger) {
return this.addLocalLogger$java_util_logging_Logger$Z(logger, this.requiresDefaultLoggers$());
});

Clazz.newMeth(C$, 'addLocalLogger$java_util_logging_Logger$Z',  function (logger, addDefaultLoggersIfNeeded) {
if (addDefaultLoggersIfNeeded) {
p$1.ensureAllDefaultLoggers$java_util_logging_Logger.apply(this, [logger]);
}var name=logger.getName$();
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var ref=this.namedLoggers.get$O(name);
if (ref != null ) {
if (ref.get$() == null ) {
ref.dispose$();
} else {
return false;
}}var owner=this.getOwner$();
logger.setLogManager$java_util_logging_LogManager(owner);
ref=Clazz.new_($I$(5,1).c$$java_util_logging_Logger,[owner, null, logger]);
this.namedLoggers.put$O$O(name, ref);
var level=owner.getLevelProperty$S$java_util_logging_Level(name + ".level", null);
if (level != null  && !logger.isLevelInitialized$() ) {
$I$(3).doSetLevel$java_util_logging_Logger$java_util_logging_Level(logger, level);
}p$1.processParentHandlers$java_util_logging_Logger$S.apply(this, [logger, name]);
var node=this.getNode$S(name);
node.loggerRef=ref;
var parent=null;
var nodep=node.parent;
while (nodep != null ){
var nodeRef=nodep.loggerRef;
if (nodeRef != null ) {
parent=nodeRef.get$();
if (parent != null ) {
break;
}}nodep=nodep.parent;
}
if (parent != null ) {
$I$(3).doSetParent$java_util_logging_Logger$java_util_logging_Logger(logger, parent);
}node.walkAndSetParent$java_util_logging_Logger(logger);
ref.setNode$java_util_logging_LogManager_LogNode(node);
return true;
});

Clazz.newMeth(C$, 'removeLoggerRef$S$java_util_logging_LogManager_LoggerWeakRef',  function (name, ref) {
this.namedLoggers.remove$O$O(name, ref);
});

Clazz.newMeth(C$, 'getLoggerNames$',  function () {
p$1.ensureInitialized.apply(this, []);
return this.namedLoggers.keys$();
});

Clazz.newMeth(C$, 'processParentHandlers$java_util_logging_Logger$S',  function (logger, name) {
var owner=this.getOwner$();
if (logger !== owner.rootLogger ) {
var useParent=owner.getBooleanProperty$S$Z(name + ".useParentHandlers", true);
if (!useParent) {
logger.setUseParentHandlers$Z(false);
}}var ix=1;
for (; ; ) {
var ix2=name.indexOf$S$I(".", ix);
if (ix2 < 0) {
break;
}var pname=name.substring$I$I(0, ix2);
if (owner.getProperty$S(pname + ".level") != null  || owner.getProperty$S(pname + ".handlers") != null  ) {
this.demandLogger$S$S(pname, null);
}ix=ix2 + 1;
}
}, p$1);

Clazz.newMeth(C$, 'getNode$S',  function (name) {
if (name == null  || name.equals$O("") ) {
return this.root;
}var node=this.root;
while (name.length$() > 0){
var ix=name.indexOf$S(".");
var head;
if (ix > 0) {
head=name.substring$I$I(0, ix);
name=name.substring$I(ix + 1);
} else {
head=name;
name="";
}if (node.children == null ) {
node.children=Clazz.new_($I$(6,1));
}var child=node.children.get$O(head);
if (child == null ) {
child=Clazz.new_($I$(2,1).c$$java_util_logging_LogManager_LogNode$java_util_logging_LogManager_LoggerContext,[node, this]);
node.children.put$O$O(head, child);
}node=child;
}
return node;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "SystemLoggerContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.logging.LogManager','.LoggerContext']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'demandLogger$S$S',  function (name, resourceBundleName) {
var result=this.findLogger$S(name);
if (result == null ) {
var newLogger=Clazz.new_([name, resourceBundleName, null, this.getOwner$(), true],$I$(4,1).c$$S$S$Class$java_util_logging_LogManager$Z);
do {
if (this.addLocalLogger$java_util_logging_Logger(newLogger)) {
result=newLogger;
} else {
result=this.findLogger$S(name);
}} while (result == null );
}return result;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "LoggerWeakRef", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.disposed=false;
},1);

C$.$fields$=[['Z',['disposed','isValid'],'S',['name'],'O',['node','java.util.logging.LogManager.LogNode','parentRef','java.util.logging.Logger','+ref']]]

Clazz.newMeth(C$, 'c$$java_util_logging_Logger',  function (logger) {
;C$.$init$.apply(this);
this.ref=logger;
this.name=logger.getName$();
this.isValid=(this.name != null );
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
{
if (this.disposed) return;
this.disposed=true;
}var n=this.node;
if (n != null ) {
{
n.context.removeLoggerRef$S$java_util_logging_LogManager_LoggerWeakRef(this.name, this);
this.name=null;
if (n.loggerRef === this ) {
n.loggerRef=null;
}this.node=null;
}}if (this.parentRef != null ) {
var parent=this.parentRef;
if (parent != null ) {
parent.removeChildLogger$java_util_logging_LogManager_LoggerWeakRef(this);
}this.parentRef=null;
}});

Clazz.newMeth(C$, 'setNode$java_util_logging_LogManager_LogNode',  function (node) {
this.node=node;
});

Clazz.newMeth(C$, 'setParentRef$java_util_logging_Logger',  function (parentRef) {
this.parentRef=parentRef;
});

Clazz.newMeth(C$, 'get$',  function () {
if (!this.isValid) return null;
if (this.ref == null ) try {
this.ref=Clazz.forName(this.name).newInstance$();
this.isValid=true;
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
return this.ref;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "LogNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['children','java.util.HashMap','loggerRef','java.util.logging.LogManager.LoggerWeakRef','parent','java.util.logging.LogManager.LogNode','context','java.util.logging.LogManager.LoggerContext']]]

Clazz.newMeth(C$, 'c$$java_util_logging_LogManager_LogNode$java_util_logging_LogManager_LoggerContext',  function (parent, context) {
;C$.$init$.apply(this);
this.parent=parent;
this.context=context;
}, 1);

Clazz.newMeth(C$, 'walkAndSetParent$java_util_logging_Logger',  function (parent) {
if (this.children == null ) {
return;
}var values=this.children.values$().iterator$();
while (values.hasNext$()){
var node=values.next$();
var ref=node.loggerRef;
var logger=(ref == null ) ? null : ref.get$();
if (logger == null ) {
node.walkAndSetParent$java_util_logging_Logger(parent);
} else {
$I$(3).doSetParent$java_util_logging_Logger$java_util_logging_Logger(logger, parent);
}}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "RootLogger", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.logging.Logger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$Class$java_util_logging_LogManager$Z.apply(this,["", null, null, this.b$['java.util.logging.LogManager'], true]);C$.$init$.apply(this);
this.addHandler$java_util_logging_Handler(Clazz.new_($I$(7,1)));
}, 1);

Clazz.newMeth(C$, 'log$java_util_logging_LogRecord',  function (record) {
p$2.initializeGlobalHandlers.apply(this.b$['java.util.logging.LogManager'], []);
C$.superclazz.prototype.log$java_util_logging_LogRecord.apply(this, [record]);
});

Clazz.newMeth(C$, 'addHandler$java_util_logging_Handler',  function (h) {
p$2.initializeGlobalHandlers.apply(this.b$['java.util.logging.LogManager'], []);
C$.superclazz.prototype.addHandler$java_util_logging_Handler.apply(this, [h]);
});

Clazz.newMeth(C$, 'removeHandler$java_util_logging_Handler',  function (h) {
p$2.initializeGlobalHandlers.apply(this.b$['java.util.logging.LogManager'], []);
C$.superclazz.prototype.removeHandler$java_util_logging_Handler.apply(this, [h]);
});

Clazz.newMeth(C$, 'accessCheckedHandlers$',  function () {
p$2.initializeGlobalHandlers.apply(this.b$['java.util.logging.LogManager'], []);
return C$.superclazz.prototype.accessCheckedHandlers$.apply(this, []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "Beans", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['propertyChangeListenerClass','Class','+propertyChangeEventClass','propertyChangeMethod','java.lang.reflect.Method','propertyEventCtor','java.lang.reflect.Constructor']]]

Clazz.newMeth(C$, 'getClass$S',  function (name) {
try {
return Clazz.forName(name, true, Clazz.getClass(C$).getClassLoader$());
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getConstructor$Class$ClassA',  function (c, types) {
try {
return (c == null ) ? null : c.getDeclaredConstructor$ClassA(types);
} catch (x) {
if (Clazz.exceptionOf(x,"NoSuchMethodException")){
throw Clazz.new_($I$(8,1).c$$O,[x]);
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'getMethod$Class$S$ClassA',  function (c, name, types) {
try {
return (c == null ) ? null : c.getMethod$S$ClassA(name, types);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
throw Clazz.new_($I$(8,1).c$$O,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'isBeansPresent$',  function () {
return C$.propertyChangeListenerClass != null  && C$.propertyChangeEventClass != null  ;
}, 1);

Clazz.newMeth(C$, 'newPropertyChangeEvent$O$S$O$O',  function (source, prop, oldValue, newValue) {
try {
return C$.propertyEventCtor.newInstance$OA(Clazz.array(java.lang.Object, -1, [source, prop, oldValue, newValue]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException") || Clazz.exceptionOf(e$$,"IllegalAccessException")){
var x = e$$;
{
throw Clazz.new_($I$(8,1).c$$O,[x]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var x = e$$;
{
var cause=x.getCause$();
if (Clazz.instanceOf(cause, "java.lang.Error")) throw cause;
if (Clazz.instanceOf(cause, "java.lang.RuntimeException")) throw cause;
throw Clazz.new_($I$(8,1).c$$O,[x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'invokePropertyChange$O$O',  function (listener, ev) {
try {
C$.propertyChangeMethod.invoke$O$OA(listener, Clazz.array(java.lang.Object, -1, [ev]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var x = e$$;
{
throw Clazz.new_($I$(8,1).c$$O,[x]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var x = e$$;
{
var cause=x.getCause$();
if (Clazz.instanceOf(cause, "java.lang.Error")) throw cause;
if (Clazz.instanceOf(cause, "java.lang.RuntimeException")) throw cause;
throw Clazz.new_($I$(8,1).c$$O,[x]);
}
} else {
throw e$$;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.propertyChangeListenerClass=C$.getClass$S("java.beans.PropertyChangeListener");
C$.propertyChangeEventClass=C$.getClass$S("java.beans.PropertyChangeEvent");
C$.propertyChangeMethod=C$.getMethod$Class$S$ClassA(C$.propertyChangeListenerClass, "propertyChange", Clazz.array(Class, -1, [C$.propertyChangeEventClass]));
C$.propertyEventCtor=C$.getConstructor$Class$ClassA(C$.propertyChangeEventClass, Clazz.array(Class, -1, [Clazz.getClass(java.lang.Object), Clazz.getClass(String), Clazz.getClass(java.lang.Object), Clazz.getClass(java.lang.Object)]));
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
