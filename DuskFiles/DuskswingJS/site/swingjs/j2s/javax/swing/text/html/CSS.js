(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},p$2={},p$3={},I$=[[0,'javax.swing.text.StyleConstants',['javax.swing.text.html.CSS','.LengthUnit'],'javax.swing.text.html.CSS','javax.swing.text.html.StyleSheet',['javax.swing.text.html.CSS','.Value'],'javax.swing.ImageIcon','java.awt.Toolkit','java.util.Hashtable',['javax.swing.text.html.CSS','.Attribute'],'javax.swing.text.html.CSSBorder',['javax.swing.text.html.HTML','.Attribute'],'javax.swing.text.StyleContext',['javax.swing.text.html.CSS','.FontSize'],['javax.swing.text.html.CSS','.FontFamily'],['javax.swing.text.html.CSS','.FontWeight'],['javax.swing.text.html.CSS','.BorderStyle'],['javax.swing.text.html.CSS','.ColorValue'],['javax.swing.text.html.CSS','.LengthValue'],['javax.swing.text.html.CSS','.BorderWidthValue'],['javax.swing.text.html.CSS','.StringValue'],['javax.swing.text.html.CSS','.CssValueMapper'],['javax.swing.text.html.CSS','.BackgroundImage'],['javax.swing.text.html.CSS','.BackgroundPosition'],['javax.swing.text.html.CSS','.CssValue'],['javax.swing.text.html.CSS','.ShorthandFontParser'],['javax.swing.text.html.CSS','.ShorthandBackgroundParser'],['javax.swing.text.html.CSS','.ShorthandMarginParser'],['javax.swing.text.html.CSS','.ShorthandBorderParser'],'javax.swing.text.SimpleAttributeSet',['javax.swing.text.html.HTML','.Tag'],'java.net.URL','java.awt.Color','java.util.Vector','javax.swing.SizeRequirements']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CSS", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['Attribute',25],['Value',24],['CssValue',8],['StringValue',8],['FontSize',0],['FontFamily',8],['FontWeight',8],['ColorValue',8],['BorderStyle',8],['LengthValue',8],['BorderWidthValue',8],['CssValueMapper',8],['BackgroundPosition',8],['BackgroundImage',8],['LengthUnit',8],['ShorthandFontParser',8],['ShorthandBackgroundParser',8],['ShorthandMarginParser',8],['ShorthandBorderParser',8],['LayoutIterator',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.styleSheet=null;
},1);

C$.$fields$=[['I',['baseFontSize'],'O',['+valueConvertor','styleSheet','javax.swing.text.html.StyleSheet']]
,['I',['baseFontSizeIndex'],'O',['attributeMap','java.util.Hashtable','+valueMap','+htmlAttrToCssAttrMap','+styleConstantToCssMap','+htmlValueToCssValueMap','+cssValueToInternalValueMap']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.baseFontSize=C$.baseFontSizeIndex + 1;
this.valueConvertor=Clazz.new_($I$(8,1));
this.valueConvertor.put$O$O($I$(9).FONT_SIZE, Clazz.new_($I$(13,1),[this, null]));
this.valueConvertor.put$O$O($I$(9).FONT_FAMILY, Clazz.new_($I$(14,1)));
this.valueConvertor.put$O$O($I$(9).FONT_WEIGHT, Clazz.new_($I$(15,1)));
var bs=Clazz.new_($I$(16,1));
this.valueConvertor.put$O$O($I$(9).BORDER_TOP_STYLE, bs);
this.valueConvertor.put$O$O($I$(9).BORDER_RIGHT_STYLE, bs);
this.valueConvertor.put$O$O($I$(9).BORDER_BOTTOM_STYLE, bs);
this.valueConvertor.put$O$O($I$(9).BORDER_LEFT_STYLE, bs);
var cv=Clazz.new_($I$(17,1));
this.valueConvertor.put$O$O($I$(9).COLOR, cv);
this.valueConvertor.put$O$O($I$(9).BACKGROUND_COLOR, cv);
this.valueConvertor.put$O$O($I$(9).BORDER_TOP_COLOR, cv);
this.valueConvertor.put$O$O($I$(9).BORDER_RIGHT_COLOR, cv);
this.valueConvertor.put$O$O($I$(9).BORDER_BOTTOM_COLOR, cv);
this.valueConvertor.put$O$O($I$(9).BORDER_LEFT_COLOR, cv);
var lv=Clazz.new_($I$(18,1));
this.valueConvertor.put$O$O($I$(9).MARGIN_TOP, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_BOTTOM, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_LEFT, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_LEFT_LTR, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_LEFT_RTL, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_RIGHT, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_RIGHT_LTR, lv);
this.valueConvertor.put$O$O($I$(9).MARGIN_RIGHT_RTL, lv);
this.valueConvertor.put$O$O($I$(9).PADDING_TOP, lv);
this.valueConvertor.put$O$O($I$(9).PADDING_BOTTOM, lv);
this.valueConvertor.put$O$O($I$(9).PADDING_LEFT, lv);
this.valueConvertor.put$O$O($I$(9).PADDING_RIGHT, lv);
var bv=Clazz.new_($I$(19,1).c$$S$I,[null, 0]);
this.valueConvertor.put$O$O($I$(9).BORDER_TOP_WIDTH, bv);
this.valueConvertor.put$O$O($I$(9).BORDER_BOTTOM_WIDTH, bv);
this.valueConvertor.put$O$O($I$(9).BORDER_LEFT_WIDTH, bv);
this.valueConvertor.put$O$O($I$(9).BORDER_RIGHT_WIDTH, bv);
var nlv=Clazz.new_($I$(18,1).c$$Z,[true]);
this.valueConvertor.put$O$O($I$(9).TEXT_INDENT, nlv);
this.valueConvertor.put$O$O($I$(9).WIDTH, lv);
this.valueConvertor.put$O$O($I$(9).HEIGHT, lv);
this.valueConvertor.put$O$O($I$(9).BORDER_SPACING, lv);
var sv=Clazz.new_($I$(20,1));
this.valueConvertor.put$O$O($I$(9).FONT_STYLE, sv);
this.valueConvertor.put$O$O($I$(9).TEXT_DECORATION, sv);
this.valueConvertor.put$O$O($I$(9).TEXT_ALIGN, sv);
this.valueConvertor.put$O$O($I$(9).VERTICAL_ALIGN, sv);
var valueMapper=Clazz.new_($I$(21,1));
this.valueConvertor.put$O$O($I$(9).LIST_STYLE_TYPE, valueMapper);
this.valueConvertor.put$O$O($I$(9).BACKGROUND_IMAGE, Clazz.new_($I$(22,1)));
this.valueConvertor.put$O$O($I$(9).BACKGROUND_POSITION, Clazz.new_($I$(23,1)));
this.valueConvertor.put$O$O($I$(9).BACKGROUND_REPEAT, valueMapper);
this.valueConvertor.put$O$O($I$(9).BACKGROUND_ATTACHMENT, valueMapper);
var generic=Clazz.new_($I$(24,1));
var n=$I$(9).allAttributes.length;
for (var i=0; i < n; i++) {
var key=$I$(9).allAttributes[i];
if (this.valueConvertor.get$O(key) == null ) {
this.valueConvertor.put$O$O(key, generic);
}}
}, 1);

Clazz.newMeth(C$, 'setBaseFontSize$I',  function (sz) {
if (sz < 1) this.baseFontSize=0;
 else if (sz > 7) this.baseFontSize=7;
 else this.baseFontSize=sz;
});

Clazz.newMeth(C$, 'setBaseFontSize$S',  function (size) {
var relSize;
var absSize;
var diff;
if (size != null ) {
if (size.startsWith$S("+")) {
relSize=Integer.valueOf$S(size.substring$I(1)).intValue$();
this.setBaseFontSize$I(this.baseFontSize + relSize);
} else if (size.startsWith$S("-")) {
relSize=-Integer.valueOf$S(size.substring$I(1)).intValue$();
this.setBaseFontSize$I(this.baseFontSize + relSize);
} else {
this.setBaseFontSize$I(Integer.valueOf$S(size).intValue$());
}}});

Clazz.newMeth(C$, 'getBaseFontSize$',  function () {
return this.baseFontSize;
});

Clazz.newMeth(C$, 'addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S',  function (attr, key, value) {
if (key === $I$(9).FONT ) {
$I$(25).parseShorthandFont$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet(this, value, attr);
} else if (key === $I$(9).BACKGROUND ) {
$I$(26).parseShorthandBackground$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet(this, value, attr);
} else if (key === $I$(9).MARGIN ) {
$I$(27,"parseShorthandMargin$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_AttributeA",[this, value, attr, $I$(9).ALL_MARGINS]);
} else if (key === $I$(9).PADDING ) {
$I$(27,"parseShorthandMargin$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_AttributeA",[this, value, attr, $I$(9).ALL_PADDING]);
} else if (key === $I$(9).BORDER_WIDTH ) {
$I$(27,"parseShorthandMargin$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_AttributeA",[this, value, attr, $I$(9).ALL_BORDER_WIDTHS]);
} else if (key === $I$(9).BORDER_COLOR ) {
$I$(27,"parseShorthandMargin$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_AttributeA",[this, value, attr, $I$(9).ALL_BORDER_COLORS]);
} else if (key === $I$(9).BORDER_STYLE ) {
$I$(27,"parseShorthandMargin$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_AttributeA",[this, value, attr, $I$(9).ALL_BORDER_STYLES]);
} else if ((key === $I$(9).BORDER ) || (key === $I$(9).BORDER_TOP ) || (key === $I$(9).BORDER_RIGHT ) || (key === $I$(9).BORDER_BOTTOM ) || (key === $I$(9).BORDER_LEFT )  ) {
$I$(28).parseShorthandBorder$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, key, value);
} else {
var iValue=this.getInternalCSSValue$javax_swing_text_html_CSS_Attribute$S(key, value);
if (iValue != null ) {
attr.addAttribute$O$O(key, iValue);
}}});

Clazz.newMeth(C$, 'getInternalCSSValue$javax_swing_text_html_CSS_Attribute$S',  function (key, value) {
var conv=this.valueConvertor.get$O(key);
var r=conv.parseCssValue$S(value);
return r != null  ? r : conv.parseCssValue$S(key.getDefaultValue$());
});

Clazz.newMeth(C$, 'styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants',  function (sc) {
return C$.styleConstantToCssMap.get$O(sc);
});

Clazz.newMeth(C$, 'styleConstantsValueToCSSValue$javax_swing_text_StyleConstants$O',  function (sc, styleValue) {
var cssKey=this.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(sc);
if (cssKey != null ) {
var conv=this.valueConvertor.get$O(cssKey);
return conv.fromStyleConstants$javax_swing_text_StyleConstants$O(sc, styleValue);
}return null;
});

Clazz.newMeth(C$, 'cssValueToStyleConstantsValue$javax_swing_text_StyleConstants$O',  function (key, value) {
if (Clazz.instanceOf(value, "javax.swing.text.html.CSS.CssValue")) {
return (value).toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View(key, null);
}return null;
});

Clazz.newMeth(C$, 'getFont$javax_swing_text_StyleContext$javax_swing_text_AttributeSet$I$javax_swing_text_html_StyleSheet',  function (sc, a, defaultSize, ss) {
ss=p$1.getStyleSheet$javax_swing_text_html_StyleSheet.apply(this, [ss]);
var size=C$.getFontSize$javax_swing_text_AttributeSet$I$javax_swing_text_html_StyleSheet(a, defaultSize, ss);
var vAlignV=a.getAttribute$O($I$(9).VERTICAL_ALIGN);
if ((vAlignV != null )) {
var vAlign=vAlignV.toString();
if ((vAlign.indexOf$S("sup") >= 0) || (vAlign.indexOf$S("sub") >= 0) ) {
size-=2;
}}var familyValue=a.getAttribute$O($I$(9).FONT_FAMILY);
var family=(familyValue != null ) ? familyValue.getValue$() : "SansSerif";
var style=0;
var weightValue=a.getAttribute$O($I$(9).FONT_WEIGHT);
if ((weightValue != null ) && (weightValue.getValue$() > 400) ) {
style|=1;
}var fs=a.getAttribute$O($I$(9).FONT_STYLE);
if ((fs != null ) && (fs.toString().indexOf$S("italic") >= 0) ) {
style|=2;
}if (family.equalsIgnoreCase$S("monospace")) {
family="Monospaced";
}var f=sc.getFont$S$I$I(family, style, size);
if (f == null  || (f.getFamily$().equals$O("Dialog") && !family.equalsIgnoreCase$S("Dialog") ) ) {
family="SansSerif";
f=sc.getFont$S$I$I(family, style, size);
}return f;
});

