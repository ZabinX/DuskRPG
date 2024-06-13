(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},I$=[[0,'javax.swing.JOptionPane','java.awt.event.ActionEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsyncDialog", null, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['wantsInput','processed'],'O',['actionListener','java.awt.event.ActionListener','choice','java.lang.Object','options','Object[]','value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S',  function (frame, msg) {
return $I$(1).showInputDialog$java_awt_Component$O(frame, msg);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$java_awt_event_ActionListener',  function (frame, message, a) {
p$1.setListener$java_awt_event_ActionListener.apply(this, [a]);
this.wantsInput=true;
p$1.process$O.apply(this, [$I$(1).showInputDialog$java_awt_Component$O(frame, message)]);
p$1.unsetListener.apply(this, []);
});

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener',  function (frame, message, title, messageType, icon, selectionValues, initialSelectionValue, a) {
p$1.setListener$java_awt_event_ActionListener.apply(this, [a]);
this.wantsInput=true;
p$1.process$O.apply(this, [$I$(1).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(frame, message, title, messageType, icon, selectionValues, initialSelectionValue)]);
p$1.unsetListener.apply(this, []);
});

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$O$java_awt_event_ActionListener',  function (frame, message, a) {
p$1.setListener$java_awt_event_ActionListener.apply(this, [a]);
$I$(1).showMessageDialog$java_awt_Component$O(frame, message);
p$1.unsetListener.apply(this, []);
if (false ||true) p$1.process$O.apply(this, ["" + message]);
});

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$O$S$java_awt_event_ActionListener',  function (frame, message, title, a) {
this.showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(frame, message, title, 1, a);
});

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener',  function (frame, message, title, messageType, a) {
p$1.setListener$java_awt_event_ActionListener.apply(this, [a]);
$I$(1).showMessageDialog$java_awt_Component$O$S$I(frame, message, title, messageType);
p$1.unsetListener.apply(this, []);
if (false ||true) p$1.process$O.apply(this, ["" + message]);
});

Clazz.newMeth(C$, 'showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener',  function (frame, message, title, optionType, messageType, icon, options, initialValue, a) {
this.actionListener=a;
this.options=options;
p$1.setListener$java_awt_event_ActionListener.apply(this, [a]);
p$1.process$I.apply(this, [$I$(1).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(frame, message, title, optionType, messageType, icon, options, initialValue)]);
p$1.unsetListener.apply(this, []);
});

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$java_awt_event_ActionListener',  function (frame, message, title, a) {
this.showConfirmDialog$java_awt_Component$O$S$I$I$java_awt_event_ActionListener(frame, message, title, 1, 3, a);
});

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener',  function (frame, message, title, optionType, a) {
this.showConfirmDialog$java_awt_Component$O$S$I$I$java_awt_event_ActionListener(frame, message, title, optionType, 3, a);
});

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I$java_awt_event_ActionListener',  function (frame, message, title, optionType, messageType, a) {
p$1.setListener$java_awt_event_ActionListener.apply(this, [a]);
p$1.process$I.apply(this, [$I$(1).showConfirmDialog$java_awt_Component$O$S$I$I(frame, message, title, optionType, messageType)]);
p$1.unsetListener.apply(this, []);
});

Clazz.newMeth(C$, 'getChoice$',  function () {
return this.choice;
});

Clazz.newMeth(C$, 'getOption$',  function () {
if (!(Clazz.instanceOf(this.choice, "java.lang.Integer"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["AsyncDialog.getOption called for non-Integer choice"]);
}return (this.choice).intValue$();
});

Clazz.newMeth(C$, 'showYesNoAsync$java_awt_Component$O$S$java_awt_event_ActionListener',  function (parent, message, title, listener) {
Clazz.new_(C$).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(parent, message, (title == null  ? "Question" : title), 0, listener);
}, 1);

Clazz.newMeth(C$, 'showYesAsync$java_awt_Component$O$S$Runnable',  function (parent, message, title, yes) {
C$.showYesNoAsync$java_awt_Component$O$S$java_awt_event_ActionListener(parent, message, title, ((P$.AsyncDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AsyncDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 0) {
this.$finals$.yes.run$();
}});
})()
), Clazz.new_(P$.AsyncDialog$1.$init$,[this, {yes:yes}])));
}, 1);

Clazz.newMeth(C$, 'showOKAsync$java_awt_Component$O$S$Runnable',  function (parent, message, title, ok) {
Clazz.new_(C$).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(parent, message, title, 2, ((P$.AsyncDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AsyncDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 0) {
this.$finals$.ok.run$();
}});
})()
), Clazz.new_(P$.AsyncDialog$2.$init$,[this, {ok:ok}])));
}, 1);

Clazz.newMeth(C$, 'setListener$java_awt_event_ActionListener',  function (a) {
this.actionListener=a;
var c=Clazz.getClass($I$(1));

c.$clazz$.listener = this
}, p$1);

Clazz.newMeth(C$, 'unsetListener',  function () {

javax.swing.JOptionPane.listener = null
}, p$1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
this.value=evt.getNewValue$();
switch (evt.getPropertyName$()) {
case "inputValue":
p$1.process$O.apply(this, [this.value]);
break;
case "value":
if (this.value != null  && this.options == null   && !(Clazz.instanceOf(this.value, "java.lang.Integer")) ) {
p$1.process$I.apply(this, [p$1.getOptionIndex$OA$O.apply(this, [(evt.getSource$()).getOptions$(), this.value])]);
return;
}if (this.options != null ) {
var i=p$1.getOptionIndex$OA$O.apply(this, [this.options, this.value]);
this.value=Integer.valueOf$I(i >= 0 ? i : -1);
}p$1.process$O.apply(this, [this.value]);
break;
}
});

Clazz.newMeth(C$, 'getOptionIndex$OA$O',  function (options, val) {
if (options != null ) for (var i=0; i < options.length; i++) {
if (options[i] === val ) return i;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'getValue$',  function () {
if (this.wantsInput || this.options == null  ) return this.value;
var val=(this.value).intValue$();
return (val < 0 ? null : this.options[val]);
});

Clazz.newMeth(C$, 'process$I',  function (ret) {
if (ret != -(-ret) || this.processed ) return;
this.processed=true;
this.choice=Integer.valueOf$I(ret);
this.actionListener.actionPerformed$java_awt_event_ActionEvent(Clazz.new_($I$(2,1).c$$O$I$S,[this, ret, "SelectedOption"]));
}, p$1);

Clazz.newMeth(C$, 'process$O',  function (ret) {
if (Clazz.instanceOf(ret, "javax.swing.plaf.UIResource") || this.processed ) return;
this.processed=true;
this.choice=ret;
this.actionListener.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this, ret == null  ? 2 : 0, (ret == null  ? null : ret.toString())],$I$(2,1).c$$O$I$S));
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
