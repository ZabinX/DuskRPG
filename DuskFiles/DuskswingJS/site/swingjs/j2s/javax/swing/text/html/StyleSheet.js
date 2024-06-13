(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},p$2={},p$3={},p$4={},I$=[[0,'java.util.Stack','StringBuffer','java.util.Vector','java.util.Hashtable',['javax.swing.text.html.CSS','.Attribute'],['javax.swing.text.html.StyleSheet','.BackgroundImagePainter'],'javax.swing.text.html.CSSBorder','java.awt.Color',['javax.swing.text.html.StyleSheet','.BoxPainter','.HorizontalMargin'],'javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Tag'],'java.util.StringTokenizer','java.net.URL','javax.swing.ImageIcon','java.awt.Rectangle','javax.swing.text.html.HTMLDocument',['javax.swing.text.html.CSS','.Value'],['javax.swing.text.html.HTML','.Attribute'],'javax.swing.UIManager','sun.swing.SwingUtilities2','javax.swing.text.html.CSS',['javax.swing.text.html.StyleSheet','.SearchBuffer'],'javax.swing.text.AttributeSet','javax.swing.text.html.StyleSheet','javax.swing.event.ChangeListener','java.util.HashMap','javax.swing.text.SimpleAttributeSet','javax.swing.text.html.CSSParser','java.io.StringReader','javax.swing.border.EmptyBorder',['javax.swing.text.html.StyleSheet','.SelectorMapping'],['javax.swing.text.html.StyleSheet','.CssParser'],['javax.swing.text.html.StyleSheet','.ViewAttributeSet'],'java.io.BufferedReader','java.io.InputStreamReader','javax.swing.text.html.HTML',['javax.swing.text.html.StyleSheet','.SmallConversionSet'],['javax.swing.text.html.StyleSheet','.LargeConversionSet'],['javax.swing.text.html.StyleSheet','.BoxPainter'],['javax.swing.text.html.StyleSheet','.ListPainter'],'StringBuilder',['javax.swing.text.html.StyleSheet','.ResolvedStyle']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StyleSheet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.StyleContext');
C$.$classes$=[['LargeConversionSet',0],['SmallConversionSet',0],['SearchBuffer',10],['BoxPainter',9],['ListPainter',9],['BackgroundImagePainter',8],['ViewAttributeSet',0],['ResolvedStyle',8],['SelectorMapping',8],['CssParser',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sizeMap=C$.sizeMapDefault;
this.w3cLengthUnits=false;
},1);

C$.$fields$=[['Z',['w3cLengthUnits'],'O',['css','javax.swing.text.html.CSS','selectorMapping','javax.swing.text.html.StyleSheet.SelectorMapping','resolvedStyles','java.util.Hashtable','linkedStyleSheets','java.util.Vector','base','java.net.URL','sizeMap','int[]']]
,['O',['noBorder','javax.swing.border.Border','sizeMapDefault','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.selectorMapping=Clazz.new_($I$(31,1).c$$I,[0]);
this.resolvedStyles=Clazz.new_($I$(4,1));
if (this.css == null ) {
this.css=Clazz.new_($I$(21,1));
}}, 1);

Clazz.newMeth(C$, 'getRule$javax_swing_text_html_HTML_Tag$javax_swing_text_Element',  function (t, e) {
var sb=$I$(22).obtainSearchBuffer$();
try {
var searchContext=sb.getVector$();
for (var p=e; p != null ; p=p.getParentElement$()) {
searchContext.addElement$O(p);
}
var n=searchContext.size$();
var cacheLookup=sb.getStringBuffer$();
var attr;
var eName;
var name;
for (var counter=n - 1; counter >= 1; counter--) {
e=searchContext.elementAt$I(counter);
attr=e.getAttributes$();
name=attr.getAttribute$O($I$(10).NameAttribute);
eName=name.toString();
cacheLookup.append$S(eName);
if (attr != null ) {
if (attr.isDefined$O($I$(18).ID)) {
cacheLookup.append$C("#");
cacheLookup.append$O(attr.getAttribute$O($I$(18).ID));
} else if (attr.isDefined$O($I$(18).CLASS)) {
cacheLookup.append$C(".");
cacheLookup.append$O(attr.getAttribute$O($I$(18).CLASS));
}}cacheLookup.append$C(" ");
}
cacheLookup.append$S(t.toString());
e=searchContext.elementAt$I(0);
attr=e.getAttributes$();
if (e.isLeaf$()) {
var testAttr=attr.getAttribute$O(t);
if (Clazz.instanceOf(testAttr, "javax.swing.text.AttributeSet")) {
attr=testAttr;
} else {
attr=null;
}}if (attr != null ) {
if (attr.isDefined$O($I$(18).ID)) {
cacheLookup.append$C("#");
cacheLookup.append$O(attr.getAttribute$O($I$(18).ID));
} else if (attr.isDefined$O($I$(18).CLASS)) {
cacheLookup.append$C(".");
cacheLookup.append$O(attr.getAttribute$O($I$(18).CLASS));
}}var style=p$4.getResolvedStyle$S$java_util_Vector$javax_swing_text_html_HTML_Tag.apply(this, [cacheLookup.toString(), searchContext, t]);
return style;
} finally {
$I$(22).releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer(sb);
}
});

Clazz.newMeth(C$, 'getRule$S',  function (selector) {
selector=this.cleanSelectorString$S(selector);
if (selector != null ) {
var style=p$4.getResolvedStyle$S.apply(this, [selector]);
return style;
}return null;
});

Clazz.newMeth(C$, 'addRule$S',  function (rule) {
if (rule != null ) {
var baseUnitsDisable="BASE_SIZE_DISABLE";
var baseUnits="BASE_SIZE ";
var w3cLengthUnitsEnable="W3C_LENGTH_UNITS_ENABLE";
var w3cLengthUnitsDisable="W3C_LENGTH_UNITS_DISABLE";
if (rule == "BASE_SIZE_DISABLE") {
this.sizeMap=C$.sizeMapDefault;
} else if (rule.startsWith$S("BASE_SIZE ")) {
this.rebaseSizeMap$I(Integer.parseInt$S(rule.substring$I("BASE_SIZE ".length$())));
} else if (rule == "W3C_LENGTH_UNITS_ENABLE") {
this.w3cLengthUnits=true;
} else if (rule == "W3C_LENGTH_UNITS_DISABLE") {
this.w3cLengthUnits=false;
} else {
var parser=Clazz.new_($I$(32,1),[this, null]);
try {
parser.parse$java_net_URL$java_io_Reader$Z$Z(this.getBase$(), Clazz.new_($I$(29,1).c$$S,[rule]), false, false);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
}}});

Clazz.newMeth(C$, 'getDeclaration$S',  function (decl) {
if (decl == null ) {
return $I$(27).EMPTY;
}var parser=Clazz.new_($I$(32,1),[this, null]);
return parser.parseDeclaration$S(decl);
});

Clazz.newMeth(C$, 'loadRules$java_io_Reader$java_net_URL',  function ($in, ref) {
var parser=Clazz.new_($I$(32,1),[this, null]);
parser.parse$java_net_URL$java_io_Reader$Z$Z(ref, $in, false, false);
});

Clazz.newMeth(C$, 'getViewAttributes$javax_swing_text_View',  function (v) {
return Clazz.new_($I$(33,1).c$$javax_swing_text_View,[this, null, v]);
});

Clazz.newMeth(C$, 'removeStyle$S',  function (nm) {
var aStyle=this.getStyle$S(nm);
if (aStyle != null ) {
var selector=this.cleanSelectorString$S(nm);
var selectors=this.getSimpleSelectors$S(selector);
{
var mapping=p$4.getRootSelectorMapping.apply(this, []);
for (var i=selectors.length - 1; i >= 0; i--) {
mapping=mapping.getChildSelectorMapping$S$Z(selectors[i], true);
}
var rule=mapping.getStyle$();
if (rule != null ) {
mapping.setStyle$javax_swing_text_Style(null);
if (this.resolvedStyles.size$() > 0) {
var values=this.resolvedStyles.elements$();
while (values.hasMoreElements$()){
var style=values.nextElement$();
style.removeStyle$javax_swing_text_Style(rule);
}
}}}}C$.superclazz.prototype.removeStyle$S.apply(this, [nm]);
});

Clazz.newMeth(C$, 'addStyleSheet$javax_swing_text_html_StyleSheet',  function (ss) {
{
if (this.linkedStyleSheets == null ) {
this.linkedStyleSheets=Clazz.new_($I$(3,1));
}if (!this.linkedStyleSheets.contains$O(ss)) {
var index=0;
if (Clazz.instanceOf(ss, "javax.swing.plaf.UIResource") && this.linkedStyleSheets.size$() > 1 ) {
index=this.linkedStyleSheets.size$() - 1;
}this.linkedStyleSheets.insertElementAt$O$I(ss, index);
p$4.linkStyleSheetAt$javax_swing_text_html_StyleSheet$I.apply(this, [ss, index]);
}}});

Clazz.newMeth(C$, 'removeStyleSheet$javax_swing_text_html_StyleSheet',  function (ss) {
{
if (this.linkedStyleSheets != null ) {
var index=this.linkedStyleSheets.indexOf$O(ss);
if (index != -1) {
this.linkedStyleSheets.removeElementAt$I(index);
p$4.unlinkStyleSheet$javax_swing_text_html_StyleSheet$I.apply(this, [ss, index]);
if (index == 0 && this.linkedStyleSheets.size$() == 0 ) {
this.linkedStyleSheets=null;
}}}}});

Clazz.newMeth(C$, 'getStyleSheets$',  function () {
var retValue;
{
if (this.linkedStyleSheets != null ) {
retValue=Clazz.array(C$, [this.linkedStyleSheets.size$()]);
this.linkedStyleSheets.copyInto$OA(retValue);
} else {
retValue=null;
}}return retValue;
});

Clazz.newMeth(C$, 'importStyleSheet$java_net_URL',  function (url) {
try {
var is;
is=url.openStream$();
var r=Clazz.new_([Clazz.new_($I$(35,1).c$$java_io_InputStream,[is])],$I$(34,1).c$$java_io_Reader);
var parser=Clazz.new_($I$(32,1),[this, null]);
parser.parse$java_net_URL$java_io_Reader$Z$Z(url, r, false, true);
r.close$();
is.close$();
} catch (e) {
}
});

Clazz.newMeth(C$, 'setBase$java_net_URL',  function (base) {
this.base=base;
});

Clazz.newMeth(C$, 'getBase$',  function () {
return this.base;
});

Clazz.newMeth(C$, 'addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S',  function (attr, key, value) {
this.css.addInternalCSSValue$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(attr, key, value);
});

Clazz.newMeth(C$, 'addCSSAttributeFromHTML$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S',  function (attr, key, value) {
var iValue=this.css.getCssValue$javax_swing_text_html_CSS_Attribute$S(key, value);
if (iValue != null ) {
attr.addAttribute$O$O(key, iValue);
return true;
}return false;
});

Clazz.newMeth(C$, 'translateHTMLToCSS$javax_swing_text_AttributeSet',  function (htmlAttrSet) {
var cssAttrSet=this.css.translateHTMLToCSS$javax_swing_text_AttributeSet(htmlAttrSet);
var cssStyleSet=this.addStyle$S$javax_swing_text_Style(null, null);
cssStyleSet.addAttributes$javax_swing_text_AttributeSet(cssAttrSet);
return cssStyleSet;
});

Clazz.newMeth(C$, 'addAttribute$javax_swing_text_AttributeSet$O$O',  function (old, key, value) {
if (this.css == null ) {
this.css=Clazz.new_($I$(21,1));
}if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var tag=$I$(36).getTagForStyleConstantsKey$javax_swing_text_StyleConstants(key);
if (tag != null  && old.isDefined$O(tag) ) {
old=this.removeAttribute$javax_swing_text_AttributeSet$O(old, tag);
}var cssValue=this.css.styleConstantsValueToCSSValue$javax_swing_text_StyleConstants$O(key, value);
if (cssValue != null ) {
var cssKey=this.css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
return C$.superclazz.prototype.addAttribute$javax_swing_text_AttributeSet$O$O.apply(this, [old, cssKey, cssValue]);
}}}return C$.superclazz.prototype.addAttribute$javax_swing_text_AttributeSet$O$O.apply(this, [old, key, value]);
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (old, attr) {
if (!(Clazz.instanceOf(attr, "javax.swing.text.html.HTMLDocument.TaggedAttributeSet"))) {
old=p$4.removeHTMLTags$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [old, attr]);
}return C$.superclazz.prototype.addAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [old, this.convertAttributeSet$javax_swing_text_AttributeSet(attr)]);
});

