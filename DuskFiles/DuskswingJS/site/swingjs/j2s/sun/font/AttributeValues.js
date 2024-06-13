(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.EAttribute','java.awt.geom.AffineTransform','InternalError','java.util.HashMap','StringBuilder','java.awt.font.TextAttribute','java.awt.font.TransformAttribute','java.awt.Toolkit',['java.awt.geom.Point2D','.Double']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AttributeValues", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.family="Default";
this.weight=1.0;
this.width=1.0;
this.size=12.0;
this.justification=1.0;
this.imUnderline=($b$[0] = -1, $b$[0]);
this.underline=($b$[0] = -1, $b$[0]);
this.runDirection=($b$[0] = -2, $b$[0]);
},1);

C$.$fields$=[['Z',['strikethrough','swapColors'],'B',['imUnderline','superscript','underline','runDirection','bidiEmbedding','kerning','ligatures'],'F',['weight','width','posture','size','tracking','justification'],'I',['defined','nondefault'],'S',['family'],'O',['numericShaping','java.awt.font.NumericShaper','transform','java.awt.geom.AffineTransform','charReplacement','java.awt.font.GraphicAttribute','foreground','java.awt.Paint','+background','imHighlight','java.lang.Object','font','java.awt.Font','baselineTransform','java.awt.geom.AffineTransform','+charTransform']]
,['I',['MASK_ALL'],'O',['DEFAULT','sun.font.AttributeValues']]]

Clazz.newMeth(C$, 'getFamily$',  function () {
return this.family;
});

Clazz.newMeth(C$, 'setFamily$S',  function (f) {
this.family=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EFAMILY]);
});

Clazz.newMeth(C$, 'getWeight$',  function () {
return this.weight;
});

Clazz.newMeth(C$, 'setWeight$F',  function (f) {
this.weight=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EWEIGHT]);
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$F',  function (f) {
this.width=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EWIDTH]);
});

Clazz.newMeth(C$, 'getPosture$',  function () {
return this.posture;
});

Clazz.newMeth(C$, 'setPosture$F',  function (f) {
this.posture=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EPOSTURE]);
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'setSize$F',  function (f) {
this.size=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ESIZE]);
});

Clazz.newMeth(C$, 'getTransform$',  function () {
return this.transform;
});

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform',  function (f) {
this.transform=(f == null  || f.isIdentity$() ) ? C$.DEFAULT.transform : Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[f]);
this.updateDerivedTransforms$();
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ETRANSFORM]);
});

Clazz.newMeth(C$, 'setTransform$java_awt_font_TransformAttribute',  function (f) {
this.transform=(f == null  || f.isIdentity$() ) ? C$.DEFAULT.transform : f.getTransform$();
this.updateDerivedTransforms$();
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ETRANSFORM]);
});

Clazz.newMeth(C$, 'getSuperscript$',  function () {
return this.superscript;
});

Clazz.newMeth(C$, 'setSuperscript$I',  function (f) {
this.superscript=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ESUPERSCRIPT]);
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
this.font=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EFONT]);
});

Clazz.newMeth(C$, 'getCharReplacement$',  function () {
return this.charReplacement;
});

Clazz.newMeth(C$, 'setCharReplacement$java_awt_font_GraphicAttribute',  function (f) {
this.charReplacement=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ECHAR_REPLACEMENT]);
});

Clazz.newMeth(C$, 'getForeground$',  function () {
return this.foreground;
});

Clazz.newMeth(C$, 'setForeground$java_awt_Paint',  function (f) {
this.foreground=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EFOREGROUND]);
});

Clazz.newMeth(C$, 'getBackground$',  function () {
return this.background;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Paint',  function (f) {
this.background=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EBACKGROUND]);
});

Clazz.newMeth(C$, 'getUnderline$',  function () {
return this.underline;
});

Clazz.newMeth(C$, 'setUnderline$I',  function (f) {
this.underline=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EUNDERLINE]);
});

Clazz.newMeth(C$, 'getStrikethrough$',  function () {
return this.strikethrough;
});

Clazz.newMeth(C$, 'setStrikethrough$Z',  function (f) {
this.strikethrough=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ESTRIKETHROUGH]);
});

Clazz.newMeth(C$, 'getRunDirection$',  function () {
return this.runDirection;
});

Clazz.newMeth(C$, 'setRunDirection$I',  function (f) {
this.runDirection=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ERUN_DIRECTION]);
});

Clazz.newMeth(C$, 'getBidiEmbedding$',  function () {
return this.bidiEmbedding;
});

Clazz.newMeth(C$, 'setBidiEmbedding$I',  function (f) {
this.bidiEmbedding=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EBIDI_EMBEDDING]);
});