Clazz.newMeth(C$, 'getFontSize$javax_swing_text_AttributeSet$I$javax_swing_text_html_StyleSheet',  function (attr, defaultSize, ss) {
var sizeValue=attr.getAttribute$O($I$(9).FONT_SIZE);
return (sizeValue != null ) ? sizeValue.getValue$javax_swing_text_AttributeSet$javax_swing_text_html_StyleSheet(attr, ss) : defaultSize;
}, 1);

Clazz.newMeth(C$, 'getColor$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute',  function (a, key) {
var cv=a.getAttribute$O(key);
if (cv != null ) {
return cv.getValue$();
}return null;
});

Clazz.newMeth(C$, 'getPointSize$S$javax_swing_text_html_StyleSheet',  function (size, ss) {
var relSize;
var absSize;
var diff;
var index;
ss=p$1.getStyleSheet$javax_swing_text_html_StyleSheet.apply(this, [ss]);
if (size != null ) {
if (size.startsWith$S("+")) {
relSize=Integer.valueOf$S(size.substring$I(1)).intValue$();
return this.getPointSize$I$javax_swing_text_html_StyleSheet(this.baseFontSize + relSize, ss);
} else if (size.startsWith$S("-")) {
relSize=-Integer.valueOf$S(size.substring$I(1)).intValue$();
return this.getPointSize$I$javax_swing_text_html_StyleSheet(this.baseFontSize + relSize, ss);
} else {
absSize=Integer.valueOf$S(size).intValue$();
return this.getPointSize$I$javax_swing_text_html_StyleSheet(absSize, ss);
}}return 0;
});

Clazz.newMeth(C$, 'getLength$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute$javax_swing_text_html_StyleSheet',  function (a, key, ss) {
ss=p$1.getStyleSheet$javax_swing_text_html_StyleSheet.apply(this, [ss]);
var lv=a.getAttribute$O(key);
var isW3CLengthUnits=(ss == null ) ? false : ss.isW3CLengthUnits$();
var len=(lv != null ) ? lv.getValue$Z(isW3CLengthUnits) : 0;
return len;
});

Clazz.newMeth(C$, 'translateHTMLToCSS$javax_swing_text_AttributeSet',  function (htmlAttrSet) {
var cssAttrSet=Clazz.new_($I$(29,1));
var elem=htmlAttrSet;
var tag=p$1.getHTMLTag$javax_swing_text_AttributeSet.apply(this, [htmlAttrSet]);
if ((tag === $I$(30).TD ) || (tag === $I$(30).TH ) ) {
var tableAttr=elem.getParentElement$().getParentElement$().getAttributes$();
var borderWidth=C$.getTableBorder$javax_swing_text_AttributeSet(tableAttr);
if (borderWidth > 0) {
p$1.translateAttribute$javax_swing_text_html_HTML_Attribute$S$javax_swing_text_MutableAttributeSet.apply(this, [$I$(11).BORDER, "1", cssAttrSet]);
}var pad=tableAttr.getAttribute$O($I$(11).CELLPADDING);
if (pad != null ) {
var v=this.getInternalCSSValue$javax_swing_text_html_CSS_Attribute$S($I$(9).PADDING_TOP, pad);
v.span=(v.span < 0 ) ? 0 : v.span;
cssAttrSet.addAttribute$O$O($I$(9).PADDING_TOP, v);
cssAttrSet.addAttribute$O$O($I$(9).PADDING_BOTTOM, v);
cssAttrSet.addAttribute$O$O($I$(9).PADDING_LEFT, v);
cssAttrSet.addAttribute$O$O($I$(9).PADDING_RIGHT, v);
}}if (elem.isLeaf$()) {
p$1.translateEmbeddedAttributes$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet.apply(this, [htmlAttrSet, cssAttrSet]);
} else {
p$1.translateAttributes$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet.apply(this, [tag, htmlAttrSet, cssAttrSet]);
}if (tag === $I$(30).CAPTION ) {
var v=htmlAttrSet.getAttribute$O($I$(11).ALIGN);
if ((v != null ) && (v.equals$O("top") || v.equals$O("bottom") ) ) {
cssAttrSet.addAttribute$O$O($I$(9).CAPTION_SIDE, v);
cssAttrSet.removeAttribute$O($I$(9).TEXT_ALIGN);
} else {
v=htmlAttrSet.getAttribute$O($I$(11).VALIGN);
if (v != null ) {
cssAttrSet.addAttribute$O$O($I$(9).CAPTION_SIDE, v);
}}}return cssAttrSet;
});

