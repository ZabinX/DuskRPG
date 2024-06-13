(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'sun.font.FontDesignMetrics','sun.font.AttributeValues','sun.font.EAttribute','java.awt.font.TextAttribute','java.awt.geom.AffineTransform','swingjs.JSToolkit','sun.font.AttributeMap',['java.text.AttributedCharacterIterator','.Attribute'],['java.awt.geom.Point2D','.Float'],'sun.font.CoreMetrics','sun.font.FontLineMetrics','javajs.util.SB',['java.awt.geom.Rectangle2D','.Float']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Font");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.createdFont=false;
},1);

C$.$fields$=[['Z',['hasLayoutAttributes','createdFont','nonIdentityTx'],'F',['pointSize'],'I',['style','size','hash'],'S',['family','name'],'O',['font2DHandle','sun.font.Font2DHandle','values','sun.font.AttributeValues','flmref','sun.font.FontLineMetrics']]
,['Z',['haveMasks'],'I',['RECOGNIZED_MASK','PRIMARY_MASK','SECONDARY_MASK','LAYOUT_MASK','EXTRA_MASK'],'O',['ssinfo','float[]']]]

Clazz.newMeth(C$, 'getFontMetrics$',  function () {
return $I$(1).getMetrics$java_awt_Font(this);
});

Clazz.newMeth(C$, 'getAttributeValues',  function () {
if (this.values == null ) {
C$.initMasks$();
this.values=Clazz.new_($I$(2,1));
this.values.setFamily$S(this.name);
this.values.setSize$F(this.pointSize);
if ((this.style & 1) != 0) {
this.values.setWeight$F(2);
}if ((this.style & 2) != 0) {
this.values.setPosture$F(0.2);
}this.values.defineAll$I(C$.PRIMARY_MASK);
}return this.values;
}, p$1);

