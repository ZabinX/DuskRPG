(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.M3','javajs.util.Lst','java.util.Hashtable',['javajs.img.GifEncoder','.ColorItem'],'javajs.util.CU',['javajs.img.GifEncoder','.ColorCell']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GifEncoder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javajs.img.ImageEncoder');
C$.$classes$=[['ColorItem',2],['ColorCell',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.addHeader=true;
this.addImage=true;
this.addTrailer=true;
this.floydSteinberg=true;
this.delayTime100ths=-1;
this.bitsPerPixel=1;
this.maxbits=12;
this.maxmaxcode=4096;
this.htab=Clazz.array(Integer.TYPE, [5003]);
this.codetab=Clazz.array(Integer.TYPE, [5003]);
this.hsize=5003;
this.freeEnt=0;
this.clearFlag=false;
this.pass=0;
this.curAccum=0;
this.curBits=0;
this.masks=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
this.buf=Clazz.array(Byte.TYPE, [256]);
},1);

C$.$fields$=[['Z',['interlaced','addHeader','addImage','addTrailer','isTransparent','floydSteinberg','capturing','looping','clearFlag'],'I',['backgroundColor','delayTime100ths','bitsPerPixel','byteCount','initCodeSize','curpt','nBits','maxbits','maxcode','maxmaxcode','hsize','freeEnt','clearCode','EOFCode','countDown','pass','curx','cury','curAccum','curBits','bufPt'],'O',['params','java.util.Map','palette','javajs.util.P3[]','htab','int[]','+codetab','+masks','buf','byte[]']]
,['O',['xyz2rgb','javajs.util.M3','+rgb2xyz','INTERLACE_PARAMS','int[]']]]

Clazz.newMeth(C$, 'setParams$java_util_Map',  function (params) {
this.params=params;
var ic=params.get$O("transparentColor");
if (ic == null ) {
ic=params.get$O("backgroundColor");
if (ic != null ) this.backgroundColor=ic.intValue$();
} else {
this.backgroundColor=ic.intValue$();
this.isTransparent=true;
}this.interlaced=(Boolean.TRUE === params.get$O("interlaced") );
if (params.containsKey$O("captureRootExt") || !params.containsKey$O("captureMode") ) return;
this.interlaced=false;
this.capturing=true;
var c=params.get$O("captureByteCount");
if (c != null ) this.byteCount=c.intValue$();
switch ("maec".indexOf$S((params.get$O("captureMode")).substring$I$I(0, 1))) {
case 0:
params.put$O$O("captureMode", "add");
this.addImage=false;
this.addTrailer=false;
break;
case 1:
this.addHeader=false;
this.addTrailer=false;
var fps=Math.abs((params.get$O("captureFps")).intValue$());
this.delayTime100ths=(fps == 0 ? 0 : (100/fps|0));
this.looping=(Boolean.FALSE !== params.get$O("captureLooping") );
break;
case 2:
this.addHeader=false;
this.addImage=false;
break;
case 3:
this.addHeader=false;
this.addImage=false;
this.out.cancel$();
break;
}
});

Clazz.newMeth(C$, 'generate$',  function () {
if (this.addHeader) p$1.writeHeader.apply(this, []);
this.addHeader=false;
if (this.addImage) {
p$1.createPalette.apply(this, []);
p$1.writeGraphicControlExtension.apply(this, []);
if (this.delayTime100ths >= 0 && this.looping ) p$1.writeNetscapeLoopExtension.apply(this, []);
p$1.writeImage.apply(this, []);
}});

Clazz.newMeth(C$, 'close$',  function () {
if (this.addTrailer) {
p$1.writeTrailer.apply(this, []);
} else {
this.doClose=false;
}if (this.capturing) this.params.put$O$O("captureByteCount", Integer.valueOf$I(this.byteCount));
});

