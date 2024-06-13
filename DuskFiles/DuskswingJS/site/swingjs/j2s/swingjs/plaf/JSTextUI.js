(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'Error','javax.swing.text.DefaultEditorKit','java.awt.Point','java.awt.Cursor',['javax.swing.text.Position','.Bias'],['swingjs.plaf.JSTextUI','.RootView'],'swingjs.api.js.DOMNode','swingjs.plaf.JSComponentUI','swingjs.JSToolkit','swingjs.JSKeyEvent','javax.swing.UIManager','javax.swing.text.DefaultCaret','javax.swing.SwingUtilities','javax.swing.plaf.InputMapUIResource','javax.swing.plaf.ActionMapUIResource','javax.swing.TransferHandler','swingjs.plaf.TextListener','java.util.ArrayList',['java.awt.geom.Point2D','.Double']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTextUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.$classes$=[['RootView',0],['TextActionWrapper',0],['FocusAction',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.editable=true;
this.rootView=Clazz.new_($I$(6,1),[this, null]);
this.useRootView=false;
},1);

C$.$fields$=[['Z',['editable','isEditorPane','useRootView'],'O',['editor','javax.swing.text.JTextComponent','rootView','swingjs.plaf.JSTextUI.RootView','textListener','swingjs.plaf.TextListener','charMap','java.util.ArrayList']]
,['O',['defaultKit','javax.swing.text.EditorKit','overflows','String[]','markDot','java.awt.Point','textCursor','java.awt.Cursor','discardBias','javax.swing.text.Position.Bias[]']]]

Clazz.newMeth(C$, 'getToolTipText$javax_swing_text_JTextComponent$java_awt_Point',  function (t, pt) {
return null;
});

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.editor.isOpaque$() && this.editor.isEnabled$() ) this.setBackgroundImpl$java_awt_Color(this.getBackground$());
this.setEditable$Z(this.editable);
if (this.editor.getCursor$() == null ) $I$(7).setStyle(this.domNode, "cursor", "text");
var cc=this.editor.getCaretColor$();
if (cc != null ) $I$(7,"setStyle",[this.domNode, "caret-color", $I$(8).toCSSString$java_awt_Color(cc)]);
this.setPadding$java_awt_Insets(this.editor.getMargin$());
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getCursor$',  function () {
if ((!this.editor.isCursorSet$()) || Clazz.instanceOf(this.editor.getCursor$(), "javax.swing.plaf.UIResource") ) {
return (this.editor.isEditable$()) ? C$.textCursor : null;
}return C$.superclazz.prototype.getCursor$.apply(this, []);
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
if ($I$(9).isMouseEvent$I(eventType)) {
return false;
}var b=this.checkAllowEvent$O(jQueryEvent);
if (b != null ) return b.booleanValue$();
var keyCode=jQueryEvent.keyCode ||0;
var keyEvent=null;
var ret=false;
switch (eventType) {
case -2:
keyEvent=$I$(10).newJSKeyEvent$javax_swing_JComponent$O$I$Z(this.editor, jQueryEvent, 0, false);
if (keyEvent == null ) return true;
switch (keyCode) {
case 18:
$I$(9).consumeEvent$O(jQueryEvent);
case 17:
ret=true;
break;
}
eventType=keyEvent.getID$();
break;
}
if (keyEvent != null ) {
if (eventType == 402) {
this.handleJSTextEvent$I$O$I$Z(eventType, jQueryEvent, keyCode, false);
ret=true;
}this.editor.dispatchEvent$java_awt_AWTEvent(keyEvent);
var ignore=keyEvent.bdata.doPropagate ||false;
if (!ignore && keyEvent.isConsumed$() ) {
$I$(9).consumeEvent$O(jQueryEvent);
return true;
}if (!ignore && eventType == 401  && (keyEvent.getModifiersEx$() & (640)) != 0 ) {
var code=keyEvent.getKeyCode$();
if (code >= 65 && code <= 90 ) {
var c=String.fromCharCode((code & 31));

keyEvent.id = 400; keyEvent.keyCode = 0; keyEvent.keyChar = c; jQueryEvent.stopPropagation();
keyEvent.consumed = false;
this.editor.dispatchEvent$java_awt_AWTEvent(keyEvent);
$I$(9).consumeEvent$O(jQueryEvent);
if (keyEvent.isConsumed$()) {
return true;
}}}}if (ret != true ) {
this.handleJSTextEvent$I$O$I$Z(eventType, jQueryEvent, keyCode, false);
}return true;
});

