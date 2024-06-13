(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.awt.Color','javax.swing.JComponent','java.awt.BorderLayout','javax.swing.JRootPane','javax.swing.SwingUtilities','javax.swing.RepaintManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JApplet", null, 'java.applet.JSApplet', 'javax.swing.RootPaneContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rootPaneCheckingEnabled=false;
},1);

C$.$fields$=[['Z',['rootPaneCheckingEnabled'],'O',['rootPane','javax.swing.JRootPane','transferHandler','javax.swing.TransferHandler']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.秘paintClass=this.秘updateClass=C$ ||null;
this.setFrameViewer$swingjs_JSFrameViewer(this.秘appletViewer);
p$1.setJApplet.apply(this, []);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "AppletUI";
});

Clazz.newMeth(C$, 'setPanelUIClassID$',  function () {
});

Clazz.newMeth(C$, 'setJApplet',  function () {
this.setRootPane$javax_swing_JRootPane(this.createRootPane$());
this.rootPane.setFrameViewer$swingjs_JSFrameViewer(this.秘appletViewer);
this.setForeground$java_awt_Color($I$(1).black);
this.setBackground$java_awt_Color($I$(1).white);
this.setLocale$java_util_Locale($I$(2).getDefaultLocale$());
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.setRootPaneCheckingEnabled$Z(true);
this.setFocusTraversalPolicyProvider$Z(true);
this.enableEvents$J(8);
}, p$1);

Clazz.newMeth(C$, 'createRootPane$',  function () {
var rp=Clazz.new_($I$(4,1).c$$S$Z$java_awt_Container,["", true, this]);
rp.setOpaque$Z(true);
return rp;
});

Clazz.newMeth(C$, 'setTransferHandler$javax_swing_TransferHandler',  function (newHandler) {
var oldHandler=this.transferHandler;
this.transferHandler=newHandler;
$I$(5).installSwingDropTargetAsNecessary$java_awt_Component$javax_swing_TransferHandler(this, this.transferHandler);
this.firePropertyChange$S$O$O("transferHandler", oldHandler, newHandler);
});

Clazz.newMeth(C$, 'getTransferHandler$',  function () {
return this.transferHandler;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
(g).setBackground$java_awt_Color(this.getBackground$());
(g).setColor$java_awt_Color(this.getForeground$());
this.rootPane.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'setJMenuBar$javax_swing_JMenuBar',  function (menuBar) {
this.getRootPane$().setMenuBar$javax_swing_JMenuBar(menuBar);
});

Clazz.newMeth(C$, 'getJMenuBar$',  function () {
return this.getRootPane$().getMenuBar$();
});

Clazz.newMeth(C$, 'isRootPaneCheckingEnabled$',  function () {
return this.rootPaneCheckingEnabled;
});

Clazz.newMeth(C$, 'setRootPaneCheckingEnabled$Z',  function (enabled) {
this.rootPaneCheckingEnabled=enabled;
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (comp, constraints, index) {
if (this.isRootPaneCheckingEnabled$()) {
this.getContentPane$().add$java_awt_Component$O$I(comp, constraints, index);
return;
}this.addImplCont$java_awt_Component$O$I(comp, constraints, index);
});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (comp) {
if (comp === this.rootPane ) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
} else {
this.getContentPane$().remove$java_awt_Component(comp);
}});

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager',  function (manager) {
if (this.isRootPaneCheckingEnabled$()) {
this.getContentPane$().setLayout$java_awt_LayoutManager(manager);
} else {
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [manager]);
}});

Clazz.newMeth(C$, 'getRootPane$',  function () {
return this.rootPane;
});

Clazz.newMeth(C$, 'setRootPane$javax_swing_JRootPane',  function (root) {
if (this.rootPane != null ) {
this.remove$java_awt_Component(this.rootPane);
}this.rootPane=root;
if (this.rootPane != null ) {
var checkingEnabled=this.isRootPaneCheckingEnabled$();
try {
this.setRootPaneCheckingEnabled$Z(false);
this.add$java_awt_Component$O(this.rootPane, "Center");
} finally {
this.setRootPaneCheckingEnabled$Z(checkingEnabled);
}
}});

Clazz.newMeth(C$, 'getContentPane$',  function () {
return this.getRootPane$().getContentPane$();
});

Clazz.newMeth(C$, 'setContentPane$java_awt_Container',  function (contentPane) {
this.getRootPane$().setContentPane$java_awt_Container(contentPane);
});

Clazz.newMeth(C$, 'getLayeredPane$',  function () {
return this.getRootPane$().getLayeredPane$();
});

Clazz.newMeth(C$, 'setLayeredPane$javax_swing_JLayeredPane',  function (layeredPane) {
this.getRootPane$().setLayeredPane$javax_swing_JLayeredPane(layeredPane);
});

Clazz.newMeth(C$, 'getGlassPane$',  function () {
return this.getRootPane$().getGlassPane$();
});

Clazz.newMeth(C$, 'setGlassPane$java_awt_Component',  function (glassPane) {
this.getRootPane$().setGlassPane$java_awt_Component(glassPane);
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
$I$(2).getGraphicsInvoked$java_awt_Component(this);
return C$.superclazz.prototype.getGraphics$.apply(this, []);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (time, x, y, width, height) {
if ((!this.秘isAWT$() || !this.canPaint$() ) && $I$(6).HANDLE_TOP_LEVEL_PAINT ) {
$I$(6).currentManager$java_awt_Component(this).addDirtyRegion$java_applet_JSApplet$I$I$I$I(this, x, y, width, height);
} else {
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [time, x, y, width, height]);
}});

Clazz.newMeth(C$, 'repaintNow$',  function () {
this.repaint$J$I$I$I$I(100, 0, 0, this.getWidth$(), this.getHeight$());
});

Clazz.newMeth(C$, 'paramString$',  function () {
var rootPaneString=(this.rootPane != null  ? this.rootPane.toString() : "");
var rootPaneCheckingEnabledString=(this.rootPaneCheckingEnabled ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",rootPane=" + rootPaneString + ",rootPaneCheckingEnabled=" + rootPaneCheckingEnabledString ;
});

Clazz.newMeth(C$, 'getLocationOnScreen$',  function () {
return (this.isShowing$() ? this.getRootPane$().getLocationOnScreen$() : null);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