Clazz.newMeth(C$, 'removeAttribute$javax_swing_text_AttributeSet$O',  function (old, key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var tag=$I$(36).getTagForStyleConstantsKey$javax_swing_text_StyleConstants(key);
if (tag != null ) {
old=C$.superclazz.prototype.removeAttribute$javax_swing_text_AttributeSet$O.apply(this, [old, tag]);
}var cssKey=this.css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
return C$.superclazz.prototype.removeAttribute$javax_swing_text_AttributeSet$O.apply(this, [old, cssKey]);
}}return C$.superclazz.prototype.removeAttribute$javax_swing_text_AttributeSet$O.apply(this, [old, key]);
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet$java_util_Enumeration',  function (old, names) {
return C$.superclazz.prototype.removeAttributes$javax_swing_text_AttributeSet$java_util_Enumeration.apply(this, [old, names]);
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (old, attrs) {
if (old !== attrs ) {
old=p$4.removeHTMLTags$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [old, attrs]);
}return C$.superclazz.prototype.removeAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [old, this.convertAttributeSet$javax_swing_text_AttributeSet(attrs)]);
});

Clazz.newMeth(C$, 'createSmallAttributeSet$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(37,1).c$$javax_swing_text_AttributeSet,[this, null, a]);
});

Clazz.newMeth(C$, 'createLargeAttributeSet$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(38,1).c$$javax_swing_text_AttributeSet,[this, null, a]);
});

Clazz.newMeth(C$, 'removeHTMLTags$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (old, attr) {
if (!(Clazz.instanceOf(attr, "javax.swing.text.html.StyleSheet.LargeConversionSet")) && !(Clazz.instanceOf(attr, "javax.swing.text.html.StyleSheet.SmallConversionSet")) ) {
var names=attr.getAttributeNames$();
while (names.hasMoreElements$()){
var key=names.nextElement$();
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var tag=$I$(36).getTagForStyleConstantsKey$javax_swing_text_StyleConstants(key);
if (tag != null  && old.isDefined$O(tag) ) {
old=C$.superclazz.prototype.removeAttribute$javax_swing_text_AttributeSet$O.apply(this, [old, tag]);
}}}
}return old;
}, p$4);

Clazz.newMeth(C$, 'convertAttributeSet$javax_swing_text_AttributeSet',  function (a) {
if ((Clazz.instanceOf(a, "javax.swing.text.html.StyleSheet.LargeConversionSet")) || (Clazz.instanceOf(a, "javax.swing.text.html.StyleSheet.SmallConversionSet")) ) {
return a;
}var names=a.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
if (Clazz.instanceOf(name, "javax.swing.text.StyleConstants")) {
var converted=Clazz.new_($I$(38,1),[this, null]);
var keys=a.getAttributeNames$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var cssValue=null;
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
var value=a.getAttribute$O(key);
cssValue=this.css.styleConstantsValueToCSSValue$javax_swing_text_StyleConstants$O(key, value);
if (cssValue != null ) {
converted.addAttribute$O$O(cssKey, cssValue);
}}}if (cssValue == null ) {
converted.addAttribute$O$O(key, a.getAttribute$O(key));
}}
return converted;
}}
return a;
});

Clazz.newMeth(C$, 'getFont$javax_swing_text_AttributeSet',  function (a) {
return this.css.getFont$javax_swing_text_StyleContext$javax_swing_text_AttributeSet$I$javax_swing_text_html_StyleSheet(this, a, 12, this);
});

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet',  function (a) {
var c=this.css.getColor$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute(a, $I$(5).COLOR);
if (c == null ) {
return $I$(8).black;
}return c;
});

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet',  function (a) {
return this.css.getColor$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute(a, $I$(5).BACKGROUND_COLOR);
});

Clazz.newMeth(C$, 'getBoxPainter$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(39,1).c$$javax_swing_text_AttributeSet$javax_swing_text_html_CSS$javax_swing_text_html_StyleSheet,[a, this.css, this]);
});

Clazz.newMeth(C$, 'getListPainter$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(40,1).c$$javax_swing_text_AttributeSet$javax_swing_text_html_StyleSheet,[a, this]);
});

Clazz.newMeth(C$, 'setBaseFontSize$I',  function (sz) {
this.css.setBaseFontSize$I(sz);
});

Clazz.newMeth(C$, 'setBaseFontSize$S',  function (size) {
this.css.setBaseFontSize$S(size);
});

Clazz.newMeth(C$, 'getIndexOfSize$F',  function (pt) {
return $I$(21).getIndexOfSize$F$IA(pt, C$.sizeMapDefault);
}, 1);

Clazz.newMeth(C$, 'getPointSize$I',  function (index) {
return this.css.getPointSize$I$javax_swing_text_html_StyleSheet(index, this);
});

Clazz.newMeth(C$, 'getPointSize$S',  function (size) {
return this.css.getPointSize$S$javax_swing_text_html_StyleSheet(size, this);
});

Clazz.newMeth(C$, 'stringToColor$S',  function (string) {
return $I$(21).stringToColor$S(string);
});

Clazz.newMeth(C$, 'getBackgroundImage$javax_swing_text_AttributeSet',  function (attr) {
var value=attr.getAttribute$O($I$(5).BACKGROUND_IMAGE);
if (value != null ) {
return (value).getImage$java_net_URL(this.getBase$());
}return null;
});

Clazz.newMeth(C$, 'addRule$SA$javax_swing_text_AttributeSet$Z',  function (selector, declaration, isLinked) {
var n=selector.length;
var sb=Clazz.new_($I$(41,1));
sb.append$S(selector[0]);
for (var counter=1; counter < n; counter++) {
sb.append$C(" ");
sb.append$S(selector[counter]);
}
var selectorName=sb.toString();
var rule=this.getStyle$S(selectorName);
if (rule == null ) {
var altRule=this.addStyle$S$javax_swing_text_Style(selectorName, null);
{
var mapping=p$4.getRootSelectorMapping.apply(this, []);
for (var i=n - 1; i >= 0; i--) {
mapping=mapping.getChildSelectorMapping$S$Z(selector[i], true);
}
rule=mapping.getStyle$();
if (rule == null ) {
rule=altRule;
mapping.setStyle$javax_swing_text_Style(rule);
p$4.refreshResolvedRules$S$SA$javax_swing_text_Style$I.apply(this, [selectorName, selector, rule, mapping.getSpecificity$()]);
}}}if (isLinked) {
rule=p$4.getLinkedStyle$javax_swing_text_Style.apply(this, [rule]);
}rule.addAttributes$javax_swing_text_AttributeSet(declaration);
});

Clazz.newMeth(C$, 'linkStyleSheetAt$javax_swing_text_html_StyleSheet$I',  function (ss, index) {
if (this.resolvedStyles.size$() > 0) {
var values=this.resolvedStyles.elements$();
while (values.hasMoreElements$()){
var rule=values.nextElement$();
rule.insertExtendedStyleAt$javax_swing_text_Style$I(ss.getRule$S(rule.getName$()), index);
}
}}, p$4);

Clazz.newMeth(C$, 'unlinkStyleSheet$javax_swing_text_html_StyleSheet$I',  function (ss, index) {
if (this.resolvedStyles.size$() > 0) {
var values=this.resolvedStyles.elements$();
while (values.hasMoreElements$()){
var rule=values.nextElement$();
rule.removeExtendedStyleAt$I(index);
}
}}, p$4);