Clazz.newMeth(C$, 'getTableBorder$javax_swing_text_AttributeSet',  function (tableAttr) {
var borderValue=tableAttr.getAttribute$O($I$(11).BORDER);
if (borderValue == "#DEFAULT" || "".equals$O(borderValue) ) {
return 1;
}if (C$.couldBeNumber$S(borderValue)) try {
return Integer.parseInt$S(borderValue);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return 0;
}, 1);

Clazz.newMeth(C$, 'couldBeNumber$S',  function (borderValue) {
var n=borderValue.length$();
return (n > 0 && ".0123456789".indexOf$I(borderValue.charAt$I(n - 1)) >= 0 );
}, 1);

Clazz.newMeth(C$, 'getAllAttributeKeys$',  function () {
var keys=Clazz.array($I$(9), [$I$(9).allAttributes.length]);
System.arraycopy$O$I$O$I$I($I$(9).allAttributes, 0, keys, 0, $I$(9).allAttributes.length);
return keys;
}, 1);

Clazz.newMeth(C$, 'getAttribute$S',  function (name) {
return C$.attributeMap.get$O(name);
}, 1);

Clazz.newMeth(C$, 'getValue$S',  function (name) {
return C$.valueMap.get$O(name);
}, 1);

Clazz.newMeth(C$, 'getURL$java_net_URL$S',  function (base, cssString) {
if (cssString == null ) {
return null;
}if (cssString.startsWith$S("url(") && cssString.endsWith$S(")") ) {
cssString=cssString.substring$I$I(4, cssString.length$() - 1);
}try {
var url=Clazz.new_($I$(31,1).c$$S,[cssString]);
if (url != null ) {
return url;
}} catch (mue) {
if (Clazz.exceptionOf(mue,"java.net.MalformedURLException")){
} else {
throw mue;
}
}
if (base != null ) {
try {
var url=Clazz.new_($I$(31,1).c$$java_net_URL$S,[base, cssString]);
return url;
} catch (muee) {
if (Clazz.exceptionOf(muee,"java.net.MalformedURLException")){
} else {
throw muee;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'colorToHex$java_awt_Color',  function (color) {
var colorstr="#";
var str=Integer.toHexString$I(color.getRed$());
if (str.length$() > 2) str=str.substring$I$I(0, 2);
 else if (str.length$() < 2) colorstr+="0" + str;
 else colorstr+=str;
str=Integer.toHexString$I(color.getGreen$());
if (str.length$() > 2) str=str.substring$I$I(0, 2);
 else if (str.length$() < 2) colorstr+="0" + str;
 else colorstr+=str;
str=Integer.toHexString$I(color.getBlue$());
if (str.length$() > 2) str=str.substring$I$I(0, 2);
 else if (str.length$() < 2) colorstr+="0" + str;
 else colorstr+=str;
return colorstr;
}, 1);

Clazz.newMeth(C$, 'hexToColor$S',  function (value) {
var digits;
var n=value.length$();
if (value.startsWith$S("#")) {
digits=value.substring$I$I(1, Math.min(value.length$(), 7));
} else {
digits=value;
}var hstr="0x" + digits;
var c;
try {
c=$I$(32).decode$S(hstr);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
c=null;
} else {
throw nfe;
}
}
return c;
}, 1);

Clazz.newMeth(C$, 'stringToColor$S',  function (str) {
var color;
if (str == null ) {
return null;
}if (str.length$() == 0) color=$I$(32).black;
 else if (str.startsWith$S("rgb(")) {
color=C$.parseRGB$S(str);
} else if (str.charAt$I(0) == "#") color=C$.hexToColor$S(str);
 else if (str.equalsIgnoreCase$S("Black")) color=C$.hexToColor$S("#000000");
 else if (str.equalsIgnoreCase$S("Silver")) color=C$.hexToColor$S("#C0C0C0");
 else if (str.equalsIgnoreCase$S("Gray")) color=C$.hexToColor$S("#808080");
 else if (str.equalsIgnoreCase$S("White")) color=C$.hexToColor$S("#FFFFFF");
 else if (str.equalsIgnoreCase$S("Maroon")) color=C$.hexToColor$S("#800000");
 else if (str.equalsIgnoreCase$S("Red")) color=C$.hexToColor$S("#FF0000");
 else if (str.equalsIgnoreCase$S("Purple")) color=C$.hexToColor$S("#800080");
 else if (str.equalsIgnoreCase$S("Fuchsia")) color=C$.hexToColor$S("#FF00FF");
 else if (str.equalsIgnoreCase$S("Green")) color=C$.hexToColor$S("#008000");
 else if (str.equalsIgnoreCase$S("Lime")) color=C$.hexToColor$S("#00FF00");
 else if (str.equalsIgnoreCase$S("Olive")) color=C$.hexToColor$S("#808000");
 else if (str.equalsIgnoreCase$S("Yellow")) color=C$.hexToColor$S("#FFFF00");
 else if (str.equalsIgnoreCase$S("Navy")) color=C$.hexToColor$S("#000080");
 else if (str.equalsIgnoreCase$S("Blue")) color=C$.hexToColor$S("#0000FF");
 else if (str.equalsIgnoreCase$S("Teal")) color=C$.hexToColor$S("#008080");
 else if (str.equalsIgnoreCase$S("Aqua")) color=C$.hexToColor$S("#00FFFF");
 else if (str.equalsIgnoreCase$S("Orange")) color=C$.hexToColor$S("#FF8000");
 else color=C$.hexToColor$S(str);
return color;
}, 1);

Clazz.newMeth(C$, 'parseRGB$S',  function (string) {
var index=Clazz.array(Integer.TYPE, [1]);
index[0]=4;
var red=C$.getColorComponent$S$IA(string, index);
var green=C$.getColorComponent$S$IA(string, index);
var blue=C$.getColorComponent$S$IA(string, index);
return Clazz.new_($I$(32,1).c$$I$I$I,[red, green, blue]);
}, 1);

Clazz.newMeth(C$, 'getColorComponent$S$IA',  function (string, index) {
var length=string.length$();
var aChar;
while (index[0] < length && (aChar=string.charAt$I(index[0])) != "-"  && !Character.isDigit$C(aChar)  && aChar != "." ){
++index[0];
}
var start=index[0];
if (start < length && string.charAt$I(index[0]) == "-" ) {
++index[0];
}while (index[0] < length && Character.isDigit$C(string.charAt$I(index[0])) ){
++index[0];
}
if (index[0] < length && string.charAt$I(index[0]) == "." ) {
++index[0];
while (index[0] < length && Character.isDigit$C(string.charAt$I(index[0])) ){
++index[0];
}
}if (start != index[0]) {
try {
var value=Float.parseFloat$S(string.substring$I$I(start, index[0]));
if (index[0] < length && string.charAt$I(index[0]) == "%" ) {
++index[0];
value=value * 255.0 / 100.0;
}return Math.min(255, Math.max(0, (value|0)));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}return 0;
}, 1);

Clazz.newMeth(C$, 'getIndexOfSize$F$IA',  function (pt, sizeMap) {
for (var i=0; i < sizeMap.length; i++) if (pt <= sizeMap[i] ) return i + 1;

return sizeMap.length;
}, 1);

Clazz.newMeth(C$, 'getIndexOfSize$F$javax_swing_text_html_StyleSheet',  function (pt, ss) {
var sizeMap=(ss != null ) ? ss.getSizeMap$() : $I$(4).sizeMapDefault;
return C$.getIndexOfSize$F$IA(pt, sizeMap);
}, 1);

Clazz.newMeth(C$, 'parseStrings$S',  function (value) {
var current;
var last;
var length=(value == null ) ? 0 : value.length$();
var temp=Clazz.new_($I$(33,1).c$$I,[4]);
current=0;
while (current < length){
while (current < length && Character.isWhitespace$C(value.charAt$I(current)) ){
++current;
}
last=current;
while (current < length && !Character.isWhitespace$C(value.charAt$I(current)) ){
++current;
}
if (last != current) {
temp.addElement$O(value.substring$I$I(last, current));
}++current;
}
var retValue=Clazz.array(String, [temp.size$()]);
temp.copyInto$OA(retValue);
return retValue;
}, 1);

Clazz.newMeth(C$, 'getPointSize$I$javax_swing_text_html_StyleSheet',  function (index, ss) {
ss=p$1.getStyleSheet$javax_swing_text_html_StyleSheet.apply(this, [ss]);
var sizeMap=(ss != null ) ? ss.getSizeMap$() : $I$(4).sizeMapDefault;
--index;
if (index < 0) return sizeMap[0];
 else if (index > sizeMap.length - 1) return sizeMap[sizeMap.length - 1];
 else return sizeMap[index];
});

Clazz.newMeth(C$, 'translateEmbeddedAttributes$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet',  function (htmlAttrSet, cssAttrSet) {
var keys=htmlAttrSet.getAttributeNames$();
if (htmlAttrSet.getAttribute$O($I$(1).NameAttribute) === $I$(30).HR ) {
p$1.translateAttributes$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet.apply(this, [$I$(30).HR, htmlAttrSet, cssAttrSet]);
}while (keys.hasMoreElements$()){
var key=keys.nextElement$();
if (Clazz.instanceOf(key, "javax.swing.text.html.HTML.Tag")) {
var tag=key;
var o=htmlAttrSet.getAttribute$O(tag);
if (o != null  && Clazz.instanceOf(o, "javax.swing.text.AttributeSet") ) {
p$1.translateAttributes$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet.apply(this, [tag, o, cssAttrSet]);
}} else if (Clazz.instanceOf(key, "javax.swing.text.html.CSS.Attribute")) {
cssAttrSet.addAttribute$O$O(key, htmlAttrSet.getAttribute$O(key));
}}
}, p$1);

Clazz.newMeth(C$, 'translateAttributes$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet',  function (tag, htmlAttrSet, cssAttrSet) {
var names=htmlAttrSet.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
if (Clazz.instanceOf(name, "javax.swing.text.html.HTML.Attribute")) {
var key=name;
if (key === $I$(11).ALIGN ) {
var htmlAttrValue=htmlAttrSet.getAttribute$O($I$(11).ALIGN);
if (htmlAttrValue != null ) {
var cssAttr=p$1.getCssAlignAttribute$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet.apply(this, [tag, htmlAttrSet]);
if (cssAttr != null ) {
var o=this.getCssValue$javax_swing_text_html_CSS_Attribute$S(cssAttr, htmlAttrValue);
if (o != null ) {
cssAttrSet.addAttribute$O$O(cssAttr, o);
}}}} else {
if (key === $I$(11).SIZE  && !p$1.isHTMLFontTag$javax_swing_text_html_HTML_Tag.apply(this, [tag]) ) {
} else if (tag === $I$(30).TABLE  && key === $I$(11).BORDER  ) {
var borderWidth=C$.getTableBorder$javax_swing_text_AttributeSet(htmlAttrSet);
if (borderWidth > 0) {
p$1.translateAttribute$javax_swing_text_html_HTML_Attribute$S$javax_swing_text_MutableAttributeSet.apply(this, [$I$(11).BORDER, Integer.toString$I(borderWidth), cssAttrSet]);
}} else {
p$1.translateAttribute$javax_swing_text_html_HTML_Attribute$S$javax_swing_text_MutableAttributeSet.apply(this, [key, htmlAttrSet.getAttribute$O(key), cssAttrSet]);
}}} else if (Clazz.instanceOf(name, "javax.swing.text.html.CSS.Attribute")) {
cssAttrSet.addAttribute$O$O(name, htmlAttrSet.getAttribute$O(name));
}}
}, p$1);

Clazz.newMeth(C$, 'translateAttribute$javax_swing_text_html_HTML_Attribute$S$javax_swing_text_MutableAttributeSet',  function (key, htmlAttrValue, cssAttrSet) {
var cssAttrList=p$1.getCssAttribute$javax_swing_text_html_HTML_Attribute.apply(this, [key]);
if (cssAttrList == null  || htmlAttrValue == null  ) {
return;
}for (var cssAttr, $cssAttr = 0, $$cssAttr = cssAttrList; $cssAttr<$$cssAttr.length&&((cssAttr=($$cssAttr[$cssAttr])),1);$cssAttr++) {
var o=this.getCssValue$javax_swing_text_html_CSS_Attribute$S(cssAttr, htmlAttrValue);
if (o != null ) {
cssAttrSet.addAttribute$O$O(cssAttr, o);
}}
}, p$1);

Clazz.newMeth(C$, 'getCssValue$javax_swing_text_html_CSS_Attribute$S',  function (cssAttr, htmlAttrValue) {
var value=this.valueConvertor.get$O(cssAttr);
var o=value.parseHtmlValue$S(htmlAttrValue);
return o;
});

Clazz.newMeth(C$, 'getCssAttribute$javax_swing_text_html_HTML_Attribute',  function (hAttr) {
return C$.htmlAttrToCssAttrMap.get$O(hAttr);
}, p$1);

Clazz.newMeth(C$, 'getCssAlignAttribute$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet',  function (tag, htmlAttrSet) {
return $I$(9).TEXT_ALIGN;
}, p$1);

Clazz.newMeth(C$, 'getHTMLTag$javax_swing_text_AttributeSet',  function (htmlAttrSet) {
var o=htmlAttrSet.getAttribute$O($I$(1).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var tag=o;
return tag;
}return null;
}, p$1);

Clazz.newMeth(C$, 'isHTMLFontTag$javax_swing_text_html_HTML_Tag',  function (tag) {
return (tag != null  && ((tag === $I$(30).FONT ) || (tag === $I$(30).BASEFONT ) ) );
}, p$1);

Clazz.newMeth(C$, 'isFloater$S',  function (alignValue) {
return (alignValue.equals$O("left") || alignValue.equals$O("right") );
}, p$1);

Clazz.newMeth(C$, 'validTextAlignValue$S',  function (alignValue) {
return (p$1.isFloater$S.apply(this, [alignValue]) || alignValue.equals$O("center") );
}, p$1);

Clazz.newMeth(C$, 'calculateTiledRequirements$javax_swing_text_html_CSS_LayoutIterator$javax_swing_SizeRequirements',  function (iter, r) {
var minimum=0;
var maximum=0;
var preferred=0;
var lastMargin=0;
var totalSpacing=0;
var n=iter.getCount$();
for (var i=0; i < n; i++) {
iter.setIndex$I(i);
var margin0=lastMargin;
var margin1=(iter.getLeadingCollapseSpan$()|0);
totalSpacing+=Math.max(margin0, margin1);
(preferred=Long.$add(preferred,((iter.getPreferredSpan$F(0)|0))));
(minimum=Long.$add(minimum,Clazz.toLong(iter.getMinimumSpan$F(0))));
(maximum=Long.$add(maximum,Clazz.toLong(iter.getMaximumSpan$F(0))));
lastMargin=(iter.getTrailingCollapseSpan$()|0);
}
totalSpacing+=lastMargin;
totalSpacing=(totalSpacing+(2 * iter.getBorderWidth$())|0);
(minimum=Long.$add(minimum,(totalSpacing)));
(preferred=Long.$add(preferred,(totalSpacing)));
(maximum=Long.$add(maximum,(totalSpacing)));
if (r == null ) {
r=Clazz.new_($I$(34,1));
}r.minimum=(Long.$gt(minimum,2147483647 )) ? 2147483647 : Long.$ival(minimum);
r.preferred=(Long.$gt(preferred,2147483647 )) ? 2147483647 : Long.$ival(preferred);
r.maximum=(Long.$gt(maximum,2147483647 )) ? 2147483647 : Long.$ival(maximum);
return r;
}, 1);

Clazz.newMeth(C$, 'calculateTiledLayout$javax_swing_text_html_CSS_LayoutIterator$I',  function (iter, targetSpan) {
var preferred=0;
var currentPreferred;
var lastMargin=0;
var totalSpacing=0;
var n=iter.getCount$();
var adjustmentWeightsCount=3;
var gain=Clazz.array(Long.TYPE, [adjustmentWeightsCount]);
var loss=Clazz.array(Long.TYPE, [adjustmentWeightsCount]);
for (var i=0; i < adjustmentWeightsCount; i++) {
gain[i]=loss[i]=0;
}
for (var i=0; i < n; i++) {
iter.setIndex$I(i);
var margin0=lastMargin;
var margin1=(iter.getLeadingCollapseSpan$()|0);
iter.setOffset$I(Math.max(margin0, margin1));
totalSpacing+=iter.getOffset$();
currentPreferred=Clazz.toLong(iter.getPreferredSpan$F(targetSpan));
iter.setSpan$I(Long.$ival(currentPreferred));
(preferred=Long.$add(preferred,(currentPreferred)));
(gain[$k$=iter.getAdjustmentWeight$()]=Long.$add(gain[$k$],(Long.$sub(Clazz.toLong(iter.getMaximumSpan$F(targetSpan)),currentPreferred))));
(loss[$k$=iter.getAdjustmentWeight$()]=Long.$add(loss[$k$],(Long.$sub(currentPreferred,Clazz.toLong(iter.getMinimumSpan$F(targetSpan))))));
lastMargin=(iter.getTrailingCollapseSpan$()|0);
}
totalSpacing+=lastMargin;
totalSpacing=(totalSpacing+(2 * iter.getBorderWidth$())|0);
for (var i=1; i < adjustmentWeightsCount; i++) {
(gain[i]=Long.$add(gain[i],(gain[i - 1])));
(loss[i]=Long.$add(loss[i],(loss[i - 1])));
}
var allocated=targetSpan - totalSpacing;
var desiredAdjustment=Long.$sub(allocated,preferred);
var adjustmentsArray=(Long.$gt(desiredAdjustment,0 )) ? gain : loss;
desiredAdjustment=Math.abs$J(desiredAdjustment);
var adjustmentLevel=0;
for (; adjustmentLevel <= 2; adjustmentLevel++) {
if (Long.$ge(adjustmentsArray[adjustmentLevel],desiredAdjustment )) {
break;
}}
var adjustmentFactor=0.0;
if (adjustmentLevel <= 2) {
(desiredAdjustment=Long.$sub(desiredAdjustment,((adjustmentLevel > 0) ? adjustmentsArray[adjustmentLevel - 1] : 0)));
if (Long.$ne(desiredAdjustment,0 )) {
var maximumAdjustment=Long.$fval(Long.$sub(adjustmentsArray[adjustmentLevel],((adjustmentLevel > 0) ? adjustmentsArray[adjustmentLevel - 1] : 0)));
adjustmentFactor=desiredAdjustment / maximumAdjustment;
}}var totalOffset=(iter.getBorderWidth$()|0);
for (var i=0; i < n; i++) {
iter.setIndex$I(i);
iter.setOffset$I(iter.getOffset$() + totalOffset);
if (iter.getAdjustmentWeight$() < adjustmentLevel) {
iter.setSpan$I((((Long.$gt(allocated,preferred )) ? Math.floor(iter.getMaximumSpan$F(targetSpan)) : Math.ceil(iter.getMinimumSpan$F(targetSpan)))|0));
} else if (iter.getAdjustmentWeight$() == adjustmentLevel) {
var availableSpan=(Long.$gt(allocated,preferred )) ? (iter.getMaximumSpan$F(targetSpan)|0) - iter.getSpan$() : iter.getSpan$() - (iter.getMinimumSpan$F(targetSpan)|0);
var adj=(Math.floor(adjustmentFactor * availableSpan)|0);
iter.setSpan$I(iter.getSpan$() + ((Long.$gt(allocated,preferred )) ? adj : -adj));
}totalOffset=Long.$ival(Math.min$J$J(Long.$add(iter.getOffset$(),iter.getSpan$()), 2147483647));
}
var roundError=targetSpan - totalOffset - (iter.getTrailingCollapseSpan$()|0) - (iter.getBorderWidth$()|0) ;
var adj=(roundError > 0) ? 1 : -1;
roundError*=adj;
var canAdjust=true;
while (roundError > 0 && canAdjust ){
canAdjust=false;
var offsetAdjust=0;
for (var i=0; i < n; i++) {
iter.setIndex$I(i);
iter.setOffset$I(iter.getOffset$() + offsetAdjust);
var curSpan=iter.getSpan$();
if (roundError > 0) {
var boundGap=(adj > 0) ? (Math.floor(iter.getMaximumSpan$F(targetSpan))|0) - curSpan : curSpan - (Math.ceil(iter.getMinimumSpan$F(targetSpan))|0);
if (boundGap >= 1) {
canAdjust=true;
iter.setSpan$I(curSpan + adj);
offsetAdjust+=adj;
--roundError;
}}}
}
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
var keys=this.valueConvertor.keys$();
s.writeInt$I(this.valueConvertor.size$());
if (keys != null ) {
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var value=this.valueConvertor.get$O(key);
if (!(Clazz.instanceOf(key, "java.io.Serializable")) && (key=$I$(12).getStaticAttributeKey$O(key)) == null  ) {
key=null;
value=null;
} else if (!(Clazz.instanceOf(value, "java.io.Serializable")) && (value=$I$(12).getStaticAttributeKey$O(value)) == null  ) {
key=null;
value=null;
}s.writeObject$O(key);
s.writeObject$O(value);
}
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var numValues=s.readInt$();
this.valueConvertor=Clazz.new_([Math.max(1, numValues)],$I$(8,1).c$$I);
while (numValues-- > 0){
var key=s.readObject$();
var value=s.readObject$();
var staticKey=$I$(12).getStaticAttribute$O(key);
if (staticKey != null ) {
key=staticKey;
}var staticValue=$I$(12).getStaticAttribute$O(value);
if (staticValue != null ) {
value=staticValue;
}if (key != null  && value != null  ) {
this.valueConvertor.put$O$O(key, value);
}}
}, p$1);

Clazz.newMeth(C$, 'getStyleSheet$javax_swing_text_html_StyleSheet',  function (ss) {
if (ss != null ) {
this.styleSheet=ss;
}return this.styleSheet;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.attributeMap=Clazz.new_($I$(8,1));
C$.valueMap=Clazz.new_($I$(8,1));
C$.htmlAttrToCssAttrMap=Clazz.new_($I$(8,1).c$$I,[20]);
C$.styleConstantToCssMap=Clazz.new_($I$(8,1).c$$I,[17]);
C$.htmlValueToCssValueMap=Clazz.new_($I$(8,1).c$$I,[8]);
C$.cssValueToInternalValueMap=Clazz.new_($I$(8,1).c$$I,[13]);
{
for (var i=0; i < $I$(9).allAttributes.length; i++) {
C$.attributeMap.put$O$O($I$(9).allAttributes[i].toString(), $I$(9).allAttributes[i]);
}
for (var i=0; i < $I$(5).allValues.length; i++) {
C$.valueMap.put$O$O($I$(5).allValues[i].toString(), $I$(5).allValues[i]);
}
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).COLOR, Clazz.array($I$(9), -1, [$I$(9).COLOR]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).TEXT, Clazz.array($I$(9), -1, [$I$(9).COLOR]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).CLEAR, Clazz.array($I$(9), -1, [$I$(9).CLEAR]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).BACKGROUND, Clazz.array($I$(9), -1, [$I$(9).BACKGROUND_IMAGE]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).BGCOLOR, Clazz.array($I$(9), -1, [$I$(9).BACKGROUND_COLOR]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).WIDTH, Clazz.array($I$(9), -1, [$I$(9).WIDTH]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).HEIGHT, Clazz.array($I$(9), -1, [$I$(9).HEIGHT]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).BORDER, Clazz.array($I$(9), -1, [$I$(9).BORDER_TOP_WIDTH, $I$(9).BORDER_RIGHT_WIDTH, $I$(9).BORDER_BOTTOM_WIDTH, $I$(9).BORDER_LEFT_WIDTH]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).CELLPADDING, Clazz.array($I$(9), -1, [$I$(9).PADDING]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).CELLSPACING, Clazz.array($I$(9), -1, [$I$(9).BORDER_SPACING]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).MARGINWIDTH, Clazz.array($I$(9), -1, [$I$(9).MARGIN_LEFT, $I$(9).MARGIN_RIGHT]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).MARGINHEIGHT, Clazz.array($I$(9), -1, [$I$(9).MARGIN_TOP, $I$(9).MARGIN_BOTTOM]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).HSPACE, Clazz.array($I$(9), -1, [$I$(9).PADDING_LEFT, $I$(9).PADDING_RIGHT]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).VSPACE, Clazz.array($I$(9), -1, [$I$(9).PADDING_BOTTOM, $I$(9).PADDING_TOP]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).FACE, Clazz.array($I$(9), -1, [$I$(9).FONT_FAMILY]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).SIZE, Clazz.array($I$(9), -1, [$I$(9).FONT_SIZE]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).VALIGN, Clazz.array($I$(9), -1, [$I$(9).VERTICAL_ALIGN]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).ALIGN, Clazz.array($I$(9), -1, [$I$(9).VERTICAL_ALIGN, $I$(9).TEXT_ALIGN, $I$(9).FLOAT]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).TYPE, Clazz.array($I$(9), -1, [$I$(9).LIST_STYLE_TYPE]));
C$.htmlAttrToCssAttrMap.put$O$O($I$(11).NOWRAP, Clazz.array($I$(9), -1, [$I$(9).WHITE_SPACE]));
C$.styleConstantToCssMap.put$O$O($I$(1).FontFamily, $I$(9).FONT_FAMILY);
C$.styleConstantToCssMap.put$O$O($I$(1).FontSize, $I$(9).FONT_SIZE);
C$.styleConstantToCssMap.put$O$O($I$(1).Bold, $I$(9).FONT_WEIGHT);
C$.styleConstantToCssMap.put$O$O($I$(1).Italic, $I$(9).FONT_STYLE);
C$.styleConstantToCssMap.put$O$O($I$(1).Underline, $I$(9).TEXT_DECORATION);
C$.styleConstantToCssMap.put$O$O($I$(1).StrikeThrough, $I$(9).TEXT_DECORATION);
C$.styleConstantToCssMap.put$O$O($I$(1).Superscript, $I$(9).VERTICAL_ALIGN);
C$.styleConstantToCssMap.put$O$O($I$(1).Subscript, $I$(9).VERTICAL_ALIGN);
C$.styleConstantToCssMap.put$O$O($I$(1).Foreground, $I$(9).COLOR);
C$.styleConstantToCssMap.put$O$O($I$(1).Background, $I$(9).BACKGROUND_COLOR);
C$.styleConstantToCssMap.put$O$O($I$(1).FirstLineIndent, $I$(9).TEXT_INDENT);
C$.styleConstantToCssMap.put$O$O($I$(1).LeftIndent, $I$(9).MARGIN_LEFT);
C$.styleConstantToCssMap.put$O$O($I$(1).RightIndent, $I$(9).MARGIN_RIGHT);
C$.styleConstantToCssMap.put$O$O($I$(1).SpaceAbove, $I$(9).MARGIN_TOP);
C$.styleConstantToCssMap.put$O$O($I$(1).SpaceBelow, $I$(9).MARGIN_BOTTOM);
C$.styleConstantToCssMap.put$O$O($I$(1).Alignment, $I$(9).TEXT_ALIGN);
C$.htmlValueToCssValueMap.put$O$O("disc", $I$(5).DISC);
C$.htmlValueToCssValueMap.put$O$O("square", $I$(5).SQUARE);
C$.htmlValueToCssValueMap.put$O$O("circle", $I$(5).CIRCLE);
C$.htmlValueToCssValueMap.put$O$O("1", $I$(5).DECIMAL);
C$.htmlValueToCssValueMap.put$O$O("a", $I$(5).LOWER_ALPHA);
C$.htmlValueToCssValueMap.put$O$O("A", $I$(5).UPPER_ALPHA);
C$.htmlValueToCssValueMap.put$O$O("i", $I$(5).LOWER_ROMAN);
C$.htmlValueToCssValueMap.put$O$O("I", $I$(5).UPPER_ROMAN);
C$.cssValueToInternalValueMap.put$O$O("none", $I$(5).NONE);
C$.cssValueToInternalValueMap.put$O$O("disc", $I$(5).DISC);
C$.cssValueToInternalValueMap.put$O$O("square", $I$(5).SQUARE);
C$.cssValueToInternalValueMap.put$O$O("circle", $I$(5).CIRCLE);
C$.cssValueToInternalValueMap.put$O$O("decimal", $I$(5).DECIMAL);
C$.cssValueToInternalValueMap.put$O$O("lower-roman", $I$(5).LOWER_ROMAN);
C$.cssValueToInternalValueMap.put$O$O("upper-roman", $I$(5).UPPER_ROMAN);
C$.cssValueToInternalValueMap.put$O$O("lower-alpha", $I$(5).LOWER_ALPHA);
C$.cssValueToInternalValueMap.put$O$O("upper-alpha", $I$(5).UPPER_ALPHA);
C$.cssValueToInternalValueMap.put$O$O("repeat", $I$(5).BACKGROUND_REPEAT);
C$.cssValueToInternalValueMap.put$O$O("no-repeat", $I$(5).BACKGROUND_NO_REPEAT);
C$.cssValueToInternalValueMap.put$O$O("repeat-x", $I$(5).BACKGROUND_REPEAT_X);
C$.cssValueToInternalValueMap.put$O$O("repeat-y", $I$(5).BACKGROUND_REPEAT_Y);
C$.cssValueToInternalValueMap.put$O$O("scroll", $I$(5).BACKGROUND_SCROLL);
C$.cssValueToInternalValueMap.put$O$O("fixed", $I$(5).BACKGROUND_FIXED);
var keys=$I$(9).allAttributes;
try {
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
$I$(12).registerStaticAttributeKey$O(key);
}
} catch (e) {
e.printStackTrace$();
}
keys=$I$(5).allValues;
try {
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
$I$(12).registerStaticAttributeKey$O(key);
}
} catch (e) {
e.printStackTrace$();
}
};
C$.baseFontSizeIndex=3;
};
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "Attribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inherited'],'S',['name','defaultValue']]
,['O',['BACKGROUND','javax.swing.text.html.CSS.Attribute','+BACKGROUND_ATTACHMENT','+BACKGROUND_COLOR','+BACKGROUND_IMAGE','+BACKGROUND_POSITION','+BACKGROUND_REPEAT','+BORDER','+BORDER_BOTTOM','+BORDER_BOTTOM_COLOR','+BORDER_BOTTOM_STYLE','+BORDER_BOTTOM_WIDTH','+BORDER_COLOR','+BORDER_LEFT','+BORDER_LEFT_COLOR','+BORDER_LEFT_STYLE','+BORDER_LEFT_WIDTH','+BORDER_RIGHT','+BORDER_RIGHT_COLOR','+BORDER_RIGHT_STYLE','+BORDER_RIGHT_WIDTH','+BORDER_STYLE','+BORDER_TOP','+BORDER_TOP_COLOR','+BORDER_TOP_STYLE','+BORDER_TOP_WIDTH','+BORDER_WIDTH','+CLEAR','+COLOR','+DISPLAY','+FLOAT','+FONT','+FONT_FAMILY','+FONT_SIZE','+FONT_STYLE','+FONT_VARIANT','+FONT_WEIGHT','+HEIGHT','+LETTER_SPACING','+LINE_HEIGHT','+LIST_STYLE','+LIST_STYLE_IMAGE','+LIST_STYLE_POSITION','+LIST_STYLE_TYPE','+MARGIN','+MARGIN_BOTTOM','+MARGIN_LEFT','+MARGIN_RIGHT','+MARGIN_LEFT_LTR','+MARGIN_LEFT_RTL','+MARGIN_RIGHT_LTR','+MARGIN_RIGHT_RTL','+MARGIN_TOP','+PADDING','+PADDING_BOTTOM','+PADDING_LEFT','+PADDING_RIGHT','+PADDING_TOP','+TEXT_ALIGN','+TEXT_DECORATION','+TEXT_INDENT','+TEXT_TRANSFORM','+VERTICAL_ALIGN','+WORD_SPACING','+WHITE_SPACE','+WIDTH','+BORDER_SPACING','+CAPTION_SIDE','allAttributes','javax.swing.text.html.CSS.Attribute[]','+ALL_MARGINS','+ALL_PADDING','+ALL_BORDER_WIDTHS','+ALL_BORDER_STYLES','+ALL_BORDER_COLORS']]]