Clazz.newMeth(C$, 'handleJSTextEvent$I$O$I$Z',  function (eventType, jQueryEvent, keyCode, trigger) {
this.textListener.handleJSTextEvent$swingjs_plaf_JSTextUI$I$O(this, eventType, jQueryEvent);
});

Clazz.newMeth(C$, 'checkStopPropagation$O$Z',  function (ev, handled) {
return false;
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode',  function (node) {
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
var prefix=this.getPropertyPrefix$();
var f=this.editor.getFont$();
if ((f == null  && !this.isAWT ) || (Clazz.instanceOf(f, "javax.swing.plaf.UIResource")) ) {
this.editor.setFont$java_awt_Font($I$(11).getFont$O(prefix + ".font"));
}this.setColors$S(prefix);
var margin=this.editor.getMargin$();
if (margin == null  || Clazz.instanceOf(margin, "javax.swing.plaf.UIResource") ) {
this.editor.setMargin$java_awt_Insets($I$(11).getInsets$O(prefix + ".margin"));
}});

Clazz.newMeth(C$, 'setBorder$S',  function (prefix) {
});

Clazz.newMeth(C$, 'setColors$S',  function (prefix) {
var bg=this.editor.getBackground$();
if ((bg == null ) || (Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) ) {
this.editor.setBackground$java_awt_Color($I$(11).getColor$O(prefix + ".background"));
}if (!this.isAWT) {
var fg=this.editor.getForeground$();
if ((fg == null ) || (Clazz.instanceOf(fg, "javax.swing.plaf.UIResource")) ) {
this.editor.setForeground$java_awt_Color($I$(11).getColor$O(prefix + ".foreground"));
}}var dfg=this.editor.getDisabledTextColor$();
if ((dfg == null ) || (Clazz.instanceOf(dfg, "javax.swing.plaf.UIResource")) ) {
this.editor.setDisabledTextColor$java_awt_Color($I$(11).getColor$O(prefix + ".inactiveForeground"));
}dfg=$I$(11).getColor$O(this.isAWT ? "control" : prefix + ".inactiveBackground");
if (dfg != null ) this.inactiveBackground=dfg;
});

Clazz.newMeth(C$, 'installDefaults2$',  function () {
var caret=this.editor.getCaret$();
if (caret == null  || Clazz.instanceOf(caret, "javax.swing.plaf.UIResource") ) {
this.editor.setCaret$javax_swing_text_Caret(((P$.JSTextUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSTextUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.text.DefaultCaret'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return true;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (v) {
});

Clazz.newMeth(C$, 'isSelectionVisible$',  function () {
return true;
});

Clazz.newMeth(C$, 'setSelectionVisible$Z',  function (v) {
});

Clazz.newMeth(C$, 'setBlinkRate$I',  function (rate) {
});

Clazz.newMeth(C$, 'getBlinkRate$',  function () {
return 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return "caret[" + this.dot + "," + this.mark + "]" ;
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.JSTextUI$1)));
}});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
if (Clazz.instanceOf(this.editor.getCaretColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setCaretColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getSelectionColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setSelectionColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getDisabledTextColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setDisabledTextColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getSelectedTextColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setSelectedTextColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getBorder$(), "javax.swing.plaf.UIResource")) {
this.editor.setBorder$javax_swing_border_Border(null);
}if (Clazz.instanceOf(this.editor.getMargin$(), "javax.swing.plaf.UIResource")) {
this.editor.setMargin$java_awt_Insets(null);
}});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var km=this.getInputMap$();
if (km != null ) {
$I$(13).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.editor, 0, km);
}var map=this.getActionMap$();
if (map != null ) {
$I$(13).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.editor, map);
}});

