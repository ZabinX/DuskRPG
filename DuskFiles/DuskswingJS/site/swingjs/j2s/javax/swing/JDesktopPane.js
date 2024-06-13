(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.Vector','javax.swing.JInternalFrame','java.util.TreeSet',['javax.swing.JDesktopPane','.ComponentPosition'],'javax.swing.JLayeredPane','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JDesktopPane", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JLayeredPane');
C$.$classes$=[['ComponentPosition',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectedFrame=null;
this.dragMode=0;
this.dragModeSet=false;
this.componentOrderCheckingEnabled=true;
this.componentOrderChanged=false;
},1);

C$.$fields$=[['Z',['dragModeSet','componentOrderCheckingEnabled','componentOrderChanged'],'I',['dragMode'],'O',['desktopManager','javax.swing.DesktopManager','selectedFrame','javax.swing.JInternalFrame','framesCache','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.initLayeredPane$();
}, 1);

Clazz.newMeth(C$, 'initLayeredPane$',  function () {
this.updateUI$();
this.setLayout$java_awt_LayoutManager(null);
});

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "DesktopPaneUI";
});

Clazz.newMeth(C$, 'getUI$',  function () {
return this.ui;
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_DesktopPaneUI',  function (ui) {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
});

Clazz.newMeth(C$, 'setDragMode$I',  function (dragMode) {
var oldDragMode=this.dragMode;
this.dragMode=dragMode;
this.firePropertyChange$S$I$I("dragMode", oldDragMode, this.dragMode);
this.dragModeSet=true;
});

Clazz.newMeth(C$, 'getDragMode$',  function () {
return this.dragMode;
});

Clazz.newMeth(C$, 'getDesktopManager$',  function () {
return this.desktopManager;
});

Clazz.newMeth(C$, 'setDesktopManager$javax_swing_DesktopManager',  function (d) {
var oldValue=this.desktopManager;
this.desktopManager=d;
this.firePropertyChange$S$O$O("desktopManager", oldValue, this.desktopManager);
});

Clazz.newMeth(C$, 'getAllFrames$',  function () {
var i;
var count;
var results;
var vResults=Clazz.new_($I$(1,1).c$$I,[10]);
var next;
var tmp;
count=this.getComponentCount$();
for (i=0; i < count; i++) {
next=this.getComponent$I(i);
if (Clazz.instanceOf(next, "javax.swing.JInternalFrame")) vResults.addElement$O(next);
 else if (Clazz.instanceOf(next, "javax.swing.JInternalFrame.JDesktopIcon")) {
tmp=(next).getInternalFrame$();
if (tmp != null ) vResults.addElement$O(tmp);
}}
results=Clazz.array($I$(2), [vResults.size$()]);
vResults.copyInto$OA(results);
return results;
});

Clazz.newMeth(C$, 'getSelectedFrame$',  function () {
return this.selectedFrame;
});

Clazz.newMeth(C$, 'setSelectedFrame$javax_swing_JInternalFrame',  function (f) {
this.selectedFrame=f;
});

Clazz.newMeth(C$, 'getAllFramesInLayer$I',  function (layer) {
var i;
var count;
var results;
var vResults=Clazz.new_($I$(1,1).c$$I,[10]);
var next;
var tmp;
count=this.getComponentCount$();
for (i=0; i < count; i++) {
next=this.getComponent$I(i);
if (Clazz.instanceOf(next, "javax.swing.JInternalFrame")) {
if ((next).getLayer$() == layer) vResults.addElement$O(next);
} else if (Clazz.instanceOf(next, "javax.swing.JInternalFrame.JDesktopIcon")) {
tmp=(next).getInternalFrame$();
if (tmp != null  && (tmp).getLayer$() == layer ) vResults.addElement$O(tmp);
}}
results=Clazz.array($I$(2), [vResults.size$()]);
vResults.copyInto$OA(results);
return results;
});

Clazz.newMeth(C$, 'add$java_awt_Component',  function (c) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [c]);
if (Clazz.instanceOf(c, "javax.swing.JInternalFrame")) {
var f=c;
f.setDesktop$javax_swing_JDesktopPane(this);
if (f.isSelected$()) {
try {
f.setSelected$Z(false);
f.setSelected$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
}}return c;
});

Clazz.newMeth(C$, 'getFrames',  function () {
var c;
var set=Clazz.new_($I$(3,1));
for (var i=0; i < this.getComponentCount$(); i++) {
c=this.getComponent$I(i);
if (Clazz.instanceOf(c, "javax.swing.JInternalFrame")) {
set.add$O(Clazz.new_([c, $I$(5).getLayer$java_awt_Component(c), i],$I$(4,1).c$$javax_swing_JInternalFrame$I$I));
} else if (Clazz.instanceOf(c, "javax.swing.JInternalFrame.JDesktopIcon")) {
c=(c).getInternalFrame$();
set.add$O(Clazz.new_([c, $I$(5).getLayer$java_awt_Component(c), i],$I$(4,1).c$$javax_swing_JInternalFrame$I$I));
}}
var frames=Clazz.new_([set.size$()],$I$(6,1).c$$I);
for (var position, $position = set.iterator$(); $position.hasNext$()&&((position=($position.next$())),1);) {
frames.add$O(position.component);
}
return frames;
}, p$1);

