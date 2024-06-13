(function(){var P$=Clazz.newPackage("sun.awt.datatransfer"),p$1={},I$=[[0,'java.awt.datatransfer.SystemFlavorMap','sun.awt.datatransfer.TransferableProxy','java.awt.EventQueue','sun.awt.AppContext','sun.awt.datatransfer.ClipboardTransferable','sun.awt.datatransfer.DataTransferer','sun.awt.SunToolkit','sun.awt.PeerEvent','sun.awt.EventListenerAggregate','java.awt.datatransfer.FlavorListener','java.awt.datatransfer.FlavorEvent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SunClipboard", null, 'java.awt.datatransfer.Clipboard', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.contentsContext=null;
this.numberOfFlavorListeners=0;
},1);

C$.$fields$=[['I',['numberOfFlavorListeners'],'O',['contentsContext','sun.awt.AppContext','CLIPBOARD_FLAVOR_LISTENER_KEY','java.lang.Object','$currentDataFlavors','java.util.Set']]
,['O',['flavorMap','java.awt.datatransfer.FlavorTable']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.CLIPBOARD_FLAVOR_LISTENER_KEY=(name + "_CLIPBOARD_FLAVOR_LISTENER_KEY");
}, 1);

Clazz.newMeth(C$, 'setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner',  function (contents, owner) {
if (contents == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["contents"]);
}p$1.initContext.apply(this, []);
var oldOwner=this.owner;
var oldContents=this.contents;
try {
this.owner=owner;
this.contents=Clazz.new_($I$(2,1).c$$java_awt_datatransfer_Transferable$Z,[contents, true]);
this.setContentsNative$java_awt_datatransfer_Transferable(contents);
} finally {
if (oldOwner != null  && oldOwner !== owner  ) {
$I$(3,"invokeLater$Runnable",[((P$.SunClipboard$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SunClipboard$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.oldOwner.lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable(this.b$['sun.awt.datatransfer.SunClipboard'], this.$finals$.oldContents);
});
})()
), Clazz.new_(P$.SunClipboard$1.$init$,[this, {oldOwner:oldOwner,oldContents:oldContents}]))]);
}}
});

Clazz.newMeth(C$, 'initContext',  function () {
var context=$I$(4).getAppContext$();
if (this.contentsContext !== context ) {
{
if (context.isDisposed$()) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t set contents from disposed AppContext"]);
}context.addPropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", this);
}if (this.contentsContext != null ) {
this.contentsContext.removePropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", this);
}this.contentsContext=context;
}}, p$1);

Clazz.newMeth(C$, 'getContents$O',  function (requestor) {
if (this.contents != null ) {
return this.contents;
}return Clazz.new_($I$(5,1).c$$sun_awt_datatransfer_SunClipboard,[this]);
});

Clazz.newMeth(C$, 'getContextContents',  function () {
var context=$I$(4).getAppContext$();
return (context === this.contentsContext ) ? this.contents : null;
}, p$1);

Clazz.newMeth(C$, 'getAvailableDataFlavors$',  function () {
var cntnts=p$1.getContextContents.apply(this, []);
if (cntnts != null ) {
return cntnts.getTransferDataFlavors$();
}var formats=this.getClipboardFormatsOpenClose$();
return $I$(6).getInstance$().getFlavorsForFormatsAsArray$JA$java_awt_datatransfer_FlavorTable(formats, C$.flavorMap);
});

Clazz.newMeth(C$, 'isDataFlavorAvailable$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (flavor == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["flavor"]);
}var cntnts=p$1.getContextContents.apply(this, []);
if (cntnts != null ) {
return cntnts.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor);
}var formats=this.getClipboardFormatsOpenClose$();
return C$.formatArrayAsDataFlavorSet$JA(formats).contains$O(flavor);
});

Clazz.newMeth(C$, 'getData$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (flavor == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["flavor"]);
}var cntnts=p$1.getContextContents.apply(this, []);
if (cntnts != null ) {
return cntnts.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
}var format=0;
var data=null;
var localeTransferable=null;
try {
this.openClipboard$sun_awt_datatransfer_SunClipboard(null);
var formats=this.getClipboardFormats$();
var lFormat=$I$(6).getInstance$().getFlavorsForFormats$JA$java_awt_datatransfer_FlavorTable(formats, C$.flavorMap).get$O(flavor);
if (lFormat == null ) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}format=lFormat.longValue$();
data=this.getClipboardData$J(format);
if ($I$(6).getInstance$().isLocaleDependentTextFormat$J(format)) {
localeTransferable=this.createLocaleTransferable$JA(formats);
}} finally {
this.closeClipboard$();
}
return $I$(6).getInstance$().translateBytes$BA$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable(data, flavor, format, localeTransferable);
});

Clazz.newMeth(C$, 'createLocaleTransferable$JA',  function (formats) {
return null;
});

Clazz.newMeth(C$, 'openClipboard$sun_awt_datatransfer_SunClipboard',  function (newOwner) {
});

Clazz.newMeth(C$, 'closeClipboard$',  function () {
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if ("disposed".equals$O(evt.getPropertyName$()) && Boolean.TRUE.equals$O(evt.getNewValue$()) ) {
var disposedContext=evt.getSource$();
this.lostOwnershipLater$sun_awt_AppContext(disposedContext);
}});

Clazz.newMeth(C$, 'lostOwnershipImpl$',  function () {
this.lostOwnershipLater$sun_awt_AppContext(null);
});

