(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'java.awt.color.ColorSpace','javax.imageio.plugins.jpeg.JPEGQTable','javax.imageio.plugins.jpeg.JPEGHuffmanTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEG", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['JCS',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['names','String[]','+suffixes','+MIMETypes','bandOffsets','int[][]','bOffsRGB','int[]']]]

Clazz.newMeth(C$, 'isNonStandardICC$java_awt_color_ColorSpace',  function (cs) {
var retval=false;
if ((Clazz.instanceOf(cs, "java.awt.color.ICC_ColorSpace")) && (!cs.isCS_sRGB$()) && (!cs.equals$O($I$(1).getInstance$I(1001))) && (!cs.equals$O($I$(1).getInstance$I(1003))) && (!cs.equals$O($I$(1).getInstance$I(1004))) && (!cs.equals$O($I$(1).getInstance$I(1002)))  ) {
retval=true;
}return retval;
}, 1);

Clazz.newMeth(C$, 'isJFIFcompliant$javax_imageio_ImageTypeSpecifier$Z',  function (imageType, input) {
var cm=imageType.getColorModel$();
if (cm.hasAlpha$()) {
return false;
}var numComponents=imageType.getNumComponents$();
if (numComponents == 1) {
return true;
}if (numComponents != 3) {
return false;
}if (input) {
if (cm.getColorSpace$().getType$() == 5) {
return true;
}} else {
if (cm.getColorSpace$().getType$() == 3) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'transformForType$javax_imageio_ImageTypeSpecifier$Z',  function (imageType, input) {
var retval=-1;
var cm=imageType.getColorModel$();
switch (cm.getColorSpace$().getType$()) {
case 6:
retval=0;
break;
case 5:
retval=input ? 1 : 0;
break;
case 3:
retval=1;
break;
case 9:
retval=input ? 2 : -1;
}
return retval;
}, 1);

Clazz.newMeth(C$, 'convertToLinearQuality$F',  function (quality) {
if (quality <= 0.0 ) {
quality=0.01;
}if (quality > 1.0 ) {
quality=1.0;
}if (quality < 0.5 ) {
quality=0.5 / quality;
} else {
quality=2.0 - (quality * 2.0);
}return quality;
}, 1);

Clazz.newMeth(C$, 'getDefaultQTables$',  function () {
var qTables=Clazz.array($I$(2), [2]);
qTables[0]=$I$(2).K1Div2Luminance;
qTables[1]=$I$(2).K2Div2Chrominance;
return qTables;
}, 1);

Clazz.newMeth(C$, 'getDefaultHuffmanTables$Z',  function (wantDC) {
var tables=Clazz.array($I$(3), [2]);
if (wantDC) {
tables[0]=$I$(3).StdDCLuminance;
tables[1]=$I$(3).StdDCChrominance;
} else {
tables[0]=$I$(3).StdACLuminance;
tables[1]=$I$(3).StdACChrominance;
}return tables;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.names=Clazz.array(String, -1, ["JPEG", "jpeg", "JPG", "jpg"]);
C$.suffixes=Clazz.array(String, -1, ["jpg", "jpeg"]);
C$.MIMETypes=Clazz.array(String, -1, ["image/jpeg"]);
C$.bandOffsets=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0]), Clazz.array(Integer.TYPE, -1, [0, 1]), Clazz.array(Integer.TYPE, -1, [0, 1, 2]), Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3])]);
C$.bOffsRGB=Clazz.array(Integer.TYPE, -1, [2, 1, 0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG, "JCS", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['yccInited'],'O',['sRGB','java.awt.color.ColorSpace','+YCC']]]

Clazz.newMeth(C$, 'getYCC$',  function () {
if (!C$.yccInited) {
try {
C$.YCC=$I$(1).getInstance$I(1002);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
} else {
throw e;
}
} finally {
C$.yccInited=true;
}
}return C$.YCC;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.sRGB=$I$(1).getInstance$I(1000);
C$.YCC=null;
C$.yccInited=false;
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