Clazz.newMeth(C$, 'c$$S$I$I',  function (name, style, size) {
;C$.$init$.apply(this);
this.name=(name != null ) ? name : "Default";
this.style=(style & ~3) == 0 ? style : 0;
this.size=size;
this.pointSize=size;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle',  function (values, oldName, oldStyle, created, handle) {
;C$.$init$.apply(this);
this.createdFont=created;
if (created) {
this.font2DHandle=handle;
var newName=null;
if (oldName != null ) {
newName=values.getFamily$();
if (oldName.equals$O(newName)) newName=null;
}var newStyle=0;
if (oldStyle == -1) {
newStyle=-1;
} else {
if (values.getWeight$() >= 2.0 ) newStyle=1;
if (values.getPosture$() >= 0.2 ) newStyle|=2;
if (oldStyle == newStyle) newStyle=-1;
}if (newName != null ) {
this.createdFont=false;
this.font2DHandle=null;
}}p$1.initFromValues$sun_font_AttributeValues.apply(this, [values]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (attributes) {
;C$.$init$.apply(this);
C$.initMasks$();
p$1.initFromValues$sun_font_AttributeValues.apply(this, [$I$(2).fromMap$java_util_Map$I(attributes, C$.RECOGNIZED_MASK)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font',  function (font) {
;C$.$init$.apply(this);
if (font.values != null ) {
p$1.initFromValues$sun_font_AttributeValues.apply(this, [p$1.getAttributeValues.apply(font, []).clone$()]);
} else {
this.name=font.name;
this.style=font.style;
this.size=font.size;
this.pointSize=font.pointSize;
}}, 1);

Clazz.newMeth(C$, 'initMasks$',  function () {
if (C$.haveMasks) return;
C$.RECOGNIZED_MASK=$I$(2).MASK_ALL & ~$I$(2,"getMask$sun_font_EAttribute",[$I$(3).EFONT]);
C$.PRIMARY_MASK=$I$(2,"getMask$sun_font_EAttributeA",[Clazz.array($I$(3), -1, [$I$(3).EFAMILY, $I$(3).EWEIGHT, $I$(3).EWIDTH, $I$(3).EPOSTURE, $I$(3).ESIZE, $I$(3).ETRANSFORM, $I$(3).ESUPERSCRIPT, $I$(3).ETRACKING])]);
C$.SECONDARY_MASK=C$.RECOGNIZED_MASK & ~C$.PRIMARY_MASK;
C$.LAYOUT_MASK=$I$(2,"getMask$sun_font_EAttributeA",[Clazz.array($I$(3), -1, [$I$(3).ECHAR_REPLACEMENT, $I$(3).EFOREGROUND, $I$(3).EBACKGROUND, $I$(3).EUNDERLINE, $I$(3).ESTRIKETHROUGH, $I$(3).ERUN_DIRECTION, $I$(3).EBIDI_EMBEDDING, $I$(3).EJUSTIFICATION, $I$(3).EINPUT_METHOD_HIGHLIGHT, $I$(3).EINPUT_METHOD_UNDERLINE, $I$(3).ESWAP_COLORS, $I$(3).ENUMERIC_SHAPING, $I$(3).EKERNING, $I$(3).ELIGATURES, $I$(3).ETRACKING])]);
C$.EXTRA_MASK=$I$(2,"getMask$sun_font_EAttributeA",[Clazz.array($I$(3), -1, [$I$(3).ETRANSFORM, $I$(3).ESUPERSCRIPT, $I$(3).EWIDTH])]);
C$.haveMasks=true;
}, 1);

Clazz.newMeth(C$, 'initFromValues$sun_font_AttributeValues',  function (values) {
this.values=values;
C$.initMasks$();
values.defineAll$I(C$.PRIMARY_MASK);
this.name=values.getFamily$();
this.pointSize=values.getSize$();
this.size=((values.getSize$() + 0.5)|0);
if (values.getWeight$() >= 2.0 ) this.style|=1;
if (values.getPosture$() >= 0.2 ) this.style|=2;
this.nonIdentityTx=values.anyNonDefault$I(C$.EXTRA_MASK);
this.hasLayoutAttributes=values.anyNonDefault$I(C$.LAYOUT_MASK);
}, p$1);

Clazz.newMeth(C$, 'getFont$java_util_Map',  function (attributes) {
C$.initMasks$();
if (Clazz.instanceOf(attributes, "sun.font.AttributeMap") && (attributes).getValues$() != null  ) {
var values=(attributes).getValues$();
if (values.isNonDefault$sun_font_EAttribute($I$(3).EFONT)) {
var font=values.getFont$();
if (!values.anyDefined$I(C$.SECONDARY_MASK)) {
return font;
}values=p$1.getAttributeValues.apply(font, []).clone$();
values.merge$java_util_Map$I(attributes, C$.SECONDARY_MASK);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[values, font.name, font.style, font.createdFont, font.font2DHandle]);
}return Clazz.new_(C$.c$$java_util_Map,[attributes]);
}var font=attributes.get$O($I$(4).FONT);
if (font != null ) {
if (attributes.size$() > 1) {
var values=p$1.getAttributeValues.apply(font, []).clone$();
values.merge$java_util_Map$I(attributes, C$.SECONDARY_MASK);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[values, font.name, font.style, font.createdFont, font.font2DHandle]);
}return font;
}return Clazz.new_(C$.c$$java_util_Map,[attributes]);
}, 1);

Clazz.newMeth(C$, 'getTransform$',  function () {
if (this.nonIdentityTx) {
var values=p$1.getAttributeValues.apply(this, []);
var at=values.isNonDefault$sun_font_EAttribute($I$(3).ETRANSFORM) ? Clazz.new_([values.getTransform$()],$I$(5,1).c$$java_awt_geom_AffineTransform) : Clazz.new_($I$(5,1));
if (values.getSuperscript$() != 0) {
var superscript=values.getSuperscript$();
var trans=0;
var n=0;
var up=superscript > 0;
var sign=up ? -1 : 1;
var ss=up ? superscript : -superscript;
while ((ss & 7) > n){
var newn=ss & 7;
trans+=sign * (C$.ssinfo[newn] - C$.ssinfo[n]);
ss>>=3;
sign=-sign;
n=newn;
}
trans*=this.pointSize;
var scale=Math.pow(0.6666666666666666, n);
at.preConcatenate$java_awt_geom_AffineTransform($I$(5).getTranslateInstance$D$D(0, trans));
at.scale$D$D(scale, scale);
}if (values.isNonDefault$sun_font_EAttribute($I$(3).EWIDTH)) {
at.scale$D$D(values.getWidth$(), 1.0);
}return at;
}return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, '秘getRawTransformOrNull$',  function () {
return (this.nonIdentityTx ? p$1.getAttributeValues.apply(this, []).getTransform$() : null);
});

Clazz.newMeth(C$, 'getFamily$',  function () {
return (this.family == null  ? this.family=$I$(6).getFontFamily$java_awt_Font(this) : this.family);
});

Clazz.newMeth(C$, 'getPSName$',  function () {
switch (this.name) {
case "TimesRoman":
this.name="Serif";
break;
case "Helvetica":
this.name="SansSerif";
break;
case "Courier":
this.name="Monospaced";
break;
default:
case "Monospaced":
case "Serif":
case "SansSerif":
case "Dialog":
case "DialogInput":
break;
}
return this.name + (this.isPlain$() ? ".plain" : "." + (this.isBold$() ? "bold" : "") + (this.isItalic$() ? "italic" : "") );
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getFontName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getStyle$',  function () {
return this.style;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'getSize2D$',  function () {
return this.pointSize;
});

Clazz.newMeth(C$, 'isPlain$',  function () {
return this.style == 0;
});

Clazz.newMeth(C$, 'isBold$',  function () {
return (this.style & 1) != 0;
});

Clazz.newMeth(C$, 'isItalic$',  function () {
return (this.style & 2) != 0;
});

Clazz.newMeth(C$, 'isTransformed$',  function () {
return this.nonIdentityTx;
});

Clazz.newMeth(C$, 'hasLayoutAttributes$',  function () {
return this.hasLayoutAttributes;
});

Clazz.newMeth(C$, 'getFont$S',  function (nm) {
return C$.getFont$S$java_awt_Font(nm, null);
}, 1);

Clazz.newMeth(C$, 'decode$S',  function (str) {
var fontName=str;
var styleName="";
var fontSize=12;
var fontStyle=0;
if (str == null ) {
return Clazz.new_(C$.c$$S$I$I,["Dialog", fontStyle, fontSize]);
}var lastHyphen=str.lastIndexOf$I("-");
var lastSpace=str.lastIndexOf$I(" ");
var sepChar=(lastHyphen > lastSpace) ? "-" : " ";
var sizeIndex=str.lastIndexOf$I(sepChar);
var styleIndex=str.lastIndexOf$I$I(sepChar, sizeIndex - 1);
var strlen=str.length$();
if (sizeIndex > 0 && sizeIndex + 1 < strlen ) {
try {
fontSize=Integer.valueOf$S(str.substring$I(sizeIndex + 1)).intValue$();
if (fontSize <= 0) {
fontSize=12;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
styleIndex=sizeIndex;
sizeIndex=strlen;
if (str.charAt$I(sizeIndex - 1) == sepChar) {
--sizeIndex;
}} else {
throw e;
}
}
}if (styleIndex >= 0 && styleIndex + 1 < strlen ) {
styleName=str.substring$I$I(styleIndex + 1, sizeIndex);
styleName=styleName.toLowerCase$();
if (styleName.equals$O("bolditalic")) {
fontStyle=3;
} else if (styleName.equals$O("italic")) {
fontStyle=2;
} else if (styleName.equals$O("bold")) {
fontStyle=1;
} else if (styleName.equals$O("plain")) {
fontStyle=0;
} else {
styleIndex=sizeIndex;
if (str.charAt$I(styleIndex - 1) == sepChar) {
--styleIndex;
}}fontName=str.substring$I$I(0, styleIndex);
} else {
var fontEnd=strlen;
if (styleIndex > 0) {
fontEnd=styleIndex;
} else if (sizeIndex > 0) {
fontEnd=sizeIndex;
}if (fontEnd > 0 && str.charAt$I(fontEnd - 1) == sepChar ) {
--fontEnd;
}fontName=str.substring$I$I(0, fontEnd);
}return Clazz.new_(C$.c$$S$I$I,[fontName, fontStyle, fontSize]);
}, 1);

Clazz.newMeth(C$, 'getFont$S$java_awt_Font',  function (nm, font) {
var str=null;
try {
str=System.getProperty$S(nm);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
} else {
throw e;
}
}
if (str == null ) {
return font;
}return C$.decode$S(str);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hash == 0) {
this.hash=this.name.hashCode$() ^ this.style ^ this.size ;
}return this.hash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (obj != null ) {
try {
var font=obj;
if (this.size == font.size && this.style == font.style  && this.nonIdentityTx == font.nonIdentityTx   && this.hasLayoutAttributes == font.hasLayoutAttributes   && this.pointSize == font.pointSize   && this.name.equals$O(font.name) ) {
return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
}return false;
});

Clazz.newMeth(C$, 'toString',  function () {
var strStyle;
if (this.isBold$()) {
strStyle=this.isItalic$() ? "bolditalic" : "bold";
} else {
strStyle=this.isItalic$() ? "italic" : "plain";
}return this.getClass$().getName$() + "[family=" + this.getFamily$() + ",name=" + this.name + ",style=" + strStyle + ",size=" + this.size + "]" ;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return Clazz.new_([p$1.getAttributeValues.apply(this, [])],$I$(7,1).c$$sun_font_AttributeValues);
});

Clazz.newMeth(C$, 'getAvailableAttributes$',  function () {
var attributes=Clazz.array($I$(8), -1, [$I$(4).FAMILY, $I$(4).WEIGHT, $I$(4).WIDTH, $I$(4).SIZE, $I$(4).UNDERLINE, $I$(4).STRIKETHROUGH]);
return attributes;
});

Clazz.newMeth(C$, 'deriveFont$I$F',  function (style, sizePts) {
var f=Clazz.new_(C$.c$$S$I$I,[this.name, style, ((sizePts + 0.5)|0)]);
f.pointSize=sizePts;
return f;
});

Clazz.newMeth(C$, 'deriveFont$F',  function (sizePts) {
if (this.values == null ) {
var f=Clazz.new_(C$.c$$S$I$I,[this.name, this.style, ((sizePts + 0.5)|0)]);
f.pointSize=sizePts;
return f;
}var newValues=p$1.getAttributeValues.apply(this, []).clone$();
newValues.setSize$F(sizePts);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[newValues, null, -1, this.createdFont, this.font2DHandle]);
});

Clazz.newMeth(C$, 'deriveFont$java_awt_geom_AffineTransform',  function (trans) {
var newValues=p$1.getAttributeValues.apply(this, []).clone$();
C$.applyTransform$java_awt_geom_AffineTransform$sun_font_AttributeValues(trans, newValues);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[newValues, null, -1, this.createdFont, this.font2DHandle]);
});

Clazz.newMeth(C$, 'deriveFont$I',  function (style) {
if (this.values == null ) {
return Clazz.new_(C$.c$$S$I$I,[this.name, style, this.size]);
}var newValues=p$1.getAttributeValues.apply(this, []).clone$();
var oldStyle=(this.style != style) ? this.style : -1;
C$.applyStyle$I$sun_font_AttributeValues(style, newValues);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[newValues, null, oldStyle, this.createdFont, this.font2DHandle]);
});

Clazz.newMeth(C$, 'deriveFont$java_util_Map',  function (attributes) {
if (attributes == null ) {
return this;
}var newValues=p$1.getAttributeValues.apply(this, []).clone$();
newValues.merge$java_util_Map$I(attributes, C$.RECOGNIZED_MASK);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[newValues, this.name, this.style, this.createdFont, this.font2DHandle]);
});

