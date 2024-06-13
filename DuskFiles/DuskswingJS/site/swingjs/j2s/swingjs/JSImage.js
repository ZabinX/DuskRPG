(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'javajs.util.Base64','swingjs.api.js.DOMNode','java.io.File','swingjs.JSUtil','swingjs.JSImagekit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSImage", null, 'java.awt.image.BufferedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['src']]]

Clazz.newMeth(C$, 'c$$IA$I$I$S$I',  function (argb, width, height, src, type) {
;C$.superclazz.c$$I$I$I.apply(this,[width, height, type]);C$.$init$.apply(this);
var m;
this.src=src;
if (argb != null ) this.秘setPixels$IA(argb);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$S$I',  function (pixelBytes, width, height, src, type) {
;C$.superclazz.c$$I$I$I.apply(this,[width, height, type]);C$.$init$.apply(this);
this.src=src;
if (pixelBytes != null ) this.秘setPixels$IA(pixelBytes);
}, 1);

Clazz.newMeth(C$, 'setImageNode$swingjs_JSFileSystem_JSPath$BA$S',  function (source, b, type) {
var img=null;
if (type === "video" ) {
img=this.injectVideo$swingjs_api_js_DOMNode$swingjs_JSFileSystem_JSPath$BA(null, source, b);
} else {
var dataurl="data:image/" + type + ";base64," + $I$(1).getBase64$BA(b).toString() ;

img = new Image(this.width, this.height); img.src = dataurl;
}this.秘setImageNode$O$Z(img, true);
});

Clazz.newMeth(C$, 'injectVideo$swingjs_api_js_DOMNode$swingjs_JSFileSystem_JSPath$BA',  function (img, source, b) {
try {
if (img == null ) img=$I$(2,"createElement",["video", $I$(3).createTempFile$S$S("video_", "").getName$()]);
var src=(source == null  ? null : $I$(4,"getWebPathFor$S",[source.toString()]));
if (b == null  && source != null  ) b=source.秘bytes;
System.out.println$S("JSImage video " + src + " " + (b == null  ? 0 : b.length) );
var node=img;
var r=((P$.JSImage$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSImage$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var w=0;
var h=0;
var n=this.$finals$.node;

w = n.width = n.videoWidth; h = n.height = n.videoHeight;
var ui=$I$(2).getAttr(this.$finals$.node, "data-ui");
System.out.println$S("JSImage " + (ui == null  ? "video" : ui.getId$()) + " " + w + "x" + h );
this.b$['java.awt.image.BufferedImage'].秘init$I$I$I.apply(this.b$['java.awt.image.BufferedImage'], [w, h, -6]);
if (ui != null  && Clazz.instanceOf(ui.jc, "javax.swing.JLabel") ) {
var label=ui.jc;
w=label.getWidth$();
h=label.getHeight$();
n.setAttribute("width", w + "");
n.setAttribute("height", h + "");
ui.setTainted$();
var icon=label.getIcon$();
if (icon != null ) {
icon.秘setIconSize$I$I(w, h);
}}});
})()
), Clazz.new_(P$.JSImage$1.$init$,[this, {node:node}]));
if (b != null ) src=$I$(5).getDataBlob$BA$S(b, "video/mp4");

img.crossOrigin = "Anonymous";
img.onerror = function(e) { img.err = e};
img.src = src;
img.onloadedmetadata = function(){ r.run$()};
img.load();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return img;
});

Clazz.newMeth(C$, 'setComponent$java_awt_Component',  function (c) {
this.秘component=c;
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