Clazz.newMeth(C$, 'getInputMap$',  function () {
var map=Clazz.new_($I$(14,1));
var shared=$I$(11,"get$O$java_util_Locale",[this.getPropertyPrefix$() + ".focusInputMap", null]);
if (shared != null ) {
map.setParent$javax_swing_InputMap(shared);
}return map;
});

Clazz.newMeth(C$, 'getActionMap$',  function () {
var mapName=this.classID + ".actionMap";
var map=$I$(11).get$O(mapName);
if (map == null ) {
map=this.createActionMap$();
if (map != null ) {
$I$(11).getLookAndFeelDefaults$().put$O$O(mapName, map);
}}return map;
});

Clazz.newMeth(C$, 'createActionMap$',  function () {
var map=Clazz.new_($I$(15,1));
var actions=this.editor.getActions$();
if (actions == null ) actions=this.getEditorKit$javax_swing_text_JTextComponent(this.editor).getActions$();
var n=(actions == null  ? 0 : actions.length);
for (var i=0; i < n; i++) {
var a=actions[i];
map.put$O$javax_swing_Action(a.getValue$S("Name"), a);
}
map.put$O$javax_swing_Action($I$(16).getCutAction$().getValue$S("Name"), $I$(16).getCutAction$());
map.put$O$javax_swing_Action($I$(16).getCopyAction$().getValue$S("Name"), $I$(16).getCopyAction$());
map.put$O$javax_swing_Action($I$(16).getPasteAction$().getValue$S("Name"), $I$(16).getPasteAction$());
return map;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
this.editor.setKeymap$javax_swing_text_Keymap(null);
$I$(13).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.editor, 2, null);
$I$(13).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.editor, null);
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.editor;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.editor=jc;
this.textListener=Clazz.new_($I$(17,1).c$$swingjs_plaf_JSTextUI$javax_swing_text_JTextComponent,[this, this.editor]);
this.installDefaults$();
this.installDefaults2$();
this.installListeners$javax_swing_text_JTextComponent(this.editor);
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
this.uninstallDefaults$();
jc.removeAll$();
var lm=jc.getLayout$();
if (Clazz.instanceOf(lm, "javax.swing.plaf.UIResource")) {
jc.setLayout$java_awt_LayoutManager(null);
}this.uninstallKeyboardActions$();
this.uninstallListeners$javax_swing_text_JTextComponent(this.editor);
this.editor=null;
this.textListener=null;
});

Clazz.newMeth(C$, 'installListeners$javax_swing_text_JTextComponent',  function (b) {
var listener=this.textListener;
b.addMouseListener$java_awt_event_MouseListener(listener);
b.addKeyListener$java_awt_event_KeyListener(this.textListener);
b.addFocusListener$java_awt_event_FocusListener(listener);
b.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
b.addCaretListener$javax_swing_event_CaretListener(listener);
});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_text_JTextComponent',  function (b) {
var listener=this.textListener;
b.removeKeyListener$java_awt_event_KeyListener(this.textListener);
b.removeMouseListener$java_awt_event_MouseListener(listener);
b.removeFocusListener$java_awt_event_FocusListener(listener);
b.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
b.getDocument$().removeDocumentListener$javax_swing_event_DocumentListener(listener);
});

Clazz.newMeth(C$, 'updateRootView$',  function () {
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (jc) {
var d=this.getPreferredSize$javax_swing_JComponent(jc);
return d;
});

Clazz.newMeth(C$, 'getRootView$javax_swing_text_JTextComponent',  function (tc) {
return this.rootView;
});

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
return null;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
if (!this.useRootView) return C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [c]);
var i=c.getInsets$();
var d=c.getSize$();
if ((d.width > (i.left + i.right)) && (d.height > (i.top + i.bottom)) ) {
this.rootView.setSize$F$F(d.width - i.left - i.right , d.height - i.top - i.bottom );
} else if (d.width == 0 && d.height == 0 ) {
this.rootView.setSize$F$F(2147483647, 2147483647);
}d.width=Long.$ival(Math.min$J$J(Long.$add(Clazz.toLong(this.rootView.getPreferredSpan$I(0)),i.left , i.right ), 2147483647));
d.height=Long.$ival(Math.min$J$J(Long.$add(Clazz.toLong(this.rootView.getPreferredSpan$I(1)),i.top , i.bottom ), 2147483647));
return d;
});