Clazz.newMeth(C$, 'getNextFrame$javax_swing_JInternalFrame$Z',  function (f, forward) {
p$1.verifyFramesCache.apply(this, []);
if (f == null ) {
return p$1.getTopInternalFrame.apply(this, []);
}var i=this.framesCache.indexOf$O(f);
if (i == -1 || this.framesCache.size$() == 1 ) {
return null;
}if (forward) {
if (++i == this.framesCache.size$()) {
i=0;
}} else {
if (--i == -1) {
i=this.framesCache.size$() - 1;
}}return this.framesCache.get$I(i);
}, p$1);

Clazz.newMeth(C$, 'getNextFrame$javax_swing_JInternalFrame',  function (f) {
return p$1.getNextFrame$javax_swing_JInternalFrame$Z.apply(this, [f, true]);
});

Clazz.newMeth(C$, 'getTopInternalFrame',  function () {
if (this.framesCache.size$() == 0) {
return null;
}return this.framesCache.get$I(0);
}, p$1);

Clazz.newMeth(C$, 'updateFramesCache',  function () {
this.framesCache=p$1.getFrames.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'verifyFramesCache',  function () {
if (this.componentOrderChanged) {
this.componentOrderChanged=false;
p$1.updateFramesCache.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'selectFrame$Z',  function (forward) {
var selectedFrame=this.getSelectedFrame$();
var frameToSelect=p$1.getNextFrame$javax_swing_JInternalFrame$Z.apply(this, [selectedFrame, forward]);
if (frameToSelect == null ) {
return null;
}this.setComponentOrderCheckingEnabled$Z(false);
if (forward && selectedFrame != null  ) {
selectedFrame.moveToBack$();
}try {
frameToSelect.setSelected$Z(true);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
this.setComponentOrderCheckingEnabled$Z(true);
return frameToSelect;
});

Clazz.newMeth(C$, 'setComponentOrderCheckingEnabled$Z',  function (enable) {
this.componentOrderCheckingEnabled=enable;
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (comp, constraints, index) {
C$.superclazz.prototype.addImpl$java_awt_Component$O$I.apply(this, [comp, constraints, index]);
if (this.componentOrderCheckingEnabled) {
if (Clazz.instanceOf(comp, "javax.swing.JInternalFrame") || Clazz.instanceOf(comp, "javax.swing.JInternalFrame.JDesktopIcon") ) {
this.componentOrderChanged=true;
}}});

Clazz.newMeth(C$, 'remove$I',  function (index) {
if (this.componentOrderCheckingEnabled) {
var comp=this.getComponent$I(index);
if (Clazz.instanceOf(comp, "javax.swing.JInternalFrame") || Clazz.instanceOf(comp, "javax.swing.JInternalFrame.JDesktopIcon") ) {
this.componentOrderChanged=true;
}}C$.superclazz.prototype.remove$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'removeAll$',  function () {
if (this.componentOrderCheckingEnabled) {
var count=this.getComponentCount$();
for (var i=0; i < count; i++) {
var comp=this.getComponent$I(i);
if (Clazz.instanceOf(comp, "javax.swing.JInternalFrame") || Clazz.instanceOf(comp, "javax.swing.JInternalFrame.JDesktopIcon") ) {
this.componentOrderChanged=true;
break;
}}
}C$.superclazz.prototype.removeAll$.apply(this, []);
});

Clazz.newMeth(C$, 'setComponentZOrder$java_awt_Component$I',  function (comp, index) {
C$.superclazz.prototype.setComponentZOrder$java_awt_Component$I.apply(this, [comp, index]);
if (this.componentOrderCheckingEnabled) {
if (Clazz.instanceOf(comp, "javax.swing.JInternalFrame") || Clazz.instanceOf(comp, "javax.swing.JInternalFrame.JDesktopIcon") ) {
this.componentOrderChanged=true;
}}});

Clazz.newMeth(C$, 'setUIProperty$S$O',  function (propertyName, value) {
if (propertyName === "dragMode" ) {
if (!this.dragModeSet) {
this.setDragMode$I((value).intValue$());
this.dragModeSet=false;
}} else {
C$.superclazz.prototype.setUIProperty$S$O.apply(this, [propertyName, value]);
}});

Clazz.newMeth(C$, 'paramString$',  function () {
var desktopManagerString=(this.desktopManager != null  ? this.desktopManager.toString() : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",desktopManager=" + desktopManagerString ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JDesktopPane, "ComponentPosition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['layer','zOrder'],'O',['component','javax.swing.JInternalFrame']]]

Clazz.newMeth(C$, 'c$$javax_swing_JInternalFrame$I$I',  function (component, layer, zOrder) {
;C$.$init$.apply(this);
this.component=component;
this.layer=layer;
this.zOrder=zOrder;
}, 1);

Clazz.newMeth(C$, ['compareTo$javax_swing_JDesktopPane_ComponentPosition','compareTo$O'],  function (o) {
var delta=o.layer - this.layer;
if (delta == 0) {
return this.zOrder - o.zOrder;
}return delta;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