Clazz.newMeth(C$, 'canDisplay$C',  function (c) {
return true;
});

Clazz.newMeth(C$, 'canDisplay$I',  function (codePoint) {
if (!Character.isValidCodePoint$I(codePoint)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid code point: " + Integer.toHexString$I(codePoint)]);
}return true;
});

Clazz.newMeth(C$, 'canDisplayUpTo$S',  function (str) {
return -1;
});

Clazz.newMeth(C$, 'canDisplayUpTo$CA$I$I',  function (text, start, limit) {
while (start < limit && this.canDisplay$C(text[start]) ){
++start;
}
return start == limit ? -1 : start;
});

Clazz.newMeth(C$, 'canDisplayUpTo$java_text_CharacterIterator$I$I',  function (iter, start, limit) {
return -1;
});

Clazz.newMeth(C$, 'getItalicAngle$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getItalicAngle$java_awt_font_FontRenderContext',  function (frc) {
return 0.0;
}, p$1);

Clazz.newMeth(C$, 'hasUniformLineMetrics$',  function () {
return false;
});

Clazz.newMeth(C$, 'defaultLineMetrics$java_awt_font_FontRenderContext',  function (frc) {
var flm=null;
if (this.flmref == null  || !(flm=this.flmref).frc.equals$java_awt_font_FontRenderContext(frc) ) {
var metrics=Clazz.array(Float.TYPE, [8]);
(this.getFontMetrics$()).秘fillMetrics$FA(metrics);
var ascent=metrics[0];
var descent=metrics[1];
var leading=metrics[2];
var ssOffset=0;
if (this.values != null  && this.values.getSuperscript$() != 0 ) {
ssOffset=this.getTransform$().getTranslateY$();
ascent-=ssOffset;
descent+=ssOffset;
}var height=ascent + descent + leading ;
var baselineIndex=0;
var baselineOffsets=Clazz.array(Float.TYPE, -1, [0, (descent / 2.0 - ascent) / 2.0, -ascent]);
var strikethroughOffset=metrics[4];
var strikethroughThickness=metrics[5];
var underlineOffset=metrics[6];
var underlineThickness=metrics[7];
var italicAngle=p$1.getItalicAngle$java_awt_font_FontRenderContext.apply(this, [frc]);
if (this.isTransformed$()) {
var ctx=this.values.getCharTransform$();
if (ctx != null ) {
var pt=Clazz.new_($I$(9,1));
pt.setLocation$F$F(0, strikethroughOffset);
ctx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
strikethroughOffset=pt.y;
pt.setLocation$F$F(0, strikethroughThickness);
ctx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
strikethroughThickness=pt.y;
pt.setLocation$F$F(0, underlineOffset);
ctx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
underlineOffset=pt.y;
pt.setLocation$F$F(0, underlineThickness);
ctx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
underlineThickness=pt.y;
}}strikethroughOffset+=ssOffset;
underlineOffset+=ssOffset;
var cm=Clazz.new_($I$(10,1).c$$F$F$F$F$I$FA$F$F$F$F$F$F,[ascent, descent, leading, height, baselineIndex, baselineOffsets, strikethroughOffset, strikethroughThickness, underlineOffset, underlineThickness, ssOffset, italicAngle]);
flm=Clazz.new_($I$(11,1).c$$I$sun_font_CoreMetrics$java_awt_font_FontRenderContext,[0, cm, frc]);
this.flmref=flm;
}return flm.clone$();
}, p$1);

