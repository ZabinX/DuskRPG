(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'swingjs.JSUtil','java.awt.RenderingHints','java.util.Hashtable','java.awt.geom.AffineTransform','java.awt.BasicStroke','java.awt.Color','swingjs.JSToolkit','swingjs.api.js.HTML5CanvasContext2D','swingjs.api.js.DOMNode','java.awt.Rectangle','swingjs.JSImagekit',['java.awt.geom.RoundRectangle2D','.Double'],'java.awt.Font','java.awt.Toolkit','java.awt.AlphaComposite','swingjs.JSGraphicsCompositor']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSGraphics2D", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transform=Clazz.new_($I$(4,1));
this.unclipped=false;
},1);

C$.$fields$=[['Z',['isShifted','inPath','thinLine','clearing','unclipped'],'I',['constrainX','constrainY','width','height','initialState','lastx','lasty','nx','ny'],'O',['canvas','swingjs.api.js.HTML5Canvas','ctx','swingjs.api.js.HTML5CanvasContext2D','gc','java.awt.GraphicsConfiguration','currentStroke','java.awt.BasicStroke','currentClip','java.lang.Object','alphaComposite','java.awt.AlphaComposite','font','java.awt.Font','hints','java.awt.RenderingHints','transform','java.awt.geom.AffineTransform','backgroundColor','java.awt.Color','fontTransform','java.awt.geom.AffineTransform','image','java.awt.image.BufferedImage','foregroundColor','java.awt.Color','rrect','java.awt.geom.RoundRectangle2D.Double','imageData','swingjs.api.js.HTML5CanvasContext2D.ImageData','buf8','int[]','shader','java.awt.Paint','clearColorSaved','java.awt.Color']]
,['Z',['debugClip'],'F',['pixelRatio'],'O',['aa','java.awt.RenderingHints','pts','double[]','nodash','int[]','nohints','java.awt.RenderingHints']]]

Clazz.newMeth(C$, 'getContext2D$',  function () {
return this.ctx;
});

Clazz.newMeth(C$, 'c$$O',  function (canvas) {
;C$.$init$.apply(this);
this.canvas=canvas;
this.ctx=this.canvas.getContext("2d");
this.setStroke$java_awt_Stroke(Clazz.new_($I$(5,1)));
{
this.gc = SwingJS; this.width = canvas.width; this.height = canvas.height;
}
this.setAntialias$Z(true);
p$1.clipPriv$I$I$I$I.apply(this, [0, 0, this.width, this.height]);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_api_js_HTML5Canvas$java_awt_image_BufferedImage',  function (canvas, image) {
C$.c$$O.apply(this, [canvas]);
this.image=image;
}, 1);

Clazz.newMeth(C$, 'setAntialias$Z',  function (tf) {

this.ctx.mozImageSmoothingEnabled = false;
this.ctx.webkitImageSmoothingEnabled = false;
this.ctx.msImageSmoothingEnabled = false;
this.ctx.imageSmoothingEnabled = false;
this.isShifted=tf;
});

Clazz.newMeth(C$, 'getDeviceConfiguration$',  function () {
return this.gc;
});

