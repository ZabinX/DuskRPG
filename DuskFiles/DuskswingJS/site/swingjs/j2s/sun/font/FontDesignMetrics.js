(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.FontDesignMetrics','java.util.Hashtable',['sun.font.FontDesignMetrics','.KeyReference'],'swingjs.JSToolkit','swingjs.JSFontMetrics',['java.awt.geom.Rectangle2D','.Float']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontDesignMetrics", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.FontMetrics');
C$.$classes$=[['KeyReference',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ascent=-1;
this.height=-1;
this.FIRST_PRINTABLE=32;
},1);

C$.$fields$=[['F',['ascent','descent','leading'],'I',['height','FIRST_PRINTABLE'],'O',['$font','java.awt.Font','fwidths','float[]','iwidths','int[]']]
,['F',['roundingUpValue'],'I',['recentIndex'],'O',['metricsCache','java.util.Hashtable','recentMetrics','sun.font.FontDesignMetrics[]']]]

Clazz.newMeth(C$, 'getMetrics$java_awt_Font',  function (font) {
var m=null;
var r;
r=C$.metricsCache.get$O(font.toString());
if (r != null ) {
m=r.get$();
}if (m == null ) {
m=Clazz.new_(C$.c$$java_awt_Font,[font]);
C$.metricsCache.put$O$O(font.toString(), Clazz.new_($I$(3,1).c$$O$O,[font, m]));
}for (var i=0; i < C$.recentMetrics.length; i++) {
if (C$.recentMetrics[i] === m ) {
return m;
}}
{
C$.recentMetrics[C$.recentIndex++]=m;
if (C$.recentIndex == 5) {
C$.recentIndex=0;
}}return m;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font',  function (font) {
;C$.superclazz.c$$java_awt_Font.apply(this,[font]);C$.$init$.apply(this);
this.$font=font;
p$1.initMatrixAndMetrics.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initMatrixAndMetrics',  function () {
{
//need to calculate ascent, descent, leading, and maxAdvance
}
}, p$1);

Clazz.newMeth(C$, 'stringWidth$S',  function (str) {
return ((0.5 + p$1.getWidth$S.apply(this, [str]))|0);
});

Clazz.newMeth(C$, 'getWidth$S',  function (str) {
return $I$(4).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.$font, str);
}, p$1);

Clazz.newMeth(C$, 'charsWidth$CA$I$I',  function (data, off, len) {
var width=0;
if (len < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["len=" + len]);
}var limit=off + len;
for (var i=off; i < limit; i++) {
var ch=data[i];
width+=this.stringWidth$S("" + ch);
}
return ((0.5 + width)|0);
});

Clazz.newMeth(C$, 'getAscent$',  function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.ascent)|0);
});

Clazz.newMeth(C$, 'getDescent$',  function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.descent)|0);
});

Clazz.newMeth(C$, '_getMetrics',  function () {
if (this.ascent >= 0 ) return;
this.ascent=$I$(5).fontAscent$java_awt_Font(this.$font);
this.descent=$I$(5).fontDescent$java_awt_Font(this.$font);
this.leading=$I$(5).fontLeading$java_awt_Font(this.$font);
}, p$1);

Clazz.newMeth(C$, 'getLeading$',  function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.descent + this.leading )|0) - ((C$.roundingUpValue + this.descent)|0);
});

Clazz.newMeth(C$, 'getHeight$',  function () {
if (this.height < 0) {
this.height=this.getAscent$() + ((C$.roundingUpValue + this.descent + this.leading )|0);
}return this.height;
});

Clazz.newMeth(C$, '秘fillMetrics$FA',  function (metrics) {
p$1._getMetrics.apply(this, []);
metrics[0]=this.ascent;
metrics[1]=this.descent;
metrics[2]=this.leading;
metrics[3]=0;
if (metrics.length >= 8) {
metrics[4]=this.$font.getSize2D$() / -4.0;
metrics[5]=metrics[6]=metrics[7]=1;
}});

Clazz.newMeth(C$, '秘getStringBounds$S',  function (s) {
p$1._getMetrics.apply(this, []);
return Clazz.new_([0, -this.ascent, this.stringWidth$S(s), this.ascent + this.descent + this.leading ],$I$(6,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'charWidth$C',  function (pt) {
return (pt.$c() < 256  ? ((0.5 + this.getWidthsFloat$()[pt.$c()])|0) : this.stringWidth$S("" + pt));
});

Clazz.newMeth(C$, 'charWidth$I',  function (codePoint) {
if (!Character.isValidCodePoint$I(codePoint)) {
codePoint=65535;
}if (codePoint < 256) {
return this.getWidths$()[codePoint];
}var s=String.fromCharCode(codePoint) ||null;
return this.stringWidth$S(s);
});

Clazz.newMeth(C$, 'getWidths$',  function () {
if (this.iwidths != null ) return this.iwidths;
this.iwidths=Clazz.array(Integer.TYPE, [256]);
this.getWidthsFloat$();
for (var ch=this.FIRST_PRINTABLE; ch < 256; ch++) {
this.iwidths[ch]=(this.fwidths[ch]|0);
}
return this.iwidths;
});

Clazz.newMeth(C$, 'getWidthsFloat$',  function () {
if (this.fwidths != null ) return this.fwidths;
this.fwidths=Clazz.array(Float.TYPE, [256]);
for (var ch=this.FIRST_PRINTABLE; ch < 256; ch++) {
this.fwidths[ch]=$I$(4,"getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S",[null, this.$font, "" + String.fromCharCode(ch)]);
}
return this.fwidths;
});

Clazz.newMeth(C$, 'getFloatWidth$I',  function (ch) {
var s=(1 ? String.fromCharCode(ch) :"");
return $I$(4).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.$font, s);
});

C$.$static$=function(){C$.$static$=0;
C$.roundingUpValue=0.95;
C$.metricsCache=Clazz.new_($I$(2,1));
C$.recentMetrics=Clazz.array(C$, [5]);
C$.recentIndex=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FontDesignMetrics, "KeyReference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['key','java.lang.Object','+val']]]

Clazz.newMeth(C$, 'c$$O$O',  function (key, value) {
;C$.$init$.apply(this);
this.key=key;
this.val=value;
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
return this.val;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if ($I$(1).metricsCache.get$O(this.key.toString()) === this ) {
$I$(1).metricsCache.remove$O(this.key);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
