(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},I$=[[0,'java.awt.geom.AffineTransform','java.awt.BasicStroke','java.text.DecimalFormat','java.awt.image.BufferedImage','java.awt.RenderingHints','java.awt.geom.Area','java.awt.Rectangle',['java.awt.geom.Point2D','.Double'],'gnu.jpdf.PDFImage','java.util.Hashtable','gnu.jpdf.PDFStringHelper','java.awt.Color','java.awt.Font','java.awt.font.FontRenderContext','gnu.jpdf.PDFStream',['java.awt.geom.Point2D','.Float'],'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFGraphics", null, 'java.awt.Graphics2D', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dg2=Clazz.new_($I$(4,1).c$$I$I$I,[2, 2, 1]).createGraphics$();
this.lineCap=0;
this.lineJoin=0;
this.lineWidth=1.0;
this.miterLimit=10.0;
this.rhints=Clazz.new_($I$(5,1).c$$java_util_Map,[null]);
},1);

C$.$fields$=[['Z',['child','inStroke','inText','newFont'],'F',['lineWidth','lx','ly','miterLimit','trax','tray','tx','ty'],'I',['lineCap','lineJoin'],'S',['pre_np'],'O',['background','java.awt.Color','clip','java.awt.geom.Area','clipRectangle','java.awt.Rectangle','composite','java.awt.Composite','dg2','java.awt.Graphics2D','font','java.awt.Font','originalStroke','java.awt.Stroke','oTransform','java.awt.geom.AffineTransform','page','gnu.jpdf.PDFPage','paint','java.awt.Paint','pdffont','gnu.jpdf.PDFFont','pTransform','java.awt.geom.AffineTransform','pw','java.io.PrintWriter','rhints','java.awt.RenderingHints','stroke','java.awt.Stroke','transform','java.awt.geom.AffineTransform']]
,['O',['IDENTITY','java.awt.geom.AffineTransform','DEF_STROKE','java.awt.Stroke','df','java.text.DecimalFormat']]]

Clazz.newMeth(C$, 'addRenderingHints$java_util_Map',  function (hints) {
this.rhints.putAll$java_util_Map(hints);
});

Clazz.newMeth(C$, 'arc$D$D$D$D$D$D$Z',  function (axc, ayc, width, height, ang1, ang2, clockwise) {
var adiff;
var x0;
var y0;
var x3r;
var y3r;
var first=true;
var ang1r=(ang1 % 360.0) * 0.017453292519943295;
var sin0=Math.sin(ang1r);
var cos0=Math.cos(ang1r);
x0=axc + width * cos0;
y0=ayc + height * sin0;
if (!clockwise) {
while (ang1 < ang2 )ang2-=360.0;

while ((adiff=ang2 - ang1) < -90.0 ){
var w=sin0;
sin0=-cos0;
cos0=w;
x3r=axc + width * cos0;
y3r=ayc + height * sin0;
p$1.arc_add$Z$D$D$D$D$D$D$D$D.apply(this, [first, width, height, x0, y0, x3r, y3r, (x0 + width * cos0), (y0 + height * sin0)]);
x0=x3r;
y0=y3r;
ang1-=90.0;
first=false;
}
} else {
while (ang2 < ang1 )ang2+=360.0;

while ((adiff=ang2 - ang1) > 90.0 ){
var w=cos0;
cos0=-sin0;
sin0=w;
x3r=axc + width * cos0;
y3r=ayc + height * sin0;
p$1.arc_add$Z$D$D$D$D$D$D$D$D.apply(this, [first, width, height, x0, y0, x3r, y3r, (x0 + width * cos0), (y0 + height * sin0)]);
x0=x3r;
y0=y3r;
ang1+=90.0;
first=false;
}
}var trad=Math.tan(adiff * (0.008726646259971648));
var ang2r=ang2 * 0.017453292519943295;
var xt=x0 - trad * width * sin0 ;
var yt=y0 + trad * height * cos0 ;
p$1.arc_add$Z$D$D$D$D$D$D$D$D.apply(this, [first, width, height, x0, y0, (axc + width * Math.cos(ang2r)), (ayc + height * Math.sin(ang2r)), xt, yt]);
});

