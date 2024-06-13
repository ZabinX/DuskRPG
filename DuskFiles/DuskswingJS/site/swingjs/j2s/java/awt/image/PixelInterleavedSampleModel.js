(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PixelInterleavedSampleModel", null, 'java.awt.image.ComponentSampleModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$IA',  function (dataType, w, h, pixelStride, scanlineStride, bandOffsets) {
;C$.superclazz.c$$I$I$I$I$I$IA.apply(this,[dataType, w, h, pixelStride, scanlineStride, bandOffsets]);C$.$init$.apply(this);
var minBandOff=this.bandOffsets[0];
var maxBandOff=this.bandOffsets[0];
for (var i=1; i < this.bandOffsets.length; i++) {
minBandOff=Math.min(minBandOff, this.bandOffsets[i]);
maxBandOff=Math.max(maxBandOff, this.bandOffsets[i]);
}
maxBandOff-=minBandOff;
if (maxBandOff > scanlineStride) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offsets between bands must be less than the scanline  stride"]);
}if (pixelStride * w > scanlineStride) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pixel stride times width must be less than or equal to the scanline stride"]);
}if (pixelStride < maxBandOff) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pixel stride must be greater than or equal to the offsets between bands"]);
}}, 1);

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I',  function (w, h) {
var minBandoff=this.bandOffsets[0];
var numBands=this.bandOffsets.length;
for (var i=1; i < numBands; i++) {
if (this.bandOffsets[i] < minBandoff) {
minBandoff=this.bandOffsets[i];
}}
var bandOff;
if (minBandoff > 0) {
bandOff=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) {
bandOff[i]=this.bandOffsets[i] - minBandoff;
}
} else {
bandOff=this.bandOffsets;
}return Clazz.new_(C$.c$$I$I$I$I$I$IA,[this.dataType, w, h, this.pixelStride, this.pixelStride * w, bandOff]);
});

Clazz.newMeth(C$, 'createSubsetSampleModel$IA',  function (bands) {
var newBandOffsets=Clazz.array(Integer.TYPE, [bands.length]);
for (var i=0; i < bands.length; i++) {
newBandOffsets[i]=this.bandOffsets[bands[i]];
}
return Clazz.new_(C$.c$$I$I$I$I$I$IA,[this.dataType, this.width, this.height, this.pixelStride, this.scanlineStride, newBandOffsets]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return C$.superclazz.prototype.hashCode$.apply(this, []) ^ 1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
