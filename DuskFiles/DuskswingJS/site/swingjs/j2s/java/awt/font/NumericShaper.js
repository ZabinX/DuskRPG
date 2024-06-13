(function(){var P$=Clazz.newPackage("java.awt.font"),p$1={},p$2={},I$=[[0,'java.util.EnumSet',['java.awt.font.NumericShaper','.Range'],'java.util.Arrays','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumericShaper", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['Range',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentRange=$I$(2).EUROPEAN;
this.stCache=0;
},1);

C$.$fields$=[['I',['key','mask','stCache'],'O',['shapingRange','java.awt.font.NumericShaper.Range','rangeSet','java.util.Set','rangeArray','java.awt.font.NumericShaper.Range[]','currentRange','java.awt.font.NumericShaper.Range']]
,['I',['ctCache','ctCacheLimit'],'O',['bases','char[]','+contexts','strongTable','int[]']]]

Clazz.newMeth(C$, 'getContextKey$C',  function (c) {
if (c < C$.contexts[C$.ctCache]) {
while (C$.ctCache > 0 && c < C$.contexts[C$.ctCache] )--C$.ctCache;

} else if (c >= C$.contexts[C$.ctCache + 1]) {
while (C$.ctCache < C$.ctCacheLimit && c >= C$.contexts[C$.ctCache + 1] )++C$.ctCache;

}return (C$.ctCache & 1) == 0 ? ((C$.ctCache/2|0)) : 0;
}, 1);

Clazz.newMeth(C$, 'rangeForCodePoint$I',  function (codepoint) {
if (p$1.inRange$I.apply(this.currentRange, [codepoint])) {
return this.currentRange;
}var ranges=this.rangeArray;
if (ranges.length > 3) {
var lo=0;
var hi=ranges.length - 1;
while (lo <= hi){
var mid=((lo + hi)/2|0);
var range=ranges[mid];
if (codepoint < range.start) {
hi=mid - 1;
} else if (codepoint >= range.end) {
lo=mid + 1;
} else {
this.currentRange=range;
return range;
}}
} else {
for (var i=0; i < ranges.length; i++) {
if (p$1.inRange$I.apply(ranges[i], [codepoint])) {
return ranges[i];
}}
}return $I$(2).EUROPEAN;
}, p$2);

Clazz.newMeth(C$, 'isStrongDirectional$C',  function (c) {
var cachedIndex=this.stCache;
if (c.$c() < C$.strongTable[cachedIndex] ) {
cachedIndex=C$.search$I$IA$I$I(c.$c(), C$.strongTable, 0, cachedIndex);
} else if (c.$c() >= C$.strongTable[cachedIndex + 1] ) {
cachedIndex=C$.search$I$IA$I$I(c.$c(), C$.strongTable, cachedIndex + 1, C$.strongTable.length - cachedIndex - 1 );
}var val=(cachedIndex & 1) == 1;
this.stCache=cachedIndex;
return val;
}, p$2);

Clazz.newMeth(C$, 'getKeyFromMask$I',  function (mask) {
var key=0;
while (key < 19 && ((mask & (1 << key)) == 0) ){
++key;
}
if (key == 19 || ((mask & ~(1 << key)) != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid shaper: " + Integer.toHexString$I(mask)]);
}return key;
}, 1);

Clazz.newMeth(C$, 'getShaper$I',  function (singleRange) {
var key=C$.getKeyFromMask$I(singleRange);
return Clazz.new_(C$.c$$I$I,[key, singleRange]);
}, 1);

Clazz.newMeth(C$, 'getShaper$java_awt_font_NumericShaper_Range',  function (singleRange) {
return Clazz.new_(C$.c$$java_awt_font_NumericShaper_Range$java_util_Set,[singleRange, $I$(1).of$Enum(singleRange)]);
}, 1);

Clazz.newMeth(C$, 'getContextualShaper$I',  function (ranges) {
ranges|=-2147483648;
return Clazz.new_(C$.c$$I$I,[0, ranges]);
}, 1);

Clazz.newMeth(C$, 'getContextualShaper$java_util_Set',  function (ranges) {
var shaper=Clazz.new_(C$.c$$java_awt_font_NumericShaper_Range$java_util_Set,[$I$(2).EUROPEAN, ranges]);
shaper.mask=-2147483648;
return shaper;
}, 1);

Clazz.newMeth(C$, 'getContextualShaper$I$I',  function (ranges, defaultContext) {
var key=C$.getKeyFromMask$I(defaultContext);
ranges|=-2147483648;
return Clazz.new_(C$.c$$I$I,[key, ranges]);
}, 1);

Clazz.newMeth(C$, 'getContextualShaper$java_util_Set$java_awt_font_NumericShaper_Range',  function (ranges, defaultContext) {
if (defaultContext == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var shaper=Clazz.new_(C$.c$$java_awt_font_NumericShaper_Range$java_util_Set,[defaultContext, ranges]);
shaper.mask=-2147483648;
return shaper;
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (key, mask) {
;C$.$init$.apply(this);
this.key=key;
this.mask=mask;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_font_NumericShaper_Range$java_util_Set',  function (defaultContext, ranges) {
;C$.$init$.apply(this);
this.shapingRange=defaultContext;
this.rangeSet=$I$(1).copyOf$java_util_Collection(ranges);
if (this.rangeSet.contains$O($I$(2).EASTERN_ARABIC) && this.rangeSet.contains$O($I$(2).ARABIC) ) {
this.rangeSet.remove$O($I$(2).ARABIC);
}if (this.rangeSet.contains$O($I$(2).TAI_THAM_THAM) && this.rangeSet.contains$O($I$(2).TAI_THAM_HORA) ) {
this.rangeSet.remove$O($I$(2).TAI_THAM_HORA);
}this.rangeArray=this.rangeSet.toArray$OA(Clazz.array($I$(2), [this.rangeSet.size$()]));
if (this.rangeArray.length > 3) {
$I$(3,"sort$OA$java_util_Comparator",[this.rangeArray, ((P$.NumericShaper$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumericShaper$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$java_awt_font_NumericShaper_Range$java_awt_font_NumericShaper_Range','compare$O$O'],  function (s1, s2) {
return s1.base > s2.base ? 1 : s1.base == s2.base ? 0 : -1;
});
})()
), Clazz.new_(P$.NumericShaper$1.$init$,[this, null]))]);
}}, 1);

Clazz.newMeth(C$, 'shape$CA$I$I',  function (text, start, count) {
p$2.checkParams$CA$I$I.apply(this, [text, start, count]);
if (this.isContextual$()) {
if (this.rangeSet == null ) {
p$2.shapeContextually$CA$I$I$I.apply(this, [text, start, count, this.key]);
} else {
p$2.shapeContextually$CA$I$I$java_awt_font_NumericShaper_Range.apply(this, [text, start, count, this.shapingRange]);
}} else {
p$2.shapeNonContextually$CA$I$I.apply(this, [text, start, count]);
}});

Clazz.newMeth(C$, 'shape$CA$I$I$I',  function (text, start, count, context) {
p$2.checkParams$CA$I$I.apply(this, [text, start, count]);
if (this.isContextual$()) {
var ctxKey=C$.getKeyFromMask$I(context);
if (this.rangeSet == null ) {
p$2.shapeContextually$CA$I$I$I.apply(this, [text, start, count, ctxKey]);
} else {
p$2.shapeContextually$CA$I$I$java_awt_font_NumericShaper_Range.apply(this, [text, start, count, $I$(2).values$()[ctxKey]]);
}} else {
p$2.shapeNonContextually$CA$I$I.apply(this, [text, start, count]);
}});

Clazz.newMeth(C$, 'shape$CA$I$I$java_awt_font_NumericShaper_Range',  function (text, start, count, context) {
p$2.checkParams$CA$I$I.apply(this, [text, start, count]);
if (context == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["context is null"]);
}if (this.isContextual$()) {
if (this.rangeSet != null ) {
p$2.shapeContextually$CA$I$I$java_awt_font_NumericShaper_Range.apply(this, [text, start, count, context]);
} else {
var key=$I$(2).toRangeIndex$java_awt_font_NumericShaper_Range(context);
if (key >= 0) {
p$2.shapeContextually$CA$I$I$I.apply(this, [text, start, count, key]);
} else {
p$2.shapeContextually$CA$I$I$java_awt_font_NumericShaper_Range.apply(this, [text, start, count, this.shapingRange]);
}}} else {
p$2.shapeNonContextually$CA$I$I.apply(this, [text, start, count]);
}});