Clazz.newMeth(C$, 'arc_add$Z$D$D$D$D$D$D$D$D',  function (first, w, h, x0, y0, x3, y3, xt, yt) {
var dx=xt - x0;
var dy=yt - y0;
var dist=dx * dx + dy * dy;
var w2=w * w;
var h2=h * h;
var r2=w2 + h2;
var fw=0.0;
var fh=0.0;
if (dist < (r2 * 1.0E8) ) {
fw=(w2 != 0.0 ) ? ((1.3333333333333333) / (1 + Math.sqrt(1 + dist / w2))) : 0.0;
fh=(h2 != 0.0 ) ? ((1.3333333333333333) / (1 + Math.sqrt(1 + dist / h2))) : 0.0;
}if (first) this.moveto$D$D(x0, y0);
var x=x0 + ((xt - x0) * fw);
var y=y0 + ((yt - y0) * fh);
x0=x3 + ((xt - x3) * fw);
y0=y3 + ((yt - y3) * fh);
this.curveto$D$D$D$D$D$D(x, y, x0, y0, x3, y3);
}, p$1);

Clazz.newMeth(C$, 'clearRect$I$I$I$I',  function (x, y, w, h) {
this.closeBlock$();
this.pw.print$S("q 1 1 1 RG ");
this.drawRect$I$I$I$I(x, y, w, h);
this.closeBlock$S("B Q");
});

Clazz.newMeth(C$, 'clip$java_awt_Shape',  function (s) {
if (s == null ) {
this.setClip$java_awt_Shape(null);
return;
}s=this.transform.createTransformedShape$java_awt_Shape(s);
if (this.clip == null ) this.clip=Clazz.new_($I$(6,1).c$$java_awt_Shape,[s]);
 else this.clip.intersect$java_awt_geom_Area(Clazz.new_($I$(6,1).c$$java_awt_Shape,[s]));
});

Clazz.newMeth(C$, 'clipPolygon$java_awt_Polygon',  function (p) {
this.closeBlock$();
this.polygon$IA$IA$I(p.xpoints, p.ypoints, p.npoints);
this.closeBlock$S("W");
this.clipRectangle=p.getBounds$();
});

Clazz.newMeth(C$, 'clipRect$I$I$I$I',  function (x, y, w, h) {
this.setClip$I$I$I$I(x, y, w, h);
});

Clazz.newMeth(C$, 'closeBlock$',  function () {
this.closeBlock$S("S");
});

Clazz.newMeth(C$, 'closeBlock$S',  function (code) {
if (this.inText) {
this.pw.println$S("ET Q");
}if (this.inStroke) {
this.pw.println$S(code);
}this.inStroke=this.inText=false;
});

Clazz.newMeth(C$, 'copyArea$I$I$I$I$I$I',  function (x, y, w, h, dx, dy) {
});

Clazz.newMeth(C$, 'create$',  function () {
this.closeBlock$();
var g=this.createGraphic$gnu_jpdf_PDFPage$java_io_PrintWriter(this.page, this.pw);
g.trax=this.trax;
g.tray=this.tray;
g.clipRectangle=Clazz.new_($I$(7,1).c$$java_awt_Rectangle,[this.clipRectangle]);
return g;
});

Clazz.newMeth(C$, 'createGraphic$gnu_jpdf_PDFPage$java_io_PrintWriter',  function (page, pw) {
var g=Clazz.new_(C$);
g.init$gnu_jpdf_PDFPage$java_io_PrintWriter(page, pw);
return g;
});

Clazz.newMeth(C$, 'curveto$D$D$D$D',  function (x1, y1, x2, y2) {
this.newPath$();
this.pw.println$S(p$1.cxy$D$D.apply(this, [x1, y1]) + p$1.cxy$D$D.apply(this, [x2, y2]) + "v" );
this.lx=x2;
this.ly=y2;
});

Clazz.newMeth(C$, 'curveto$I$I$I$I',  function (x1, y1, x2, y2) {
this.newPath$();
this.pw.println$S(p$1.cxy$D$D.apply(this, [x1, y1]) + p$1.cxy$D$D.apply(this, [x2, y2]) + "v" );
this.lx=x2;
this.ly=y2;
});

