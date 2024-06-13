(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'sun.awt.AppContext','Thread','swingjs.JSUtil','java.awt.image.ColorModel','javax.swing.UIManager','swingjs.api.Interface','javajs.util.PT','swingjs.JSNullComponentPeer','sun.awt.image.ToolkitImage','sun.awt.image.FileImageSource','swingjs.JSImagekit','java.io.BufferedInputStream','java.io.ByteArrayInputStream','java.io.File','java.nio.file.Paths','java.awt.datatransfer.Clipboard','swingjs.JSFocusPeer','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSToolkit", null, 'sun.awt.SunToolkit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['imageKit','swingjs.JSImagekit']]
,['Z',['isMac','isLinux','isUnix','isWin'],'I',['dispatchID'],'O',['SwingJS','swingjs.SwingJS','defaultContext','swingjs.api.js.HTML5CanvasContext2D','uid','javax.swing.UIDefaults','audioPlayer','swingjs.JSAudio','systemClipboard','java.awt.datatransfer.Clipboard','hardwiredFontList','String[]','focusManager','java.awt.peer.KeyboardFocusManagerPeer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
System.out.println$S("JSToolkit initialized");
}, 1);

Clazz.newMeth(C$, 'getPostEventQueue$Z',  function (isPost) {
return (isPost ? $I$(1).getAppContext$().get$O("PostEventQueue") : $I$(1).getAppContext$().get$O("AppContext_EVENT_QUEUE_KEY"));
}, 1);

Clazz.newMeth(C$, 'getAppletViewer$',  function () {
return $I$(2).currentThread$().getThreadGroup$().秘appletViewer;
}, 1);

Clazz.newMeth(C$, 'getScreenSize$java_awt_Dimension',  function (d) {
var jq=$I$(3).jQuery;
d.width=window.innerWidth ||0;
d.height=window.innerHeight ||0;
}, 1);

Clazz.newMeth(C$, 'getScreenWidth$',  function () {
var jq=$I$(3).jQuery;
return jq.$(window).width() ||0;
});

Clazz.newMeth(C$, 'getScreenHeight$',  function () {
var jq=$I$(3).jQuery;
return jq.$(window).height() ||0;
});

Clazz.newMeth(C$, 'getScreenResolution$',  function () {
return 96;
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return $I$(4).getRGBdefault$();
});

Clazz.newMeth(C$, 'sync$',  function () {
});

Clazz.newMeth(C$, 'isModalExclusionTypeSupported$java_awt_Dialog_ModalExclusionType',  function (modalExclusionType) {
return true;
});

Clazz.newMeth(C$, 'isModalityTypeSupported$java_awt_Dialog_ModalityType',  function (modalityType) {
return true;
});

Clazz.newMeth(C$, 'isTraySupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'grab$java_awt_Window',  function (w) {
});

Clazz.newMeth(C$, 'ungrab$java_awt_Window',  function (w) {
});

Clazz.newMeth(C$, 'getPropertyObject$O$S$O',  function (t, key, def) {
return def;
}, 1);

Clazz.newMeth(C$, 'getGraphicsConfiguration$',  function () {
var ap=C$.getAppletViewer$();
if (ap == null ) ap=$I$(2).currentThread$().getThreadGroup$().秘getAppletViewer$();
var gc=(ap == null  ? null : ap.graphicsConfig);
return (gc == null  ? (gc=ap.graphicsConfig=$I$(3).getInstance$S("swingjs.JSGraphicsConfiguration")) : gc);
}, 1);

Clazz.newMeth(C$, 'isFocused$java_awt_Window',  function (window) {
return false;
}, 1);

Clazz.newMeth(C$, 'getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S',  function (context, font, text) {
if (text == null  || text.length$() == 0 ) return 0;
var fontInfo=C$.getCanvasFont$java_awt_Font(font);
if (context == null ) context=C$.getDefaultCanvasContext2d$();
var w=0;
{
context.font = fontInfo;
w = Math.ceil(context.measureText(text).width);
}
return w;
}, 1);

Clazz.newMeth(C$, 'getTextMetrics$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S',  function (context, font, text) {
if (text == null  || text.length$() == 0 ) return Integer.valueOf$I(0);
var fontInfo=C$.getCanvasFont$java_awt_Font(font);
if (context == null ) context=C$.getDefaultCanvasContext2d$();
var tm=null;
{
context.font = fontInfo;
tm = context.measureText(text);
}
return tm;
}, 1);