Clazz.newMeth(C$, 'drawLine$I$I$I$I',  function (x0, y0, x1, y1) {
var inPath=this.inPath;
if (!inPath) {
if (x0 == x1 && y0 == y1 ) {
this.ctx.fillRect(x0, y0, 1, 1);
return;
}this.doStroke$Z(true);
}this.ctx.moveTo(x0, y0);
this.ctx.lineTo(x1, y1);
if (!inPath) this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'drawOval$I$I$I$I',  function (left, top, width, height) {
this.doStroke$Z(true);
if (width == height) p$1.doCirc$I$I$I.apply(this, [left, top, width]);
 else p$1.doArc$D$D$D$D$D$D$I.apply(this, [left, top, width, height, 0, 360, 0]);
this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'fillOval$I$I$I$I',  function (left, top, width, height) {
this.ctx.beginPath();
if (width == height) p$1.doCirc$I$I$I.apply(this, [left, top, width]);
 else p$1.doArc$D$D$D$D$D$D$I.apply(this, [left, top, width, height, 0, 360, 1]);
this.ctx.fill();
});

Clazz.newMeth(C$, 'doCirc$I$I$I',  function (left, top, diameter) {
if (diameter <= 0) return;
var r=diameter / 2.0;
this.ctx.arc(left + r, top + r, r, 0, 6.283185307179586, false);
}, p$1);

Clazz.newMeth(C$, 'drawArc$I$I$I$I$I$I',  function (x, y, width, height, startAngle, arcAngle) {
this.doStroke$Z(true);
p$1.doArc$D$D$D$D$D$D$I.apply(this, [x, y, width, height, startAngle, arcAngle, 0]);
this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'fillArc$I$I$I$I$I$I',  function (centerX, centerY, width, height, startAngle, arcAngle) {
this.ctx.beginPath();
p$1.doArc$D$D$D$D$D$D$I.apply(this, [centerX, centerY, width, height, startAngle, arcAngle, 1]);
this.ctx.fill();
});

Clazz.newMeth(C$, 'doArc$D$D$D$D$D$D$I',  function (x, y, width, height, startAngle, arcAngle, mode) {
if (width <= 0  || height <= 0  ) return;
this.ctx.save();
{
if (arcAngle < 0 ) {
startAngle+=arcAngle;
arcAngle=-arcAngle;
}this.ctx.translate(x, y);
this.ctx.scale(width / 2, height / 2);
this.ctx.beginPath();
this.ctx.arc(1, 1, 1, p$1.toRad$D.apply(this, [360 - startAngle]), p$1.toRad$D.apply(this, [360 - arcAngle - startAngle ]), true);
if (mode == 1) this.ctx.lineTo(1, 1);
}this.ctx.restore();
}, p$1);

Clazz.newMeth(C$, 'toRad$D',  function (a) {
return a * (0.017453292519943295);
}, p$1);

Clazz.newMeth(C$, 'clearRect$I$I$I$I',  function (x, y, width, height) {
p$1.clearRectPriv$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'clearRectPriv$I$I$I$I',  function (x, y, w, h) {
this.ctx.clearRect(x, y, w, h);
if (!this.clearing) p$1.setGraphicsColor$java_awt_Color.apply(this, [this.backgroundColor == null  ? $I$(6).WHITE : this.backgroundColor]);
this.fillRect$I$I$I$I(x, y, w, h);
if (!this.clearing) p$1.setGraphicsColor$java_awt_Color.apply(this, [this.foregroundColor]);
}, p$1);

Clazz.newMeth(C$, 'drawPolygon$java_awt_Polygon',  function (p) {
p$1.doPoly$IA$IA$I$I.apply(this, [p.xpoints, p.ypoints, p.npoints, 1]);
});

Clazz.newMeth(C$, 'drawPolygon$IA$IA$I',  function (axPoints, ayPoints, nPoints) {
p$1.doPoly$IA$IA$I$I.apply(this, [axPoints, ayPoints, nPoints, 1]);
});

Clazz.newMeth(C$, 'drawPolyline$IA$IA$I',  function (xPoints, yPoints, nPoints) {
p$1.doPoly$IA$IA$I$I.apply(this, [xPoints, yPoints, nPoints, 0]);
});

Clazz.newMeth(C$, 'fillPolygon$java_awt_Polygon',  function (p) {
p$1.doPoly$IA$IA$I$I.apply(this, [p.xpoints, p.ypoints, p.npoints, 2]);
});

Clazz.newMeth(C$, 'fillPolygon$IA$IA$I',  function (axPoints, ayPoints, nPoints) {
p$1.doPoly$IA$IA$I$I.apply(this, [axPoints, ayPoints, nPoints, 2]);
});

Clazz.newMeth(C$, 'doPoly$IA$IA$I$I',  function (axPoints, ayPoints, nPoints, mode) {
this.ctx.beginPath();
if (mode != 2 && !this.thinLine ) this.ctx.translate(0.5, 0.5);
this.ctx.moveTo(axPoints[0], ayPoints[0]);
for (var i=1; i < nPoints; i++) {
this.ctx.lineTo(axPoints[i], ayPoints[i]);
}
if (mode != 0) this.ctx.lineTo(axPoints[0], ayPoints[0]);
if (mode != 2) {
this.ctx.stroke();
if (!this.thinLine) this.ctx.translate(-0.5, -0.5);
} else {
this.ctx.fill();
}}, p$1);

Clazz.newMeth(C$, 'drawRect$I$I$I$I',  function (x, y, width, height) {
if (width <= 0 || height <= 0 ) return;
if (!this.thinLine) this.ctx.translate(0.5, 0.5);
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.stroke();
if (!this.thinLine) this.ctx.translate(-0.5, -0.5);
});

Clazz.newMeth(C$, 'fillRect$I$I$I$I',  function (x, y, width, height) {
if (width <= 0 || height <= 0 ) return;
this.ctx.fillRect(x, y, width, height);
});

Clazz.newMeth(C$, 'draw3DRect$I$I$I$I$Z',  function (x, y, width, height, raised) {
p$1.do3DRect$I$I$I$I$Z$I.apply(this, [x, y, width, height, raised, 1]);
});

Clazz.newMeth(C$, 'fill3DRect$I$I$I$I$Z',  function (x, y, width, height, raised) {
p$1.do3DRect$I$I$I$I$Z$I.apply(this, [x, y, width, height, raised, 2]);
});

Clazz.newMeth(C$, 'do3DRect$I$I$I$I$Z$I',  function (x, y, width, height, raised, mode) {
if (width <= 0 || height <= 0 ) return;
var p=this.getPaint$();
var c=this.getColor$();
var brighter=c.brighter$();
var darker=c.darker$();
if (!raised) {
this.setColor$java_awt_Color(darker);
} else if (p !== c ) {
this.setColor$java_awt_Color(c);
}if (mode == 2) this.fillRect$I$I$I$I(x + 1, y + 1, width - 2, height - 2);
this.setColor$java_awt_Color(raised ? brighter : darker);
this.fillRect$I$I$I$I(x, y, 1, height);
this.fillRect$I$I$I$I(x + 1, y, width - 2, 1);
this.setColor$java_awt_Color(raised ? darker : brighter);
this.fillRect$I$I$I$I(x + 1, y + height - 1, width - 1, 1);
this.fillRect$I$I$I$I(x + width - 1, y, 1, height - 1);
this.setPaint$java_awt_Paint(p);
}, p$1);

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
if (font === this.font ) return;
this.font=font;
this.fontTransform=null;
if (font != null ) {
this.fontTransform=font.秘getRawTransformOrNull$();
this.ctx.font=$I$(7).getCanvasFont$java_awt_Font(font);
}});

Clazz.newMeth(C$, 'setStrokeBold$Z',  function (tf) {
p$1.setLineWidth$D.apply(this, [tf ? 2.0 : 1.0]);
});

Clazz.newMeth(C$, 'setLineWidth$D',  function (d) {
this.ctx.lineWidth=d;
}, p$1);

Clazz.newMeth(C$, 'canDoLineTo$',  function () {
return true;
});

Clazz.newMeth(C$, 'doStroke$Z',  function (isBegin) {
this.inPath=isBegin;
if (isBegin && !this.thinLine ) {
this.ctx.translate(0.5, 0.5);
this.ctx.beginPath();
} else {
this.ctx.stroke();
if (!this.thinLine) this.ctx.translate(-0.5, -0.5);
}});

Clazz.newMeth(C$, 'lineTo$I$I',  function (x2, y2) {
if (this.inPath) {
this.ctx.lineTo(x2, y2);
} else {
if (!this.thinLine) this.ctx.translate(0.5, 0.5);
this.ctx.lineTo(x2, y2);
if (!this.thinLine) this.ctx.translate(-0.5, -0.5);
}});

Clazz.newMeth(C$, 'clip$java_awt_Shape',  function (s) {
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [s]);
this.currentClip=s;
this.ctx.clip();
});

Clazz.newMeth(C$, 'draw$java_awt_Shape',  function (s) {
this.ctx.save();
this.doStroke$Z(true);
p$1.doShape$java_awt_Shape.apply(this, [s]);
this.doStroke$Z(false);
this.ctx.restore();
});

Clazz.newMeth(C$, 'drawText$CA$java_awt_Font$F$F',  function (chars, font, x, y) {
this.ctx.save();
var f=this.getFont$();
this.setFont$java_awt_Font(font);
var tx=this.fontTransform;
if (tx != null  && !tx.isIdentity$() ) {
this.ctx.transform(tx.getScaleX$(), tx.getShearX$(), tx.getTranslateX$(), tx.getShearY$(), tx.getScaleX$(), tx.getTranslateY$());
}p$1.fillText$S$F$F.apply(this, [chars.join("") ||null, x, y]);
this.setFont$java_awt_Font(f);
this.ctx.restore();
});

Clazz.newMeth(C$, 'drawGlyphVector$java_awt_font_GlyphVector$F$F',  function (gv, x, y) {
$I$(1).notImplemented$S(null);
});

Clazz.newMeth(C$, 'doShape$java_awt_Shape',  function (s) {
var pi=s.getPathIterator$java_awt_geom_AffineTransform(null);
while (!pi.isDone$()){
switch (pi.currentSegment$DA(C$.pts)) {
case 0:
this.ctx.moveTo(C$.pts[0], C$.pts[1]);
break;
case 1:
this.ctx.lineTo(C$.pts[0], C$.pts[1]);
break;
case 2:
this.ctx.quadraticCurveTo(C$.pts[0], C$.pts[1], C$.pts[2], C$.pts[3]);
break;
case 3:
this.ctx.bezierCurveTo(C$.pts[0], C$.pts[1], C$.pts[2], C$.pts[3], C$.pts[4], C$.pts[5]);
break;
case 4:
this.ctx.closePath();
break;
}
pi.next$();
}
return pi.getWindingRule$();
}, p$1);

Clazz.newMeth(C$, 'fill$java_awt_Shape',  function (s) {
this.ctx.save();
if (this.shader != null ) {
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [s]);
this.ctx.clip();
if (Clazz.instanceOf(this.shader, "java.awt.GradientPaint")) {
var p=this.shader;
var p1=p.getPoint1$();
var p2=p.getPoint2$();
$I$(8,"createLinearGradient",[this.ctx, p1, p2, $I$(7,"getCSSColor$java_awt_Color$Z",[p.getColor1$(), true]), $I$(7,"getCSSColor$java_awt_Color$Z",[p.getColor2$(), true])]);
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [s]);
this.ctx.fill();
} else {
var yourRect=s.getBounds2D$();
var sx=this.transform.getScaleX$();
var sy=this.transform.getScaleY$();
var w=Math.ceil(sx * yourRect.getWidth$());
var h=Math.ceil(sy * yourRect.getHeight$());
var shaderCanvas=this.shader.秘canvas ||null;
if (shaderCanvas == null  || $I$(9).getWidth(shaderCanvas) < w   || $I$(9).getHeight(shaderCanvas) < h  ) {
var myRect=Clazz.new_([0, 0, (w|0), (h|0)],$I$(10,1).c$$I$I$I$I);
var g2=$I$(11,"createCanvasGraphics$I$I$S",[(w|0), (h|0), null]);
if (C$.aa == null ) C$.aa=Clazz.new_([$I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON],$I$(2,1).c$$java_awt_RenderingHints_Key$O);
var raster=this.shader.createContext$java_awt_image_ColorModel$java_awt_Rectangle$java_awt_geom_Rectangle2D$java_awt_geom_AffineTransform$java_awt_RenderingHints(null, myRect, yourRect, this.transform, C$.aa).getRaster$I$I$I$I(0, 0, this.width, this.height);
p$1.getBuf8$I$I$I$I.apply(g2, [0, 0, (w|0), (h|0)]);
raster.getPixels$I$I$I$I$IA(0, 0, (w|0), (h|0), g2.buf8);
g2.ctx.putImageData(g2.imageData, 0, 0);
shaderCanvas=g2.canvas;
g2.dispose$();
}
this.shader.秘canvas = shaderCanvas; var a = this.ctx.globalCompositeOperation;
this.ctx.globalCompositionOperation = "source-atop";
this.ctx.drawImage(shaderCanvas, 0, 0, (w|0), (h|0), yourRect.getX$(), yourRect.getY$(), yourRect.getWidth$(), yourRect.getHeight$());

this.ctx.globalCompositeOperation = a;
}} else {
this.ctx.beginPath();
var winding=p$1.doShape$java_awt_Shape.apply(this, [s]);
if (winding == 0) {
this.ctx.fill("evenodd");
} else {
this.ctx.fill();
}}this.ctx.restore();
});

