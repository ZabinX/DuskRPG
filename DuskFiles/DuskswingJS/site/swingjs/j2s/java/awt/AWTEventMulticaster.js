(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AWTEventMulticaster", null, null, ['java.awt.event.ComponentListener', 'java.awt.event.ContainerListener', 'java.awt.event.FocusListener', 'java.awt.event.KeyListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.WindowListener', 'java.awt.event.WindowFocusListener', 'java.awt.event.WindowStateListener', 'java.awt.event.ActionListener', 'java.awt.event.ItemListener', 'java.awt.event.AdjustmentListener', 'java.awt.event.TextListener', 'java.awt.event.InputMethodListener', 'java.awt.event.HierarchyListener', 'java.awt.event.HierarchyBoundsListener', 'java.awt.event.MouseWheelListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['a','java.util.EventListener','+b']]]

Clazz.newMeth(C$, 'c$$java_util_EventListener$java_util_EventListener',  function (a, b) {
;C$.$init$.apply(this);
this.a=a;
this.b=b;
}, 1);

Clazz.newMeth(C$, 'remove$java_util_EventListener',  function (oldl) {
if (oldl === this.a ) return this.b;
if (oldl === this.b ) return this.a;
var a2=C$.removeInternal$java_util_EventListener$java_util_EventListener(this.a, oldl);
var b2=C$.removeInternal$java_util_EventListener$java_util_EventListener(this.b, oldl);
if (a2 === this.a  && b2 === this.b  ) {
return this;
}return C$.addInternal$java_util_EventListener$java_util_EventListener(a2, b2);
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
(this.a).componentResized$java_awt_event_ComponentEvent(e);
(this.b).componentResized$java_awt_event_ComponentEvent(e);
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
(this.a).componentMoved$java_awt_event_ComponentEvent(e);
(this.b).componentMoved$java_awt_event_ComponentEvent(e);
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
(this.a).componentShown$java_awt_event_ComponentEvent(e);
(this.b).componentShown$java_awt_event_ComponentEvent(e);
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
(this.a).componentHidden$java_awt_event_ComponentEvent(e);
(this.b).componentHidden$java_awt_event_ComponentEvent(e);
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent',  function (e) {
(this.a).componentAdded$java_awt_event_ContainerEvent(e);
(this.b).componentAdded$java_awt_event_ContainerEvent(e);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent',  function (e) {
(this.a).componentRemoved$java_awt_event_ContainerEvent(e);
(this.b).componentRemoved$java_awt_event_ContainerEvent(e);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
(this.a).focusGained$java_awt_event_FocusEvent(e);
(this.b).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
(this.a).focusLost$java_awt_event_FocusEvent(e);
(this.b).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
(this.a).keyTyped$java_awt_event_KeyEvent(e);
(this.b).keyTyped$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
(this.a).keyPressed$java_awt_event_KeyEvent(e);
(this.b).keyPressed$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
(this.a).keyReleased$java_awt_event_KeyEvent(e);
(this.b).keyReleased$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
(this.a).mouseClicked$java_awt_event_MouseEvent(e);
(this.b).mouseClicked$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
(this.a).mousePressed$java_awt_event_MouseEvent(e);
(this.b).mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
(this.a).mouseReleased$java_awt_event_MouseEvent(e);
(this.b).mouseReleased$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
(this.a).mouseEntered$java_awt_event_MouseEvent(e);
(this.b).mouseEntered$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
(this.a).mouseExited$java_awt_event_MouseEvent(e);
(this.b).mouseExited$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
(this.a).mouseDragged$java_awt_event_MouseEvent(e);
(this.b).mouseDragged$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
(this.a).mouseMoved$java_awt_event_MouseEvent(e);
(this.b).mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
(this.a).windowOpened$java_awt_event_WindowEvent(e);
(this.b).windowOpened$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
(this.a).windowClosing$java_awt_event_WindowEvent(e);
(this.b).windowClosing$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (e) {
(this.a).windowClosed$java_awt_event_WindowEvent(e);
(this.b).windowClosed$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent',  function (e) {
(this.a).windowIconified$java_awt_event_WindowEvent(e);
(this.b).windowIconified$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent',  function (e) {
(this.a).windowDeiconified$java_awt_event_WindowEvent(e);
(this.b).windowDeiconified$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
(this.a).windowActivated$java_awt_event_WindowEvent(e);
(this.b).windowActivated$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent',  function (e) {
(this.a).windowDeactivated$java_awt_event_WindowEvent(e);
(this.b).windowDeactivated$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowStateChanged$java_awt_event_WindowEvent',  function (e) {
(this.a).windowStateChanged$java_awt_event_WindowEvent(e);
(this.b).windowStateChanged$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (e) {
(this.a).windowGainedFocus$java_awt_event_WindowEvent(e);
(this.b).windowGainedFocus$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'windowLostFocus$java_awt_event_WindowEvent',  function (e) {
(this.a).windowLostFocus$java_awt_event_WindowEvent(e);
(this.b).windowLostFocus$java_awt_event_WindowEvent(e);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
(this.a).actionPerformed$java_awt_event_ActionEvent(e);
(this.b).actionPerformed$java_awt_event_ActionEvent(e);
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
(this.a).itemStateChanged$java_awt_event_ItemEvent(e);
(this.b).itemStateChanged$java_awt_event_ItemEvent(e);
});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent',  function (e) {
(this.a).adjustmentValueChanged$java_awt_event_AdjustmentEvent(e);
(this.b).adjustmentValueChanged$java_awt_event_AdjustmentEvent(e);
});

Clazz.newMeth(C$, 'textValueChanged$java_awt_event_TextEvent',  function (e) {
(this.a).textValueChanged$java_awt_event_TextEvent(e);
(this.b).textValueChanged$java_awt_event_TextEvent(e);
});

Clazz.newMeth(C$, 'inputMethodTextChanged$java_awt_event_InputMethodEvent',  function (e) {
(this.a).inputMethodTextChanged$java_awt_event_InputMethodEvent(e);
(this.b).inputMethodTextChanged$java_awt_event_InputMethodEvent(e);
});

Clazz.newMeth(C$, 'caretPositionChanged$java_awt_event_InputMethodEvent',  function (e) {
(this.a).caretPositionChanged$java_awt_event_InputMethodEvent(e);
(this.b).caretPositionChanged$java_awt_event_InputMethodEvent(e);
});

Clazz.newMeth(C$, 'hierarchyChanged$java_awt_event_HierarchyEvent',  function (e) {
(this.a).hierarchyChanged$java_awt_event_HierarchyEvent(e);
(this.b).hierarchyChanged$java_awt_event_HierarchyEvent(e);
});

Clazz.newMeth(C$, 'ancestorMoved$java_awt_event_HierarchyEvent',  function (e) {
(this.a).ancestorMoved$java_awt_event_HierarchyEvent(e);
(this.b).ancestorMoved$java_awt_event_HierarchyEvent(e);
});

Clazz.newMeth(C$, 'ancestorResized$java_awt_event_HierarchyEvent',  function (e) {
(this.a).ancestorResized$java_awt_event_HierarchyEvent(e);
(this.b).ancestorResized$java_awt_event_HierarchyEvent(e);
});

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent',  function (e) {
(this.a).mouseWheelMoved$java_awt_event_MouseWheelEvent(e);
(this.b).mouseWheelMoved$java_awt_event_MouseWheelEvent(e);
});

