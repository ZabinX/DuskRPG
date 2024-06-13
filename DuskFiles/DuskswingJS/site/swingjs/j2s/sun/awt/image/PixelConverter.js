(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PixelConverter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Rgbx',9],['Xrgb',9],['Argb',9],['Ushort565Rgb',9],['Ushort555Rgbx',9],['Ushort555Rgb',9],['Ushort4444Argb',9],['Xbgr',9],['Bgrx',9],['Rgba',9],['RgbaPre',9],['ArgbPre',9],['ArgbBm',9],['ByteGray',9],['UshortGray',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alphaMask=0;
},1);

C$.$fields$=[['I',['alphaMask']]
,['O',['instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
var obj=cm.getDataElements$I$O(rgb, null);
switch (cm.getTransferType$()) {
case 0:
var bytearr=obj;
var pix=0;
switch (bytearr.length) {
default:
pix=bytearr[3] << 24;
case 3:
pix|=(bytearr[2] & 255) << 16;
case 2:
pix|=(bytearr[1] & 255) << 8;
case 1:
pix|=(bytearr[0] & 255);
}
return pix;
case 2:
case 1:
var shortarr=obj;
return (((shortarr.length > 1) ? shortarr[1] << 16 : 0) | shortarr[0] & 65535);
case 3:
return (obj)[0];
default:
return rgb;
}
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return pixel;
});

Clazz.newMeth(C$, 'getAlphaMask$',  function () {
return this.alphaMask;
});

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Rgbx", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return (rgb << 8);
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return (-16777216 | (pixel >> 8));
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Xrgb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return rgb;
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return (-16777216 | pixel);
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Argb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.alphaMask=-16777216;
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return rgb;
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return pixel;
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Ushort565Rgb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return (((rgb >> (8)) & 63488) | ((rgb >> (5)) & 2016) | ((rgb >> (3)) & 31) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
var r;
var g;
var b;
r=(pixel >> 11) & 31;
r=(r << 3) | (r >> 2);
g=(pixel >> 5) & 63;
g=(g << 2) | (g >> 4);
b=(pixel) & 31;
b=(b << 3) | (b >> 2);
return (-16777216 | (r << 16) | (g << 8) | (b) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Ushort555Rgbx", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return (((rgb >> (8)) & 63488) | ((rgb >> (5)) & 1984) | ((rgb >> (2)) & 62) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
var r;
var g;
var b;
r=(pixel >> 11) & 31;
r=(r << 3) | (r >> 2);
g=(pixel >> 6) & 31;
g=(g << 3) | (g >> 2);
b=(pixel >> 1) & 31;
b=(b << 3) | (b >> 2);
return (-16777216 | (r << 16) | (g << 8) | (b) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Ushort555Rgb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return (((rgb >> (9)) & 31744) | ((rgb >> (6)) & 992) | ((rgb >> (3)) & 31) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
var r;
var g;
var b;
r=(pixel >> 10) & 31;
r=(r << 3) | (r >> 2);
g=(pixel >> 5) & 31;
g=(g << 3) | (g >> 2);
b=(pixel) & 31;
b=(b << 3) | (b >> 2);
return (-16777216 | (r << 16) | (g << 8) | (b) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Ushort4444Argb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.alphaMask=61440;
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
var a=(rgb >> 16) & 61440;
var r=(rgb >> 12) & 3840;
var g=(rgb >> 8) & 240;
var b=(rgb >> 4) & 15;
return (a | r | g | b );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
var a;
var r;
var g;
var b;
a=pixel & 61440;
a=((pixel << 16) | (pixel << 12)) & -16777216;
r=pixel & 3840;
r=((pixel << 12) | (pixel << 8)) & 16711680;
g=pixel & 240;
g=((pixel << 8) | (pixel << 4)) & 65280;
b=pixel & 15;
b=((pixel << 4) | (pixel << 0)) & 255;
return (a | r | g | b );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Xbgr", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return (((rgb & 255) << 16) | (rgb & 65280) | ((rgb >> 16) & 255) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return (-16777216 | ((pixel & 255) << 16) | (pixel & 65280) | ((pixel >> 16) & 255) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Bgrx", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return ((rgb << 24) | ((rgb & 65280) << 8) | ((rgb >> 8) & 65280) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return (-16777216 | ((pixel & 65280) << 8) | ((pixel >> 8) & 65280) | (pixel >>> 24) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "Rgba", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.alphaMask=255;
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return ((rgb << 8) | (rgb >>> 24));
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return ((pixel << 24) | (pixel >>> 8));
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "RgbaPre", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.alphaMask=255;
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
if ((rgb >> 24) == -1) {
return ((rgb << 8) | (rgb >>> 24));
}var a=rgb >>> 24;
var r=(rgb >> 16) & 255;
var g=(rgb >> 8) & 255;
var b=(rgb) & 255;
var a2=a + (a >> 7);
r=(r * a2) >> 8;
g=(g * a2) >> 8;
b=(b * a2) >> 8;
return ((r << 24) | (g << 16) | (b << 8) | (a) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
var a=pixel & 255;
if ((a == 255) || (a == 0) ) {
return ((pixel >>> 8) | (pixel << 24));
}var r=pixel >>> 24;
var g=(pixel >> 16) & 255;
var b=(pixel >> 8) & 255;
r=(((r << 8) - r)/a|0);
g=(((g << 8) - g)/a|0);
b=(((b << 8) - b)/a|0);
return ((r << 24) | (g << 16) | (b << 8) | (a) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "ArgbPre", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.alphaMask=-16777216;
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
if ((rgb >> 24) == -1) {
return rgb;
}var a=rgb >>> 24;
var r=(rgb >> 16) & 255;
var g=(rgb >> 8) & 255;
var b=(rgb) & 255;
var a2=a + (a >> 7);
r=(r * a2) >> 8;
g=(g * a2) >> 8;
b=(b * a2) >> 8;
return ((a << 24) | (r << 16) | (g << 8) | (b) );
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
var a=pixel >>> 24;
if ((a == 255) || (a == 0) ) {
return pixel;
}var r=(pixel >> 16) & 255;
var g=(pixel >> 8) & 255;
var b=(pixel) & 255;
r=(((r << 8) - r)/a|0);
g=(((g << 8) - g)/a|0);
b=(((b << 8) - b)/a|0);
return ((a << 24) | (r << 16) | (g << 8) | (b) );
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "ArgbBm", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
return (rgb | ((rgb >> 31) << 24));
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return ((pixel << 7) >> 7);
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "ByteGray", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.image.PixelConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
var red=(rgb >> 16) & 255;
var grn=(rgb >> 8) & 255;
var blu=(rgb) & 255;
return ((red * 0.299 + grn * 0.587 + blu * 0.114 + 0.5)|0);
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
return ((((((65280) | pixel) << 8) | pixel) << 8) | pixel);
});

C$.$static$=function(){C$.$static$=0;
C$.$instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PixelConverter, "UshortGray", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.image.PixelConverter','.ByteGray']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$$instance','sun.awt.image.PixelConverter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'rgbToPixel$I$java_awt_image_ColorModel',  function (rgb, cm) {
var red=(rgb >> 16) & 255;
var grn=(rgb >> 8) & 255;
var blu=(rgb) & 255;
return ((red * 76.843 + grn * 150.85899999999998 + blu * 29.298000000000002 + 0.5)|0);
});

Clazz.newMeth(C$, 'pixelToRgb$I$java_awt_image_ColorModel',  function (pixel, cm) {
pixel=pixel >> 8;
return ((((((65280) | pixel) << 8) | pixel) << 8) | pixel);
});

C$.$static$=function(){C$.$static$=0;
C$.$$instance=Clazz.new_(C$);
};
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