Clazz.newMeth(C$, 'c$$S$S$Z',  function (name, defaultValue, inherited) {
;C$.$init$.apply(this);
this.name=name;
this.defaultValue=defaultValue;
this.inherited=inherited;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDefaultValue$',  function () {
return this.defaultValue;
});

Clazz.newMeth(C$, 'isInherited$',  function () {
return this.inherited;
});

C$.$static$=function(){C$.$static$=0;
C$.BACKGROUND=Clazz.new_(C$.c$$S$S$Z,["background", null, false]);
C$.BACKGROUND_ATTACHMENT=Clazz.new_(C$.c$$S$S$Z,["background-attachment", "scroll", false]);
C$.BACKGROUND_COLOR=Clazz.new_(C$.c$$S$S$Z,["background-color", "transparent", false]);
C$.BACKGROUND_IMAGE=Clazz.new_(C$.c$$S$S$Z,["background-image", "none", false]);
C$.BACKGROUND_POSITION=Clazz.new_(C$.c$$S$S$Z,["background-position", null, false]);
C$.BACKGROUND_REPEAT=Clazz.new_(C$.c$$S$S$Z,["background-repeat", "repeat", false]);
C$.BORDER=Clazz.new_(C$.c$$S$S$Z,["border", null, false]);
C$.BORDER_BOTTOM=Clazz.new_(C$.c$$S$S$Z,["border-bottom", null, false]);
C$.BORDER_BOTTOM_COLOR=Clazz.new_(C$.c$$S$S$Z,["border-bottom-color", null, false]);
C$.BORDER_BOTTOM_STYLE=Clazz.new_(C$.c$$S$S$Z,["border-bottom-style", "none", false]);
C$.BORDER_BOTTOM_WIDTH=Clazz.new_(C$.c$$S$S$Z,["border-bottom-width", "medium", false]);
C$.BORDER_COLOR=Clazz.new_(C$.c$$S$S$Z,["border-color", null, false]);
C$.BORDER_LEFT=Clazz.new_(C$.c$$S$S$Z,["border-left", null, false]);
C$.BORDER_LEFT_COLOR=Clazz.new_(C$.c$$S$S$Z,["border-left-color", null, false]);
C$.BORDER_LEFT_STYLE=Clazz.new_(C$.c$$S$S$Z,["border-left-style", "none", false]);
C$.BORDER_LEFT_WIDTH=Clazz.new_(C$.c$$S$S$Z,["border-left-width", "medium", false]);
C$.BORDER_RIGHT=Clazz.new_(C$.c$$S$S$Z,["border-right", null, false]);
C$.BORDER_RIGHT_COLOR=Clazz.new_(C$.c$$S$S$Z,["border-right-color", null, false]);
C$.BORDER_RIGHT_STYLE=Clazz.new_(C$.c$$S$S$Z,["border-right-style", "none", false]);
C$.BORDER_RIGHT_WIDTH=Clazz.new_(C$.c$$S$S$Z,["border-right-width", "medium", false]);
C$.BORDER_STYLE=Clazz.new_(C$.c$$S$S$Z,["border-style", "none", false]);
C$.BORDER_TOP=Clazz.new_(C$.c$$S$S$Z,["border-top", null, false]);
C$.BORDER_TOP_COLOR=Clazz.new_(C$.c$$S$S$Z,["border-top-color", null, false]);
C$.BORDER_TOP_STYLE=Clazz.new_(C$.c$$S$S$Z,["border-top-style", "none", false]);
C$.BORDER_TOP_WIDTH=Clazz.new_(C$.c$$S$S$Z,["border-top-width", "medium", false]);
C$.BORDER_WIDTH=Clazz.new_(C$.c$$S$S$Z,["border-width", "medium", false]);
C$.CLEAR=Clazz.new_(C$.c$$S$S$Z,["clear", "none", false]);
C$.COLOR=Clazz.new_(C$.c$$S$S$Z,["color", "black", true]);
C$.DISPLAY=Clazz.new_(C$.c$$S$S$Z,["display", "block", false]);
C$.FLOAT=Clazz.new_(C$.c$$S$S$Z,["float", "none", false]);
C$.FONT=Clazz.new_(C$.c$$S$S$Z,["font", null, true]);
C$.FONT_FAMILY=Clazz.new_(C$.c$$S$S$Z,["font-family", null, true]);
C$.FONT_SIZE=Clazz.new_(C$.c$$S$S$Z,["font-size", "medium", true]);
C$.FONT_STYLE=Clazz.new_(C$.c$$S$S$Z,["font-style", "normal", true]);
C$.FONT_VARIANT=Clazz.new_(C$.c$$S$S$Z,["font-variant", "normal", true]);
C$.FONT_WEIGHT=Clazz.new_(C$.c$$S$S$Z,["font-weight", "normal", true]);
C$.HEIGHT=Clazz.new_(C$.c$$S$S$Z,["height", "auto", false]);
C$.LETTER_SPACING=Clazz.new_(C$.c$$S$S$Z,["letter-spacing", "normal", true]);
C$.LINE_HEIGHT=Clazz.new_(C$.c$$S$S$Z,["line-height", "normal", true]);
C$.LIST_STYLE=Clazz.new_(C$.c$$S$S$Z,["list-style", null, true]);
C$.LIST_STYLE_IMAGE=Clazz.new_(C$.c$$S$S$Z,["list-style-image", "none", true]);
C$.LIST_STYLE_POSITION=Clazz.new_(C$.c$$S$S$Z,["list-style-position", "outside", true]);
C$.LIST_STYLE_TYPE=Clazz.new_(C$.c$$S$S$Z,["list-style-type", "disc", true]);
C$.MARGIN=Clazz.new_(C$.c$$S$S$Z,["margin", null, false]);
C$.MARGIN_BOTTOM=Clazz.new_(C$.c$$S$S$Z,["margin-bottom", "0", false]);
C$.MARGIN_LEFT=Clazz.new_(C$.c$$S$S$Z,["margin-left", "0", false]);
C$.MARGIN_RIGHT=Clazz.new_(C$.c$$S$S$Z,["margin-right", "0", false]);
C$.MARGIN_LEFT_LTR=Clazz.new_(C$.c$$S$S$Z,["margin-left-ltr", Integer.toString$I(-2147483648), false]);
C$.MARGIN_LEFT_RTL=Clazz.new_(C$.c$$S$S$Z,["margin-left-rtl", Integer.toString$I(-2147483648), false]);
C$.MARGIN_RIGHT_LTR=Clazz.new_(C$.c$$S$S$Z,["margin-right-ltr", Integer.toString$I(-2147483648), false]);
C$.MARGIN_RIGHT_RTL=Clazz.new_(C$.c$$S$S$Z,["margin-right-rtl", Integer.toString$I(-2147483648), false]);
C$.MARGIN_TOP=Clazz.new_(C$.c$$S$S$Z,["margin-top", "0", false]);
C$.PADDING=Clazz.new_(C$.c$$S$S$Z,["padding", null, false]);
C$.PADDING_BOTTOM=Clazz.new_(C$.c$$S$S$Z,["padding-bottom", "0", false]);
C$.PADDING_LEFT=Clazz.new_(C$.c$$S$S$Z,["padding-left", "0", false]);
C$.PADDING_RIGHT=Clazz.new_(C$.c$$S$S$Z,["padding-right", "0", false]);
C$.PADDING_TOP=Clazz.new_(C$.c$$S$S$Z,["padding-top", "0", false]);
C$.TEXT_ALIGN=Clazz.new_(C$.c$$S$S$Z,["text-align", null, true]);
C$.TEXT_DECORATION=Clazz.new_(C$.c$$S$S$Z,["text-decoration", "none", true]);
C$.TEXT_INDENT=Clazz.new_(C$.c$$S$S$Z,["text-indent", "0", true]);
C$.TEXT_TRANSFORM=Clazz.new_(C$.c$$S$S$Z,["text-transform", "none", true]);
C$.VERTICAL_ALIGN=Clazz.new_(C$.c$$S$S$Z,["vertical-align", "baseline", false]);
C$.WORD_SPACING=Clazz.new_(C$.c$$S$S$Z,["word-spacing", "normal", true]);
C$.WHITE_SPACE=Clazz.new_(C$.c$$S$S$Z,["white-space", "normal", true]);
C$.WIDTH=Clazz.new_(C$.c$$S$S$Z,["width", "auto", false]);
C$.BORDER_SPACING=Clazz.new_(C$.c$$S$S$Z,["border-spacing", "0", true]);
C$.CAPTION_SIDE=Clazz.new_(C$.c$$S$S$Z,["caption-side", "left", true]);
C$.allAttributes=Clazz.array(C$, -1, [C$.BACKGROUND, C$.BACKGROUND_ATTACHMENT, C$.BACKGROUND_COLOR, C$.BACKGROUND_IMAGE, C$.BACKGROUND_POSITION, C$.BACKGROUND_REPEAT, C$.BORDER, C$.BORDER_BOTTOM, C$.BORDER_BOTTOM_WIDTH, C$.BORDER_COLOR, C$.BORDER_LEFT, C$.BORDER_LEFT_WIDTH, C$.BORDER_RIGHT, C$.BORDER_RIGHT_WIDTH, C$.BORDER_STYLE, C$.BORDER_TOP, C$.BORDER_TOP_WIDTH, C$.BORDER_WIDTH, C$.BORDER_TOP_STYLE, C$.BORDER_RIGHT_STYLE, C$.BORDER_BOTTOM_STYLE, C$.BORDER_LEFT_STYLE, C$.BORDER_TOP_COLOR, C$.BORDER_RIGHT_COLOR, C$.BORDER_BOTTOM_COLOR, C$.BORDER_LEFT_COLOR, C$.CLEAR, C$.COLOR, C$.DISPLAY, C$.FLOAT, C$.FONT, C$.FONT_FAMILY, C$.FONT_SIZE, C$.FONT_STYLE, C$.FONT_VARIANT, C$.FONT_WEIGHT, C$.HEIGHT, C$.LETTER_SPACING, C$.LINE_HEIGHT, C$.LIST_STYLE, C$.LIST_STYLE_IMAGE, C$.LIST_STYLE_POSITION, C$.LIST_STYLE_TYPE, C$.MARGIN, C$.MARGIN_BOTTOM, C$.MARGIN_LEFT, C$.MARGIN_RIGHT, C$.MARGIN_TOP, C$.PADDING, C$.PADDING_BOTTOM, C$.PADDING_LEFT, C$.PADDING_RIGHT, C$.PADDING_TOP, C$.TEXT_ALIGN, C$.TEXT_DECORATION, C$.TEXT_INDENT, C$.TEXT_TRANSFORM, C$.VERTICAL_ALIGN, C$.WORD_SPACING, C$.WHITE_SPACE, C$.WIDTH, C$.BORDER_SPACING, C$.CAPTION_SIDE, C$.MARGIN_LEFT_LTR, C$.MARGIN_LEFT_RTL, C$.MARGIN_RIGHT_LTR, C$.MARGIN_RIGHT_RTL]);
C$.ALL_MARGINS=Clazz.array(C$, -1, [C$.MARGIN_TOP, C$.MARGIN_RIGHT, C$.MARGIN_BOTTOM, C$.MARGIN_LEFT]);
C$.ALL_PADDING=Clazz.array(C$, -1, [C$.PADDING_TOP, C$.PADDING_RIGHT, C$.PADDING_BOTTOM, C$.PADDING_LEFT]);
C$.ALL_BORDER_WIDTHS=Clazz.array(C$, -1, [C$.BORDER_TOP_WIDTH, C$.BORDER_RIGHT_WIDTH, C$.BORDER_BOTTOM_WIDTH, C$.BORDER_LEFT_WIDTH]);
C$.ALL_BORDER_STYLES=Clazz.array(C$, -1, [C$.BORDER_TOP_STYLE, C$.BORDER_RIGHT_STYLE, C$.BORDER_BOTTOM_STYLE, C$.BORDER_LEFT_STYLE]);
C$.ALL_BORDER_COLORS=Clazz.array(C$, -1, [C$.BORDER_TOP_COLOR, C$.BORDER_RIGHT_COLOR, C$.BORDER_BOTTOM_COLOR, C$.BORDER_LEFT_COLOR]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "Value", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['INHERITED','javax.swing.text.html.CSS.Value','+NONE','+HIDDEN','+DOTTED','+DASHED','+SOLID','+DOUBLE','+GROOVE','+RIDGE','+INSET','+OUTSET','+DISC','+CIRCLE','+SQUARE','+DECIMAL','+LOWER_ROMAN','+UPPER_ROMAN','+LOWER_ALPHA','+UPPER_ALPHA','+BACKGROUND_NO_REPEAT','+BACKGROUND_REPEAT','+BACKGROUND_REPEAT_X','+BACKGROUND_REPEAT_Y','+BACKGROUND_SCROLL','+BACKGROUND_FIXED','allValues','javax.swing.text.html.CSS.Value[]']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.INHERITED=Clazz.new_(C$.c$$S,["inherited"]);
C$.NONE=Clazz.new_(C$.c$$S,["none"]);
C$.HIDDEN=Clazz.new_(C$.c$$S,["hidden"]);
C$.DOTTED=Clazz.new_(C$.c$$S,["dotted"]);
C$.DASHED=Clazz.new_(C$.c$$S,["dashed"]);
C$.SOLID=Clazz.new_(C$.c$$S,["solid"]);
C$.DOUBLE=Clazz.new_(C$.c$$S,["double"]);
C$.GROOVE=Clazz.new_(C$.c$$S,["groove"]);
C$.RIDGE=Clazz.new_(C$.c$$S,["ridge"]);
C$.INSET=Clazz.new_(C$.c$$S,["inset"]);
C$.OUTSET=Clazz.new_(C$.c$$S,["outset"]);
C$.DISC=Clazz.new_(C$.c$$S,["disc"]);
C$.CIRCLE=Clazz.new_(C$.c$$S,["circle"]);
C$.SQUARE=Clazz.new_(C$.c$$S,["square"]);
C$.DECIMAL=Clazz.new_(C$.c$$S,["decimal"]);
C$.LOWER_ROMAN=Clazz.new_(C$.c$$S,["lower-roman"]);
C$.UPPER_ROMAN=Clazz.new_(C$.c$$S,["upper-roman"]);
C$.LOWER_ALPHA=Clazz.new_(C$.c$$S,["lower-alpha"]);
C$.UPPER_ALPHA=Clazz.new_(C$.c$$S,["upper-alpha"]);
C$.BACKGROUND_NO_REPEAT=Clazz.new_(C$.c$$S,["no-repeat"]);
C$.BACKGROUND_REPEAT=Clazz.new_(C$.c$$S,["repeat"]);
C$.BACKGROUND_REPEAT_X=Clazz.new_(C$.c$$S,["repeat-x"]);
C$.BACKGROUND_REPEAT_Y=Clazz.new_(C$.c$$S,["repeat-y"]);
C$.BACKGROUND_SCROLL=Clazz.new_(C$.c$$S,["scroll"]);
C$.BACKGROUND_FIXED=Clazz.new_(C$.c$$S,["fixed"]);
C$.allValues=Clazz.array(C$, -1, [C$.INHERITED, C$.NONE, C$.DOTTED, C$.DASHED, C$.SOLID, C$.DOUBLE, C$.GROOVE, C$.RIDGE, C$.INSET, C$.OUTSET, C$.DISC, C$.CIRCLE, C$.SQUARE, C$.DECIMAL, C$.LOWER_ROMAN, C$.UPPER_ROMAN, C$.LOWER_ALPHA, C$.UPPER_ALPHA, C$.BACKGROUND_NO_REPEAT, C$.BACKGROUND_REPEAT, C$.BACKGROUND_REPEAT_X, C$.BACKGROUND_REPEAT_Y, C$.BACKGROUND_FIXED, C$.BACKGROUND_FIXED]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "CssValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['svalue']]]

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
return value;
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
return this.parseCssValue$S(value);
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
return null;
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.svalue;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "StringValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var sv=Clazz.new_(C$);
sv.svalue=value;
return sv;
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
if (key === $I$(1).Italic ) {
if (value.equals$O(Boolean.TRUE)) {
return this.parseCssValue$S("italic");
}return this.parseCssValue$S("");
} else if (key === $I$(1).Underline ) {
if (value.equals$O(Boolean.TRUE)) {
return this.parseCssValue$S("underline");
}return this.parseCssValue$S("");
} else if (key === $I$(1).Alignment ) {
var align=(value).intValue$();
var ta;
switch (align) {
case 0:
ta="left";
break;
case 2:
ta="right";
break;
case 1:
ta="center";
break;
case 3:
ta="justify";
break;
default:
ta="left";
}
return this.parseCssValue$S(ta);
} else if (key === $I$(1).StrikeThrough ) {
if (value.equals$O(Boolean.TRUE)) {
return this.parseCssValue$S("line-through");
}return this.parseCssValue$S("");
} else if (key === $I$(1).Superscript ) {
if (value.equals$O(Boolean.TRUE)) {
return this.parseCssValue$S("super");
}return this.parseCssValue$S("");
} else if (key === $I$(1).Subscript ) {
if (value.equals$O(Boolean.TRUE)) {
return this.parseCssValue$S("sub");
}return this.parseCssValue$S("");
}return null;
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
if (key === $I$(1).Italic ) {
if (this.svalue.indexOf$S("italic") >= 0) {
return Boolean.TRUE;
}return Boolean.FALSE;
} else if (key === $I$(1).Underline ) {
if (this.svalue.indexOf$S("underline") >= 0) {
return Boolean.TRUE;
}return Boolean.FALSE;
} else if (key === $I$(1).Alignment ) {
if (this.svalue.equals$O("right")) {
return  new Integer(2);
} else if (this.svalue.equals$O("center")) {
return  new Integer(1);
} else if (this.svalue.equals$O("justify")) {
return  new Integer(3);
}return  new Integer(0);
} else if (key === $I$(1).StrikeThrough ) {
if (this.svalue.indexOf$S("line-through") >= 0) {
return Boolean.TRUE;
}return Boolean.FALSE;
} else if (key === $I$(1).Superscript ) {
if (this.svalue.indexOf$S("super") >= 0) {
return Boolean.TRUE;
}return Boolean.FALSE;
} else if (key === $I$(1).Subscript ) {
if (this.svalue.indexOf$S("sub") >= 0) {
return Boolean.TRUE;
}return Boolean.FALSE;
}return null;
});

Clazz.newMeth(C$, 'isItalic$',  function () {
return (this.svalue.indexOf$S("italic") != -1);
});

Clazz.newMeth(C$, 'isStrike$',  function () {
return (this.svalue.indexOf$S("line-through") != -1);
});

Clazz.newMeth(C$, 'isUnderline$',  function () {
return (this.svalue.indexOf$S("underline") != -1);
});

Clazz.newMeth(C$, 'isSub$',  function () {
return (this.svalue.indexOf$S("sub") != -1);
});

Clazz.newMeth(C$, 'isSup$',  function () {
return (this.svalue.indexOf$S("sup") != -1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "FontSize", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['index'],'F',['value'],'O',['lu','javax.swing.text.html.CSS.LengthUnit']]]

Clazz.newMeth(C$, 'getValue$javax_swing_text_AttributeSet$javax_swing_text_html_StyleSheet',  function (a, ss) {
ss=p$1.getStyleSheet$javax_swing_text_html_StyleSheet.apply(this.b$['javax.swing.text.html.CSS'], [ss]);
if (this.index) {
return Math.round(this.b$['javax.swing.text.html.CSS'].getPointSize$I$javax_swing_text_html_StyleSheet.apply(this.b$['javax.swing.text.html.CSS'], [(this.value|0), ss]));
} else if (this.lu == null ) {
return Math.round(this.value);
} else {
if (this.lu.type == 0) {
var isW3CLengthUnits=(ss == null ) ? false : ss.isW3CLengthUnits$();
return Math.round(this.lu.getValue$Z(isW3CLengthUnits));
}if (a != null ) {
var resolveParent=a.getResolveParent$();
if (resolveParent != null ) {
var pValue=$I$(1).getFontSize$javax_swing_text_AttributeSet(resolveParent);
var retValue;
if (this.lu.type == 1 || this.lu.type == 3 ) {
retValue=this.lu.value * pValue;
} else {
retValue=this.lu.value + pValue;
}return Math.round(retValue);
}}return 12;
}});

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var fs=Clazz.new_(C$,[this, null]);
fs.svalue=value;
try {
if (value.equals$O("xx-small")) {
fs.value=1;
fs.index=true;
} else if (value.equals$O("x-small")) {
fs.value=2;
fs.index=true;
} else if (value.equals$O("small")) {
fs.value=3;
fs.index=true;
} else if (value.equals$O("medium")) {
fs.value=4;
fs.index=true;
} else if (value.equals$O("large")) {
fs.value=5;
fs.index=true;
} else if (value.equals$O("x-large")) {
fs.value=6;
fs.index=true;
} else if (value.equals$O("xx-large")) {
fs.value=7;
fs.index=true;
} else {
fs.lu=Clazz.new_($I$(2,1).c$$S$H$F,[value, 1, 1.0]);
}} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
fs=null;
} else {
throw nfe;
}
}
return fs;
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
if ((value == null ) || (value.length$() == 0) ) {
return null;
}var fs=Clazz.new_(C$,[this, null]);
fs.svalue=value;
try {
var baseFontSize=this.b$['javax.swing.text.html.CSS'].getBaseFontSize$.apply(this.b$['javax.swing.text.html.CSS'], []);
if (value.charAt$I(0) == "+") {
var relSize=Integer.valueOf$S(value.substring$I(1)).intValue$();
fs.value=baseFontSize + relSize;
fs.index=true;
} else if (value.charAt$I(0) == "-") {
var relSize=-Integer.valueOf$S(value.substring$I(1)).intValue$();
fs.value=baseFontSize + relSize;
fs.index=true;
} else {
fs.value=Integer.parseInt$S(value);
if (fs.value > 7 ) {
fs.value=7;
} else if (fs.value < 0 ) {
fs.value=0;
}fs.index=true;
}} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
fs=null;
} else {
throw nfe;
}
}
return fs;
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
if (Clazz.instanceOf(value, "java.lang.Number")) {
var fs=Clazz.new_(C$,[this, null]);
fs.value=$I$(3,"getIndexOfSize$F$IA",[(value).floatValue$(), $I$(4).sizeMapDefault]);
fs.svalue=Integer.toString$I((fs.value|0));
fs.index=true;
return fs;
}return this.parseCssValue$S(value.toString());
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
if (v != null ) {
return Integer.valueOf$I(this.getValue$javax_swing_text_AttributeSet$javax_swing_text_html_StyleSheet(v.getAttributes$(), null));
}return Integer.valueOf$I(this.getValue$javax_swing_text_AttributeSet$javax_swing_text_html_StyleSheet(null, null));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "FontFamily", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['family']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.family;
});

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var cIndex=value.indexOf$I(",");
var ff=Clazz.new_(C$);
ff.svalue=value;
ff.family=null;
if (cIndex == -1) {
p$2.setFontName$javax_swing_text_html_CSS_FontFamily$S.apply(this, [ff, value]);
} else {
var done=false;
var lastIndex;
var length=value.length$();
cIndex=0;
while (!done){
while (cIndex < length && Character.isWhitespace$C(value.charAt$I(cIndex)) )++cIndex;

lastIndex=cIndex;
cIndex=value.indexOf$I$I(",", cIndex);
if (cIndex == -1) {
cIndex=length;
}if (lastIndex < length) {
if (lastIndex != cIndex) {
var lastCharIndex=cIndex;
if (cIndex > 0 && value.charAt$I(cIndex - 1) == " " ) {
--lastCharIndex;
}p$2.setFontName$javax_swing_text_html_CSS_FontFamily$S.apply(this, [ff, value.substring$I$I(lastIndex, lastCharIndex)]);
done=(ff.family != null );
}++cIndex;
} else {
done=true;
}}
}if (ff.family == null ) {
ff.family="SansSerif";
}return ff;
});