Clazz.newMeth(C$, 'getEditorKit$javax_swing_text_JTextComponent',  function (tc) {
return C$.defaultKit;
});

Clazz.newMeth(C$, 'handleEnter$',  function () {
return false;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (editable) {
this.editable=editable;
if (this.focusNode == null ) return;
this.setEditableCSS$();
if (this.jc.isOpaque$()) {
var bg=this.getBackground$();
this.setBackgroundImpl$java_awt_Color(editable || !(Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) || this.inactiveBackground === this.colorUNKNOWN    ? bg : this.inactiveBackground);
}this.setCursor$();
});

Clazz.newMeth(C$, 'setEditableCSS$',  function () {
$I$(7).setAttr(this.focusNode, "readOnly", this.editable ? null : "\u79d8TRUE");
});

Clazz.newMeth(C$, 'getInactiveTextColor$java_awt_Color',  function (fg) {
return (!this.editor.isEnabled$() ? this.editor.getDisabledTextColor$() : !this.editor.isEditable$() ? this.inactiveForeground : fg);
});

Clazz.newMeth(C$, 'setCurrentText$',  function () {
return (this.editor.getDocument$() == null  ? null : (this.currentText=this.editor.getText$()));
});

Clazz.newMeth(C$, 'checkNewEditorTextValue$',  function () {
var val=this.getJSTextValue$();
if (val.equals$O(this.fixText$S(this.currentText))) return false;
this.editor.setTextFromUI$S(val);
this.setCurrentText$();
return true;
});

Clazz.newMeth(C$, 'setJSText$',  function () {
this.charMap=null;
this.updateDOMNode$();
});

Clazz.newMeth(C$, 'focus$',  function () {
if (!this.editor.isEditable$() || !C$.superclazz.prototype.focus$.apply(this, []) ) return false;
if (this.haveFocus$()) {
} else {
this.updateJSCursor$S("focus");
}return true;
});

Clazz.newMeth(C$, 'haveFocus$',  function () {
return $I$(8).jquery.contains(this.focusNode, document.activeElement ||null);
});

Clazz.newMeth(C$, 'updateJSCursor$S',  function (why) {
if (this.domNode == null  || this.editor.getDocument$() == null   || this.editor.getText$().length$() == 0 ) return;
if (this.isAWT && why !== "focus"   && why !== "default"  ) return;
var start=this.editor.getCaret$().getMark$();
var end=this.editor.getCaret$().getDot$();
this.setJSSelection$I$I$Z(start, end, start == end && why === "default"  );
});

Clazz.newMeth(C$, 'setJSSelection$I$I$Z',  function (mark, dot, andScroll) {
var r1=this.getJSNodePt$swingjs_api_js_DOMNode$I$OA$I(this.focusNode, mark, null, 0);
var r2=(r1 == null  || dot == mark  ? r1 : this.getJSNodePt$swingjs_api_js_DOMNode$I$OA$I(this.focusNode, dot, null, 0));
if (r1 != null  && r2 != null  ) this.jsSelect$OA$OA$Z(r1, r2, andScroll);
});

Clazz.newMeth(C$, 'getJSNodePt$swingjs_api_js_DOMNode$I$OA$I',  function (node, pt, lastRange, level) {
{
return [null, pt];
}
});

Clazz.newMeth(C$, 'jsSelect$OA$OA$Z',  function (r1, r2, andScroll) {
this.setJSMarkAndDot$I$I$Z(r1[1] ||0, r2[1] ||0, andScroll);
});

Clazz.newMeth(C$, 'setJSMarkAndDot$I$I$Z',  function (mark, dot, andScroll) {
try {
this.focusNode.setSelectionRange(Math.min(mark, dot), Math.max(mark, dot), (mark == dot ? "none" : mark < dot ? "forward" : "backward"));
} catch (e) {
}
});

Clazz.newMeth(C$, 'getJSMarkAndDot$java_awt_Point$I',  function (pt, keyCode) {
var node=this.focusNode;
var start=node.selectionStart ||0;
var end=node.selectionEnd ||1;
pt.x=start;
pt.y=end;
return true;
});

Clazz.newMeth(C$, 'checkAllowEvent$O',  function (jQueryEvent) {
var b=true;
var checkEditable=false;
var type=jQueryEvent.type ||"";
switch (type) {
case "drop":
checkEditable=true;
break;
case "focusout":
case "dragover":
break;
case "keydown":
case "keypress":
case "keyup":
var isCTRL=jQueryEvent.ctrlKey ||false;
switch (jQueryEvent.keyCode ||0) {
case 86:
if (!isCTRL) return null;
p$1.allowKeyEvent$O.apply(this, [jQueryEvent]);
if (type === "keydown" ) this.handleCtrlV$I(401);
 else if (type === "keyup" ) this.handleCtrlV$I(402);
return Boolean.valueOf$Z(true);
case 65:
if (!isCTRL) return null;
return null;
case 67:
if (!isCTRL) return null;
p$1.allowKeyEvent$O.apply(this, [jQueryEvent]);
return Boolean.valueOf$Z(true);
case 9:
return this.handleTab$O$S(jQueryEvent, type);
case 36:
case 35:
case 38:
case 40:
case 37:
case 39:
case 33:
case 34:
case 224:
case 225:
case 226:
case 227:
return (jQueryEvent.altKey ||isCTRL ? Boolean.valueOf$Z(false) : null);
default:
checkEditable=true;
break;
}
break;
default:
return null;
}
if (checkEditable) {
if (this.editor.isEditable$() && !(Clazz.instanceOf(this.editor.getDocument$(), "javax.swing.text.html.HTMLDocument")) ) return null;
b=false;
}return Boolean.valueOf$Z(b);
});

Clazz.newMeth(C$, 'allowKeyEvent$O',  function (jQueryEvent) {

jQueryEvent.originalEvent.xallowKeyEvent = true;
}, p$1);

Clazz.newMeth(C$, 'handleCtrlV$I',  function (mode) {
switch (mode) {
case 401:
break;
case 402:
var val=this.getJSTextValue$();
var pt=Clazz.new_($I$(3,1));
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
this.editor.setTextFromUI$S(val);
this.setJSMarkAndDot$I$I$Z(pt.x, pt.x, false);
this.setJavaMarkAndDot$java_awt_Point(pt);
break;
}
return true;
});

Clazz.newMeth(C$, 'handleTab$O$S',  function (jQueryEvent, type) {
return (type === "keydown"  ? null : Boolean.valueOf$Z(false));
});

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA',  function (t, pt, biasReturn) {
if (pt.x == 2147483647) {
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
return pt.y;
}if (this.charMap == null ) p$1.createCharMap.apply(this, []);
for (var n=this.charMap.size$(), i=n; --i >= 0; ) {
var p=this.charMap.get$I(i);
if (p.y < pt.y  && p.x < pt.x  ) return (i == n - 1 ? i - 1 : i);
}
return 0;
});

