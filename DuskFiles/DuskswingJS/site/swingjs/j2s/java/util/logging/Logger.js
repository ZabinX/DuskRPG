(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.logging.Logger','java.security.AccessController','java.util.logging.Handler','java.util.logging.Level',['java.util.logging.Logger','.LoggerBundle'],'java.util.concurrent.CopyOnWriteArrayList','java.util.logging.LogManager','sun.reflect.Reflection','java.util.logging.LogRecord','java.util.ArrayList',['java.util.logging.LogManager','.LoggerWeakRef']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Logger", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LoggerBundle',26],['SystemLoggerHelper',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.handlers=Clazz.new_($I$(6,1));
this.loggerBundle=C$.NO_RESOURCE_BUNDLE;
this.useParentHandlers=true;
},1);

C$.$fields$=[['Z',['useParentHandlers','anonymous','isSystemLogger'],'I',['levelValue'],'S',['name'],'O',['manager','java.util.logging.LogManager','handlers','java.util.concurrent.CopyOnWriteArrayList','loggerBundle','java.util.logging.Logger.LoggerBundle','filter','java.util.logging.Filter','parent','java.util.logging.Logger','kids','java.util.ArrayList','levelObject','java.util.logging.Level']]
,['I',['offValue'],'O',['emptyHandlers','java.util.logging.Handler[]','SYSTEM_BUNDLE','java.util.logging.Logger.LoggerBundle','+NO_RESOURCE_BUNDLE','global','java.util.logging.Logger']]]