Clazz.newMeth(C$, 'setFontName$javax_swing_text_html_CSS_FontFamily$S',  function (ff, fontName) {
ff.family=fontName;
}, p$2);

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
return this.parseCssValue$S(value);
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
return this.parseCssValue$S(value.toString());
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
return this.family;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "FontWeight", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['weight']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.weight;
});

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var fw=Clazz.new_(C$);
fw.svalue=value;
if (value.equals$O("bold")) {
fw.weight=700;
} else if (value.equals$O("normal")) {
fw.weight=400;
} else {
try {
fw.weight=Integer.parseInt$S(value);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
fw=null;
} else {
throw nfe;
}
}
}return fw;
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
if (value.equals$O(Boolean.TRUE)) {
return this.parseCssValue$S("bold");
}return this.parseCssValue$S("normal");
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
return (this.weight > 500) ? Boolean.TRUE : Boolean.FALSE;
});

Clazz.newMeth(C$, 'isBold$',  function () {
return (this.weight > 500);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "ColorValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['c','java.awt.Color']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.c;
});

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var c=$I$(3).stringToColor$S(value);
if (c != null ) {
var cv=Clazz.new_(C$);
cv.svalue=value;
cv.c=c;
return cv;
}return null;
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
return this.parseCssValue$S(value);
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
var colorValue=Clazz.new_(C$);
colorValue.c=value;
colorValue.svalue=$I$(3).colorToHex$java_awt_Color(colorValue.c);
return colorValue;
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
return this.c;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "BorderStyle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['style','javax.swing.text.html.CSS.Value']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.style;
});

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var cssv=$I$(3).getValue$S(value);
if (cssv != null ) {
if ((cssv === $I$(5).INSET ) || (cssv === $I$(5).OUTSET ) || (cssv === $I$(5).NONE ) || (cssv === $I$(5).DOTTED ) || (cssv === $I$(5).DASHED ) || (cssv === $I$(5).SOLID ) || (cssv === $I$(5).DOUBLE ) || (cssv === $I$(5).GROOVE ) || (cssv === $I$(5).RIDGE )  ) {
var bs=Clazz.new_(C$);
bs.svalue=value;
bs.style=cssv;
return bs;
}}return null;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
if (this.style == null ) {
s.writeObject$O(null);
} else {
s.writeObject$O(this.style.toString());
}}, p$3);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var value=s.readObject$();
if (value != null ) {
this.style=$I$(3).getValue$S(value);
}}, p$3);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "LengthValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.units=null;
},1);