Clazz.newMeth(C$, 'checkParams$CA$I$I',  function (text, start, count) {
if (text == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["text is null"]);
}if ((start < 0) || (start > text.length) || ((start + count) < 0) || ((start + count) > text.length)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bad start or count for text of length " + text.length]);
}}, p$2);

Clazz.newMeth(C$, 'isContextual$',  function () {
return (this.mask & -2147483648) != 0;
});

Clazz.newMeth(C$, 'getRanges$',  function () {
return this.mask & ~-2147483648;
});

Clazz.newMeth(C$, 'getRangeSet$',  function () {
if (this.rangeSet != null ) {
return $I$(1).copyOf$java_util_Collection(this.rangeSet);
}return $I$(2).maskToRangeSet$I(this.mask);
});

Clazz.newMeth(C$, 'shapeNonContextually$CA$I$I',  function (text, start, count) {
var base;
var minDigit="0";
if (this.shapingRange != null ) {
base=p$1.getDigitBase.apply(this.shapingRange, []);
minDigit = String.fromCharCode(minDigit.$c()+ (this.shapingRange.getNumericBase$()));
} else {
base=C$.bases[this.key].$c();
if (this.key == 16) {
(minDigit=String.fromCharCode(minDigit.$c()+1));
}}for (var i=start, e=start + count; i < e; ++i) {
var c=text[i];
if (c >= minDigit && c <= "9" ) {
text[i]=String.fromCharCode((c.$c() + base));
}}
}, p$2);

