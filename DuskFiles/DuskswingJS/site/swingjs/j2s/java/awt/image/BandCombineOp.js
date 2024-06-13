(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.util.Arrays','sun.awt.image.ImagingLib',['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BandCombineOp", null, null, 'java.awt.image.RasterOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nrows=0;
this.ncols=0;
},1);

C$.$fields$=[['I',['nrows','ncols'],'O',['matrix','float[][]','hints','java.awt.RenderingHints']]]

Clazz.newMeth(C$, 'c$$FAA$java_awt_RenderingHints',  function (matrix, hints) {
;C$.$init$.apply(this);
this.nrows=matrix.length;
this.ncols=matrix[0].length;
this.matrix=Clazz.array(Float.TYPE, [this.nrows, null]);
for (var i=0; i < this.nrows; i++) {
if (this.ncols > matrix[i].length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["row " + i + " too short" ]);
}this.matrix[i]=$I$(1).copyOf$FA$I(matrix[i], this.ncols);
}
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'getMatrix$',  function () {
var ret=Clazz.array(Float.TYPE, [this.nrows, null]);
for (var i=0; i < this.nrows; i++) {
ret[i]=$I$(1).copyOf$FA$I(this.matrix[i], this.ncols);
}
return ret;
});

Clazz.newMeth(C$, 'filter$java_awt_image_Raster$java_awt_image_WritableRaster',  function (src, dst) {
var nBands=src.getNumBands$();
if (this.ncols != nBands && this.ncols != (nBands + 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns in the matrix (" + this.ncols + ") must be equal to the number" + " of bands ([+1]) in src (" + nBands + ")." ]);
}if (dst == null ) {
dst=this.createCompatibleDestRaster$java_awt_image_Raster(src);
} else if (this.nrows != dst.getNumBands$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows in the matrix (" + this.nrows + ") must be equal to the number" + " of bands ([+1]) in dst (" + nBands + ")." ]);
}if ($I$(2).filter$java_awt_image_RasterOp$java_awt_image_Raster$java_awt_image_WritableRaster(this, src, dst) != null ) {
return dst;
}var pixel=null;
var dstPixel=Clazz.array(Integer.TYPE, [dst.getNumBands$()]);
var accum;
var sminX=src.getMinX$();
var sY=src.getMinY$();
var dminX=dst.getMinX$();
var dY=dst.getMinY$();
var sX;
var dX;
if (this.ncols == nBands) {
for (var y=0; y < src.getHeight$(); y++, sY++, dY++) {
dX=dminX;
sX=sminX;
for (var x=0; x < src.getWidth$(); x++, sX++, dX++) {
pixel=src.getPixel$I$I$IA(sX, sY, pixel);
for (var r=0; r < this.nrows; r++) {
accum=0.0;
for (var c=0; c < this.ncols; c++) {
accum+=this.matrix[r][c] * pixel[c];
}
dstPixel[r]=(accum|0);
}
dst.setPixel$I$I$IA(dX, dY, dstPixel);
}
}
} else {
for (var y=0; y < src.getHeight$(); y++, sY++, dY++) {
dX=dminX;
sX=sminX;
for (var x=0; x < src.getWidth$(); x++, sX++, dX++) {
pixel=src.getPixel$I$I$IA(sX, sY, pixel);
for (var r=0; r < this.nrows; r++) {
accum=0.0;
for (var c=0; c < nBands; c++) {
accum+=this.matrix[r][c] * pixel[c];
}
dstPixel[r]=((accum + this.matrix[r][nBands])|0);
}
dst.setPixel$I$I$IA(dX, dY, dstPixel);
}
}
}return dst;
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_Raster',  function (src) {
return src.getBounds$();
});

Clazz.newMeth(C$, 'createCompatibleDestRaster$java_awt_image_Raster',  function (src) {
var nBands=src.getNumBands$();
if ((this.ncols != nBands) && (this.ncols != (nBands + 1)) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns in the matrix (" + this.ncols + ") must be equal to the number" + " of bands ([+1]) in src (" + nBands + ")." ]);
}if (src.getNumBands$() == this.nrows) {
return src.createCompatibleWritableRaster$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Don\'t know how to create a  compatible Raster with " + this.nrows + " bands." ]);
}});

Clazz.newMeth(C$, 'getPoint2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (srcPt, dstPt) {
if (dstPt == null ) {
dstPt=Clazz.new_($I$(3,1));
}dstPt.setLocation$D$D(srcPt.getX$(), srcPt.getY$());
return dstPt;
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.hints;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