Clazz.newMeth(C$, 'getLineMetrics$S$java_awt_font_FontRenderContext',  function (str, frc) {
var flm=p$1.defaultLineMetrics$java_awt_font_FontRenderContext.apply(this, [frc]);
flm.numchars=str.length$();
return flm;
});

Clazz.newMeth(C$, 'getLineMetrics$S$I$I$java_awt_font_FontRenderContext',  function (str, beginIndex, limit, frc) {
var flm=p$1.defaultLineMetrics$java_awt_font_FontRenderContext.apply(this, [frc]);
var numChars=limit - beginIndex;
flm.numchars=(numChars < 0) ? 0 : numChars;
return flm;
});

Clazz.newMeth(C$, 'getLineMetrics$CA$I$I$java_awt_font_FontRenderContext',  function (chars, beginIndex, limit, frc) {
var flm=p$1.defaultLineMetrics$java_awt_font_FontRenderContext.apply(this, [frc]);
var numChars=limit - beginIndex;
flm.numchars=(numChars < 0) ? 0 : numChars;
return flm;
});

Clazz.newMeth(C$, 'getLineMetrics$java_text_CharacterIterator$I$I$java_awt_font_FontRenderContext',  function (ci, beginIndex, limit, frc) {
var flm=p$1.defaultLineMetrics$java_awt_font_FontRenderContext.apply(this, [frc]);
var numChars=limit - beginIndex;
flm.numchars=(numChars < 0) ? 0 : numChars;
return flm;
});

