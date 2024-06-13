(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},p$2={},p$3={},I$=[[0,'java.awt.Point','java.awt.datatransfer.StringSelection','java.awt.datatransfer.DataFlavor','java.util.Hashtable','javax.swing.KeyStroke','javax.swing.Action','java.util.Vector',['javax.swing.text.JTextComponent','.KeymapWrapper'],'sun.awt.AppContext','StringBuffer','javax.swing.event.EventListenerList',['javax.swing.text.JTextComponent','.JSPlainDocument','.DocEvent'],['javax.swing.event.DocumentEvent','.EventType'],'javax.swing.event.DocumentListener','javax.swing.DropMode',['javax.swing.text.JTextComponent','.MutableCaretEvent'],'javax.swing.event.CaretListener',['javax.swing.text.JTextComponent','.JSPlainDocument'],['javax.swing.text.Position','.Bias'],['javax.swing.text.JTextComponent','.DropLocation'],['javax.swing.text.JTextComponent','.KeymapActionMap'],['javax.swing.text.JTextComponent','.DefaultKeymap'],'java.util.HashMap',['javax.swing.text.DefaultEditorKit','.DefaultKeyTypedAction'],'swingjs.JSUtil','javax.swing.TransferHandler','java.awt.event.ActionEvent','java.awt.EventQueue',['javax.swing.text.JTextComponent','.DefaultTransferHandler']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTextComponent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', ['java.awt.TextComponent', 'javax.swing.Scrollable']);
C$.$classes$=[['KeyBinding',9],['DropLocation',25],['DefaultTransferHandler',8],['DefaultKeymap',8],['KeymapWrapper',8],['KeymapActionMap',8],['MutableCaretEvent',9],['JSPlainDocument',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dropMode=$I$(15).USE_SELECTION;
},1);

C$.$fields$=[['Z',['editable','dragEnabled'],'C',['focusAccelerator'],'S',['composedTextContent'],'O',['秘jsHTMLHelper','swingjs.JSHTMLHelper','model','javax.swing.text.Document','caret','javax.swing.text.Caret','navigationFilter','javax.swing.text.NavigationFilter','highlighter','javax.swing.text.Highlighter','keymap','javax.swing.text.Keymap','caretEvent','javax.swing.text.JTextComponent.MutableCaretEvent','caretColor','java.awt.Color','+selectionColor','+selectedTextColor','+disabledTextColor','margin','java.awt.Insets','dropMode','javax.swing.DropMode','dropLocation','javax.swing.text.JTextComponent.DropLocation','composedTextAttribute','javax.swing.text.SimpleAttributeSet','composedTextStart','javax.swing.text.Position','+composedTextEnd']]
,['O',['defaultTransferHandler','javax.swing.text.JTextComponent.DefaultTransferHandler','overrideMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.enableEvents$J(2056);
this.caretEvent=Clazz.new_($I$(16,1).c$$javax_swing_text_JTextComponent,[this]);
this.addMouseListener$java_awt_event_MouseListener(this.caretEvent);
this.addFocusListener$java_awt_event_FocusListener(this.caretEvent);
this.setEditable$Z(true);
this.setDragEnabled$Z(false);
this.setLayout$java_awt_LayoutManager(null);
this.updateUI$();
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
this.invalidate$();
});

Clazz.newMeth(C$, 'addCaretListener$javax_swing_event_CaretListener',  function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(17),['caretUpdate$javax_swing_event_CaretEvent']), listener);
});

Clazz.newMeth(C$, 'removeCaretListener$javax_swing_event_CaretListener',  function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(17),['caretUpdate$javax_swing_event_CaretEvent']), listener);
});

Clazz.newMeth(C$, 'getCaretListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(17),['caretUpdate$javax_swing_event_CaretEvent']));
});

Clazz.newMeth(C$, 'fireCaretUpdate$javax_swing_event_CaretEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(17),['caretUpdate$javax_swing_event_CaretEvent']) ) {
(listeners[i + 1]).caretUpdate$javax_swing_event_CaretEvent(e);
}}
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document',  function (doc) {
var old=this.model;
if (doc === "null" ) {
doc=Clazz.new_($I$(18,1),[this, null]);
}try {
this.model=doc;
this.firePropertyChange$S$O$O("document", old, doc);
} finally {
}
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation',  function (o) {
C$.superclazz.prototype.setComponentOrientation$java_awt_ComponentOrientation.apply(this, [o]);
});

Clazz.newMeth(C$, 'getActions$',  function () {
if (this.getUI$() == null ) return null;
return (this.getUI$()).getEditorKit$javax_swing_text_JTextComponent(this).getActions$();
});

Clazz.newMeth(C$, 'setMargin$java_awt_Insets',  function (m) {
var old=this.margin;
this.margin=m;
this.firePropertyChange$S$O$O("margin", old, m);
this.invalidate$();
});

Clazz.newMeth(C$, 'getMargin$',  function () {
return this.margin;
});

Clazz.newMeth(C$, 'setNavigationFilter$javax_swing_text_NavigationFilter',  function (filter) {
this.navigationFilter=filter;
});

Clazz.newMeth(C$, 'getNavigationFilter$',  function () {
return this.navigationFilter;
});

Clazz.newMeth(C$, 'getCaret$',  function () {
return this.caret;
});

