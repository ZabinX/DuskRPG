(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},p$3={},p$4={},I$=[[0,'java.awt.Point',['javax.swing.TransferHandler','.DropLocation'],'java.awt.datatransfer.DataFlavor','javax.swing.TransferHandler','javax.swing.event.EventListenerList','java.awt.dnd.DropTargetListener','java.awt.Rectangle',['javax.swing.TransferHandler','.TransferSupport'],'java.awt.Insets','java.awt.Toolkit','javax.swing.Timer','java.awt.dnd.DragSource','javax.swing.UIManager',['javax.swing.TransferHandler','.TransferAction'],['javax.swing.TransferHandler','.SwingDragGestureRecognizer'],['javax.swing.TransferHandler','.DragHandler'],['javax.swing.TransferHandler','.PropertyTransferable'],'sun.awt.AppContext',['javax.swing.TransferHandler','.DropHandler']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransferHandler", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['HasGetTransferHandler',8],['DropLocation',9],['TransferSupport',25],['PropertyTransferable',8],['SwingDropTarget',8],['DropHandler',10],['DragHandler',10],['SwingDragGestureRecognizer',10],['TransferAction',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['propertyName']]
,['O',['recognizer','javax.swing.TransferHandler.SwingDragGestureRecognizer','cutAction','javax.swing.Action','+copyAction','+pasteAction']]]

Clazz.newMeth(C$, 'getCutAction$',  function () {
return C$.cutAction;
}, 1);

Clazz.newMeth(C$, 'getCopyAction$',  function () {
return C$.copyAction;
}, 1);

Clazz.newMeth(C$, 'getPasteAction$',  function () {
return C$.pasteAction;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (property) {
;C$.$init$.apply(this);
this.propertyName=property;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'exportAsDrag$javax_swing_JComponent$java_awt_event_InputEvent$I',  function (comp, e, action) {
var srcActions=this.getSourceActions$javax_swing_JComponent(comp);
if (!(Clazz.instanceOf(e, "java.awt.event.MouseEvent")) || !(action == 1 || action == 2  || action == 1073741824 ) || (srcActions & action) == 0  ) {
action=0;
}if (action != 0) {
if (C$.recognizer == null ) {
C$.recognizer=Clazz.new_([Clazz.new_($I$(16,1))],$I$(15,1).c$$java_awt_dnd_DragGestureListener);
}C$.recognizer.gestured$javax_swing_JComponent$java_awt_event_MouseEvent$I$I(comp, e, srcActions, action);
} else {
this.exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(comp, null, 0);
}});

Clazz.newMeth(C$, 'exportToClipboard$javax_swing_JComponent$java_awt_datatransfer_Clipboard$I',  function (comp, clip, action) {
if ((action == 1 || action == 2 ) && (this.getSourceActions$javax_swing_JComponent(comp) & action) != 0 ) {
var t=this.createTransferable$javax_swing_JComponent(comp);
if (t != null ) {
try {
clip.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(t, null);
this.exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(comp, t, action);
return;
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
this.exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(comp, t, 0);
throw ise;
} else {
throw ise;
}
}
}}this.exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(comp, null, 0);
});

Clazz.newMeth(C$, 'importData$javax_swing_TransferHandler_TransferSupport',  function (support) {
return Clazz.instanceOf(support.getComponent$(), "javax.swing.JComponent") ? this.importData$javax_swing_JComponent$java_awt_datatransfer_Transferable(support.getComponent$(), support.getTransferable$()) : false;
});

Clazz.newMeth(C$, 'importData$javax_swing_JComponent$java_awt_datatransfer_Transferable',  function (comp, t) {
var prop=p$4.getPropertyDescriptor$javax_swing_JComponent.apply(this, [comp]);
if (prop != null ) {
var writer=prop.getWriteMethod$();
if (writer == null ) {
return false;
}var params=writer.getParameterTypes$();
if (params.length != 1) {
return false;
}var flavor=p$4.getPropertyDataFlavor$Class$java_awt_datatransfer_DataFlavorA.apply(this, [params[0], t.getTransferDataFlavors$()]);
if (flavor != null ) {
try {
var value=t.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
var args=Clazz.array(java.lang.Object, -1, [value]);
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Invocation failed");
} else {
throw ex;
}
}
}}return false;
});

Clazz.newMeth(C$, 'canImport$javax_swing_TransferHandler_TransferSupport',  function (support) {
return Clazz.instanceOf(support.getComponent$(), "javax.swing.JComponent") ? this.canImport$javax_swing_JComponent$java_awt_datatransfer_DataFlavorA(support.getComponent$(), support.getDataFlavors$()) : false;
});

Clazz.newMeth(C$, 'canImport$javax_swing_JComponent$java_awt_datatransfer_DataFlavorA',  function (comp, transferFlavors) {
var prop=p$4.getPropertyDescriptor$javax_swing_JComponent.apply(this, [comp]);
if (prop != null ) {
var writer=prop.getWriteMethod$();
if (writer == null ) {
return false;
}var params=writer.getParameterTypes$();
if (params.length != 1) {
return false;
}var flavor=p$4.getPropertyDataFlavor$Class$java_awt_datatransfer_DataFlavorA.apply(this, [params[0], transferFlavors]);
if (flavor != null ) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'getSourceActions$javax_swing_JComponent',  function (c) {
var prop=p$4.getPropertyDescriptor$javax_swing_JComponent.apply(this, [c]);
if (prop != null ) {
return 1;
}return 0;
});

Clazz.newMeth(C$, 'getVisualRepresentation$java_awt_datatransfer_Transferable',  function (t) {
return null;
});

Clazz.newMeth(C$, 'createTransferable$javax_swing_JComponent',  function (c) {
var property=p$4.getPropertyDescriptor$javax_swing_JComponent.apply(this, [c]);
if (property != null ) {
return Clazz.new_($I$(17,1).c$$java_beans_PropertyDescriptor$javax_swing_JComponent,[property, c]);
}return null;
});

Clazz.newMeth(C$, 'exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I',  function (source, data, action) {
});

Clazz.newMeth(C$, 'getPropertyDescriptor$javax_swing_JComponent',  function (comp) {
if (this.propertyName == null ) {
return null;
}var k=comp.getClass$();
return null;
}, p$4);

Clazz.newMeth(C$, 'getPropertyDataFlavor$Class$java_awt_datatransfer_DataFlavorA',  function (k, flavors) {
for (var i=0; i < flavors.length; i++) {
var flavor=flavors[i];
if ("application".equals$O(flavor.getPrimaryType$()) && "x-java-jvm-local-objectref".equals$O(flavor.getSubType$()) && k.isAssignableFrom$Class(flavor.getRepresentationClass$())  ) {
return flavor;
}}
return null;
}, p$4);

Clazz.newMeth(C$, 'getDropTargetListener$',  function () {
{
var handler=$I$(18).getAppContext$().get$O(Clazz.getClass($I$(19)));
if (handler == null ) {
handler=Clazz.new_($I$(19,1));
$I$(18).getAppContext$().put$O$O(Clazz.getClass($I$(19)), handler);
}return handler;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.recognizer=null;
C$.cutAction=Clazz.new_($I$(14,1).c$$S,["cut"]);
C$.copyAction=Clazz.new_($I$(14,1).c$$S,["copy"]);
C$.pasteAction=Clazz.new_($I$(14,1).c$$S,["paste"]);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.TransferHandler, "HasGetTransferHandler", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "DropLocation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dropPoint','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_Point',  function (dropPoint) {
;C$.$init$.apply(this);
if (dropPoint == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Point cannot be null"]);
}this.dropPoint=Clazz.new_($I$(1,1).c$$java_awt_Point,[dropPoint]);
}, 1);

Clazz.newMeth(C$, 'getDropPoint$',  function () {
return Clazz.new_($I$(1,1).c$$java_awt_Point,[this.dropPoint]);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[dropPoint=" + this.dropPoint + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "TransferSupport", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dropAction=-1;
},1);

C$.$fields$=[['Z',['isDrop','showDropLocationIsSet','showDropLocation'],'I',['dropAction'],'O',['component','java.awt.Component','source','java.lang.Object','dropLocation','javax.swing.TransferHandler.DropLocation']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_dnd_DropTargetEvent',  function (component, event) {
;C$.$init$.apply(this);
this.isDrop=true;
p$1.setDNDVariables$java_awt_Component$java_awt_dnd_DropTargetEvent.apply(this, [component, event]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_datatransfer_Transferable',  function (component, transferable) {
;C$.$init$.apply(this);
if (component == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["component is null"]);
}if (transferable == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["transferable is null"]);
}this.isDrop=false;
this.component=component;
this.source=transferable;
}, 1);

Clazz.newMeth(C$, 'setDNDVariables$java_awt_Component$java_awt_dnd_DropTargetEvent',  function (component, event) {
Clazz.assert(C$, this, function(){return this.isDrop});
this.component=component;
this.source=event;
this.dropLocation=null;
this.dropAction=-1;
this.showDropLocationIsSet=false;
if (this.source == null ) {
return;
}Clazz.assert(C$, this, function(){return Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent") || Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDropEvent") });
var p=Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent") ? (this.source).getLocation$() : (this.source).getLocation$();
this.dropLocation=(component).dropLocationForPoint$java_awt_Point(p);
}, p$1);

Clazz.newMeth(C$, 'isDrop$',  function () {
return this.isDrop;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.component;
});

Clazz.newMeth(C$, 'assureIsDrop',  function () {
if (!this.isDrop) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Not a drop"]);
}}, p$1);

Clazz.newMeth(C$, 'getDropLocation$',  function () {
p$1.assureIsDrop.apply(this, []);
if (this.dropLocation == null ) {
var p=Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent") ? (this.source).getLocation$() : (this.source).getLocation$();
this.dropLocation=Clazz.new_($I$(2,1).c$$java_awt_Point,[p]);
}return this.dropLocation;
});

Clazz.newMeth(C$, 'setShowDropLocation$Z',  function (showDropLocation) {
p$1.assureIsDrop.apply(this, []);
this.showDropLocation=showDropLocation;
this.showDropLocationIsSet=true;
});

Clazz.newMeth(C$, 'setDropAction$I',  function (dropAction) {
p$1.assureIsDrop.apply(this, []);
var action=dropAction & this.getSourceDropActions$();
if (!(action == 1 || action == 2  || action == 1073741824 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unsupported drop action: " + dropAction]);
}this.dropAction=dropAction;
});

Clazz.newMeth(C$, 'getDropAction$',  function () {
return this.dropAction == -1 ? this.getUserDropAction$() : this.dropAction;
});

Clazz.newMeth(C$, 'getUserDropAction$',  function () {
p$1.assureIsDrop.apply(this, []);
return (Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent")) ? (this.source).getDropAction$() : (this.source).getDropAction$();
});

Clazz.newMeth(C$, 'getSourceDropActions$',  function () {
p$1.assureIsDrop.apply(this, []);
return (Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent")) ? (this.source).getSourceActions$() : (this.source).getSourceActions$();
});

Clazz.newMeth(C$, 'getDataFlavors$',  function () {
if (this.isDrop) {
if (Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent")) {
return (this.source).getCurrentDataFlavors$();
} else {
return (this.source).getCurrentDataFlavors$();
}}return (this.source).getTransferDataFlavors$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (df) {
if (this.isDrop) {
if (Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent")) {
return (this.source).isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df);
} else {
return (this.source).isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df);
}}return (this.source).isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df);
});

Clazz.newMeth(C$, 'getTransferable$',  function () {
if (this.isDrop) {
if (Clazz.instanceOf(this.source, "java.awt.dnd.DropTargetDragEvent")) {
return (this.source).getTransferable$();
} else {
return (this.source).getTransferable$();
}}return this.source;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "PropertyTransferable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['component','javax.swing.JComponent','property','java.beans.PropertyDescriptor']]]

Clazz.newMeth(C$, 'c$$java_beans_PropertyDescriptor$javax_swing_JComponent',  function (p, c) {
;C$.$init$.apply(this);
this.property=p;
this.component=c;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
var flavors=Clazz.array($I$(3), [1]);
var propertyType=this.property.getPropertyType$();
var mimeType="application/x-java-jvm-local-objectref" + ";class=" + propertyType.getName$() ;
try {
flavors[0]=Clazz.new_($I$(3,1).c$$S,[mimeType]);
} catch (cnfe) {
if (Clazz.exceptionOf(cnfe,"ClassNotFoundException")){
flavors=Clazz.array($I$(3), [0]);
} else {
throw cnfe;
}
}
return flavors;
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
var propertyType=this.property.getPropertyType$();
if ("application".equals$O(flavor.getPrimaryType$()) && "x-java-jvm-local-objectref".equals$O(flavor.getSubType$()) && flavor.getRepresentationClass$().isAssignableFrom$Class(propertyType)  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor)) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}var reader=this.property.getReadMethod$();
var value=null;
try {
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Property read failed: " + this.property.getName$()]);
} else {
throw ex;
}
}
return value;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "SwingDropTarget", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.dnd.DropTarget', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (c) {
;C$.superclazz.c$$java_awt_Component$I$java_awt_dnd_DropTargetListener.apply(this,[c, 1073741827, null]);C$.$init$.apply(this);
try {
C$.superclazz.prototype.addDropTargetListener$java_awt_dnd_DropTargetListener.apply(this, [$I$(4).getDropTargetListener$()]);
} catch (tmle) {
if (Clazz.exceptionOf(tmle,"java.util.TooManyListenersException")){
} else {
throw tmle;
}
}
}, 1);

Clazz.newMeth(C$, 'addDropTargetListener$java_awt_dnd_DropTargetListener',  function (dtl) {
if (this.listenerList == null ) {
this.listenerList=Clazz.new_($I$(5,1));
}this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']), dtl);
});

Clazz.newMeth(C$, 'removeDropTargetListener$java_awt_dnd_DropTargetListener',  function (dtl) {
if (this.listenerList != null ) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']), dtl);
}});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent',  function (e) {
C$.superclazz.prototype.dragEnter$java_awt_dnd_DropTargetDragEvent.apply(this, [e]);
if (this.listenerList != null ) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']) ) {
(listeners[i + 1]).dragEnter$java_awt_dnd_DropTargetDragEvent(e);
}}
}});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent',  function (e) {
C$.superclazz.prototype.dragOver$java_awt_dnd_DropTargetDragEvent.apply(this, [e]);
if (this.listenerList != null ) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']) ) {
(listeners[i + 1]).dragOver$java_awt_dnd_DropTargetDragEvent(e);
}}
}});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent',  function (e) {
C$.superclazz.prototype.dragExit$java_awt_dnd_DropTargetEvent.apply(this, [e]);
if (this.listenerList != null ) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']) ) {
(listeners[i + 1]).dragExit$java_awt_dnd_DropTargetEvent(e);
}}
}});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent',  function (e) {
C$.superclazz.prototype.drop$java_awt_dnd_DropTargetDropEvent.apply(this, [e]);
if (this.listenerList != null ) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']) ) {
(listeners[i + 1]).drop$java_awt_dnd_DropTargetDropEvent(e);
}}
}});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent',  function (e) {
C$.superclazz.prototype.dropActionChanged$java_awt_dnd_DropTargetDragEvent.apply(this, [e]);
if (this.listenerList != null ) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['dragEnter$java_awt_dnd_DropTargetDragEvent','dragExit$java_awt_dnd_DropTargetEvent','dragOver$java_awt_dnd_DropTargetDragEvent','drop$java_awt_dnd_DropTargetDropEvent','dropActionChanged$java_awt_dnd_DropTargetDragEvent']) ) {
(listeners[i + 1]).dropActionChanged$java_awt_dnd_DropTargetDragEvent(e);
}}
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "DropHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.awt.dnd.DropTargetListener', 'java.io.Serializable', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.outer=Clazz.new_($I$(7,1));
this.inner=Clazz.new_($I$(7,1));
this.hysteresis=10;
this.support=Clazz.new_($I$(8,1).c$$java_awt_Component$java_awt_dnd_DropTargetEvent,[null, null]);
},1);