Clazz.newMeth(C$, 'createCharMap',  function () {
this.charMap=Clazz.new_($I$(18,1));
var s=this.editor.getText$();
var x=0;
var y=0;
var fm=this.editor.getFont$().getFontMetrics$();
var tabWidth=fm.stringWidth$S("    ");
var h=fm.getHeight$();
var line0=0;
var ntab=0;
for (var i=0; i < s.length$(); i++) {
this.charMap.add$O(Clazz.new_($I$(19,1).c$$D$D,[x, y]));
var c=s.charAt$I(i);
switch (c.$c()) {
case 10:
y+=h;
x=0;
ntab=0;
line0=i + 1;
break;
case 9:
x+=tabWidth;
++ntab;
break;
default:
var r=fm.getStringBounds$S$I$I$java_awt_Graphics(s, line0, i + 1, null);
x=r.getWidth$() + ntab * tabWidth;
break;
}
}
this.charMap.add$O(Clazz.new_($I$(19,1).c$$D$D,[x, y]));
this.charMap.add$O(Clazz.new_($I$(19,1).c$$D$D,[0, y + h]));
}, p$1);

Clazz.newMeth(C$, 'setJavaMarkAndDot$java_awt_Point',  function (markDot) {
var mark=markDot.x;
var dot=markDot.y;
var c=this.editor.getCaret$();
if (c.getMark$() == mark && c.getDot$() == dot ) return;
if (c.getMark$() != mark) c.setDot$I(mark);
if (c.getDot$() != dot) c.moveDot$I(dot);
});