Clazz.newMeth(C$, 'getSimpleSelectors$S',  function (selector) {
selector=this.cleanSelectorString$S(selector);
var sb=$I$(22).obtainSearchBuffer$();
var selectors=sb.getVector$();
var lastIndex=0;
var length=selector.length$();
while (lastIndex != -1){
var newIndex=selector.indexOf$I$I(" ", lastIndex);
if (newIndex != -1) {
selectors.addElement$O(selector.substring$I$I(lastIndex, newIndex));
if (++newIndex == length) {
lastIndex=-1;
} else {
lastIndex=newIndex;
}} else {
selectors.addElement$O(selector.substring$I(lastIndex));
lastIndex=-1;
}}
var retValue=Clazz.array(String, [selectors.size$()]);
selectors.copyInto$OA(retValue);
$I$(22).releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer(sb);
return retValue;
});

Clazz.newMeth(C$, 'cleanSelectorString$S',  function (selector) {
var lastWasSpace=true;
for (var counter=0, maxCounter=selector.length$(); counter < maxCounter; counter++) {
switch ((selector.charCodeAt$I(counter))) {
case 32:
if (lastWasSpace) {
return p$4._cleanSelectorString$S.apply(this, [selector]);
}lastWasSpace=true;
break;
case 10:
case 13:
case 9:
return p$4._cleanSelectorString$S.apply(this, [selector]);
default:
lastWasSpace=false;
}
}
if (lastWasSpace) {
return p$4._cleanSelectorString$S.apply(this, [selector]);
}return selector;
});

Clazz.newMeth(C$, '_cleanSelectorString$S',  function (selector) {
var sb=$I$(22).obtainSearchBuffer$();
var buff=sb.getStringBuffer$();
var lastWasSpace=true;
var lastIndex=0;
var chars=selector.toCharArray$();
var numChars=chars.length;
var retValue=null;
try {
for (var counter=0; counter < numChars; counter++) {
switch ((chars[counter]).$c()) {
case 32:
if (!lastWasSpace) {
lastWasSpace=true;
if (lastIndex < counter) {
buff.append$CA$I$I(chars, lastIndex, 1 + counter - lastIndex);
}}lastIndex=counter + 1;
break;
case 10:
case 13:
case 9:
if (!lastWasSpace) {
lastWasSpace=true;
if (lastIndex < counter) {
buff.append$CA$I$I(chars, lastIndex, counter - lastIndex);
buff.append$C(" ");
}}lastIndex=counter + 1;
break;
default:
lastWasSpace=false;
break;
}
}
if (lastWasSpace && buff.length$() > 0 ) {
buff.setLength$I(buff.length$() - 1);
} else if (lastIndex < numChars) {
buff.append$CA$I$I(chars, lastIndex, numChars - lastIndex);
}retValue=buff.toString();
} finally {
$I$(22).releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer(sb);
}
return retValue;
}, p$4);

Clazz.newMeth(C$, 'getRootSelectorMapping',  function () {
return this.selectorMapping;
}, p$4);

Clazz.newMeth(C$, 'getSpecificity$S',  function (selector) {
var specificity=0;
var lastWasSpace=true;
for (var counter=0, maxCounter=selector.length$(); counter < maxCounter; counter++) {
switch ((selector.charCodeAt$I(counter))) {
case 46:
specificity+=100;
break;
case 35:
specificity+=10000;
break;
case 32:
lastWasSpace=true;
break;
default:
if (lastWasSpace) {
lastWasSpace=false;
specificity+=1;
}}
}
return specificity;
}, 1);

Clazz.newMeth(C$, 'getLinkedStyle$javax_swing_text_Style',  function (localStyle) {
var retStyle=localStyle.getResolveParent$();
if (retStyle == null ) {
retStyle=this.addStyle$S$javax_swing_text_Style(null, null);
localStyle.setResolveParent$javax_swing_text_AttributeSet(retStyle);
}return retStyle;
}, p$4);

Clazz.newMeth(C$, 'getResolvedStyle$S$java_util_Vector$javax_swing_text_html_HTML_Tag',  function (selector, elements, t) {
var retStyle=this.resolvedStyles.get$O(selector);
if (retStyle == null ) {
retStyle=p$4.createResolvedStyle$S$java_util_Vector$javax_swing_text_html_HTML_Tag.apply(this, [selector, elements, t]);
}return retStyle;
}, p$4);

Clazz.newMeth(C$, 'getResolvedStyle$S',  function (selector) {
var retStyle=this.resolvedStyles.get$O(selector);
if (retStyle == null ) {
retStyle=p$4.createResolvedStyle$S.apply(this, [selector]);
}return retStyle;
}, p$4);

Clazz.newMeth(C$, 'addSortedStyle$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector',  function (mapping, elements) {
var size=elements.size$();
if (size > 0) {
var specificity=mapping.getSpecificity$();
for (var counter=0; counter < size; counter++) {
if (specificity >= elements.elementAt$I(counter).getSpecificity$()) {
elements.insertElementAt$O$I(mapping, counter);
return;
}}
}elements.addElement$O(mapping);
}, p$4);

Clazz.newMeth(C$, 'getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable',  function (parentMapping, styles, tags, ids, classes, index, numElements, alreadyChecked) {
if (alreadyChecked.contains$O(parentMapping)) {
return;
}alreadyChecked.put$O$O(parentMapping, parentMapping);
var style=parentMapping.getStyle$();
if (style != null ) {
p$4.addSortedStyle$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector.apply(this, [parentMapping, styles]);
}for (var counter=index; counter < numElements; counter++) {
var tagString=tags[counter];
if (tagString != null ) {
var childMapping=parentMapping.getChildSelectorMapping$S$Z(tagString, false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, styles, tags, ids, classes, counter + 1, numElements, alreadyChecked]);
}if (classes[counter] != null ) {
var className=classes[counter];
childMapping=parentMapping.getChildSelectorMapping$S$Z(tagString + "." + className , false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, styles, tags, ids, classes, counter + 1, numElements, alreadyChecked]);
}childMapping=parentMapping.getChildSelectorMapping$S$Z("." + className, false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, styles, tags, ids, classes, counter + 1, numElements, alreadyChecked]);
}}if (ids[counter] != null ) {
var idName=ids[counter];
childMapping=parentMapping.getChildSelectorMapping$S$Z(tagString + "#" + idName , false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, styles, tags, ids, classes, counter + 1, numElements, alreadyChecked]);
}childMapping=parentMapping.getChildSelectorMapping$S$Z("#" + idName, false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, styles, tags, ids, classes, counter + 1, numElements, alreadyChecked]);
}}}}
}, p$4);

Clazz.newMeth(C$, 'createResolvedStyle$S$SA$SA$SA',  function (selector, tags, ids, classes) {
var sb=$I$(22).obtainSearchBuffer$();
var tempVector=sb.getVector$();
var tempHashtable=sb.getHashtable$();
try {
var mapping=p$4.getRootSelectorMapping.apply(this, []);
var numElements=tags.length;
var tagString=tags[0];
var childMapping=mapping.getChildSelectorMapping$S$Z(tagString, false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, tempVector, tags, ids, classes, 1, numElements, tempHashtable]);
}if (classes[0] != null ) {
var className=classes[0];
childMapping=mapping.getChildSelectorMapping$S$Z(tagString + "." + className , false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, tempVector, tags, ids, classes, 1, numElements, tempHashtable]);
}childMapping=mapping.getChildSelectorMapping$S$Z("." + className, false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, tempVector, tags, ids, classes, 1, numElements, tempHashtable]);
}}if (ids[0] != null ) {
var idName=ids[0];
childMapping=mapping.getChildSelectorMapping$S$Z(tagString + "#" + idName , false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, tempVector, tags, ids, classes, 1, numElements, tempHashtable]);
}childMapping=mapping.getChildSelectorMapping$S$Z("#" + idName, false);
if (childMapping != null ) {
p$4.getStyles$javax_swing_text_html_StyleSheet_SelectorMapping$java_util_Vector$SA$SA$SA$I$I$java_util_Hashtable.apply(this, [childMapping, tempVector, tags, ids, classes, 1, numElements, tempHashtable]);
}}var numLinkedSS=(this.linkedStyleSheets != null ) ? this.linkedStyleSheets.size$() : 0;
var numStyles=tempVector.size$();
var attrs=Clazz.array($I$(23), [numStyles + numLinkedSS]);
for (var counter=0; counter < numStyles; counter++) {
attrs[counter]=tempVector.elementAt$I(counter).getStyle$();
}
for (var counter=0; counter < numLinkedSS; counter++) {
var attr=this.linkedStyleSheets.elementAt$I(counter).getRule$S(selector);
if (attr == null ) {
attrs[counter + numStyles]=$I$(27).EMPTY;
} else {
attrs[counter + numStyles]=attr;
}}
var retStyle=Clazz.new_($I$(42,1).c$$S$javax_swing_text_AttributeSetA$I,[selector, attrs, numStyles]);
this.resolvedStyles.put$O$O(selector, retStyle);
return retStyle;
} finally {
$I$(22).releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer(sb);
}
}, p$4);