C$.$fields$=[['I',['hysteresis'],'O',['timer','javax.swing.Timer','lastPosition','java.awt.Point','outer','java.awt.Rectangle','+inner','component','java.awt.Component','state','java.lang.Object','support','javax.swing.TransferHandler.TransferSupport']]]

Clazz.newMeth(C$, 'updateAutoscrollRegion$javax_swing_JComponent',  function (c) {
var visible=c.getVisibleRect$();
this.outer.setBounds$I$I$I$I(visible.x, visible.y, visible.width, visible.height);
var i=Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 0, 0, 0]);
if (Clazz.instanceOf(c, "javax.swing.Scrollable")) {
var minSize=20;
if (visible.width >= minSize) {
i.left=i.right=10;
}if (visible.height >= minSize) {
i.top=i.bottom=10;
}}this.inner.setBounds$I$I$I$I(visible.x + i.left, visible.y + i.top, visible.width - (i.left + i.right), visible.height - (i.top + i.bottom));
}, p$2);

Clazz.newMeth(C$, 'autoscroll$javax_swing_JComponent$java_awt_Point',  function (c, pos) {
if (Clazz.instanceOf(c, "javax.swing.Scrollable")) {
var s=c;
if (pos.y < this.inner.y) {
var dy=s.getScrollableUnitIncrement$java_awt_Rectangle$I$I(this.outer, 1, -1);
var r=Clazz.new_($I$(7,1).c$$I$I$I$I,[this.inner.x, this.outer.y - dy, this.inner.width, dy]);
c.scrollRectToVisible$java_awt_Rectangle(r);
} else if (pos.y > (this.inner.y + this.inner.height)) {
var dy=s.getScrollableUnitIncrement$java_awt_Rectangle$I$I(this.outer, 1, 1);
var r=Clazz.new_($I$(7,1).c$$I$I$I$I,[this.inner.x, this.outer.y + this.outer.height, this.inner.width, dy]);
c.scrollRectToVisible$java_awt_Rectangle(r);
}if (pos.x < this.inner.x) {
var dx=s.getScrollableUnitIncrement$java_awt_Rectangle$I$I(this.outer, 0, -1);
var r=Clazz.new_($I$(7,1).c$$I$I$I$I,[this.outer.x - dx, this.inner.y, dx, this.inner.height]);
c.scrollRectToVisible$java_awt_Rectangle(r);
} else if (pos.x > (this.inner.x + this.inner.width)) {
var dx=s.getScrollableUnitIncrement$java_awt_Rectangle$I$I(this.outer, 0, 1);
var r=Clazz.new_($I$(7,1).c$$I$I$I$I,[this.outer.x + this.outer.width, this.inner.y, dx, this.inner.height]);
c.scrollRectToVisible$java_awt_Rectangle(r);
}}}, p$2);