Clazz.newMeth(C$, 'createPalette',  function () {
var tempColors=Clazz.new_($I$(3,1));
var ciHash=Clazz.new_($I$(4,1));
for (var i=0, n=this.pixels.length; i < n; i++) {
var rgb=this.pixels[i];
var key=Integer.valueOf$I(rgb);
var item=ciHash.get$O(key);
if (item == null ) {
item=Clazz.new_([this, null, rgb, rgb == this.backgroundColor],$I$(5,1).c$$I$Z);
ciHash.put$O$O(key, item);
tempColors.addLast$O(item);
}}
var nColors=tempColors.size$();
System.out.println$S("GIF total image colors: " + nColors);
ciHash=null;
var cells=p$1.quantizeColors$javajs_util_Lst.apply(this, [tempColors]);
nColors=cells.size$();
System.out.println$S("GIF final color count: " + nColors);
var colorMap=Clazz.new_($I$(4,1));
this.bitsPerPixel=(nColors <= 2 ? 1 : nColors <= 4 ? 2 : nColors <= 16 ? 4 : 8);
this.palette=Clazz.array($I$(1), [1 << this.bitsPerPixel]);
for (var i=0; i < nColors; i++) {
var c=cells.get$I(i);
colorMap.put$O$O(Integer.valueOf$I($I$(6,"colorPtToFFRGB$javajs_util_T3",[this.palette[i]=c.setColor$()])), c);
}
this.pixels=p$1.indexPixels$javajs_util_Lst$java_util_Map.apply(this, [cells, colorMap]);
}, p$1);

Clazz.newMeth(C$, 'quantizeColors$javajs_util_Lst',  function (tempColors) {
var n=tempColors.size$();
var cells=Clazz.new_($I$(3,1));
var cc=Clazz.new_($I$(7,1).c$$I,[this, null, 0]);
cc.addLast$O(Clazz.new_($I$(5,1).c$$I$Z,[this, null, this.backgroundColor, true]));
cells.addLast$O(cc);
cc=Clazz.new_($I$(7,1).c$$I,[this, null, 1]);
if (n > 256) cells.addLast$O(cc);
for (var i=0; i < n; i++) {
var c=tempColors.get$I(i);
if (c.isBackground) continue;
cc.addLast$O(c);
if (n <= 256) {
cells.addLast$O(cc);
cc=Clazz.new_([this, null, cells.size$()],$I$(7,1).c$$I);
}}
tempColors.clear$();
if (n > 256) while ((n=cells.size$()) < 256){
var maxVol=0;
var maxCell=null;
for (var i=n; --i >= 1; ) {
var c=cells.get$I(i);
var v=c.getVolume$Z(false);
if (v > maxVol ) {
maxVol=v;
maxCell=c;
}}
if (maxCell == null  || !maxCell.splitCell$javajs_util_Lst(cells) ) break;
}
return cells;
}, p$1);

Clazz.newMeth(C$, 'indexPixels$javajs_util_Lst$java_util_Map',  function (cells, colorMap) {
var w2=this.width + 2;
var errors=Clazz.array($I$(1), [w2]);
var newPixels=Clazz.array(Integer.TYPE, [this.pixels.length]);
var err=Clazz.new_($I$(1,1));
var lab;
var rgb;
var nearestCell=Clazz.new_($I$(4,1));
for (var i=0, p=0; i < this.height; ++i) {
var notLastRow=(i != this.height - 1);
for (var j=0; j < this.width; ++j, p++) {
if (this.pixels[p] == this.backgroundColor) {
continue;
}var pe=errors[p % w2];
if (pe == null  || pe.x == 3.4028235E38  ) {
lab=null;
rgb=this.pixels[p];
} else {
lab=this.toLABnorm$I(this.pixels[p]);
err=pe;
err.x=p$1.clamp$F$F$F.apply(this, [err.x, -75, 75]);
err.y=p$1.clamp$F$F$F.apply(this, [err.y, -75, 75]);
err.z=p$1.clamp$F$F$F.apply(this, [err.z, -75, 75]);
lab.add$javajs_util_T3(err);
rgb=$I$(6,"colorPtToFFRGB$javajs_util_T3",[this.toRGB$javajs_util_P3(lab)]);
}var key=Integer.valueOf$I(rgb);
var cell=colorMap.get$O(key);
if (cell == null ) {
lab=this.toLABnorm$I(rgb);
cell=nearestCell.get$O(key);
if (cell == null ) {
var maxerr=3.4028235E38;
for (var ib=cells.size$(); --ib >= 1; ) {
var c=cells.get$I(ib);
err.sub2$javajs_util_T3$javajs_util_T3(lab, c.center);
var d=err.lengthSquared$();
if (d < maxerr ) {
maxerr=d;
cell=c;
}}
nearestCell.put$O$O(key, cell);
}if (this.floydSteinberg) {
err.sub2$javajs_util_T3$javajs_util_T3(lab, cell.center);
var notLastCol=(j < this.width - 1);
if (notLastCol) p$1.addError$javajs_util_P3$I$javajs_util_P3A$I$I.apply(this, [err, 7, errors, p + 1, w2]);
if (notLastRow) {
if (j > 0) p$1.addError$javajs_util_P3$I$javajs_util_P3A$I$I.apply(this, [err, 3, errors, p + this.width - 1, w2]);
p$1.addError$javajs_util_P3$I$javajs_util_P3A$I$I.apply(this, [err, 5, errors, p + this.width, w2]);
if (notLastCol) p$1.addError$javajs_util_P3$I$javajs_util_P3A$I$I.apply(this, [err, 1, errors, p + this.width + 1 , w2]);
}}err.x=3.4028235E38;
}newPixels[p]=cell.index;
}
}
return newPixels;
}, p$1);