Clazz.newMeth(C$, 'curveto$D$D$D$D$D$D',  function (x1, y1, x2, y2, x3, y3) {
this.newPath$();
this.pw.println$S(p$1.cxy$D$D.apply(this, [x1, y1]) + p$1.cxy$D$D.apply(this, [x2, y2]) + p$1.cxy$D$D.apply(this, [x3, y3]) + "c" );
this.lx=x3;
this.ly=y3;
});

Clazz.newMeth(C$, 'curveto$I$I$I$I$I$I',  function (x1, y1, x2, y2, x3, y3) {
this.newPath$();
this.pw.println$S(p$1.cxy$D$D.apply(this, [x1, y1]) + p$1.cxy$D$D.apply(this, [x2, y2]) + p$1.cxy$D$D.apply(this, [x3, y3]) + "c" );
this.lx=x3;
this.ly=y3;
});

Clazz.newMeth(C$, 'curveto2$D$D$D$D',  function (x1, y1, x2, y2) {
this.newPath$();
this.pw.println$S(p$1.cxy$D$D.apply(this, [x1, y1]) + p$1.cxy$D$D.apply(this, [x2, y2]) + "y" );
this.lx=x2;
this.ly=y2;
});

Clazz.newMeth(C$, 'curveto2$I$I$I$I',  function (x1, y1, x2, y2) {
this.newPath$();
this.pw.println$S(p$1.cxy$D$D.apply(this, [x1, y1]) + p$1.cxy$D$D.apply(this, [x2, y2]) + "y" );
this.lx=x2;
this.ly=y2;
});

Clazz.newMeth(C$, 'cwh$D$D',  function (w, h) {
var nw=w;
var nh=h;
nh=-h;
return "" + C$.df.format$D(nw) + " " + C$.df.format$D(nh) + " " ;
}, p$1);

Clazz.newMeth(C$, 'cxy$D$D',  function (x, y) {
var ptSrc=Clazz.new_($I$(8,1).c$$D$D,[x, y]);
var ptDst=Clazz.new_($I$(8,1));
this.transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc, ptDst);
return "" + C$.df.format$D(ptDst.getX$()) + " " + C$.df.format$D(ptDst.getY$()) + " " ;
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.closeBlock$();
if (this.child) {
this.pw.println$S("Q");
} else {
this.pw.close$();
}});

Clazz.newMeth(C$, 'draw$java_awt_Shape',  function (s) {
p$1.followPath$java_awt_Shape$I.apply(this, [s, 2]);
});

Clazz.newMeth(C$, 'draw3DRect$I$I$I$I$Z',  function (x, y, width, height, raised) {
});

Clazz.newMeth(C$, 'drawArc$I$I$I$I$I$I',  function (x, y, w, h, sa, aa) {
w=w >> 1;
h=h >> 1;
x+=w;
y+=h;
this.arc$D$D$D$D$D$D$Z(x, y, w, h, -sa, (-sa - aa), false);
});

Clazz.newMeth(C$, 'drawBytes$BA$I$I$I$I',  function (data, offset, length, x, y) {
});