Clazz.newMeth(C$, 'getJustification$',  function () {
return this.justification;
});

Clazz.newMeth(C$, 'setJustification$F',  function (f) {
this.justification=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EJUSTIFICATION]);
});

Clazz.newMeth(C$, 'getInputMethodHighlight$',  function () {
return this.imHighlight;
});

Clazz.newMeth(C$, 'setInputMethodHighlight$java_text_Annotation',  function (f) {
this.imHighlight=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EINPUT_METHOD_HIGHLIGHT]);
});

Clazz.newMeth(C$, 'setInputMethodHighlight$java_awt_im_InputMethodHighlight',  function (f) {
this.imHighlight=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EINPUT_METHOD_HIGHLIGHT]);
});

Clazz.newMeth(C$, 'getInputMethodUnderline$',  function () {
return this.imUnderline;
});

Clazz.newMeth(C$, 'setInputMethodUnderline$I',  function (f) {
this.imUnderline=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EINPUT_METHOD_UNDERLINE]);
});

Clazz.newMeth(C$, 'getSwapColors$',  function () {
return this.swapColors;
});

Clazz.newMeth(C$, 'setSwapColors$Z',  function (f) {
this.swapColors=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ESWAP_COLORS]);
});

Clazz.newMeth(C$, 'getNumericShaping$',  function () {
return this.numericShaping;
});

Clazz.newMeth(C$, 'setNumericShaping$java_awt_font_NumericShaper',  function (f) {
this.numericShaping=f;
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ENUMERIC_SHAPING]);
});

Clazz.newMeth(C$, 'getKerning$',  function () {
return this.kerning;
});

Clazz.newMeth(C$, 'setKerning$I',  function (f) {
this.kerning=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).EKERNING]);
});

Clazz.newMeth(C$, 'getTracking$',  function () {
return this.tracking;
});

Clazz.newMeth(C$, 'setTracking$F',  function (f) {
this.tracking=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ETRACKING]);
});

Clazz.newMeth(C$, 'getLigatures$',  function () {
return this.ligatures;
});

Clazz.newMeth(C$, 'setLigatures$I',  function (f) {
this.ligatures=($b$[0] = f, $b$[0]);
p$1.update$sun_font_EAttribute.apply(this, [$I$(1).ELIGATURES]);
});

Clazz.newMeth(C$, 'getBaselineTransform$',  function () {
return this.baselineTransform;
});

Clazz.newMeth(C$, 'getCharTransform$',  function () {
return this.charTransform;
});

Clazz.newMeth(C$, 'getMask$sun_font_EAttribute',  function (att) {
return att.mask;
}, 1);

Clazz.newMeth(C$, 'getMask$sun_font_EAttributeA',  function (atts) {
var mask=0;
for (var a, $a = 0, $$a = atts; $a<$$a.length&&((a=($$a[$a])),1);$a++) {
mask|=a.mask;
}
return mask;
}, 1);

Clazz.newMeth(C$, 'unsetDefault$',  function () {
this.defined&=this.nondefault;
});

Clazz.newMeth(C$, 'defineAll$I',  function (mask) {
this.defined|=mask;
if ((this.defined & $I$(1).EBASELINE_TRANSFORM.mask) != 0) {
throw Clazz.new_($I$(3,1).c$$S,["can\'t define derived attribute"]);
}});

Clazz.newMeth(C$, 'allDefined$I',  function (mask) {
return (this.defined & mask) == mask;
});

Clazz.newMeth(C$, 'anyDefined$I',  function (mask) {
return (this.defined & mask) != 0;
});

Clazz.newMeth(C$, 'anyNonDefault$I',  function (mask) {
return (this.nondefault & mask) != 0;
});

Clazz.newMeth(C$, 'isDefined$sun_font_EAttribute',  function (a) {
return (this.defined & a.mask) != 0;
});

Clazz.newMeth(C$, 'isNonDefault$sun_font_EAttribute',  function (a) {
return (this.nondefault & a.mask) != 0;
});

Clazz.newMeth(C$, 'setDefault$sun_font_EAttribute',  function (a) {
if (a.att == null ) {
throw Clazz.new_($I$(3,1).c$$S,["can't set default derived attribute: " + a]);
}p$1.i_set$sun_font_EAttribute$sun_font_AttributeValues.apply(this, [a, C$.DEFAULT]);
this.defined|=a.mask;
this.nondefault&=~a.mask;
});