Clazz.newMeth(C$, 'setCaret$javax_swing_text_Caret',  function (c) {
if (this.caret != null ) {
this.caret.removeChangeListener$javax_swing_event_ChangeListener(this.caretEvent);
this.caret.deinstall$javax_swing_text_JTextComponent(this);
}var old=this.caret;
this.caret=c;
if (this.caret != null ) {
this.caret.install$javax_swing_text_JTextComponent(this);
this.caret.addChangeListener$javax_swing_event_ChangeListener(this.caretEvent);
}this.firePropertyChange$S$O$O("caret", old, this.caret);
});

Clazz.newMeth(C$, 'getHighlighter$',  function () {
return this.highlighter;
});

Clazz.newMeth(C$, 'setHighlighter$javax_swing_text_Highlighter',  function (h) {
if (this.highlighter != null ) {
this.highlighter.deinstall$javax_swing_text_JTextComponent(this);
}var old=this.highlighter;
this.highlighter=h;
if (this.highlighter != null ) {
this.highlighter.install$javax_swing_text_JTextComponent(this);
}this.firePropertyChange$S$O$O("highlighter", old, h);
});

Clazz.newMeth(C$, 'setKeymap$javax_swing_text_Keymap',  function (map) {
var old=this.keymap;
this.keymap=map;
this.firePropertyChange$S$O$O("keymap", old, this.keymap);
this.updateInputMap$javax_swing_text_Keymap$javax_swing_text_Keymap(old, map);
});

Clazz.newMeth(C$, 'setDragEnabled$Z',  function (b) {
this.dragEnabled=b;
});

Clazz.newMeth(C$, 'getDragEnabled$',  function () {
return this.dragEnabled;
});

Clazz.newMeth(C$, 'setDropMode$javax_swing_DropMode',  function (dropMode) {
if (dropMode != null ) {
switch (dropMode) {
case $I$(15).USE_SELECTION:
case $I$(15).INSERT:
this.dropMode=dropMode;
return;
}
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[dropMode + ": Unsupported drop mode for text"]);
});

Clazz.newMeth(C$, 'getDropMode$',  function () {
return this.dropMode;
});

Clazz.newMeth(C$, 'dropLocationForPoint$java_awt_Point',  function (p) {
var bias=Clazz.array($I$(19), [1]);
var index=(this.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(this, p, bias);
if (bias[0] == null ) {
bias[0]=$I$(19).Forward;
}return Clazz.new_($I$(20,1).c$$java_awt_Point$I$javax_swing_text_Position_Bias,[p, index, bias[0]]);
});

Clazz.newMeth(C$, 'setDropLocation$javax_swing_TransferHandler_DropLocation$O$Z',  function (location, state, forDrop) {
var retVal=null;
var textLocation=location;
if (this.dropMode === $I$(15).USE_SELECTION ) {
if (textLocation == null ) {
if (state != null ) {
var vals=state;
if (!forDrop) {
if (Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret")) {
(this.caret).setDot$I$javax_swing_text_Position_Bias((vals[0]).intValue$(), vals[3]);
(this.caret).moveDot$I$javax_swing_text_Position_Bias((vals[1]).intValue$(), vals[4]);
} else {
this.caret.setDot$I((vals[0]).intValue$());
this.caret.moveDot$I((vals[1]).intValue$());
}}this.caret.setVisible$Z((vals[2]).booleanValue$());
}} else {
if (this.dropLocation == null ) {
var visible;
if (Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret")) {
var dc=this.caret;
visible=dc.isActive$();
retVal=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(dc.getMark$()), Integer.valueOf$I(dc.getDot$()), Boolean.valueOf$Z(visible), dc.getMarkBias$(), dc.getDotBias$()]);
} else {
visible=this.caret.isVisible$();
retVal=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.caret.getMark$()), Integer.valueOf$I(this.caret.getDot$()), Boolean.valueOf$Z(visible)]);
}this.caret.setVisible$Z(true);
} else {
retVal=state;
}if (Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret")) {
(this.caret).setDot$I$javax_swing_text_Position_Bias(textLocation.getIndex$(), textLocation.getBias$());
} else {
this.caret.setDot$I(textLocation.getIndex$());
}}} else {
if (textLocation == null ) {
if (state != null ) {
this.caret.setVisible$Z((state).booleanValue$());
}} else {
if (this.dropLocation == null ) {
var visible=Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret") ? (this.caret).isActive$() : this.caret.isVisible$();
retVal=Boolean.valueOf$Z(visible);
this.caret.setVisible$Z(false);
} else {
retVal=state;
}}}var old=this.dropLocation;
this.dropLocation=textLocation;
this.firePropertyChange$S$O$O("dropLocation", old, this.dropLocation);
return retVal;
});

Clazz.newMeth(C$, 'getDropLocation$',  function () {
return this.dropLocation;
});

