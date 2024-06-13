(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSImage','swingjs.JSUtil','swingjs.api.Interface','swingjs.api.js.DOMNode','java.awt.image.BufferedImage','javax.swing.ImageIcon','swingjs.JSGraphics2D','swingjs.api.js.HTML5Canvas']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSImagekit", null, null, 'java.awt.image.ImageConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height','hints','x','y','off','scansize'],'O',['props','java.util.Hashtable','colorModel','java.awt.image.ColorModel','pixels','int[]','jsimage','swingjs.JSImage','pixelBytes','byte[]']]]

Clazz.newMeth(C$, 'createImageFromBytes$BA$I$I$S',  function (data, imageoffset, imagelength, name) {
return C$.createImageFromBytesStatic$BA$I$I$S$I(data, imageoffset, imagelength, name, -1);
});

Clazz.newMeth(C$, 'imageComplete$I',  function (status) {
var m;
if (this.pixels != null ) this.jsimage=Clazz.new_($I$(1,1).c$$IA$I$I$S$I,[this.pixels, this.width, this.height, null, 2]);
 else this.jsimage=Clazz.new_($I$(1,1).c$$BA$I$I$S$I,[this.pixelBytes, this.width, this.height, null, 2]);
});

Clazz.newMeth(C$, 'getCreatedImage$',  function () {
return this.jsimage;
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (width, height) {
this.width=width;
this.height=height;
});

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
this.props=props;
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel',  function (model) {
this.colorModel=model;
});

Clazz.newMeth(C$, 'setHints$I',  function (hintflags) {
this.hints=hintflags;
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
this.pixelBytes=null;
if (this.pixels == null ) {
this.colorModel=model;
this.pixels=Clazz.array(Integer.TYPE, [this.width * this.height]);
}for (var n=0, j=y; n < h; n++, j++) {
for (var m=0, i=x; m < w; m++, i++) {
var k=i + j * this.width;
this.pixels[k]=pixels[(j - y) * scansize + (i - x) + off];
}
}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
this.colorModel=model;
this.width=w;
this.height=h;
this.x=x;
this.y=y;
this.off=off;
this.scansize=scansize;
this.pixelBytes=pixels;
this.pixels=null;
$I$(2).notImplemented$S("byte-based image pixels");
});

Clazz.newMeth(C$, 'createImageFromBytesStatic$BA$I$I$S$I',  function (data, imageoffset, imagelength, name, imageType) {
var w=0;
var h=0;
var argb=null;
var b=null;
var type=null;
if (data == null ) {
w=imageoffset;
h=imagelength;
} else if (imageType == 4) {
b=data;
w=imageoffset;
h=imagelength;
type="video";
} else {
if (imagelength < 0) imagelength=data.length;
var n=imagelength - imageoffset;
System.arraycopy$O$I$O$I$I(data, imageoffset, b=Clazz.array(Byte.TYPE, [n]), 0, n);
if (b.length < 10) return null;
switch (imageType == -1 ? C$.getSourceType$BA(b) : imageType) {
case 3:
var ie=$I$(3).getInstance$S$Z("javajs.img.BMPDecoder", true);
var o=ie.decodeWindowsBMP$BA(b);
if (o == null  || o[0] == null  ) return null;
w=(o[1]).intValue$();
h=(o[2]).intValue$();
argb=o[0];
break;
case 1:
var pt=2;
while (true){
switch (C$.getInt$BA$I(b, pt)) {
case 49407:
case 49919:
h=C$.getIntRev$BA$I(b, pt + 5);
w=C$.getIntRev$BA$I(b, pt + 7);
pt=0;
break;
}
if (pt == 0) break;
pt+=2 + C$.getIntRev$BA$I(b, pt + 2);
}
type="jpeg";
break;
case 0:
w=C$.getLong$BA$I(b, 16);
h=C$.getLong$BA$I(b, 20);
type="png";
break;
case 2:
w=C$.getInt$BA$I(b, 6);
h=C$.getInt$BA$I(b, 8);
type="gif";
break;
case -1:
System.out.println$S("JSImagekit: Unknown image type: " + b[0] + " " + b[1] + " " + b[2] + " " + b[3] );
data=null;
break;
}
}if (w == 0 || h == 0 ) return null;
var jsimage=Clazz.new_([argb, w, h, name, imageType == 4 ? -2147483648 : 2],$I$(1,1).c$$IA$I$I$S$I);
if (data != null  && argb == null  ) jsimage.setImageNode$swingjs_JSFileSystem_JSPath$BA$S(null, b, type);
return jsimage;
}, 1);