Clazz.newMeth(C$, 'unset$sun_font_EAttribute',  function (a) {
if (a.att == null ) {
throw Clazz.new_($I$(3,1).c$$S,["can't unset derived attribute: " + a]);
}p$1.i_set$sun_font_EAttribute$sun_font_AttributeValues.apply(this, [a, C$.DEFAULT]);
this.defined&=~a.mask;
this.nondefault&=~a.mask;
});

Clazz.newMeth(C$, 'set$sun_font_EAttribute$sun_font_AttributeValues',  function (a, src) {
if (a.att == null ) {
throw Clazz.new_($I$(3,1).c$$S,["can't set derived attribute: " + a]);
}if (src == null  || src === C$.DEFAULT  ) {
this.setDefault$sun_font_EAttribute(a);
} else {
if ((src.defined & a.mask) != 0) {
p$1.i_set$sun_font_EAttribute$sun_font_AttributeValues.apply(this, [a, src]);
p$1.update$sun_font_EAttribute.apply(this, [a]);
}}});

Clazz.newMeth(C$, 'set$sun_font_EAttribute$O',  function (a, o) {
if (a.att == null ) {
throw Clazz.new_($I$(3,1).c$$S,["can't set derived attribute: " + a]);
}if (o != null ) {
try {
p$1.i_set$sun_font_EAttribute$O.apply(this, [a, o]);
p$1.update$sun_font_EAttribute.apply(this, [a]);
return;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}this.setDefault$sun_font_EAttribute(a);
});

Clazz.newMeth(C$, 'get$sun_font_EAttribute',  function (a) {
if (a.att == null ) {
throw Clazz.new_($I$(3,1).c$$S,["can't get derived attribute: " + a]);
}if ((this.nondefault & a.mask) != 0) {
return p$1.i_get$sun_font_EAttribute.apply(this, [a]);
}return null;
});

Clazz.newMeth(C$, 'merge$java_util_Map',  function (map) {
return this.merge$java_util_Map$I(map, C$.MASK_ALL);
});

Clazz.newMeth(C$, 'merge$java_util_Map$I',  function (map, mask) {
if (Clazz.instanceOf(map, "sun.font.AttributeMap") && (map).getValues$() != null  ) {
this.merge$sun_font_AttributeValues$I((map).getValues$(), mask);
} else if (map != null  && !map.isEmpty$() ) {
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var ea=$I$(1,"forAttribute$java_text_AttributedCharacterIterator_Attribute",[e.getKey$()]);
if (ea != null  && (mask & ea.mask) != 0 ) {
this.set$sun_font_EAttribute$O(ea, e.getValue$());
}}
}return this;
});

Clazz.newMeth(C$, 'merge$sun_font_AttributeValues',  function (src) {
return this.merge$sun_font_AttributeValues$I(src, C$.MASK_ALL);
});

Clazz.newMeth(C$, 'merge$sun_font_AttributeValues$I',  function (src, mask) {
var m=mask & src.defined;
for (var ea, $ea = 0, $$ea = $I$(1).atts; $ea<$$ea.length&&((ea=($$ea[$ea])),1);$ea++) {
if (m == 0) {
break;
}if ((m & ea.mask) != 0) {
m&=~ea.mask;
p$1.i_set$sun_font_EAttribute$sun_font_AttributeValues.apply(this, [ea, src]);
p$1.update$sun_font_EAttribute.apply(this, [ea]);
}}
return this;
});

Clazz.newMeth(C$, 'fromMap$java_util_Map',  function (map) {
return C$.fromMap$java_util_Map$I(map, C$.MASK_ALL);
}, 1);

Clazz.newMeth(C$, 'fromMap$java_util_Map$I',  function (map, mask) {
return Clazz.new_(C$).merge$java_util_Map$I(map, mask);
}, 1);

Clazz.newMeth(C$, 'toMap$java_util_Map',  function (fill) {
if (fill == null ) {
fill=Clazz.new_($I$(4,1));
}for (var m=this.defined, i=0; m != 0; ++i) {
var ea=$I$(1).atts[i];
if ((m & ea.mask) != 0) {
m&=~ea.mask;
fill.put$O$O(ea.att, this.get$sun_font_EAttribute(ea));
}}
return fill;
});

Clazz.newMeth(C$, 'is16Hashtable$java_util_Hashtable',  function (ht) {
return ht.containsKey$O("sun.font.attributevalues.defined_key");
}, 1);