Clazz.newMeth(C$, 'getStringBounds$S$java_awt_font_FontRenderContext',  function (str, frc) {
return this.getStringBoundsStr$S$I$I(str, 0, str.length$());
});

Clazz.newMeth(C$, 'getStringBounds$S$I$I$java_awt_font_FontRenderContext',  function (str, beginIndex, limit, frc) {
return this.getStringBoundsStr$S$I$I(str, beginIndex, limit);
});

Clazz.newMeth(C$, 'getStringBounds$CA$I$I$java_awt_font_FontRenderContext',  function (chars, beginIndex, limit, frc) {
if (beginIndex < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["beginIndex: " + beginIndex]);
}if (limit > chars.length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["limit: " + limit]);
}if (beginIndex > limit) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["range length: " + (limit - beginIndex)]);
}var sb=Clazz.new_($I$(12,1));
sb.appendCB$CA$I$I(chars, beginIndex, limit);
return (this.getFontMetrics$()).秘getStringBounds$S(sb.toString());
});

Clazz.newMeth(C$, 'getStringBoundsStr$S$I$I',  function (s, beginIndex, limit) {
if (beginIndex < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["beginIndex: " + beginIndex]);
}if (limit > s.length$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["limit: " + limit]);
}if (beginIndex > limit) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["range length: " + (limit - beginIndex)]);
}s=s.substring$I$I(beginIndex, limit);
return (this.getFontMetrics$()).秘getStringBounds$S(s);
});