C$.$fields$=[['Z',['mayBeNegative','percentage'],'F',['span'],'S',['units']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (mayBeNegative) {
Clazz.super_(C$, this);
this.mayBeNegative=mayBeNegative;
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return this.getValue$Z(false);
});

Clazz.newMeth(C$, 'getValue$Z',  function (isW3CLengthUnits) {
return this.getValue$F$Z(0, isW3CLengthUnits);
});

Clazz.newMeth(C$, 'getValue$F',  function (currentValue) {
return this.getValue$F$Z(currentValue, false);
});

Clazz.newMeth(C$, 'getValue$F$Z',  function (currentValue, isW3CLengthUnits) {
if (this.percentage) {
return this.span * currentValue;
}return $I$(2,"getValue$F$S$Boolean",[this.span, this.units, Boolean.valueOf$Z(isW3CLengthUnits)]);
});

Clazz.newMeth(C$, 'isPercentage$',  function () {
return this.percentage;
});

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var lv=null;
var ok=false;
if ($I$(3).couldBeNumber$S(value)) {
try {
var absolute=Float.valueOf$S(value).floatValue$();
lv=Clazz.new_(C$);
lv.span=absolute;
ok=true;
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}if (!ok) {
var lu=Clazz.new_($I$(2,1).c$$S$H$F,[value, 10, 0]);
switch (lu.type) {
case 0:
lv=Clazz.new_(C$);
lv.span=(this.mayBeNegative) ? lu.value : Math.max(0, lu.value);
lv.units=lu.units;
break;
case 1:
lv=Clazz.new_(C$);
lv.span=Math.max(0, Math.min(1, lu.value));
lv.percentage=true;
break;
}
}if (lv != null ) lv.svalue=value;
return lv;
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
if (value.equals$O("#DEFAULT")) {
value="1";
}return this.parseCssValue$S(value);
});