Clazz.newMeth(C$, 'getDefaultCanvasContext2d$',  function () {
{
if (this.defaultContext == null) this.defaultContext = document.createElement( 'canvas' ).getContext('2d');
}
return C$.defaultContext;
}, 1);

Clazz.newMeth(C$, 'getCSSColor$java_awt_Color$Z',  function (c, asHex) {
var i=c.getRGB$() & 16777215;
if (asHex) {
var s=(i == 0 ? "000" : "000000" + Integer.toHexString$I(i));
return "#" + s.substring$I(s.length$() - 6);
} else {
var opacity=c.getAlpha$();
var rgb=c.getRGB$();
var s=((rgb >> 16) & 255) + ", " + ((rgb >> 8) & 255) + ", " + (rgb & 255) ;
return (opacity == 255 ? "rgb(" + s + ")"  : "rgba(" + s + ", " + new Float(opacity / 255.0).toString()  + ")");
}}, 1);

Clazz.newMeth(C$, 'getLookAndFeelDefaults$',  function () {
if (C$.uid == null ) C$.uid=$I$(5).getLookAndFeel$().getDefaults$();
return C$.uid;
}, 1);

Clazz.newMeth(C$, 'getComponentUI$javax_swing_JComponent',  function (target) {
var id=(target).getUIClassID$();
var ui=$I$(6).getInstance$S$Z("swingjs.plaf.JS" + id, true);
if (ui != null ) ui.set$javax_swing_JComponent(target);
return ui;
}, 1);

Clazz.newMeth(C$, 'dispatchEvent$java_awt_AWTEvent$O$Z',  function (event, src, andWait) {
var id=++C$.dispatchID;
var f=function() { if (src == null) event.dispatch$(); else src.dispatchEvent$java_awt_AWTEvent(event); } ||null;
if (andWait) {
C$.invokeAndWait$swingjs_api_js_JSFunction$I(f, id);
} else {
var ms=(C$.isMouseEvent$I(event.getID$()) ? -1 : 0);
C$.dispatch$O$I$I(f, ms, id);
}}, 1);

Clazz.newMeth(C$, 'isMouseEvent$I',  function (id) {
return (id >= 500 && id <= 507 );
}, 1);

Clazz.newMeth(C$, 'killDispatched$I',  function (html5Id) {

clearTimeout(html5Id);
}, 1);

Clazz.newMeth(C$, 'getCurrentThread$javajs_util_JSThread',  function (t) {
var setCurrent=(t != null );
if (t == null ) t=$I$(2).秘thisThread;
t=(!self.java ||t.getThreadGroup$().秘systemExited ? null : t);
if (setCurrent && t != null  ) $I$(2).秘thisThread=t;
return t;
}, 1);

Clazz.newMeth(C$, 'startThread$Thread',  function (t) {
var thread=t;
var thread0=C$.getCurrentThread$javajs_util_JSThread(null);
if (thread0 == null ) return;
var id0=C$.SwingJS.eventID;

var ff = function() {
C$.SwingJS.eventID=0;
thread=C$.getCurrentThread$javajs_util_JSThread(thread);
if (thread == null ) return;
try {

thread.run$();
} catch (e) {
var s="JSToolkit.dispatch$I(thread): " + thread.getName$() + ": " + e + "\n" + 
(e.getStackTrace$ ? e.getStackTrace$() + "\n" : "") + (!!e.stack ? e.stack : "") +
"" ;
System.out.println$S(s);
}
if (C$.getCurrentThread$javajs_util_JSThread(null) === t ) C$.getCurrentThread$javajs_util_JSThread(thread0);
C$.SwingJS.eventID=id0;

}; setTimeout(ff, 0);
}, 1);