Clazz.newMeth(C$, 'getGlobal$',  function () {
$I$(7).getLogManager$();
return C$.global;
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (name, resourceBundleName) {
C$.c$$S$S$Class$java_util_logging_LogManager$Z.apply(this, [name, resourceBundleName, null, $I$(7).getLogManager$(), false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Class$java_util_logging_LogManager$Z',  function (name, resourceBundleName, $caller, manager, isSystemLogger) {
;C$.$init$.apply(this);
this.manager=manager;
this.isSystemLogger=isSystemLogger;
this.name=name;
this.levelValue=$I$(4).INFO.intValue$();
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
this.isSystemLogger=true;
this.levelValue=$I$(4).INFO.intValue$();
}, 1);

Clazz.newMeth(C$, 'setLogManager$java_util_logging_LogManager',  function (manager) {
this.manager=manager;
});

Clazz.newMeth(C$, 'checkPermission',  function () {
if (!this.anonymous) {
if (this.manager == null ) {
this.manager=$I$(7).getLogManager$();
}this.manager.checkPermission$();
}}, p$1);

Clazz.newMeth(C$, 'demandLogger$S$S$Class',  function (name, resourceBundleName, $caller) {
var manager=$I$(7).getLogManager$();
return manager.demandLogger$S$S$Class(name, resourceBundleName, $caller);
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
return C$.demandLogger$S$S$Class(name, null, $I$(8).getCallerClass$());
}, 1);

Clazz.newMeth(C$, 'getLogger$S$S',  function (name, resourceBundleName) {
var callerClass=$I$(8).getCallerClass$();
var result=C$.demandLogger$S$S$Class(name, resourceBundleName, callerClass);
return result;
}, 1);

Clazz.newMeth(C$, 'getPlatformLogger$S',  function (name) {
var manager=$I$(7).getLogManager$();
var result=manager.demandSystemLogger$S$S(name, "sun.util.logging.resources.logging");
return result;
}, 1);

Clazz.newMeth(C$, 'getAnonymousLogger$',  function () {
return C$.getAnonymousLogger$S(null);
}, 1);

Clazz.newMeth(C$, 'getAnonymousLogger$S',  function (resourceBundleName) {
var manager=$I$(7).getLogManager$();
var result=Clazz.new_(C$.c$$S$S$Class$java_util_logging_LogManager$Z,[null, resourceBundleName, $I$(8).getCallerClass$(), manager, false]);
result.anonymous=true;
var root=manager.getLogger$S("");
p$1.doSetParent$java_util_logging_Logger.apply(result, [root]);
return result;
}, 1);

Clazz.newMeth(C$, 'getResourceBundle$',  function () {
return null;
});

Clazz.newMeth(C$, 'getResourceBundleName$',  function () {
return this.loggerBundle.resourceBundleName;
});

Clazz.newMeth(C$, 'setFilter$java_util_logging_Filter',  function (newFilter) {
p$1.checkPermission.apply(this, []);
this.filter=newFilter;
});

Clazz.newMeth(C$, 'getFilter$',  function () {
return this.filter;
});

Clazz.newMeth(C$, 'log$java_util_logging_LogRecord',  function (record) {
if (!this.isLoggable$java_util_logging_Level(record.getLevel$())) {
return;
}var theFilter=this.filter;
if (theFilter != null  && !theFilter.isLoggable$java_util_logging_LogRecord(record) ) {
return;
}var logger=this;
while (logger != null ){
var loggerHandlers=this.isSystemLogger ? logger.accessCheckedHandlers$() : logger.getHandlers$();
for (var handler, $handler = 0, $$handler = loggerHandlers; $handler<$$handler.length&&((handler=($$handler[$handler])),1);$handler++) {
handler.publish$java_util_logging_LogRecord(record);
}
var useParentHdls=this.isSystemLogger ? logger.useParentHandlers : logger.getUseParentHandlers$();
if (!useParentHdls) {
break;
}logger=this.isSystemLogger ? logger.parent : logger.getParent$();
}
});

Clazz.newMeth(C$, 'doLog$java_util_logging_LogRecord',  function (lr) {
lr.setLoggerName$S(this.name);
this.log$java_util_logging_LogRecord(lr);
}, p$1);

Clazz.newMeth(C$, 'log$java_util_logging_Level$S',  function (level, msg) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$java_util_function_Supplier',  function (level, msgSupplier) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_([level, msgSupplier.get$()],$I$(9,1).c$$java_util_logging_Level$S);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$O',  function (level, msg, param1) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
var params=Clazz.array(java.lang.Object, -1, [param1]);
lr.setParameters$OA(params);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$OA',  function (level, msg, params) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setParameters$OA(params);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$Throwable',  function (level, msg, thrown) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$Throwable$java_util_function_Supplier',  function (level, thrown, msgSupplier) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_([level, msgSupplier.get$()],$I$(9,1).c$$java_util_logging_Level$S);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'logp$java_util_logging_Level$S$S$S',  function (level, sourceClass, sourceMethod, msg) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'logp$java_util_logging_Level$S$S$java_util_function_Supplier',  function (level, sourceClass, sourceMethod, msgSupplier) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_([level, msgSupplier.get$()],$I$(9,1).c$$java_util_logging_Level$S);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'logp$java_util_logging_Level$S$S$S$O',  function (level, sourceClass, sourceMethod, msg, param1) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
var params=Clazz.array(java.lang.Object, -1, [param1]);
lr.setParameters$OA(params);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'logp$java_util_logging_Level$S$S$S$OA',  function (level, sourceClass, sourceMethod, msg, params) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setParameters$OA(params);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'logp$java_util_logging_Level$S$S$S$Throwable',  function (level, sourceClass, sourceMethod, msg, thrown) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'logp$java_util_logging_Level$S$S$Throwable$java_util_function_Supplier',  function (level, sourceClass, sourceMethod, thrown, msgSupplier) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_([level, msgSupplier.get$()],$I$(9,1).c$$java_util_logging_Level$S);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'doLog$java_util_logging_LogRecord$S',  function (lr, rbname) {
lr.setLoggerName$S(this.name);
this.log$java_util_logging_LogRecord(lr);
}, p$1);

Clazz.newMeth(C$, 'doLog$java_util_logging_LogRecord$java_util_ResourceBundle',  function (lr, rb) {
lr.setLoggerName$S(this.name);
if (rb != null ) {
lr.setResourceBundleName$S(rb.getBaseBundleName$());
lr.setResourceBundle$java_util_ResourceBundle(rb);
}this.log$java_util_logging_LogRecord(lr);
}, p$1);

Clazz.newMeth(C$, 'logrb$java_util_logging_Level$S$S$S$S',  function (level, sourceClass, sourceMethod, bundleName, msg) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
p$1.doLog$java_util_logging_LogRecord$S.apply(this, [lr, bundleName]);
});

Clazz.newMeth(C$, 'logrb$java_util_logging_Level$S$S$S$S$O',  function (level, sourceClass, sourceMethod, bundleName, msg, param1) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
var params=Clazz.array(java.lang.Object, -1, [param1]);
lr.setParameters$OA(params);
p$1.doLog$java_util_logging_LogRecord$S.apply(this, [lr, bundleName]);
});

Clazz.newMeth(C$, 'logrb$java_util_logging_Level$S$S$S$S$OA',  function (level, sourceClass, sourceMethod, bundleName, msg, params) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setParameters$OA(params);
p$1.doLog$java_util_logging_LogRecord$S.apply(this, [lr, bundleName]);
});