Clazz.newMeth(C$, 'fromSerializableHashtable$java_util_Hashtable',  function (ht) {
var result=Clazz.new_(C$);
if (ht != null  && !ht.isEmpty$() ) {
for (var e, $e = ht.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var val=e.getValue$();
if (key.equals$O("sun.font.attributevalues.defined_key")) {
result.defineAll$I((val).intValue$());
} else {
try {
var ea=$I$(1).forAttribute$java_text_AttributedCharacterIterator_Attribute(key);
if (ea != null ) {
result.set$sun_font_EAttribute$O(ea, val);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassCastException")){
} else {
throw ex;
}
}
}}
}return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.defined << 8 ^ this.nondefault;
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
try {
return this.equals$sun_font_AttributeValues(rhs);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'equals$sun_font_AttributeValues',  function (rhs) {
if (rhs == null ) return false;
if (rhs === this ) return true;
return this.defined == rhs.defined && this.nondefault == rhs.nondefault  && this.underline == rhs.underline  && this.strikethrough == rhs.strikethrough   && this.superscript == rhs.superscript  && this.width == rhs.width   && this.kerning == rhs.kerning  && this.tracking == rhs.tracking   && this.ligatures == rhs.ligatures  && this.runDirection == rhs.runDirection  && this.bidiEmbedding == rhs.bidiEmbedding  && this.swapColors == rhs.swapColors   && C$.equals$O$O(this.transform, rhs.transform)  && C$.equals$O$O(this.foreground, rhs.foreground)  && C$.equals$O$O(this.background, rhs.background)  && C$.equals$O$O(this.numericShaping, rhs.numericShaping)  && C$.equals$O$O(Float.valueOf$F(this.justification), Float.valueOf$F(rhs.justification))  && C$.equals$O$O(this.charReplacement, rhs.charReplacement)  && this.size == rhs.size   && this.weight == rhs.weight   && this.posture == rhs.posture   && C$.equals$O$O(this.family, rhs.family)  && C$.equals$O$O(this.font, rhs.font)  && this.imUnderline == rhs.imUnderline  && C$.equals$O$O(this.imHighlight, rhs.imHighlight) ;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var result=Clazz.clone(this);
if (this.transform != null ) {
result.transform=Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[this.transform]);
result.updateDerivedTransforms$();
}return result;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var b=Clazz.new_($I$(5,1));
b.append$C("{");
for (var m=this.defined, i=0; m != 0; ++i) {
var ea=$I$(1).atts[i];
if ((m & ea.mask) != 0) {
m&=~ea.mask;
if (b.length$() > 1) {
b.append$S(", ");
}b.append$O(ea);
b.append$C("=");
switch (ea) {
case $I$(1).EFAMILY:
b.append$C("\"");
b.append$S(this.family);
b.append$C("\"");
break;
case $I$(1).EWEIGHT:
b.append$F(this.weight);
break;
case $I$(1).EWIDTH:
b.append$F(this.width);
break;
case $I$(1).EPOSTURE:
b.append$F(this.posture);
break;
case $I$(1).ESIZE:
b.append$F(this.size);
break;
case $I$(1).ETRANSFORM:
b.append$O(this.transform);
break;
case $I$(1).ESUPERSCRIPT:
b.append$I(this.superscript);
break;
case $I$(1).EFONT:
b.append$O(this.font);
break;
case $I$(1).ECHAR_REPLACEMENT:
b.append$O(this.charReplacement);
break;
case $I$(1).EFOREGROUND:
b.append$O(this.foreground);
break;
case $I$(1).EBACKGROUND:
b.append$O(this.background);
break;
case $I$(1).EUNDERLINE:
b.append$I(this.underline);
break;
case $I$(1).ESTRIKETHROUGH:
b.append$Z(this.strikethrough);
break;
case $I$(1).ERUN_DIRECTION:
b.append$I(this.runDirection);
break;
case $I$(1).EBIDI_EMBEDDING:
b.append$I(this.bidiEmbedding);
break;
case $I$(1).EJUSTIFICATION:
b.append$F(this.justification);
break;
case $I$(1).EINPUT_METHOD_HIGHLIGHT:
b.append$O(this.imHighlight);
break;
case $I$(1).EINPUT_METHOD_UNDERLINE:
b.append$I(this.imUnderline);
break;
case $I$(1).ESWAP_COLORS:
b.append$Z(this.swapColors);
break;
case $I$(1).ENUMERIC_SHAPING:
b.append$O(this.numericShaping);
break;
case $I$(1).EKERNING:
b.append$I(this.kerning);
break;
case $I$(1).ELIGATURES:
b.append$I(this.ligatures);
break;
case $I$(1).ETRACKING:
b.append$F(this.tracking);
break;
default:
throw Clazz.new_($I$(3,1));
}
if ((this.nondefault & ea.mask) == 0) {
b.append$C("*");
}}}
b.append$S("[btx=" + this.baselineTransform + ", ctx=" + this.charTransform + "]" );
b.append$C("}");
return b.toString();
});

Clazz.newMeth(C$, 'equals$O$O',  function (lhs, rhs) {
return lhs == null  ? rhs == null  : lhs.equals$O(rhs);
}, 1);

Clazz.newMeth(C$, 'update$sun_font_EAttribute',  function (a) {
this.defined|=a.mask;
if (p$1.i_validate$sun_font_EAttribute.apply(this, [a])) {
if (p$1.i_equals$sun_font_EAttribute$sun_font_AttributeValues.apply(this, [a, C$.DEFAULT])) {
this.nondefault&=~a.mask;
} else {
this.nondefault|=a.mask;
}} else {
this.setDefault$sun_font_EAttribute(a);
}}, p$1);

Clazz.newMeth(C$, 'i_set$sun_font_EAttribute$sun_font_AttributeValues',  function (a, src) {
switch (a) {
case $I$(1).EFAMILY:
this.family=src.family;
break;
case $I$(1).EWEIGHT:
this.weight=src.weight;
break;
case $I$(1).EWIDTH:
this.width=src.width;
break;
case $I$(1).EPOSTURE:
this.posture=src.posture;
break;
case $I$(1).ESIZE:
this.size=src.size;
break;
case $I$(1).ETRANSFORM:
this.transform=src.transform;
this.updateDerivedTransforms$();
break;
case $I$(1).ESUPERSCRIPT:
this.superscript=src.superscript;
break;
case $I$(1).EFONT:
this.font=src.font;
break;
case $I$(1).ECHAR_REPLACEMENT:
this.charReplacement=src.charReplacement;
break;
case $I$(1).EFOREGROUND:
this.foreground=src.foreground;
break;
case $I$(1).EBACKGROUND:
this.background=src.background;
break;
case $I$(1).EUNDERLINE:
this.underline=src.underline;
break;
case $I$(1).ESTRIKETHROUGH:
this.strikethrough=src.strikethrough;
break;
case $I$(1).ERUN_DIRECTION:
this.runDirection=src.runDirection;
break;
case $I$(1).EBIDI_EMBEDDING:
this.bidiEmbedding=src.bidiEmbedding;
break;
case $I$(1).EJUSTIFICATION:
this.justification=src.justification;
break;
case $I$(1).EINPUT_METHOD_HIGHLIGHT:
this.imHighlight=src.imHighlight;
break;
case $I$(1).EINPUT_METHOD_UNDERLINE:
this.imUnderline=src.imUnderline;
break;
case $I$(1).ESWAP_COLORS:
this.swapColors=src.swapColors;
break;
case $I$(1).ENUMERIC_SHAPING:
this.numericShaping=src.numericShaping;
break;
case $I$(1).EKERNING:
this.kerning=src.kerning;
break;
case $I$(1).ELIGATURES:
this.ligatures=src.ligatures;
break;
case $I$(1).ETRACKING:
this.tracking=src.tracking;
break;
default:
throw Clazz.new_($I$(3,1));
}
}, p$1);

Clazz.newMeth(C$, 'i_equals$sun_font_EAttribute$sun_font_AttributeValues',  function (a, src) {
switch (a) {
case $I$(1).EFAMILY:
return C$.equals$O$O(this.family, src.family);
case $I$(1).EWEIGHT:
return this.weight == src.weight ;
case $I$(1).EWIDTH:
return this.width == src.width ;
case $I$(1).EPOSTURE:
return this.posture == src.posture ;
case $I$(1).ESIZE:
return this.size == src.size ;
case $I$(1).ETRANSFORM:
return C$.equals$O$O(this.transform, src.transform);
case $I$(1).ESUPERSCRIPT:
return this.superscript == src.superscript;
case $I$(1).EFONT:
return C$.equals$O$O(this.font, src.font);
case $I$(1).ECHAR_REPLACEMENT:
return C$.equals$O$O(this.charReplacement, src.charReplacement);
case $I$(1).EFOREGROUND:
return C$.equals$O$O(this.foreground, src.foreground);
case $I$(1).EBACKGROUND:
return C$.equals$O$O(this.background, src.background);
case $I$(1).EUNDERLINE:
return this.underline == src.underline;
case $I$(1).ESTRIKETHROUGH:
return this.strikethrough == src.strikethrough ;
case $I$(1).ERUN_DIRECTION:
return this.runDirection == src.runDirection;
case $I$(1).EBIDI_EMBEDDING:
return this.bidiEmbedding == src.bidiEmbedding;
case $I$(1).EJUSTIFICATION:
return this.justification == src.justification ;
case $I$(1).EINPUT_METHOD_HIGHLIGHT:
return C$.equals$O$O(this.imHighlight, src.imHighlight);
case $I$(1).EINPUT_METHOD_UNDERLINE:
return this.imUnderline == src.imUnderline;
case $I$(1).ESWAP_COLORS:
return this.swapColors == src.swapColors ;
case $I$(1).ENUMERIC_SHAPING:
return C$.equals$O$O(this.numericShaping, src.numericShaping);
case $I$(1).EKERNING:
return this.kerning == src.kerning;
case $I$(1).ELIGATURES:
return this.ligatures == src.ligatures;
case $I$(1).ETRACKING:
return this.tracking == src.tracking ;
default:
throw Clazz.new_($I$(3,1));
}
}, p$1);

Clazz.newMeth(C$, 'i_set$sun_font_EAttribute$O',  function (a, o) {
switch (a) {
case $I$(1).EFAMILY:
this.family=(o).trim$();
break;
case $I$(1).EWEIGHT:
this.weight=(o).floatValue$();
break;
case $I$(1).EWIDTH:
this.width=(o).floatValue$();
break;
case $I$(1).EPOSTURE:
this.posture=(o).floatValue$();
break;
case $I$(1).ESIZE:
this.size=(o).floatValue$();
break;
case $I$(1).ETRANSFORM:
{
if (Clazz.instanceOf(o, "java.awt.font.TransformAttribute")) {
var ta=o;
if (ta.isIdentity$()) {
this.transform=null;
} else {
this.transform=ta.getTransform$();
}} else {
this.transform=Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[o]);
}this.updateDerivedTransforms$();
}break;
case $I$(1).ESUPERSCRIPT:
this.superscript=($b$[0] = (o).intValue$(), $b$[0]);
break;
case $I$(1).EFONT:
this.font=o;
break;
case $I$(1).ECHAR_REPLACEMENT:
this.charReplacement=o;
break;
case $I$(1).EFOREGROUND:
this.foreground=o;
break;
case $I$(1).EBACKGROUND:
this.background=o;
break;
case $I$(1).EUNDERLINE:
this.underline=($b$[0] = (o).intValue$(), $b$[0]);
break;
case $I$(1).ESTRIKETHROUGH:
this.strikethrough=(o).booleanValue$();
break;
case $I$(1).ERUN_DIRECTION:
{
if (Clazz.instanceOf(o, "java.lang.Boolean")) {
this.runDirection=($b$[0] = ($I$(6).RUN_DIRECTION_LTR.equals$O(o) ? 0 : 1), $b$[0]);
} else {
this.runDirection=($b$[0] = (o).intValue$(), $b$[0]);
}}break;
case $I$(1).EBIDI_EMBEDDING:
this.bidiEmbedding=($b$[0] = (o).intValue$(), $b$[0]);
break;
case $I$(1).EJUSTIFICATION:
this.justification=(o).floatValue$();
break;
case $I$(1).EINPUT_METHOD_HIGHLIGHT:
{
if (Clazz.instanceOf(o, "java.text.Annotation")) {
var at=o;
this.imHighlight=at.getValue$();
} else {
this.imHighlight=o;
}}break;
case $I$(1).EINPUT_METHOD_UNDERLINE:
this.imUnderline=($b$[0] = (o).intValue$(), $b$[0]);
break;
case $I$(1).ESWAP_COLORS:
this.swapColors=(o).booleanValue$();
break;
case $I$(1).ENUMERIC_SHAPING:
this.numericShaping=o;
break;
case $I$(1).EKERNING:
this.kerning=($b$[0] = (o).intValue$(), $b$[0]);
break;
case $I$(1).ELIGATURES:
this.ligatures=($b$[0] = (o).intValue$(), $b$[0]);
break;
case $I$(1).ETRACKING:
this.tracking=(o).floatValue$();
break;
default:
throw Clazz.new_($I$(3,1));
}
}, p$1);