Clazz.newMeth(C$, 'updateInputMap$javax_swing_text_Keymap$javax_swing_text_Keymap',  function (oldKm, newKm) {
var km=this.getInputMap$I(0);
var last=km;
while (km != null  && !(Clazz.instanceOf(km, "javax.swing.text.JTextComponent.KeymapWrapper")) ){
last=km;
km=km.getParent$();
}
if (km != null ) {
if (newKm == null ) {
if (last !== km ) {
last.setParent$javax_swing_InputMap(km.getParent$());
} else {
last.setParent$javax_swing_InputMap(null);
}} else {
var newKM=Clazz.new_($I$(8,1).c$$javax_swing_text_Keymap,[newKm]);
last.setParent$javax_swing_InputMap(newKM);
if (last !== km ) {
newKM.setParent$javax_swing_InputMap(km.getParent$());
}}} else if (newKm != null ) {
km=this.getInputMap$I(0);
if (km != null ) {
var newKM=Clazz.new_($I$(8,1).c$$javax_swing_text_Keymap,[newKm]);
newKM.setParent$javax_swing_InputMap(km.getParent$());
km.setParent$javax_swing_InputMap(newKM);
}}var am=this.getActionMap$();
var lastAM=am;
while (am != null  && !(Clazz.instanceOf(am, "javax.swing.text.JTextComponent.KeymapActionMap")) ){
lastAM=am;
am=am.getParent$();
}
if (am != null ) {
if (newKm == null ) {
if (lastAM !== am ) {
lastAM.setParent$javax_swing_ActionMap(am.getParent$());
} else {
lastAM.setParent$javax_swing_ActionMap(null);
}} else {
var newAM=Clazz.new_($I$(21,1).c$$javax_swing_text_Keymap,[newKm]);
lastAM.setParent$javax_swing_ActionMap(newAM);
if (lastAM !== am ) {
newAM.setParent$javax_swing_ActionMap(am.getParent$());
}}} else if (newKm != null ) {
am=this.getActionMap$();
if (am != null ) {
var newAM=Clazz.new_($I$(21,1).c$$javax_swing_text_Keymap,[newKm]);
newAM.setParent$javax_swing_ActionMap(am.getParent$());
am.setParent$javax_swing_ActionMap(newAM);
}}});

Clazz.newMeth(C$, 'getKeymap$',  function () {
return this.keymap;
});

Clazz.newMeth(C$, 'addKeymap$S$javax_swing_text_Keymap',  function (nm, parent) {
var map=Clazz.new_($I$(22,1).c$$S$javax_swing_text_Keymap,[nm, parent]);
if (nm != null ) {
C$.getKeymapTable$().put$O$O(nm, map);
}return map;
}, 1);

Clazz.newMeth(C$, 'removeKeymap$S',  function (nm) {
return C$.getKeymapTable$().remove$O(nm);
}, 1);

Clazz.newMeth(C$, 'getKeymap$S',  function (nm) {
return C$.getKeymapTable$().get$O(nm);
}, 1);

Clazz.newMeth(C$, 'getKeymapTable$',  function () {
{
var appContext=$I$(9).getAppContext$();
var keymapTable=appContext.get$O("JTextComponent_KeymapTable");
if (keymapTable == null ) {
keymapTable=Clazz.new_($I$(23,1).c$$I,[17]);
appContext.put$O$O("JTextComponent_KeymapTable", keymapTable);
var binding=C$.addKeymap$S$javax_swing_text_Keymap("default", null);
binding.setDefaultAction$javax_swing_Action(Clazz.new_($I$(24,1)));
}return keymapTable;
}}, 1);

Clazz.newMeth(C$, 'loadKeymap$javax_swing_text_Keymap$javax_swing_text_JTextComponent_KeyBindingA$javax_swing_ActionA',  function (map, bindings, actions) {
var h=Clazz.new_($I$(4,1));
for (var i=0; i < actions.length; i++) {
var a=actions[i];
var value=a.getValue$S("Name");
h.put$O$O((value != null  ? value : ""), a);
}
for (var i=0; i < bindings.length; i++) {
var a=h.get$O(bindings[i].actionName);
if (a != null ) {
map.addActionForKeyStroke$javax_swing_KeyStroke$javax_swing_Action(bindings[i].key, a);
}}
}, 1);

Clazz.newMeth(C$, 'getCaretColor$',  function () {
return this.caretColor;
});

Clazz.newMeth(C$, 'setCaretColor$java_awt_Color',  function (c) {
var old=this.caretColor;
this.caretColor=c;
this.firePropertyChange$S$O$O("caretColor", old, this.caretColor);
});

Clazz.newMeth(C$, 'getSelectionColor$',  function () {
return this.selectionColor;
});

Clazz.newMeth(C$, 'setSelectionColor$java_awt_Color',  function (c) {
var old=this.selectionColor;
this.selectionColor=c;
this.firePropertyChange$S$O$O("selectionColor", old, this.selectionColor);
});

Clazz.newMeth(C$, 'getSelectedTextColor$',  function () {
return this.selectedTextColor;
});

Clazz.newMeth(C$, 'setSelectedTextColor$java_awt_Color',  function (c) {
var old=this.selectedTextColor;
this.selectedTextColor=c;
this.firePropertyChange$S$O$O("selectedTextColor", old, this.selectedTextColor);
});

Clazz.newMeth(C$, 'getDisabledTextColor$',  function () {
return this.disabledTextColor;
});

Clazz.newMeth(C$, 'setDisabledTextColor$java_awt_Color',  function (c) {
var old=this.disabledTextColor;
this.disabledTextColor=c;
this.firePropertyChange$S$O$O("disabledTextColor", old, this.disabledTextColor);
});