Clazz.newMeth(C$, 'dispatch$O$I$I',  function (f, msDelay, id) {
var thread0=C$.getCurrentThread$javajs_util_JSThread(null);
if (thread0 == null ) return 0;
var ret=0;
var id0=C$.SwingJS.eventID;

var ff = function() {
C$.SwingJS.eventID=id;
thread0=C$.getCurrentThread$javajs_util_JSThread(thread0);
if (thread0 == null ) return 0;
try {

if (f.run$) f.run$(); else f();
} catch (e) {
var s="JSToolkit.dispatch$I(" + id + "): " + e + "\n" + 
(e.getStackTrace$ ? e.getStackTrace$() + "\n" : "") + (!!e.stack ? e.stack : "") +
"" ;
System.out.println$S(s);
$I$(3).warn$S(s);
}
C$.getCurrentThread$javajs_util_JSThread(thread0);
C$.SwingJS.eventID=id0;

}; ret = (msDelay == -1 ? ff() : setTimeout(ff, msDelay));
return ret;
}, 1);

Clazz.newMeth(C$, 'invokeAndWait$swingjs_api_js_JSFunction$I',  function (f, id) {
var thread0=C$.getCurrentThread$javajs_util_JSThread(null);
if (thread0 == null ) return;

(function() {
var id0=C$.SwingJS.eventID;
C$.SwingJS.eventID=id;
thread0=C$.getCurrentThread$javajs_util_JSThread(thread0);
if (thread0 == null ) return;

if (f.run$) f.run$(); else f();
thread0=C$.getCurrentThread$javajs_util_JSThread(thread0);
if (thread0 == null ) return;
C$.SwingJS.eventID=id0;

})();
}, 1);

Clazz.newMeth(C$, 'isDispatchThread$',  function () {
return (C$.SwingJS.eventID != 0);
}, 1);

Clazz.newMeth(C$, 'setIsDispatchThread$Z',  function (b) {
C$.SwingJS.eventID=(b ? 1 : 0);
}, 1);

Clazz.newMeth(C$, 'getHTML5Applet$java_awt_Component',  function (c) {
return $I$(3).getHTML5Applet$java_awt_Component(c);
}, 1);

Clazz.newMeth(C$, 'taintUI$java_awt_Component',  function (c) {
{
c.getUI$ && c.getUI$() && c.getUI$().setTainted$();
}
}, 1);

Clazz.newMeth(C$, 'createComponent$java_awt_Component',  function (target) {
var peer=C$.getUI$java_awt_Component$Z(target, true);
return peer;
});

Clazz.newMeth(C$, 'createDialog$java_awt_Dialog',  function (target) {
var ui=target.getUI$();
if (ui == null ) return null;
return (ui).setFrame$java_awt_Window$Z(target, true);
});

Clazz.newMeth(C$, 'createFrame$java_awt_JSFrame',  function (target) {
var ui=target.getUI$();
if (ui == null ) return null;
return (ui).setFrame$java_awt_Window$Z(target, true);
});

Clazz.newMeth(C$, 'createFrame$java_awt_Frame',  function (target) {
var ui=target.getUI$();
if (ui == null ) return null;
return (ui).setFrame$java_awt_Window$Z(target, true);
});

Clazz.newMeth(C$, 'createWindow$java_awt_Window',  function (target) {
var ui=target.getUI$();
if (ui == null ) return null;
return (ui).setFrame$java_awt_Window$Z(target, false);
});

Clazz.newMeth(C$, 'getUI$java_awt_Component$Z',  function (c, isQuiet) {
var ui=(c).秘getUI$();
if (ui == null ) {
(c).updateUI$();
ui=(c).秘getUI$();
}if (ui == null ) {
var s=c.getClass$().getName$();
if (!$I$(7).isOneOf$S$S(s, ";javax.swing.Box$Filler;")) System.out.println$S("[JSToolkit] Component " + s + " has no corresponding JSComponentUI, class " + c.getClass$().getName$() );
ui=Clazz.new_($I$(8,1).c$$java_awt_Component,[c]);
}return ui;
}, 1);

Clazz.newMeth(C$, 'getImagekit',  function () {
return (this.imageKit == null  ? this.imageKit=$I$(6).getInstance$S$Z("swingjs.JSImagekit", false) : this.imageKit);
}, p$1);