Clazz.newMeth(C$, 'getNewCaretPosition$I$I',  function (eventType, keyCode) {
var pt=C$.markDot;
pt.x=0;
this.getJSMarkAndDot$java_awt_Point$I(pt, keyCode);
var mark=pt.x;
var dot=pt.y;
var oldMark=this.editor.getCaret$().getMark$();
var oldDot=this.editor.getCaret$().getDot$();
if (dot != mark && oldMark == dot ) {
dot=mark;
mark=oldMark;
}pt.x=(dot == oldDot && mark == oldMark  ? -2147483648 : mark);
pt.y=dot;
return pt;
});

Clazz.newMeth(C$, 'caretUpdatedByProgram$javax_swing_event_CaretEvent',  function (e) {
});

Clazz.newMeth(C$, 'getVisibleEditorRect$',  function () {
var alloc=this.editor.getBounds$();
if ((alloc.width > 0) && (alloc.height > 0) ) {
alloc.x=alloc.y=0;
var insets=this.editor.getInsets$();
alloc.x+=insets.left;
alloc.y+=insets.top;
alloc.width-=insets.left + insets.right;
alloc.height-=insets.top + insets.bottom;
return alloc;
}return null;
});

Clazz.newMeth(C$, 'modelToView$javax_swing_text_JTextComponent$I',  function (tc, pos) {
return this.modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(tc, pos, $I$(5).Forward);
});

Clazz.newMeth(C$, 'modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias',  function (tc, pos, bias) {
var alloc=this.getVisibleEditorRect$();
return alloc;
});

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_JTextComponent$java_awt_Point',  function (tc, pt) {
return this.viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(tc, pt, C$.discardBias);
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA',  function (t, pos, b, direction, biasRet) {
var dot=this.editor.getCaretPosition$();
switch (direction) {
case 5:
dot=this.editor.getText$().indexOf$I$I("\n", dot + 1);
if (dot >= 0) return dot;
dot=2147483647;
case 3:
var len=this.editor.getDocument$().getLength$() - (this.isEditorPane ? 0 : 1);
dot=(dot >= len ? len : ++dot);
return dot;
case 1:
dot=this.editor.getText$().lastIndexOf$I$I("\n", dot - 1);
if (dot >= 0) return dot;
dot=-1;
case 7:
return (dot <= 0 ? 0 : --dot);
}
return -1;
});

Clazz.newMeth(C$, 'getKeymapName$',  function () {
var nm=this.getClass$().getName$();
var index=nm.lastIndexOf$I(".");
if (index >= 0) {
nm=nm.substring$I$I(index + 1, nm.length$());
}return nm;
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return true;
});

Clazz.newMeth(C$, 'action$S$I',  function (what, data) {
});

Clazz.newMeth(C$, 'setCaretFromJS$',  function () {
var pt=Clazz.new_($I$(3,1));
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
this.setJavaMarkAndDot$java_awt_Point(pt);
});

Clazz.newMeth(C$, 'setOverflow$',  function () {
if (this.textNode == null ) return;
var scroller=this.jc.getParent$();
if (this.isAWT) {
scroller=this.jc;
} else if (!(Clazz.instanceOf(scroller, "javax.swing.JViewport")) || !(Clazz.instanceOf((scroller=scroller.getParent$()), "javax.swing.JScrollPane")) ) {
$I$(7).setStyles(this.domNode, ["overflow", "hidden", "overflow-x", null, "overflow-y", null]);
return;
}var sp=scroller;
$I$(7).setStyle(this.domNode, "overflow", null);
$I$(7,"setStyle",[this.domNode, "overflow-x", C$.overflows[sp.getHorizontalScrollBarPolicy$() % 10]]);
$I$(7,"setStyle",[this.domNode, "overflow-y", C$.overflows[sp.getVerticalScrollBarPolicy$() % 10]]);
});

