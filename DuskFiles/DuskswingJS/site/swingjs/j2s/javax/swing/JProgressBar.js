(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.DefaultBoundedRangeModel','java.text.NumberFormat',['javax.swing.JProgressBar','.ModelListener'],'javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JProgressBar", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'javax.swing.SwingConstants');
C$.$classes$=[['ModelListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeEvent=null;
this.changeListener=null;
},1);

C$.$fields$=[['Z',['paintBorder','paintString','indeterminate'],'I',['orientation'],'S',['progressString'],'O',['model','javax.swing.BoundedRangeModel','changeEvent','javax.swing.event.ChangeEvent','changeListener','javax.swing.event.ChangeListener','format','java.text.Format']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (orient) {
C$.c$$I$I$I.apply(this, [orient, 0, 100]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (min, max) {
C$.c$$I$I$I.apply(this, [0, min, max]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (orient, min, max) {
Clazz.super_(C$, this);
this.setModel$javax_swing_BoundedRangeModel(Clazz.new_($I$(1,1).c$$I$I$I$I,[min, 0, min, max]));
this.updateUI$();
this.setOrientation$I(orient);
this.setBorderPainted$Z(true);
this.setStringPainted$Z(false);
this.setString$S(null);
this.setIndeterminate$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_BoundedRangeModel',  function (newModel) {
Clazz.super_(C$, this);
this.setModel$javax_swing_BoundedRangeModel(newModel);
this.updateUI$();
this.setOrientation$I(0);
this.setBorderPainted$Z(true);
this.setStringPainted$Z(false);
this.setString$S(null);
this.setIndeterminate$Z(false);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "ProgressBarUI";
});

Clazz.newMeth(C$, 'getOrientation$',  function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setOrientation$I',  function (newOrientation) {
if (this.orientation != newOrientation) {
switch (newOrientation) {
case 1:
case 0:
var oldOrientation=this.orientation;
this.orientation=newOrientation;
this.firePropertyChange$S$I$I("orientation", oldOrientation, newOrientation);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[newOrientation + " is not a legal orientation"]);
}
this.revalidate$();
}});

Clazz.newMeth(C$, 'isStringPainted$',  function () {
return this.paintString;
});

Clazz.newMeth(C$, 'setStringPainted$Z',  function (b) {
var oldValue=this.paintString;
this.paintString=b;
this.firePropertyChange$S$Z$Z("stringPainted", oldValue, this.paintString);
if (this.paintString != oldValue ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getString$',  function () {
if (this.progressString != null ) {
return this.progressString;
} else {
if (this.format == null ) {
this.format=$I$(2).getPercentInstance$();
}return this.format.format$O( new Double(this.getPercentComplete$()));
}});

Clazz.newMeth(C$, 'setString$S',  function (s) {
var oldValue=this.progressString;
this.progressString=s;
this.firePropertyChange$S$O$O("string", oldValue, this.progressString);
if (this.progressString == null  || oldValue == null   || !this.progressString.equals$O(oldValue) ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getPercentComplete$',  function () {
var span=this.model.getMaximum$() - this.model.getMinimum$();
var currentValue=this.model.getValue$();
var pc=(currentValue - this.model.getMinimum$()) / span;
return pc;
});

Clazz.newMeth(C$, 'isBorderPainted$',  function () {
return this.paintBorder;
});

Clazz.newMeth(C$, 'setBorderPainted$Z',  function (b) {
var oldValue=this.paintBorder;
this.paintBorder=b;
this.firePropertyChange$S$Z$Z("borderPainted", oldValue, this.paintBorder);
if (this.paintBorder != oldValue ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'paintBorder$java_awt_Graphics',  function (g) {
if (this.isBorderPainted$()) {
C$.superclazz.prototype.paintBorder$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'createChangeListener$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(4),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(4),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(4),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(4),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(5,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'setModel$javax_swing_BoundedRangeModel',  function (newModel) {
var oldModel=this.getModel$();
if (newModel !== oldModel ) {
if (oldModel != null ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
this.changeListener=null;
}this.model=newModel;
if (newModel != null ) {
this.changeListener=this.createChangeListener$();
newModel.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}if (this.model != null ) {
this.model.setExtent$I(0);
}this.秘repaint$();
}});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.getModel$().getValue$();
});

Clazz.newMeth(C$, 'getMinimum$',  function () {
return this.getModel$().getMinimum$();
});

Clazz.newMeth(C$, 'getMaximum$',  function () {
return this.getModel$().getMaximum$();
});

Clazz.newMeth(C$, 'setValue$I',  function (n) {
var brm=this.getModel$();
brm.setValue$I(n);
});

Clazz.newMeth(C$, 'setMinimum$I',  function (n) {
this.getModel$().setMinimum$I(n);
});

Clazz.newMeth(C$, 'setMaximum$I',  function (n) {
this.getModel$().setMaximum$I(n);
});

Clazz.newMeth(C$, 'setIndeterminate$Z',  function (newValue) {
var oldValue=this.indeterminate;
this.indeterminate=newValue;
this.firePropertyChange$S$Z$Z("indeterminate", oldValue, this.indeterminate);
});

Clazz.newMeth(C$, 'isIndeterminate$',  function () {
return this.indeterminate;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var orientationString=(this.orientation == 0 ? "HORIZONTAL" : "VERTICAL");
var paintBorderString=(this.paintBorder ? "true" : "false");
var progressStringString=(this.progressString != null  ? this.progressString : "");
var paintStringString=(this.paintString ? "true" : "false");
var indeterminateString=(this.indeterminate ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",orientation=" + orientationString + ",paintBorder=" + paintBorderString + ",paintString=" + paintStringString + ",progressString=" + progressStringString + ",indeterminateString=" + indeterminateString ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JProgressBar, "ModelListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['javax.swing.JProgressBar'].fireStateChanged$.apply(this.b$['javax.swing.JProgressBar'], []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