Clazz.newMeth(C$, 'createResolvedStyle$S$java_util_Vector$javax_swing_text_html_HTML_Tag',  function (selector, elements, t) {
var numElements=elements.size$();
var tags=Clazz.array(String, [numElements]);
var ids=Clazz.array(String, [numElements]);
var classes=Clazz.array(String, [numElements]);
for (var counter=0; counter < numElements; counter++) {
var e=elements.elementAt$I(counter);
var attr=e.getAttributes$();
if (counter == 0 && e.isLeaf$() ) {
var testAttr=attr.getAttribute$O(t);
if (Clazz.instanceOf(testAttr, "javax.swing.text.AttributeSet")) {
attr=testAttr;
} else {
attr=null;
}}if (attr != null ) {
var tag=attr.getAttribute$O($I$(10).NameAttribute);
if (tag != null ) {
tags[counter]=tag.toString();
} else {
tags[counter]=null;
}if (attr.isDefined$O($I$(18).CLASS)) {
classes[counter]=attr.getAttribute$O($I$(18).CLASS).toString();
} else {
classes[counter]=null;
}if (attr.isDefined$O($I$(18).ID)) {
ids[counter]=attr.getAttribute$O($I$(18).ID).toString();
} else {
ids[counter]=null;
}} else {
tags[counter]=ids[counter]=classes[counter]=null;
}}
tags[0]=t.toString();
return p$4.createResolvedStyle$S$SA$SA$SA.apply(this, [selector, tags, ids, classes]);
}, p$4);

Clazz.newMeth(C$, 'createResolvedStyle$S',  function (selector) {
var sb=$I$(22).obtainSearchBuffer$();
var elements=sb.getVector$();
try {
var done;
var dotIndex=0;
var spaceIndex;
var poundIndex=0;
var lastIndex=0;
var length=selector.length$();
while (lastIndex < length){
if (dotIndex == lastIndex) {
dotIndex=selector.indexOf$I$I(".", lastIndex);
}if (poundIndex == lastIndex) {
poundIndex=selector.indexOf$I$I("#", lastIndex);
}spaceIndex=selector.indexOf$I$I(" ", lastIndex);
if (spaceIndex == -1) {
spaceIndex=length;
}if (dotIndex != -1 && poundIndex != -1  && dotIndex < spaceIndex  && poundIndex < spaceIndex ) {
if (poundIndex < dotIndex) {
if (lastIndex == poundIndex) {
elements.addElement$O("");
} else {
elements.addElement$O(selector.substring$I$I(lastIndex, poundIndex));
}if ((dotIndex + 1) < spaceIndex) {
elements.addElement$O(selector.substring$I$I(dotIndex + 1, spaceIndex));
} else {
elements.addElement$O(null);
}if ((poundIndex + 1) == dotIndex) {
elements.addElement$O(null);
} else {
elements.addElement$O(selector.substring$I$I(poundIndex + 1, dotIndex));
}} else if (poundIndex < spaceIndex) {
if (lastIndex == dotIndex) {
elements.addElement$O("");
} else {
elements.addElement$O(selector.substring$I$I(lastIndex, dotIndex));
}if ((dotIndex + 1) < poundIndex) {
elements.addElement$O(selector.substring$I$I(dotIndex + 1, poundIndex));
} else {
elements.addElement$O(null);
}if ((poundIndex + 1) == spaceIndex) {
elements.addElement$O(null);
} else {
elements.addElement$O(selector.substring$I$I(poundIndex + 1, spaceIndex));
}}dotIndex=poundIndex=spaceIndex + 1;
} else if (dotIndex != -1 && dotIndex < spaceIndex ) {
if (dotIndex == lastIndex) {
elements.addElement$O("");
} else {
elements.addElement$O(selector.substring$I$I(lastIndex, dotIndex));
}if ((dotIndex + 1) == spaceIndex) {
elements.addElement$O(null);
} else {
elements.addElement$O(selector.substring$I$I(dotIndex + 1, spaceIndex));
}elements.addElement$O(null);
dotIndex=spaceIndex + 1;
} else if (poundIndex != -1 && poundIndex < spaceIndex ) {
if (poundIndex == lastIndex) {
elements.addElement$O("");
} else {
elements.addElement$O(selector.substring$I$I(lastIndex, poundIndex));
}elements.addElement$O(null);
if ((poundIndex + 1) == spaceIndex) {
elements.addElement$O(null);
} else {
elements.addElement$O(selector.substring$I$I(poundIndex + 1, spaceIndex));
}poundIndex=spaceIndex + 1;
} else {
elements.addElement$O(selector.substring$I$I(lastIndex, spaceIndex));
elements.addElement$O(null);
elements.addElement$O(null);
}lastIndex=spaceIndex + 1;
}
var total=elements.size$();
var numTags=(total/3|0);
var tags=Clazz.array(String, [numTags]);
var ids=Clazz.array(String, [numTags]);
var classes=Clazz.array(String, [numTags]);
for (var index=0, eIndex=total - 3; index < numTags; index++, eIndex-=3) {
tags[index]=elements.elementAt$I(eIndex);
classes[index]=elements.elementAt$I(eIndex + 1);
ids[index]=elements.elementAt$I(eIndex + 2);
}
return p$4.createResolvedStyle$S$SA$SA$SA.apply(this, [selector, tags, ids, classes]);
} finally {
$I$(22).releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer(sb);
}
}, p$4);

Clazz.newMeth(C$, 'refreshResolvedRules$S$SA$javax_swing_text_Style$I',  function (selectorName, selector, newStyle, specificity) {
if (this.resolvedStyles.size$() > 0) {
var values=this.resolvedStyles.elements$();
while (values.hasMoreElements$()){
var style=values.nextElement$();
if (style.matches$S(selectorName)) {
style.insertStyle$javax_swing_text_Style$I(newStyle, specificity);
}}
}}, p$4);

Clazz.newMeth(C$, 'rebaseSizeMap$I',  function (base) {
var minimalFontSize=4;
this.sizeMap=Clazz.array(Integer.TYPE, [C$.sizeMapDefault.length]);
for (var i=0; i < C$.sizeMapDefault.length; i++) {
this.sizeMap[i]=Math.max((base * C$.sizeMapDefault[i]/C$.sizeMapDefault[$I$(21).baseFontSizeIndex]|0), 4);
}
});

Clazz.newMeth(C$, 'getSizeMap$',  function () {
return this.sizeMap;
});

Clazz.newMeth(C$, 'isW3CLengthUnits$',  function () {
return this.w3cLengthUnits;
});

C$.$static$=function(){C$.$static$=0;
C$.noBorder=Clazz.new_($I$(30,1).c$$I$I$I$I,[0, 0, 0, 0]);
C$.sizeMapDefault=Clazz.array(Integer.TYPE, -1, [8, 10, 12, 14, 18, 24, 36]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "LargeConversionSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.SimpleAttributeSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (source) {
;C$.superclazz.c$$javax_swing_text_AttributeSet.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDefined$O',  function (key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.b$['javax.swing.text.html.StyleSheet'].css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
return C$.superclazz.prototype.isDefined$O.apply(this, [cssKey]);
}}return C$.superclazz.prototype.isDefined$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'getAttribute$O',  function (key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.b$['javax.swing.text.html.StyleSheet'].css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
var value=C$.superclazz.prototype.getAttribute$O.apply(this, [cssKey]);
if (value != null ) {
return this.b$['javax.swing.text.html.StyleSheet'].css.cssValueToStyleConstantsValue$javax_swing_text_StyleConstants$O(key, value);
}}}return C$.superclazz.prototype.getAttribute$O.apply(this, [key]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "SmallConversionSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.StyleContext','.SmallAttributeSet']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (attrs) {
;C$.superclazz.c$$javax_swing_text_AttributeSet.apply(this,[attrs]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDefined$O',  function (key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.b$['javax.swing.text.html.StyleSheet'].css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
return C$.superclazz.prototype.isDefined$O.apply(this, [cssKey]);
}}return C$.superclazz.prototype.isDefined$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'getAttribute$O',  function (key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.b$['javax.swing.text.html.StyleSheet'].css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
var value=C$.superclazz.prototype.getAttribute$O.apply(this, [cssKey]);
if (value != null ) {
return this.b$['javax.swing.text.html.StyleSheet'].css.cssValueToStyleConstantsValue$javax_swing_text_StyleConstants$O(key, value);
}}}return C$.superclazz.prototype.getAttribute$O.apply(this, [key]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "SearchBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vector=null;
this.stringBuffer=null;
this.hashtable=null;
},1);

C$.$fields$=[['O',['vector','java.util.Vector','stringBuffer','StringBuffer','hashtable','java.util.Hashtable']]
,['O',['searchBuffers','java.util.Stack']]]

Clazz.newMeth(C$, 'obtainSearchBuffer$',  function () {
var sb;
try {
if (!C$.searchBuffers.empty$()) {
sb=C$.searchBuffers.pop$();
} else {
sb=Clazz.new_(C$);
}} catch (ese) {
if (Clazz.exceptionOf(ese,"java.util.EmptyStackException")){
sb=Clazz.new_(C$);
} else {
throw ese;
}
}
return sb;
}, 1);

Clazz.newMeth(C$, 'releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer',  function (sb) {
sb.empty$();
C$.searchBuffers.push$O(sb);
}, 1);

Clazz.newMeth(C$, 'getStringBuffer$',  function () {
if (this.stringBuffer == null ) {
this.stringBuffer=Clazz.new_($I$(2,1));
}return this.stringBuffer;
});

Clazz.newMeth(C$, 'getVector$',  function () {
if (this.vector == null ) {
this.vector=Clazz.new_($I$(3,1));
}return this.vector;
});

Clazz.newMeth(C$, 'getHashtable$',  function () {
if (this.hashtable == null ) {
this.hashtable=Clazz.new_($I$(4,1));
}return this.hashtable;
});

Clazz.newMeth(C$, 'empty$',  function () {
if (this.stringBuffer != null ) {
this.stringBuffer.setLength$I(0);
}if (this.vector != null ) {
this.vector.removeAllElements$();
}if (this.hashtable != null ) {
this.hashtable.clear$();
}});