Clazz.newMeth(C$, 'i_get$sun_font_EAttribute',  function (a) {
switch (a) {
case $I$(1).EFAMILY:
return this.family;
case $I$(1).EWEIGHT:
return Float.valueOf$F(this.weight);
case $I$(1).EWIDTH:
return Float.valueOf$F(this.width);
case $I$(1).EPOSTURE:
return Float.valueOf$F(this.posture);
case $I$(1).ESIZE:
return Float.valueOf$F(this.size);
case $I$(1).ETRANSFORM:
return this.transform == null  ? $I$(7).IDENTITY : Clazz.new_($I$(7,1).c$$java_awt_geom_AffineTransform,[this.transform]);
case $I$(1).ESUPERSCRIPT:
return Integer.valueOf$I(this.superscript);
case $I$(1).EFONT:
return this.font;
case $I$(1).ECHAR_REPLACEMENT:
return this.charReplacement;
case $I$(1).EFOREGROUND:
return this.foreground;
case $I$(1).EBACKGROUND:
return this.background;
case $I$(1).EUNDERLINE:
return Integer.valueOf$I(this.underline);
case $I$(1).ESTRIKETHROUGH:
return Boolean.valueOf$Z(this.strikethrough);
case $I$(1).ERUN_DIRECTION:
{
switch (this.runDirection) {
case 0:
return $I$(6).RUN_DIRECTION_LTR;
case 1:
return $I$(6).RUN_DIRECTION_RTL;
default:
return null;
}
}case $I$(1).EBIDI_EMBEDDING:
return Integer.valueOf$I(this.bidiEmbedding);
case $I$(1).EJUSTIFICATION:
return Float.valueOf$F(this.justification);
case $I$(1).EINPUT_METHOD_HIGHLIGHT:
return this.imHighlight;
case $I$(1).EINPUT_METHOD_UNDERLINE:
return Integer.valueOf$I(this.imUnderline);
case $I$(1).ESWAP_COLORS:
return Boolean.valueOf$Z(this.swapColors);
case $I$(1).ENUMERIC_SHAPING:
return this.numericShaping;
case $I$(1).EKERNING:
return Integer.valueOf$I(this.kerning);
case $I$(1).ELIGATURES:
return Integer.valueOf$I(this.ligatures);
case $I$(1).ETRACKING:
return Float.valueOf$F(this.tracking);
default:
throw Clazz.new_($I$(3,1));
}
}, p$1);

