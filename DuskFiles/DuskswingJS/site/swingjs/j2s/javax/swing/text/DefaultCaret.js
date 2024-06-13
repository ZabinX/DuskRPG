(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.SwingUtilities','javax.swing.text.DefaultCaret',['javax.swing.text.Position','.Bias'],'javax.swing.text.Segment','javax.swing.event.EventListenerList',['javax.swing.text.DefaultCaret','.Handler'],'javax.swing.event.ChangeListener',['javax.swing.text.DefaultCaret','.SafeScroller'],'java.awt.Point','javax.swing.event.ChangeEvent',['javax.swing.text.DefaultCaret','.DefaultFilterBypass']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultCaret", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Rectangle', ['javax.swing.text.Caret', 'java.awt.event.FocusListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);
C$.$classes$=[['SafeScroller',0],['Handler',0],['DefaultFilterBypass',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(5,1));
this.changeEvent=null;
this.updatePolicy=2;
this.handler=Clazz.new_($I$(6,1),[this, null]);
this.flagXPoints=Clazz.array(Integer.TYPE, [3]);
this.flagYPoints=Clazz.array(Integer.TYPE, [3]);
this.selectedWordEvent=null;
},1);

C$.$fields$=[['Z',['working','visible','active','selectionVisible','dotLTR','markLTR','ownsSelection','forceCaretPositionChange','shouldHandleRelease'],'I',['updatePolicy','dot','mark'],'O',['listenerList','javax.swing.event.EventListenerList','changeEvent','javax.swing.event.ChangeEvent','component','javax.swing.text.JTextComponent','selectionTag','java.lang.Object','magicCaretPosition','java.awt.Point','dotBias','javax.swing.text.Position.Bias','+markBias','handler','javax.swing.text.DefaultCaret.Handler','flagXPoints','int[]','+flagYPoints','filterBypass','javax.swing.text.NavigationFilter.FilterBypass','selectedWordEvent','java.awt.event.MouseEvent']]
,['O',['biasRet','javax.swing.text.Position.Bias[]','s','javax.swing.text.Segment','selectWord','javax.swing.Action','+selectLine']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'install$javax_swing_text_JTextComponent',  function (c) {
this.component=c;
var doc=c.getDocument$();
this.dot=this.mark=0;
this.dotLTR=this.markLTR=true;
this.dotBias=this.markBias=$I$(3).Forward;
if (doc != null ) {
doc.addDocumentListener$javax_swing_event_DocumentListener(this.handler);
}c.addPropertyChangeListener$java_beans_PropertyChangeListener(this.handler);
c.addFocusListener$java_awt_event_FocusListener(this);
c.addMouseListener$java_awt_event_MouseListener(this);
c.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
if (this.component.hasFocus$()) {
this.focusGained$java_awt_event_FocusEvent(null);
}});

Clazz.newMeth(C$, 'deinstall$javax_swing_text_JTextComponent',  function (c) {
c.removeMouseListener$java_awt_event_MouseListener(this);
c.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
c.removeFocusListener$java_awt_event_FocusListener(this);
c.removePropertyChangeListener$java_beans_PropertyChangeListener(this.handler);
var doc=c.getDocument$();
if (doc != null ) {
doc.removeDocumentListener$javax_swing_event_DocumentListener(this.handler);
}{
this.component=null;
}});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'setUpdatePolicy$I',  function (policy) {
this.updatePolicy=policy;
});

Clazz.newMeth(C$, 'getUpdatePolicy$',  function () {
return this.updatePolicy;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.component;
});

Clazz.newMeth(C$, 'repaint$',  function () {
});

Clazz.newMeth(C$, 'adjustVisibility$java_awt_Rectangle',  function (nloc) {
if (this.component == null ) {
return;
}if ($I$(1).isEventDispatchThread$()) {
this.component.scrollRectToVisible$java_awt_Rectangle(nloc);
} else {
$I$(1,"invokeLater$Runnable",[Clazz.new_($I$(8,1).c$$java_awt_Rectangle,[this, null, nloc])]);
}});

Clazz.newMeth(C$, 'getSelectionPainter$',  function () {
return null;
});

Clazz.newMeth(C$, 'positionCaret$java_awt_event_MouseEvent',  function (e) {
var pt=Clazz.new_([e.getX$(), e.getY$()],$I$(9,1).c$$I$I);
pt.x=2147483647;
(this.component.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(this.component, pt, C$.biasRet);
if (pt.x >= 0) {
if (C$.biasRet[0] == null ) C$.biasRet[0]=$I$(3).Forward;
this.setDot$I$javax_swing_text_Position_Bias(pt.x, C$.biasRet[0]);
if (pt.y != pt.x) this.moveDot$I$javax_swing_text_Position_Bias(pt.y, C$.biasRet[0]);
}});

Clazz.newMeth(C$, 'getPosition$java_awt_event_MouseEvent$javax_swing_text_Position_BiasA',  function (e, biasret) {
var pt=Clazz.new_([e.getX$(), e.getY$()],$I$(9,1).c$$I$I);
pt.x=2147483647;
var pos=(this.component.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(this.component, pt, C$.biasRet);
System.out.println$S("def caret getPos " + e.getID$() + " " + pt );
return pos;
}, p$1);

Clazz.newMeth(C$, 'moveCaret$java_awt_event_MouseEvent',  function (e) {
this.positionCaret$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
if (this.component.isEnabled$()) {
if (this.component.isEditable$()) {
this.setVisible$Z(true);
}this.setSelectionVisible$Z(true);
}});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.setVisible$Z(false);
this.setSelectionVisible$Z(this.ownsSelection || e.isTemporary$() );
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(1).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
if (e.isConsumed$()) {
this.shouldHandleRelease=true;
} else {
this.shouldHandleRelease=false;
this.adjustCaretAndFocus$java_awt_event_MouseEvent(e);
}}this.working=false;
});