Clazz.newMeth(C$, 'replaceSelection$S',  function (content) {
var doc=this.getDocument$();
if (doc != null ) {
try {
var composedTextSaved=p$3.saveComposedText$I.apply(this, [this.caret.getDot$()]);
var p0=Math.min(this.caret.getDot$(), this.caret.getMark$());
var p1=Math.max(this.caret.getDot$(), this.caret.getMark$());
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet$javax_swing_text_JTextComponent(p0, p1 - p0, content, null, this);
} else {
if (p0 != p1) {
doc.remove$I$I(p0, p1 - p0);
}if (content != null  && content.length$() > 0 ) {
doc.insertString$I$S$javax_swing_text_AttributeSet(p0, content, null);
}}if (composedTextSaved) {
p$3.restoreComposedText.apply(this, []);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
$I$(25,"alert$O",["SWINGJS BAD LOCATION EXCEPTION (replace):" + e.getMessage$() + $I$(25).getStackTrace$I(-10) ]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getText$I$I',  function (offs, len) {
return this.getDocument$().getText$I$I(offs, len);
});

Clazz.newMeth(C$, 'modelToView$I',  function (pos) {
return (this.getUI$()).modelToView$javax_swing_text_JTextComponent$I(this, pos);
});

Clazz.newMeth(C$, 'viewToModel$java_awt_Point',  function (pt) {
return (this.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point(this, pt);
});

Clazz.newMeth(C$, 'cut$',  function () {
(this.ui).action$S$I("delete", 0);
if (this.isEditable$() && this.isEnabled$() ) {
p$3.invokeAction$S$javax_swing_Action.apply(this, ["cut", $I$(26).getCutAction$()]);
}});

Clazz.newMeth(C$, 'copy$',  function () {
p$3.invokeAction$S$javax_swing_Action.apply(this, ["copy", $I$(26).getCopyAction$()]);
});

Clazz.newMeth(C$, 'paste$',  function () {
(this.ui).action$S$I("paste", 0);
if (this.isEditable$() && this.isEnabled$() ) {
p$3.invokeAction$S$javax_swing_Action.apply(this, ["paste", $I$(26).getPasteAction$()]);
}});

Clazz.newMeth(C$, 'invokeAction$S$javax_swing_Action',  function (name, altAction) {
var map=this.getActionMap$();
var action=null;
if (map != null ) {
action=map.get$O(name);
}p$3.installDefaultTransferHandlerIfNecessary.apply(this, []);
if (action == null ) {
action=altAction;
}action.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this, 1001, action.getValue$S("Name"), $I$(28).getMostRecentEventTime$(), p$3.getCurrentEventModifiers.apply(this, [])],$I$(27,1).c$$O$I$S$J$I));
}, p$3);

Clazz.newMeth(C$, 'installDefaultTransferHandlerIfNecessary',  function () {
if (this.getTransferHandler$() == null ) {
if (C$.defaultTransferHandler == null ) {
C$.defaultTransferHandler=Clazz.new_($I$(29,1));
}this.setTransferHandler$javax_swing_TransferHandler(C$.defaultTransferHandler);
}}, p$3);

Clazz.newMeth(C$, 'moveCaretPosition$I',  function (pos) {
var doc=this.getDocument$();
if (doc != null ) {
if (pos > doc.getLength$() || pos < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad position: " + pos]);
}this.caret.moveDot$I(pos);
}});

Clazz.newMeth(C$, 'setFocusAccelerator$C',  function (aKey) {
aKey=Character.toUpperCase$C(aKey);
var old=this.focusAccelerator;
this.focusAccelerator=aKey;
this.firePropertyChange$S$C$C("focusAcceleratorKey", old, this.focusAccelerator);
this.firePropertyChange$S$C$C("focusAccelerator", old, this.focusAccelerator);
});

Clazz.newMeth(C$, 'getFocusAccelerator$',  function () {
return this.focusAccelerator;
});

Clazz.newMeth(C$, 'read$java_io_Reader$O',  function ($in, desc) {
var kit=(this.getUI$()).getEditorKit$javax_swing_text_JTextComponent(this);
var doc=kit.createDefaultDocument$();
if (desc != null ) {
doc.putProperty$O$O("stream", desc);
}try {
kit.read$java_io_Reader$javax_swing_text_Document$I($in, doc, 0);
this.setDocument$javax_swing_text_Document(doc);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'write$java_io_Writer',  function (out) {
var doc=this.getDocument$();
try {
(this.getUI$()).getEditorKit$javax_swing_text_JTextComponent(this).write$java_io_Writer$javax_swing_text_Document$I$I(out, doc, 0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
if (C$.getFocusedComponent$() === this ) {
$I$(9).getAppContext$().remove$O("JTextComponent_FocusedComponent");
}});

Clazz.newMeth(C$, 'setCaretPosition$I',  function (position) {
var doc=this.getDocument$();
if (doc != null ) {
if (position > doc.getLength$() || position < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad position: " + position]);
}this.caret.setDot$I(position);
}});

Clazz.newMeth(C$, 'getCaretPosition$',  function () {
return this.caret.getDot$();
});

Clazz.newMeth(C$, 'setText$S',  function (t) {
try {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet$javax_swing_text_JTextComponent(0, doc.getLength$(), t, null, this);
} else {
doc.remove$I$I(0, doc.getLength$());
doc.insertString$I$S$javax_swing_text_AttributeSet(0, t, null);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
$I$(25,"alert$O",["SWINGJS BAD LOCATION EXCEPTION (setText):" + e.getMessage$() + $I$(25).getStackTrace$I(-10) ]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getText$',  function () {
var doc=this.getDocument$();
var txt;
try {
txt=doc.getText$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
txt=null;
} else {
throw e;
}
}
return txt;
});

Clazz.newMeth(C$, 'getSelectedText$',  function () {
var txt=null;
var p0=Math.min(this.caret.getDot$(), this.caret.getMark$());
var p1=Math.max(this.caret.getDot$(), this.caret.getMark$());
if (p0 != p1) {
try {
var doc=this.getDocument$();
txt=doc.getText$I$I(p0, p1 - p0);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}return txt;
});

Clazz.newMeth(C$, 'isEditable$',  function () {
return this.editable;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (b) {
if (b != this.editable ) {
var oldVal=this.editable;
this.editable=b;
this.firePropertyChange$S$O$O("editable", Boolean.valueOf$Z(oldVal), Boolean.valueOf$Z(this.editable));
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getSelectionStart$',  function () {
var start=Math.min(this.caret.getDot$(), this.caret.getMark$());
return start;
});

Clazz.newMeth(C$, 'setSelectionStart$I',  function (selectionStart) {
this.select$I$I(selectionStart, this.getSelectionEnd$());
});

Clazz.newMeth(C$, 'getSelectionEnd$',  function () {
var end=Math.max(this.caret.getDot$(), this.caret.getMark$());
return end;
});

Clazz.newMeth(C$, 'setSelectionEnd$I',  function (selectionEnd) {
this.select$I$I(this.getSelectionStart$(), selectionEnd);
});

Clazz.newMeth(C$, 'select$I$I',  function (selectionStart, selectionEnd) {
var docLength=this.getDocument$().getLength$();
if (selectionStart < 0) {
selectionStart=0;
}if (selectionStart > docLength) {
selectionStart=docLength;
}if (selectionEnd > docLength) {
selectionEnd=docLength;
}if (selectionEnd < selectionStart) {
selectionEnd=selectionStart;
}this.setCaretPosition$I(selectionStart);
this.moveCaretPosition$I(selectionEnd);
});

Clazz.newMeth(C$, 'selectAll$',  function () {
var doc=this.getDocument$();
if (doc != null ) {
this.setCaretPosition$I(0);
this.moveCaretPosition$I(doc.getLength$());
}});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent',  function (event) {
var retValue=C$.superclazz.prototype.getToolTipText$java_awt_event_MouseEvent.apply(this, [event]);
if (retValue == null ) {
var ui=(this.getUI$());
if (ui != null ) {
retValue=ui.getToolTipText$javax_swing_text_JTextComponent$java_awt_Point(this, Clazz.new_([event.getX$(), event.getY$()],$I$(1,1).c$$I$I));
}}return retValue;
});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
switch (orientation) {
case 1:
return (visibleRect.height/10|0);
case 0:
return (visibleRect.width/10|0);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid orientation: " + orientation]);
}
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
switch (orientation) {
case 1:
return visibleRect.height;
case 0:
return visibleRect.width;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid orientation: " + orientation]);
}
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
return ((this.getParent$()).getWidth$() > this.getPreferredSize$().width);
}return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
return ((this.getParent$()).getHeight$() > this.getPreferredSize$().height);
}return false;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var editableString=(this.editable ? "true" : "false");
var caretColorString=(this.caretColor != null  ? this.caretColor.toString() : "");
var selectionColorString=(this.selectionColor != null  ? this.selectionColor.toString() : "");
var selectedTextColorString=(this.selectedTextColor != null  ? this.selectedTextColor.toString() : "");
var disabledTextColorString=(this.disabledTextColor != null  ? this.disabledTextColor.toString() : "");
var marginString=(this.margin != null  ? this.margin.toString() : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",caretColor=" + caretColorString + ",disabledTextColor=" + disabledTextColorString + ",editable=" + editableString + ",margin=" + marginString + ",selectedTextColor=" + selectedTextColorString + ",selectionColor=" + selectionColorString ;
});

Clazz.newMeth(C$, 'getFocusedComponent$',  function () {
return $I$(9).getAppContext$().get$O("JTextComponent_FocusedComponent");
}, 1);

Clazz.newMeth(C$, 'getCurrentEventModifiers',  function () {
var modifiers=0;
var currentEvent=$I$(28).getCurrentEvent$();
if (Clazz.instanceOf(currentEvent, "java.awt.event.InputEvent")) {
modifiers=(currentEvent).getModifiers$();
} else if (Clazz.instanceOf(currentEvent, "java.awt.event.ActionEvent")) {
modifiers=(currentEvent).getModifiers$();
}return modifiers;
}, p$3);

Clazz.newMeth(C$, 'addInputMethodListener$java_awt_event_InputMethodListener',  function (l) {
C$.superclazz.prototype.addInputMethodListener$java_awt_event_InputMethodListener.apply(this, [l]);
if (l != null ) {
}});

Clazz.newMeth(C$, 'saveComposedText$I',  function (pos) {
if (this.composedTextExists$()) {
var start=this.composedTextStart.getOffset$();
var len=this.composedTextEnd.getOffset$() - this.composedTextStart.getOffset$();
if (pos >= start && pos <= start + len ) {
try {
this.getDocument$().remove$I$I(start, len);
return true;
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}}return false;
}, p$3);

Clazz.newMeth(C$, 'restoreComposedText',  function () {
var doc=this.getDocument$();
try {
doc.insertString$I$S$javax_swing_text_AttributeSet(this.caret.getDot$(), this.composedTextContent, this.composedTextAttribute);
this.composedTextStart=doc.createPosition$I(this.caret.getDot$() - this.composedTextContent.length$());
this.composedTextEnd=doc.createPosition$I(this.caret.getDot$());
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}, p$3);

Clazz.newMeth(C$, 'composedTextExists$',  function () {
return (this.composedTextStart != null );
});

Clazz.newMeth(C$, 'setTextFromUI$S',  function (val) {
this.setText$S(val);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "KeyBinding", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['actionName'],'O',['key','javax.swing.KeyStroke']]]

Clazz.newMeth(C$, 'c$$javax_swing_KeyStroke$S',  function (key, actionName) {
;C$.$init$.apply(this);
this.key=key;
this.actionName=actionName;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "DropLocation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.TransferHandler','.DropLocation']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['bias','javax.swing.text.Position.Bias','$dropPoint','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_Point$I$javax_swing_text_Position_Bias',  function (p, index, bias) {
;C$.superclazz.c$$java_awt_Point.apply(this,[p]);C$.$init$.apply(this);
this.$dropPoint=Clazz.new_($I$(1,1).c$$java_awt_Point,[p]);
this.index=index;
this.bias=bias;
}, 1);

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'getBias$',  function () {
return this.bias;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[dropPoint=" + this.getDropPoint$() + "," + "index=" + this.index + "," + "bias=" + this.bias + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "DefaultTransferHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.TransferHandler', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'exportToClipboard$javax_swing_JComponent$java_awt_datatransfer_Clipboard$I',  function (comp, clipboard, action) {
if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent")) {
var text=comp;
var p0=text.getSelectionStart$();
var p1=text.getSelectionEnd$();
if (p0 != p1) {
try {
var doc=text.getDocument$();
var srcData=doc.getText$I$I(p0, p1 - p0);
var contents=Clazz.new_($I$(2,1).c$$S,[srcData]);
clipboard.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(contents, null);
if (action == 2) {
doc.remove$I$I(p0, p1 - p0);
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}}});

Clazz.newMeth(C$, 'importData$javax_swing_JComponent$java_awt_datatransfer_Transferable',  function (comp, t) {
if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent")) {
var flavor=p$1.getFlavor$java_awt_datatransfer_DataFlavorA.apply(this, [t.getTransferDataFlavors$()]);
if (flavor != null ) {
try {
var data=t.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
(comp).replaceSelection$S(data);
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.awt.datatransfer.UnsupportedFlavorException")){
var ufe = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
}
} else {
throw e$$;
}
}
}}return false;
});

Clazz.newMeth(C$, 'canImport$javax_swing_JComponent$java_awt_datatransfer_DataFlavorA',  function (comp, transferFlavors) {
var c=comp;
if (!(c.isEditable$() && c.isEnabled$() )) {
return false;
}return (p$1.getFlavor$java_awt_datatransfer_DataFlavorA.apply(this, [transferFlavors]) != null );
});

Clazz.newMeth(C$, 'getSourceActions$javax_swing_JComponent',  function (c) {
return 0;
});

Clazz.newMeth(C$, 'getFlavor$java_awt_datatransfer_DataFlavorA',  function (flavors) {
if (flavors != null ) {
for (var counter=0; counter < flavors.length; counter++) {
if (flavors[counter].equals$java_awt_datatransfer_DataFlavor($I$(3).stringFlavor)) {
return flavors[counter];
}}
}return null;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "DefaultKeymap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.text.Keymap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['nm'],'O',['parent','javax.swing.text.Keymap','bindings','java.util.Hashtable','defaultAction','javax.swing.Action']]]

Clazz.newMeth(C$, 'c$$S$javax_swing_text_Keymap',  function (nm, parent) {
;C$.$init$.apply(this);
this.nm=nm;
this.parent=parent;
this.bindings=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'getDefaultAction$',  function () {
if (this.defaultAction != null ) {
return this.defaultAction;
}return (this.parent != null ) ? this.parent.getDefaultAction$() : null;
});

Clazz.newMeth(C$, 'setDefaultAction$javax_swing_Action',  function (a) {
this.defaultAction=a;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.nm;
});

Clazz.newMeth(C$, 'getAction$javax_swing_KeyStroke',  function (key) {
var a=this.bindings.get$O(key);
if ((a == null ) && (this.parent != null ) ) {
a=this.parent.getAction$javax_swing_KeyStroke(key);
}return a;
});

Clazz.newMeth(C$, 'getBoundKeyStrokes$',  function () {
var keys=Clazz.array($I$(5), [this.bindings.size$()]);
var i=0;
for (var e=this.bindings.keys$(); e.hasMoreElements$(); ) {
keys[i++]=e.nextElement$();
}
return keys;
});

Clazz.newMeth(C$, 'getBoundActions$',  function () {
var actions=Clazz.array($I$(6), [this.bindings.size$()]);
var i=0;
for (var e=this.bindings.elements$(); e.hasMoreElements$(); ) {
actions[i++]=e.nextElement$();
}
return actions;
});

Clazz.newMeth(C$, 'getKeyStrokesForAction$javax_swing_Action',  function (a) {
if (a == null ) {
return null;
}var retValue=null;
var keyStrokes=null;
for (var enum_=this.bindings.keys$(); enum_.hasMoreElements$(); ) {
var key=enum_.nextElement$();
if (this.bindings.get$O(key) === a ) {
if (keyStrokes == null ) {
keyStrokes=Clazz.new_($I$(7,1));
}keyStrokes.addElement$O(key);
}}
if (this.parent != null ) {
var pStrokes=this.parent.getKeyStrokesForAction$javax_swing_Action(a);
if (pStrokes != null ) {
var rCount=0;
for (var counter=pStrokes.length - 1; counter >= 0; counter--) {
if (this.isLocallyDefined$javax_swing_KeyStroke(pStrokes[counter])) {
pStrokes[counter]=null;
++rCount;
}}
if (rCount > 0 && rCount < pStrokes.length ) {
if (keyStrokes == null ) {
keyStrokes=Clazz.new_($I$(7,1));
}for (var counter=pStrokes.length - 1; counter >= 0; counter--) {
if (pStrokes[counter] != null ) {
keyStrokes.addElement$O(pStrokes[counter]);
}}
} else if (rCount == 0) {
if (keyStrokes == null ) {
retValue=pStrokes;
} else {
retValue=Clazz.array($I$(5), [keyStrokes.size$() + pStrokes.length]);
keyStrokes.copyInto$OA(retValue);
System.arraycopy$O$I$O$I$I(pStrokes, 0, retValue, keyStrokes.size$(), pStrokes.length);
keyStrokes=null;
}}}}if (keyStrokes != null ) {
retValue=Clazz.array($I$(5), [keyStrokes.size$()]);
keyStrokes.copyInto$OA(retValue);
}return retValue;
});

Clazz.newMeth(C$, 'isLocallyDefined$javax_swing_KeyStroke',  function (key) {
return this.bindings.containsKey$O(key);
});

Clazz.newMeth(C$, 'addActionForKeyStroke$javax_swing_KeyStroke$javax_swing_Action',  function (key, a) {
this.bindings.put$O$O(key, a);
});

Clazz.newMeth(C$, 'removeKeyStrokeBinding$javax_swing_KeyStroke',  function (key) {
this.bindings.remove$O(key);
});

Clazz.newMeth(C$, 'removeBindings$',  function () {
this.bindings.clear$();
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'setResolveParent$javax_swing_text_Keymap',  function (parent) {
this.parent=parent;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Keymap[" + this.nm + "]" + this.bindings ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "KeymapWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.InputMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['keymap','javax.swing.text.Keymap']]
,['O',['DefaultActionKey','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Keymap',  function (keymap) {
Clazz.super_(C$, this);
this.keymap=keymap;
}, 1);

Clazz.newMeth(C$, 'keys$',  function () {
var sKeys=C$.superclazz.prototype.keys$.apply(this, []);
var keymapKeys=this.keymap.getBoundKeyStrokes$();
var sCount=(sKeys == null ) ? 0 : sKeys.length;
var keymapCount=(keymapKeys == null ) ? 0 : keymapKeys.length;
if (sCount == 0) {
return keymapKeys;
}if (keymapCount == 0) {
return sKeys;
}var retValue=Clazz.array($I$(5), [sCount + keymapCount]);
System.arraycopy$O$I$O$I$I(sKeys, 0, retValue, 0, sCount);
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, sCount, keymapCount);
return retValue;
});

Clazz.newMeth(C$, 'size$',  function () {
var keymapStrokes=this.keymap.getBoundKeyStrokes$();
var keymapCount=(keymapStrokes == null ) ? 0 : keymapStrokes.length;
return C$.superclazz.prototype.size$.apply(this, []) + keymapCount;
});

Clazz.newMeth(C$, 'get$javax_swing_KeyStroke',  function (keyStroke) {
var retValue=this.keymap.getAction$javax_swing_KeyStroke(keyStroke);
if (retValue == null ) {
retValue=C$.superclazz.prototype.get$javax_swing_KeyStroke.apply(this, [keyStroke]);
if (retValue == null  && keyStroke.getKeyChar$() != "\uffff"  && this.keymap.getDefaultAction$() != null  ) {
retValue=C$.DefaultActionKey;
}}return retValue;
});

C$.$static$=function(){C$.$static$=0;
C$.DefaultActionKey= Clazz.new_();
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "KeymapActionMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.ActionMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['keymap','javax.swing.text.Keymap']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Keymap',  function (keymap) {
Clazz.super_(C$, this);
this.keymap=keymap;
}, 1);

Clazz.newMeth(C$, 'keys$',  function () {
var sKeys=C$.superclazz.prototype.keys$.apply(this, []);
var keymapKeys=this.keymap.getBoundActions$();
var sCount=(sKeys == null ) ? 0 : sKeys.length;
var keymapCount=(keymapKeys == null ) ? 0 : keymapKeys.length;
var hasDefault=(this.keymap.getDefaultAction$() != null );
if (hasDefault) {
++keymapCount;
}if (sCount == 0) {
if (hasDefault) {
var retValue=Clazz.array(java.lang.Object, [keymapCount]);
if (keymapCount > 1) {
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, 0, keymapCount - 1);
}retValue[keymapCount - 1]=$I$(8).DefaultActionKey;
return retValue;
}return keymapKeys;
}if (keymapCount == 0) {
return sKeys;
}var retValue=Clazz.array(java.lang.Object, [sCount + keymapCount]);
System.arraycopy$O$I$O$I$I(sKeys, 0, retValue, 0, sCount);
if (hasDefault) {
if (keymapCount > 1) {
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, sCount, keymapCount - 1);
}retValue[sCount + keymapCount - 1]=$I$(8).DefaultActionKey;
} else {
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, sCount, keymapCount);
}return retValue;
});

Clazz.newMeth(C$, 'size$',  function () {
var actions=this.keymap.getBoundActions$();
var keymapCount=(actions == null ) ? 0 : actions.length;
if (this.keymap.getDefaultAction$() != null ) {
++keymapCount;
}return C$.superclazz.prototype.size$.apply(this, []) + keymapCount;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
var retValue=C$.superclazz.prototype.get$O.apply(this, [key]);
if (retValue == null ) {
if (key === $I$(8).DefaultActionKey ) {
retValue=this.keymap.getDefaultAction$();
} else if (Clazz.instanceOf(key, "javax.swing.Action")) {
retValue=key;
}}return retValue;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "MutableCaretEvent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.event.CaretEvent', ['javax.swing.event.ChangeListener', 'java.awt.event.FocusListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['dragActive'],'I',['dot','mark']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_JTextComponent',  function (c) {
;C$.superclazz.c$$O.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fire$',  function () {
var c=this.getSource$();
if (c != null ) {
var caret=c.getCaret$();
if (caret != null ) {
this.dot=caret.getDot$();
this.mark=caret.getMark$();
c.fireCaretUpdate$javax_swing_event_CaretEvent(this);
}}});

Clazz.newMeth(C$, 'toString',  function () {
return "dot=" + this.dot + "," + "mark=" + this.mark ;
});

Clazz.newMeth(C$, 'getDot$',  function () {
return this.dot;
});

Clazz.newMeth(C$, 'getMark$',  function () {
return this.mark;
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (!this.dragActive) {
this.fire$();
}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (fe) {
$I$(9).getAppContext$().put$O$O("JTextComponent_FocusedComponent", fe.getSource$());
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (fe) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.dragActive=true;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.dragActive=false;
this.fire$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent, "JSPlainDocument", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.text.Document');
C$.$classes$=[['DocEvent',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myText=Clazz.new_($I$(10,1));
this.listenerList=Clazz.new_($I$(11,1));
this.achar=Clazz.array(Character.TYPE, [0]);
},1);

C$.$fields$=[['O',['myText','StringBuffer','listenerList','javax.swing.event.EventListenerList','achar','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLength$',  function () {
return this.myText.length$();
});

Clazz.newMeth(C$, 'getText$I$I',  function (offset, length) {
return this.myText.substring$I$I(offset, offset + length);
});

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet',  function (offset, str, a) {
if ((str == null ) || (str.length$() == 0) ) {
return;
}this.myText.insert$I$S(offset, str);
var e=Clazz.new_([this, null, offset, str.length$(), $I$(13).INSERT],$I$(12,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
p$2.fireInsertUpdate$javax_swing_event_DocumentEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'remove$I$I',  function (offs, len) {
if (len <= 0) return;
if (offs < 0 || (offs + len) > this.getLength$() ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid remove", this.getLength$() + 1]);
}this.myText.replace$I$I$S(offs, len, "");
var chng=Clazz.new_([this, null, offs, len, $I$(13).REMOVE],$I$(12,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
p$2.fireRemoveUpdate$javax_swing_event_DocumentEvent.apply(this, [chng]);
});

Clazz.newMeth(C$, 'fireInsertUpdate$javax_swing_event_DocumentEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(14),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).insertUpdate$javax_swing_event_DocumentEvent(e);
}}
}, p$2);

Clazz.newMeth(C$, 'fireRemoveUpdate$javax_swing_event_DocumentEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(14),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).removeUpdate$javax_swing_event_DocumentEvent(e);
}}
}, p$2);

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'addDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(14),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']), listener);
});

Clazz.newMeth(C$, 'removeDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(14),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']), listener);
});