Clazz.newMeth(C$, 'addError$javajs_util_P3$I$javajs_util_P3A$I$I',  function (err, f, errors, p, w2) {
if (this.pixels[p] == this.backgroundColor) return;
p%=w2;
var errp=errors[p];
if (errp == null ) errp=errors[p]=Clazz.new_($I$(1,1));
 else if (errp.x == 3.4028235E38 ) errp.set$F$F$F(0, 0, 0);
errp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f / 16.0, err, errp);
}, p$1);

Clazz.newMeth(C$, 'toLABnorm$I',  function (rgb) {
var lab=$I$(1,"new3$F$F$F",[(rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255]);
this.rgbToXyz$javajs_util_P3$javajs_util_P3(lab, lab);
this.xyzToLab$javajs_util_P3$javajs_util_P3(lab, lab);
lab.y=(lab.y + 86.185) / (184.439) * 100.0;
lab.z=(lab.z + 107.863) / (202.345) * 100.0;
return lab;
});

Clazz.newMeth(C$, 'toRGB$javajs_util_P3',  function (lab) {
var xyz=$I$(1).newP$javajs_util_T3(lab);
xyz.y=xyz.y / 100.0 * (184.439) - 86.185;
xyz.z=xyz.z / 100.0 * (202.345) - 107.863;
this.labToXyz$javajs_util_P3$javajs_util_P3(xyz, xyz);
return this.xyzToRgb$javajs_util_P3$javajs_util_P3(xyz, xyz);
});

Clazz.newMeth(C$, 'rgbToXyz$javajs_util_P3$javajs_util_P3',  function (rgb, xyz) {
if (xyz == null ) xyz=Clazz.new_($I$(1,1));
xyz.x=p$1.sxyz$F.apply(this, [rgb.x]);
xyz.y=p$1.sxyz$F.apply(this, [rgb.y]);
xyz.z=p$1.sxyz$F.apply(this, [rgb.z]);
C$.rgb2xyz.rotate$javajs_util_T3(xyz);
return xyz;
});

Clazz.newMeth(C$, 'sxyz$F',  function (x) {
x/=255;
return (x <= 0.04045  ? x / 12.92 : Math.pow(((x + 0.055) / 1.055), 2.4)) * 100;
}, p$1);

Clazz.newMeth(C$, 'xyzToRgb$javajs_util_P3$javajs_util_P3',  function (xyz, rgb) {
if (rgb == null ) rgb=Clazz.new_($I$(1,1));
rgb.setT$javajs_util_T3(xyz);
rgb.scale$F(0.01);
C$.xyz2rgb.rotate$javajs_util_T3(rgb);
rgb.x=p$1.clamp$F$F$F.apply(this, [p$1.srgb$F.apply(this, [rgb.x]), 0, 255]);
rgb.y=p$1.clamp$F$F$F.apply(this, [p$1.srgb$F.apply(this, [rgb.y]), 0, 255]);
rgb.z=p$1.clamp$F$F$F.apply(this, [p$1.srgb$F.apply(this, [rgb.z]), 0, 255]);
return rgb;
});

Clazz.newMeth(C$, 'srgb$F',  function (x) {
return (x > 0.0031308  ? (1.055 * Math.pow(x, 0.4166666666666667)) - 0.055 : x * 12.92) * 255;
}, p$1);

Clazz.newMeth(C$, 'xyzToLab$javajs_util_P3$javajs_util_P3',  function (xyz, lab) {
if (lab == null ) lab=Clazz.new_($I$(1,1));
var x=p$1.flab$F.apply(this, [xyz.x / 95.0429]);
var y=p$1.flab$F.apply(this, [xyz.y / 100]);
var z=p$1.flab$F.apply(this, [xyz.z / 108.89]);
lab.x=(116 * y) - 16;
lab.y=500 * (x - y);
lab.z=200 * (y - z);
return lab;
});

Clazz.newMeth(C$, 'flab$F',  function (t) {
return (t > 0.00885645168  ? Math.pow(t, 0.333333333) : 7.78703704 * t + 0.137931034);
}, p$1);

Clazz.newMeth(C$, 'labToXyz$javajs_util_P3$javajs_util_P3',  function (lab, xyz) {
if (xyz == null ) xyz=Clazz.new_($I$(1,1));
xyz.setT$javajs_util_T3(lab);
var y=(xyz.x + 16) / 116;
var x=xyz.y / 500 + y;
var z=y - xyz.z / 200;
xyz.x=p$1.fxyz$F.apply(this, [x]) * 95.0429;
xyz.y=p$1.fxyz$F.apply(this, [y]) * 100;
xyz.z=p$1.fxyz$F.apply(this, [z]) * 108.89;
return xyz;
});

Clazz.newMeth(C$, 'fxyz$F',  function (t) {
return (t > 0.206896552  ? t * t * t  : 0.128418549 * (t - 0.137931034));
}, p$1);

Clazz.newMeth(C$, 'clamp$F$F$F',  function (c, min, max) {
c=(c < min  ? min : c > max  ? max : c);
return (min == 0  ? Math.round(c) : c);
}, p$1);

Clazz.newMeth(C$, 'writeHeader',  function () {
this.putString$S("GIF89a");
p$1.putWord$I.apply(this, [this.width]);
p$1.putWord$I.apply(this, [this.height]);
this.putByte$I(0);
this.putByte$I(0);
this.putByte$I(0);
}, p$1);

Clazz.newMeth(C$, 'writeGraphicControlExtension',  function () {
if (this.isTransparent || this.delayTime100ths >= 0 ) {
this.putByte$I(33);
this.putByte$I(249);
this.putByte$I(4);
this.putByte$I((this.isTransparent ? 9 : 0) | (this.delayTime100ths > 0 ? 2 : 0));
p$1.putWord$I.apply(this, [this.delayTime100ths > 0 ? this.delayTime100ths : 0]);
this.putByte$I(0);
this.putByte$I(0);
}}, p$1);

Clazz.newMeth(C$, 'writeNetscapeLoopExtension',  function () {
this.putByte$I(33);
this.putByte$I(255);
this.putByte$I(11);
this.putString$S("NETSCAPE2.0");
this.putByte$I(3);
this.putByte$I(1);
p$1.putWord$I.apply(this, [0]);
this.putByte$I(0);
}, p$1);

Clazz.newMeth(C$, 'writeImage',  function () {
this.putByte$I(44);
p$1.putWord$I.apply(this, [0]);
p$1.putWord$I.apply(this, [0]);
p$1.putWord$I.apply(this, [this.width]);
p$1.putWord$I.apply(this, [this.height]);
var packedFields=128 | (this.interlaced ? 64 : 0) | (this.bitsPerPixel - 1) ;
this.putByte$I(packedFields);
var colorMapSize=1 << this.bitsPerPixel;
var p=Clazz.new_($I$(1,1));
for (var i=0; i < colorMapSize; i++) {
if (this.palette[i] != null ) p=this.palette[i];
this.putByte$I((p.x|0));
this.putByte$I((p.y|0));
this.putByte$I((p.z|0));
}
this.putByte$I(this.initCodeSize=(this.bitsPerPixel <= 1 ? 2 : this.bitsPerPixel));
p$1.compress.apply(this, []);
this.putByte$I(0);
}, p$1);

Clazz.newMeth(C$, 'writeTrailer',  function () {
this.putByte$I(59);
}, p$1);

Clazz.newMeth(C$, 'nextPixel',  function () {
if (this.countDown-- == 0) return -1;
var colorIndex=this.pixels[this.curpt];
++this.curx;
if (this.curx == this.width) {
this.curx=0;
if (this.interlaced) p$1.updateY$I$I.apply(this, [C$.INTERLACE_PARAMS[this.pass], C$.INTERLACE_PARAMS[this.pass + 4]]);
 else ++this.cury;
}this.curpt=this.cury * this.width + this.curx;
return colorIndex & 255;
}, p$1);

Clazz.newMeth(C$, 'updateY$I$I',  function (yNext, yNew) {
this.cury+=yNext;
if (yNew >= 0 && this.cury >= this.height ) {
this.cury=yNew;
++this.pass;
}}, p$1);

Clazz.newMeth(C$, 'putWord$I',  function (w) {
this.putByte$I(w);
this.putByte$I(w >> 8);
}, p$1);

Clazz.newMeth(C$, 'MAXCODE$I',  function (nBits) {
return (1 << nBits) - 1;
}, 1);

Clazz.newMeth(C$, 'compress',  function () {
this.countDown=this.width * this.height;
this.pass=0;
this.curx=0;
this.cury=0;
this.clearFlag=false;
this.nBits=this.initCodeSize + 1;
this.maxcode=C$.MAXCODE$I(this.nBits);
this.clearCode=1 << this.initCodeSize;
this.EOFCode=this.clearCode + 1;
this.freeEnt=this.clearCode + 2;
this.bufPt=0;
var ent=p$1.nextPixel.apply(this, []);
var hshift=0;
var fcode;
for (fcode=this.hsize; fcode < 65536; fcode*=2) ++hshift;

hshift=8 - hshift;
var hsizeReg=this.hsize;
p$1.clearHash$I.apply(this, [hsizeReg]);
p$1.output$I.apply(this, [this.clearCode]);
var c;
 outer_loop : while ((c=p$1.nextPixel.apply(this, [])) != -1){
fcode=(c << this.maxbits) + ent;
var i=(c << hshift) ^ ent;
if (this.htab[i] == fcode) {
ent=this.codetab[i];
continue;
} else if (this.htab[i] >= 0) {
var disp=hsizeReg - i;
if (i == 0) disp=1;
do {
if ((i-=disp) < 0) i+=hsizeReg;
if (this.htab[i] == fcode) {
ent=this.codetab[i];
continue outer_loop;
}} while (this.htab[i] >= 0);
}p$1.output$I.apply(this, [ent]);
ent=c;
if (this.freeEnt < this.maxmaxcode) {
this.codetab[i]=this.freeEnt++;
this.htab[i]=fcode;
} else {
p$1.clearBlock.apply(this, []);
}}
p$1.output$I.apply(this, [ent]);
p$1.output$I.apply(this, [this.EOFCode]);
}, p$1);

Clazz.newMeth(C$, 'output$I',  function (code) {
this.curAccum&=this.masks[this.curBits];
if (this.curBits > 0) this.curAccum|=(code << this.curBits);
 else this.curAccum=code;
this.curBits+=this.nBits;
while (this.curBits >= 8){
p$1.byteOut$B.apply(this, [($b$[0] = (this.curAccum & 255), $b$[0])]);
this.curAccum>>=8;
this.curBits-=8;
}
if (this.freeEnt > this.maxcode || this.clearFlag ) {
if (this.clearFlag) {
this.maxcode=C$.MAXCODE$I(this.nBits=this.initCodeSize + 1);
this.clearFlag=false;
} else {
++this.nBits;
if (this.nBits == this.maxbits) this.maxcode=this.maxmaxcode;
 else this.maxcode=C$.MAXCODE$I(this.nBits);
}}if (code == this.EOFCode) {
while (this.curBits > 0){
p$1.byteOut$B.apply(this, [($b$[0] = (this.curAccum & 255), $b$[0])]);
this.curAccum>>=8;
this.curBits-=8;
}
this.flushBytes$();
}}, p$1);

Clazz.newMeth(C$, 'clearBlock',  function () {
p$1.clearHash$I.apply(this, [this.hsize]);
this.freeEnt=this.clearCode + 2;
this.clearFlag=true;
p$1.output$I.apply(this, [this.clearCode]);
}, p$1);

Clazz.newMeth(C$, 'clearHash$I',  function (hsize) {
for (var i=0; i < hsize; ++i) this.htab[i]=-1;

}, p$1);

Clazz.newMeth(C$, 'byteOut$B',  function (c) {
this.buf[this.bufPt++]=c;
if (this.bufPt >= 254) this.flushBytes$();
}, p$1);

Clazz.newMeth(C$, 'flushBytes$',  function () {
if (this.bufPt > 0) {
this.putByte$I(this.bufPt);
this.out.write$BA$I$I(this.buf, 0, this.bufPt);
this.byteCount+=this.bufPt;
this.bufPt=0;
}});

C$.$static$=function(){C$.$static$=0;
{
C$.rgb2xyz=$I$(2,"newA9$FA",[Clazz.array(Float.TYPE, -1, [0.4124, 0.3576, 0.1805, 0.2126, 0.7152, 0.0722, 0.0193, 0.1192, 0.9505])]);
C$.xyz2rgb=$I$(2,"newA9$FA",[Clazz.array(Float.TYPE, -1, [3.2406, -1.5372, -0.4986, -0.9689, 1.8758, 0.0415, 0.0557, -0.204, 1.057])]);
};
C$.INTERLACE_PARAMS=Clazz.array(Integer.TYPE, -1, [8, 8, 4, 2, 4, 2, 1, 0]);
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GifEncoder, "ColorItem", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.util.P3');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isBackground']]]