Clazz.newMeth(C$, 'adjustCaretAndFocus$java_awt_event_MouseEvent',  function (e) {
this.working=true;
p$1.adjustCaret$java_awt_event_MouseEvent.apply(this, [e]);
p$1.adjustFocus$Z.apply(this, [false]);
this.working=false;
});

Clazz.newMeth(C$, 'adjustCaret$java_awt_event_MouseEvent',  function (e) {
if ((e.getModifiers$() & 1) != 0 && this.getDot$() != -1 ) {
this.moveCaret$java_awt_event_MouseEvent(e);
} else {
this.positionCaret$java_awt_event_MouseEvent(e);
}}, p$1);

Clazz.newMeth(C$, 'adjustFocus$Z',  function (inWindow) {
if ((this.component != null ) && this.component.isEnabled$() && this.component.isRequestFocusEnabled$()  ) {
if (inWindow) {
this.component.requestFocusInWindow$();
} else {
this.component.requestFocus$();
}}}, p$1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
var isLeft=$I$(1).isLeftMouseButton$java_awt_event_MouseEvent(e);
if (!e.isConsumed$() && this.shouldHandleRelease && isLeft  ) {
this.adjustCaretAndFocus$java_awt_event_MouseEvent(e);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if ((!e.isConsumed$()) && $I$(1).isLeftMouseButton$java_awt_event_MouseEvent(e) ) {
this.moveCaret$java_awt_event_MouseEvent(e);
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.isVisible$()) {
}});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(10,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'setSelectionVisible$Z',  function (vis) {
});

Clazz.newMeth(C$, 'isSelectionVisible$',  function () {
return this.selectionVisible;
});