Clazz.newMeth(C$, 'initPropertiesIfNecessary',  function () {
if (this.timer == null ) {
var t=$I$(10).getDefaultToolkit$();
var prop;
prop=t.getDesktopProperty$S("DnD.Autoscroll.interval");
this.timer=Clazz.new_([prop == null  ? 100 : prop.intValue$(), this],$I$(11,1).c$$I$java_awt_event_ActionListener);
prop=t.getDesktopProperty$S("DnD.Autoscroll.initialDelay");
this.timer.setInitialDelay$I(prop == null  ? 100 : prop.intValue$());
prop=t.getDesktopProperty$S("DnD.Autoscroll.cursorHysteresis");
if (prop != null ) {
this.hysteresis=prop.intValue$();
}}}, p$2);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$2.updateAutoscrollRegion$javax_swing_JComponent.apply(this, [this.component]);
if (this.outer.contains$java_awt_Point(this.lastPosition) && !this.inner.contains$java_awt_Point(this.lastPosition) ) {
p$2.autoscroll$javax_swing_JComponent$java_awt_Point.apply(this, [this.component, this.lastPosition]);
}});

Clazz.newMeth(C$, 'setComponentDropLocation$javax_swing_TransferHandler_TransferSupport$Z',  function (support, forDrop) {
var dropLocation=(support == null ) ? null : support.getDropLocation$();
if (Clazz.instanceOf(this.component, "javax.swing.text.JTextComponent")) {
} else if (Clazz.instanceOf(this.component, "javax.swing.JComponent")) {
this.state=(this.component).setDropLocation$javax_swing_TransferHandler_DropLocation$O$Z(dropLocation, this.state, forDrop);
}}, p$2);

