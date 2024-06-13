(function(){var P$=Clazz.newPackage("sun.awt"),p$1={},I$=[[0,'java.util.HashMap','java.util.HashSet','swingjs.JSUtil','Thread','sun.awt.SunToolkit','sun.awt.MostRecentThreadAppContext','sun.awt.MostRecentKeyValue','java.beans.PropertyChangeListener','java.beans.PropertyChangeSupport']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.table=Clazz.new_($I$(1,1));
this.changeSupport=null;
this.isDisposed=false;
this.mostRecentKeyValue=null;
this.shadowMostRecentKeyValue=null;
},1);

C$.$fields$=[['Z',['isDisposed'],'O',['table','java.util.HashMap','threadGroup','ThreadGroup','changeSupport','java.beans.PropertyChangeSupport','contextClassLoader','ClassLoader','mostRecentKeyValue','sun.awt.MostRecentKeyValue','+shadowMostRecentKeyValue']]
,['I',['numAppContexts'],'O',['threadGroup2appContext','java.util.Map','mostRecentThreadAppContext','sun.awt.MostRecentThreadAppContext']]]

Clazz.newMeth(C$, 'getAppContexts$',  function () {
return Clazz.new_([C$.threadGroup2appContext.values$()],$I$(2,1).c$$java_util_Collection);
}, 1);

Clazz.newMeth(C$, 'isDisposed$',  function () {
return this.isDisposed;
});

Clazz.newMeth(C$, 'c$$ThreadGroup',  function (threadGroup) {
;C$.$init$.apply(this);
++C$.numAppContexts;
this.threadGroup=threadGroup;
C$.threadGroup2appContext.put$O$O($I$(3).getJSID$O(threadGroup), this);
this.contextClassLoader=this ||null;
}, 1);

Clazz.newMeth(C$, 'getAppContext$',  function () {
var currentThread=$I$(4).currentThread$();
var appContext=null;
var recent=C$.mostRecentThreadAppContext;
if ((recent != null ) && (recent.thread === currentThread ) ) {
appContext=recent.appContext;
} else {
var currentThreadGroup=currentThread.getThreadGroup$();
var threadGroup=currentThreadGroup;
appContext=C$.threadGroup2appContext.get$O($I$(3).getJSID$O(threadGroup));
while (appContext == null ){
threadGroup=threadGroup.getParent$();
if (threadGroup == null ) {
appContext=$I$(5).createNewAppContext$();
break;
}appContext=C$.threadGroup2appContext.get$O($I$(3).getJSID$O(threadGroup));
}
for (var tg=currentThreadGroup; tg !== threadGroup ; tg=tg.getParent$()) {
C$.threadGroup2appContext.put$O$O($I$(3).getJSID$O(tg), appContext);
}
C$.mostRecentThreadAppContext=Clazz.new_($I$(6,1).c$$Thread$sun_awt_AppContext,[currentThread, appContext]);
}return appContext;
}, 1);

Clazz.newMeth(C$, 'isMainContext$sun_awt_AppContext',  function (ctx) {
return false;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
});

Clazz.newMeth(C$, 'get$O',  function (key) {
key=p$1.秘fixKey$O.apply(this, [key]);
{
var recent=this.mostRecentKeyValue;
if ((recent != null ) && (recent.key === key ) ) {
return recent.value;
}var value=this.table.get$O(key);
if (this.mostRecentKeyValue == null ) {
this.mostRecentKeyValue=Clazz.new_($I$(7,1).c$$O$O,[key, value]);
this.shadowMostRecentKeyValue=Clazz.new_($I$(7,1).c$$O$O,[key, value]);
} else {
var auxKeyValue=this.mostRecentKeyValue;
this.shadowMostRecentKeyValue.setPair$O$O(key, value);
this.mostRecentKeyValue=this.shadowMostRecentKeyValue;
this.shadowMostRecentKeyValue=auxKeyValue;
}return value;
}});

Clazz.newMeth(C$, '秘fixKey$O',  function (key) {
return $I$(3).getJSID$O(key);
}, p$1);

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
key=p$1.秘fixKey$O.apply(this, [key]);
{
var recent=this.mostRecentKeyValue;
if ((recent != null ) && (recent.key === key ) ) recent.value=value;
return this.table.put$O$O(key, value);
}});

Clazz.newMeth(C$, 'remove$O',  function (key) {
key=p$1.秘fixKey$O.apply(this, [key]);
{
var recent=this.mostRecentKeyValue;
if ((recent != null ) && (recent.key === key ) ) recent.value=null;
return this.table.remove$O(key);
}});

Clazz.newMeth(C$, 'getThreadGroup$',  function () {
return this.threadGroup;
});

Clazz.newMeth(C$, 'getContextClassLoader$',  function () {
return this.contextClassLoader;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[threadGroup=" + this.threadGroup.getName$() + "]" ;
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(8), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
if (listener == null ) {
return;
}if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(9,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
if (listener == null  || this.changeSupport == null  ) {
return;
}this.changeSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S',  function (propertyName) {
if (this.changeSupport == null ) {
return Clazz.array($I$(8), [0]);
}return this.changeSupport.getPropertyChangeListeners$S(propertyName);
});

C$.$static$=function(){C$.$static$=0;
C$.threadGroup2appContext=Clazz.new_($I$(1,1));
C$.numAppContexts=0;
C$.mostRecentThreadAppContext=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