Clazz.newMeth(C$, 'drawImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I',  function (img, op, x, y) {
var result=img;
if (op != null ) {
result=op.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(img, img.getColorModel$());
result=op.filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage(img, result);
}this.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(result, x, y, null);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver',  function (img, xform, obs) {
return true;
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (img, x, y, bgcolor, obs) {
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(img, x, y, img.getWidth$java_awt_image_ImageObserver(obs), img.getHeight$java_awt_image_ImageObserver(obs), bgcolor, obs);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, x, y, obs) {
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, x, y, img.getWidth$java_awt_image_ImageObserver(obs), img.getHeight$java_awt_image_ImageObserver(obs), obs);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (img, x, y, w, h, bgcolor, obs) {
this.closeBlock$();
this.pw.print$S("q ");
var c=this.getColor$();
this.setColor$java_awt_Color(bgcolor);
this.drawRect$I$I$I$I(x, y, w, h);
this.closeBlock$S("B Q");
this.paint=c;
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, x, y, img.getWidth$java_awt_image_ImageObserver(obs), img.getHeight$java_awt_image_ImageObserver(obs), obs);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver',  function (img, x, y, w, h, obs) {
this.closeBlock$();
var image=Clazz.new_($I$(9,1).c$$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver,[img, x, y, w, h, obs]);
this.page.getPDFDocument$().setImageName$gnu_jpdf_PDFImage(image);
this.page.getPDFDocument$().add$gnu_jpdf_PDFObject(image);
this.page.addToProcset$S("/ImageC");
this.page.addImageResource$S(image.getName$() + " " + image.getSerialID$() + " 0 R" );
this.pw.print$S("q " + image.getWidth$() + " 0 0 " + image.getHeight$() + " " + x + " " + ((this.page.getDimension$().getHeight$()|0) - y - image.getHeight$() ) + " cm \n" + image.getName$() + " Do\nQ\n" );
return false;
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, bgcolor, obs) {
return false;
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver',  function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, obs) {
return false;
});

Clazz.newMeth(C$, 'drawLine$I$I$I$I',  function (x1, y1, x2, y2) {
this.moveto$D$D(x1, y1);
this.lineto$D$D(x2, y2);
});

Clazz.newMeth(C$, 'drawOval$I$I$I$I',  function (x, y, w, h) {
this.drawArc$I$I$I$I$I$I(x, y, w, h, 0, 360);
});

Clazz.newMeth(C$, 'drawPolygon$IA$IA$I',  function (xp, yp, np) {
this.polygon$IA$IA$I(xp, yp, np);
this.closeBlock$S("s");
});

Clazz.newMeth(C$, 'drawPolyline$IA$IA$I',  function (xp, yp, np) {
this.polygon$IA$IA$I(xp, yp, np);
});

Clazz.newMeth(C$, 'drawRect$I$I$I$I',  function (x, y, w, h) {
this.newPath$();
this.pw.print$S(p$1.cxy$D$D.apply(this, [x, y]) + p$1.cwh$D$D.apply(this, [w, h]) + "re " );
this.lx=x;
this.ly=y;
});

Clazz.newMeth(C$, 'drawRenderableImage$java_awt_image_renderable_RenderableImage$java_awt_geom_AffineTransform',  function (img, xform) {
this.drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform(img.createDefaultRendering$(), xform);
});

Clazz.newMeth(C$, 'drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform',  function (img, xform) {
var image=null;
if (Clazz.instanceOf(img, "java.awt.image.BufferedImage")) {
image=img;
} else {
var cm=img.getColorModel$();
var width=img.getWidth$();
var height=img.getHeight$();
var raster=cm.createCompatibleWritableRaster$I$I(width, height);
var isAlphaPremultiplied=cm.isAlphaPremultiplied$();
var properties=Clazz.new_($I$(10,1));
var keys=img.getPropertyNames$();
if (keys != null ) {
for (var i=0; i < keys.length; i++) {
properties.put$O$O(keys[i], img.getProperty$S(keys[i]));
}
}var result=Clazz.new_($I$(4,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, isAlphaPremultiplied, properties]);
img.copyData$java_awt_image_WritableRaster(raster);
image=result;
}this.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(image, xform, null);
});

Clazz.newMeth(C$, 'drawRoundRect$I$I$I$I$I$I',  function (x, y, w, h, aw, ah) {
});

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$F$F',  function (aci, x, y) {
});

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$I$I',  function (aci, x, y) {
});

Clazz.newMeth(C$, 'drawString$S$F$F',  function (s, x, y) {
this.newTextBlock$F$F(x, y);
this.pw.println$S($I$(11).makePDFString$S(s) + " Tj");
});

Clazz.newMeth(C$, 'drawString$S$I$I',  function (s, x, y) {
this.newTextBlock$F$F(x, y);
this.pw.println$S($I$(11).makePDFString$S(s) + " Tj");
});

Clazz.newMeth(C$, 'fill$java_awt_Shape',  function (s) {
p$1.followPath$java_awt_Shape$I.apply(this, [s, 1]);
});

