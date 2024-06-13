(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.Cursor','java.awt.Window']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFrame", null, 'java.awt.Window');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.title="Untitled";
this.resizable=true;
this.undecorated=false;
this.mbManagement=false;
this.$state=0;
},1);

C$.$fields$=[['Z',['resizable','undecorated','mbManagement'],'I',['$state'],'S',['title'],'O',['maximizedBounds','java.awt.Rectangle','ownedWindows','java.util.Vector']]
,['I',['$nameCounter']]]

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
;C$.superclazz.c$$java_awt_GraphicsConfiguration.apply(this,[gc]);C$.$init$.apply(this);
this.title=(title == null  ? "" : title);
}, 1);

Clazz.newMeth(C$, 'constructComponentName$',  function () {
return "frame" + C$.$nameCounter++;
});

Clazz.newMeth(C$, 'addNotify$',  function () {
this.getOrCreatePeer$();
var p=this.peer;
if (p != null ) p.setMaximizedBounds$java_awt_Rectangle(this.maximizedBounds);
C$.superclazz.prototype.addNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'getOrCreatePeer$',  function () {
return (this.ui == null  ? null : this.peer == null  ? (this.peer=this.getToolkit$().createFrame$java_awt_JSFrame(this)) : this.peer);
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
var oldTitle=this.title;
if (title == null ) {
title="";
}{
this.title=title;
var peer=this.peer;
if (peer != null ) {
peer.setTitle$S(title);
}}this.firePropertyChange$S$O$O("title", oldTitle, title);
});

Clazz.newMeth(C$, 'getIconImage$',  function () {
var icons=this.icons;
if (icons != null ) {
if (icons.size$() > 0) {
return icons.get$I(0);
}}return null;
});

Clazz.newMeth(C$, 'setIconImage$java_awt_Image',  function (image) {
C$.superclazz.prototype.setIconImage$java_awt_Image.apply(this, [image]);
});

Clazz.newMeth(C$, 'isResizable$',  function () {
return this.resizable;
});

Clazz.newMeth(C$, 'setResizable$Z',  function (resizable) {
var oldResizable=this.resizable;
{
this.resizable=resizable;
}this.firePropertyChange$S$Z$Z("resizable", oldResizable, resizable);
});

Clazz.newMeth(C$, 'setState$I',  function (state) {
var current=this.getExtendedState$();
if (state == 1 && (current & 1) == 0 ) {
this.setExtendedState$I(current | 1);
} else if (state == 0 && (current & 1) != 0 ) {
this.setExtendedState$I(current & ~1);
}});

Clazz.newMeth(C$, 'setExtendedState$I',  function (state) {
if (!p$1.isFrameStateSupported$I.apply(this, [state])) {
return;
}this.$state=state;
});

Clazz.newMeth(C$, 'isFrameStateSupported$I',  function (state) {
if (!this.getToolkit$().isFrameStateSupported$I(state)) {
if (((state & 1) != 0) && !this.getToolkit$().isFrameStateSupported$I(1) ) {
return false;
} else {
state&=~1;
}return this.getToolkit$().isFrameStateSupported$I(state);
}return true;
}, p$1);

Clazz.newMeth(C$, 'getState$',  function () {
return (this.getExtendedState$() & 1) != 0 ? 1 : 0;
});

Clazz.newMeth(C$, 'getExtendedState$',  function () {
return this.$state;
});

Clazz.newMeth(C$, 'setMaximizedBounds$java_awt_Rectangle',  function (bounds) {
this.maximizedBounds=bounds;
});

Clazz.newMeth(C$, 'getMaximizedBounds$',  function () {
return this.maximizedBounds;
});

Clazz.newMeth(C$, 'setUndecorated$Z',  function (undecorated) {
this.undecorated=undecorated;
});

Clazz.newMeth(C$, 'isUndecorated$',  function () {
return this.undecorated;
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'postProcessKeyEvent$java_awt_event_KeyEvent',  function (e) {
C$.superclazz.prototype.postProcessKeyEvent$java_awt_event_KeyEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'paramString$',  function () {
var str=C$.superclazz.prototype.paramString$.apply(this, []);
if (this.title != null ) {
str+=",title=" + this.title;
}if (this.resizable) {
str+=",resizable";
}this.getExtendedState$();
if (this.$state == 0) {
str+=",normal";
} else {
if ((this.$state & 1) != 0) {
str+=",iconified";
}if ((this.$state & 6) == 6) {
str+=",maximized";
} else if ((this.$state & 2) != 0) {
str+=",maximized_horiz";
} else if ((this.$state & 4) != 0) {
str+=",maximized_vert";
}}return str;
});

Clazz.newMeth(C$, 'setCursor$I',  function (cursorType) {
if (cursorType < 0 || cursorType > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal cursor type"]);
}this.setCursor$java_awt_Cursor($I$(1).getPredefinedCursor$I(cursorType));
});

Clazz.newMeth(C$, 'getCursorType$',  function () {
return (this.getCursor$().getType$());
});

Clazz.newMeth(C$, 'getFrames$',  function () {
var allWindows=$I$(2).getWindows$();
var frameCount=0;
for (var w, $w = 0, $$w = allWindows; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (Clazz.instanceOf(w, "java.awt.JSFrame")) {
++frameCount;
}}
var frames=Clazz.array(C$, [frameCount]);
var c=0;
for (var w, $w = 0, $$w = allWindows; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (Clazz.instanceOf(w, "java.awt.JSFrame")) {
frames[c++]=w;
}}
return frames;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$nameCounter=0;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