Clazz.newMeth(C$, 'shapeContextually$CA$I$I$I',  function (text, start, count, ctxKey) {
if ((this.mask & (1 << ctxKey)) == 0) {
ctxKey=0;
}var lastkey=ctxKey;
var base=C$.bases[ctxKey].$c();
var minDigit=ctxKey == 16 ? "1" : "0";
{
for (var i=start, e=start + count; i < e; ++i) {
var c=text[i];
if (c >= minDigit && c <= "9" ) {
text[i]=String.fromCharCode((c.$c() + base));
}if (p$2.isStrongDirectional$C.apply(this, [c])) {
var newkey=C$.getContextKey$C(c);
if (newkey != lastkey) {
lastkey=newkey;
ctxKey=newkey;
if (((this.mask & 4) != 0) && (ctxKey == 1 || ctxKey == 2 ) ) {
ctxKey=2;
} else if (((this.mask & 2) != 0) && (ctxKey == 1 || ctxKey == 2 ) ) {
ctxKey=1;
} else if ((this.mask & (1 << ctxKey)) == 0) {
ctxKey=0;
}base=C$.bases[ctxKey].$c();
minDigit=ctxKey == 16 ? "1" : "0";
}}}
}}, p$2);

Clazz.newMeth(C$, 'shapeContextually$CA$I$I$java_awt_font_NumericShaper_Range',  function (text, start, count, ctxKey) {
if (ctxKey == null  || !this.rangeSet.contains$O(ctxKey) ) {
ctxKey=$I$(2).EUROPEAN;
}var lastKey=ctxKey;
var base=p$1.getDigitBase.apply(ctxKey, []);
var minDigit=String.fromCharCode((48 + (ctxKey.getNumericBase$()).$c()));
var end=start + count;
for (var i=start; i < end; ++i) {
var c=text[i];
if (c >= minDigit && c <= "9" ) {
text[i]=String.fromCharCode((c.$c() + base));
continue;
}if (p$2.isStrongDirectional$C.apply(this, [c])) {
ctxKey=p$2.rangeForCodePoint$I.apply(this, [c.$c()]);
if (ctxKey !== lastKey ) {
lastKey=ctxKey;
base=p$1.getDigitBase.apply(ctxKey, []);
minDigit=String.fromCharCode((48 + (ctxKey.getNumericBase$()).$c()));
}}}
}, p$2);

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=this.mask;
if (this.rangeSet != null ) {
hash&=-2147483648;
hash^=this.rangeSet.hashCode$();
}return hash;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o != null ) {
try {
var rhs=o;
if (this.rangeSet != null ) {
if (rhs.rangeSet != null ) {
return this.isContextual$() == rhs.isContextual$()  && this.rangeSet.equals$O(rhs.rangeSet)  && this.shapingRange === rhs.shapingRange  ;
}return this.isContextual$() == rhs.isContextual$()  && this.rangeSet.equals$O($I$(2).maskToRangeSet$I(rhs.mask))  && this.shapingRange === $I$(2).indexToRange$I(rhs.key)  ;
} else if (rhs.rangeSet != null ) {
var rset=$I$(2).maskToRangeSet$I(this.mask);
var srange=$I$(2).indexToRange$I(this.key);
return this.isContextual$() == rhs.isContextual$()  && rset.equals$O(rhs.rangeSet)  && srange === rhs.shapingRange  ;
}return rhs.mask == this.mask && rhs.key == this.key ;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
}return false;
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_([C$.superclazz.prototype.toString.apply(this, [])],$I$(4,1).c$$S);
buf.append$S("[contextual:").append$Z(this.isContextual$());
var keyNames=null;
if (this.isContextual$()) {
buf.append$S(", context:");
buf.append$O(this.shapingRange == null  ? $I$(2).values$()[this.key] : this.shapingRange);
}if (this.rangeSet == null ) {
buf.append$S(", range(s): ");
var first=true;
for (var i=0; i < 19; ++i) {
if ((this.mask & (1 << i)) != 0) {
if (first) {
first=false;
} else {
buf.append$S(", ");
}buf.append$O($I$(2).values$()[i]);
}}
} else {
buf.append$S(", range set: ").append$O(this.rangeSet);
}buf.append$C("]");
return buf.toString();
});