Clazz.newMeth(C$, 'handleDrag$java_awt_dnd_DropTargetDragEvent',  function (e) {
var importer=(this.component).getTransferHandler$();
if (importer == null ) {
e.rejectDrag$();
p$2.setComponentDropLocation$javax_swing_TransferHandler_TransferSupport$Z.apply(this, [null, false]);
return;
}p$1.setDNDVariables$java_awt_Component$java_awt_dnd_DropTargetEvent.apply(this.support, [this.component, e]);
var canImport=importer.canImport$javax_swing_TransferHandler_TransferSupport(this.support);
if (canImport) {
e.acceptDrag$I(this.support.getDropAction$());
} else {
e.rejectDrag$();
}var showLocation=this.support.showDropLocationIsSet ? this.support.showDropLocation : canImport;
p$2.setComponentDropLocation$javax_swing_TransferHandler_TransferSupport$Z.apply(this, [showLocation ? this.support : null, false]);
}, p$2);

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent',  function (e) {
this.state=null;
this.component=e.getDropTargetContext$().getComponent$();
p$2.handleDrag$java_awt_dnd_DropTargetDragEvent.apply(this, [e]);
if (Clazz.instanceOf(this.component, "javax.swing.JComponent")) {
this.lastPosition=e.getLocation$();
p$2.updateAutoscrollRegion$javax_swing_JComponent.apply(this, [this.component]);
p$2.initPropertiesIfNecessary.apply(this, []);
}});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent',  function (e) {
this.component=e.getDropTargetContext$().getComponent$();
p$2.handleDrag$java_awt_dnd_DropTargetDragEvent.apply(this, [e]);
if (!(Clazz.instanceOf(this.component, "javax.swing.JComponent"))) {
return;
}var p=e.getLocation$();
if (Math.abs(p.x - this.lastPosition.x) > this.hysteresis || Math.abs(p.y - this.lastPosition.y) > this.hysteresis ) {
if (this.timer.isRunning$()) this.timer.stop$();
} else {
if (!this.timer.isRunning$()) this.timer.start$();
}this.lastPosition=p;
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent',  function (e) {
p$2.cleanup$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent',  function (e) {
this.component=e.getDropTargetContext$().getComponent$();
var importer=(this.component).getTransferHandler$();
if (importer == null ) {
e.rejectDrop$();
p$2.cleanup$Z.apply(this, [false]);
return;
}p$1.setDNDVariables$java_awt_Component$java_awt_dnd_DropTargetEvent.apply(this.support, [this.component, e]);
var canImport=importer.canImport$javax_swing_TransferHandler_TransferSupport(this.support);
if (canImport) {
e.acceptDrop$I(this.support.getDropAction$());
var showLocation=this.support.showDropLocationIsSet ? this.support.showDropLocation : canImport;
p$2.setComponentDropLocation$javax_swing_TransferHandler_TransferSupport$Z.apply(this, [showLocation ? this.support : null, false]);
var success;
try {
success=importer.importData$javax_swing_TransferHandler_TransferSupport(this.support);
} catch (re) {
if (Clazz.exceptionOf(re,"RuntimeException")){
success=false;
} else {
throw re;
}
}
e.dropComplete$Z(success);
p$2.cleanup$Z.apply(this, [success]);
} else {
e.rejectDrop$();
p$2.cleanup$Z.apply(this, [false]);
}});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent',  function (e) {
if (this.component == null ) {
return;
}p$2.handleDrag$java_awt_dnd_DropTargetDragEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'cleanup$Z',  function (forDrop) {
p$2.setComponentDropLocation$javax_swing_TransferHandler_TransferSupport$Z.apply(this, [null, forDrop]);
if (Clazz.instanceOf(this.component, "javax.swing.JComponent")) {
(this.component).dndDone$();
}if (this.timer != null ) {
this.timer.stop$();
}this.state=null;
this.component=null;
this.lastPosition=null;
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "DragHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.awt.dnd.DragGestureListener', 'java.awt.dnd.DragSourceListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['scrolls']]]

Clazz.newMeth(C$, 'dragGestureRecognized$java_awt_dnd_DragGestureEvent',  function (dge) {
var c=dge.getComponent$();
var th=c.getTransferHandler$();
var t=th.createTransferable$javax_swing_JComponent(c);
if (t != null ) {
this.scrolls=c.getAutoscrolls$();
c.setAutoscrolls$Z(false);
try {
dge.startDrag$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener(null, t, this);
return;
} catch (re) {
if (Clazz.exceptionOf(re,"RuntimeException")){
c.setAutoscrolls$Z(this.scrolls);
} else {
throw re;
}
}
}th.exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(c, t, 0);
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DragSourceEvent',  function (dsde) {
});

Clazz.newMeth(C$, 'dragDropEnd$java_awt_dnd_DragSourceDropEvent',  function (dsde) {
var dsc=dsde.getDragSourceContext$();
var c=dsc.getComponent$();
if (dsde.getDropSuccess$()) {
c.getTransferHandler$().exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(c, dsc.getTransferable$(), dsde.getDropAction$());
} else {
c.getTransferHandler$().exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I(c, dsc.getTransferable$(), 0);
}c.setAutoscrolls$Z(this.scrolls);
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "SwingDragGestureRecognizer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.dnd.DragGestureRecognizer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragGestureListener',  function (dgl) {
;C$.superclazz.c$$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener.apply(this,[$I$(12).getDefaultDragSource$(), null, 0, dgl]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'gestured$javax_swing_JComponent$java_awt_event_MouseEvent$I$I',  function (c, e, srcActions, action) {
this.setComponent$java_awt_Component(c);
this.setSourceActions$I(srcActions);
this.appendEvent$java_awt_event_InputEvent(e);
this.fireDragGestureRecognized$I$java_awt_Point(action, e.getPoint$());
});

Clazz.newMeth(C$, 'registerListeners$',  function () {
});

Clazz.newMeth(C$, 'unregisterListeners$',  function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TransferHandler, "TransferAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['SandboxClipboardKey','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isEnabled$O',  function (sender) {
if (Clazz.instanceOf(sender, "javax.swing.JComponent") && (sender).getTransferHandler$() == null  ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$3.actionPerformedImpl$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'actionPerformedImpl$java_awt_event_ActionEvent',  function (e) {
var src=e.getSource$();
if (Clazz.instanceOf(src, "javax.swing.JComponent")) {
var c=src;
var th=c.getTransferHandler$();
var clipboard=p$3.getClipboard$javax_swing_JComponent.apply(this, [c]);
var name=this.getValue$S("Name");
var trans=null;
try {
if ((clipboard != null ) && (th != null ) && (name != null )  ) {
if ("cut".equals$O(name)) {
th.exportToClipboard$javax_swing_JComponent$java_awt_datatransfer_Clipboard$I(c, clipboard, 2);
} else if ("copy".equals$O(name)) {
th.exportToClipboard$javax_swing_JComponent$java_awt_datatransfer_Clipboard$I(c, clipboard, 1);
} else if ("paste".equals$O(name)) {
trans=clipboard.getContents$O(null);
}}} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
$I$(13).getLookAndFeel$().provideErrorFeedback$java_awt_Component(c);
return;
} else {
throw ise;
}
}
if (trans != null ) {
th.importData$javax_swing_TransferHandler_TransferSupport(Clazz.new_($I$(8,1).c$$java_awt_Component$java_awt_datatransfer_Transferable,[c, trans]));
}}}, p$3);

Clazz.newMeth(C$, 'getClipboard$javax_swing_JComponent',  function (c) {
return c.getToolkit$().getSystemClipboard$();
}, p$3);

C$.$static$=function(){C$.$static$=0;
C$.SandboxClipboardKey= Clazz.new_();
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
