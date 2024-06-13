(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[[0,'javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingPropertyChangeSupport", null, 'java.beans.PropertyChangeSupport');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['notifyOnEDT']]]

Clazz.newMeth(C$, 'c$$O',  function (sourceBean) {
C$.c$$O$Z.apply(this, [sourceBean, false]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Z',  function (sourceBean, notifyOnEDT) {
;C$.superclazz.c$$O.apply(this,[sourceBean]);C$.$init$.apply(this);
this.notifyOnEDT=notifyOnEDT;
}, 1);

Clazz.newMeth(C$, 'firePropertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if (evt == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (!this.isNotifyOnEDT$() || $I$(1).isEventDispatchThread$() ) {
C$.superclazz.prototype.firePropertyChange$java_beans_PropertyChangeEvent.apply(this, [evt]);
} else {
$I$(1,"invokeLater$Runnable",[((P$.SwingPropertyChangeSupport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingPropertyChangeSupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.event.SwingPropertyChangeSupport'].firePropertyChange$java_beans_PropertyChangeEvent.apply(this.b$['javax.swing.event.SwingPropertyChangeSupport'], [this.$finals$.evt]);
});
})()
), Clazz.new_(P$.SwingPropertyChangeSupport$1.$init$,[this, {evt:evt}]))]);
}});

Clazz.newMeth(C$, 'isNotifyOnEDT$',  function () {
return this.notifyOnEDT;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