Clazz.newMeth(C$, 'getText$I$I$javax_swing_text_Segment',  function (offset, length, txt) {
return;
});

Clazz.newMeth(C$, 'getStartPosition$',  function () {
return null;
});

Clazz.newMeth(C$, 'getEndPosition$',  function () {
return null;
});

Clazz.newMeth(C$, 'createPosition$I',  function (offs) {
return null;
});

Clazz.newMeth(C$, 'getRootElements$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDefaultRootElement$',  function () {
return null;
});

Clazz.newMeth(C$, 'getProperty$O',  function (key) {
return null;
});

Clazz.newMeth(C$, 'putProperty$O$O',  function (key, value) {
});

Clazz.newMeth(C$, 'render$Runnable',  function (r) {
});

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_event_UndoableEditListener',  function (listener) {
});

Clazz.newMeth(C$, 'removeUndoableEditListener$javax_swing_event_UndoableEditListener',  function (listener) {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextComponent.JSPlainDocument, "DocEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.DocumentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','length'],'O',['type','javax.swing.event.DocumentEvent.EventType']]]

Clazz.newMeth(C$, 'c$$I$I$javax_swing_event_DocumentEvent_EventType',  function (offset, length, type) {
;C$.$init$.apply(this);
this.type=type;
this.offset=offset;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.b$['javax.swing.text.JTextComponent.JSPlainDocument'];
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getChange$javax_swing_text_Element',  function (elem) {
return null;
});

Clazz.newMeth(C$);
})()
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