Clazz.newMeth(C$, 'fromStyleConstants$javax_swing_text_StyleConstants$O',  function (key, value) {
var v=Clazz.new_(C$);
v.svalue=value.toString();
v.span=(value).floatValue$();
return v;
});

Clazz.newMeth(C$, 'toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View',  function (key, v) {
return  new Float(this.getValue$Z(false));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "BorderWidthValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.LengthValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['values','float[]']]]

Clazz.newMeth(C$, 'c$$S$I',  function (svalue, index) {
Clazz.super_(C$, this);
this.svalue=svalue;
this.span=C$.values[index];
this.percentage=false;
}, 1);

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
if (value != null ) {
if (value.equals$O("thick")) {
return Clazz.new_(C$.c$$S$I,[value, 2]);
} else if (value.equals$O("medium")) {
return Clazz.new_(C$.c$$S$I,[value, 1]);
} else if (value.equals$O("thin")) {
return Clazz.new_(C$.c$$S$I,[value, 0]);
}}return C$.superclazz.prototype.parseCssValue$S.apply(this, [value]);
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
if (value == "#DEFAULT") {
return this.parseCssValue$S("medium");
}return this.parseCssValue$S(value);
});

C$.$static$=function(){C$.$static$=0;
C$.values=Clazz.array(Float.TYPE, -1, [1, 2, 4]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "CssValueMapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var retValue=$I$(3).cssValueToInternalValueMap.get$O(value);
if (retValue == null ) {
retValue=$I$(3).cssValueToInternalValueMap.get$O(value.toLowerCase$());
}return retValue;
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
var retValue=$I$(3).htmlValueToCssValueMap.get$O(value);
if (retValue == null ) {
retValue=$I$(3).htmlValueToCssValueMap.get$O(value.toLowerCase$());
}return retValue;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "BackgroundPosition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['horizontalPosition','verticalPosition'],'H',['relative']]]

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var strings=$I$(3).parseStrings$S(value);
var count=strings.length;
var bp=Clazz.new_(C$);
bp.relative=($s$[0] = 5, $s$[0]);
bp.svalue=value;
if (count > 0) {
var found=($s$[0] = 0, $s$[0]);
var index=0;
while (index < count){
var string=strings[index++];
if (string.equals$O("center")) {
found=($s$[0] = found|(4), $s$[0]);
continue;
} else {
if ((found & 1) == 0) {
if (string.equals$O("top")) {
found=($s$[0] = found|(1), $s$[0]);
} else if (string.equals$O("bottom")) {
found=($s$[0] = found|(1), $s$[0]);
bp.verticalPosition=1;
continue;
}}if ((found & 2) == 0) {
if (string.equals$O("left")) {
found=($s$[0] = found|(2), $s$[0]);
bp.horizontalPosition=0;
} else if (string.equals$O("right")) {
found=($s$[0] = found|(2), $s$[0]);
bp.horizontalPosition=1;
}}}}
if (found != 0) {
if ((found & 1) == 1) {
if ((found & 2) == 0) {
bp.horizontalPosition=0.5;
}} else if ((found & 2) == 2) {
bp.verticalPosition=0.5;
} else {
bp.horizontalPosition=bp.verticalPosition=0.5;
}} else {
var lu=Clazz.new_($I$(2,1).c$$S$H$F,[strings[0], 0, 0.0]);
if (lu.type == 0) {
bp.horizontalPosition=lu.value;
bp.relative=($s$[0] = (1 ^ bp.relative), $s$[0]);
} else if (lu.type == 1) {
bp.horizontalPosition=lu.value;
} else if (lu.type == 3) {
bp.horizontalPosition=lu.value;
bp.relative=($s$[0] = ((1 ^ bp.relative) | 2), $s$[0]);
}if (count > 1) {
lu=Clazz.new_($I$(2,1).c$$S$H$F,[strings[1], 0, 0.0]);
if (lu.type == 0) {
bp.verticalPosition=lu.value;
bp.relative=($s$[0] = (4 ^ bp.relative), $s$[0]);
} else if (lu.type == 1) {
bp.verticalPosition=lu.value;
} else if (lu.type == 3) {
bp.verticalPosition=lu.value;
bp.relative=($s$[0] = ((4 ^ bp.relative) | 8), $s$[0]);
}} else {
bp.verticalPosition=0.5;
}}}return bp;
});

Clazz.newMeth(C$, 'isHorizontalPositionRelativeToSize$',  function () {
return ((this.relative & 1) == 1);
});

Clazz.newMeth(C$, 'isHorizontalPositionRelativeToFontSize$',  function () {
return ((this.relative & 2) == 2);
});

Clazz.newMeth(C$, 'getHorizontalPosition$',  function () {
return this.horizontalPosition;
});

Clazz.newMeth(C$, 'isVerticalPositionRelativeToSize$',  function () {
return ((this.relative & 4) == 4);
});

Clazz.newMeth(C$, 'isVerticalPositionRelativeToFontSize$',  function () {
return ((this.relative & 8) == 8);
});

