(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.JDialog','.AsynchronousObject'],'javax.swing.SwingUtilities',['java.awt.Dialog','.ModalityType'],'javax.swing.JComponent','javax.swing.UIManager','javax.swing.JRootPane','javax.swing.RepaintManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.JSDialog', ['javax.swing.WindowConstants', 'javax.swing.RootPaneContainer']);
C$.$classes$=[['AsynchronousObject',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultCloseOperation=1;
this.rootPaneCheckingEnabled=false;
},1);

C$.$fields$=[['Z',['rootPaneCheckingEnabled'],'I',['defaultCloseOperation'],'O',['rootPane','javax.swing.JRootPane','transferHandler','javax.swing.TransferHandler']]
,['I',['ASYNCHRONOUS_INTEGER','dialogCount'],'O',['defaultLookAndFeelDecoratedKey','java.lang.Object','+ASYNCHRONOUS_OBJECT']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_JSFrame$Z.apply(this, [null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame',  function (owner) {
C$.c$$java_awt_JSFrame$Z.apply(this, [owner, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame',  function (owner) {
C$.c$$java_awt_Frame$Z.apply(this, [owner, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$Z',  function (owner, modal) {
C$.c$$java_awt_JSFrame$S$Z.apply(this, [owner, null, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$Z',  function (owner, modal) {
C$.c$$java_awt_JSFrame$S$Z.apply(this, [owner, null, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$Z',  function (owner, modal) {
C$.c$$java_awt_Frame$S$Z.apply(this, [owner, null, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S',  function (owner, title) {
C$.c$$java_awt_JSFrame$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S',  function (owner, title) {
C$.c$$java_awt_Frame$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z',  function (owner, title, modal) {
;C$.superclazz.c$$java_awt_JSFrame$S$Z.apply(this,[owner == null  ? $I$(2).getSharedOwnerFrame$() : owner, title, modal]);C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(2).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z',  function (owner, title, modal) {
;C$.superclazz.c$$java_awt_JSFrame$S$Z.apply(this,[owner == null  ? $I$(2).getSharedOwnerFrame$() : owner, title, modal]);C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(2).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z$java_awt_GraphicsConfiguration',  function (owner, title, modal, gc) {
;C$.superclazz.c$$java_awt_JSFrame$S$Z$java_awt_GraphicsConfiguration.apply(this,[owner == null  ? $I$(2).getSharedOwnerFrame$() : owner, title, modal, gc]);C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(2).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$java_awt_GraphicsConfiguration',  function (owner, title, modal, gc) {
;C$.superclazz.c$$java_awt_JSFrame$S$Z$java_awt_GraphicsConfiguration.apply(this,[owner == null  ? $I$(2).getSharedOwnerFrame$() : owner, title, modal, gc]);C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(2).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog',  function (owner) {
C$.c$$java_awt_JSDialog$Z.apply(this, [owner, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog',  function (owner) {
C$.c$$java_awt_JSDialog.apply(this, [owner]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$Z',  function (owner, modal) {
C$.c$$java_awt_JSDialog$S$Z.apply(this, [owner, null, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$Z',  function (owner, modal) {
C$.c$$java_awt_Dialog$S$Z.apply(this, [owner, null, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S',  function (owner, title) {
C$.c$$java_awt_JSDialog$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S',  function (owner, title) {
C$.c$$java_awt_JSDialog$S.apply(this, [owner, title]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S$Z',  function (owner, title, modal) {
;C$.superclazz.c$$java_awt_JSDialog$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z',  function (owner, title, modal) {
C$.c$$java_awt_JSDialog$S$Z.apply(this, [owner, title, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S$Z$java_awt_GraphicsConfiguration',  function (owner, title, modal, gc) {
;C$.superclazz.c$$java_awt_JSDialog$S$Z$java_awt_GraphicsConfiguration.apply(this,[owner, title, modal, gc]);C$.$init$.apply(this);
this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z$java_awt_GraphicsConfiguration',  function (owner, title, modal, gc) {
C$.c$$java_awt_JSDialog$S$Z$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window',  function (owner) {
C$.c$$java_awt_Window$java_awt_Dialog_ModalityType.apply(this, [owner, $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$java_awt_Dialog_ModalityType',  function (owner, modalityType) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, null, modalityType]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S',  function (owner, title) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType',  function (owner, title, modalityType) {
;C$.superclazz.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this,[owner, title, modalityType]);C$.$init$.apply(this);
this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration',  function (owner, title, modalityType, gc) {
;C$.superclazz.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this,[owner, title, modalityType, gc]);C$.$init$.apply(this);
this.dialogInit$();
}, 1);

Clazz.newMeth(C$, 'dialogInit$',  function () {
this.enableEvents$J(72);
this.setLocale$java_util_Locale($I$(4).getDefaultLocale$());
this.setRootPane$javax_swing_JRootPane(this.createRootPane$());
this.rootPane.setFrameViewer$swingjs_JSFrameViewer(this.setFrameViewer$swingjs_JSFrameViewer(null));
this.setRootPaneCheckingEnabled$Z(true);
if (C$.isDefaultLookAndFeelDecorated$()) {
var supportsWindowDecorations=$I$(5).getLookAndFeel$().getSupportsWindowDecorations$();
if (supportsWindowDecorations) {
this.setUndecorated$Z(true);
this.getRootPane$().setWindowDecorationStyle$I(2);
}}this.updateUI$();
this.addNotify$();
this.rootPane.addNotify$();
});

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "DialogUI";
});

Clazz.newMeth(C$, 'createRootPane$',  function () {
var rp=Clazz.new_(["_Dialog" + (++C$.dialogCount), false, this],$I$(6,1).c$$S$Z$java_awt_Container);
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
}
}});

Clazz.newMeth(C$, 'setDefaultCloseOperation$I',  function (operation) {
if (operation != 0 && operation != 1  && operation != 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["defaultCloseOperation must be one of: DO_NOTHING_ON_CLOSE, HIDE_ON_CLOSE, or DISPOSE_ON_CLOSE"]);
}var oldValue=this.defaultCloseOperation;
this.defaultCloseOperation=operation;
this.firePropertyChange$S$I$I("defaultCloseOperation", oldValue, operation);
});

Clazz.newMeth(C$, 'getDefaultCloseOperation$',  function () {
return this.defaultCloseOperation;
});

Clazz.newMeth(C$, 'setTransferHandler$javax_swing_TransferHandler',  function (newHandler) {
var oldHandler=this.transferHandler;
this.transferHandler=newHandler;
$I$(2).installSwingDropTargetAsNecessary$java_awt_Component$javax_swing_TransferHandler(this, this.transferHandler);
this.firePropertyChange$S$O$O("transferHandler", oldHandler, newHandler);
});

Clazz.newMeth(C$, 'getTransferHandler$',  function () {
return this.transferHandler;
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'setJMenuBar$javax_swing_JMenuBar',  function (menu) {
this.getRootPane$().setMenuBar$javax_swing_JMenuBar(menu);
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
$I$(4).getGraphicsInvoked$java_awt_Component(this);
return C$.superclazz.prototype.getGraphics$.apply(this, []);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (time, x, y, width, height) {
if ($I$(7).HANDLE_TOP_LEVEL_PAINT) {
$I$(7).currentManager$javax_swing_JComponent(this).addDirtyRegion$java_awt_Window$I$I$I$I(this, x, y, width, height);
} else {
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [time, x, y, width, height]);
}});

Clazz.newMeth(C$, 'setDefaultLookAndFeelDecorated$Z',  function (defaultLookAndFeelDecorated) {
if (defaultLookAndFeelDecorated) {
$I$(2).appContextPut$O$O(C$.defaultLookAndFeelDecoratedKey, Boolean.TRUE);
} else {
$I$(2).appContextPut$O$O(C$.defaultLookAndFeelDecoratedKey, Boolean.FALSE);
}}, 1);

Clazz.newMeth(C$, 'isDefaultLookAndFeelDecorated$',  function () {
var defaultLookAndFeelDecorated=$I$(2).appContextGet$O(C$.defaultLookAndFeelDecoratedKey);
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
} else defaultCloseOperationString="";
var rootPaneString=(this.rootPane != null  ? this.rootPane.toString() : "");
var rootPaneCheckingEnabledString=(this.rootPaneCheckingEnabled ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",defaultCloseOperation=" + defaultCloseOperationString + ",rootPane=" + rootPaneString + ",rootPaneCheckingEnabled=" + rootPaneCheckingEnabledString ;
});

C$.$static$=function(){C$.$static$=0;
C$.defaultLookAndFeelDecoratedKey= Clazz.new_();
{

C$.ASYNCHRONOUS_INTEGER = NaN;
};
C$.ASYNCHRONOUS_OBJECT=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JDialog, "AsynchronousObject", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