Clazz.newMeth(C$, 'fill3DRect$I$I$I$I$Z',  function (x, y, width, height, raised) {
});

Clazz.newMeth(C$, 'fillArc$I$I$I$I$I$I',  function (x, y, w, h, sa, aa) {
this.closeBlock$();
this.drawArc$I$I$I$I$I$I(x, y, w, h, sa, aa);
this.lineto$D$D(x + (w >> 1), y + (h >> 1));
this.closeBlock$S("b");
});

Clazz.newMeth(C$, 'fillOval$I$I$I$I',  function (x, y, w, h) {
this.fillArc$I$I$I$I$I$I(x, y, w, h, 0, 360);
});

Clazz.newMeth(C$, 'fillPolygon$IA$IA$I',  function (xp, yp, np) {
this.closeBlock$();
this.polygon$IA$IA$I(xp, yp, np);
this.closeBlock$S("b");
});

Clazz.newMeth(C$, 'fillRect$I$I$I$I',  function (x, y, w, h) {
this.closeBlock$();
this.drawRect$I$I$I$I(x, y, w, h);
this.closeBlock$S("B");
});

Clazz.newMeth(C$, 'fillRoundRect$I$I$I$I$I$I',  function (x, y, w, h, aw, ah) {
});

Clazz.newMeth(C$, 'followPath$java_awt_Shape$I',  function (s, drawType) {
var points;
if (s == null ) return;
if (drawType == 2) {
if (!(Clazz.instanceOf(this.stroke, "java.awt.BasicStroke"))) {
s=this.stroke.createStrokedShape$java_awt_Shape(s);
p$1.followPath$java_awt_Shape$I.apply(this, [s, 1]);
return;
}}points=s.getPathIterator$java_awt_geom_AffineTransform(C$.IDENTITY);
var segments=0;
var coords=Clazz.array(Float.TYPE, [6]);
while (!points.isDone$()){
++segments;
var segtype=points.currentSegment$FA(coords);
switch (segtype) {
case 4:
this.pw.print$S("h ");
break;
case 3:
this.curveto$D$D$D$D$D$D(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]);
break;
case 1:
this.lineto$D$D(coords[0], coords[1]);
break;
case 0:
this.moveto$D$D(coords[0], coords[1]);
break;
case 2:
this.curveto$D$D$D$D(coords[0], coords[1], coords[2], coords[3]);
break;
}
points.next$();
}
switch (drawType) {
case 1:
if (segments > 0) {
if (points.getWindingRule$() == 0) this.closeBlock$S("B*");
 else this.closeBlock$S("B");
}break;
case 2:
if (segments > 0) this.closeBlock$S("S");
break;
case 3:
default:
if (segments == 0) this.drawRect$I$I$I$I(0, 0, 0, 0);
if (points.getWindingRule$() == 0) this.closeBlock$S("W*");
 else this.closeBlock$S("W");
}
}, p$1);

Clazz.newMeth(C$, 'getBackground$',  function () {
return this.background;
});

Clazz.newMeth(C$, 'getClip$',  function () {
return null;
});

Clazz.newMeth(C$, 'getClipBounds$',  function () {
return this.clipRectangle;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return (Clazz.instanceOf(this.paint, "java.awt.Color")) ? this.paint : $I$(12).black;
});

Clazz.newMeth(C$, 'getDeviceConfiguration$',  function () {
return this.dg2.getDeviceConfiguration$();
});

Clazz.newMeth(C$, 'getFont$',  function () {
if (this.font == null ) this.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["SansSerif", 0, 12]));
return this.font;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (font) {
return font.getFontMetrics$();
});

Clazz.newMeth(C$, 'getFontRenderContext$',  function () {
var antialias=$I$(5).VALUE_TEXT_ANTIALIAS_ON.equals$O(this.getRenderingHint$java_awt_RenderingHints_Key($I$(5).KEY_TEXT_ANTIALIASING));
var fractions=$I$(5).VALUE_FRACTIONALMETRICS_ON.equals$O(this.getRenderingHint$java_awt_RenderingHints_Key($I$(5).KEY_FRACTIONALMETRICS));
return Clazz.new_([Clazz.new_($I$(1,1)), antialias, fractions],$I$(14,1).c$$java_awt_geom_AffineTransform$Z$Z);
});

