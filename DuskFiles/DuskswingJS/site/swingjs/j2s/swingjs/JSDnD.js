(function(){var P$=Clazz.newPackage("swingjs"),p$1={},p$2={},I$=[[0,'swingjs.JSDnD',['swingjs.JSDnD','.FileTransferable'],'java.awt.datatransfer.DataFlavor','java.util.ArrayList','java.io.File','swingjs.JSUtil',['swingjs.JSDnD','.JSTransferable'],['swingjs.JSDnD','.JSDropMouseEvent'],'java.awt.dnd.DropTargetContext',['swingjs.JSDnD','.JSDropTargetContextPeer'],'java.awt.dnd.DropTargetDropEvent','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSDnD", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['JSDropMouseEvent',9],['JSDropTargetContextPeer',8],['JSTransferable',9],['FileTransferable',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'drop$javax_swing_JComponent$O$S$BA$I$I',  function (jc, html5DataTransfer, name, data, x, y) {
if (html5DataTransfer == null ) return;
var t=Clazz.new_($I$(7,1).c$$O,[html5DataTransfer]);
if (name == null ) {
var url=t.getTransferData$S("text/uri-list");
if (url != null ) {
C$.drop$javax_swing_JComponent$O$S$BA$I$I(jc, t, url, $I$(6).getFileAsBytes$O(url), x, y);
return;
}}var target=jc.getDropTarget$();
System.out.println$S("JSDnD drop for " + jc.getUIClassID$() + " target " + target );
var offset;
if (target != null ) {
offset=jc.getLocationOnScreen$();
target.drop$java_awt_dnd_DropTargetDropEvent(C$.createDropEvent$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA$I$I(target, t, name, data, x, y));
return;
}var top=jc.getTopLevelAncestor$();
offset=top.getLocationOnScreen$();
System.out.println$S("JSDnD drop for " + jc.getUIClassID$() + " offset " + x + " " + y + "  -" + offset );
top.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(8,1).c$$java_awt_Component$I$I$I$java_awt_datatransfer_Transferable$S$BA,[jc, 502, x, y, t, name, data]));
}, 1);

Clazz.newMeth(C$, 'drop$javax_swing_JComponent$O$OAA$I$I',  function (jc, html5DataTransfer, data, x, y) {
if (html5DataTransfer == null ) return;
var t=Clazz.new_($I$(2,1).c$$OAA,[data]);
var target=jc.getDropTarget$();
System.out.println$S("JSDnD[] drop for " + jc.getUIClassID$() + " target " + (target == null  ? null : target.getClass$().getName$()) );
if (target != null ) {
target.drop$java_awt_dnd_DropTargetDropEvent(C$.createDropEvent$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$OAA$I$I(target, t, data, x, y));
return;
}var top=jc.getTopLevelAncestor$();
System.out.println$S("JSDnD drop for " + jc.getUIClassID$() + " offset " + x + " " + y );
top.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(8,1).c$$java_awt_Component$I$I$I$java_awt_datatransfer_Transferable$S$BA,[jc, 502, x, y, t, null, null]));
t.files=null;
}, 1);

Clazz.newMeth(C$, 'createDropEvent$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$OAA$I$I',  function (target, t, data, x, y) {
var context=Clazz.new_($I$(9,1).c$$java_awt_dnd_DropTarget,[target]);
context.addNotify$java_awt_dnd_peer_DropTargetContextPeer(Clazz.new_($I$(10,1).c$$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA,[target, t, null, null]));
return Clazz.new_([context, Clazz.new_($I$(12,1).c$$I$I,[x, y]), 2, 1073741827],$I$(11,1).c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I);
}, 1);