Clazz.newMeth(C$, 'drawRoundRect$I$I$I$I$I$I',  function (x, y, width, height, arcWidth, arcHeight) {
p$1.doRoundRect$I$I$I$I$I$I$I.apply(this, [x, y, width, height, arcWidth, arcHeight, 1]);
});

Clazz.newMeth(C$, 'fillRoundRect$I$I$I$I$I$I',  function (x, y, width, height, arcWidth, arcHeight) {
p$1.doRoundRect$I$I$I$I$I$I$I.apply(this, [x, y, width, height, arcWidth, arcHeight, 2]);
});

Clazz.newMeth(C$, 'doRoundRect$I$I$I$I$I$I$I',  function (x, y, w, h, aw, ah, mode) {
if (this.rrect == null  || this.rrect.getX$() != x   || this.rrect.getY$() != y   || this.rrect.getWidth$() != w   || this.rrect.getHeight$() != h   || this.rrect.getArcWidth$() != aw   || this.rrect.getArcHeight$() != ah  ) {
this.rrect=Clazz.new_($I$(12,1).c$$D$D$D$D$D$D,[x, y, w, h, aw, ah]);
}if (mode == 2) this.fill$java_awt_Shape(this.rrect);
 else this.draw$java_awt_Shape(this.rrect);
}, p$1);

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (img, x, y, background, observer) {
$I$(1).notImplemented$S("transparent image pixel background fill is not supported in SwingJS");
return this.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img, x, y, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, x, y, observer) {
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, x, y, img.getWidth$java_awt_image_ImageObserver(null), img.getHeight$java_awt_image_ImageObserver(null), observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (img, x, y, width, height, bgcolor, observer) {
$I$(1).notImplemented$S("transparent image pixel background fill is not supported in SwingJS");
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, x, y, width, height, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver',  function (img, x, y, width, height, observer) {
if (width <= 0 || height <= 0 ) return true;
if (img != null ) {
var imgNode=(img).秘getImageNode$I(0);
if (imgNode == null ) {
if (width != img.getWidth$java_awt_image_ImageObserver(null) || height != img.getHeight$java_awt_image_ImageObserver(null) ) {
this.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img, x, y, x + width, y + width, 0, 0, img.getWidth$java_awt_image_ImageObserver(null), img.getHeight$java_awt_image_ImageObserver(null), observer);
return true;
}p$1.drawImagePriv$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver.apply(this, [img, x, y, width, height, observer]);
} else {
this.ctx.drawImage(imgNode, x, y, width, height);
}if (observer != null ) p$1.observe$java_awt_Image$java_awt_image_ImageObserver$Z.apply(this, [img, observer, imgNode != null ]);
}return true;
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, bgcolor, observer) {
$I$(1).notImplemented$S("transparent image pixel background fill is not supported in SwingJS");
return this.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver',  function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, observer) {
if (img != null ) {
var bytes=null;
var imgNode=(img).秘getImageNode$I(0);
if (imgNode == null ) {
if (sx2 - sx1 != dx2 - dx1 || sy2 - sy1 != dy2 - dy1  || sx1 != 0  || sx2 != img.getWidth$java_awt_image_ImageObserver(null)  || sy1 != 0  || sy2 != img.getHeight$java_awt_image_ImageObserver(null) ) {
imgNode=(img).秘getImageNode$I(2);
}}if (imgNode != null ) {
this.ctx.drawImage(imgNode, sx1, sy1, sx2 - sx1, sy2 - sy1, dx1, dy1, dx2 - dx1, dy2 - dy1);
}if (observer != null ) p$1.observe$java_awt_Image$java_awt_image_ImageObserver$Z.apply(this, [img, observer, imgNode != null ]);
}return true;
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver',  function (img, xform, obs) {
return p$1.drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver.apply(this, [img, xform, obs]);
});