Clazz.newMeth(C$, 'getPage$',  function () {
return this.page;
});

Clazz.newMeth(C$, 'getPaint$',  function () {
return this.paint;
});

Clazz.newMeth(C$, 'getRenderingHint$java_awt_RenderingHints_Key',  function (arg0) {
return this.rhints.get$O(arg0);
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.rhints;
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.originalStroke;
});

Clazz.newMeth(C$, 'getTransform$',  function () {
return Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform,[this.oTransform]);
});

Clazz.newMeth(C$, 'getWriter$',  function () {
return this.pw;
});

Clazz.newMeth(C$, 'hit$java_awt_Rectangle$java_awt_Shape$Z',  function (rect, s, onStroke) {
if (onStroke) {
s=this.stroke.createStrokedShape$java_awt_Shape(s);
}s=this.transform.createTransformedShape$java_awt_Shape(s);
var area=Clazz.new_($I$(6,1).c$$java_awt_Shape,[s]);
if (this.clip != null ) area.intersect$java_awt_geom_Area(this.clip);
return area.intersects$D$D$D$D(rect.x, rect.y, rect.width, rect.height);
});

Clazz.newMeth(C$, 'init',  function () {
var pf=this.page.getPageFormat$();
if (this.child) {
this.pw.print$S("q ");
}this.paint=$I$(12).black;
this.oTransform=Clazz.new_($I$(1,1));
this.pTransform=Clazz.new_($I$(1,1));
this.pTransform.translate$D$D(0, pf.getHeight$());
this.pTransform.scale$D$D(1.0, -1.0);
this.transform=Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform,[this.oTransform]);
this.transform.concatenate$java_awt_geom_AffineTransform(this.pTransform);
this.setStroke$java_awt_Stroke(C$.DEF_STROKE);
}, p$1);

Clazz.newMeth(C$, 'init$gnu_jpdf_PDFPage',  function (page) {
this.page=page;
this.child=false;
var stream=Clazz.new_($I$(15,1));
stream.setDeflate$Z(true);
page.getPDFDocument$().add$gnu_jpdf_PDFObject(stream);
page.add$gnu_jpdf_PDFObject(stream);
this.pw=stream.getWriter$();
this.clipRectangle=page.getImageableArea$();
p$1.init.apply(this, []);
});

Clazz.newMeth(C$, 'init$gnu_jpdf_PDFPage$java_io_PrintWriter',  function (page, pw) {
this.page=page;
this.pw=pw;
this.child=true;
p$1.init.apply(this, []);
});

Clazz.newMeth(C$, 'lineto$D$D',  function (x, y) {
this.newPath$();
if (x != (x|0)  || y != (y|0)   || this.lx != x   || this.ly != y  ) this.pw.print$S(p$1.cxy$D$D.apply(this, [x, y]) + "l ");
this.lx=x;
this.ly=y;
});

Clazz.newMeth(C$, 'moveto$D$D',  function (x, y) {
this.newPath$();
if (x != (x|0)  || y != (y|0)   || this.lx != x   || this.ly != y  ) this.pw.print$S(p$1.cxy$D$D.apply(this, [x, y]) + "m ");
this.lx=x;
this.ly=y;
});

Clazz.newMeth(C$, 'newPath$',  function () {
if (this.inText) {
this.closeBlock$();
}if (!this.inStroke) {
if (this.pre_np != null ) {
this.pw.print$S(this.pre_np);
this.pre_np=null;
}this.pw.print$S("n ");
}this.inText=false;
this.inStroke=true;
this.lx=this.ly=-9999;
});

Clazz.newMeth(C$, 'newTextBlock$F$F',  function (x, y) {
if (this.inStroke) {
this.closeBlock$();
}if (!this.inText) {
this.getFont$();
this.pw.print$S("q BT ");
this.tx=this.ty=0;
this.pw.print$S(p$1.txy$F$F.apply(this, [x, y]) + "Td ");
} else {
this.pw.print$S(p$1.twh$F$F$F$F.apply(this, [x, y, this.tx, this.ty]) + "Td ");
}this.tx=x;
this.ty=y;
if (this.newFont || !this.inText ) this.pw.print$S(this.pdffont.getName$() + " " + this.font.getSize$() + " Tf " );
this.inStroke=this.newFont=false;
this.inText=true;
});