Clazz.newMeth(C$, 'add$java_awt_event_ComponentListener$java_awt_event_ComponentListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_ContainerListener$java_awt_event_ContainerListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_FocusListener$java_awt_event_FocusListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_KeyListener$java_awt_event_KeyListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_MouseListener$java_awt_event_MouseListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_MouseMotionListener$java_awt_event_MouseMotionListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_WindowListener$java_awt_event_WindowListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_WindowStateListener$java_awt_event_WindowStateListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_WindowFocusListener$java_awt_event_WindowFocusListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_ActionListener$java_awt_event_ActionListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_ItemListener$java_awt_event_ItemListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_AdjustmentListener$java_awt_event_AdjustmentListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_TextListener$java_awt_event_TextListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_InputMethodListener$java_awt_event_InputMethodListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_HierarchyListener$java_awt_event_HierarchyListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_HierarchyBoundsListener$java_awt_event_HierarchyBoundsListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_MouseWheelListener$java_awt_event_MouseWheelListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_ComponentListener$java_awt_event_ComponentListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_ContainerListener$java_awt_event_ContainerListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_FocusListener$java_awt_event_FocusListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_KeyListener$java_awt_event_KeyListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_MouseListener$java_awt_event_MouseListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_MouseMotionListener$java_awt_event_MouseMotionListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_WindowListener$java_awt_event_WindowListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_WindowStateListener$java_awt_event_WindowStateListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_WindowFocusListener$java_awt_event_WindowFocusListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_ActionListener$java_awt_event_ActionListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_ItemListener$java_awt_event_ItemListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_AdjustmentListener$java_awt_event_AdjustmentListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_TextListener$java_awt_event_TextListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_InputMethodListener$java_awt_event_InputMethodListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_HierarchyListener$java_awt_event_HierarchyListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_HierarchyBoundsListener$java_awt_event_HierarchyBoundsListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_MouseWheelListener$java_awt_event_MouseWheelListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'addInternal$java_util_EventListener$java_util_EventListener',  function (a, b) {
if (a == null ) return b;
if (b == null ) return a;
return Clazz.new_(C$.c$$java_util_EventListener$java_util_EventListener,[a, b]);
}, 1);

Clazz.newMeth(C$, 'removeInternal$java_util_EventListener$java_util_EventListener',  function (l, oldl) {
if (l === oldl  || l == null  ) {
return null;
} else if (Clazz.instanceOf(l, "java.awt.AWTEventMulticaster")) {
return (l).remove$java_util_EventListener(oldl);
} else {
return l;
}}, 1);

Clazz.newMeth(C$, 'getListenerCount$java_util_EventListener$Class',  function (l, listenerType) {
if (Clazz.instanceOf(l, "java.awt.AWTEventMulticaster")) {
var mc=l;
return C$.getListenerCount$java_util_EventListener$Class(mc.a, listenerType) + C$.getListenerCount$java_util_EventListener$Class(mc.b, listenerType);
} else {
return listenerType.isInstance$O(l) ? 1 : 0;
}}, 1);

Clazz.newMeth(C$, 'populateListenerArray$java_util_EventListenerA$java_util_EventListener$I',  function (a, l, index) {
if (Clazz.instanceOf(l, "java.awt.AWTEventMulticaster")) {
var mc=l;
var lhs=C$.populateListenerArray$java_util_EventListenerA$java_util_EventListener$I(a, mc.a, index);
return C$.populateListenerArray$java_util_EventListenerA$java_util_EventListener$I(a, mc.b, lhs);
} else if (a.getClass$().getComponentType$().isInstance$O(l)) {
a[index]=l;
return index + 1;
} else {
return index;
}}, 1);

Clazz.newMeth(C$, 'getListeners$java_util_EventListener$Class',  function (l, listenerType) {
if (listenerType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Listener type should not be null"]);
}var n=C$.getListenerCount$java_util_EventListener$Class(l, listenerType);
var result=Clazz.array(listenerType, n);
C$.populateListenerArray$java_util_EventListenerA$java_util_EventListener$I(result, l, 0);
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