Clazz.newMeth(C$, 'drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform',  function (img, xform) {
p$1.drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver.apply(this, [img, xform, null]);
});

Clazz.newMeth(C$, 'drawRenderableImage$java_awt_image_renderable_RenderableImage$java_awt_geom_AffineTransform',  function (img, xform) {
p$1.drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver.apply(this, [img, xform, null]);
});

Clazz.newMeth(C$, 'drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver',  function (img, xform, obs) {
if (xform == null  || xform.isIdentity$() ) {
return this.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img, 0, 0, obs);
}this.ctx.save();
p$1.transformCTX$java_awt_geom_AffineTransform.apply(this, [xform]);
var ret=this.drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(img, 0, 0, obs);
this.ctx.restore();
return ret;
}, p$1);

Clazz.newMeth(C$, 'drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, x, y, observer) {
return (img == null  ? true : p$1.drawImagePriv$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver.apply(this, [img, x, y, img.getWidth$java_awt_image_ImageObserver(observer), img.getHeight$java_awt_image_ImageObserver(observer), observer]));
});

Clazz.newMeth(C$, 'drawImagePriv$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver',  function (img, x, y, width, height, observer) {
var m=$I$(8).setMatrix(this.ctx, this.transform);
var isToSelf=(this === (img).秘g );
var isOpaque=(img).秘isOpaque$();
var pixels=(C$.isTranslationOnly$DA(m) && !p$1.isClipped$I$I$I$I.apply(this, [x, y, width, height])  ? (img).get秘pixFromRaster$() : null);
var imgNode=null;
if (pixels == null ) {
imgNode=(img === observer  ? this.canvas : (img).秘getImageNode$I(1));
if (imgNode != null ) this.ctx.drawImage(imgNode, x, y, width, height);
} else {
var isPerPixel=(pixels.length == width * height);
if (!isOpaque) this.buf8=null;
x=(x+(m[4])|0);
y=(y+(m[5])|0);
p$1.getBuf8$I$I$I$I.apply(this, [x, y, width, height]);
if (isPerPixel) {
for (var pt=0, i=0, n=Math.min((this.buf8.length/4|0), pixels.length); i < n; i++) {
var argb=pixels[i];
if (!isToSelf && !isOpaque && (argb & -16777216) != -16777216  ) {
pt+=4;
} else {
this.buf8[pt++]=(argb >> 16) & 255;
this.buf8[pt++]=(argb >> 8) & 255;
this.buf8[pt++]=argb & 255;
this.buf8[pt++]=(isOpaque ? 255 : (argb >> 24) & 255);
}}
} else if (isOpaque) {
for (var i=0, n=Math.min(this.buf8.length, pixels.length); i < n; i++) {
this.buf8[i]=pixels[i++] & 255;
this.buf8[i]=pixels[i++] & 255;
this.buf8[i]=pixels[i++] & 255;
this.buf8[i]=255;
}
} else if (isToSelf) {
for (var i=0, n=Math.min(this.buf8.length, pixels.length); i < n; i++) {
this.buf8[i]=pixels[i] & 255;
}
} else {
for (var i=0, n=Math.min(this.buf8.length, pixels.length); i < n; i++) {
if ((i % 4) == 0 && (pixels[i + 3] & 255) != 255 ) {
i+=3;
} else {
this.buf8[i]=pixels[i] & 255;
}}
}this.ctx.putImageData(this.imageData, x, y);
}if (observer != null ) p$1.observe$java_awt_Image$java_awt_image_ImageObserver$Z.apply(this, [img, observer, imgNode != null  || pixels != null  ]);
return true;
}, p$1);

