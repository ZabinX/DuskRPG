(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[[0,'java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DropTargetDropEvent", null, 'java.awt.dnd.DropTargetEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.location=C$.zero;
this.actions=0;
this.dropAction=0;
this.isLocalTx=false;
},1);

C$.$fields$=[['Z',['isLocalTx'],'I',['actions','dropAction'],'O',['+location']]
,['O',['zero','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I',  function (dtc, cursorLocn, dropAction, srcActions) {
;C$.superclazz.c$$java_awt_dnd_DropTargetContext.apply(this,[dtc]);C$.$init$.apply(this);
if (cursorLocn == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["cursorLocn"]);
if (dropAction != 0 && dropAction != 1  && dropAction != 2  && dropAction != 1073741824 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dropAction = " + dropAction]);
if ((srcActions & ~(1073741827)) != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcActions"]);
this.location=cursorLocn;
this.actions=srcActions;
this.dropAction=dropAction;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I$Z',  function (dtc, cursorLocn, dropAction, srcActions, isLocal) {
C$.c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I.apply(this, [dtc, cursorLocn, dropAction, srcActions]);
this.isLocalTx=isLocal;
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

Clazz.newMeth(C$, 'acceptDrop$I',  function (dropAction) {
this.getDropTargetContext$().acceptDrop$I(dropAction);
});

Clazz.newMeth(C$, 'rejectDrop$',  function () {
this.getDropTargetContext$().rejectDrop$();
});

Clazz.newMeth(C$, 'dropComplete$Z',  function (success) {
this.getDropTargetContext$().dropComplete$Z(success);
});

Clazz.newMeth(C$, 'isLocalTransfer$',  function () {
return this.isLocalTx;
});

C$.$static$=function(){C$.$static$=0;
C$.zero=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