C$.$static$=function(){C$.$static$=0;
C$.searchBuffers=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "BoxPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['HorizontalMargin',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['topMargin','bottomMargin','leftMargin','rightMargin'],'H',['marginFlags'],'O',['border','javax.swing.border.Border','binsets','java.awt.Insets','css','javax.swing.text.html.CSS','ss','javax.swing.text.html.StyleSheet','bg','java.awt.Color','bgPainter','javax.swing.text.html.StyleSheet.BackgroundImagePainter']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$javax_swing_text_html_CSS$javax_swing_text_html_StyleSheet',  function (a, css, ss) {
;C$.$init$.apply(this);
this.ss=ss;
this.css=css;
this.border=this.getBorder$javax_swing_text_AttributeSet(a);
this.binsets=this.border.getBorderInsets$java_awt_Component(null);
this.topMargin=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_TOP, a);
this.bottomMargin=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_BOTTOM, a);
this.leftMargin=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_LEFT, a);
this.rightMargin=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_RIGHT, a);
this.bg=ss.getBackground$javax_swing_text_AttributeSet(a);
if (ss.getBackgroundImage$javax_swing_text_AttributeSet(a) != null ) {
this.bgPainter=Clazz.new_($I$(6,1).c$$javax_swing_text_AttributeSet$javax_swing_text_html_CSS$javax_swing_text_html_StyleSheet,[a, css, ss]);
}}, 1);

Clazz.newMeth(C$, 'getBorder$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(7,1).c$$javax_swing_text_AttributeSet,[a]);
});

Clazz.newMeth(C$, 'getBorderColor$javax_swing_text_AttributeSet',  function (a) {
var color=this.css.getColor$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute(a, $I$(5).BORDER_COLOR);
if (color == null ) {
color=this.css.getColor$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute(a, $I$(5).COLOR);
if (color == null ) {
return $I$(8).black;
}}return color;
});

Clazz.newMeth(C$, 'getInset$I$javax_swing_text_View',  function (side, v) {
var a=v.getAttributes$();
var inset=0;
switch (side) {
case 2:
inset+=this.getOrientationMargin$javax_swing_text_html_StyleSheet_BoxPainter_HorizontalMargin$F$javax_swing_text_AttributeSet$Z($I$(9).LEFT, this.leftMargin, a, C$.isLeftToRight$javax_swing_text_View(v));
inset+=this.binsets.left;
inset+=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).PADDING_LEFT, a);
break;
case 4:
inset+=this.getOrientationMargin$javax_swing_text_html_StyleSheet_BoxPainter_HorizontalMargin$F$javax_swing_text_AttributeSet$Z($I$(9).RIGHT, this.rightMargin, a, C$.isLeftToRight$javax_swing_text_View(v));
inset+=this.binsets.right;
inset+=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).PADDING_RIGHT, a);
break;
case 1:
inset+=this.topMargin;
inset+=this.binsets.top;
inset+=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).PADDING_TOP, a);
break;
case 3:
inset+=this.bottomMargin;
inset+=this.binsets.bottom;
inset+=this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).PADDING_BOTTOM, a);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid side: " + side]);
}
return inset;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View',  function (g, x, y, w, h, v) {
var dx=0;
var dy=0;
var dw=0;
var dh=0;
var a=v.getAttributes$();
var isLeftToRight=C$.isLeftToRight$javax_swing_text_View(v);
var localLeftMargin=this.getOrientationMargin$javax_swing_text_html_StyleSheet_BoxPainter_HorizontalMargin$F$javax_swing_text_AttributeSet$Z($I$(9).LEFT, this.leftMargin, a, isLeftToRight);
var localRightMargin=this.getOrientationMargin$javax_swing_text_html_StyleSheet_BoxPainter_HorizontalMargin$F$javax_swing_text_AttributeSet$Z($I$(9).RIGHT, this.rightMargin, a, isLeftToRight);
if (!(Clazz.instanceOf(v, "javax.swing.text.html.HTMLEditorKit.HTMLFactory.BodyBlockView"))) {
dx=localLeftMargin;
dy=this.topMargin;
dw=-(localLeftMargin + localRightMargin);
dh=-(this.topMargin + this.bottomMargin);
}if (this.bg != null ) {
g.setColor$java_awt_Color(this.bg);
g.fillRect$I$I$I$I(((x + dx)|0), ((y + dy)|0), ((w + dw)|0), ((h + dh)|0));
}if (this.bgPainter != null ) {
this.bgPainter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View(g, x + dx, y + dy, w + dw, h + dh, v);
}x+=localLeftMargin;
y+=this.topMargin;
w-=localLeftMargin + localRightMargin;
h-=this.topMargin + this.bottomMargin;
if (Clazz.instanceOf(this.border, "javax.swing.border.BevelBorder")) {
var bw=(this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).BORDER_TOP_WIDTH, a)|0);
for (var i=bw - 1; i >= 0; i--) {
this.border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(null, g, (x|0) + i, (y|0) + i, (w|0) - 2 * i, (h|0) - 2 * i);
}
} else {
this.border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(null, g, (x|0), (y|0), (w|0), (h|0));
}});

Clazz.newMeth(C$, 'getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet',  function (key, a) {
return this.css.getLength$javax_swing_text_AttributeSet$javax_swing_text_html_CSS_Attribute$javax_swing_text_html_StyleSheet(a, key, this.ss);
});

Clazz.newMeth(C$, 'isLeftToRight$javax_swing_text_View',  function (v) {
var ret=true;
if (C$.isOrientationAware$javax_swing_text_View(v)) {
var container;
if (v != null  && (container=v.getContainer$()) != null  ) {
ret=container.getComponentOrientation$().isLeftToRight$();
}}return ret;
}, 1);

Clazz.newMeth(C$, 'isOrientationAware$javax_swing_text_View',  function (v) {
var ret=false;
var attr;
var obj;
if (v != null  && (attr=v.getElement$().getAttributes$()) != null   && Clazz.instanceOf((obj=attr.getAttribute$O($I$(10).NameAttribute)), "javax.swing.text.html.HTML.Tag")  && (obj === $I$(11).DIR  || obj === $I$(11).MENU   || obj === $I$(11).UL   || obj === $I$(11).OL  ) ) {
ret=true;
}return ret;
}, 1);

Clazz.newMeth(C$, 'getOrientationMargin$javax_swing_text_html_StyleSheet_BoxPainter_HorizontalMargin$F$javax_swing_text_AttributeSet$Z',  function (side, cssMargin, a, isLeftToRight) {
var margin=cssMargin;
var orientationMargin=cssMargin;
var cssMarginValue=null;
switch (side) {
case $I$(9).RIGHT:
{
orientationMargin=(isLeftToRight) ? this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_RIGHT_LTR, a) : this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_RIGHT_RTL, a);
cssMarginValue=a.getAttribute$O($I$(5).MARGIN_RIGHT);
}break;
case $I$(9).LEFT:
{
orientationMargin=(isLeftToRight) ? this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_LEFT_LTR, a) : this.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet($I$(5).MARGIN_LEFT_RTL, a);
cssMarginValue=a.getAttribute$O($I$(5).MARGIN_LEFT);
}break;
}
if (cssMarginValue == null  && orientationMargin != -2147483648  ) {
margin=orientationMargin;
}return margin;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.StyleSheet.BoxPainter, "HorizontalMargin", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LEFT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "RIGHT", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "ListPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ss=null;
this.img=null;
this.bulletgap=5;
},1);

