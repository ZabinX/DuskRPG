(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'java.util.BitSet','javax.swing.event.EventListenerList','javax.swing.event.ListSelectionListener','javax.swing.event.ListSelectionEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OptionListModel", null, 'javax.swing.DefaultListModel', ['javax.swing.ListSelectionModel', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectionMode=0;
this.minIndex=2147483647;
this.maxIndex=-1;
this.anchorIndex=-1;
this.leadIndex=-1;
this.firstChangedIndex=2147483647;
this.lastChangedIndex=-1;
this.isAdjusting=false;
this.value=Clazz.new_($I$(1,1).c$$I,[32]);
this.initialValue=Clazz.new_($I$(1,1).c$$I,[32]);
this.$listenerList=Clazz.new_($I$(2,1));
this.leadAnchorNotificationEnabled=true;
},1);

C$.$fields$=[['Z',['isAdjusting','leadAnchorNotificationEnabled'],'I',['selectionMode','minIndex','maxIndex','anchorIndex','leadIndex','firstChangedIndex','lastChangedIndex'],'O',['value','java.util.BitSet','+initialValue','$listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'getMinSelectionIndex$',  function () {
return this.isSelectionEmpty$() ? -1 : this.minIndex;
});

Clazz.newMeth(C$, 'getMaxSelectionIndex$',  function () {
return this.maxIndex;
});

Clazz.newMeth(C$, 'getValueIsAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'getSelectionMode$',  function () {
return this.selectionMode;
});

Clazz.newMeth(C$, 'setSelectionMode$I',  function (selectionMode) {
switch (selectionMode) {
case 0:
case 1:
case 2:
this.selectionMode=selectionMode;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid selectionMode"]);
}
});

Clazz.newMeth(C$, 'isSelectedIndex$I',  function (index) {
return ((index < this.minIndex) || (index > this.maxIndex) ) ? false : this.value.get$I(index);
});

Clazz.newMeth(C$, 'isSelectionEmpty$',  function () {
return (this.minIndex > this.maxIndex);
});

Clazz.newMeth(C$, 'addListSelectionListener$javax_swing_event_ListSelectionListener',  function (l) {
this.$listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(3),['valueChanged$javax_swing_event_ListSelectionEvent']), l);
});

Clazz.newMeth(C$, 'removeListSelectionListener$javax_swing_event_ListSelectionListener',  function (l) {
this.$listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(3),['valueChanged$javax_swing_event_ListSelectionEvent']), l);
});

Clazz.newMeth(C$, 'getListSelectionListeners$',  function () {
return this.$listenerList.getListeners$Class(Clazz.getClass($I$(3),['valueChanged$javax_swing_event_ListSelectionEvent']));
});

Clazz.newMeth(C$, 'fireValueChanged$Z',  function (isAdjusting) {
this.fireValueChanged$I$I$Z(this.getMinSelectionIndex$(), this.getMaxSelectionIndex$(), isAdjusting);
});

Clazz.newMeth(C$, 'fireValueChanged$I$I',  function (firstIndex, lastIndex) {
this.fireValueChanged$I$I$Z(firstIndex, lastIndex, this.getValueIsAdjusting$());
});

Clazz.newMeth(C$, 'fireValueChanged$I$I$Z',  function (firstIndex, lastIndex, isAdjusting) {
var listeners=this.$listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['valueChanged$javax_swing_event_ListSelectionEvent']) ) {
if (e == null ) {
e=Clazz.new_($I$(4,1).c$$O$I$I$Z,[this, firstIndex, lastIndex, isAdjusting]);
}(listeners[i + 1]).valueChanged$javax_swing_event_ListSelectionEvent(e);
}}
});

Clazz.newMeth(C$, 'fireValueChanged',  function () {
if (this.lastChangedIndex == -1) {
return;
}var oldFirstChangedIndex=this.firstChangedIndex;
var oldLastChangedIndex=this.lastChangedIndex;
this.firstChangedIndex=2147483647;
this.lastChangedIndex=-1;
this.fireValueChanged$I$I(oldFirstChangedIndex, oldLastChangedIndex);
}, p$1);

Clazz.newMeth(C$, 'markAsDirty$I',  function (r) {
this.firstChangedIndex=Math.min(this.firstChangedIndex, r);
this.lastChangedIndex=Math.max(this.lastChangedIndex, r);
}, p$1);