Clazz.newMeth(C$, 'polygon$IA$IA$I',  function (xp, yp, np) {
this.moveto$D$D(xp[0], yp[0]);
for (var i=1; i < np; i++) this.lineto$D$D(xp[i], yp[i]);

});

Clazz.newMeth(C$, 'rotate$D',  function (theta) {
this.transform.rotate$D(theta);
});

Clazz.newMeth(C$, 'rotate$D$D$D',  function (theta, x, y) {
this.transform.rotate$D$D$D(theta, x, y);
});

Clazz.newMeth(C$, 'scale$D$D',  function (sx, sy) {
this.transform.scale$D$D(sx, sy);
this.stroke=p$1.transformStroke$java_awt_Stroke.apply(this, [this.originalStroke]);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (color) {
this.background=color;
});

Clazz.newMeth(C$, 'setClip$I$I$I$I',  function (x, y, w, h) {
this.clipRectangle=Clazz.new_($I$(7,1).c$$I$I$I$I,[x, y, w, h]);
this.closeBlock$();
this.drawRect$I$I$I$I(x, y, w, h);
this.closeBlock$S("W n");
});

Clazz.newMeth(C$, 'setClip$java_awt_Shape',  function (s) {
var r=s.getBounds$();
this.setClip$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
this.setPaint$java_awt_Paint(c);
});

Clazz.newMeth(C$, 'setComposite$java_awt_Composite',  function (comp) {
this.composite=comp;
});

Clazz.newMeth(C$, 'setDefaultLineWidth$',  function () {
this.closeBlock$();
this.pw.println$S("1 w");
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
if (this.font !== f ) {
this.font=f;
this.pdffont=this.page.getFont$S$S$I("/Type1", f.getName$(), f.getStyle$());
this.newFont=true;
}});

Clazz.newMeth(C$, 'setLineCap$I',  function (cap) {
var lineCap=0;
switch (cap) {
case 0:
lineCap=0;
break;
case 1:
lineCap=1;
break;
case 2:
lineCap=2;
break;
}
if (this.lineCap != lineCap) {
this.closeBlock$();
this.lineCap=lineCap;
this.pw.println$S("" + lineCap + " J" );
}}, p$1);

Clazz.newMeth(C$, 'setLineJoin$I',  function (join) {
var lineJoin=0;
switch (join) {
case 0:
lineJoin=0;
break;
case 1:
lineJoin=1;
break;
case 2:
lineJoin=2;
break;
}
if (this.lineJoin != lineJoin) {
this.closeBlock$();
this.lineJoin=lineJoin;
this.pw.println$S("" + lineJoin + " j" );
}}, p$1);

Clazz.newMeth(C$, 'setLineWidth$F',  function (width) {
if (width != this.lineWidth ) {
this.closeBlock$();
this.lineWidth=width;
this.pw.println$S("" + new Float(width).toString() + " w" );
}});

Clazz.newMeth(C$, 'setMiterLimit$F',  function (limit) {
if (limit != this.miterLimit ) {
this.closeBlock$();
this.miterLimit=limit;
this.pw.println$S("" + new Float(limit).toString() + " M" );
}}, p$1);

Clazz.newMeth(C$, 'setPaint$java_awt_Paint',  function (paint) {
this.paint=paint;
if (Clazz.instanceOf(paint, "java.awt.Color")) {
var c=paint;
var r=(c.getRed$()) / 255.0;
var g=(c.getGreen$()) / 255.0;
var b=(c.getBlue$()) / 255.0;
this.closeBlock$();
this.pw.println$S("" + new Double(r).toString() + " " + new Double(g).toString() + " " + new Double(b).toString() + " rg " + new Double(r).toString() + " " + new Double(g).toString() + " " + new Double(b).toString() + " RG" );
}});

Clazz.newMeth(C$, 'setPaintMode$',  function () {
});

Clazz.newMeth(C$, 'setRenderingHint$java_awt_RenderingHints_Key$O',  function (arg0, arg1) {
if (arg1 != null ) {
this.rhints.put$O$O(arg0, arg1);
} else {
this.rhints.remove$O(arg0);
}});

Clazz.newMeth(C$, 'setRenderingHints$java_util_Map',  function (hints) {
this.rhints.clear$();
this.rhints.putAll$java_util_Map(hints);
});

Clazz.newMeth(C$, 'setStroke$java_awt_Stroke',  function (s) {
this.originalStroke=s;
this.stroke=p$1.transformStroke$java_awt_Stroke.apply(this, [s]);
if (Clazz.instanceOf(this.stroke, "java.awt.BasicStroke")) {
var bs=this.stroke;
p$1.setLineCap$I.apply(this, [bs.getEndCap$()]);
p$1.setLineJoin$I.apply(this, [bs.getLineJoin$()]);
this.setLineWidth$F(bs.getLineWidth$());
p$1.setMiterLimit$F.apply(this, [bs.getMiterLimit$()]);
}});

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform',  function (t) {
this.oTransform=t;
this.transform=Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform,[t]);
this.transform.concatenate$java_awt_geom_AffineTransform(this.pTransform);
this.stroke=p$1.transformStroke$java_awt_Stroke.apply(this, [this.originalStroke]);
});

