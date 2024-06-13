(function(){var P$=Clazz.newPackage("java.applet"),I$=[[0,'java.net.URL','javax.swing.RepaintManager','sun.applet.AppletAudioClip','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSApplet", null, 'java.awt.JSPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['temporaryLostComponent','java.awt.Component','stub','java.applet.AppletStub']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.秘winOrApplet=true;
}, 1);

Clazz.newMeth(C$, 'getClientProperty$O',  function (key) {
return null;
});

Clazz.newMeth(C$, 'isFocusableWindow$',  function () {
return true;
});

Clazz.newMeth(C$, 'getModalBlocker$',  function () {
return null;
});

Clazz.newMeth(C$, 'addWindowListener$java_awt_event_WindowListener',  function (w) {
});

Clazz.newMeth(C$, 'addOwnedWindow$java_awt_Window',  function (w) {
});

Clazz.newMeth(C$, 'removeOwnedWindow$java_awt_Window',  function (weakWindow) {
});

Clazz.newMeth(C$, 'getTemporaryLostComponent$',  function () {
return this.temporaryLostComponent;
});

Clazz.newMeth(C$, 'setTemporaryLostComponent$java_awt_Component',  function (component) {
var previousComp=this.temporaryLostComponent;
if (component == null  || component.canBeFocusOwner$() ) {
this.temporaryLostComponent=component;
} else {
this.temporaryLostComponent=null;
}return previousComp;
});

Clazz.newMeth(C$, 'setStub$java_applet_AppletStub',  function (stub) {
this.stub=stub;
});

Clazz.newMeth(C$, 'isActive$',  function () {
if (this.stub != null ) {
return this.stub.isActive$();
} else {
return false;
}});

Clazz.newMeth(C$, 'getDocumentBase$',  function () {
return this.stub.getDocumentBase$();
});

Clazz.newMeth(C$, 'getCodeBase$',  function () {
if (this.stub != null ) return this.stub.getCodeBase$();
var path=this.getClass$().getName$().replace$CharSequence$CharSequence(".", "/");
try {
return Clazz.new_(["http://./" + path.substring$I$I(0, path.lastIndexOf$S("/") + 1)],$I$(1,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getParameter$S',  function (name) {
return this.stub.getParameter$S(name);
});

Clazz.newMeth(C$, 'getAppletContext$',  function () {
return this.stub.getAppletContext$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b) this.秘repaint$();
});

Clazz.newMeth(C$, 'resize$I$I',  function (width, height) {
if (this.stub == null ) this.秘resizeOriginal$I$I(width, height);
});

Clazz.newMeth(C$, 'resizeHTML$I$I',  function (width, height) {
if (this.秘appletViewer != null ) {
this.秘appletViewer.html5Applet._resizeApplet(Clazz.array(Integer.TYPE, -1, [width, height]));
if (this.stub != null ) {
var root=(this).getRootPane$();
root.invalidate$();
$I$(2).currentManager$java_awt_Component(this).addInvalidComponent$javax_swing_JComponent(root);
(this.getUI$()).adjustCanvasForMenuBar$();
}}});

Clazz.newMeth(C$, '秘resizeOriginal$I$I',  function (width, height) {
var d=this.size$();
if ((d.width != width) || (d.height != height) ) {
C$.superclazz.prototype.resize$I$I.apply(this, [width, height]);
if (this.stub != null ) {
this.stub.appletResize$I$I(width, height);
}}});

Clazz.newMeth(C$, 'resize$java_awt_Dimension',  function (d) {
this.resize$I$I(d.width, d.height);
});

Clazz.newMeth(C$, 'showStatus$S',  function (msg) {
this.getAppletContext$().showStatus$S(msg);
});

Clazz.newMeth(C$, 'getImage$java_net_URL',  function (url) {
return this.getAppletContext$().getImage$java_net_URL(url);
});

Clazz.newMeth(C$, 'getImage$java_net_URL$S',  function (url, name) {
try {
return this.getImage$java_net_URL(Clazz.new_($I$(1,1).c$$java_net_URL$S,[url, name]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'newAudioClip$java_net_URL',  function (url) {
return Clazz.new_($I$(3,1).c$$java_net_URL,[url]);
}, 1);

Clazz.newMeth(C$, 'getAudioClip$java_net_URL',  function (url) {
return this.getAppletContext$().getAudioClip$java_net_URL(url);
});

Clazz.newMeth(C$, 'getAudioClip$java_net_URL$S',  function (url, name) {
try {
return this.getAudioClip$java_net_URL(Clazz.new_($I$(1,1).c$$java_net_URL$S,[url, name]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getAppletInfo$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLocale$',  function () {
var locale=C$.superclazz.prototype.getLocale$.apply(this, []);
if (locale == null ) {
return $I$(4).getDefault$();
}return locale;
});

Clazz.newMeth(C$, 'getParameterInfo$',  function () {
return null;
});

Clazz.newMeth(C$, 'play$java_net_URL',  function (url) {
var clip=this.getAudioClip$java_net_URL(url);
if (clip != null ) {
clip.play$();
}});

Clazz.newMeth(C$, 'play$java_net_URL$S',  function (url, name) {
var clip=this.getAudioClip$java_net_URL$S(url, name);
if (clip != null ) {
clip.play$();
}});

Clazz.newMeth(C$, 'init$',  function () {
});

Clazz.newMeth(C$, 'start$',  function () {
});

Clazz.newMeth(C$, 'stop$',  function () {
});

Clazz.newMeth(C$, 'destroy$',  function () {
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
