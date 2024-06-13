(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SampleModel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height','numBands','dataType'],'O',['秘pix','int[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (dataType, w, h, numBands) {
;C$.$init$.apply(this);
var size=w * h;
if (w <= 0 || h <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width (" + w + ") and height (" + h + ") must be > 0" ]);
}if (size >= 2147483647 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Dimensions (width=" + w + " height=" + h + ") are too large" ]);
}if (dataType < 0 || (dataType > 3 && dataType != 32 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported dataType: " + dataType]);
}if (numBands <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bands must be > 0"]);
}this.dataType=dataType;
this.width=w;
this.height=h;
this.numBands=numBands;
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getNumBands$',  function () {
return this.numBands;
});

Clazz.newMeth(C$, 'getDataType$',  function () {
return this.dataType;
});

Clazz.newMeth(C$, 'getTransferType$',  function () {
return this.dataType;
});

Clazz.newMeth(C$, 'getPixel$I$I$IA$java_awt_image_DataBuffer',  function (x, y, iArray, data) {
var pixels;
if (iArray != null ) pixels=iArray;
 else pixels=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) {
pixels[i]=this.getSample$I$I$I$java_awt_image_DataBuffer(x, y, i, data);
}
return pixels;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O$java_awt_image_DataBuffer',  function (x, y, w, h, obj, data) {
data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
var numDataElems=this.getNumDataElements$();
var cnt=0;
var o=null;
switch (type) {
case 0:
var btemp;
var bdata;
if (obj == null ) bdata=Clazz.array(Byte.TYPE, [numDataElems * w * h ]);
 else bdata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
btemp=o;
for (var k=0; k < numDataElems; k++) {
bdata[cnt++]=btemp[k];
}
}
}
obj=bdata;
break;
case 1:
case 2:
var sdata;
var stemp;
if (obj == null ) sdata=Clazz.array(Short.TYPE, [numDataElems * w * h ]);
 else sdata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
stemp=o;
for (var k=0; k < numDataElems; k++) {
sdata[cnt++]=stemp[k];
}
}
}
obj=sdata;
break;
case 3:
var idata;
var itemp;
if (obj == null ) idata=Clazz.array(Integer.TYPE, [numDataElems * w * h ]);
 else idata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
itemp=o;
for (var k=0; k < numDataElems; k++) {
idata[cnt++]=itemp[k];
}
}
}
obj=idata;
break;
case 4:
var fdata;
var ftemp;
if (obj == null ) fdata=Clazz.array(Float.TYPE, [numDataElems * w * h ]);
 else fdata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
ftemp=o;
for (var k=0; k < numDataElems; k++) {
fdata[cnt++]=ftemp[k];
}
}
}
obj=fdata;
break;
case 5:
var ddata;
var dtemp;
if (obj == null ) ddata=Clazz.array(Double.TYPE, [numDataElems * w * h ]);
 else ddata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
dtemp=o;
for (var k=0; k < numDataElems; k++) {
ddata[cnt++]=dtemp[k];
}
}
}
obj=ddata;
break;
}
data.秘setDoCheckImage$Z(true);
return obj;
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O$java_awt_image_DataBuffer',  function (x, y, w, h, obj, data) {
data.秘setDoCheckImage$Z(false);
var cnt=0;
var type=this.getTransferType$();
var numDataElems=this.getNumDataElements$();
switch (type) {
case 0:
var barray=obj;
var btemp=Clazz.array(Byte.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
btemp[k]=barray[cnt++];
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, btemp, data);
}
}
break;
case 1:
case 2:
var sarray=obj;
var stemp=Clazz.array(Short.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
stemp[k]=sarray[cnt++];
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, stemp, data);
}
}
break;
case 3:
var iArray=obj;
var itemp=Clazz.array(Integer.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
itemp[k]=iArray[cnt++];
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, itemp, data);
}
}
break;
case 4:
var fArray=obj;
var ftemp=Clazz.array(Float.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
ftemp[k]=fArray[cnt++];
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, ftemp, data);
}
}
break;
case 5:
var dArray=obj;
var dtemp=Clazz.array(Double.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
dtemp[k]=dArray[cnt++];
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, dtemp, data);
}
}
break;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'getPixel$I$I$FA$java_awt_image_DataBuffer',  function (x, y, fArray, data) {
var pixels;
if (fArray != null ) pixels=fArray;
 else pixels=Clazz.array(Float.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) pixels[i]=this.getSampleFloat$I$I$I$java_awt_image_DataBuffer(x, y, i, data);

return pixels;
});

