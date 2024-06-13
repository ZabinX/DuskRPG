(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.JComponent','javax.swing.UIManager','javax.swing.JRootPane','javax.swing.SwingUtilities','javax.swing.RepaintManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JFrame", null, 'java.awt.JSFrame', ['javax.swing.WindowConstants', 'javax.swing.RootPaneContainer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultCloseOperation=1;
this.rootPaneCheckingEnabled=false;
},1);

C$.$fields$=[['Z',['rootPaneCheckingEnabled','秘boundsFrozen'],'I',['defaultCloseOperation'],'O',['transferHandler','javax.swing.TransferHandler','rootPane','javax.swing.JRootPane']]
,['I',['frameCount'],'O',['defaultLookAndFeelDecoratedKey','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration',  function (gc) {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [null, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [title, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_GraphicsConfiguration',  function (title, gc) {
;C$.superclazz.c$$S$java_awt_GraphicsConfiguration.apply(this,[title, gc]);C$.$init$.apply(this);
this.秘paintClass=this.秘updateClass=C$ ||null;
this.enableEvents$J(72);
this.setLocale$java_util_Locale($I$(1).getDefaultLocale$());
this.setRootPane$javax_swing_JRootPane(this.createRootPane$());
this.rootPane.setFrameViewer$swingjs_JSFrameViewer(this.setFrameViewer$swingjs_JSFrameViewer(null));
this.setBackground$java_awt_Color($I$(2).getColor$O("control"));
this.setRootPaneCheckingEnabled$Z(true);
if (C$.isDefaultLookAndFeelDecorated$()) {
var supportsWindowDecorations=$I$(2).getLookAndFeel$().getSupportsWindowDecorations$();
if (supportsWindowDecorations) {
this.setUndecorated$Z(true);
this.getRootPane$().setWindowDecorationStyle$I(1);
}}this.updateUI$();
this.秘frameAddNodify$javax_swing_JRootPane(this.rootPane);
}, 1);

Clazz.newMeth(C$, 'c$$O$O$O$O',  function (object, object2, object3, object4) {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "FrameUI";
});

Clazz.newMeth(C$, 'createRootPane$',  function () {
var rp=Clazz.new_(["_Frame" + (++C$.frameCount), false, this],$I$(3,1).c$$S$Z$java_awt_Container);
rp.setOpaque$Z(true);
return rp;
});

Clazz.newMeth(C$, 'processWindowEvent$java_awt_event_WindowEvent',  function (e) {
C$.superclazz.prototype.processWindowEvent$java_awt_event_WindowEvent.apply(this, [e]);
if (e.getID$() == 201) {
switch (this.defaultCloseOperation) {
case 1:
this.setVisible$Z(false);
break;
case 2:
this.dispose$();
break;
case 0:
default:
break;
case 3:
System.exit$I(0);
break;
}
}});

Clazz.newMeth(C$, 'setDefaultCloseOperation$I',  function (operation) {
if (operation != 0 && operation != 1  && operation != 2  && operation != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["defaultCloseOperation must be one of: DO_NOTHING_ON_CLOSE, HIDE_ON_CLOSE, DISPOSE_ON_CLOSE, or EXIT_ON_CLOSE"]);
}if (this.defaultCloseOperation != operation) {
if (operation == 3) {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkExit$I(0);
}}var oldValue=this.defaultCloseOperation;
this.defaultCloseOperation=operation;
this.firePropertyChange$S$I$I("defaultCloseOperation", oldValue, operation);
}});

Clazz.newMeth(C$, 'getDefaultCloseOperation$',  function () {
return this.defaultCloseOperation;
});

Clazz.newMeth(C$, 'setTransferHandler$javax_swing_TransferHandler',  function (newHandler) {
var oldHandler=this.transferHandler;
this.transferHandler=newHandler;
$I$(4).installSwingDropTargetAsNecessary$java_awt_Component$javax_swing_TransferHandler(this, this.transferHandler);
this.firePropertyChange$S$O$O("transferHandler", oldHandler, newHandler);
});

Clazz.newMeth(C$, 'getTransferHandler$',  function () {
return this.transferHandler;
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
(g).setBackground$java_awt_Color(this.getBackground$());
(g).setColor$java_awt_Color(this.getForeground$());
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'setJMenuBar$javax_swing_JMenuBar',  function (menubar) {
this.getRootPane$().setMenuBar$javax_swing_JMenuBar(menubar);
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

Clazz.newMeth(C$, 'setIconImage$java_awt_Image',  function (image) {
C$.superclazz.prototype.setIconImage$java_awt_Image.apply(this, [image]);
});

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
$I$(1).getGraphicsInvoked$java_awt_Component(this);
return C$.superclazz.prototype.getGraphics$.apply(this, []);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (time, x, y, width, height) {
if ($I$(5).HANDLE_TOP_LEVEL_PAINT) {
$I$(5).currentManager$javax_swing_JComponent(this).addDirtyRegion$java_awt_Window$I$I$I$I(this, x, y, width, height);
} else {
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [time, x, y, width, height]);
}});

Clazz.newMeth(C$, 'setDefaultLookAndFeelDecorated$Z',  function (defaultLookAndFeelDecorated) {
if (defaultLookAndFeelDecorated) {
$I$(4).appContextPut$O$O(C$.defaultLookAndFeelDecoratedKey, Boolean.TRUE);
} else {
$I$(4).appContextPut$O$O(C$.defaultLookAndFeelDecoratedKey, Boolean.FALSE);
}}, 1);

Clazz.newMeth(C$, 'isDefaultLookAndFeelDecorated$',  function () {
var defaultLookAndFeelDecorated=$I$(4).appContextGet$O(C$.defaultLookAndFeelDecoratedKey);
if (defaultLookAndFeelDecorated == null ) {
defaultLookAndFeelDecorated=Boolean.FALSE;
}return defaultLookAndFeelDecorated.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'paramString$',  function () {
var defaultCloseOperationString;
if (this.defaultCloseOperation == 1) {
defaultCloseOperationString="HIDE_ON_CLOSE";
} else if (this.defaultCloseOperation == 2) {
defaultCloseOperationString="DISPOSE_ON_CLOSE";
} else if (this.defaultCloseOperation == 0) {
defaultCloseOperationString="DO_NOTHING_ON_CLOSE";
} else if (this.defaultCloseOperation == 3) {
defaultCloseOperationString="EXIT_ON_CLOSE";
} else defaultCloseOperationString="";
var rootPaneString=(this.rootPane != null  ? this.rootPane.toString() : "");
var rootPaneCheckingEnabledString=(this.rootPaneCheckingEnabled ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",defaultCloseOperation=" + defaultCloseOperationString + ",rootPane=" + rootPaneString + ",rootPaneCheckingEnabled=" + rootPaneCheckingEnabledString ;
});

Clazz.newMeth(C$, '秘freezeBounds$I$I',  function (w, h) {
this.setSize$I$I(w, h);
this.秘boundsFrozen=true;
this.resizable=false;
});

Clazz.newMeth(C$, 'reshape$I$I$I$I',  function (x, y, width, height) {
if (!this.秘boundsFrozen) C$.superclazz.prototype.reshape$I$I$I$I.apply(this, [x, y, width, height]);
});

C$.$static$=function(){C$.$static$=0;
C$.defaultLookAndFeelDecoratedKey= Clazz.new_();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