Clazz.newMeth(C$, 'i_validate$sun_font_EAttribute',  function (a) {
switch (a) {
case $I$(1).EFAMILY:
if (this.family == null  || this.family.length$() == 0 ) this.family=C$.DEFAULT.family;
return true;
case $I$(1).EWEIGHT:
return this.weight > 0  && this.weight < 10  ;
case $I$(1).EWIDTH:
return this.width >= 0.5  && this.width < 10  ;
case $I$(1).EPOSTURE:
return this.posture >= -1  && this.posture <= 1  ;
case $I$(1).ESIZE:
return this.size >= 0 ;
case $I$(1).ETRANSFORM:
if (this.transform != null  && this.transform.isIdentity$() ) this.transform=C$.DEFAULT.transform;
return true;
case $I$(1).ESUPERSCRIPT:
return this.superscript >= -7 && this.superscript <= 7 ;
case $I$(1).EFONT:
return true;
case $I$(1).ECHAR_REPLACEMENT:
return true;
case $I$(1).EFOREGROUND:
return true;
case $I$(1).EBACKGROUND:
return true;
case $I$(1).EUNDERLINE:
return this.underline >= -1 && this.underline < 6 ;
case $I$(1).ESTRIKETHROUGH:
return true;
case $I$(1).ERUN_DIRECTION:
return this.runDirection >= -2 && this.runDirection <= 1 ;
case $I$(1).EBIDI_EMBEDDING:
return this.bidiEmbedding >= -61 && this.bidiEmbedding < 62 ;
case $I$(1).EJUSTIFICATION:
this.justification=Math.max(0, Math.min(this.justification, 1));
return true;
case $I$(1).EINPUT_METHOD_HIGHLIGHT:
return true;
case $I$(1).EINPUT_METHOD_UNDERLINE:
return this.imUnderline >= -1 && this.imUnderline < 6 ;
case $I$(1).ESWAP_COLORS:
return true;
case $I$(1).ENUMERIC_SHAPING:
return true;
case $I$(1).EKERNING:
return this.kerning >= 0 && this.kerning <= 1 ;
case $I$(1).ELIGATURES:
return this.ligatures >= 0 && this.ligatures <= 1 ;
case $I$(1).ETRACKING:
return this.tracking >= -1  && this.tracking <= 10  ;
default:
throw Clazz.new_($I$(3,1).c$$S,["unknown attribute: " + a]);
}
}, p$1);

