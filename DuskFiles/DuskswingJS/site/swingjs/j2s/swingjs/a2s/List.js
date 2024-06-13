(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'javax.swing.JScrollPane','javax.swing.DefaultListModel','javax.swing.border.LineBorder','java.awt.AWTEventMulticaster','java.awt.event.ItemListener','java.awt.event.ActionListener','java.awt.event.ItemEvent','java.awt.event.ActionEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "List", null, 'javax.swing.JList', ['java.awt.ItemSelectable', ['java.awt.JSComponent','java.awt.JSComponent.A2SWrappedComponent'], 'javax.swing.event.ListSelectionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visibleIndex=-1;
},1);

C$.$fields$=[['I',['visibleIndex'],'O',['actionListener','java.awt.event.ActionListener','itemListener','java.awt.event.ItemListener','awtmodel','javax.swing.DefaultListModel']]
,['I',['nameCounter']]]

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, '秘getWrap$',  function () {
return Clazz.new_($I$(1,1).c$$java_awt_Component,[this]);
});

Clazz.newMeth(C$, 'c$$I$Z',  function (rows, multipleMode) {
C$.c$.apply(this, []);
this.setMultipleMode$Z(multipleMode);
C$.superclazz.prototype.setVisibleRowCount$I.apply(this, [rows == 0 ? 4 : rows]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_ListModel.apply(this,[Clazz.new_($I$(2,1))]);C$.$init$.apply(this);
this.awtmodel=this.getModel$();
C$.superclazz.prototype.setBorder$javax_swing_border_Border.apply(this, [$I$(3).createBlackLineBorder$()]);
}, 1);

Clazz.newMeth(C$, 'constructComponentName$',  function () {
return "list" + C$.nameCounter++;
});

Clazz.newMeth(C$, 'getItemCount$',  function () {
return this.countItems$();
});

Clazz.newMeth(C$, 'countItems$',  function () {
return C$.superclazz.prototype.getModel$.apply(this, []).getSize$();
});

Clazz.newMeth(C$, 'getItem$I',  function (index) {
return this.getItemImpl$I(index);
});

Clazz.newMeth(C$, 'getItemImpl$I',  function (index) {
return this.awtmodel.getElementAt$I(index);
});

Clazz.newMeth(C$, 'getItems$',  function () {
var itemCopies=Clazz.array(String, [this.awtmodel.getSize$()]);
this.awtmodel.copyInto$OA(itemCopies);
return itemCopies;
});

Clazz.newMeth(C$, 'add$S',  function (item) {
this.addItem$S(item);
});

Clazz.newMeth(C$, 'addItem$S',  function (item) {
this.addItem$S$I(item, -1);
});

Clazz.newMeth(C$, 'add$S$I',  function (item, index) {
this.addItem$S$I(item, index);
});

Clazz.newMeth(C$, 'addItem$S$I',  function (item, index) {
if (index >= 0 && index < this.awtmodel.getSize$() ) this.awtmodel.add$I$O(index, item);
 else this.awtmodel.addElement$O(item);
});

Clazz.newMeth(C$, 'replaceItem$S$I',  function (newValue, index) {
this.remove$I(index);
this.add$S$I(newValue, index);
});

Clazz.newMeth(C$, 'removeAll$',  function () {
this.clear$();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.awtmodel.clear$();
});

Clazz.newMeth(C$, 'remove$S',  function (item) {
this.awtmodel.removeElement$O(item);
});

Clazz.newMeth(C$, 'remove$I',  function (position) {
this.delItem$I(position);
});

Clazz.newMeth(C$, 'delItem$I',  function (position) {
this.delItems$I$I(position, position);
});

Clazz.newMeth(C$, 'delItems$I$I',  function (start, end) {
this.awtmodel.removeRange$I$I(start, end);
});

Clazz.newMeth(C$, 'getSelectedIndexes$',  function () {
return C$.superclazz.prototype.getSelectedIndices$.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedItem$',  function () {
return C$.superclazz.prototype.getSelectedValue$.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedItems$',  function () {
return C$.superclazz.prototype.getSelectedValues$.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedObjects$',  function () {
return C$.superclazz.prototype.getSelectedValues$.apply(this, []);
});

Clazz.newMeth(C$, 'select$I',  function (index) {
var alreadySelected=C$.superclazz.prototype.isSelectedIndex$I.apply(this, [index]);
if (!alreadySelected) {
C$.superclazz.prototype.getSelectionModel$.apply(this, []).addSelectionInterval$I$I(index, index);
}});

Clazz.newMeth(C$, 'deselect$I',  function (index) {
var alreadySelected=C$.superclazz.prototype.isSelectedIndex$I.apply(this, [index]);
if (alreadySelected) {
C$.superclazz.prototype.removeSelectionInterval$I$I.apply(this, [index, index]);
}});

Clazz.newMeth(C$, 'isIndexSelected$I',  function (index) {
return this.isSelected$I(index);
});

Clazz.newMeth(C$, 'isSelected$I',  function (index) {
return C$.superclazz.prototype.isSelectedIndex$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'getRows$',  function () {
return C$.superclazz.prototype.getVisibleRowCount$.apply(this, []);
});

Clazz.newMeth(C$, 'isMultipleMode$',  function () {
return this.allowsMultipleSelections$();
});

Clazz.newMeth(C$, 'allowsMultipleSelections$',  function () {
return C$.superclazz.prototype.getSelectionMode$.apply(this, []) == 2;
});

Clazz.newMeth(C$, 'setMultipleMode$Z',  function (b) {
this.setMultipleSelections$Z(b);
});

Clazz.newMeth(C$, 'setMultipleSelections$Z',  function (b) {
C$.superclazz.prototype.setSelectionMode$I.apply(this, [b ? 2 : 0]);
});

Clazz.newMeth(C$, 'getVisibleIndex$',  function () {
return this.visibleIndex;
});

Clazz.newMeth(C$, 'makeVisible$I',  function (index) {
this.visibleIndex=index;
this.ensureIndexIsVisible$I(index);
});

Clazz.newMeth(C$, 'getPreferredSize$I',  function (rows) {
return this.preferredSize$I(rows);
});

Clazz.newMeth(C$, 'preferredSize$I',  function (rows) {
var peer=this.peer;
if (peer != null ) return peer.getPreferredSize$I(rows);
return this.preferredSize$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
var rows=this.awtmodel.getSize$();
if (rows > 0) {
var peer=this.peer;
if (peer != null ) return peer.getPreferredSize$I(rows);
}return C$.superclazz.prototype.preferredSize$.apply(this, []);
});

Clazz.newMeth(C$, 'getMinimumSize$I',  function (rows) {
return this.minimumSize$I(rows);
});

Clazz.newMeth(C$, 'minimumSize$I',  function (rows) {
var peer=this.peer;
return (peer != null ) ? peer.getMinimumSize$I(rows) : C$.superclazz.prototype.minimumSize$.apply(this, []);
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return this.minimumSize$();
});

Clazz.newMeth(C$, 'minimumSize$',  function () {
var rows=this.awtmodel.getSize$();
return (rows > 0) ? this.minimumSize$I(rows) : C$.superclazz.prototype.minimumSize$.apply(this, []);
});

Clazz.newMeth(C$, 'addItemListener$java_awt_event_ItemListener',  function (l) {
if (l == null ) {
return;
}this.itemListener=$I$(4).add$java_awt_event_ItemListener$java_awt_event_ItemListener(this.itemListener, l);
this.newEventsOnly=true;
C$.superclazz.prototype.removeListSelectionListener$javax_swing_event_ListSelectionListener.apply(this, [this]);
C$.superclazz.prototype.addListSelectionListener$javax_swing_event_ListSelectionListener.apply(this, [this]);
});

Clazz.newMeth(C$, 'removeItemListener$java_awt_event_ItemListener',  function (l) {
if (l == null ) {
return;
}this.itemListener=$I$(4).remove$java_awt_event_ItemListener$java_awt_event_ItemListener(this.itemListener, l);
if (this.itemListener == null ) C$.superclazz.prototype.removeListSelectionListener$javax_swing_event_ListSelectionListener.apply(this, [this]);
});

Clazz.newMeth(C$, 'getItemListeners$',  function () {
return this.getListeners$Class(Clazz.getClass($I$(5),['itemStateChanged$java_awt_event_ItemEvent']));
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
if (l == null ) {
return;
}this.actionListener=$I$(4).add$java_awt_event_ActionListener$java_awt_event_ActionListener(this.actionListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
if (l == null ) {
return;
}this.actionListener=$I$(4).remove$java_awt_event_ActionListener$java_awt_event_ActionListener(this.actionListener, l);
});

Clazz.newMeth(C$, 'getActionListeners$',  function () {
return this.getListeners$Class(Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']));
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
var l=null;
if (listenerType === Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']) ) {
l=this.actionListener;
} else if (listenerType === Clazz.getClass($I$(5),['itemStateChanged$java_awt_event_ItemEvent']) ) {
l=this.itemListener;
} else {
return C$.superclazz.prototype.getListeners$Class.apply(this, [listenerType]);
}return $I$(4).getListeners$java_util_EventListener$Class(l, listenerType);
});

Clazz.newMeth(C$, 'eventEnabled$java_awt_AWTEvent',  function (e) {
switch (e.getID$()) {
case 1001:
if (Long.$ne((Long.$and(this.eventMask,128)),0 ) || this.actionListener != null  ) {
return true;
}return false;
case 701:
if (Long.$ne((Long.$and(this.eventMask,512)),0 ) || this.itemListener != null  ) {
return true;
}return false;
default:
break;
}
return C$.superclazz.prototype.eventEnabled$java_awt_AWTEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processEvent$java_awt_AWTEvent',  function (e) {
if (Clazz.instanceOf(e, "java.awt.event.ItemEvent")) {
this.processItemEvent$java_awt_event_ItemEvent(e);
return;
} else if (Clazz.instanceOf(e, "java.awt.event.ActionEvent")) {
this.processActionEvent$java_awt_event_ActionEvent(e);
return;
}C$.superclazz.prototype.processEvent$java_awt_AWTEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processItemEvent$java_awt_event_ItemEvent',  function (e) {
var listener=this.itemListener;
if (listener != null ) {
listener.itemStateChanged$java_awt_event_ItemEvent(e);
}});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (this.itemListener != null  && !C$.superclazz.prototype.getSelectionModel$.apply(this, []).getValueIsAdjusting$() ) {
this.processItemEvent$java_awt_event_ItemEvent(Clazz.new_([this, 701, this.getSelectedItem$(), 1],$I$(7,1).c$$java_awt_ItemSelectable$I$O$I));
}});

Clazz.newMeth(C$, 'processActionEvent$java_awt_event_ActionEvent',  function (e) {
var listener=this.actionListener;
if (listener != null ) {
listener.actionPerformed$java_awt_event_ActionEvent(e);
}});

Clazz.newMeth(C$, 'paramString$',  function () {
return C$.superclazz.prototype.paramString$.apply(this, []) + ",selected=" + this.getSelectedItem$() ;
});

Clazz.newMeth(C$, '秘processUIEvent$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.秘processUIEvent$java_awt_event_MouseEvent.apply(this, [e]);
if (e.getID$() == 500) {
if (e.getClickCount$() == 2) {
this.processActionEvent$java_awt_event_ActionEvent(Clazz.new_([this, 1001, this.getSelectedItem$()],$I$(8,1).c$$O$I$S));
if (this.itemListener != null ) this.processItemEvent$java_awt_event_ItemEvent(Clazz.new_([this, 701, this.getSelectedItem$(), 1],$I$(7,1).c$$java_awt_ItemSelectable$I$O$I));
return true;
}}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.nameCounter=0;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