Clazz.newMeth(C$, 'logrb$java_util_logging_Level$S$S$java_util_ResourceBundle$S$OA',  function (level, sourceClass, sourceMethod, bundle, msg, params) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
if (params != null  && params.length != 0 ) {
lr.setParameters$OA(params);
}p$1.doLog$java_util_logging_LogRecord$java_util_ResourceBundle.apply(this, [lr, bundle]);
});

Clazz.newMeth(C$, 'logrb$java_util_logging_Level$S$S$S$S$Throwable',  function (level, sourceClass, sourceMethod, bundleName, msg, thrown) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord$S.apply(this, [lr, bundleName]);
});

Clazz.newMeth(C$, 'logrb$java_util_logging_Level$S$S$java_util_ResourceBundle$S$Throwable',  function (level, sourceClass, sourceMethod, bundle, msg, thrown) {
if (!this.isLoggable$java_util_logging_Level(level)) {
return;
}var lr=Clazz.new_($I$(9,1).c$$java_util_logging_Level$S,[level, msg]);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord$java_util_ResourceBundle.apply(this, [lr, bundle]);
});

Clazz.newMeth(C$, 'entering$S$S',  function (sourceClass, sourceMethod) {
this.logp$java_util_logging_Level$S$S$S($I$(4).FINER, sourceClass, sourceMethod, "ENTRY");
});

Clazz.newMeth(C$, 'entering$S$S$O',  function (sourceClass, sourceMethod, param1) {
this.logp$java_util_logging_Level$S$S$S$O($I$(4).FINER, sourceClass, sourceMethod, "ENTRY {0}", param1);
});

Clazz.newMeth(C$, 'entering$S$S$OA',  function (sourceClass, sourceMethod, params) {
var msg="ENTRY";
if (params == null ) {
this.logp$java_util_logging_Level$S$S$S($I$(4).FINER, sourceClass, sourceMethod, msg);
return;
}if (!this.isLoggable$java_util_logging_Level($I$(4).FINER)) return;
for (var i=0; i < params.length; i++) {
msg=msg + " {" + i + "}" ;
}
this.logp$java_util_logging_Level$S$S$S$OA($I$(4).FINER, sourceClass, sourceMethod, msg, params);
});

Clazz.newMeth(C$, 'exiting$S$S',  function (sourceClass, sourceMethod) {
this.logp$java_util_logging_Level$S$S$S($I$(4).FINER, sourceClass, sourceMethod, "RETURN");
});

