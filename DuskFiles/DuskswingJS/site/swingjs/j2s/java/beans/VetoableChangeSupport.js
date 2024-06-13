(function(){var P$=Clazz.newPackage("java.beans"),p$1={},I$=[[0,'java.beans.VetoableChangeListener','java.beans.VetoableChangeListenerProxy','java.io.ObjectStreamField','java.util.Hashtable',['java.beans.VetoableChangeSupport','.VetoableChangeListenerMap'],'java.beans.PropertyChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VetoableChangeSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['VetoableChangeListenerMap',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['map','java.beans.VetoableChangeSupport.VetoableChangeListenerMap','source','java.lang.Object']]
,['O',['serialPersistentFields','java.io.ObjectStreamField[]']]]

Clazz.newMeth(C$, 'c$$O',  function (sourceBean) {
;C$.$init$.apply(this);
if (sourceBean == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.source=sourceBean;
}, 1);

Clazz.newMeth(C$, 'addVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
if (listener == null ) {
return;
}if (Clazz.instanceOf(listener, "java.beans.VetoableChangeListenerProxy")) {
var proxy=listener;
this.addVetoableChangeListener$S$java_beans_VetoableChangeListener(proxy.getPropertyName$(), proxy.getListener$());
} else {
this.map.add$S$java_util_EventListener(null, listener);
}});

Clazz.newMeth(C$, 'removeVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
if (listener == null ) {
return;
}if (Clazz.instanceOf(listener, "java.beans.VetoableChangeListenerProxy")) {
var proxy=listener;
this.removeVetoableChangeListener$S$java_beans_VetoableChangeListener(proxy.getPropertyName$(), proxy.getListener$());
} else {
this.map.remove$S$java_util_EventListener(null, listener);
}});

Clazz.newMeth(C$, 'getVetoableChangeListeners$',  function () {
return this.map.getListeners$();
});

Clazz.newMeth(C$, 'addVetoableChangeListener$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
if (listener == null  || propertyName == null  ) {
return;
}listener=this.map.extract$java_util_EventListener(listener);
if (listener != null ) {
this.map.add$S$java_util_EventListener(propertyName, listener);
}});

Clazz.newMeth(C$, 'removeVetoableChangeListener$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
if (listener == null  || propertyName == null  ) {
return;
}listener=this.map.extract$java_util_EventListener(listener);
if (listener != null ) {
this.map.remove$S$java_util_EventListener(propertyName, listener);
}});

Clazz.newMeth(C$, 'getVetoableChangeListeners$S',  function (propertyName) {
return this.map.getListeners$S(propertyName);
});

Clazz.newMeth(C$, 'fireVetoableChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) {
return;
}var evt=Clazz.new_($I$(6,1).c$$O$S$O$O,[this.source, propertyName, oldValue, newValue]);
this.fireVetoableChange$java_beans_PropertyChangeEvent(evt);
});

Clazz.newMeth(C$, 'fireVetoableChange$S$I$I',  function (propertyName, oldValue, newValue) {
if (oldValue == newValue) {
return;
}this.fireVetoableChange$S$O$O(propertyName, Integer.valueOf$I(oldValue), Integer.valueOf$I(newValue));
});

Clazz.newMeth(C$, 'fireVetoableChange$S$Z$Z',  function (propertyName, oldValue, newValue) {
if (oldValue == newValue ) {
return;
}this.fireVetoableChange$S$O$O(propertyName, Boolean.valueOf$Z(oldValue), Boolean.valueOf$Z(newValue));
});

Clazz.newMeth(C$, 'fireVetoableChange$java_beans_PropertyChangeEvent',  function (evt) {
var oldValue=evt.getOldValue$();
var newValue=evt.getNewValue$();
var propertyName=evt.getPropertyName$();
if (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) {
return;
}var common=this.map.get$S(null);
var named=(propertyName != null ) ? this.map.get$S(propertyName) : null;
p$1.fire$java_beans_VetoableChangeListenerA$java_beans_PropertyChangeEvent.apply(this, [common, evt]);
p$1.fire$java_beans_VetoableChangeListenerA$java_beans_PropertyChangeEvent.apply(this, [named, evt]);
});

Clazz.newMeth(C$, 'fire$java_beans_VetoableChangeListenerA$java_beans_PropertyChangeEvent',  function (listeners, event) {
if (listeners != null ) {
var current=null;
try {
for (var listener, $listener = 0, $$listener = listeners; $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
current=listener;
listener.vetoableChange$java_beans_PropertyChangeEvent(event);
}
} catch (veto) {
if (Clazz.exceptionOf(veto,"java.beans.PropertyVetoException")){
event=Clazz.new_([this.source, event.getPropertyName$(), event.getNewValue$(), event.getOldValue$()],$I$(6,1).c$$O$S$O$O);
for (var listener, $listener = 0, $$listener = listeners; $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
try {
listener.vetoableChange$java_beans_PropertyChangeEvent(event);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}
throw veto;
} else {
throw veto;
}
}
}}, p$1);

Clazz.newMeth(C$, 'hasListeners$S',  function (propertyName) {
return this.map.hasListeners$S(propertyName);
});

C$.$static$=function(){C$.$static$=0;
C$.serialPersistentFields=Clazz.array($I$(3), -1, [Clazz.new_(["children", Clazz.getClass($I$(4))],$I$(3,1).c$$S$Class), Clazz.new_(["source", Clazz.getClass(java.lang.Object)],$I$(3,1).c$$S$Class), Clazz.new_($I$(3,1).c$$S$Class,["vetoableChangeSupportSerializedDataVersion", Integer.TYPE])]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VetoableChangeSupport, "VetoableChangeListenerMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.beans.ChangeListenerMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['EMPTY','java.beans.VetoableChangeListener[]']]]

Clazz.newMeth(C$, 'newArray$I',  function (length) {
return (0 < length) ? Clazz.array($I$(1), [length]) : C$.EMPTY;
});

Clazz.newMeth(C$, ['newProxy$S$java_beans_VetoableChangeListener','newProxy$S$java_util_EventListener'],  function (name, listener) {
return Clazz.new_($I$(2,1).c$$S$java_beans_VetoableChangeListener,[name, listener]);
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.array($I$(1), -1, []);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
