(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ReaderUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'computeUpdatedPixels$I$I$I$I$I$I$I$I$I$IA$I',  function (sourceOffset, sourceExtent, destinationOffset, dstMin, dstMax, sourceSubsampling, passStart, passExtent, passPeriod, vals, offset) {
var gotPixel=false;
var firstDst=-1;
var secondDst=-1;
var lastDst=-1;
for (var i=0; i < passExtent; i++) {
var src=passStart + i * passPeriod;
if (src < sourceOffset) {
continue;
}if ((src - sourceOffset) % sourceSubsampling != 0) {
continue;
}if (src >= sourceOffset + sourceExtent) {
break;
}var dst=destinationOffset + ((src - sourceOffset)/sourceSubsampling|0);
if (dst < dstMin) {
continue;
}if (dst > dstMax) {
break;
}if (!gotPixel) {
firstDst=dst;
gotPixel=true;
} else if (secondDst == -1) {
secondDst=dst;
}lastDst=dst;
}
vals[offset]=firstDst;
if (!gotPixel) {
vals[offset + 2]=0;
} else {
vals[offset + 2]=lastDst - firstDst + 1;
}vals[offset + 4]=Math.max(secondDst - firstDst, 1);
}, 1);

Clazz.newMeth(C$, 'computeUpdatedPixels$java_awt_Rectangle$java_awt_Point$I$I$I$I$I$I$I$I$I$I$I$I',  function (sourceRegion, destinationOffset, dstMinX, dstMinY, dstMaxX, dstMaxY, sourceXSubsampling, sourceYSubsampling, passXStart, passYStart, passWidth, passHeight, passPeriodX, passPeriodY) {
var vals=Clazz.array(Integer.TYPE, [6]);
C$.computeUpdatedPixels$I$I$I$I$I$I$I$I$I$IA$I(sourceRegion.x, sourceRegion.width, destinationOffset.x, dstMinX, dstMaxX, sourceXSubsampling, passXStart, passWidth, passPeriodX, vals, 0);
C$.computeUpdatedPixels$I$I$I$I$I$I$I$I$I$IA$I(sourceRegion.y, sourceRegion.height, destinationOffset.y, dstMinY, dstMaxY, sourceYSubsampling, passYStart, passHeight, passPeriodY, vals, 1);
return vals;
}, 1);

Clazz.newMeth(C$, 'readMultiByteInteger$javax_imageio_stream_ImageInputStream',  function (iis) {
var value=iis.readByte$();
var result=value & 127;
while ((value & 128) == 128){
result<<=7;
value=iis.readByte$();
result|=(value & 127);
}
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