Clazz.newMeth(C$, 'c$$I$Z',  function (rgb, isBackground) {
Clazz.super_(C$, this);
this.isBackground=isBackground;
this.setT$javajs_util_T3(this.b$['javajs.img.GifEncoder'].toLABnorm$I.apply(this.b$['javajs.img.GifEncoder'], [rgb]));
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GifEncoder, "ColorCell", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.util.Lst');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['volume'],'I',['index'],'O',['center','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$$I',  function (index) {
Clazz.super_(C$, this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getVolume$Z',  function (doVisualize) {
if (this.volume != 0 ) return this.volume;
if (this.size$() < 2) return -1;
var maxx=-2147483647;
var minx=2147483647;
var maxy=-2147483647;
var miny=2147483647;
var maxz=-2147483647;
var minz=2147483647;
var n=this.size$();
for (var i=n; --i >= 0; ) {
var xyz=this.get$I(i);
if (xyz.x < minx ) minx=xyz.x;
if (xyz.y < miny ) miny=xyz.y;
if (xyz.z < minz ) minz=xyz.z;
if (xyz.x > maxx ) maxx=xyz.x;
if (xyz.y > maxy ) maxy=xyz.y;
if (xyz.z > maxz ) maxz=xyz.z;
}
var dx=(maxx - minx);
var dy=(maxy - miny);
var dz=(maxz - minz);
return this.volume=dx * dx + dy * dy + dz * dz;
});

Clazz.newMeth(C$, 'setColor$',  function () {
var count=this.size$();
this.center=Clazz.new_($I$(1,1));
for (var i=count; --i >= 0; ) this.center.add$javajs_util_T3(this.get$I(i));

this.center.scale$F(1.0 / count);
return this.b$['javajs.img.GifEncoder'].toRGB$javajs_util_P3.apply(this.b$['javajs.img.GifEncoder'], [this.center]);
});

Clazz.newMeth(C$, 'splitCell$javajs_util_Lst',  function (cells) {
var n=this.size$();
if (n < 2) return false;
var newIndex=cells.size$();
var newCell=Clazz.new_(C$.c$$I,[this, null, newIndex]);
cells.addLast$O(newCell);
var ranges=Clazz.array(Float.TYPE, [3, 3]);
for (var ic=0; ic < 3; ic++) {
var low=3.4028235E38;
var high=-3.4028235E38;
for (var i=n; --i >= 0; ) {
var lab=this.get$I(i);
var v=(ic == 0 ? lab.x : ic == 1 ? lab.y : lab.z);
if (low > v ) low=v;
if (high < v ) high=v;
}
ranges[0][ic]=low;
ranges[1][ic]=high;
ranges[2][ic]=high - low;
}
var r=ranges[2];
var mode=(r[0] >= r[1]  ? (r[0] >= r[2]  ? 0 : 2) : r[1] >= r[2]  ? 1 : 2);
var val=ranges[0][mode] + ranges[2][mode] / 2;
this.volume=0;
switch (mode) {
case 0:
for (var i=n; --i >= 0; ) if (this.get$I(i).x >= val ) newCell.addLast$O(this.removeItemAt$I(i));

break;
case 1:
for (var i=n; --i >= 0; ) if (this.get$I(i).y >= val ) newCell.addLast$O(this.removeItemAt$I(i));

break;
case 2:
for (var i=this.size$(); --i >= 0; ) if (this.get$I(i).z >= val ) newCell.addLast$O(this.removeItemAt$I(i));

break;
}
return true;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