Clazz.newMeth(C$, 'exiting$S$S$O',  function (sourceClass, sourceMethod, result) {
this.logp$java_util_logging_Level$S$S$S$O($I$(4).FINER, sourceClass, sourceMethod, "RETURN {0}", result);
});

Clazz.newMeth(C$, 'throwing$S$S$Throwable',  function (sourceClass, sourceMethod, thrown) {
if (!this.isLoggable$java_util_logging_Level($I$(4).FINER)) {
return;
}var lr=Clazz.new_([$I$(4).FINER, "THROW"],$I$(9,1).c$$java_util_logging_Level$S);
lr.setSourceClassName$S(sourceClass);
lr.setSourceMethodName$S(sourceMethod);
lr.setThrown$Throwable(thrown);
p$1.doLog$java_util_logging_LogRecord.apply(this, [lr]);
});

Clazz.newMeth(C$, 'severe$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).SEVERE, msg);
});

Clazz.newMeth(C$, 'warning$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).WARNING, msg);
});

Clazz.newMeth(C$, 'info$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).INFO, msg);
});

Clazz.newMeth(C$, 'config$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).CONFIG, msg);
});

Clazz.newMeth(C$, 'fine$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).FINE, msg);
});

Clazz.newMeth(C$, 'finer$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).FINER, msg);
});

Clazz.newMeth(C$, 'finest$S',  function (msg) {
this.log$java_util_logging_Level$S($I$(4).FINEST, msg);
});

Clazz.newMeth(C$, 'severe$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).SEVERE, msgSupplier);
});

Clazz.newMeth(C$, 'warning$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).WARNING, msgSupplier);
});

Clazz.newMeth(C$, 'info$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).INFO, msgSupplier);
});

Clazz.newMeth(C$, 'config$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).CONFIG, msgSupplier);
});

Clazz.newMeth(C$, 'fine$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).FINE, msgSupplier);
});

Clazz.newMeth(C$, 'finer$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).FINER, msgSupplier);
});

Clazz.newMeth(C$, 'finest$java_util_function_Supplier',  function (msgSupplier) {
this.log$java_util_logging_Level$java_util_function_Supplier($I$(4).FINEST, msgSupplier);
});

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level',  function (newLevel) {
p$1.checkPermission.apply(this, []);
this.levelObject=newLevel;
p$1.updateEffectiveLevel.apply(this, []);
});

Clazz.newMeth(C$, 'isLevelInitialized$',  function () {
return this.levelObject != null ;
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.levelObject;
});

