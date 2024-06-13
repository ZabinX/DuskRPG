(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.util.Hashtable','javajs.util.PT','javajs.util.P3d']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CU");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['colorNames','String[]','colorArgbs','int[]','mapJavaScriptColors','java.util.Map']]]

Clazz.newMeth(C$, 'toRGBHexString$javajs_api_GenericColor',  function (c) {
var rgb=c.getRGB$();
if (rgb == 0) return "000000";
var r="00" + Integer.toHexString$I((rgb >> 16) & 255);
r=r.substring$I(r.length$() - 2);
var g="00" + Integer.toHexString$I((rgb >> 8) & 255);
g=g.substring$I(g.length$() - 2);
var b="00" + Integer.toHexString$I(rgb & 255);
b=b.substring$I(b.length$() - 2);
return r + g + b ;
}, 1);

Clazz.newMeth(C$, 'toCSSString$javajs_api_GenericColor',  function (c) {
var opacity=c.getOpacity255$();
if (opacity == 255) return "#" + C$.toRGBHexString$javajs_api_GenericColor(c);
var rgb=c.getRGB$();
return "rgba(" + ((rgb >> 16) & 255) + "," + ((rgb >> 8) & 255) + "," + (rgb & 255) + "," + new Float(opacity / 255.0).toString()  + ")";
}, 1);

Clazz.newMeth(C$, 'getArgbFromString$S',  function (strColor) {
var len=0;
if (strColor == null  || (len=strColor.length$()) == 0 ) return 0;
strColor=strColor.toLowerCase$();
if (strColor.charAt$I(0) == "[" && strColor.charAt$I(len - 1) == "]" ) {
var check;
if (strColor.indexOf$S(",") >= 0) {
var tokens=$I$(2,"split$S$S",[strColor.substring$I$I(1, strColor.length$() - 1), ","]);
if (tokens.length != 3) return 0;
var red=$I$(2).parseDouble$S(tokens[0]);
var grn=$I$(2).parseDouble$S(tokens[1]);
var blu=$I$(2).parseDouble$S(tokens[2]);
return C$.colorTriadToFFRGB$D$D$D(red, grn, blu);
}switch (len) {
case 9:
check="x";
break;
case 10:
check="0x";
break;
default:
return 0;
}
if (strColor.indexOf$S(check) != 1) return 0;
strColor="#" + strColor.substring$I$I(len - 7, len - 1);
len=7;
}if (len == 7 && strColor.charAt$I(0) == "#" ) {
try {
return $I$(2,"parseIntRadix$S$I",[strColor.substring$I$I(1, 7), 16]) | -16777216;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return 0;
} else {
throw e;
}
}
}var boxedArgb=C$.mapJavaScriptColors.get$O(strColor);
return (boxedArgb == null  ? 0 : boxedArgb.intValue$());
}, 1);

Clazz.newMeth(C$, 'colorTriadToFFRGB$D$D$D',  function (x, y, z) {
if (x <= 1  && y <= 1   && z <= 1  ) {
if (x > 0 ) x=x * 256 - 1;
if (y > 0 ) y=y * 256 - 1;
if (z > 0 ) z=z * 256 - 1;
}return C$.rgb$I$I$I((x|0), (y|0), (z|0));
}, 1);

Clazz.newMeth(C$, 'rgb$I$I$I',  function (red, grn, blu) {
return -16777216 | (red << 16) | (grn << 8) | blu ;
}, 1);

Clazz.newMeth(C$, 'colorPtFromString$S',  function (colorName) {
return C$.colorPtFromInt$I$javajs_util_P3d(C$.getArgbFromString$S(colorName), null);
}, 1);

Clazz.newMeth(C$, 'colorPtFromInt$I$javajs_util_P3d',  function (color, pt) {
if (pt == null ) pt=Clazz.new_($I$(3,1));
pt.set$D$D$D((color >> 16) & 255, (color >> 8) & 255, color & 255);
return pt;
}, 1);

Clazz.newMeth(C$, 'colorPtToFFRGB$javajs_util_T3',  function (pt) {
return C$.colorTriadToFFRGB$D$D$D(pt.x, pt.y, pt.z);
}, 1);

Clazz.newMeth(C$, 'toRGB3$I$DA',  function (c, f) {
f[0]=((c >> 16) & 255) / 255.0;
f[1]=((c >> 8) & 255) / 255.0;
f[2]=(c & 255) / 255.0;
}, 1);

Clazz.newMeth(C$, 'toFFGGGfromRGB$I',  function (rgb) {
var grey=((((2989 * ((rgb >> 16) & 255)) + (5870 * ((rgb >> 8) & 255)) + (1140 * (rgb & 255)) + 5000 )/10000|0)) & 16777215;
return C$.rgb$I$I$I(grey, grey, grey);
}, 1);

