(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.text.NumberFormat','StringBuffer',['java.text.NumberFormat','.Field']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumberFormatter", null, 'javax.swing.text.InternationalFormatter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['specialChars']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
p$1.setN$java_text_NumberFormat.apply(this, [$I$(1).getNumberInstance$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_NumberFormat',  function (format) {
Clazz.super_(C$, this);
p$1.setN$java_text_NumberFormat.apply(this, [format]);
}, 1);

Clazz.newMeth(C$, 'setN$java_text_NumberFormat',  function (format) {
this.setFormat$java_text_Format(format);
this.setAllowsInvalid$Z(true);
this.setCommitsOnValidEdit$Z(false);
this.setOverwriteMode$Z(false);
}, p$1);

Clazz.newMeth(C$, 'setFormat$java_text_Format',  function (format) {
C$.superclazz.prototype.setFormat$java_text_Format.apply(this, [format]);
var dfs=p$1.getDecimalFormatSymbols.apply(this, []);
if (dfs != null ) {
var sb=Clazz.new_($I$(2,1));
sb.append$S(dfs.getCurrencySymbol$());
sb.append$C(dfs.getDecimalSeparator$());
sb.append$C(dfs.getGroupingSeparator$());
sb.append$S(dfs.getInfinity$());
sb.append$S(dfs.getInternationalCurrencySymbol$());
sb.append$C(dfs.getMinusSign$());
sb.append$C(dfs.getMonetaryDecimalSeparator$());
sb.append$S(dfs.getNaN$());
sb.append$C(dfs.getPercent$());
sb.append$C("+");
this.specialChars=sb.toString();
} else {
this.specialChars="";
}});

Clazz.newMeth(C$, 'stringToValueParse$S$java_text_Format',  function (text, f) {
if (f == null ) {
return text;
}var value=f.parseObject$S(text);
return p$1.convertValueToValueClass$O$Class.apply(this, [value, this.getValueClass$()]);
});

Clazz.newMeth(C$, 'convertValueToValueClass$O$Class',  function (value, valueClass) {
if (valueClass != null  && (Clazz.instanceOf(value, "java.lang.Number")) ) {
if (valueClass === Clazz.getClass(Integer) ) {
return  new Integer((value).intValue$());
} else if (valueClass === Clazz.getClass(Long) ) {
return  new Long((value).longValue$());
} else if (valueClass === Clazz.getClass(Float) ) {
return  new Float((value).floatValue$());
} else if (valueClass === Clazz.getClass(Double) ) {
return  new Double((value).doubleValue$());
} else if (valueClass === Clazz.getClass(Byte) ) {
return  new Byte((value).byteValue$());
} else if (valueClass === Clazz.getClass(Short) ) {
return  new Short((value).shortValue$());
}}return value;
}, p$1);

Clazz.newMeth(C$, 'getPositiveSign',  function () {
return "+";
}, p$1);

Clazz.newMeth(C$, 'getMinusSign',  function () {
var dfs=p$1.getDecimalFormatSymbols.apply(this, []);
if (dfs != null ) {
return dfs.getMinusSign$();
}return "-";
}, p$1);

Clazz.newMeth(C$, 'getDecimalSeparator',  function () {
var dfs=p$1.getDecimalFormatSymbols.apply(this, []);
if (dfs != null ) {
return dfs.getDecimalSeparator$();
}return ".";
}, p$1);

Clazz.newMeth(C$, 'getDecimalFormatSymbols',  function () {
var f=this.getFormat$();
if (Clazz.instanceOf(f, "java.text.DecimalFormat")) {
return (f).getDecimalFormatSymbols$();
}return null;
}, p$1);

Clazz.newMeth(C$, 'isLegalInsertText$S',  function (text) {
if (this.getAllowsInvalid$()) {
return true;
}for (var counter=text.length$() - 1; counter >= 0; counter--) {
var aChar=text.charAt$I(counter);
if (!Character.isDigit$C(aChar) && this.specialChars.indexOf$I(aChar) == -1 ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'isLiteral$java_util_Map',  function (attrs) {
if (!C$.superclazz.prototype.isLiteral$java_util_Map.apply(this, [attrs])) {
if (attrs == null ) {
return false;
}var size=attrs.size$();
if (attrs.get$O($I$(3).GROUPING_SEPARATOR) != null ) {
--size;
if (attrs.get$O($I$(3).INTEGER) != null ) {
--size;
}}if (attrs.get$O($I$(3).EXPONENT_SYMBOL) != null ) {
--size;
}if (attrs.get$O($I$(3).PERCENT) != null ) {
--size;
}if (attrs.get$O($I$(3).PERMILLE) != null ) {
--size;
}if (attrs.get$O($I$(3).CURRENCY) != null ) {
--size;
}if (attrs.get$O($I$(3).SIGN) != null ) {
--size;
}if (size == 0) {
return true;
}return false;
}return true;
});

Clazz.newMeth(C$, 'isNavigatable$I',  function (index) {
if (!C$.superclazz.prototype.isNavigatable$I.apply(this, [index])) {
if (this.getBufferedChar$I(index) == p$1.getDecimalSeparator.apply(this, [])) {
return true;
}return false;
}return true;
});

Clazz.newMeth(C$, 'getFieldFrom$I$I',  function (index, direction) {
if (this.isValidMask$()) {
var max=this.getFormattedTextField$().getDocument$().getLength$();
var iterator=this.getIterator$();
if (index >= max) {
index+=direction;
}while (index >= 0 && index < max ){
iterator.setIndex$I(index);
var attrs=iterator.getAttributes$();
if (attrs != null  && attrs.size$() > 0 ) {
var keys=attrs.keySet$().iterator$();
while (keys.hasNext$()){
var key=keys.next$();
if (Clazz.instanceOf(key, "java.text.NumberFormat.Field")) {
return key;
}}
}index+=direction;
}
}return null;
}, p$1);

Clazz.newMeth(C$, 'replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet',  function (fb, offset, length, string, attr) {
if (!this.getAllowsInvalid$() && length == 0  && string != null   && string.length$() == 1  && p$1.toggleSignIfNecessary$javax_swing_text_DocumentFilter_FilterBypass$I$C.apply(this, [fb, offset, string.charAt$I(0)]) ) {
return;
}C$.superclazz.prototype.replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this, [fb, offset, length, string, attr]);
});

Clazz.newMeth(C$, 'toggleSignIfNecessary$javax_swing_text_DocumentFilter_FilterBypass$I$C',  function (fb, offset, aChar) {
if (aChar == p$1.getMinusSign.apply(this, []) || aChar == p$1.getPositiveSign.apply(this, []) ) {
var field=p$1.getFieldFrom$I$I.apply(this, [offset, -1]);
var newValue;
try {
if (field == null  || (field !== $I$(3).EXPONENT  && field !== $I$(3).EXPONENT_SYMBOL   && field !== $I$(3).EXPONENT_SIGN  ) ) {
newValue=p$1.toggleSign$Z.apply(this, [(aChar == p$1.getPositiveSign.apply(this, []))]);
} else {
newValue=p$1.toggleExponentSign$I$C.apply(this, [offset, aChar]);
}if (newValue != null  && this.isValidValue$O$Z(newValue, false) ) {
var lc=this.getLiteralCountTo$I(offset);
var string=this.valueToString$O(newValue);
fb.remove$I$I(0, fb.getDocument$().getLength$());
fb.insertString$I$S$javax_swing_text_AttributeSet(0, string, null);
this.updateValue$O(newValue);
this.repositionCursor$I$I(this.getLiteralCountTo$I(offset) - lc + offset, 1);
return true;
}} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
this.invalidEdit$();
} else {
throw pe;
}
}
}return false;
}, p$1);

Clazz.newMeth(C$, 'toggleSign$Z',  function (positive) {
var value=this.stringToValue$S(this.getFormattedTextField$().getText$());
if (value != null ) {
var string=value.toString();
if (string != null  && string.length$() > 0 ) {
if (positive) {
if (string.charAt$I(0) == "-") {
string=string.substring$I(1);
}} else {
if (string.charAt$I(0) == "+") {
string=string.substring$I(1);
}if (string.length$() > 0 && string.charAt$I(0) != "-" ) {
string="-" + string;
}}if (string != null ) {
var valueClass=this.getValueClass$();
if (valueClass == null ) {
valueClass=value.getClass$();
}try {
var cons=valueClass.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(String)]));
if (cons != null ) {
return cons.newInstance$OA(Clazz.array(java.lang.Object, -1, [string]));
}} catch (ex) {
}
}}}return null;
}, p$1);

Clazz.newMeth(C$, 'toggleExponentSign$I$C',  function (offset, aChar) {
var string=this.getFormattedTextField$().getText$();
var replaceLength=0;
var loc=this.getAttributeStart$java_text_AttributedCharacterIterator_Attribute($I$(3).EXPONENT_SIGN);
if (loc >= 0) {
replaceLength=1;
offset=loc;
}if (aChar == p$1.getPositiveSign.apply(this, [])) {
string=this.getReplaceString$I$I$S(offset, replaceLength, null);
} else {
string=this.getReplaceString$I$I$S(offset, replaceLength,  String.instantialize(Clazz.array(Character.TYPE, -1, [aChar])));
}return this.stringToValue$S(string);
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