Clazz.newMeth(C$, 'isLoggable$java_util_logging_Level',  function (level) {
if (level.intValue$() < this.levelValue || this.levelValue == C$.offValue ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'addHandler$java_util_logging_Handler',  function (handler) {
handler.getClass$();
p$1.checkPermission.apply(this, []);
this.handlers.add$O(handler);
});

Clazz.newMeth(C$, 'removeHandler$java_util_logging_Handler',  function (handler) {
p$1.checkPermission.apply(this, []);
if (handler == null ) {
return;
}this.handlers.remove$O(handler);
});

Clazz.newMeth(C$, 'getHandlers$',  function () {
return this.accessCheckedHandlers$();
});

Clazz.newMeth(C$, 'accessCheckedHandlers$',  function () {
return this.handlers.toArray$OA(C$.emptyHandlers);
});

Clazz.newMeth(C$, 'setUseParentHandlers$Z',  function (useParentHandlers) {
p$1.checkPermission.apply(this, []);
this.useParentHandlers=useParentHandlers;
});

Clazz.newMeth(C$, 'getUseParentHandlers$',  function () {
return this.useParentHandlers;
});

Clazz.newMeth(C$, 'setResourceBundle$java_util_ResourceBundle',  function (bundle) {
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'setParent$java_util_logging_Logger',  function (parent) {
if (parent == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (this.manager == null ) {
this.manager=$I$(7).getLogManager$();
}this.manager.checkPermission$();
p$1.doSetParent$java_util_logging_Logger.apply(this, [parent]);
});

Clazz.newMeth(C$, 'doSetParent$java_util_logging_Logger',  function (newParent) {
var ref=null;
if (this.parent != null ) {
for (var iter=this.parent.kids.iterator$(); iter.hasNext$(); ) {
ref=iter.next$();
var kid=ref.get$();
if (kid === this ) {
iter.remove$();
break;
} else {
ref=null;
}}
}this.parent=newParent;
if (this.parent.kids == null ) {
this.parent.kids=Clazz.new_($I$(10,1).c$$I,[2]);
}if (ref == null ) {
ref=Clazz.new_($I$(11,1).c$$java_util_logging_Logger,[this.manager, null, this]);
}ref.setParentRef$java_util_logging_Logger(this.parent);
this.parent.kids.add$O(ref);
p$1.updateEffectiveLevel.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'removeChildLogger$java_util_logging_LogManager_LoggerWeakRef',  function (child) {
for (var iter=this.kids.iterator$(); iter.hasNext$(); ) {
var ref=iter.next$();
if (ref === child ) {
iter.remove$();
return;
}}
});

Clazz.newMeth(C$, 'updateEffectiveLevel',  function () {
var newLevelValue;
if (this.levelObject != null ) {
newLevelValue=this.levelObject.intValue$();
} else {
if (this.parent != null ) {
newLevelValue=this.parent.levelValue;
} else {
newLevelValue=$I$(4).INFO.intValue$();
}}if (this.levelValue == newLevelValue) {
return;
}this.levelValue=newLevelValue;
if (this.kids != null ) {
for (var i=0; i < this.kids.size$(); i++) {
var ref=this.kids.get$I(i);
var kid=ref.get$();
if (kid != null ) {
p$1.updateEffectiveLevel.apply(kid, []);
}}
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.emptyHandlers=Clazz.array($I$(3), [0]);
C$.offValue=$I$(4).OFF.intValue$();
C$.SYSTEM_BUNDLE=Clazz.new_($I$(5,1).c$$S$java_util_ResourceBundle,["sun.util.logging.resources.logging", null]);
C$.NO_RESOURCE_BUNDLE=Clazz.new_($I$(5,1).c$$S$java_util_ResourceBundle,[null, null]);
C$.global=Clazz.new_(C$.c$$S,["global"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Logger, "LoggerBundle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['resourceBundleName'],'O',['userBundle','java.util.ResourceBundle']]]

Clazz.newMeth(C$, 'c$$S$java_util_ResourceBundle',  function (resourceBundleName, bundle) {
;C$.$init$.apply(this);
this.resourceBundleName=resourceBundleName;
this.userBundle=bundle;
}, 1);

Clazz.newMeth(C$, 'isSystemBundle$',  function () {
return "sun.util.logging.resources.logging".equals$O(this.resourceBundleName);
});

Clazz.newMeth(C$, 'get$S$java_util_ResourceBundle',  function (name, bundle) {
if (name == null  && bundle == null  ) {
return $I$(1).NO_RESOURCE_BUNDLE;
} else if ("sun.util.logging.resources.logging".equals$O(name) && bundle == null  ) {
return $I$(1).SYSTEM_BUNDLE;
} else {
return Clazz.new_(C$.c$$S$java_util_ResourceBundle,[name, bundle]);
}}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Logger, "SystemLoggerHelper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['disableCallerCheck']]]

Clazz.newMeth(C$, 'getBooleanProperty$S',  function (key) {
var s=$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.Logger$SystemLoggerHelper$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Logger$SystemLoggerHelper$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return System.getProperty$S(this.$finals$.key);
});
})()
), Clazz.new_(P$.Logger$SystemLoggerHelper$1.$init$,[this, {key:key}]))]);
return (Boolean.valueOf$S(s)).valueOf();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.disableCallerCheck=C$.getBooleanProperty$S("sun.util.logging.disableCallerCheck");
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
