(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultDesktopManager", null, null, ['javax.swing.DesktopManager', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dragMode=0;
},1);

C$.$fields$=[['I',['dragMode']]]

Clazz.newMeth(C$, 'openFrame$javax_swing_JInternalFrame',  function (f) {
});

Clazz.newMeth(C$, 'closeFrame$javax_swing_JInternalFrame',  function (f) {
var d=f.getDesktopPane$();
if (d == null ) {
return;
}var findNext=f.isSelected$();
var c=f.getParent$();
var nextFrame=null;
if (findNext) {
nextFrame=d.getNextFrame$javax_swing_JInternalFrame(f);
try {
f.setSelected$Z(false);
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.beans.PropertyVetoException")){
} else {
throw e2;
}
}
}if (c != null ) {
c.remove$java_awt_Component(f);
}this.removeIconFor$javax_swing_JInternalFrame(f);
if (f.getNormalBounds$() != null ) f.setNormalBounds$java_awt_Rectangle(null);
if (this.wasIcon$javax_swing_JInternalFrame(f)) this.setWasIcon$javax_swing_JInternalFrame$Boolean(f, null);
if (nextFrame != null ) {
try {
nextFrame.setSelected$Z(true);
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.beans.PropertyVetoException")){
} else {
throw e2;
}
}
} else if (findNext && d.getComponentCount$() == 0 ) {
d.requestFocus$();
}});

Clazz.newMeth(C$, 'maximizeFrame$javax_swing_JInternalFrame',  function (f) {
});

Clazz.newMeth(C$, 'minimizeFrame$javax_swing_JInternalFrame',  function (f) {
});

Clazz.newMeth(C$, 'iconifyFrame$javax_swing_JInternalFrame',  function (f) {
});

Clazz.newMeth(C$, 'deiconifyFrame$javax_swing_JInternalFrame',  function (f) {
});

Clazz.newMeth(C$, 'activateFrame$javax_swing_JInternalFrame',  function (f) {
var p=f.getParent$();
var d=f.getDesktopPane$();
var currentlyActiveFrame=(d == null ) ? null : d.getSelectedFrame$();
if (p == null ) {
p=f.getDesktopIcon$().getParent$();
if (p == null ) return;
}if (currentlyActiveFrame == null ) {
if (d != null ) {
d.setSelectedFrame$javax_swing_JInternalFrame(f);
}} else if (currentlyActiveFrame !== f ) {
if (currentlyActiveFrame.isSelected$()) {
try {
currentlyActiveFrame.setSelected$Z(false);
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.beans.PropertyVetoException")){
} else {
throw e2;
}
}
}if (d != null ) {
d.setSelectedFrame$javax_swing_JInternalFrame(f);
}}f.moveToFront$();
});

Clazz.newMeth(C$, 'deactivateFrame$javax_swing_JInternalFrame',  function (f) {
var d=f.getDesktopPane$();
var currentlyActiveFrame=(d == null ) ? null : d.getSelectedFrame$();
if (currentlyActiveFrame === f ) d.setSelectedFrame$javax_swing_JInternalFrame(null);
});

Clazz.newMeth(C$, 'beginDraggingFrame$javax_swing_JComponent',  function (f) {
});

Clazz.newMeth(C$, 'dragFrame$javax_swing_JComponent$I$I',  function (f, newX, newY) {
});

Clazz.newMeth(C$, 'endDraggingFrame$javax_swing_JComponent',  function (f) {
});

Clazz.newMeth(C$, 'beginResizingFrame$javax_swing_JComponent$I',  function (f, direction) {
});

Clazz.newMeth(C$, 'resizeFrame$javax_swing_JComponent$I$I$I$I',  function (f, newX, newY, newWidth, newHeight) {
});

Clazz.newMeth(C$, 'endResizingFrame$javax_swing_JComponent',  function (f) {
});

Clazz.newMeth(C$, 'setBoundsForFrame$javax_swing_JComponent$I$I$I$I',  function (f, newX, newY, newWidth, newHeight) {
});

Clazz.newMeth(C$, 'removeIconFor$javax_swing_JInternalFrame',  function (f) {
});

Clazz.newMeth(C$, 'setPreviousBounds$javax_swing_JInternalFrame$java_awt_Rectangle',  function (f, r) {
});

Clazz.newMeth(C$, 'getPreviousBounds$javax_swing_JInternalFrame',  function (f) {
return f.getNormalBounds$();
});

Clazz.newMeth(C$, 'setWasIcon$javax_swing_JInternalFrame$Boolean',  function (f, value) {
});

Clazz.newMeth(C$, 'wasIcon$javax_swing_JInternalFrame',  function (f) {
return false;
});

Clazz.newMeth(C$, 'getDesktopPane$javax_swing_JComponent',  function (frame) {
if (Clazz.instanceOf(frame, "javax.swing.JInternalFrame")) {
return (frame).getDesktopPane$();
}var pane=null;
var c=frame.getParent$();
while (pane == null ){
if (Clazz.instanceOf(c, "javax.swing.JDesktopPane")) {
pane=c;
} else if (c == null ) {
break;
} else {
c=c.getParent$();
}}
return pane;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