Clazz.newMeth(C$, 'isClipped$I$I$I$I',  function (x, y, w, h) {
var is=this.currentClip != null  && !p$1.contains$I$I$I$I.apply(this, [x, y, w, h]) ;
return is;
}, p$1);

Clazz.newMeth(C$, 'contains$I$I$I$I',  function (x, y, w, h) {
return (Clazz.instanceOf(this.currentClip, Clazz.array(Integer.TYPE, -1)) ? $I$(10,"contains$IA$I$I$I$I",[(this.currentClip), x, y, w, h]) : (this.currentClip).contains$D$D$D$D(x, y, w, h));
}, p$1);

Clazz.newMeth(C$, 'observe$java_awt_Image$java_awt_image_ImageObserver$Z',  function (img, observer, isOK) {
observer.imageUpdate$java_awt_Image$I$I$I$I$I(img, (isOK ? 0 : 192), -1, -1, -1, -1);
}, p$1);

Clazz.newMeth(C$, 'getBuf8$I$I$I$I',  function (x, y, w, h) {
if (this.buf8 == null  || x != this.lastx  || y != this.lasty  || this.nx != w  || this.ny != h ) {
this.imageData=this.ctx.getImageData(x, y, w, h);
this.buf8=this.imageData.data;
this.lastx=x;
this.lasty=y;
this.nx=w;
this.ny=h;
}}, p$1);

Clazz.newMeth(C$, 'isTranslationOnly$DA',  function (m) {
return (m[0] == 1  && m[1] == 0   && m[2] == 0   && m[3] == 1  );
}, 1);

Clazz.newMeth(C$, 'hit$java_awt_Rectangle$java_awt_Shape$Z',  function (rect, s, onStroke) {
$I$(1).notImplemented$S(null);
return false;
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.currentStroke;
});

Clazz.newMeth(C$, 'setStroke$java_awt_Stroke',  function (s) {
if (!(Clazz.instanceOf(s, "java.awt.BasicStroke"))) return;
var b=this.currentStroke=s;
this.thinLine=(b.getLineWidth$() <= 0.5 );
var dash=b.getDashArray$();
var n=(dash == null  ? 0 : dash.length);
if (n == 0) {
this.ctx.setLineDash(C$.nodash);
} else {
var idash=Clazz.array(Integer.TYPE, [n]);
for (var i=n; --i >= 0; ) idash[i]=(dash[i]|0);

this.ctx.setLineDash(idash);
}p$1.setLineWidth$D.apply(this, [b.getLineWidth$()]);
var lineCap;
var lineJoin;
var miterLimit=-1;
switch (b.getEndCap$()) {
case 0:
lineCap="butt";
break;
case 2:
lineCap="square";
break;
case 1:
default:
lineCap="round";
}
switch (b.getLineJoin$()) {
case 2:
lineJoin="bevel";
break;
case 0:
lineJoin="miter";
miterLimit=b.getMiterLimit$();
break;
case 1:
lineJoin="round";
}
{
this.ctx.lineCap = lineCap; this.ctx.lineJoin = lineJoin; if (miterLimit >= 0) this.ctx.miterLimit = miterLimit;
}
});