Clazz.newMeth(C$, 'set$I',  function (r) {
if (this.value.get$I(r)) {
return;
}this.value.set$I(r);
var option=this.get$I(r);
option.setSelection$Z(true);
p$1.markAsDirty$I.apply(this, [r]);
this.minIndex=Math.min(this.minIndex, r);
this.maxIndex=Math.max(this.maxIndex, r);
}, p$1);

Clazz.newMeth(C$, 'clear$I',  function (r) {
if (!this.value.get$I(r)) {
return;
}this.value.clear$I(r);
var option=this.get$I(r);
option.setSelection$Z(false);
p$1.markAsDirty$I.apply(this, [r]);
if (r == this.minIndex) {
for (this.minIndex=this.minIndex + 1; this.minIndex <= this.maxIndex; this.minIndex++) {
if (this.value.get$I(this.minIndex)) {
break;
}}
}if (r == this.maxIndex) {
for (this.maxIndex=this.maxIndex - 1; this.minIndex <= this.maxIndex; this.maxIndex--) {
if (this.value.get$I(this.maxIndex)) {
break;
}}
}if (this.isSelectionEmpty$()) {
this.minIndex=2147483647;
this.maxIndex=-1;
}}, p$1);

Clazz.newMeth(C$, 'setLeadAnchorNotificationEnabled$Z',  function (flag) {
this.leadAnchorNotificationEnabled=flag;
});

Clazz.newMeth(C$, 'isLeadAnchorNotificationEnabled$',  function () {
return this.leadAnchorNotificationEnabled;
});

Clazz.newMeth(C$, 'updateLeadAnchorIndices$I$I',  function (anchorIndex, leadIndex) {
if (this.leadAnchorNotificationEnabled) {
if (this.anchorIndex != anchorIndex) {
if (this.anchorIndex != -1) {
p$1.markAsDirty$I.apply(this, [this.anchorIndex]);
}p$1.markAsDirty$I.apply(this, [anchorIndex]);
}if (this.leadIndex != leadIndex) {
if (this.leadIndex != -1) {
p$1.markAsDirty$I.apply(this, [this.leadIndex]);
}p$1.markAsDirty$I.apply(this, [leadIndex]);
}}this.anchorIndex=anchorIndex;
this.leadIndex=leadIndex;
}, p$1);

Clazz.newMeth(C$, 'contains$I$I$I',  function (a, b, i) {
return (i >= a) && (i <= b) ;
}, p$1);

