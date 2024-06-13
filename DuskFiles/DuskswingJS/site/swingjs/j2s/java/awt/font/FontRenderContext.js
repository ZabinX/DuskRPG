(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,'java.awt.RenderingHints','java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontRenderContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['defaulting'],'O',['tx','java.awt.geom.AffineTransform','aaHintValue','java.lang.Object','+fmHintValue']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.aaHintValue=$I$(1).VALUE_TEXT_ANTIALIAS_DEFAULT;
this.fmHintValue=$I$(1).VALUE_FRACTIONALMETRICS_DEFAULT;
this.defaulting=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$Z$Z',  function (tx, isAntiAliased, usesFractionalMetrics) {
;C$.$init$.apply(this);
if (tx != null  && !tx.isIdentity$() ) {
this.tx=Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[tx]);
}if (isAntiAliased) {
this.aaHintValue=$I$(1).VALUE_TEXT_ANTIALIAS_ON;
} else {
this.aaHintValue=$I$(1).VALUE_TEXT_ANTIALIAS_OFF;
}if (usesFractionalMetrics) {
this.fmHintValue=$I$(1).VALUE_FRACTIONALMETRICS_ON;
} else {
this.fmHintValue=$I$(1).VALUE_FRACTIONALMETRICS_OFF;
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$O$O',  function (tx, aaHint, fmHint) {
;C$.$init$.apply(this);
if (tx != null  && !tx.isIdentity$() ) {
this.tx=Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[tx]);
}this.aaHintValue=aaHint;
this.fmHintValue=fmHint;
}, 1);

Clazz.newMeth(C$, 'isTransformed$',  function () {
if (!this.defaulting) {
return this.tx != null ;
} else {
return !this.getTransform$().isIdentity$();
}});

Clazz.newMeth(C$, 'getTransformType$',  function () {
if (!this.defaulting) {
if (this.tx == null ) {
return 0;
} else {
return this.tx.getType$();
}} else {
return this.getTransform$().getType$();
}});

Clazz.newMeth(C$, 'getTransform$',  function () {
return (this.tx == null ) ? Clazz.new_($I$(2,1)) : Clazz.new_($I$(2,1).c$$java_awt_geom_AffineTransform,[this.tx]);
});

Clazz.newMeth(C$, 'isAntiAliased$',  function () {
return !(this.aaHintValue === $I$(1).VALUE_TEXT_ANTIALIAS_OFF  || this.aaHintValue === $I$(1).VALUE_TEXT_ANTIALIAS_DEFAULT  );
});

Clazz.newMeth(C$, 'usesFractionalMetrics$',  function () {
return !(this.fmHintValue === $I$(1).VALUE_FRACTIONALMETRICS_OFF  || this.fmHintValue === $I$(1).VALUE_FRACTIONALMETRICS_DEFAULT  );
});

Clazz.newMeth(C$, 'getAntiAliasingHint$',  function () {
if (this.defaulting) {
if (this.isAntiAliased$()) {
return $I$(1).VALUE_TEXT_ANTIALIAS_ON;
} else {
return $I$(1).VALUE_TEXT_ANTIALIAS_OFF;
}}return this.aaHintValue;
});

Clazz.newMeth(C$, 'getFractionalMetricsHint$',  function () {
if (this.defaulting) {
if (this.usesFractionalMetrics$()) {
return $I$(1).VALUE_FRACTIONALMETRICS_ON;
} else {
return $I$(1).VALUE_FRACTIONALMETRICS_OFF;
}}return this.fmHintValue;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
try {
return this.equals$java_awt_font_FontRenderContext(obj);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$java_awt_font_FontRenderContext',  function (rhs) {
if (this === rhs ) {
return true;
}if (rhs == null ) {
return false;
}if (!rhs.defaulting && !this.defaulting ) {
if (rhs.aaHintValue === this.aaHintValue  && rhs.fmHintValue === this.fmHintValue  ) {
return this.tx == null  ? rhs.tx == null  : this.tx.equals$O(rhs.tx);
}return false;
} else {
return rhs.getAntiAliasingHint$() === this.getAntiAliasingHint$()  && rhs.getFractionalMetricsHint$() === this.getFractionalMetricsHint$()   && rhs.getTransform$().equals$O(this.getTransform$()) ;
}});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=this.tx == null  ? 0 : this.tx.hashCode$();
if (this.defaulting) {
hash+=this.getAntiAliasingHint$().hashCode$();
hash+=this.getFractionalMetricsHint$().hashCode$();
} else {
hash+=this.aaHintValue.hashCode$();
hash+=this.fmHintValue.hashCode$();
}return hash;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