Clazz.newMeth(C$, 'createDropEvent$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA$I$I',  function (target, t, name, data, x, y) {
var context=Clazz.new_($I$(9,1).c$$java_awt_dnd_DropTarget,[target]);
context.addNotify$java_awt_dnd_peer_DropTargetContextPeer(Clazz.new_($I$(10,1).c$$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA,[target, t, name, data]));
return Clazz.new_([context, Clazz.new_($I$(12,1).c$$I$I,[x, y]), 2, 1073741827],$I$(11,1).c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDnD, "JSDropMouseEvent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.MouseEvent', 'java.awt.ActiveEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['transferable','java.awt.datatransfer.Transferable']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$I$I$java_awt_datatransfer_Transferable$S$BA',  function (source, id, x, y, t, name, data) {
;C$.superclazz.c$$java_awt_Component$I$J$I$I$I$I$Z$I.apply(this,[source, id, System.currentTimeMillis$(), 0, x, y, 0, false, 0]);C$.$init$.apply(this);
this.transferable=t;
this.name=name;
if (name != null ) this.setBData$BA(data);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$I$I',  function (target, id, x, y) {
C$.c$$java_awt_Component$I$I$I$java_awt_datatransfer_Transferable$S$BA.apply(this, [target, id, x, y, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'copyPrivateDataInto$java_awt_AWTEvent',  function (that) {
var e=that;
e.transferable=this.transferable;
e.name=this.name;
e.bdata=this.bdata;
});

Clazz.newMeth(C$, 'dispatch$',  function () {
try {
var target=(this.getSource$()).getDropTarget$();
if (this.name == null ) target.drop$java_awt_dnd_DropTargetDropEvent($I$(1,"createDropEvent$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA$I$I",[target, this.transferable, null, null, this.getX$(), this.getY$()]));
 else target.drop$java_awt_dnd_DropTargetDropEvent($I$(1,"createDropEvent$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA$I$I",[target, this.transferable, this.name, this.getBData$(), this.getX$(), this.getY$()]));
} catch (e) {
System.out.println$S("JSDnD Error creating Drop event " + e);
}
});

Clazz.newMeth(C$, 'consume$',  function () {
C$.superclazz.prototype.consume$.apply(this, []);
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr=null;
switch (this.id) {
case 502:
typeStr="MOUSE_DROPPED";
break;
default:
return C$.superclazz.prototype.paramString$.apply(this, []);
}
return typeStr + ",(" + this.getX$() + "," + this.getY$() + ")" ;
});

Clazz.newMeth(C$, 'getDispatcher$',  function () {
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDnD, "JSDropTargetContextPeer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.dnd.peer.DropTargetContextPeer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['transferable','java.awt.datatransfer.Transferable','target','java.awt.dnd.DropTarget']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTarget$java_awt_datatransfer_Transferable$S$BA',  function (target, t, name, data) {
;C$.$init$.apply(this);
this.target=target;
this.transferable=(name == null  ? t : Clazz.new_($I$(2,1).c$$S$BA,[name, data]));
}, 1);

Clazz.newMeth(C$, 'setTargetActions$I',  function (actions) {
});

Clazz.newMeth(C$, 'getTargetActions$',  function () {
return 3;
});

Clazz.newMeth(C$, 'getDropTarget$',  function () {
return this.target;
});

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
return this.transferable.getTransferDataFlavors$();
});

Clazz.newMeth(C$, 'getTransferable$',  function () {
return this.transferable;
});

Clazz.newMeth(C$, 'isTransferableJVMLocal$',  function () {
return true;
});

Clazz.newMeth(C$, 'acceptDrag$I',  function (dragAction) {
});

Clazz.newMeth(C$, 'rejectDrag$',  function () {
});

Clazz.newMeth(C$, 'acceptDrop$I',  function (dropAction) {
});

Clazz.newMeth(C$, 'rejectDrop$',  function () {
});

Clazz.newMeth(C$, 'dropComplete$Z',  function (success) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDnD, "JSTransferable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataTransfer','swingjs.api.js.HTML5DataTransfer','mimeTypes','String[]','flavors','java.awt.datatransfer.DataFlavor[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (html5DataTransfer) {
;C$.$init$.apply(this);
this.set$O(html5DataTransfer);
}, 1);

Clazz.newMeth(C$, 'set$O',  function (html5DataTransfer) {
this.dataTransfer=html5DataTransfer;
this.mimeTypes=html5DataTransfer && html5DataTransfer.types ||null;
if (this.mimeTypes != null ) {
if (this.mimeTypes.length == 0) {
this.mimeTypes=Clazz.array(String, -1, ["application/x-java-file-list;class=java.util.List"]);
} else {
var t=Clazz.array(String, [this.mimeTypes.length]);
for (var i=0; i < this.mimeTypes.length; i++) t[i]=(this.mimeTypes[i].equals$O("Files") ? "application/x-java-file-list;class=java.util.List" : this.mimeTypes[i]);

this.mimeTypes=t;
}}return this;
});

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
return p$1.getFlavors.apply(this, []);
});

Clazz.newMeth(C$, 'getFlavors',  function () {
if (this.flavors == null ) {
this.flavors=Clazz.array($I$(3), [this.mimeTypes.length]);
for (var i=0; i < this.mimeTypes.length; i++) {
try {
this.flavors[i]=Clazz.new_($I$(3,1).c$$S,[this.mimeTypes[i]]);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
}return this.flavors;
}, p$1);

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
var type=C$.fixType$S(flavor.getMimeType$());
var data=this.dataTransfer.getData(type);
return (data != null  && !data.equals$O("") );
});

Clazz.newMeth(C$, 'isDataFlavorSupported$S',  function (mimeType) {
var data=this.dataTransfer.getData(C$.fixType$S(mimeType));
return (data != null  && !data.equals$O("") );
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (flavor) {
var data=this.dataTransfer.getData(C$.fixType$S(flavor.getMimeType$()));
return (data == null  || data.equals$O("")  ? null : data);
});

Clazz.newMeth(C$, 'getTransferData$S',  function (mimeType) {
var data=this.dataTransfer.getData(C$.fixType$S(mimeType));
return (data == null  || data.equals$O("")  ? null : data);
});

Clazz.newMeth(C$, 'fixType$S',  function (s) {
var i=s.indexOf$S(";");
return (i < 0 ? s : s.substring$I$I(0, i)).trim$();
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDnD, "FileTransferable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['swingjs.JSDnD','.JSTransferable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['files','java.util.List']]
,['S',['temp']]]

Clazz.newMeth(C$, 'c$$S$BA',  function (name, data) {
;C$.superclazz.c$$O.apply(this,[null]);C$.$init$.apply(this);
this.files=Clazz.new_($I$(4,1));
p$2.addFile$S$BA.apply(this, [name, data]);
}, 1);

Clazz.newMeth(C$, 'addFile$S$BA',  function (name, data) {
var file=Clazz.new_($I$(5,1).c$$S,[C$.temp + name]);
$I$(6).setFileBytesStatic$O$O(file, data);
this.files.add$O(file);
}, p$2);

Clazz.newMeth(C$, 'c$$OAA',  function (data) {
;C$.superclazz.c$$O.apply(this,[null]);C$.$init$.apply(this);
this.files=Clazz.new_($I$(4,1));
for (var i=0; i < data.length; i++) {
p$2.addFile$S$BA.apply(this, [data[i][0], data[i][1]]);
}
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
var flavors=Clazz.array($I$(3), [1]);
flavors[0]=$I$(3).javaFileListFlavor;
return flavors;
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
return flavor.isFlavorJavaFileListType$();
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (flavor) {
var o=this.files;
return o;
});

C$.$static$=function(){C$.$static$=0;
C$.temp=System.getProperty$S("java.io.tmpdir");
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
