(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.ArrayTable','javax.swing.event.SwingPropertyChangeSupport','java.beans.PropertyChangeListener']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractAction", null, null, ['javax.swing.Action', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
},1);

C$.$fields$=[['Z',['enabled'],'O',['arrayTable','javax.swing.ArrayTable','changeSupport','javax.swing.event.SwingPropertyChangeSupport']]
,['O',['RECONFIGURE_ON_NULL','Boolean']]]

Clazz.newMeth(C$, 'shouldReconfigure$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$() == null ) {
C$.RECONFIGURE_ON_NULL=Boolean.valueOf$Z(false);
}return false;
}, 1);

Clazz.newMeth(C$, 'setEnabledFromAction$javax_swing_JComponent$javax_swing_Action',  function (c, a) {
c.setEnabled$Z((a != null ) ? a.isEnabled$() : true);
}, 1);

Clazz.newMeth(C$, 'setToolTipTextFromAction$javax_swing_JComponent$javax_swing_Action',  function (c, a) {
c.setToolTipText$S(a != null  ? a.getValue$S("ShortDescription") : null);
}, 1);

Clazz.newMeth(C$, 'hasSelectedKey$javax_swing_Action',  function (a) {
return (a != null  && a.getValue$S("SwingSelectedKey") != null  );
}, 1);

Clazz.newMeth(C$, 'isSelected$javax_swing_Action',  function (a) {
return Boolean.TRUE.equals$O(a.getValue$S("SwingSelectedKey"));
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.putValue$S$O("Name", name);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon',  function (name, icon) {
C$.c$$S.apply(this, [name]);
this.putValue$S$O("SmallIcon", icon);
}, 1);

Clazz.newMeth(C$, 'getValue$S',  function (key) {
if (key === "enabled" ) {
return Boolean.valueOf$Z(this.enabled);
}if (this.arrayTable == null ) {
return null;
}return this.arrayTable.get$O(key);
});

Clazz.newMeth(C$, 'putValue$S$O',  function (key, newValue) {
var oldValue=null;
if (key === "enabled" ) {
if (newValue == null  || !(Clazz.instanceOf(newValue, "java.lang.Boolean")) ) {
newValue=Boolean.valueOf$Z(false);
}oldValue=Boolean.valueOf$Z(this.enabled);
this.enabled=(newValue).valueOf();
} else {
if (this.arrayTable == null ) {
this.arrayTable=Clazz.new_($I$(1,1));
}if (this.arrayTable.containsKey$O(key)) oldValue=this.arrayTable.get$O(key);
if (newValue == null ) {
this.arrayTable.remove$O(key);
} else {
this.arrayTable.put$O$O(key, newValue);
}}this.firePropertyChange$S$O$O(key, oldValue, newValue);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (newValue) {
var oldValue=this.enabled;
if (oldValue != newValue ) {
this.enabled=newValue;
this.firePropertyChange$S$O$O("enabled", Boolean.valueOf$Z(oldValue), Boolean.valueOf$Z(newValue));
}});

Clazz.newMeth(C$, 'getKeys$',  function () {
if (this.arrayTable == null ) {
return null;
}var keys=Clazz.array(java.lang.Object, [this.arrayTable.size$()]);
this.arrayTable.getKeys$OA(keys);
return keys;
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) ) {
return;
}this.changeSupport.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(2,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.changeSupport == null ) {
return;
}this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(3), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'clone$',  function () {
var newAction=Clazz.clone(this);
{
if (this.arrayTable != null ) {
newAction.arrayTable=this.arrayTable.clone$();
}}return newAction;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