Clazz.newMeth(C$, 'getPixel$I$I$DA$java_awt_image_DataBuffer',  function (x, y, dArray, data) {
var pixels;
if (dArray != null ) pixels=dArray;
 else pixels=Clazz.array(Double.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) pixels[i]=this.getSampleDouble$I$I$I$java_awt_image_DataBuffer(x, y, i, data);

return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
data.秘setDoCheckImage$Z(false);
var pixels;
var Offset=0;
if (iArray != null ) pixels=iArray;
 else pixels=Clazz.array(Integer.TYPE, [this.numBands * w * h ]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
for (var k=0; k < this.numBands; k++) {
pixels[Offset++]=this.getSample$I$I$I$java_awt_image_DataBuffer(j, i, k, data);
}
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$FA$java_awt_image_DataBuffer',  function (x, y, w, h, fArray, data) {
data.秘setDoCheckImage$Z(false);
var pixels;
var Offset=0;
if (fArray != null ) pixels=fArray;
 else pixels=Clazz.array(Float.TYPE, [this.numBands * w * h ]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
for (var k=0; k < this.numBands; k++) {
pixels[Offset++]=this.getSampleFloat$I$I$I$java_awt_image_DataBuffer(j, i, k, data);
}
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$DA$java_awt_image_DataBuffer',  function (x, y, w, h, dArray, data) {
var pixels;
var Offset=0;
data.秘setDoCheckImage$Z(false);
if (dArray != null ) pixels=dArray;
 else pixels=Clazz.array(Double.TYPE, [this.numBands * w * h ]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
for (var k=0; k < this.numBands; k++) {
pixels[Offset++]=this.getSampleDouble$I$I$I$java_awt_image_DataBuffer(j, i, k, data);
}
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getSampleFloat$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
var sample;
sample=this.getSample$I$I$I$java_awt_image_DataBuffer(x, y, b, data);
return sample;
});

Clazz.newMeth(C$, 'getSampleDouble$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
var sample;
sample=this.getSample$I$I$I$java_awt_image_DataBuffer(x, y, b, data);
return sample;
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, b, iArray, data) {
var pixels;
var Offset=0;
data.秘setDoCheckImage$Z(false);
if (iArray != null ) pixels=iArray;
 else pixels=Clazz.array(Integer.TYPE, [w * h]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
pixels[Offset++]=this.getSample$I$I$I$java_awt_image_DataBuffer(j, i, b, data);
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer',  function (x, y, w, h, b, fArray, data) {
var pixels;
var Offset=0;
data.秘setDoCheckImage$Z(false);
if (fArray != null ) pixels=fArray;
 else pixels=Clazz.array(Float.TYPE, [w * h]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
pixels[Offset++]=this.getSampleFloat$I$I$I$java_awt_image_DataBuffer(j, i, b, data);
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer',  function (x, y, w, h, b, dArray, data) {
var pixels;
var Offset=0;
data.秘setDoCheckImage$Z(false);
if (dArray != null ) pixels=dArray;
 else pixels=Clazz.array(Double.TYPE, [w * h]);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
pixels[Offset++]=this.getSampleDouble$I$I$I$java_awt_image_DataBuffer(j, i, b, data);
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'setPixel$I$I$IA$java_awt_image_DataBuffer',  function (x, y, iArray, data) {
for (var i=0; i < this.numBands; i++) this.setSample$I$I$I$I$java_awt_image_DataBuffer(x, y, i, iArray[i], data);

});

Clazz.newMeth(C$, 'setPixel$I$I$FA$java_awt_image_DataBuffer',  function (x, y, fArray, data) {
for (var i=0; i < this.numBands; i++) this.setSample$I$I$I$F$java_awt_image_DataBuffer(x, y, i, fArray[i], data);

});

Clazz.newMeth(C$, 'setPixel$I$I$DA$java_awt_image_DataBuffer',  function (x, y, dArray, data) {
for (var i=0; i < this.numBands; i++) this.setSample$I$I$I$D$java_awt_image_DataBuffer(x, y, i, dArray[i], data);

});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
var Offset=0;
data.秘setDoCheckImage$Z(false);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
for (var k=0; k < this.numBands; k++) {
this.setSample$I$I$I$I$java_awt_image_DataBuffer(j, i, k, iArray[Offset++], data);
}
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$FA$java_awt_image_DataBuffer',  function (x, y, w, h, fArray, data) {
var Offset=0;
data.秘setDoCheckImage$Z(false);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
for (var k=0; k < this.numBands; k++) {
this.setSample$I$I$I$F$java_awt_image_DataBuffer(j, i, k, fArray[Offset++], data);
}
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$DA$java_awt_image_DataBuffer',  function (x, y, w, h, dArray, data) {
var Offset=0;
data.秘setDoCheckImage$Z(false);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
for (var k=0; k < this.numBands; k++) {
this.setSample$I$I$I$D$java_awt_image_DataBuffer(j, i, k, dArray[Offset++], data);
}
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setSample$I$I$I$F$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
var sample=(s|0);
this.setSample$I$I$I$I$java_awt_image_DataBuffer(x, y, b, sample, data);
});

Clazz.newMeth(C$, 'setSample$I$I$I$D$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
var sample=(s|0);
this.setSample$I$I$I$I$java_awt_image_DataBuffer(x, y, b, sample, data);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, b, iArray, data) {
var Offset=0;
data.秘setDoCheckImage$Z(false);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
this.setSample$I$I$I$I$java_awt_image_DataBuffer(j, i, b, iArray[Offset++], data);
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer',  function (x, y, w, h, b, fArray, data) {
var Offset=0;
data.秘setDoCheckImage$Z(false);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
this.setSample$I$I$I$F$java_awt_image_DataBuffer(j, i, b, fArray[Offset++], data);
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer',  function (x, y, w, h, b, dArray, data) {
var Offset=0;
data.秘setDoCheckImage$Z(false);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
this.setSample$I$I$I$D$java_awt_image_DataBuffer(j, i, b, dArray[Offset++], data);
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
