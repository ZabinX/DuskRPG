(function(){var P$=Clazz.newPackage("java.awt.color"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ColorSpace");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compName=null;
},1);

C$.$fields$=[['I',['type','numComponents'],'O',['compName','String[]']]
,['O',['sRGBspace','java.awt.color.ColorSpace','+GRAYspace']]]

Clazz.newMeth(C$, 'c$$I$I',  function (type, numcomponents) {
;C$.$init$.apply(this);
this.type=type;
this.numComponents=numcomponents;
}, 1);

Clazz.newMeth(C$, 'getInstance$I',  function (colorspace) {
var theColorSpace;
switch (colorspace) {
default:
case 1000:
if (C$.sRGBspace == null ) {
C$.sRGBspace=Clazz.new_(C$.c$$I$I,[5, 3]);
}theColorSpace=C$.sRGBspace;
break;
case 1003:
{
if (C$.GRAYspace == null ) {
C$.GRAYspace=Clazz.new_(C$.c$$I$I,[6, 1]);
}theColorSpace=C$.GRAYspace;
}break;
}
return theColorSpace;
}, 1);

Clazz.newMeth(C$, 'isCS_sRGB$',  function () {
return (this === C$.sRGBspace );
});

Clazz.newMeth(C$, 'toRGB$FA',  function (colorvalue) {
return colorvalue;
});

Clazz.newMeth(C$, 'fromRGB$FA',  function (rgbvalue) {
return rgbvalue;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getNumComponents$',  function () {
return this.numComponents;
});

Clazz.newMeth(C$, 'getName$I',  function (idx) {
if ((idx < 0) || (idx > this.numComponents - 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component index out of range: " + idx]);
}if (this.compName == null ) {
switch (this.type) {
case 0:
this.compName=Clazz.array(String, -1, ["X", "Y", "Z"]);
break;
case 1:
this.compName=Clazz.array(String, -1, ["L", "a", "b"]);
break;
case 2:
this.compName=Clazz.array(String, -1, ["L", "u", "v"]);
break;
case 3:
this.compName=Clazz.array(String, -1, ["Y", "Cb", "Cr"]);
break;
case 4:
this.compName=Clazz.array(String, -1, ["Y", "x", "y"]);
break;
case 5:
this.compName=Clazz.array(String, -1, ["Red", "Green", "Blue"]);
break;
case 6:
this.compName=Clazz.array(String, -1, ["Gray"]);
break;
case 7:
this.compName=Clazz.array(String, -1, ["Hue", "Saturation", "Value"]);
break;
case 8:
this.compName=Clazz.array(String, -1, ["Hue", "Lightness", "Saturation"]);
break;
case 9:
this.compName=Clazz.array(String, -1, ["Cyan", "Magenta", "Yellow", "Black"]);
break;
case 11:
this.compName=Clazz.array(String, -1, ["Cyan", "Magenta", "Yellow"]);
break;
default:
var tmp=Clazz.array(String, [this.numComponents]);
for (var i=0; i < tmp.length; i++) {
tmp[i]="Unnamed color component(" + i + ")" ;
}
this.compName=tmp;
}
}return this.compName[idx];
});

Clazz.newMeth(C$, 'getMinValue$I',  function (component) {
if ((component < 0) || (component > this.numComponents - 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component index out of range: " + component]);
}return 0.0;
});

Clazz.newMeth(C$, 'getMaxValue$I',  function (component) {
if ((component < 0) || (component > this.numComponents - 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component index out of range: " + component]);
}return 1.0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