Clazz.newMeth(C$, 'getJustification$java_util_Map',  function (map) {
if (map != null ) {
if (Clazz.instanceOf(map, "sun.font.AttributeMap") && (map).getValues$() != null  ) {
return (map).getValues$().justification;
}var obj=map.get$O($I$(6).JUSTIFICATION);
if (obj != null  && Clazz.instanceOf(obj, "java.lang.Number") ) {
return Math.max(0, Math.min(1, (obj).floatValue$()));
}}return C$.DEFAULT.justification;
}, 1);

Clazz.newMeth(C$, 'getNumericShaping$java_util_Map',  function (map) {
if (map != null ) {
if (Clazz.instanceOf(map, "sun.font.AttributeMap") && (map).getValues$() != null  ) {
return (map).getValues$().numericShaping;
}var obj=map.get$O($I$(6).NUMERIC_SHAPING);
if (obj != null  && Clazz.instanceOf(obj, "java.awt.font.NumericShaper") ) {
return obj;
}}return C$.DEFAULT.numericShaping;
}, 1);

Clazz.newMeth(C$, 'applyIMHighlight$',  function () {
if (this.imHighlight != null ) {
var hl=null;
if (Clazz.instanceOf(this.imHighlight, "java.awt.im.InputMethodHighlight")) {
hl=this.imHighlight;
} else {
hl=(this.imHighlight).getValue$();
}var imStyles=hl.getStyle$();
if (imStyles == null ) {
var tk=$I$(8).getDefaultToolkit$();
imStyles=tk.mapInputMethodHighlight$java_awt_im_InputMethodHighlight(hl);
}if (imStyles != null ) {
return this.clone$().merge$java_util_Map(imStyles);
}}return this;
});