Clazz.newMeth(C$, 'getHighBit$I',  function (value) {
if (value <= 0) {
return -32;
}var bit=0;
if (value >= 65536) {
value>>=16;
bit+=16;
}if (value >= 256) {
value>>=8;
bit+=8;
}if (value >= 16) {
value>>=4;
bit+=4;
}if (value >= 4) {
value>>=2;
bit+=2;
}if (value >= 2) {
bit+=1;
}return bit;
}, 1);

Clazz.newMeth(C$, 'search$I$IA$I$I',  function (value, array, start, length) {
var power=1 << C$.getHighBit$I(length);
var extra=length - power;
var probe=power;
var index=start;
if (value >= array[index + extra]) {
index+=extra;
}while (probe > 1){
probe>>=1;
if (value >= array[index + probe]) {
index+=probe;
}}
return index;
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (stream) {
if (this.shapingRange != null ) {
var index=$I$(2).toRangeIndex$java_awt_font_NumericShaper_Range(this.shapingRange);
if (index >= 0) {
this.key=index;
}}if (this.rangeSet != null ) {
this.mask|=$I$(2).toRangeMask$java_util_Set(this.rangeSet);
}stream.defaultWriteObject$();
}, p$2);

C$.$static$=function(){C$.$static$=0;
C$.bases=Clazz.array(Character.TYPE, -1, [0, 1584, 1728, 2358, 2486, 2614, 2742, 2870, 2998, 3126, 3254, 3382, 3616, 3744, 3824, 4112, 4920, 6064, 6112]);
C$.contexts=Clazz.array(Character.TYPE, -1, ["\u0000", "\u0300", "\u0600", "\u0780", "\u0600", "\u0780", "\u0900", "\u0980", "\u0980", "\u0a00", "\u0a00", "\u0a80", "\u0a80", "\u0b00", "\u0b00", "\u0b80", "\u0b80", "\u0c00", "\u0c00", "\u0c80", "\u0c80", "\u0d00", "\u0d00", "\u0d80", "\u0e00", "\u0e80", "\u0e80", "\u0f00", "\u0f00", "\u1000", "\u1000", "\u1080", "\u1200", "\u1380", "\u1780", "\u1800", "\u1800", "\u1900", "\uffff"]);
C$.ctCache=0;
C$.ctCacheLimit=C$.contexts.length - 2;
C$.strongTable=Clazz.array(Integer.TYPE, -1, [0, 65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 697, 699, 706, 720, 722, 736, 741, 750, 751, 880, 884, 886, 894, 902, 903, 904, 1014, 1015, 1155, 1162, 1418, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1488, 1536, 1544, 1545, 1547, 1548, 1549, 1550, 1563, 1611, 1645, 1648, 1649, 1750, 1765, 1767, 1774, 1776, 1786, 1809, 1810, 1840, 1869, 1958, 1969, 2027, 2036, 2038, 2042, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2096, 2137, 2142, 2276, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2433, 2434, 2492, 2493, 2497, 2503, 2509, 2510, 2530, 2534, 2546, 2548, 2555, 2563, 2620, 2622, 2625, 2649, 2672, 2674, 2677, 2691, 2748, 2749, 2753, 2761, 2765, 2768, 2786, 2790, 2801, 2818, 2876, 2877, 2879, 2880, 2881, 2887, 2893, 2903, 2914, 2918, 2946, 2947, 3008, 3009, 3021, 3024, 3059, 3073, 3134, 3137, 3142, 3160, 3170, 3174, 3192, 3199, 3260, 3261, 3276, 3285, 3298, 3302, 3393, 3398, 3405, 3406, 3426, 3430, 3530, 3535, 3538, 3544, 3633, 3634, 3636, 3648, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3792, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3902, 3953, 3967, 3968, 3973, 3974, 3976, 3981, 4030, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4957, 4960, 5008, 5024, 5120, 5121, 5760, 5761, 5787, 5792, 5906, 5920, 5938, 5941, 5970, 5984, 6002, 6016, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6107, 6108, 6109, 6112, 6128, 6160, 6313, 6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6470, 6622, 6656, 6679, 6681, 6742, 6743, 6744, 6753, 6754, 6755, 6757, 6765, 6771, 6784, 6912, 6916, 6964, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 7082, 7083, 7084, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7227, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7616, 7680, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8178, 8189, 8206, 8208, 8305, 8308, 8319, 8320, 8336, 8352, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8528, 8544, 8585, 9014, 9083, 9109, 9110, 9372, 9450, 9900, 9901, 10240, 10496, 11264, 11493, 11499, 11503, 11506, 11513, 11520, 11647, 11648, 11744, 12293, 12296, 12321, 12330, 12337, 12342, 12344, 12349, 12353, 12441, 12445, 12448, 12449, 12539, 12540, 12736, 12784, 12829, 12832, 12880, 12896, 12924, 12927, 12977, 12992, 13004, 13008, 13175, 13179, 13278, 13280, 13311, 13312, 19904, 19968, 42128, 42192, 42509, 42512, 42607, 42624, 42655, 42656, 42736, 42738, 42752, 42786, 42888, 42889, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43048, 43056, 43064, 43072, 43124, 43136, 43204, 43214, 43232, 43250, 43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 43453, 43561, 43567, 43569, 43571, 43573, 43584, 43587, 43588, 43596, 43597, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43756, 43758, 43766, 43777, 44005, 44006, 44008, 44009, 44013, 44016, 64286, 64287, 64297, 64298, 64830, 64848, 65021, 65136, 65279, 65313, 65339, 65345, 65371, 65382, 65504, 65536, 65793, 65794, 65856, 66000, 66045, 66176, 67871, 67872, 68097, 68112, 68152, 68160, 68409, 68416, 69216, 69632, 69633, 69634, 69688, 69703, 69714, 69734, 69760, 69762, 69811, 69815, 69817, 69819, 69888, 69891, 69927, 69932, 69933, 69942, 70016, 70018, 70070, 70079, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71360, 94095, 94099, 119143, 119146, 119155, 119171, 119173, 119180, 119210, 119214, 119296, 119648, 120539, 120540, 120597, 120598, 120655, 120656, 120713, 120714, 120771, 120772, 120782, 126464, 126704, 127248, 127338, 127344, 127744, 128140, 128141, 128292, 128293, 131072, 917505, 983040, 1114110, 1114111]);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.NumericShaper, "Range", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['base','start','end']]]

