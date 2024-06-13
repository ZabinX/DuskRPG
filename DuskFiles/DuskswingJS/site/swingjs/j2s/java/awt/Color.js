(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.ColorPaintContext']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Color", null, null, 'java.awt.Paint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frgbvalue=null;
this.falpha=0.0;
},1);

C$.$fields$=[['F',['falpha'],'I',['value'],'O',['frgbvalue','float[]','context','java.awt.ColorPaintContext']]
,['O',['white','java.awt.Color','+WHITE','+lightGray','+LIGHT_GRAY','+gray','+GRAY','+darkGray','+DARK_GRAY','+black','+none','+BLACK','+red','+RED','+pink','+PINK','+orange','+ORANGE','+yellow','+YELLOW','+green','+GREEN','+magenta','+MAGENTA','+cyan','+CYAN','+blue','+BLUE']]]

Clazz.newMeth(C$, 'testColorValueRange$I$I$I$I',  function (r, g, b, a) {
var rangeError=false;
var badComponentString="";
if (a < 0 || a > 255 ) {
rangeError=true;
badComponentString=badComponentString + " Alpha";
}if (r < 0 || r > 255 ) {
rangeError=true;
badComponentString=badComponentString + " Red";
}if (g < 0 || g > 255 ) {
rangeError=true;
badComponentString=badComponentString + " Green";
}if (b < 0 || b > 255 ) {
rangeError=true;
badComponentString=badComponentString + " Blue";
}if (rangeError == true ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Color parameter outside of expected range:" + badComponentString]);
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (r, g, b) {
C$.c$$I$I$I$I.apply(this, [r, g, b, 255]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (r, g, b, a) {
;C$.$init$.apply(this);
this.value=((a & 255) << 24) | ((r & 255) << 16) | ((g & 255) << 8) | ((b & 255) << 0) ;
C$.testColorValueRange$I$I$I$I(r, g, b, a);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (rgb) {
;C$.$init$.apply(this);
this.value=-16777216 | rgb;
}, 1);

Clazz.newMeth(C$, 'c$$I$Z',  function (rgba, hasalpha) {
;C$.$init$.apply(this);
if (hasalpha) {
this.value=rgba;
} else {
this.value=-16777216 | rgba;
}}, 1);

Clazz.newMeth(C$, 'c$$F$F$F',  function (r, g, b) {
C$.c$$F$F$F$F.apply(this, [r, g, b, 1.0]);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F',  function (r, g, b, a) {
C$.c$$I$I$I$I.apply(this, [((r * 255 + 0.5)|0), ((g * 255 + 0.5)|0), ((b * 255 + 0.5)|0), ((a * 255 + 0.5)|0)]);
this.frgbvalue=Clazz.array(Float.TYPE, [3]);
this.frgbvalue[0]=r;
this.frgbvalue[1]=g;
this.frgbvalue[2]=b;
this.falpha=a;
}, 1);

Clazz.newMeth(C$, 'getRed$',  function () {
return (this.getRGB$() >> 16) & 255;
});

Clazz.newMeth(C$, 'getGreen$',  function () {
return (this.getRGB$() >> 8) & 255;
});

Clazz.newMeth(C$, 'getBlue$',  function () {
return (this.getRGB$() >> 0) & 255;
});

Clazz.newMeth(C$, 'getAlpha$',  function () {
return (this.getRGB$() >> 24) & 255;
});

Clazz.newMeth(C$, 'getRGB$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'brighter$',  function () {
var r=this.getRed$();
var g=this.getGreen$();
var b=this.getBlue$();
var i=3;
if (r == 0 && g == 0  && b == 0 ) {
return Clazz.new_(C$.c$$I$I$I,[i, i, i]);
}if (r > 0 && r < i ) r=i;
if (g > 0 && g < i ) g=i;
if (b > 0 && b < i ) b=i;
return Clazz.new_(C$.c$$I$I$I,[Math.min(((r / 0.7)|0), 255), Math.min(((g / 0.7)|0), 255), Math.min(((b / 0.7)|0), 255)]);
});

Clazz.newMeth(C$, 'darker$',  function () {
return Clazz.new_(C$.c$$I$I$I,[Math.max(((this.getRed$() * 0.7)|0), 0), Math.max(((this.getGreen$() * 0.7)|0), 0), Math.max(((this.getBlue$() * 0.7)|0), 0)]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return Clazz.instanceOf(obj, "java.awt.Color") && (obj).getRGB$() == this.getRGB$() ;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[r=" + this.getRed$() + ",g=" + this.getGreen$() + ",b=" + this.getBlue$() + "]" ;
});

Clazz.newMeth(C$, 'decode$S',  function (nm) {
var intval=Integer.decode$S(nm);
var i=intval.intValue$();
return Clazz.new_(C$.c$$I$I$I,[(i >> 16) & 255, (i >> 8) & 255, i & 255]);
}, 1);

Clazz.newMeth(C$, 'getColor$S',  function (nm) {
return C$.getColor$S$java_awt_Color(nm, null);
}, 1);

Clazz.newMeth(C$, 'getColor$S$java_awt_Color',  function (nm, v) {
try {
var i=(Integer.decode$S(nm)).$c();
return Clazz.new_(C$.c$$I$I$I,[(i >> 16) & 255, (i >> 8) & 255, i & 255]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return v;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getColor$S$I',  function (nm, v) {
var intval=Integer.getInteger$S(nm);
var i=(intval != null ) ? intval.intValue$() : v;
return Clazz.new_(C$.c$$I$I$I,[(i >> 16) & 255, (i >> 8) & 255, (i >> 0) & 255]);
}, 1);

Clazz.newMeth(C$, 'HSBtoRGB$F$F$F',  function (hue, saturation, brightness) {
var r=0;
var g=0;
var b=0;
if (saturation == 0 ) {
r=g=b=((brightness * 255.0 + 0.5)|0);
} else {
var h=(hue - Math.floor(hue)) * 6.0;
var f=h - Math.floor(h);
var p=brightness * (1.0 - saturation);
var q=brightness * (1.0 - saturation * f);
var t=brightness * (1.0 - (saturation * (1.0 - f)));
switch ((h|0)) {
case 0:
r=((brightness * 255.0 + 0.5)|0);
g=((t * 255.0 + 0.5)|0);
b=((p * 255.0 + 0.5)|0);
break;
case 1:
r=((q * 255.0 + 0.5)|0);
g=((brightness * 255.0 + 0.5)|0);
b=((p * 255.0 + 0.5)|0);
break;
case 2:
r=((p * 255.0 + 0.5)|0);
g=((brightness * 255.0 + 0.5)|0);
b=((t * 255.0 + 0.5)|0);
break;
case 3:
r=((p * 255.0 + 0.5)|0);
g=((q * 255.0 + 0.5)|0);
b=((brightness * 255.0 + 0.5)|0);
break;
case 4:
r=((t * 255.0 + 0.5)|0);
g=((p * 255.0 + 0.5)|0);
b=((brightness * 255.0 + 0.5)|0);
break;
case 5:
r=((brightness * 255.0 + 0.5)|0);
g=((p * 255.0 + 0.5)|0);
b=((q * 255.0 + 0.5)|0);
break;
}
}return -16777216 | (r << 16) | (g << 8) | (b << 0) ;
}, 1);

Clazz.newMeth(C$, 'RGBtoHSB$I$I$I$FA',  function (r, g, b, hsbvals) {
var hue;
var saturation;
var brightness;
if (hsbvals == null ) {
hsbvals=Clazz.array(Float.TYPE, [3]);
}var cmax=(r > g) ? r : g;
if (b > cmax) cmax=b;
var cmin=(r < g) ? r : g;
if (b < cmin) cmin=b;
brightness=(cmax) / 255.0;
if (cmax != 0) saturation=((cmax - cmin)) / (cmax);
 else saturation=0;
if (saturation == 0 ) hue=0;
 else {
var redc=((cmax - r)) / ((cmax - cmin));
var greenc=((cmax - g)) / ((cmax - cmin));
var bluec=((cmax - b)) / ((cmax - cmin));
if (r == cmax) hue=bluec - greenc;
 else if (g == cmax) hue=2.0 + redc - bluec;
 else hue=4.0 + greenc - redc;
hue=hue / 6.0;
if (hue < 0 ) hue=hue + 1.0;
}hsbvals[0]=hue;
hsbvals[1]=saturation;
hsbvals[2]=brightness;
return hsbvals;
}, 1);

Clazz.newMeth(C$, 'getHSBColor$F$F$F',  function (h, s, b) {
return Clazz.new_(C$.c$$I,[C$.HSBtoRGB$F$F$F(h, s, b)]);
}, 1);

Clazz.newMeth(C$, 'getRGBComponents$FA',  function (compArray) {
var f;
if (compArray == null ) {
f=Clazz.array(Float.TYPE, [4]);
} else {
f=compArray;
}if (this.frgbvalue == null ) {
f[0]=(this.getRed$()) / 255.0;
f[1]=(this.getGreen$()) / 255.0;
f[2]=(this.getBlue$()) / 255.0;
f[3]=(this.getAlpha$()) / 255.0;
} else {
f[0]=this.frgbvalue[0];
f[1]=this.frgbvalue[1];
f[2]=this.frgbvalue[2];
f[3]=this.falpha;
}return f;
});

Clazz.newMeth(C$, 'getRGBColorComponents$FA',  function (compArray) {
var f;
if (compArray == null ) {
f=Clazz.array(Float.TYPE, [3]);
} else {
f=compArray;
}if (this.frgbvalue == null ) {
f[0]=(this.getRed$()) / 255.0;
f[1]=(this.getGreen$()) / 255.0;
f[2]=(this.getBlue$()) / 255.0;
} else {
f[0]=this.frgbvalue[0];
f[1]=this.frgbvalue[1];
f[2]=this.frgbvalue[2];
}return f;
});

Clazz.newMeth(C$, 'getComponents$FA',  function (compArray) {
if (this.frgbvalue == null ) return this.getRGBComponents$FA(compArray);
var f;
var n=this.frgbvalue.length;
if (compArray == null ) {
f=Clazz.array(Float.TYPE, [n + 1]);
} else {
f=compArray;
}for (var i=0; i < n; i++) {
f[i]=this.frgbvalue[i];
}
f[n]=this.falpha;
return f;
});

Clazz.newMeth(C$, 'createContext$java_awt_image_ColorModel$java_awt_Rectangle$java_awt_geom_Rectangle2D$java_awt_geom_AffineTransform$java_awt_RenderingHints',  function (cm, r, r2d, xform, hints) {
if (this.context == null  || this.context.getRGB$() != this.getRGB$() ) {
this.context=Clazz.new_([this.getRGB$(), cm],$I$(1,1).c$$I$java_awt_image_ColorModel);
}return this.context;
});

Clazz.newMeth(C$, 'getTransparency$',  function () {
var alpha=this.getAlpha$();
if (alpha == 255) {
return 1;
} else if (alpha == 0) {
return 2;
} else {
return 3;
}});

C$.$static$=function(){C$.$static$=0;
C$.white=Clazz.new_(C$.c$$I$I$I,[255, 255, 255]);
C$.WHITE=C$.white;
C$.lightGray=Clazz.new_(C$.c$$I$I$I,[192, 192, 192]);
C$.LIGHT_GRAY=C$.lightGray;
C$.gray=Clazz.new_(C$.c$$I$I$I,[128, 128, 128]);
C$.GRAY=C$.gray;
C$.darkGray=Clazz.new_(C$.c$$I$I$I,[64, 64, 64]);
C$.DARK_GRAY=C$.darkGray;
C$.black=Clazz.new_(C$.c$$I$I$I,[0, 0, 0]);
C$.none=Clazz.new_(C$.c$$I$I$I,[0, 0, 1]);
C$.BLACK=C$.black;
C$.red=Clazz.new_(C$.c$$I$I$I,[255, 0, 0]);
C$.RED=C$.red;
C$.pink=Clazz.new_(C$.c$$I$I$I,[255, 175, 175]);
C$.PINK=C$.pink;
C$.orange=Clazz.new_(C$.c$$I$I$I,[255, 200, 0]);
C$.ORANGE=C$.orange;
C$.yellow=Clazz.new_(C$.c$$I$I$I,[255, 255, 0]);
C$.YELLOW=C$.yellow;
C$.green=Clazz.new_(C$.c$$I$I$I,[0, 255, 0]);
C$.GREEN=C$.green;
C$.magenta=Clazz.new_(C$.c$$I$I$I,[255, 0, 255]);
C$.MAGENTA=C$.magenta;
C$.cyan=Clazz.new_(C$.c$$I$I$I,[0, 255, 255]);
C$.CYAN=C$.cyan;
C$.blue=Clazz.new_(C$.c$$I$I$I,[0, 0, 255]);
C$.BLUE=C$.blue;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