C$.$fields$=[['Z',['checkedForStart','isLeftToRight'],'I',['start','bulletgap'],'O',['paintRect','java.awt.Rectangle','type','javax.swing.text.html.CSS.Value','imageurl','java.net.URL','ss','javax.swing.text.html.StyleSheet','img','javax.swing.Icon']]
,['O',['romanChars','char[][]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$javax_swing_text_html_StyleSheet',  function (attr, ss) {
;C$.$init$.apply(this);
this.ss=ss;
var imgstr=attr.getAttribute$O($I$(5).LIST_STYLE_IMAGE);
this.type=null;
if (imgstr != null  && !imgstr.equals$O("none") ) {
var tmpstr=null;
try {
var st=Clazz.new_([imgstr, "()"],$I$(12,1).c$$S$S);
if (st.hasMoreTokens$()) tmpstr=st.nextToken$();
if (st.hasMoreTokens$()) tmpstr=st.nextToken$();
var u=Clazz.new_($I$(13,1).c$$S,[tmpstr]);
this.img=Clazz.new_($I$(14,1).c$$java_net_URL,[u]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
if (tmpstr != null  && ss != null   && ss.getBase$() != null  ) {
try {
var u=Clazz.new_([ss.getBase$(), tmpstr],$I$(13,1).c$$java_net_URL$S);
this.img=Clazz.new_($I$(14,1).c$$java_net_URL,[u]);
} catch (murle) {
if (Clazz.exceptionOf(murle,"java.net.MalformedURLException")){
this.img=null;
} else {
throw murle;
}
}
} else {
this.img=null;
}} else {
throw e;
}
}
}if (this.img == null ) {
this.type=attr.getAttribute$O($I$(5).LIST_STYLE_TYPE);
}this.start=1;
this.paintRect=Clazz.new_($I$(15,1));
}, 1);

Clazz.newMeth(C$, 'getChildType$javax_swing_text_View',  function (childView) {
var childtype=childView.getAttributes$().getAttribute$O($I$(5).LIST_STYLE_TYPE);
if (childtype == null ) {
if (this.type == null ) {
var v=childView.getParent$();
var doc=v.getDocument$();
if ($I$(16,"matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag",[v.getElement$().getAttributes$(), $I$(11).OL])) {
childtype=$I$(17).DECIMAL;
} else {
childtype=$I$(17).DISC;
}} else {
childtype=this.type;
}}return childtype;
}, p$1);

Clazz.newMeth(C$, 'getStart$javax_swing_text_View',  function (parent) {
this.checkedForStart=true;
var element=parent.getElement$();
if (element != null ) {
var attr=element.getAttributes$();
var startValue;
if (attr != null  && attr.isDefined$O($I$(18).START)  && (startValue=attr.getAttribute$O($I$(18).START)) != null   && (Clazz.instanceOf(startValue, "java.lang.String")) ) {
try {
this.start=Integer.parseInt$S(startValue);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}}}, p$1);

Clazz.newMeth(C$, 'getRenderIndex$javax_swing_text_View$I',  function (parentView, childIndex) {
if (!this.checkedForStart) {
p$1.getStart$javax_swing_text_View.apply(this, [parentView]);
}var retIndex=childIndex;
for (var counter=childIndex; counter >= 0; counter--) {
var as=parentView.getElement$().getElement$I(counter).getAttributes$();
if (as.getAttribute$O($I$(10).NameAttribute) !== $I$(11).LI ) {
--retIndex;
} else if (as.isDefined$O($I$(18).VALUE)) {
var value=as.getAttribute$O($I$(18).VALUE);
if (value != null  && (Clazz.instanceOf(value, "java.lang.String")) ) {
try {
var iValue=Integer.parseInt$S(value);
return retIndex - counter + iValue;
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}}}
return retIndex + this.start;
}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View$I',  function (g, x, y, w, h, v, item) {
var cv=v.getView$I(item);
var host=v.getContainer$();
var name=cv.getElement$().getAttributes$().getAttribute$O($I$(10).NameAttribute);
if (!(Clazz.instanceOf(name, "javax.swing.text.html.HTML.Tag")) || name !== $I$(11).LI  ) {
return;
}this.isLeftToRight=host.getComponentOrientation$().isLeftToRight$();
var align=0;
if (cv.getViewCount$() > 0) {
var pView=cv.getView$I(0);
var cName=pView.getElement$().getAttributes$().getAttribute$O($I$(10).NameAttribute);
if ((cName === $I$(11).P  || cName === $I$(11).IMPLIED  ) && pView.getViewCount$() > 0 ) {
this.paintRect.setBounds$I$I$I$I((x|0), (y|0), (w|0), (h|0));
var shape=cv.getChildAllocation$I$java_awt_Shape(0, this.paintRect);
if (shape != null  && (shape=pView.getView$I(0).getChildAllocation$I$java_awt_Shape(0, shape)) != null  ) {
var rect=(Clazz.instanceOf(shape, "java.awt.Rectangle")) ? shape : shape.getBounds$();
align=pView.getView$I(0).getAlignment$I(1);
y=rect.y;
h=rect.height;
}}}var c=(host.isEnabled$() ? (this.ss != null  ? this.ss.getForeground$javax_swing_text_AttributeSet(cv.getAttributes$()) : host.getForeground$()) : $I$(19).getColor$O("textInactiveText"));
g.setColor$java_awt_Color(c);
if (this.img != null ) {
this.drawIcon$java_awt_Graphics$I$I$I$I$F$java_awt_Component(g, (x|0), (y|0), (w|0), (h|0), align, host);
return;
}var childtype=p$1.getChildType$javax_swing_text_View.apply(this, [cv]);
var font=(cv.getDocument$()).getFont$javax_swing_text_AttributeSet(cv.getAttributes$());
if (font != null ) {
g.setFont$java_awt_Font(font);
}if (childtype === $I$(17).SQUARE  || childtype === $I$(17).CIRCLE   || childtype === $I$(17).DISC  ) {
this.drawShape$java_awt_Graphics$javax_swing_text_html_CSS_Value$I$I$I$I$F(g, childtype, (x|0), (y|0), (w|0), (h|0), align);
} else if (childtype === $I$(17).DECIMAL ) {
this.drawLetter$java_awt_Graphics$C$I$I$I$I$F$I(g, "1", (x|0), (y|0), (w|0), (h|0), align, p$1.getRenderIndex$javax_swing_text_View$I.apply(this, [v, item]));
} else if (childtype === $I$(17).LOWER_ALPHA ) {
this.drawLetter$java_awt_Graphics$C$I$I$I$I$F$I(g, "a", (x|0), (y|0), (w|0), (h|0), align, p$1.getRenderIndex$javax_swing_text_View$I.apply(this, [v, item]));
} else if (childtype === $I$(17).UPPER_ALPHA ) {
this.drawLetter$java_awt_Graphics$C$I$I$I$I$F$I(g, "A", (x|0), (y|0), (w|0), (h|0), align, p$1.getRenderIndex$javax_swing_text_View$I.apply(this, [v, item]));
} else if (childtype === $I$(17).LOWER_ROMAN ) {
this.drawLetter$java_awt_Graphics$C$I$I$I$I$F$I(g, "i", (x|0), (y|0), (w|0), (h|0), align, p$1.getRenderIndex$javax_swing_text_View$I.apply(this, [v, item]));
} else if (childtype === $I$(17).UPPER_ROMAN ) {
this.drawLetter$java_awt_Graphics$C$I$I$I$I$F$I(g, "I", (x|0), (y|0), (w|0), (h|0), align, p$1.getRenderIndex$javax_swing_text_View$I.apply(this, [v, item]));
}});

Clazz.newMeth(C$, 'drawIcon$java_awt_Graphics$I$I$I$I$F$java_awt_Component',  function (g, ax, ay, aw, ah, align, c) {
var gap=this.isLeftToRight ? -(this.img.getIconWidth$() + this.bulletgap) : (aw + this.bulletgap);
var x=ax + gap;
var y=Math.max(ay, ay + ((align * ah)|0) - this.img.getIconHeight$());
this.img.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, x, y);
});

Clazz.newMeth(C$, 'drawShape$java_awt_Graphics$javax_swing_text_html_CSS_Value$I$I$I$I$F',  function (g, type, ax, ay, aw, ah, align) {
var gap=this.isLeftToRight ? -(this.bulletgap + 8) : (aw + this.bulletgap);
var x=ax + gap;
var y=Math.max(ay, ay + ((align * ah)|0) - 8);
if (type === $I$(17).SQUARE ) {
g.drawRect$I$I$I$I(x, y, 8, 8);
} else if (type === $I$(17).CIRCLE ) {
g.drawOval$I$I$I$I(x, y, 8, 8);
} else {
g.fillOval$I$I$I$I(x, y, 8, 8);
}});

Clazz.newMeth(C$, 'drawLetter$java_awt_Graphics$C$I$I$I$I$F$I',  function (g, letter, ax, ay, aw, ah, align, index) {
var str=this.formatItemNum$I$C(index, letter);
str=this.isLeftToRight ? str + "." : "." + str;
var fm=$I$(20).getFontMetrics$javax_swing_JComponent$java_awt_Graphics(null, g);
var stringwidth=$I$(20).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(null, fm, str);
var gap=this.isLeftToRight ? -(stringwidth + this.bulletgap) : (aw + this.bulletgap);
var x=ax + gap;
var y=Math.max(ay + fm.getAscent$(), ay + ((ah * align)|0));
$I$(20).drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(null, g, str, x, y);
});

Clazz.newMeth(C$, 'formatItemNum$I$C',  function (itemNum, type) {
var numStyle="1";
var uppercase=false;
var formattedNum;
switch (type.$c()) {
case 49:
default:
formattedNum=String.valueOf$I(itemNum);
break;
case 65:
uppercase=true;
case 97:
formattedNum=this.formatAlphaNumerals$I(itemNum);
break;
case 73:
uppercase=true;
case 105:
formattedNum=this.formatRomanNumerals$I(itemNum);
}
if (uppercase) {
formattedNum=formattedNum.toUpperCase$();
}return formattedNum;
});

Clazz.newMeth(C$, 'formatAlphaNumerals$I',  function (itemNum) {
var result;
if (itemNum > 26) {
result=this.formatAlphaNumerals$I((itemNum/26|0)) + this.formatAlphaNumerals$I(itemNum % 26);
} else {
result=String.valueOf$C(String.fromCharCode((97 + itemNum - 1)));
}return result;
});

Clazz.newMeth(C$, 'formatRomanNumerals$I',  function (num) {
return this.formatRomanNumerals$I$I(0, num);
});

Clazz.newMeth(C$, 'formatRomanNumerals$I$I',  function (level, num) {
if (num < 10) {
return this.formatRomanDigit$I$I(level, num);
} else {
return this.formatRomanNumerals$I$I(level + 1, (num/10|0)) + this.formatRomanDigit$I$I(level, num % 10);
}});

Clazz.newMeth(C$, 'formatRomanDigit$I$I',  function (level, digit) {
var result="";
if (digit == 9) {
result=result + C$.romanChars[level][0];
result=result + C$.romanChars[level + 1][0];
return result;
} else if (digit == 4) {
result=result + C$.romanChars[level][0];
result=result + C$.romanChars[level][1];
return result;
} else if (digit >= 5) {
result=result + C$.romanChars[level][1];
digit-=5;
}for (var i=0; i < digit; i++) {
result=result + C$.romanChars[level][0];
}
return result;
});

C$.$static$=function(){C$.$static$=0;
C$.romanChars=Clazz.array(Character.TYPE, -2, [Clazz.array(Character.TYPE, -1, ["i", "v"]), Clazz.array(Character.TYPE, -1, ["x", "l"]), Clazz.array(Character.TYPE, -1, ["c", "d"]), Clazz.array(Character.TYPE, -1, ["m", "?"])]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "BackgroundImagePainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['hPosition','vPosition'],'I',['paintX','paintY','paintMaxX','paintMaxY'],'H',['flags'],'O',['backgroundImage','javax.swing.ImageIcon']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$javax_swing_text_html_CSS$javax_swing_text_html_StyleSheet',  function (a, css, ss) {
;C$.$init$.apply(this);
this.backgroundImage=ss.getBackgroundImage$javax_swing_text_AttributeSet(a);
var pos=a.getAttribute$O($I$(5).BACKGROUND_POSITION);
if (pos != null ) {
this.hPosition=pos.getHorizontalPosition$();
this.vPosition=pos.getVerticalPosition$();
if (pos.isHorizontalPositionRelativeToSize$()) {
this.flags=($s$[0] = this.flags|(4), $s$[0]);
} else if (pos.isHorizontalPositionRelativeToSize$()) {
this.hPosition*=$I$(21).getFontSize$javax_swing_text_AttributeSet$I$javax_swing_text_html_StyleSheet(a, 12, ss);
}if (pos.isVerticalPositionRelativeToSize$()) {
this.flags=($s$[0] = this.flags|(8), $s$[0]);
} else if (pos.isVerticalPositionRelativeToFontSize$()) {
this.vPosition*=$I$(21).getFontSize$javax_swing_text_AttributeSet$I$javax_swing_text_html_StyleSheet(a, 12, ss);
}}var repeats=a.getAttribute$O($I$(5).BACKGROUND_REPEAT);
if (repeats == null  || repeats === $I$(17).BACKGROUND_REPEAT  ) {
this.flags=($s$[0] = this.flags|(3), $s$[0]);
} else if (repeats === $I$(17).BACKGROUND_REPEAT_X ) {
this.flags=($s$[0] = this.flags|(1), $s$[0]);
} else if (repeats === $I$(17).BACKGROUND_REPEAT_Y ) {
this.flags=($s$[0] = this.flags|(2), $s$[0]);
}}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View',  function (g, x, y, w, h, v) {
var clip=g.getClipRect$();
if (clip != null ) {
g=g.create$();
g.clipRect$I$I$I$I((x|0), (y|0), (w|0), (h|0));
}if ((this.flags & 3) == 0) {
var width=this.backgroundImage.getIconWidth$();
var height=this.backgroundImage.getIconWidth$();
if ((this.flags & 4) == 4) {
this.paintX=((x + w * this.hPosition - width * this.hPosition)|0);
} else {
this.paintX=(x|0) + (this.hPosition|0);
}if ((this.flags & 8) == 8) {
this.paintY=((y + h * this.vPosition - height * this.vPosition)|0);
} else {
this.paintY=(y|0) + (this.vPosition|0);
}if (clip == null  || !((this.paintX + width <= clip.x) || (this.paintY + height <= clip.y) || (this.paintX >= clip.x + clip.width) || (this.paintY >= clip.y + clip.height)  ) ) {
this.backgroundImage.paintIcon$java_awt_Component$java_awt_Graphics$I$I(null, g, this.paintX, this.paintY);
}} else {
var width=this.backgroundImage.getIconWidth$();
var height=this.backgroundImage.getIconHeight$();
if (width > 0 && height > 0 ) {
this.paintX=(x|0);
this.paintY=(y|0);
this.paintMaxX=((x + w)|0);
this.paintMaxY=((y + h)|0);
if (p$2.updatePaintCoordinates$java_awt_Rectangle$I$I.apply(this, [clip, width, height])) {
while (this.paintX < this.paintMaxX){
var ySpot=this.paintY;
while (ySpot < this.paintMaxY){
this.backgroundImage.paintIcon$java_awt_Component$java_awt_Graphics$I$I(null, g, this.paintX, ySpot);
ySpot+=height;
}
this.paintX+=width;
}
}}}if (clip != null ) {
g.dispose$();
}});

Clazz.newMeth(C$, 'updatePaintCoordinates$java_awt_Rectangle$I$I',  function (clip, width, height) {
if ((this.flags & 3) == 1) {
this.paintMaxY=this.paintY + 1;
} else if ((this.flags & 3) == 2) {
this.paintMaxX=this.paintX + 1;
}if (clip != null ) {
if ((this.flags & 3) == 1 && ((this.paintY + height <= clip.y) || (this.paintY > clip.y + clip.height) ) ) {
return false;
}if ((this.flags & 3) == 2 && ((this.paintX + width <= clip.x) || (this.paintX > clip.x + clip.width) ) ) {
return false;
}if ((this.flags & 1) == 1) {
if ((clip.x + clip.width) < this.paintMaxX) {
if ((clip.x + clip.width - this.paintX) % width == 0) {
this.paintMaxX=clip.x + clip.width;
} else {
this.paintMaxX=(((clip.x + clip.width - this.paintX)/width|0) + 1) * width + this.paintX;
}}if (clip.x > this.paintX) {
this.paintX=((clip.x - this.paintX)/width|0) * width + this.paintX;
}}if ((this.flags & 2) == 2) {
if ((clip.y + clip.height) < this.paintMaxY) {
if ((clip.y + clip.height - this.paintY) % height == 0) {
this.paintMaxY=clip.y + clip.height;
} else {
this.paintMaxY=(((clip.y + clip.height - this.paintY)/height|0) + 1) * height + this.paintY;
}}if (clip.y > this.paintY) {
this.paintY=((clip.y - this.paintY)/height|0) * height + this.paintY;
}}}return true;
}, p$2);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "ViewAttributeSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.html.MuxingAttributeSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['host','javax.swing.text.View']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_View',  function (v) {
Clazz.super_(C$, this);
this.host=v;
var doc=v.getDocument$();
var sb=$I$(22).obtainSearchBuffer$();
var muxList=sb.getVector$();
try {
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
var styles=this.b$['javax.swing.text.html.StyleSheet'];
var elem=v.getElement$();
var a=elem.getAttributes$();
var htmlAttr=styles.translateHTMLToCSS$javax_swing_text_AttributeSet(a);
if (htmlAttr.getAttributeCount$() != 0) {
muxList.addElement$O(htmlAttr);
}if (elem.isLeaf$()) {
var keys=a.getAttributeNames$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
if (Clazz.instanceOf(key, "javax.swing.text.html.HTML.Tag")) {
if (key === $I$(11).A ) {
var o=a.getAttribute$O(key);
if (o != null  && Clazz.instanceOf(o, "javax.swing.text.AttributeSet") ) {
var attr=o;
if (attr.getAttribute$O($I$(18).HREF) == null ) {
continue;
}}}var cssRule=styles.getRule$javax_swing_text_html_HTML_Tag$javax_swing_text_Element(key, elem);
if (cssRule != null ) {
muxList.addElement$O(cssRule);
}}}
} else {
var t=a.getAttribute$O($I$(10).NameAttribute);
var cssRule=styles.getRule$javax_swing_text_html_HTML_Tag$javax_swing_text_Element(t, elem);
if (cssRule != null ) {
muxList.addElement$O(cssRule);
}}}var attrs=Clazz.array($I$(23), [muxList.size$()]);
muxList.copyInto$OA(attrs);
this.setAttributes$javax_swing_text_AttributeSetA(attrs);
} finally {
$I$(22).releaseSearchBuffer$javax_swing_text_html_StyleSheet_SearchBuffer(sb);
}
}, 1);