Clazz.newMeth(C$, 'setRenderingHint$java_awt_RenderingHints_Key$O',  function (hintKey, hintValue) {
});

Clazz.newMeth(C$, 'getRenderingHint$java_awt_RenderingHints_Key',  function (hintKey) {
return null;
});

Clazz.newMeth(C$, 'setRenderingHints$java_util_Map',  function (hints) {
});

Clazz.newMeth(C$, 'addRenderingHints$java_util_Map',  function (hints) {
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return (this.hints == null  ? C$.nohints : this.hints);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
this.backgroundColor=c;
});

Clazz.newMeth(C$, 'getBackground$',  function () {
return this.backgroundColor;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.foregroundColor;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
if (this.clearing) {
this.clearColorSaved=c;
} else {
this.foregroundColor=c;
p$1.setGraphicsColor$java_awt_Color.apply(this, [c]);
}});

Clazz.newMeth(C$, 'setPaint$java_awt_Paint',  function (paint) {
this.shader=null;
if (Clazz.instanceOf(paint, "java.awt.Color")) {
this.setColor$java_awt_Color(paint);
} else {
this.shader=paint;
}});

Clazz.newMeth(C$, 'getFont$',  function () {
if (this.font == null ) this.font=Clazz.new_($I$(13,1).c$$S$I$I,["Arial", 0, 12]);
return this.font;
});

Clazz.newMeth(C$, 'getFontMetrics$',  function () {
return this.getFontMetrics$java_awt_Font(this.getFont$());
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (f) {
return $I$(14).getDefaultToolkit$().getFontMetrics$java_awt_Font(f);
});

Clazz.newMeth(C$, 'clipRect$I$I$I$I',  function (x, y, width, height) {
p$1.clipPriv$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'setClip$I$I$I$I',  function (x, y, width, height) {
if (this.currentClip != null ) this.unclip$I(-2147483648);
p$1.clipPriv$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'setClip$java_awt_Shape',  function (clip) {
if (clip == null ) {
p$1.clipPriv$I$I$I$I.apply(this, [0, 0, this.width, this.height]);
return;
}if (Clazz.instanceOf(clip, "java.awt.Rectangle")) {
var r=clip;
this.setClip$I$I$I$I((Math.floor(r.getMinX$())|0), (Math.floor(r.getMinY$())|0), (Math.ceil(r.getWidth$())|0), (Math.ceil(r.getHeight$())|0));
} else {
if (C$.debugClip) {
System.out.println$S("JSGraphics2D.setClip(Shape) to " + clip + " from " + this.currentClip );
}this.currentClip=clip;
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [clip]);
this.ctx.clip();
}});

Clazz.newMeth(C$, 'setClipPriv$java_awt_Shape',  function (clip) {
var c=clip;
if (Clazz.instanceOf(c, Clazz.array(Integer.TYPE, -1))) {
p$1.clipPriv$I$I$I$I.apply(this, [(c)[0], (c)[1], (c)[2], (c)[3]]);
} else if (Clazz.instanceOf(clip, "java.awt.Rectangle")) {
var r=clip;
p$1.clipPriv$I$I$I$I.apply(this, [(Math.floor(r.getMinX$())|0), (Math.floor(r.getMinY$())|0), (Math.ceil(r.getWidth$())|0), (Math.ceil(r.getHeight$())|0)]);
} else {
if (C$.debugClip) {
System.out.println$S("JSGraphics2D.setClipPriv(Shape) to " + clip + " from " + this.currentClip );
}this.currentClip=clip;
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [clip]);
this.ctx.clip();
}});

Clazz.newMeth(C$, 'clipPriv$I$I$I$I',  function (x, y, width, height) {
var r=(Clazz.instanceOf(this.currentClip, "java.awt.Rectangle") ? this.currentClip : null);
var o=this.currentClip;
if (r == null  || r.x != x  || r.y != y  || r.width != width  || r.height != height ) {
this.currentClip=Clazz.array(Integer.TYPE, -1, [x, y, width, height]);
}if (C$.debugClip) {
System.out.println$S("JSGraphics2D.clipPriv to " + this.currentClip + " from " + o );
}this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.clip();
}, p$1);

Clazz.newMeth(C$, 'hitClip$I$I$I$I',  function (x, y, width, height) {
var clipRect=this.getClipBounds$();
if (clipRect == null ) {
return true;
}return clipRect.intersects$D$D$D$D(x, y, width, height);
});

Clazz.newMeth(C$, 'setGraphicsColor$java_awt_Color',  function (c) {
if (c == null ) return;
if (this.image != null ) c=this.image.秘getGraphicsColor$java_awt_Color(c);
var a=c.getAlpha$();
var fa=a / 255.0;
if (this.ctx.globalAlpha != fa ) this.ctx.globalAlpha=fa;
this.ctx.fillStyle=this.ctx.strokeStyle=$I$(7).getCSSColor$java_awt_Color$Z(c, true);
}, p$1);

Clazz.newMeth(C$, 'copyArea$I$I$I$I$I$I',  function (x, y, width, height, dx, dy) {
this.ctx.putImageData(this.ctx.getImageData(x, y, width, height), x + dx, y + dy);
});

Clazz.newMeth(C$, 'getClip$',  function () {
return (this.currentClip == null  || Clazz.instanceOf(this.currentClip, Clazz.array(Integer.TYPE, -1))  ? p$1.getClipBoundsImpl.apply(this, []) : this.currentClip);
});

Clazz.newMeth(C$, 'drawString$S$I$I',  function (s, x, y) {
p$1.fillText$S$F$F.apply(this, [s, x, y]);
});

Clazz.newMeth(C$, 'drawChars$CA$I$I',  function (chars, x, y) {
p$1.fillText$S$F$F.apply(this, [String.valueOf$CA(chars), x, y]);
});

Clazz.newMeth(C$, 'drawChars$CA$I$I$I$I',  function (data, offset, length, x, y) {
this.drawString$S$I$I( String.instantialize(data, offset, length), x, y);
});

Clazz.newMeth(C$, 'drawBytes$BA$I$I$I$I',  function (data, offset, length, x, y) {
this.drawString$S$I$I( String.instantialize(data, offset, length), x, y);
});

Clazz.newMeth(C$, 'drawString$S$F$F',  function (str, x, y) {
p$1.fillText$S$F$F.apply(this, [str, x, y]);
});

Clazz.newMeth(C$, 'fillText$S$F$F',  function (str, x, y) {
this.ctx.fillText(str, x, y);
}, p$1);

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$I$I',  function (iterator, x, y) {
$I$(1).notImplemented$S(null);
});

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$F$F',  function (iterator, x, y) {
$I$(1).notImplemented$S(null);
});