Clazz.newMeth(C$, 'getBaselineTransform$java_util_Map',  function (map) {
if (map != null ) {
var av=null;
if (Clazz.instanceOf(map, "sun.font.AttributeMap") && (map).getValues$() != null  ) {
av=(map).getValues$();
} else if (map.get$O($I$(6).TRANSFORM) != null ) {
av=C$.fromMap$java_util_Map(map);
}if (av != null ) {
return av.baselineTransform;
}}return null;
}, 1);

Clazz.newMeth(C$, 'getCharTransform$java_util_Map',  function (map) {
if (map != null ) {
var av=null;
if (Clazz.instanceOf(map, "sun.font.AttributeMap") && (map).getValues$() != null  ) {
av=(map).getValues$();
} else if (map.get$O($I$(6).TRANSFORM) != null ) {
av=C$.fromMap$java_util_Map(map);
}if (av != null ) {
return av.charTransform;
}}return null;
}, 1);

Clazz.newMeth(C$, 'updateDerivedTransforms$',  function () {
if (this.transform == null ) {
this.baselineTransform=null;
this.charTransform=null;
} else {
this.charTransform=Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[this.transform]);
this.baselineTransform=C$.extractXRotation$java_awt_geom_AffineTransform$Z(this.charTransform, true);
if (this.charTransform.isIdentity$()) {
this.charTransform=null;
}if (this.baselineTransform.isIdentity$()) {
this.baselineTransform=null;
}}if (this.baselineTransform == null ) {
this.nondefault&=~$I$(1).EBASELINE_TRANSFORM.mask;
} else {
this.nondefault|=$I$(1).EBASELINE_TRANSFORM.mask;
}});

Clazz.newMeth(C$, 'extractXRotation$java_awt_geom_AffineTransform$Z',  function (tx, andTranslation) {
return C$.extractRotation$java_awt_geom_Point2D_Double$java_awt_geom_AffineTransform$Z(Clazz.new_($I$(9,1).c$$D$D,[1, 0]), tx, andTranslation);
}, 1);

Clazz.newMeth(C$, 'extractYRotation$java_awt_geom_AffineTransform$Z',  function (tx, andTranslation) {
return C$.extractRotation$java_awt_geom_Point2D_Double$java_awt_geom_AffineTransform$Z(Clazz.new_($I$(9,1).c$$D$D,[0, 1]), tx, andTranslation);
}, 1);

Clazz.newMeth(C$, 'extractRotation$java_awt_geom_Point2D_Double$java_awt_geom_AffineTransform$Z',  function (pt, tx, andTranslation) {
tx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
var rtx=$I$(2).getRotateInstance$D$D(pt.x, pt.y);
try {
var rtxi=rtx.createInverse$();
var dx=tx.getTranslateX$();
var dy=tx.getTranslateY$();
tx.preConcatenate$java_awt_geom_AffineTransform(rtxi);
if (andTranslation) {
if (dx != 0  || dy != 0  ) {
tx.setTransform$D$D$D$D$D$D(tx.getScaleX$(), tx.getShearY$(), tx.getShearX$(), tx.getScaleY$(), 0, 0);
rtx.setTransform$D$D$D$D$D$D(rtx.getScaleX$(), rtx.getShearY$(), rtx.getShearX$(), rtx.getScaleY$(), dx, dy);
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.geom.NoninvertibleTransformException")){
return null;
} else {
throw e;
}
}
return rtx;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT=Clazz.new_(C$);
C$.MASK_ALL=C$.getMask$sun_font_EAttributeA(Clazz.getClass($I$(1)).getEnumConstants$());
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