Clazz.newMeth(C$, 'getStringBounds$java_text_CharacterIterator$I$I$java_awt_font_FontRenderContext',  function (ci, beginIndex, limit, frc) {
var start=ci.getBeginIndex$();
var end=ci.getEndIndex$();
if (beginIndex < start) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["beginIndex: " + beginIndex]);
}if (limit > end) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["limit: " + limit]);
}if (beginIndex > limit) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["range length: " + (limit - beginIndex)]);
}var arr=Clazz.array(Character.TYPE, [limit - beginIndex]);
ci.setIndex$I(beginIndex);
for (var idx=0; idx < arr.length; idx++) {
arr[idx]=ci.current$();
ci.next$();
}
return this.getStringBounds$CA$I$I$java_awt_font_FontRenderContext(arr, 0, arr.length, frc);
});

Clazz.newMeth(C$, 'getMaxCharBounds$java_awt_font_FontRenderContext',  function (frc) {
var metrics=Clazz.array(Float.TYPE, [4]);
(this.getFontMetrics$()).秘fillMetrics$FA(metrics);
return Clazz.new_($I$(13,1).c$$F$F$F$F,[0, -metrics[0], metrics[3], metrics[0] + metrics[1] + metrics[2] ]);
});

Clazz.newMeth(C$, 'applyTransform$java_awt_geom_AffineTransform$sun_font_AttributeValues',  function (trans, values) {
if (trans == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["transform must not be null"]);
}values.setTransform$java_awt_geom_AffineTransform(trans);
}, 1);

Clazz.newMeth(C$, 'applyStyle$I$sun_font_AttributeValues',  function (style, values) {
values.setWeight$F((style & 1) != 0 ? 2.0 : 1.0);
values.setPosture$F((style & 2) != 0 ? 0.2 : 0.0);
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.ssinfo=Clazz.array(Float.TYPE, -1, [0.0, 0.375, 0.625, 0.7916667, 0.9027778, 0.9768519, 1.0262346, 1.0591564]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