Clazz.newMeth(C$, 'changeSelection$I$I$I$I$Z',  function (clearMin, clearMax, setMin, setMax, clearFirst) {
for (var i=Math.min(setMin, clearMin); i <= Math.max(setMax, clearMax); i++) {
var shouldClear=p$1.contains$I$I$I.apply(this, [clearMin, clearMax, i]);
var shouldSet=p$1.contains$I$I$I.apply(this, [setMin, setMax, i]);
if (shouldSet && shouldClear ) {
if (clearFirst) {
shouldClear=false;
} else {
shouldSet=false;
}}if (shouldSet) {
p$1.set$I.apply(this, [i]);
}if (shouldClear) {
p$1.clear$I.apply(this, [i]);
}}
p$1.fireValueChanged.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'changeSelection$I$I$I$I',  function (clearMin, clearMax, setMin, setMax) {
p$1.changeSelection$I$I$I$I$Z.apply(this, [clearMin, clearMax, setMin, setMax, true]);
}, p$1);

Clazz.newMeth(C$, 'clearSelection$',  function () {
this.removeSelectionInterval$I$I(this.minIndex, this.maxIndex);
});

Clazz.newMeth(C$, 'setSelectionInterval$I$I',  function (index0, index1) {
if (index0 == -1 || index1 == -1 ) {
return;
}if (this.getSelectionMode$() == 0) {
index0=index1;
}p$1.updateLeadAnchorIndices$I$I.apply(this, [index0, index1]);
var clearMin=this.minIndex;
var clearMax=this.maxIndex;
var setMin=Math.min(index0, index1);
var setMax=Math.max(index0, index1);
p$1.changeSelection$I$I$I$I.apply(this, [clearMin, clearMax, setMin, setMax]);
});

Clazz.newMeth(C$, 'addSelectionInterval$I$I',  function (index0, index1) {
if (index0 == -1 || index1 == -1 ) {
return;
}if (this.getSelectionMode$() != 2) {
this.setSelectionInterval$I$I(index0, index1);
return;
}p$1.updateLeadAnchorIndices$I$I.apply(this, [index0, index1]);
var clearMin=2147483647;
var clearMax=-1;
var setMin=Math.min(index0, index1);
var setMax=Math.max(index0, index1);
p$1.changeSelection$I$I$I$I.apply(this, [clearMin, clearMax, setMin, setMax]);
});

Clazz.newMeth(C$, 'removeSelectionInterval$I$I',  function (index0, index1) {
if (index0 == -1 || index1 == -1 ) {
return;
}p$1.updateLeadAnchorIndices$I$I.apply(this, [index0, index1]);
var clearMin=Math.min(index0, index1);
var clearMax=Math.max(index0, index1);
var setMin=2147483647;
var setMax=-1;
p$1.changeSelection$I$I$I$I.apply(this, [clearMin, clearMax, setMin, setMax]);
});

Clazz.newMeth(C$, 'setState$I$Z',  function (index, state) {
if (state) {
p$1.set$I.apply(this, [index]);
} else {
p$1.clear$I.apply(this, [index]);
}}, p$1);

Clazz.newMeth(C$, 'insertIndexInterval$I$I$Z',  function (index, length, before) {
var insMinIndex=(before) ? index : index + 1;
var insMaxIndex=(insMinIndex + length) - 1;
for (var i=this.maxIndex; i >= insMinIndex; i--) {
p$1.setState$I$Z.apply(this, [i + length, this.value.get$I(i)]);
}
var setInsertedValues=this.value.get$I(index);
for (var i=insMinIndex; i <= insMaxIndex; i++) {
p$1.setState$I$Z.apply(this, [i, setInsertedValues]);
}
});

Clazz.newMeth(C$, 'removeIndexInterval$I$I',  function (index0, index1) {
var rmMinIndex=Math.min(index0, index1);
var rmMaxIndex=Math.max(index0, index1);
var gapLength=(rmMaxIndex - rmMinIndex) + 1;
for (var i=rmMinIndex; i <= this.maxIndex; i++) {
p$1.setState$I$Z.apply(this, [i, this.value.get$I(i + gapLength)]);
}
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z',  function (isAdjusting) {
if (isAdjusting != this.isAdjusting ) {
this.isAdjusting=isAdjusting;
this.fireValueChanged$Z(isAdjusting);
}});

Clazz.newMeth(C$, 'toString',  function () {
var s=((this.getValueIsAdjusting$()) ? "~" : "=") + this.value.toString();
return this.getClass$().getName$() + " " + Integer.toString$I(this.hashCode$()) + " " + s ;
});

Clazz.newMeth(C$, 'clone$',  function () {
var clone=Clazz.clone(this);
clone.value=this.value.clone$();
clone.$listenerList=Clazz.new_($I$(2,1));
return clone;
});

Clazz.newMeth(C$, 'getAnchorSelectionIndex$',  function () {
return this.anchorIndex;
});

Clazz.newMeth(C$, 'getLeadSelectionIndex$',  function () {
return this.leadIndex;
});

Clazz.newMeth(C$, 'setAnchorSelectionIndex$I',  function (anchorIndex) {
this.anchorIndex=anchorIndex;
});

Clazz.newMeth(C$, 'setLeadSelectionIndex$I',  function (leadIndex) {
var anchorIndex=this.anchorIndex;
if (this.getSelectionMode$() == 0) {
anchorIndex=leadIndex;
}var oldMin=Math.min(this.anchorIndex, this.leadIndex);
var oldMax=Math.max(this.anchorIndex, this.leadIndex);
var newMin=Math.min(anchorIndex, leadIndex);
var newMax=Math.max(anchorIndex, leadIndex);
if (this.value.get$I(this.anchorIndex)) {
p$1.changeSelection$I$I$I$I.apply(this, [oldMin, oldMax, newMin, newMax]);
} else {
p$1.changeSelection$I$I$I$I$Z.apply(this, [newMin, newMax, oldMin, oldMax, false]);
}this.anchorIndex=anchorIndex;
this.leadIndex=leadIndex;
});

Clazz.newMeth(C$, 'setInitialSelection$I',  function (i) {
if (this.initialValue.get$I(i)) {
return;
}if (this.selectionMode == 0) {
this.initialValue.and$java_util_BitSet(Clazz.new_($I$(1,1)));
}this.initialValue.set$I(i);
});

Clazz.newMeth(C$, 'getInitialSelection$',  function () {
return this.initialValue;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