Clazz.newMeth(C$, 'getImage$S',  function (filename) {
if (filename.indexOf$S("/") != 0) filename="../" + filename;
var img=null;
try {
img=this.createImage$java_net_URL(Clazz.getClass(C$).getResource$S(filename));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (img == null ) img=Clazz.new_([Clazz.new_($I$(10,1).c$$S,[filename])],$I$(9,1).c$$java_awt_image_ImageProducer);
return img;
});

Clazz.newMeth(C$, 'getImage$java_net_URL',  function (url) {
return this.createImage$java_net_URL(url);
});

Clazz.newMeth(C$, 'createImage$java_awt_image_ImageProducer',  function (producer) {
var kit=Clazz.new_($I$(11,1));
try {
producer.startProduction$java_awt_image_ImageConsumer(kit);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return kit.getCreatedImage$();
});

Clazz.newMeth(C$, 'createImage$java_awt_Component$java_awt_image_ImageProducer',  function (c, producer) {
return (this.createImage$java_awt_image_ImageProducer(producer)).setComponent$java_awt_Component(c);
});

Clazz.newMeth(C$, 'createImageIcon$java_awt_Component$javax_swing_Icon$S',  function (c, icon, id) {
return $I$(11).createImageIcon$java_awt_Component$javax_swing_Icon$S(c, icon, id);
}, 1);

Clazz.newMeth(C$, 'createImage$S',  function (filename) {
return p$1.getImagekit.apply(this, []).createImageFromBytes$BA$I$I$S($I$(3,"getSignedStreamBytes$java_io_BufferedInputStream",[Clazz.new_([Clazz.new_([$I$(3).getFileAsBytes$O(filename)],$I$(13,1).c$$BA)],$I$(12,1).c$$java_io_InputStream)]), 0, -1, filename);
});

Clazz.newMeth(C$, 'createImage$java_net_URL',  function (url) {
var b=$I$(3).getURLInputStream$java_net_URL$Z(url, true);
return (b == null  ? null : p$1.getImagekit.apply(this, []).createImageFromBytes$BA$I$I$S($I$(3).getSignedStreamBytes$java_io_BufferedInputStream(b), 0, -1, url.toString()));
});

Clazz.newMeth(C$, 'createImage$BA$I$I',  function (data, imageoffset, imagelength) {
return p$1.getImagekit.apply(this, []).createImageFromBytes$BA$I$I$S(data, imageoffset, imagelength, null);
});

Clazz.newMeth(C$, 'createImage$java_awt_Component$I$I',  function (c, width, height) {
return (this.createImage$BA$I$I(null, width, height)).setComponent$java_awt_Component(c);
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (image, width, height, observer) {
return 63;
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (image, width, height, observer) {
return true;
});

Clazz.newMeth(C$, 'getVideo$S',  function (filename) {
return this.createVideo$java_nio_file_Path(Clazz.new_($I$(14,1).c$$S,[filename]).toPath$());
});

Clazz.newMeth(C$, 'getVideo$java_net_URL',  function (url) {
try {
if (url.getProtocol$() === "jar" ) {
return this.createVideo$BA($I$(3).getFileAsBytes$O(url));
}if (url.getProtocol$().equals$O("file")) return this.getVideo$S(url.getFile$());
return this.createVideo$java_nio_file_Path($I$(15,"get$java_net_URI",[url.toURI$()]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'createVideo$java_nio_file_Path',  function (path) {
return p$1.getImagekit.apply(this, []).createVideo$java_nio_file_Path(path);
});

Clazz.newMeth(C$, 'createVideo$BA',  function (bytes) {
return p$1.getImagekit.apply(this, []).createVideo$BA(bytes);
});

Clazz.newMeth(C$, 'getAudioPlayer$',  function () {
return (C$.audioPlayer == null  ? C$.audioPlayer=$I$(3).getInstance$S("swingjs.JSAudio") : C$.audioPlayer);
}, 1);

Clazz.newMeth(C$, 'playAudio$BA$javax_sound_sampled_AudioFormat',  function (data, audioFormat) {
C$.getAudioPlayer$().getAudio$BA$javax_sound_sampled_AudioFormat(data, audioFormat).play$();
}, 1);

Clazz.newMeth(C$, 'getAudioClip$java_net_URL',  function (url) {
return C$.getAudioPlayer$().getAudioClip$java_net_URL(url);
}, 1);

Clazz.newMeth(C$, 'playAudioFile$java_net_URL',  function (url) {
C$.getAudioPlayer$().getAudioFileFromURL$java_net_URL(url).play$();
}, 1);

Clazz.newMeth(C$, 'getAudioLine$javax_sound_sampled_Line_Info',  function (info) {
return C$.getAudioPlayer$().getAudioLine$javax_sound_sampled_Line_Info(info);
}, 1);

Clazz.newMeth(C$, 'getTimerQueue$',  function () {
return $I$(2).currentThread$().getThreadGroup$().秘getTimerQueue$();
}, 1);

Clazz.newMeth(C$, 'getFileFromDialog$swingjs_api_JSFileHandler$S',  function (jsFileHandler, type) {
var f=null;
{
f = function(data, fileName) { jsFileHandler.handleFileLoaded$BA$S(data, fileName) };
}
$I$(3).J2S.getFileFromDialog(f, type);
}, 1);

Clazz.newMeth(C$, 'getSystemClipboard$',  function () {
if (C$.systemClipboard == null ) C$.systemClipboard=Clazz.new_($I$(16,1).c$$S,["System"]);
return C$.systemClipboard;
});

Clazz.newMeth(C$, 'createDragSourceContextPeer$java_awt_dnd_DragGestureEvent',  function (dge) {
return null;
});

Clazz.newMeth(C$, 'getCursorName$java_awt_Cursor',  function (c) {
switch (c == null  ? 0 : c.getType$()) {
case 1:
return "crosshair";
case 3:
return "wait";
case 2:
return "text";
case 12:
return "pointer";
case 13:
return "move";
case 8:
case 9:
return "ns-resize";
case 7:
case 4:
return "nesw-resize";
case 5:
case 6:
return "nwse-resize";
case 11:
case 10:
return "ew-resize";
case -1:
return c.getName$();
case 0:
default:
return "default";
}
}, 1);

Clazz.newMeth(C$, 'getFontList$',  function () {
if (C$.hardwiredFontList == null ) C$.hardwiredFontList=Clazz.array(String, -1, ["Dialog", "SansSerif", "Serif", "Monospaced", "DialogInput"]);
return C$.hardwiredFontList;
});

Clazz.newMeth(C$, 'getFontFamily$java_awt_Font',  function (font) {
return font.getName$();
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (font) {
return font.getFontMetrics$();
});

Clazz.newMeth(C$, 'getCanvasFont$java_awt_Font',  function (font) {
var strStyle="";
if (font.isItalic$()) strStyle+="italic ";
if (font.isBold$()) strStyle+="bold ";
var family=C$.getCSSFontFamilyName$S(font.getFamily$());
font.getSize$();
return strStyle + new Float(font.getSize2D$()).toString() + "px " + family ;
}, 1);

Clazz.newMeth(C$, 'getCSSFontFamilyName$S',  function (family) {
family=family.toLowerCase$();
if (family.equals$O("sansserif") || family.equals$O("helvetica") || family.equals$O("dialog") || family.equals$O("dialoginput")  ) family="Arial";
 else if (family.equals$O("monospaced")) family="monospace";
return family;
}, 1);

Clazz.newMeth(C$, 'getDateFormat$S',  function (isoType) {
var prefix="";
var suffix="";
{
if (isoType == null) { return ("" + (new Date())).split(" (")[0];
} if (isoType.indexOf("8824") >= 0) { var d = new Date();
var x = d.toString().split(" ");
var MM = "0" + (1 + d.getMonth()); MM = MM.substring(MM.length - 2);
var dd = "0" + d.getDate(); dd = dd.substring(dd.length - 2);
return x[3] + MM + dd + x[4].replace(/\:/g,"") + x[5].substring(3,6) + "'" + x[5].substring(6,8) + "'" } if (isoType.indexOf("8601") >= 0){ var d = new Date();
var x = d.toString().split(" ");
// Firefox now doing this?
if (x.length == 1) return x;
var MM = "0" + (1 + d.getMonth()); MM = MM.substring(MM.length - 2);
var dd = "0" + d.getDate(); dd = dd.substring(dd.length - 2);
return x[3] + '-' + MM + '-' + dd + 'T' + x[4] }
}
}, 1);

Clazz.newMeth(C$, 'beep$',  function () {
System.out.println$S("JSToolkit.beep");
});

Clazz.newMeth(C$, 'getPrintJob$java_awt_JSFrame$S$java_util_Properties',  function (frame, jobtitle, props) {
var job=$I$(3).getInstance$S("swingjs.JSPrintJob");
job.setProperties$S$java_util_Properties(jobtitle, props);
return job;
});

Clazz.newMeth(C$, 'getPrintJob$java_awt_Frame$S$java_util_Properties',  function (frame, jobtitle, props) {
var job=$I$(3).getInstance$S("swingjs.JSPrintJob");
job.setProperties$S$java_util_Properties(jobtitle, props);
return job;
});

Clazz.newMeth(C$, 'getPrintJob$java_awt_JSFrame$S$java_awt_JobAttributes$java_awt_PageAttributes',  function (frame, jobtitle, jobAttributes, pageAttributes) {
var job=$I$(3).getInstance$S("swingjs.JSPrintJob");
job.setAttributes$S$java_awt_JobAttributes$java_awt_PageAttributes(jobtitle, jobAttributes, pageAttributes);
return job;
});

Clazz.newMeth(C$, 'getPrintJob$java_awt_Frame$S$java_awt_JobAttributes$java_awt_PageAttributes',  function (frame, jobtitle, jobAttributes, pageAttributes) {
var job=$I$(3).getInstance$S("swingjs.JSPrintJob");
job.setAttributes$S$java_awt_JobAttributes$java_awt_PageAttributes(jobtitle, jobAttributes, pageAttributes);
return job;
});

Clazz.newMeth(C$, 'mapInputMethodHighlight$java_awt_im_InputMethodHighlight',  function (hl) {
$I$(3).notImplemented$S(null);
return null;
});

Clazz.newMeth(C$, 'getFocusPeer$',  function () {
return (C$.focusManager == null  ? C$.focusManager=Clazz.new_($I$(17,1)) : C$.focusManager);
}, 1);

Clazz.newMeth(C$, 'hasFocus$java_awt_Component',  function (c) {
var ui=C$.getUI$java_awt_Component$Z(c, false);
return (ui != null  && !ui.isNull  && ui.hasFocus$() );
}, 1);

Clazz.newMeth(C$, 'getKeyboardFocusManagerPeer$',  function () {
return C$.getFocusPeer$();
});

Clazz.newMeth(C$, 'getCurrentFocusOwner$O',  function (related) {
return (C$.getFocusPeer$()).getCurrentFocusOwner$O(related);
}, 1);

Clazz.newMeth(C$, 'consumeEvent$O',  function (e) {
var jqevent=null;
if (Clazz.instanceOf(e, "java.awt.event.InputEvent")) {
jqevent=e.bdata && e.bdata.jqevent ||null;
} else {
jqevent=e;
}if (jqevent == null ) return;

jqevent.stopPropagation();
jqevent.preventDefault();
}, 1);

Clazz.newMeth(C$, 'getMouseLocation$',  function () {
return $I$(3).J2S.getMousePosition(Clazz.new_($I$(18,1)));
}, 1);

Clazz.newMeth(C$, 'isOverWritten$javax_swing_JComponent$S',  function (jc, method) {
var s=jc[method].exClazz.__CLASS_NAME__ ||"";
return s.indexOf$S("java") != 0 && s.indexOf$S("swingjs") != 0 ;
}, 1);

Clazz.newMeth(C$, 'checkJ2SFlag$S',  function (flag) {
return (J2S[flag] ||false);
}, 1);

Clazz.newMeth(C$, 'getMenuShortcutKeyMask$',  function () {
return (C$.isMac ? 4 : 2);
});

Clazz.newMeth(C$, 'setThreadForViewer$swingjs_JSFrameViewer',  function (viewer) {
if (viewer != null  && viewer.appletViewer != null   && viewer.appletViewer !== $I$(2).currentThread$().getThreadGroup$().秘appletViewer  ) {
C$.getCurrentThread$javajs_util_JSThread(viewer.appletViewer.myThread);
}}, 1);

C$.$static$=function(){C$.$static$=0;
{
{
C$.isMac = (J2S.featureDetection.os == "mac");
C$.isLinux = (J2S.featureDetection.os == "linux");
C$.isUnix = (J2S.featureDetection.os == "unix");
C$.isWin = (J2S.featureDetection.os == "win");
}
};
C$.SwingJS=SwingJS ||null;
C$.dispatchID=0;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
