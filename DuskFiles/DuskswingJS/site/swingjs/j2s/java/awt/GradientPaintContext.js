(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.image.DirectColorModel','java.lang.ref.WeakReference',['java.awt.geom.Point2D','.Double'],'java.awt.image.ColorModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GradientPaintContext", null, null, 'java.awt.PaintContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['cyclic'],'D',['x1','y1','dx','dy'],'O',['interp','int[]','saved','java.awt.image.Raster','model','java.awt.image.ColorModel']]
,['O',['xrgbmodel','java.awt.image.ColorModel','+xbgrmodel','+cachedModel','cached','java.lang.ref.WeakReference']]]

Clazz.newMeth(C$, 'getCachedRaster$java_awt_image_ColorModel$I$I',  function (cm, w, h) {
if (cm === C$.cachedModel ) {
if (C$.cached != null ) {
var ras=C$.cached.get$();
if (ras != null  && ras.getWidth$() >= w  && ras.getHeight$() >= h ) {
C$.cached=null;
return ras;
}}}return cm.createCompatibleWritableRaster$I$I(w, h);
}, 1);

Clazz.newMeth(C$, 'putCachedRaster$java_awt_image_ColorModel$java_awt_image_Raster',  function (cm, ras) {
if (C$.cached != null ) {
var cras=C$.cached.get$();
if (cras != null ) {
var cw=cras.getWidth$();
var ch=cras.getHeight$();
var iw=ras.getWidth$();
var ih=ras.getHeight$();
if (cw >= iw && ch >= ih ) {
return;
}if (cw * ch >= iw * ih) {
return;
}}}C$.cachedModel=cm;
C$.cached=Clazz.new_($I$(2,1).c$$O,[ras]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_AffineTransform$java_awt_Color$java_awt_Color$Z',  function (cm, p1, p2, xform, c1, c2, cyclic) {
;C$.$init$.apply(this);
var xvec=Clazz.new_($I$(3,1).c$$D$D,[1, 0]);
var yvec=Clazz.new_($I$(3,1).c$$D$D,[0, 1]);
try {
var inverse=xform.createInverse$();
inverse.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(xvec, xvec);
inverse.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(yvec, yvec);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.geom.NoninvertibleTransformException")){
xvec.setLocation$D$D(0, 0);
yvec.setLocation$D$D(0, 0);
} else {
throw e;
}
}
var udx=p2.getX$() - p1.getX$();
var udy=p2.getY$() - p1.getY$();
var ulenSq=udx * udx + udy * udy;
if (ulenSq <= 4.9E-324 ) {
this.dx=0;
this.dy=0;
} else {
this.dx=(xvec.getX$() * udx + xvec.getY$() * udy) / ulenSq;
this.dy=(yvec.getX$() * udx + yvec.getY$() * udy) / ulenSq;
if (cyclic) {
this.dx=this.dx % 1.0;
this.dy=this.dy % 1.0;
} else {
if (this.dx < 0 ) {
var p=p1;
p1=p2;
p2=p;
var c=c1;
c1=c2;
c2=c;
this.dx=-this.dx;
this.dy=-this.dy;
}}}var dp1=xform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(p1, null);
this.x1=dp1.getX$();
this.y1=dp1.getY$();
this.cyclic=cyclic;
var rgb1=c1.getRGB$();
var rgb2=c2.getRGB$();
var a1=(rgb1 >> 24) & 255;
var r1=(rgb1 >> 16) & 255;
var g1=(rgb1 >> 8) & 255;
var b1=(rgb1) & 255;
var da=((rgb2 >> 24) & 255) - a1;
var dr=((rgb2 >> 16) & 255) - r1;
var dg=((rgb2 >> 8) & 255) - g1;
var db=((rgb2) & 255) - b1;
if (a1 == 255 && da == 0 ) {
this.model=C$.xrgbmodel;
if (Clazz.instanceOf(cm, "java.awt.image.DirectColorModel")) {
var dcm=cm;
var tmp=dcm.getAlphaMask$();
if ((tmp == 0 || tmp == 255 ) && dcm.getRedMask$() == 255  && dcm.getGreenMask$() == 65280  && dcm.getBlueMask$() == 16711680 ) {
this.model=C$.xbgrmodel;
tmp=r1;
r1=b1;
b1=tmp;
tmp=dr;
dr=db;
db=tmp;
}}} else {
this.model=$I$(4).getRGBdefault$();
}this.interp=Clazz.array(Integer.TYPE, [cyclic ? 513 : 257]);
for (var i=0; i <= 256; i++) {
var rel=i / 256.0;
var rgb=((((a1 + da * rel)|0)) << 24) | ((((r1 + dr * rel)|0)) << 16) | ((((g1 + dg * rel)|0)) << 8) | ((((b1 + db * rel)|0))) ;
this.interp[i]=rgb;
if (cyclic) {
this.interp[512 - i]=rgb;
}}
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.saved != null ) {
C$.putCachedRaster$java_awt_image_ColorModel$java_awt_image_Raster(this.model, this.saved);
this.saved=null;
}});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'getRaster$I$I$I$I',  function (x, y, w, h) {
var rowrel=(x - this.x1) * this.dx + (y - this.y1) * this.dy;
var rast=this.saved;
if (rast == null  || rast.getWidth$() < w  || rast.getHeight$() < h ) {
rast=C$.getCachedRaster$java_awt_image_ColorModel$I$I(this.model, w, h);
this.saved=rast;
}var irast=rast;
var off=irast.getDataOffset$I(0);
var adjust=irast.getScanlineStride$() - w;
var pixels=irast.getDataStorage$();
if (this.cyclic) {
this.cycleFillRaster$IA$I$I$I$I$D$D$D(pixels, off, adjust, w, h, rowrel, this.dx, this.dy);
} else {
this.clipFillRaster$IA$I$I$I$I$D$D$D(pixels, off, adjust, w, h, rowrel, this.dx, this.dy);
}irast.markDirty$();
return rast;
});

Clazz.newMeth(C$, 'cycleFillRaster$IA$I$I$I$I$D$D$D',  function (pixels, off, adjust, w, h, rowrel, dx, dy) {
rowrel=rowrel % 2.0;
var irowrel=(((rowrel * (1073741824))|0)) << 1;
var idx=((-dx * (-2147483648))|0);
var idy=((-dy * (-2147483648))|0);
while (--h >= 0){
var icolrel=irowrel;
for (var j=w; j > 0; j--) {
pixels[off++]=this.interp[icolrel >>> 23];
icolrel+=idx;
}
off+=adjust;
irowrel+=idy;
}
});

Clazz.newMeth(C$, 'clipFillRaster$IA$I$I$I$I$D$D$D',  function (pixels, off, adjust, w, h, rowrel, dx, dy) {
while (--h >= 0){
var colrel=rowrel;
var j=w;
if (colrel <= 0.0 ) {
var rgb=this.interp[0];
do {
pixels[off++]=rgb;
colrel+=dx;
} while (--j > 0 && colrel <= 0.0  );
}while (colrel < 1.0  && --j >= 0 ){
pixels[off++]=this.interp[((colrel * 256)|0)];
colrel+=dx;
}
if (j > 0) {
var rgb=this.interp[256];
do {
pixels[off++]=rgb;
} while (--j > 0);
}off+=adjust;
rowrel+=dy;
}
});

C$.$static$=function(){C$.$static$=0;
C$.xrgbmodel=Clazz.new_($I$(1,1).c$$I$I$I$I,[24, 16711680, 65280, 255]);
C$.xbgrmodel=Clazz.new_($I$(1,1).c$$I$I$I$I,[24, 255, 65280, 16711680]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