Clazz.newMeth(C$, 'isDefined$O',  function (key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.b$['javax.swing.text.html.StyleSheet'].css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
key=cssKey;
}}return C$.superclazz.prototype.isDefined$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'getAttribute$O',  function (key) {
if (Clazz.instanceOf(key, "javax.swing.text.StyleConstants")) {
var cssKey=this.b$['javax.swing.text.html.StyleSheet'].css.styleConstantsKeyToCSSKey$javax_swing_text_StyleConstants(key);
if (cssKey != null ) {
var value=this.doGetAttribute$O(cssKey);
if (Clazz.instanceOf(value, "javax.swing.text.html.CSS.CssValue")) {
return (value).toStyleConstants$javax_swing_text_StyleConstants$javax_swing_text_View(key, this.host);
}}}return this.doGetAttribute$O(key);
});

Clazz.newMeth(C$, 'doGetAttribute$O',  function (key) {
var retValue=C$.superclazz.prototype.getAttribute$O.apply(this, [key]);
if (retValue != null ) {
return retValue;
}if (Clazz.instanceOf(key, "javax.swing.text.html.CSS.Attribute")) {
var css=key;
if (css.isInherited$()) {
var parent=this.getResolveParent$();
if (parent != null ) return parent.getAttribute$O(key);
}}return null;
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
if (this.host == null ) {
return null;
}var parent=this.host.getParent$();
return (parent != null ) ? parent.getAttributes$() : null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "ResolvedStyle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.html.MuxingAttributeSet', ['java.io.Serializable', 'javax.swing.text.Style']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['extendedIndex'],'S',['name']]]

Clazz.newMeth(C$, 'c$$S$javax_swing_text_AttributeSetA$I',  function (name, attrs, extendedIndex) {
;C$.superclazz.c$$javax_swing_text_AttributeSetA.apply(this,[attrs]);C$.$init$.apply(this);
this.name=name;
this.extendedIndex=extendedIndex;
}, 1);

Clazz.newMeth(C$, 'insertStyle$javax_swing_text_Style$I',  function (style, specificity) {
var attrs=this.getAttributes$();
var maxCounter=attrs.length;
var counter=0;
for (; counter < this.extendedIndex; counter++) {
if (specificity > $I$(24,"getSpecificity$S",[(attrs[counter]).getName$()])) {
break;
}}
this.insertAttributeSetAt$javax_swing_text_AttributeSet$I(style, counter);
++this.extendedIndex;
});

Clazz.newMeth(C$, 'removeStyle$javax_swing_text_Style',  function (style) {
var attrs=this.getAttributes$();
for (var counter=attrs.length - 1; counter >= 0; counter--) {
if (attrs[counter] === style ) {
this.removeAttributeSetAt$I(counter);
if (counter < this.extendedIndex) {
--this.extendedIndex;
}break;
}}
});

Clazz.newMeth(C$, 'insertExtendedStyleAt$javax_swing_text_Style$I',  function (attr, index) {
this.insertAttributeSetAt$javax_swing_text_AttributeSet$I(attr, this.extendedIndex + index);
});

Clazz.newMeth(C$, 'addExtendedStyle$javax_swing_text_Style',  function (attr) {
this.insertAttributeSetAt$javax_swing_text_AttributeSet$I(attr, this.getAttributes$().length);
});

Clazz.newMeth(C$, 'removeExtendedStyleAt$I',  function (index) {
this.removeAttributeSetAt$I(this.extendedIndex + index);
});

Clazz.newMeth(C$, 'matches$S',  function (selector) {
var sLast=selector.length$();
if (sLast == 0) {
return false;
}var thisLast=this.name.length$();
var sCurrent=selector.lastIndexOf$I(" ");
var thisCurrent=this.name.lastIndexOf$I(" ");
if (sCurrent >= 0) {
++sCurrent;
}if (thisCurrent >= 0) {
++thisCurrent;
}if (!this.matches$S$I$I$I$I(selector, sCurrent, sLast, thisCurrent, thisLast)) {
return false;
}while (sCurrent != -1){
sLast=sCurrent - 1;
sCurrent=selector.lastIndexOf$I$I(" ", sLast - 1);
if (sCurrent >= 0) {
++sCurrent;
}var match=false;
while (!match && thisCurrent != -1 ){
thisLast=thisCurrent - 1;
thisCurrent=this.name.lastIndexOf$I$I(" ", thisLast - 1);
if (thisCurrent >= 0) {
++thisCurrent;
}match=this.matches$S$I$I$I$I(selector, sCurrent, sLast, thisCurrent, thisLast);
}
if (!match) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'matches$S$I$I$I$I',  function (selector, sCurrent, sLast, thisCurrent, thisLast) {
sCurrent=Math.max(sCurrent, 0);
thisCurrent=Math.max(thisCurrent, 0);
var thisDotIndex=this.boundedIndexOf$S$C$I$I(this.name, ".", thisCurrent, thisLast);
var thisPoundIndex=this.boundedIndexOf$S$C$I$I(this.name, "#", thisCurrent, thisLast);
var sDotIndex=this.boundedIndexOf$S$C$I$I(selector, ".", sCurrent, sLast);
var sPoundIndex=this.boundedIndexOf$S$C$I$I(selector, "#", sCurrent, sLast);
if (sDotIndex != -1) {
if (thisDotIndex == -1) {
return false;
}if (sCurrent == sDotIndex) {
if ((thisLast - thisDotIndex) != (sLast - sDotIndex) || !selector.regionMatches$I$S$I$I(sCurrent, this.name, thisDotIndex, (thisLast - thisDotIndex)) ) {
return false;
}} else {
if ((sLast - sCurrent) != (thisLast - thisCurrent) || !selector.regionMatches$I$S$I$I(sCurrent, this.name, thisCurrent, (thisLast - thisCurrent)) ) {
return false;
}}return true;
}if (sPoundIndex != -1) {
if (thisPoundIndex == -1) {
return false;
}if (sCurrent == sPoundIndex) {
if ((thisLast - thisPoundIndex) != (sLast - sPoundIndex) || !selector.regionMatches$I$S$I$I(sCurrent, this.name, thisPoundIndex, (thisLast - thisPoundIndex)) ) {
return false;
}} else {
if ((sLast - sCurrent) != (thisLast - thisCurrent) || !selector.regionMatches$I$S$I$I(sCurrent, this.name, thisCurrent, (thisLast - thisCurrent)) ) {
return false;
}}return true;
}if (thisDotIndex != -1) {
return (((thisDotIndex - thisCurrent) == (sLast - sCurrent)) && selector.regionMatches$I$S$I$I(sCurrent, this.name, thisCurrent, thisDotIndex - thisCurrent) );
}if (thisPoundIndex != -1) {
return (((thisPoundIndex - thisCurrent) == (sLast - sCurrent)) && selector.regionMatches$I$S$I$I(sCurrent, this.name, thisCurrent, thisPoundIndex - thisCurrent) );
}return (((thisLast - thisCurrent) == (sLast - sCurrent)) && selector.regionMatches$I$S$I$I(sCurrent, this.name, thisCurrent, thisLast - thisCurrent) );
});

Clazz.newMeth(C$, 'boundedIndexOf$S$C$I$I',  function (string, search, start, end) {
var retValue=string.indexOf$I$I(search, start);
if (retValue >= end) {
return -1;
}return retValue;
});

Clazz.newMeth(C$, 'addAttribute$O$O',  function (name, value) {
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet',  function (attributes) {
});

Clazz.newMeth(C$, 'removeAttribute$O',  function (name) {
});

Clazz.newMeth(C$, 'removeAttributes$java_util_Enumeration',  function (names) {
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet',  function (attributes) {
});

Clazz.newMeth(C$, 'setResolveParent$javax_swing_text_AttributeSet',  function (parent) {
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return Clazz.array($I$(25), [0]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "SelectorMapping", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['specificity'],'O',['style','javax.swing.text.Style','children','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$I',  function (specificity) {
;C$.$init$.apply(this);
this.specificity=specificity;
}, 1);

Clazz.newMeth(C$, 'getSpecificity$',  function () {
return this.specificity;
});

Clazz.newMeth(C$, 'setStyle$javax_swing_text_Style',  function (style) {
this.style=style;
});

Clazz.newMeth(C$, 'getStyle$',  function () {
return this.style;
});

Clazz.newMeth(C$, 'getChildSelectorMapping$S$Z',  function (selector, create) {
var retValue=null;
if (this.children != null ) {
retValue=this.children.get$O(selector);
} else if (create) {
this.children=Clazz.new_($I$(26,1).c$$I,[7]);
}if (retValue == null  && create ) {
var specificity=this.getChildSpecificity$S(selector);
retValue=this.createChildSelectorMapping$I(specificity);
this.children.put$O$O(selector, retValue);
}return retValue;
});

Clazz.newMeth(C$, 'createChildSelectorMapping$I',  function (specificity) {
return Clazz.new_(C$.c$$I,[specificity]);
});

Clazz.newMeth(C$, 'getChildSpecificity$S',  function (selector) {
var firstChar=selector.charAt$I(0);
var specificity=this.getSpecificity$();
if (firstChar == ".") {
specificity+=100;
} else if (firstChar == "#") {
specificity+=10000;
} else {
specificity+=1;
if (selector.indexOf$I(".") != -1) {
specificity+=100;
}if (selector.indexOf$I("#") != -1) {
specificity+=10000;
}}return specificity;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleSheet, "CssParser", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javax.swing.text.html.CSSParser','javax.swing.text.html.CSSParser.CSSParserCallback']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectors=Clazz.new_($I$(3,1));
this.selectorTokens=Clazz.new_($I$(3,1));
this.declaration=Clazz.new_($I$(27,1));
this.parser=Clazz.new_($I$(28,1));
},1);

C$.$fields$=[['Z',['parsingDeclaration','isLink'],'S',['propertyName'],'O',['selectors','java.util.Vector','+selectorTokens','declaration','javax.swing.text.MutableAttributeSet','base','java.net.URL','parser','javax.swing.text.html.CSSParser']]]

Clazz.newMeth(C$, 'parseDeclaration$S',  function (string) {
try {
return this.parseDeclaration$java_io_Reader(Clazz.new_($I$(29,1).c$$S,[string]));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
return null;
});

Clazz.newMeth(C$, 'parseDeclaration$java_io_Reader',  function (r) {
this.parse$java_net_URL$java_io_Reader$Z$Z(this.base, r, true, false);
return this.declaration.copyAttributes$();
});

Clazz.newMeth(C$, 'parse$java_net_URL$java_io_Reader$Z$Z',  function (base, r, parseDeclaration, isLink) {
this.base=base;
this.isLink=isLink;
this.parsingDeclaration=parseDeclaration;
this.declaration.removeAttributes$javax_swing_text_AttributeSet(this.declaration);
this.selectorTokens.removeAllElements$();
this.selectors.removeAllElements$();
this.propertyName=null;
this.parser.parse$java_io_Reader$javax_swing_text_html_CSSParser_CSSParserCallback$Z(r, this, parseDeclaration);
});

Clazz.newMeth(C$, 'handleImport$S',  function (importString) {
var url=$I$(21).getURL$java_net_URL$S(this.base, importString);
if (url != null ) {
this.b$['javax.swing.text.html.StyleSheet'].importStyleSheet$java_net_URL.apply(this.b$['javax.swing.text.html.StyleSheet'], [url]);
}});

Clazz.newMeth(C$, 'handleSelector$S',  function (selector) {
if (!(selector.startsWith$S(".") || selector.startsWith$S("#") )) {
selector=selector.toLowerCase$();
}var length=selector.length$();
if (selector.endsWith$S(",")) {
if (length > 1) {
selector=selector.substring$I$I(0, length - 1);
this.selectorTokens.addElement$O(selector);
}p$3.addSelector.apply(this, []);
} else if (length > 0) {
this.selectorTokens.addElement$O(selector);
}});

Clazz.newMeth(C$, 'startRule$',  function () {
if (this.selectorTokens.size$() > 0) {
p$3.addSelector.apply(this, []);
}this.propertyName=null;
});

Clazz.newMeth(C$, 'handleProperty$S',  function (property) {
this.propertyName=property;
});

Clazz.newMeth(C$, 'handleValue$S',  function (value) {
if (this.propertyName != null  && value != null   && value.length$() > 0 ) {
var cssKey=$I$(21).getAttribute$S(this.propertyName);
if (cssKey != null ) {
if (cssKey === $I$(5).LIST_STYLE_IMAGE ) {
if (value != null  && !value.equals$O("none") ) {
var url=$I$(21).getURL$java_net_URL$S(this.base, value);
if (url != null ) {
value=url.toString();
}}}this.b$['javax.swing.text.html.StyleSheet'].addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S.apply(this.b$['javax.swing.text.html.StyleSheet'], [this.declaration, cssKey, value]);
}this.propertyName=null;
}});

Clazz.newMeth(C$, 'endRule$',  function () {
var n=this.selectors.size$();
for (var i=0; i < n; i++) {
var selector=this.selectors.elementAt$I(i);
if (selector.length > 0) {
this.b$['javax.swing.text.html.StyleSheet'].addRule$SA$javax_swing_text_AttributeSet$Z.apply(this.b$['javax.swing.text.html.StyleSheet'], [selector, this.declaration, this.isLink]);
}}
this.declaration.removeAttributes$javax_swing_text_AttributeSet(this.declaration);
this.selectors.removeAllElements$();
});

Clazz.newMeth(C$, 'addSelector',  function () {
var selector=Clazz.array(String, [this.selectorTokens.size$()]);
this.selectorTokens.copyInto$OA(selector);
this.selectors.addElement$O(selector);
this.selectorTokens.removeAllElements$();
}, p$3);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