Clazz.newMeth(C$, 'toRangeIndex$java_awt_font_NumericShaper_Range',  function (script) {
var index=script.ordinal$();
return index < 19 ? index : -1;
}, 1);

Clazz.newMeth(C$, 'indexToRange$I',  function (index) {
return index < 19 ? C$.values$()[index] : null;
}, 1);

Clazz.newMeth(C$, 'toRangeMask$java_util_Set',  function (ranges) {
var m=0;
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var index=range.ordinal$();
if (index < 19) {
m|=1 << index;
}}
return m;
}, 1);

Clazz.newMeth(C$, 'maskToRangeSet$I',  function (mask) {
var set=$I$(1,"noneOf$Class",[Clazz.getClass(C$)]);
var a=C$.values$();
for (var i=0; i < 19; i++) {
if ((mask & (1 << i)) != 0) {
set.add$O(a[i]);
}}
return set;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (base, start, end) {
;C$.$init$.apply(this);
this.base=base - (48 + (this.getNumericBase$()).$c());
this.start=start;
this.end=end;
}, 1);

Clazz.newMeth(C$, 'getDigitBase',  function () {
return this.base;
}, p$1);

Clazz.newMeth(C$, 'getNumericBase$',  function () {
return String.fromCharCode(0);
});

Clazz.newMeth(C$, 'inRange$I',  function (c) {
return this.start <= c && c < this.end ;
}, p$1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "EUROPEAN", 0, ["0".$c(), "\u0000".$c(), "\u0300".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "ARABIC", 1, ["\u0660".$c(), "\u0600".$c(), "\u0780".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "EASTERN_ARABIC", 2, ["\u06f0".$c(), "\u0600".$c(), "\u0780".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "DEVANAGARI", 3, ["\u0966".$c(), "\u0900".$c(), "\u0980".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "BENGALI", 4, ["\u09e6".$c(), "\u0980".$c(), "\u0a00".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "GURMUKHI", 5, ["\u0a66".$c(), "\u0a00".$c(), "\u0a80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "GUJARATI", 6, ["\u0ae6".$c(), "\u0b00".$c(), "\u0b80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "ORIYA", 7, ["\u0b66".$c(), "\u0b00".$c(), "\u0b80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "TAMIL", 8, ["\u0be6".$c(), "\u0b80".$c(), "\u0c00".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "TELUGU", 9, ["\u0c66".$c(), "\u0c00".$c(), "\u0c80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "KANNADA", 10, ["\u0ce6".$c(), "\u0c80".$c(), "\u0d00".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "MALAYALAM", 11, ["\u0d66".$c(), "\u0d00".$c(), "\u0d80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "THAI", 12, ["\u0e50".$c(), "\u0e00".$c(), "\u0e80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "LAO", 13, ["\u0ed0".$c(), "\u0e80".$c(), "\u0f00".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "TIBETAN", 14, ["\u0f20".$c(), "\u0f00".$c(), "\u1000".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "MYANMAR", 15, ["\u1040".$c(), "\u1000".$c(), "\u1080".$c()]);
(P$.NumericShaper$Range$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumericShaper$Range$1", null, Clazz.load(['java.awt.font.NumericShaper','.Range']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getNumericBase$',  function () {
return String.fromCharCode(1);
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I$I, "ETHIOPIC", 16, ["\u1369".$c(), "\u1200".$c(), "\u1380".$c()], java.awt.font.NumericShaper$Range$1);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "KHMER", 17, ["\u17e0".$c(), "\u1780".$c(), "\u1800".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "MONGOLIAN", 18, ["\u1810".$c(), "\u1800".$c(), "\u1900".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "NKO", 19, ["\u07c0".$c(), "\u07c0".$c(), "\u0800".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "MYANMAR_SHAN", 20, ["\u1090".$c(), "\u1000".$c(), "\u10a0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "LIMBU", 21, ["\u1946".$c(), "\u1900".$c(), "\u1950".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "NEW_TAI_LUE", 22, ["\u19d0".$c(), "\u1980".$c(), "\u19e0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "BALINESE", 23, ["\u1b50".$c(), "\u1b00".$c(), "\u1b80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "SUNDANESE", 24, ["\u1bb0".$c(), "\u1b80".$c(), "\u1bc0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "LEPCHA", 25, ["\u1c40".$c(), "\u1c00".$c(), "\u1c50".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "OL_CHIKI", 26, ["\u1c50".$c(), "\u1c50".$c(), "\u1c80".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "VAI", 27, ["\ua620".$c(), "\ua500".$c(), "\ua640".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "SAURASHTRA", 28, ["\ua8d0".$c(), "\ua880".$c(), "\ua8e0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "KAYAH_LI", 29, ["\ua900".$c(), "\ua900".$c(), "\ua930".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "CHAM", 30, ["\uaa50".$c(), "\uaa00".$c(), "\uaa60".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "TAI_THAM_HORA", 31, ["\u1a80".$c(), "\u1a20".$c(), "\u1ab0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "TAI_THAM_THAM", 32, ["\u1a90".$c(), "\u1a20".$c(), "\u1ab0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "JAVANESE", 33, ["\ua9d0".$c(), "\ua980".$c(), "\ua9e0".$c()]);
Clazz.newEnumConst($vals, C$.c$$I$I$I, "MEETEI_MAYEK", 34, ["\uabf0".$c(), "\uabc0".$c(), "\uac00".$c()]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