Clazz.newMeth(C$, 'isActive$',  function () {
return this.active;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (e) {
if (this.component != null ) {
this.active=e;
var mapper=this.component.getUI$();
if (this.visible != e ) {
this.visible=e;
}}});

Clazz.newMeth(C$, 'setBlinkRate$I',  function (rate) {
});

Clazz.newMeth(C$, 'getBlinkRate$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getDot$',  function () {
return this.dot;
});

Clazz.newMeth(C$, 'getMark$',  function () {
return this.mark;
});

Clazz.newMeth(C$, 'setDot$I',  function (dot) {
this.setDot$I$javax_swing_text_Position_Bias(dot, $I$(3).Forward);
});

Clazz.newMeth(C$, 'moveDot$I',  function (dot) {
this.moveDot$I$javax_swing_text_Position_Bias(dot, $I$(3).Forward);
});

Clazz.newMeth(C$, 'moveDot$I$javax_swing_text_Position_Bias',  function (dot, dotBias) {
if (dotBias == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null bias"]);
}if (!this.component.isEnabled$()) {
this.setDot$I$javax_swing_text_Position_Bias(dot, dotBias);
return;
}if (dot != this.dot) {
var filter=this.component.getNavigationFilter$();
if (filter == null ) {
this.handleMoveDot$I$javax_swing_text_Position_Bias(dot, dotBias);
} else {
filter.moveDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias(p$1.getFilterBypass.apply(this, []), dot, dotBias);
}}});

Clazz.newMeth(C$, 'handleMoveDot$I$javax_swing_text_Position_Bias',  function (dot, dotBias) {
this.changeCaretPosition$I$javax_swing_text_Position_Bias(dot, dotBias);
});

Clazz.newMeth(C$, 'setDot$I$javax_swing_text_Position_Bias',  function (dot, dotBias) {
if (dotBias == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null bias"]);
}var filter=this.component.getNavigationFilter$();
if (filter != null ) {
filter.setDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias(p$1.getFilterBypass.apply(this, []), dot, dotBias);
} else {
this.handleSetDot$I$javax_swing_text_Position_Bias(dot, dotBias);
}});

Clazz.newMeth(C$, 'handleSetDot$I$javax_swing_text_Position_Bias',  function (dot, dotBias) {
var doc=this.component.getDocument$();
if (doc != null ) {
dot=Math.min(dot, doc.getLength$());
}dot=Math.max(dot, 0);
if (dot == 0) dotBias=$I$(3).Forward;
this.mark=dot;
if (this.dot != dot || this.dotBias !== dotBias   || this.selectionTag != null   || this.forceCaretPositionChange ) {
this.changeCaretPosition$I$javax_swing_text_Position_Bias(dot, dotBias);
}this.markBias=this.dotBias;
this.markLTR=this.dotLTR;
});

Clazz.newMeth(C$, 'getDotBias$',  function () {
return this.dotBias;
});

Clazz.newMeth(C$, 'getMarkBias$',  function () {
return this.markBias;
});

Clazz.newMeth(C$, 'isDotLeftToRight$',  function () {
return this.dotLTR;
});

Clazz.newMeth(C$, 'isMarkLeftToRight$',  function () {
return this.markLTR;
});

Clazz.newMeth(C$, 'isPositionLTR$I$javax_swing_text_Position_Bias',  function (position, bias) {
var doc=this.component.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
if (bias === $I$(3).Backward  && --position < 0 ) position=0;
return (doc).isLeftToRight$I$I(position, position);
}return true;
});