Clazz.newMeth(C$, 'lostOwnershipLater$sun_awt_AppContext',  function (disposedContext) {
var context=this.contentsContext;
if (context == null ) {
return;
}var runnable=((P$.SunClipboard$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SunClipboard$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var sunClipboard=this.b$['sun.awt.datatransfer.SunClipboard'];
var owner=null;
var contents=null;
{
var context=sunClipboard.contentsContext;
if (context == null ) {
return;
}if (this.$finals$.disposedContext == null  || context === this.$finals$.disposedContext  ) {
owner=sunClipboard.owner;
contents=sunClipboard.contents;
sunClipboard.contentsContext=null;
sunClipboard.owner=null;
sunClipboard.contents=null;
sunClipboard.clearNativeContext$();
context.removePropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", sunClipboard);
} else {
return;
}}if (owner != null ) {
owner.lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable(sunClipboard, contents);
}});
})()
), Clazz.new_(P$.SunClipboard$2.$init$,[this, {disposedContext:disposedContext}]));
$I$(7,"postEvent$sun_awt_AppContext$java_awt_AWTEvent",[context, Clazz.new_($I$(8,1).c$$O$Runnable$J,[this, runnable, 1])]);
});

Clazz.newMeth(C$, 'getClipboardFormatsOpenClose$',  function () {
try {
this.openClipboard$sun_awt_datatransfer_SunClipboard(null);
return this.getClipboardFormats$();
} finally {
this.closeClipboard$();
}
});

Clazz.newMeth(C$, 'formatArrayAsDataFlavorSet$JA',  function (formats) {
return (formats == null ) ? null : $I$(6).getInstance$().getFlavorsForFormatsAsSet$JA$java_awt_datatransfer_FlavorTable(formats, C$.flavorMap);
}, 1);

Clazz.newMeth(C$, 'addFlavorListener$java_awt_datatransfer_FlavorListener',  function (listener) {
if (listener == null ) {
return;
}var appContext=$I$(4).getAppContext$();
var contextFlavorListeners=appContext.get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
if (contextFlavorListeners == null ) {
contextFlavorListeners=Clazz.new_([Clazz.getClass($I$(10),['flavorsChanged$java_awt_datatransfer_FlavorEvent'])],$I$(9,1).c$$Class);
appContext.put$O$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY, contextFlavorListeners);
}contextFlavorListeners.add$java_util_EventListener(listener);
if (this.numberOfFlavorListeners++ == 0) {
var currentFormats=null;
try {
this.openClipboard$sun_awt_datatransfer_SunClipboard(null);
currentFormats=this.getClipboardFormats$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalStateException")){
} else {
throw exc;
}
} finally {
this.closeClipboard$();
}
this.$currentDataFlavors=C$.formatArrayAsDataFlavorSet$JA(currentFormats);
this.registerClipboardViewerChecked$();
}});

Clazz.newMeth(C$, 'removeFlavorListener$java_awt_datatransfer_FlavorListener',  function (listener) {
if (listener == null ) {
return;
}var appContext=$I$(4).getAppContext$();
var contextFlavorListeners=appContext.get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
if (contextFlavorListeners == null ) {
return;
}if (contextFlavorListeners.remove$java_util_EventListener(listener) && --this.numberOfFlavorListeners == 0 ) {
this.unregisterClipboardViewerChecked$();
this.$currentDataFlavors=null;
}});

Clazz.newMeth(C$, 'getFlavorListeners$',  function () {
var contextFlavorListeners=$I$(4).getAppContext$().get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
return contextFlavorListeners == null  ? Clazz.array($I$(10), [0]) : contextFlavorListeners.getListenersCopy$();
});

Clazz.newMeth(C$, 'areFlavorListenersRegistered$',  function () {
return (this.numberOfFlavorListeners > 0);
});

Clazz.newMeth(C$, 'checkChange$JA',  function (formats) {
var prevDataFlavors=this.$currentDataFlavors;
this.$currentDataFlavors=C$.formatArrayAsDataFlavorSet$JA(formats);
if ((prevDataFlavors != null ) && (this.$currentDataFlavors != null ) && prevDataFlavors.equals$O(this.$currentDataFlavors)  ) {
return;
};for (var it=$I$(4).getAppContexts$().iterator$(); it.hasNext$(); ) {
var appContext=it.next$();
if (appContext == null  || appContext.isDisposed$() ) {
continue;
}var flavorListeners=appContext.get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
if (flavorListeners != null ) {
var flavorListenerArray=flavorListeners.getListenersInternal$();
for (var i=0; i < flavorListenerArray.length; i++) {
$I$(7,"postEvent$sun_awt_AppContext$java_awt_AWTEvent",[appContext, Clazz.new_([this, Clazz.new_(P$.SunClipboard$1SunFlavorChangeNotifier.$init$,[this, null]), 1],$I$(8,1).c$$O$Runnable$J)]);
}
}}
});

C$.$static$=function(){C$.$static$=0;
C$.flavorMap=$I$(1).getDefaultFlavorMap$();
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "SunClipboard$1SunFlavorChangeNotifier", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable', 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['flavorListener','java.awt.datatransfer.FlavorListener']]]

Clazz.newMeth(C$, 'c$$java_awt_datatransfer_FlavorListener',  function (flavorListener) {
;C$.$init$.apply(this);
this.flavorListener=flavorListener;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.flavorListener != null ) {
this.flavorListener.flavorsChanged$java_awt_datatransfer_FlavorEvent(Clazz.new_($I$(11,1).c$$java_awt_datatransfer_Clipboard,[this.b$['sun.awt.datatransfer.SunClipboard']]));
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