Clazz.newMeth(C$, 'getLong$BA$I',  function (b, pt) {
return ((b[pt] & 255) << 24) + ((b[pt + 1] & 255) << 16) + ((b[pt + 2] & 255) << 8) + (b[pt + 3] & 255) ;
}, 1);

Clazz.newMeth(C$, 'getInt$BA$I',  function (b, pt) {
return (b[pt] & 255) + ((b[pt + 1] & 255) << 8);
}, 1);

Clazz.newMeth(C$, 'getIntRev$BA$I',  function (b, pt) {
return ((b[pt] & 255) << 8) + (b[pt + 1] & 255);
}, 1);

Clazz.newMeth(C$, 'getSourceType$BA',  function (b) {
return (b == null  ? -1 : (b[0] & 255) == 137 && b[1] == 80   && b[2] == 78   && b[3] == 71   ? 0 : (b[0] & 255) == 255 && (b[1] & 255) == 216  ? 1 : b[0] == 71  && b[1] == 73   && b[2] == 70   ? 2 : b[0] == 66  && b[1] == 77   ? 3 : -1);
}, 1);

Clazz.newMeth(C$, 'createImageIcon$java_awt_Component$javax_swing_Icon$S',  function (c, icon, id) {
var width=icon.getIconWidth$();
var height=icon.getIconHeight$();
var canvas=$I$(4).getElement(id);
var imgIcon;
var img;
var g;
if (canvas != null  && (imgIcon=(icon).秘tempIcon) != null   && $I$(4).getAttrInt(canvas, "width") == width  && $I$(4).getAttrInt(canvas, "height") == height ) {
img=imgIcon.getImage$();
g=img.秘g;
} else {
img=Clazz.new_($I$(5,1).c$$I$I$I,[width, height, -6]);
g=img.createGraphics$();
imgIcon=Clazz.new_($I$(6,1).c$$java_awt_Image$S,[img, "paintedIcon"]);
}icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, 0, 0);
g.dispose$();
(icon).秘tempIcon=imgIcon;
return imgIcon;
}, 1);

Clazz.newMeth(C$, 'createCanvasGraphics$I$I$S',  function (width, height, id) {
return Clazz.new_([$I$(8).createCanvas(width, height, id)],$I$(7,1).c$$O);
}, 1);

Clazz.newMeth(C$, 'createVideo$java_nio_file_Path',  function (path) {
var bytes=$I$(2).getBytes$O(path);
if (bytes == null ) bytes=$I$(2,"getCachedFileData$S$Z",[path.toString(), true]);
if (bytes != null ) $I$(2).setFileBytesStatic$O$O(path, bytes);
var jsimage=Clazz.new_([bytes, 1, 1, path.toString(), -2147483648],$I$(1,1).c$$BA$I$I$S$I);
jsimage.setImageNode$swingjs_JSFileSystem_JSPath$BA$S(path, bytes, "video");
return jsimage;
});

Clazz.newMeth(C$, 'createVideo$BA',  function (bytes) {
return C$.createImageFromBytesStatic$BA$I$I$S$I(bytes, 1, 1, null, 4);
});

Clazz.newMeth(C$, 'getDataBlob$BA$S',  function (b, type) {
if (type == null ) return (URL.createObjectURL(new Blob([b])) ||null);
return (URL.createObjectURL(new Blob([b], {type:type})) ||null);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