Clazz.newMeth(C$, 'translate$D$D',  function (tx, ty) {
this.ctx.translate(tx, ty);
this.transform.translate$D$D(tx, ty);
});

Clazz.newMeth(C$, 'shear$D$D',  function (shx, shy) {
this.ctx.transform(1.0, shx, 0.0, shy, 1.0, 0.0);
this.transform.shear$D$D(shx, shy);
});

Clazz.newMeth(C$, 'translate$I$I',  function (x, y) {
this.ctx.translate(x, y);
this.transform.translate$D$D(x, y);
});

Clazz.newMeth(C$, 'rotate$D',  function (radians) {
this.ctx.rotate(radians);
this.transform.rotate$D(radians);
});

Clazz.newMeth(C$, 'rotate$D$D$D',  function (theta, x, y) {
this.ctx.translate(x, y);
this.ctx.rotate(theta);
this.ctx.translate(-x, -y);
this.transform.rotate$D$D$D(theta, x, y);
});

Clazz.newMeth(C$, 'scale$D$D',  function (sx, sy) {
this.ctx.scale(sx, sy);
this.transform.scale$D$D(sx, sy);
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (t) {
p$1.transformCTX$java_awt_geom_AffineTransform.apply(this, [t]);
this.transform.concatenate$java_awt_geom_AffineTransform(t);
$I$(8).setMatrix(this.ctx, null);
});

Clazz.newMeth(C$, 'transformCTX$java_awt_geom_AffineTransform',  function (t) {
{
this.ctx.transform (t.m00, t.m10, t.m01, t.m11, t.m02, t.m12);
}
}, p$1);

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform',  function (t) {
{
this.ctx.setTransform (t.m00, t.m10, t.m01, t.m11, t.m02, t.m12);
}
this.transform.setTransform$java_awt_geom_AffineTransform(t);
});

Clazz.newMeth(C$, 'getTransform$',  function () {
return this.transform.clone$();
});

Clazz.newMeth(C$, 'getPaint$',  function () {
return this.getColor$();
});

Clazz.newMeth(C$, 'getFontRenderContext$',  function () {
return this.getFontMetrics$java_awt_Font(this.getFont$()).getFontRenderContext$();
});

Clazz.newMeth(C$, 'setPaintMode$',  function () {
this.setComposite$java_awt_Composite($I$(15).SrcOver);
});

Clazz.newMeth(C$, 'setXORMode$java_awt_Color',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null XORColor"]);
this.setComposite$java_awt_Composite($I$(15).Xor);
});

Clazz.newMeth(C$, 'getClipRect$',  function () {
return this.getClipBounds$();
});

Clazz.newMeth(C$, 'getClipBounds$',  function () {
return this.getClipBounds$java_awt_Rectangle(null);
});

Clazz.newMeth(C$, 'getClipBounds$java_awt_Rectangle',  function (r) {
var clipRect=p$1.getClipBoundsImpl.apply(this, []);
if (r == null ) {
r=clipRect;
} else {
r.x=clipRect.x;
r.y=clipRect.y;
r.width=clipRect.width;
r.height=clipRect.height;
}return r;
});

Clazz.newMeth(C$, 'getClipBoundsImpl',  function () {
if (this.currentClip == null ) {
this.currentClip=Clazz.new_($I$(10,1).c$$I$I$I$I,[0, 0, this.width, this.height]);
}return p$1.getBounds.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getBounds',  function () {
if (Clazz.instanceOf(this.currentClip, Clazz.array(Integer.TYPE, -1))) {
var a=this.currentClip;
return Clazz.new_($I$(10,1).c$$I$I$I$I,[a[0], a[1], a[2], a[3]]);
}return (this.currentClip).getBounds$();
}, p$1);