Clazz.newMeth(C$, 'getVerticalPosition$',  function () {
return this.verticalPosition;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "BackgroundImage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSS','.CssValue']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['loadedImage'],'O',['image','javax.swing.ImageIcon']]]

Clazz.newMeth(C$, 'parseCssValue$S',  function (value) {
var retValue=Clazz.new_(C$);
retValue.svalue=value;
return retValue;
});

Clazz.newMeth(C$, 'parseHtmlValue$S',  function (value) {
return this.parseCssValue$S(value);
});

Clazz.newMeth(C$, 'getImage$java_net_URL',  function (base) {
if (!this.loadedImage) {
{
if (!this.loadedImage) {
var url=$I$(3).getURL$java_net_URL$S(base, this.svalue);
this.loadedImage=true;
if (url != null ) {
this.image=Clazz.new_($I$(6,1));
var tmpImg=$I$(7).getDefaultToolkit$().createImage$java_net_URL(url);
if (tmpImg != null ) {
this.image.setImage$java_awt_Image(tmpImg);
}}}}}return this.image;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "LengthUnit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.units=null;
},1);

C$.$fields$=[['F',['value'],'H',['type'],'S',['units']]
,['O',['lengthMapping','java.util.Hashtable','+w3cLengthMapping']]]

Clazz.newMeth(C$, 'c$$S$H$F',  function (value, defaultType, defaultValue) {
;C$.$init$.apply(this);
this.parse$S$H$F(value, defaultType, defaultValue);
}, 1);

Clazz.newMeth(C$, 'parse$S$H$F',  function (value, defaultType, defaultValue) {
this.type=defaultType;
this.value=defaultValue;
var length=value.length$();
if (length > 0 && value.charAt$I(length - 1) == "%" ) {
try {
this.value=Float.valueOf$S(value.substring$I$I(0, length - 1)).floatValue$() / 100.0;
this.type=($s$[0] = 1, $s$[0]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}if (length >= 2) {
this.units=value.substring$I$I(length - 2, length);
var scale=C$.lengthMapping.get$O(this.units);
if (scale != null ) {
try {
this.value=Float.valueOf$S(value.substring$I$I(0, length - 2)).floatValue$();
this.type=($s$[0] = 0, $s$[0]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
} else if (this.units.equals$O("em") || this.units.equals$O("ex") ) {
try {
this.value=Float.valueOf$S(value.substring$I$I(0, length - 2)).floatValue$();
this.type=($s$[0] = 3, $s$[0]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
} else if (value.equals$O("larger")) {
this.value=2.0;
this.type=($s$[0] = 2, $s$[0]);
} else if (value.equals$O("smaller")) {
this.value=-2;
this.type=($s$[0] = 2, $s$[0]);
} else {
try {
this.value=Float.valueOf$S(value).floatValue$();
this.type=($s$[0] = 0, $s$[0]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}} else if (length > 0) {
try {
this.value=Float.valueOf$S(value).floatValue$();
this.type=($s$[0] = 0, $s$[0]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}});

Clazz.newMeth(C$, 'getValue$Z',  function (w3cLengthUnits) {
var mapping=(w3cLengthUnits) ? C$.w3cLengthMapping : C$.lengthMapping;
var scale=1;
if (this.units != null ) {
var scaleFloat=mapping.get$O(this.units);
if (scaleFloat != null ) {
scale=scaleFloat.floatValue$();
}}return this.value * scale;
});

Clazz.newMeth(C$, 'getValue$F$S$Boolean',  function (value, units, w3cLengthUnits) {
var mapping=(w3cLengthUnits).booleanValue$() ? C$.w3cLengthMapping : C$.lengthMapping;
var scale=1;
if (units != null ) {
var scaleFloat=mapping.get$O(units);
if (scaleFloat != null ) {
scale=scaleFloat.floatValue$();
}}return value * scale;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.type + " " + new Float(this.value).toString() ;
});

C$.$static$=function(){C$.$static$=0;
C$.lengthMapping=Clazz.new_($I$(8,1).c$$I,[6]);
C$.w3cLengthMapping=Clazz.new_($I$(8,1).c$$I,[6]);
{
C$.lengthMapping.put$O$O("pt",  new Float(1.0));
C$.lengthMapping.put$O$O("px",  new Float(1.3));
C$.lengthMapping.put$O$O("mm",  new Float(2.83464));
C$.lengthMapping.put$O$O("cm",  new Float(28.3464));
C$.lengthMapping.put$O$O("pc",  new Float(12.0));
C$.lengthMapping.put$O$O("in",  new Float(72.0));
var res=72;
try {
res=$I$(7).getDefaultToolkit$().getScreenResolution$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.HeadlessException")){
} else {
throw e;
}
}
C$.w3cLengthMapping.put$O$O("pt",  new Float(res / 72.0));
C$.w3cLengthMapping.put$O$O("px",  new Float(1.0));
C$.w3cLengthMapping.put$O$O("mm",  new Float(res / 25.4));
C$.w3cLengthMapping.put$O$O("cm",  new Float(res / 2.54));
C$.w3cLengthMapping.put$O$O("pc",  new Float(res / 6.0));
C$.w3cLengthMapping.put$O$O("in",  new Float(res));
};
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "ShorthandFontParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseShorthandFont$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet',  function (css, value, attr) {
var strings=$I$(3).parseStrings$S(value);
var count=strings.length;
var index=0;
var found=($s$[0] = 0, $s$[0]);
var maxC=Math.min(3, count);
while (index < maxC){
if ((found & 1) == 0 && C$.isFontStyle$S(strings[index]) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_STYLE, strings[index++]);
found=($s$[0] = found|(1), $s$[0]);
} else if ((found & 2) == 0 && C$.isFontVariant$S(strings[index]) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_VARIANT, strings[index++]);
found=($s$[0] = found|(2), $s$[0]);
} else if ((found & 4) == 0 && C$.isFontWeight$S(strings[index]) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_WEIGHT, strings[index++]);
found=($s$[0] = found|(4), $s$[0]);
} else if (strings[index].equals$O("normal")) {
++index;
} else {
break;
}}
if ((found & 1) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_STYLE, "normal");
}if ((found & 2) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_VARIANT, "normal");
}if ((found & 4) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_WEIGHT, "normal");
}if (index < count) {
var fontSize=strings[index];
var slashIndex=fontSize.indexOf$I("/");
if (slashIndex != -1) {
fontSize=fontSize.substring$I$I(0, slashIndex);
strings[index]=strings[index].substring$I(slashIndex);
} else {
++index;
}css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_SIZE, fontSize);
} else {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_SIZE, "medium");
}if (index < count && strings[index].startsWith$S("/") ) {
var lineHeight=null;
if (strings[index].equals$O("/")) {
if (++index < count) {
lineHeight=strings[index++];
}} else {
lineHeight=strings[index++].substring$I(1);
}if (lineHeight != null ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).LINE_HEIGHT, lineHeight);
} else {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).LINE_HEIGHT, "normal");
}} else {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).LINE_HEIGHT, "normal");
}if (index < count) {
var family=strings[index++];
while (index < count){
family+=" " + strings[index++];
}
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_FAMILY, family);
} else {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).FONT_FAMILY, "SansSerif");
}}, 1);

Clazz.newMeth(C$, 'isFontStyle$S',  function (string) {
return (string.equals$O("italic") || string.equals$O("oblique") );
}, 1);

Clazz.newMeth(C$, 'isFontVariant$S',  function (string) {
return (string.equals$O("small-caps"));
}, 1);

Clazz.newMeth(C$, 'isFontWeight$S',  function (string) {
if (string.equals$O("bold") || string.equals$O("bolder") || string.equals$O("italic") || string.equals$O("lighter")  ) {
return true;
}return (string.length$() == 3 && string.charAt$I(0) >= "1"  && string.charAt$I(0) <= "9"  && string.charAt$I(1) == "0"  && string.charAt$I(2) == "0" );
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "ShorthandBackgroundParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseShorthandBackground$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet',  function (css, value, attr) {
var strings=$I$(3).parseStrings$S(value);
var count=strings.length;
var index=0;
var found=($s$[0] = 0, $s$[0]);
while (index < count){
var string=strings[index++];
if ((found & 1) == 0 && C$.isImage$S(string) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_IMAGE, string);
found=($s$[0] = found|(1), $s$[0]);
} else if ((found & 2) == 0 && C$.isRepeat$S(string) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_REPEAT, string);
found=($s$[0] = found|(2), $s$[0]);
} else if ((found & 4) == 0 && C$.isAttachment$S(string) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_ATTACHMENT, string);
found=($s$[0] = found|(4), $s$[0]);
} else if ((found & 8) == 0 && C$.isPosition$S(string) ) {
if (index < count && C$.isPosition$S(strings[index]) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_POSITION, string + " " + strings[index++] );
} else {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_POSITION, string);
}found=($s$[0] = found|(8), $s$[0]);
} else if ((found & 16) == 0 && C$.isColor$S(string) ) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_COLOR, string);
found=($s$[0] = found|(16), $s$[0]);
}}
if ((found & 1) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_IMAGE, null);
}if ((found & 2) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_REPEAT, "repeat");
}if ((found & 4) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_ATTACHMENT, "scroll");
}if ((found & 8) == 0) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, $I$(9).BACKGROUND_POSITION, null);
}}, 1);

Clazz.newMeth(C$, 'isImage$S',  function (string) {
return (string.startsWith$S("url(") && string.endsWith$S(")") );
}, 1);

Clazz.newMeth(C$, 'isRepeat$S',  function (string) {
return (string.equals$O("repeat-x") || string.equals$O("repeat-y") || string.equals$O("repeat") || string.equals$O("no-repeat")  );
}, 1);

Clazz.newMeth(C$, 'isAttachment$S',  function (string) {
return (string.equals$O("fixed") || string.equals$O("scroll") );
}, 1);

Clazz.newMeth(C$, 'isPosition$S',  function (string) {
return (string.equals$O("top") || string.equals$O("bottom") || string.equals$O("left") || string.equals$O("right") || string.equals$O("center") || (string.length$() > 0 && Character.isDigit$C(string.charAt$I(0)) )  );
}, 1);

Clazz.newMeth(C$, 'isColor$S',  function (string) {
return ($I$(3).stringToColor$S(string) != null );
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "ShorthandMarginParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseShorthandMargin$javax_swing_text_html_CSS$S$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_AttributeA',  function (css, value, attr, names) {
var strings=$I$(3).parseStrings$S(value);
var count=strings.length;
var index=0;
switch (count) {
case 0:
return;
case 1:
for (var counter=0; counter < 4; counter++) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[counter], strings[0]);
}
break;
case 2:
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[0], strings[0]);
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[2], strings[0]);
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[1], strings[1]);
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[3], strings[1]);
break;
case 3:
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[0], strings[0]);
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[1], strings[1]);
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[2], strings[2]);
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[3], strings[1]);
break;
default:
for (var counter=0; counter < 4; counter++) {
css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, names[counter], strings[counter]);
}
break;
}
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSS, "ShorthandBorderParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['keys','javax.swing.text.html.CSS.Attribute[]']]]

Clazz.newMeth(C$, 'parseShorthandBorder$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S',  function (attributes, key, value) {
var parts=Clazz.array(java.lang.Object, [$I$(10).PARSERS.length]);
var strings=$I$(3).parseStrings$S(value);
for (var s, $s = 0, $$s = strings; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
var valid=false;
for (var i=0; i < parts.length; i++) {
var v=$I$(10).PARSERS[i].parseCssValue$S(s);
if (v != null ) {
if (parts[i] == null ) {
parts[i]=v;
valid=true;
}break;
}}
if (!valid) {
return;
}}
for (var i=0; i < parts.length; i++) {
if (parts[i] == null ) {
parts[i]=$I$(10).DEFAULTS[i];
}}
for (var i=0; i < C$.keys.length; i++) {
if ((key === $I$(9).BORDER ) || (key === C$.keys[i] ) ) {
for (var k=0; k < parts.length; k++) {
attributes.addAttribute$O$O($I$(10).ATTRIBUTES[k][i], parts[k]);
}
}}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.keys=Clazz.array($I$(9), -1, [$I$(9).BORDER_TOP, $I$(9).BORDER_RIGHT, $I$(9).BORDER_BOTTOM, $I$(9).BORDER_LEFT]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.CSS, "LayoutIterator", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