Clazz.newMeth(C$, 'setXORMode$java_awt_Color',  function (c1) {
});

Clazz.newMeth(C$, 'shear$D$D',  function (shx, shy) {
this.transform.shear$D$D(shx, shy);
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (tx) {
this.transform.concatenate$java_awt_geom_AffineTransform(tx);
this.stroke=p$1.transformStroke$java_awt_Stroke.apply(this, [this.originalStroke]);
});

Clazz.newMeth(C$, 'transformStroke$java_awt_Stroke',  function (stroke) {
if (!(Clazz.instanceOf(stroke, "java.awt.BasicStroke"))) return stroke;
var st=stroke;
var scale=Math.sqrt(Math.abs(this.transform.getDeterminant$()));
var dash=st.getDashArray$();
if (dash != null ) {
for (var k=0; k < dash.length; ++k) dash[k]*=scale;

}return Clazz.new_([st.getLineWidth$() * scale, st.getEndCap$(), st.getLineJoin$(), st.getMiterLimit$(), dash, st.getDashPhase$() * scale],$I$(2,1).c$$F$I$I$F$FA$F);
}, p$1);

Clazz.newMeth(C$, 'translate$D$D',  function (tx, ty) {
this.transform.translate$D$D(tx, ty);
this.trax=tx;
this.tray=ty;
});

Clazz.newMeth(C$, 'translate$I$I',  function (x, y) {
this.translate$D$D(x, y);
});

Clazz.newMeth(C$, 'twh$F$F$F$F',  function (x, y, tx, ty) {
var nx=x;
var ny=y;
var ntx=tx;
var nty=ty;
var mh=(this.page.getPageFormat$().getHeight$()|0);
var sx=1;
var sy=1;
ny=mh - y;
nty=mh - ty;
nx=sx * (nx - ntx);
ny=sy * (ny - nty);
return "" + C$.df.format$D(nx) + " " + C$.df.format$D(ny) + " " ;
}, p$1);

Clazz.newMeth(C$, 'txy$F$F',  function (x, y) {
var ptSrc=Clazz.new_($I$(16,1).c$$F$F,[x, y]);
var ptDst=Clazz.new_($I$(16,1));
this.transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc, ptDst);
return "" + C$.df.format$D(ptDst.getX$()) + " " + C$.df.format$D(ptDst.getY$()) + " " ;
}, p$1);

Clazz.newMeth(C$, 'drawGlyphVector$java_awt_font_GlyphVector$F$F',  function (g, x, y) {
$I$(17).notImplemented$S(null);
});

C$.$static$=function(){C$.$static$=0;
C$.IDENTITY=Clazz.new_($I$(1,1));
C$.DEF_STROKE=Clazz.new_($I$(2,1));
C$.df=Clazz.new_($I$(3,1).c$$S,["#.###"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