Clazz.newMeth(C$, 'setComposite$java_awt_Composite',  function (comp) {
if (comp === this.alphaComposite ) return;
var isAlpha=Clazz.instanceOf(comp, "java.awt.AlphaComposite");
var newRule=(!isAlpha ? 0 : (comp).getRule$());
var isValid=(isAlpha && this.alphaComposite == null   || newRule != this.alphaComposite.getRule$() );
if (isValid && $I$(16).setGraphicsCompositeAlpha$swingjs_JSGraphics2D$I(this, newRule) ) {
this.alphaComposite=comp;
}if (newRule == 1) {
this.clearColorSaved=this.foregroundColor;
this.setColor$java_awt_Color($I$(6).black);
this.clearing=true;
} else if (this.clearing) {
this.clearing=false;
this.setColor$java_awt_Color(this.clearColorSaved);
this.clearColorSaved=null;
}this.setAlpha$F(comp == null  ? 1 : (comp).getAlpha$());
});

Clazz.newMeth(C$, 'getComposite$',  function () {
return this.alphaComposite;
});

Clazz.newMeth(C$, 'drawImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I',  function (img, op, x, y) {
$I$(16).drawImageOp$swingjs_JSGraphics2D$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I(this, img, op, x, y);
});

Clazz.newMeth(C$, 'setAlpha$F',  function (f) {
this.ctx.globalAlpha=f;
});

Clazz.newMeth(C$, 'getCanvas$',  function () {
return this.canvas;
});

Clazz.newMeth(C$, 'mark$',  function () {
return p$1.mark$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'mark$Z',  function (isClone) {
if (C$.debugClip) {
System.out.println$S("save " + this.transform);
}this.ctx.save();
var map=[] ||Clazz.array(java.lang.Object, [7]);
map[0]=Integer.valueOf$I((1 ? this.ctx.globalAlpha :0));
map[1]=this.alphaComposite;
map[2]=this.currentStroke;
map[3]=this.transform.秘toArray$();
map[4]=this.font;
map[5]=this.currentClip;
return $I$(8).push(this.ctx, map);
}, p$1);

Clazz.newMeth(C$, 'unclip$I',  function (n) {
if (C$.debugClip) {
System.out.println$S("JSGraphics2D.unclip " + n);
}var stack=$I$(8).getSavedStack(this.ctx);
this.unclipped=(n < 0);
if (this.unclipped) n=-n;
if (n > stack.length) n=stack.length;
for (var i=0; i < n; i++) {
this.ctx.restore();
}
this.currentClip=null;
for (var i=n; --i >= 0; ) {
p$1.setState$OA.apply(this, [stack[stack.length - 1 - i ]]);
if (!this.unclipped) this.setClipPriv$java_awt_Shape(stack[stack.length - 1 - i ][5]);
this.ctx.save();
}
});

Clazz.newMeth(C$, 'reset$I',  function (n0) {
if (n0 < 1) n0=1;
var n;
if (this.unclipped) {
this.unclip$I(2147483647);
}while ((n=$I$(8).getSavedLevel(this.ctx)) >= n0){
p$1.setState$OA.apply(this, [$I$(8).pop(this.ctx)]);
this.ctx.restore();
if (C$.debugClip) {
System.out.println$S("restore n=" + n + " " + this.transform );
}}
});

Clazz.newMeth(C$, 'setState$OA',  function (map) {
this.setComposite$java_awt_Composite(map[1]);
var a=0;
this.setAlpha$F(map[a] ||0);
this.shader=null;
this.setStroke$java_awt_Stroke(map[2]);
this.setTransform$java_awt_geom_AffineTransform(this.transform.秘fromArray$DA(map[3]));
this.setFont$java_awt_Font(map[4]);
this.currentClip=map[5];
}, p$1);

Clazz.newMeth(C$, 'create$I$I$I$I',  function (x, y, width, height) {
var g=this.create$();
if (g == null ) return null;
g.translate$I$I(x, y);
g.clipRect$I$I$I$I(0, 0, width, height);
return g;
});

Clazz.newMeth(C$, 'create$',  function () {
return this.clone$();
});

Clazz.newMeth(C$, 'clone$',  function () {
var n=p$1.mark$Z.apply(this, [false]);
if (C$.debugClip) {
System.out.println$S("clone to " + n);
}var g=this;
{
g = Clazz.clone(this);
}
g.transform.setTransform$java_awt_geom_AffineTransform(this.transform);
if (this.hints != null ) {
g.hints=this.hints.clone$();
}g.setStroke$java_awt_Stroke(this.currentStroke.clone$());
g.initialState=n;
return g;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (C$.debugClip) {
System.out.println$S("dispose to " + this.initialState);
}this.reset$I(this.initialState);
if (this.image != null ) {
this.image.秘graphicsDisposed$();
this.image=null;
}});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

C$.$static$=function(){C$.$static$=0;
C$.debugClip=$I$(1).J2S.debugClip();
C$.pixelRatio=(function () { var ctx = document.createElement("canvas").getContext("2d"), dpr = window.devicePixelRatio || 1, bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1; return dpr / bsr; })() ||1;
{
System.out.println$S("JSGraphics2D pixelRatio is " + new Float(C$.pixelRatio).toString());
};
C$.pts=Clazz.array(Double.TYPE, [6]);
C$.nodash=Clazz.array(Integer.TYPE, [0]);
C$.nohints=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_util_Map);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