Clazz.newMeth(C$, 'rgbToHSL$javajs_util_P3d$Z',  function (rgb, doRound) {
var r=rgb.x / 255;
var g=rgb.y / 255;
var b=rgb.z / 255;
var min=Math.min(r, Math.min(g, b));
var max=Math.max(r, Math.max(g, b));
var p=(max + min);
var q=(max - min);
var h=(60 * ((q == 0  ? 0 : max == r  ? ((g - b) / q + 6) : max == g  ? (b - r) / q + 2 : (r - g) / q + 4))) % 360;
var s=q / (q == 0  ? 1 : p <= 1  ? p : 2 - p);
return (doRound ? $I$(3,"new3$D$D$D",[Math.round$D(h * 10) / 10.0, Math.round$D(s * 1000) / 10.0, Math.round$D(p * 500) / 10.0]) : $I$(3).new3$D$D$D(h, s * 100, p * 50));
}, 1);

Clazz.newMeth(C$, 'hslToRGB$javajs_util_P3d',  function (hsl) {
var h=Math.max(0, Math.min(360, hsl.x)) / 60;
var s=Math.max(0, Math.min(100, hsl.y)) / 100;
var l=Math.max(0, Math.min(100, hsl.z)) / 100;
var p=l - (l < 0.5  ? l : 1 - l) * s;
var q=2 * (l - p);
var r=C$.toRGB$D$D$D(p, q, h + 2);
var g=C$.toRGB$D$D$D(p, q, h);
var b=C$.toRGB$D$D$D(p, q, h - 2);
return $I$(3,"new3$D$D$D",[Long.$dval(Math.round$D(r * 255)), Long.$dval(Math.round$D(g * 255)), Long.$dval(Math.round$D(b * 255))]);
}, 1);

Clazz.newMeth(C$, 'toRGB$D$D$D',  function (p, q, h) {
return ((h=(h + (h < 0  ? 6 : h > 6  ? -6 : 0))) < 1  ? p + q * h : h < 3  ? p + q : h < 4  ? p + q * (4 - h) : p);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.colorNames=Clazz.array(String, -1, ["contrast", "black", "pewhite", "pecyan", "pepurple", "pegreen", "peblue", "peviolet", "pebrown", "pepink", "peyellow", "pedarkgreen", "peorange", "pelightblue", "pedarkcyan", "pedarkgray", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightgray", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "bluetint", "greenblue", "greentint", "grey", "gray", "pinktint", "redorange", "yellowtint"]);
C$.colorArgbs=Clazz.array(Integer.TYPE, -1, [-74566, -16777216, -1, -16711681, -3137281, -16711936, -10460929, -32576, -6021080, -10024, -256, -16728064, -20480, -5197569, -16736096, -10461088, -984833, -332841, -16711681, -8388652, -983041, -657956, -6972, -5171, -16776961, -7722014, -5952982, -2180985, -10510688, -8388864, -2987746, -32944, -10185235, -1828, -2354116, -16711681, -16777077, -16741493, -4684277, -5658199, -16751616, -4343957, -7667573, -11179217, -29696, -6737204, -7667712, -1468806, -7357297, -12042869, -13676721, -16724271, -7077677, -60269, -16728065, -9868951, -14774017, -5103070, -1296, -14513374, -65281, -2302756, -460545, -10496, -2448096, -8355712, -16744448, -5374161, -983056, -38476, -3318692, -11861886, -16, -989556, -1644806, -3851, -8586240, -1331, -5383962, -1015680, -2031617, -329006, -7278960, -2894893, -2894893, -18751, -24454, -14634326, -7876870, -8943463, -5192482, -32, -16711936, -13447886, -331546, -65281, -8388608, -10039894, -16777011, -4565549, -7114533, -12799119, -8689426, -16713062, -12004916, -3730043, -15132304, -655366, -6943, -6987, -8531, -16777088, -133658, -8355840, -9728477, -23296, -47872, -2461482, -1120086, -6751336, -5247250, -2396013, -4139, -9543, -3308225, -16181, -2252579, -5185306, -8388480, -65536, -4419697, -12490271, -7650029, -360334, -744352, -13726889, -2578, -6270419, -4144960, -7876885, -9807155, -9404272, -1286, -16711809, -12156236, -2968436, -16744320, -2572328, -40121, -12525360, -1146130, -663885, -1, -657931, -256, -6632142, -5253121, -13726889, -6750285, -8355712, -8355712, -21573, -47872, -592267]);
C$.mapJavaScriptColors=Clazz.new_($I$(1,1));
{
for (var i=C$.colorNames.length; --i >= 0; ) C$.mapJavaScriptColors.put$O$O(C$.colorNames[i], Integer.valueOf$I(C$.colorArgbs[i]));

};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