Clazz.newMeth(C$, 'guessBiasForOffset$I$javax_swing_text_Position_Bias$Z',  function (offset, lastBias, lastLTR) {
if (lastLTR != this.isPositionLTR$I$javax_swing_text_Position_Bias(offset, lastBias) ) {
lastBias=$I$(3).Backward;
} else if (lastBias !== $I$(3).Backward  && lastLTR != this.isPositionLTR$I$javax_swing_text_Position_Bias(offset, $I$(3).Backward)  ) {
lastBias=$I$(3).Backward;
}if (lastBias === $I$(3).Backward  && offset > 0 ) {
try {
C$.s.count=0;
C$.s.offset=0;
C$.s.array=null;
this.component.getDocument$().getText$I$I$javax_swing_text_Segment(offset - 1, 1, C$.s);
if (C$.s.count > 0 && C$.s.array[C$.s.offset] == "\n" ) {
lastBias=$I$(3).Forward;
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}return lastBias;
});

Clazz.newMeth(C$, 'changeCaretPosition$I$javax_swing_text_Position_Bias',  function (dot, dotBias) {
this.dot=dot;
this.dotBias=dotBias;
this.dotLTR=this.isPositionLTR$I$javax_swing_text_Position_Bias(dot, dotBias);
this.fireStateChanged$();
if (!this.working) p$1.updateSystemSelection.apply(this, []);
this.setMagicCaretPosition$java_awt_Point(null);
});

Clazz.newMeth(C$, 'repaintNewCaret$',  function () {
});

Clazz.newMeth(C$, 'updateSystemSelection',  function () {
}, p$1);

Clazz.newMeth(C$, 'ensureValidPosition$',  function () {
var length=this.component.getDocument$().getLength$();
if (this.dot > length || this.mark > length ) {
this.handleSetDot$I$javax_swing_text_Position_Bias(length, $I$(3).Forward);
}});

Clazz.newMeth(C$, 'setMagicCaretPosition$java_awt_Point',  function (p) {
this.magicCaretPosition=p;
});

Clazz.newMeth(C$, 'getMagicCaretPosition$',  function () {
return this.magicCaretPosition;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return (this === obj );
});

Clazz.newMeth(C$, 'toString',  function () {
var s="Dot=(" + this.dot + ", " + this.dotBias + ")" ;
s+=" Mark=(" + this.mark + ", " + this.markBias + ")" ;
return s;
});

Clazz.newMeth(C$, 'getFilterBypass',  function () {
if (this.filterBypass == null ) {
this.filterBypass=Clazz.new_($I$(11,1),[this, null]);
}return this.filterBypass;
}, p$1);

Clazz.newMeth(C$, '_contains$I$I$I$I',  function (X, Y, W, H) {
var w=this.width;
var h=this.height;
if ((w | h | W | H ) < 0) {
return false;
}var x=this.x;
var y=this.y;
if (X < x || Y < y ) {
return false;
}if (W > 0) {
w+=x;
W+=X;
if (W <= X) {
if (w >= x || W > w ) return false;
} else {
if (w >= x && W > w ) return false;
}} else if ((x + w) < X) {
return false;
}if (H > 0) {
h+=y;
H+=Y;
if (H <= Y) {
if (h >= y || H > h ) return false;
} else {
if (h >= y && H > h ) return false;
}} else if ((y + h) < Y) {
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getCaretWidth$I',  function (height) {
return 1;
});

C$.$static$=function(){C$.$static$=0;
C$.biasRet=Clazz.array($I$(3), [1]);
C$.s=Clazz.new_($I$(4,1));
C$.selectWord=null;
C$.selectLine=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultCaret, "SafeScroller", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['r','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$$java_awt_Rectangle',  function (r) {
;C$.$init$.apply(this);
this.r=r;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['javax.swing.text.DefaultCaret'].component != null ) {
this.b$['javax.swing.text.DefaultCaret'].component.scrollRectToVisible$java_awt_Rectangle(this.r);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultCaret, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.beans.PropertyChangeListener', 'javax.swing.event.DocumentListener', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['javax.swing.text.DefaultCaret'].width == 0 || this.b$['javax.swing.text.DefaultCaret'].height == 0 ) {
if (this.b$['javax.swing.text.DefaultCaret'].component != null ) {
}}this.b$['javax.swing.text.DefaultCaret'].visible=!this.b$['javax.swing.text.DefaultCaret'].visible;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
if (this.b$['javax.swing.text.DefaultCaret'].getUpdatePolicy$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == 1 || (this.b$['javax.swing.text.DefaultCaret'].getUpdatePolicy$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == 0 && !$I$(1).isEventDispatchThread$() ) ) {
if ((e.getOffset$() <= this.b$['javax.swing.text.DefaultCaret'].dot || e.getOffset$() <= this.b$['javax.swing.text.DefaultCaret'].mark ) && this.b$['javax.swing.text.DefaultCaret'].selectionTag != null  ) {
try {
this.b$['javax.swing.text.DefaultCaret'].component.getHighlighter$().changeHighlight$O$I$I(this.b$['javax.swing.text.DefaultCaret'].selectionTag, Math.min(this.b$['javax.swing.text.DefaultCaret'].dot, this.b$['javax.swing.text.DefaultCaret'].mark), Math.max(this.b$['javax.swing.text.DefaultCaret'].dot, this.b$['javax.swing.text.DefaultCaret'].mark));
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.text.BadLocationException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
}return;
}var adjust=0;
var offset=e.getOffset$();
var length=e.getLength$();
var newDot=this.b$['javax.swing.text.DefaultCaret'].dot;
var changed=($s$[0] = 0, $s$[0]);
if (Clazz.instanceOf(e, "javax.swing.text.AbstractDocument.UndoRedoDocumentEvent")) {
this.b$['javax.swing.text.DefaultCaret'].setDot$I.apply(this.b$['javax.swing.text.DefaultCaret'], [offset + length]);
return;
}if (newDot >= offset) {
newDot+=length;
changed=($s$[0] = changed|(1), $s$[0]);
}var newMark=this.b$['javax.swing.text.DefaultCaret'].mark;
if (newMark >= offset) {
newMark+=length;
changed=($s$[0] = changed|(2), $s$[0]);
}if (changed != 0) {
var dotBias=this.b$['javax.swing.text.DefaultCaret'].dotBias;
if (this.b$['javax.swing.text.DefaultCaret'].dot == offset) {
var doc=this.b$['javax.swing.text.DefaultCaret'].component.getDocument$();
var isNewline;
try {
$I$(2).s.count=$I$(2).s.offset=0;
$I$(2).s.array=null;
doc.getText$I$I$javax_swing_text_Segment(newDot - 1, 1, $I$(2).s);
isNewline=($I$(2).s.count > 0 && $I$(2).s.array[$I$(2).s.offset] == "\n" );
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
isNewline=false;
} else {
throw ble;
}
}
if (isNewline) {
dotBias=$I$(3).Forward;
} else {
dotBias=$I$(3).Backward;
}}if (newMark == newDot) {
this.b$['javax.swing.text.DefaultCaret'].setDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [newDot, dotBias]);
this.b$['javax.swing.text.DefaultCaret'].ensureValidPosition$.apply(this.b$['javax.swing.text.DefaultCaret'], []);
} else {
this.b$['javax.swing.text.DefaultCaret'].setDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [newMark, this.b$['javax.swing.text.DefaultCaret'].markBias]);
if (this.b$['javax.swing.text.DefaultCaret'].getDot$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == newMark) {
this.b$['javax.swing.text.DefaultCaret'].moveDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [newDot, dotBias]);
}this.b$['javax.swing.text.DefaultCaret'].ensureValidPosition$.apply(this.b$['javax.swing.text.DefaultCaret'], []);
}}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
if (this.b$['javax.swing.text.DefaultCaret'].getUpdatePolicy$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == 1 || (this.b$['javax.swing.text.DefaultCaret'].getUpdatePolicy$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == 0 && !$I$(1).isEventDispatchThread$() ) ) {
var length=this.b$['javax.swing.text.DefaultCaret'].component.getDocument$().getLength$();
this.b$['javax.swing.text.DefaultCaret'].dot=Math.min(this.b$['javax.swing.text.DefaultCaret'].dot, length);
this.b$['javax.swing.text.DefaultCaret'].mark=Math.min(this.b$['javax.swing.text.DefaultCaret'].mark, length);
if ((e.getOffset$() < this.b$['javax.swing.text.DefaultCaret'].dot || e.getOffset$() < this.b$['javax.swing.text.DefaultCaret'].mark ) && this.b$['javax.swing.text.DefaultCaret'].selectionTag != null  ) {
try {
this.b$['javax.swing.text.DefaultCaret'].component.getHighlighter$().changeHighlight$O$I$I(this.b$['javax.swing.text.DefaultCaret'].selectionTag, Math.min(this.b$['javax.swing.text.DefaultCaret'].dot, this.b$['javax.swing.text.DefaultCaret'].mark), Math.max(this.b$['javax.swing.text.DefaultCaret'].dot, this.b$['javax.swing.text.DefaultCaret'].mark));
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.text.BadLocationException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
}return;
}var offs0=e.getOffset$();
var offs1=offs0 + e.getLength$();
var adjust=0;
var newDot=this.b$['javax.swing.text.DefaultCaret'].dot;
var adjustDotBias=false;
var newMark=this.b$['javax.swing.text.DefaultCaret'].mark;
var adjustMarkBias=false;
if (Clazz.instanceOf(e, "javax.swing.text.AbstractDocument.UndoRedoDocumentEvent")) {
this.b$['javax.swing.text.DefaultCaret'].setDot$I.apply(this.b$['javax.swing.text.DefaultCaret'], [offs0]);
return;
}if (newDot >= offs1) {
newDot-=(offs1 - offs0);
if (newDot == offs1) {
adjustDotBias=true;
}} else if (newDot >= offs0) {
newDot=offs0;
adjustDotBias=true;
}if (newMark >= offs1) {
newMark-=(offs1 - offs0);
if (newMark == offs1) {
adjustMarkBias=true;
}} else if (newMark >= offs0) {
newMark=offs0;
adjustMarkBias=true;
}if (newMark == newDot) {
this.b$['javax.swing.text.DefaultCaret'].forceCaretPositionChange=true;
try {
this.b$['javax.swing.text.DefaultCaret'].setDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [newDot, this.b$['javax.swing.text.DefaultCaret'].guessBiasForOffset$I$javax_swing_text_Position_Bias$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [newDot, this.b$['javax.swing.text.DefaultCaret'].dotBias, this.b$['javax.swing.text.DefaultCaret'].dotLTR])]);
} finally {
this.b$['javax.swing.text.DefaultCaret'].forceCaretPositionChange=false;
}
this.b$['javax.swing.text.DefaultCaret'].ensureValidPosition$.apply(this.b$['javax.swing.text.DefaultCaret'], []);
} else {
var dotBias=this.b$['javax.swing.text.DefaultCaret'].dotBias;
var markBias=this.b$['javax.swing.text.DefaultCaret'].markBias;
if (adjustDotBias) {
dotBias=this.b$['javax.swing.text.DefaultCaret'].guessBiasForOffset$I$javax_swing_text_Position_Bias$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [newDot, dotBias, this.b$['javax.swing.text.DefaultCaret'].dotLTR]);
}if (adjustMarkBias) {
markBias=this.b$['javax.swing.text.DefaultCaret'].guessBiasForOffset$I$javax_swing_text_Position_Bias$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [this.b$['javax.swing.text.DefaultCaret'].mark, markBias, this.b$['javax.swing.text.DefaultCaret'].markLTR]);
}this.b$['javax.swing.text.DefaultCaret'].setDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [newMark, markBias]);
if (this.b$['javax.swing.text.DefaultCaret'].getDot$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == newMark) {
this.b$['javax.swing.text.DefaultCaret'].moveDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [newDot, dotBias]);
}this.b$['javax.swing.text.DefaultCaret'].ensureValidPosition$.apply(this.b$['javax.swing.text.DefaultCaret'], []);
}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
if (this.b$['javax.swing.text.DefaultCaret'].getUpdatePolicy$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == 1 || (this.b$['javax.swing.text.DefaultCaret'].getUpdatePolicy$.apply(this.b$['javax.swing.text.DefaultCaret'], []) == 0 && !$I$(1).isEventDispatchThread$() ) ) {
return;
}if (Clazz.instanceOf(e, "javax.swing.text.AbstractDocument.UndoRedoDocumentEvent")) {
this.b$['javax.swing.text.DefaultCaret'].setDot$I.apply(this.b$['javax.swing.text.DefaultCaret'], [e.getOffset$() + e.getLength$()]);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var oldValue=evt.getOldValue$();
var newValue=evt.getNewValue$();
if ((Clazz.instanceOf(oldValue, "javax.swing.text.Document")) || (Clazz.instanceOf(newValue, "javax.swing.text.Document")) ) {
this.b$['javax.swing.text.DefaultCaret'].setDot$I.apply(this.b$['javax.swing.text.DefaultCaret'], [0]);
if (oldValue != null ) {
(oldValue).removeDocumentListener$javax_swing_event_DocumentListener(this);
}if (newValue != null ) {
(newValue).addDocumentListener$javax_swing_event_DocumentListener(this);
}} else if ("enabled".equals$O(evt.getPropertyName$())) {
var enabled=evt.getNewValue$();
if (this.b$['javax.swing.text.DefaultCaret'].component.isFocusOwner$()) {
if (enabled === Boolean.TRUE ) {
if (this.b$['javax.swing.text.DefaultCaret'].component.isEditable$()) {
this.b$['javax.swing.text.DefaultCaret'].setVisible$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [true]);
}this.b$['javax.swing.text.DefaultCaret'].setSelectionVisible$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [true]);
} else {
this.b$['javax.swing.text.DefaultCaret'].setVisible$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [false]);
this.b$['javax.swing.text.DefaultCaret'].setSelectionVisible$Z.apply(this.b$['javax.swing.text.DefaultCaret'], [false]);
}}}});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultCaret, "DefaultFilterBypass", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.NavigationFilter','.FilterBypass']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getCaret$',  function () {
return this.b$['javax.swing.text.DefaultCaret'];
});

Clazz.newMeth(C$, 'setDot$I$javax_swing_text_Position_Bias',  function (dot, bias) {
this.b$['javax.swing.text.DefaultCaret'].handleSetDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [dot, bias]);
});

Clazz.newMeth(C$, 'moveDot$I$javax_swing_text_Position_Bias',  function (dot, bias) {
this.b$['javax.swing.text.DefaultCaret'].handleMoveDot$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultCaret'], [dot, bias]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