C$.$static$=function(){C$.$static$=0;
C$.defaultKit=Clazz.new_($I$(2,1));
C$.overflows=Clazz.array(String, -1, ["auto", "hidden", "scroll"]);
C$.markDot=Clazz.new_($I$(3,1));
C$.textCursor=Clazz.new_($I$(4,1).c$$I,[2]);
C$.discardBias=Clazz.array($I$(5), [1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTextUI, "RootView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['view','javax.swing.text.View']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.b$['swingjs.plaf.JSTextUI'].editor.getDocument$();
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
if (this.view != null ) {
return this.view.getStartOffset$();
}return this.getElement$().getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
if (this.view != null ) {
return this.view.getEndOffset$();
}return this.getElement$().getEndOffset$();
});

Clazz.newMeth(C$, 'getElement$',  function () {
if (this.view != null ) {
return this.view.getElement$();
}return this.b$['swingjs.plaf.JSTextUI'].editor.getDocument$().getDefaultRootElement$();
});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
if (this.view != null ) {
this.view.setSize$F$F(width, height);
}});

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.b$['swingjs.plaf.JSTextUI'].editor;
});

Clazz.newMeth(C$, 'setView$javax_swing_text_View',  function (v) {
var oldView=this.view;
this.view=null;
if (oldView != null ) {
oldView.setParent$javax_swing_text_View(null);
}if (v != null ) {
v.setParent$javax_swing_text_View(this);
}this.view=v;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
switch (axis) {
case 0:
return (this.view == null  ? 10 : this.view.getPreferredSpan$I(axis));
default:
case 1:
var area=this.b$['swingjs.plaf.JSTextUI'].editor;
var h=this.b$['swingjs.plaf.JSComponentUI'].getFont$.apply(this.b$['swingjs.plaf.JSComponentUI'], []).getFontMetrics$().getHeight$();
var r=area.getRows$();
return h * (r > 0 ? r : this.b$['swingjs.plaf.JSTextUI'].isAWT ? 10 : 6);
}
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
if (this.view != null ) {
return this.view.getMinimumSpan$I(axis);
}return 10;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
return 2147483647;
});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z',  function (child, width, height) {
this.b$['swingjs.plaf.JSTextUI'].editor.revalidate$();
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
if (this.view != null ) {
return this.view.getAlignment$I(axis);
}return 0;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
if (this.view != null ) {
var alloc=(Clazz.instanceOf(allocation, "java.awt.Rectangle")) ? allocation : allocation.getBounds$();
this.setSize$F$F(alloc.width, alloc.height);
this.view.paint$java_awt_Graphics$java_awt_Shape(g, allocation);
}});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
throw Clazz.new_($I$(1,1).c$$S,["Can\'t set parent on root view"]);
});

Clazz.newMeth(C$, 'getViewCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getView$I',  function (n) {
return this.view;
});

Clazz.newMeth(C$, 'getViewIndex$I$javax_swing_text_Position_Bias',  function (pos, b) {
return 0;
});

Clazz.newMeth(C$, 'getChildAllocation$I$java_awt_Shape',  function (index, a) {
return a;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
return null;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, biasReturn) {
return 0;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTextUI, "TextActionWrapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.action=null;
},1);

C$.$fields$=[['O',['action','javax.swing.text.TextAction']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_TextAction',  function (action) {
;C$.superclazz.c$$S.apply(this,[action.getValue$S("Name")]);C$.$init$.apply(this);
this.action=action;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.action.actionPerformed$java_awt_event_ActionEvent(e);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTextUI'].editor == null  || this.b$['swingjs.plaf.JSTextUI'].editor.isEditable$() ) ? this.action.isEnabled$() : false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTextUI, "FocusAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['swingjs.plaf.JSTextUI'].editor.requestFocus$();
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.b$['swingjs.plaf.JSTextUI'].editor.isEditable$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
