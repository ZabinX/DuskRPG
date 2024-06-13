(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DropTargetDragEvent", null, 'java.awt.dnd.DropTargetEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['actions','dropAction'],'O',['location','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I',  function (dtc, cursorLocn, dropAction, srcActions) {
;C$.superclazz.c$$java_awt_dnd_DropTargetContext.apply(this,[dtc]);C$.$init$.apply(this);
if (cursorLocn == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["cursorLocn"]);
if (dropAction != 0 && dropAction != 1  && dropAction != 2  && dropAction != 1073741824 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dropAction" + dropAction]);
if ((srcActions & ~(1073741827)) != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcActions"]);
this.location=cursorLocn;
this.actions=srcActions;
this.dropAction=dropAction;
}, 1);

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location;
});

Clazz.newMeth(C$, 'getCurrentDataFlavors$',  function () {
return this.getDropTargetContext$().getCurrentDataFlavors$();
});

Clazz.newMeth(C$, 'getCurrentDataFlavorsAsList$',  function () {
return this.getDropTargetContext$().getCurrentDataFlavorsAsList$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (df) {
return this.getDropTargetContext$().isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df);
});

Clazz.newMeth(C$, 'getSourceActions$',  function () {
return this.actions;
});

Clazz.newMeth(C$, 'getDropAction$',  function () {
return this.dropAction;
});

Clazz.newMeth(C$, 'getTransferable$',  function () {
return this.getDropTargetContext$().getTransferable$();
});

Clazz.newMeth(C$, 'acceptDrag$I',  function (dragOperation) {
this.getDropTargetContext$().acceptDrag$I(dragOperation);
});

Clazz.newMeth(C$, 'rejectDrag$',  function () {
this.getDropTargetContext$().rejectDrag$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
