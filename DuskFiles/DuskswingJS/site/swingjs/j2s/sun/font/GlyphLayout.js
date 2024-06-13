(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,['java.awt.geom.Point2D','.Float'],'InternalError','java.awt.geom.AffineTransform','java.awt.font.FontRenderContext',['sun.font.GlyphLayout','.SDCache','.SDKey'],'java.util.concurrent.ConcurrentHashMap','java.lang.ref.SoftReference','sun.font.StandardGlyphVector',['sun.font.GlyphLayout','.LayoutEngineKey'],'sun.font.SunLayoutEngine',['sun.font.GlyphLayout','.GVData'],'sun.font.TextRecord','sun.font.ScriptRun','sun.font.FontRunIterator','java.util.ArrayList',['sun.font.GlyphLayout','.EngineRecord']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GlyphLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LayoutEngineKey',25],['LayoutEngineFactory',9],['LayoutEngine',9],['SDCache',26],['GVData',25],['EngineRecord',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_ercount','_typo_flags','_offset'],'O',['_gvdata','sun.font.GlyphLayout.GVData','_lef','sun.font.GlyphLayout.LayoutEngineFactory','_textRecord','sun.font.TextRecord','_scriptRuns','sun.font.ScriptRun','_fontRuns','sun.font.FontRunIterator','_erecords','java.util.ArrayList','_pt','java.awt.geom.Point2D.Float','_sd','sun.font.FontStrikeDesc','_mat','float[]']]
,['O',['cache','sun.font.GlyphLayout']]]

Clazz.newMeth(C$, 'get$sun_font_GlyphLayout_LayoutEngineFactory',  function (lef) {
if (lef == null ) {
lef=$I$(10).instance$();
}var result=null;
{
if (C$.cache != null ) {
result=C$.cache;
C$.cache=null;
}}if (result == null ) {
result=Clazz.new_(C$);
}result._lef=lef;
return result;
}, 1);

Clazz.newMeth(C$, 'done$sun_font_GlyphLayout',  function (gl) {
gl._lef=null;
C$.cache=gl;
}, 1);

Clazz.newMeth(C$, 'layout$java_awt_Font$java_awt_font_FontRenderContext$CA$I$I$I$sun_font_StandardGlyphVector',  function (font, frc, text, offset, count, flags, result) {
if (text == null  || offset < 0  || count < 0  || (count > text.length - offset) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}p$1.init$I.apply(this, [count]);
this._offset=offset;
var lim=offset + count;
var min=0;
var max=text.length;
if (flags != 0) {
if ((flags & 1) != 0) {
this._typo_flags|=-2147483648;
}if ((flags & 2) != 0) {
min=offset;
}if ((flags & 4) != 0) {
max=lim;
}}var lang=-1;
var font2D=font;
this._textRecord.init$CA$I$I$I$I(text, offset, lim, min, max);
var start=offset;
this._scriptRuns.init$CA$I$I(text, offset, count);
while (this._scriptRuns.next$()){
var limit=this._scriptRuns.getScriptLimit$();
var script=this._scriptRuns.getScriptCode$();
p$1.nextEngineRecord$I$I$I$I$sun_font_Font2D$I.apply(this, [start, limit, script, lang, font2D, 0]);
start=limit;
}
var ix=0;
var stop=this._ercount;
var dir=1;
if (this._typo_flags < 0) {
ix=stop - 1;
stop=-1;
dir=-1;
}for (; ix != stop; ix+=dir) {
var er=this._erecords.get$I(ix);
for (; ; ) {
try {
er.layout$();
break;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
if (this._gvdata._count >= 0) {
this._gvdata.grow$();
}} else {
throw e;
}
}
}
if (this._gvdata._count < 0) {
break;
}}
var gv;
if (this._gvdata._count < 0) {
gv=Clazz.new_($I$(8,1).c$$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext,[font, text, offset, count, frc]);
} else {
gv=this._gvdata.createGlyphVector$java_awt_Font$java_awt_font_FontRenderContext$sun_font_StandardGlyphVector(font, frc, result);
}return gv;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this._gvdata=Clazz.new_($I$(11,1));
this._textRecord=Clazz.new_($I$(12,1));
this._scriptRuns=Clazz.new_($I$(13,1));
this._fontRuns=Clazz.new_($I$(14,1));
this._erecords=Clazz.new_($I$(15,1).c$$I,[10]);
this._pt=Clazz.new_($I$(1,1));
this._mat=Clazz.array(Float.TYPE, [4]);
}, 1);

Clazz.newMeth(C$, 'init$I',  function (capacity) {
this._typo_flags=0;
this._ercount=0;
this._gvdata.init$I(capacity);
}, p$1);

Clazz.newMeth(C$, 'nextEngineRecord$I$I$I$I$sun_font_Font2D$I',  function (start, limit, script, lang, font, gmask) {
var er=null;
if (this._ercount == this._erecords.size$()) {
er=Clazz.new_($I$(16,1),[this, null]);
this._erecords.add$O(er);
} else {
er=this._erecords.get$I(this._ercount);
}er.init$I$I$sun_font_Font2D$I$I$I(start, limit, font, script, lang, gmask);
++this._ercount;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphLayout, "LayoutEngineKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['script','lang'],'O',['font','sun.font.Font2D']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_Font2D$I$I',  function (font, script, lang) {
;C$.$init$.apply(this);
this.init$sun_font_Font2D$I$I(font, script, lang);
}, 1);

Clazz.newMeth(C$, 'init$sun_font_Font2D$I$I',  function (font, script, lang) {
this.font=font;
this.script=script;
this.lang=lang;
});

Clazz.newMeth(C$, 'copy$',  function () {
return Clazz.new_(C$.c$$sun_font_Font2D$I$I,[this.font, this.script, this.lang]);
});

Clazz.newMeth(C$, 'font$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'script$',  function () {
return this.script;
});

Clazz.newMeth(C$, 'lang$',  function () {
return this.lang;
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
if (this === rhs ) return true;
if (rhs == null ) return false;
try {
var that=rhs;
return this.script == that.script && this.lang == that.lang  && this.font.equals$O(that.font) ;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.script ^ this.lang ^ this.font.hashCode$() ;
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.GlyphLayout, "LayoutEngineFactory", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.GlyphLayout, "LayoutEngine", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphLayout, "SDCache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['SDKey',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['key_font','java.awt.Font','key_frc','java.awt.font.FontRenderContext','dtx','java.awt.geom.AffineTransform','+invdtx','+gtx','delta','java.awt.geom.Point2D.Float','sd','sun.font.FontStrikeDesc']]
,['O',['ZERO_DELTA','java.awt.geom.Point2D.Float','cacheRef','java.lang.ref.SoftReference']]]

Clazz.newMeth(C$, 'c$$java_awt_Font$java_awt_font_FontRenderContext',  function (font, frc) {
;C$.$init$.apply(this);
this.key_font=font;
this.key_frc=frc;
this.dtx=frc.getTransform$();
this.dtx.setTransform$D$D$D$D$D$D(this.dtx.getScaleX$(), this.dtx.getShearY$(), this.dtx.getShearX$(), this.dtx.getScaleY$(), 0, 0);
if (!this.dtx.isIdentity$()) {
try {
this.invdtx=this.dtx.createInverse$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.geom.NoninvertibleTransformException")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
}var ptSize=font.getSize2D$();
if (font.isTransformed$()) {
this.gtx=font.getTransform$();
this.gtx.scale$D$D(ptSize, ptSize);
this.delta=Clazz.new_([this.gtx.getTranslateX$(), this.gtx.getTranslateY$()],$I$(1,1).c$$F$F);
this.gtx.setTransform$D$D$D$D$D$D(this.gtx.getScaleX$(), this.gtx.getShearY$(), this.gtx.getShearX$(), this.gtx.getScaleY$(), 0, 0);
this.gtx.preConcatenate$java_awt_geom_AffineTransform(this.dtx);
} else {
this.delta=C$.ZERO_DELTA;
this.gtx=Clazz.new_($I$(3,1).c$$java_awt_geom_AffineTransform,[this.dtx]);
this.gtx.scale$D$D(ptSize, ptSize);
}}, 1);

Clazz.newMeth(C$, 'get$java_awt_Font$java_awt_font_FontRenderContext',  function (font, frc) {
if (frc.isTransformed$()) {
var transform=frc.getTransform$();
if (transform.getTranslateX$() != 0  || transform.getTranslateY$() != 0  ) {
transform=Clazz.new_([transform.getScaleX$(), transform.getShearY$(), transform.getShearX$(), transform.getScaleY$(), 0, 0],$I$(3,1).c$$D$D$D$D$D$D);
frc=Clazz.new_([transform, frc.getAntiAliasingHint$(), frc.getFractionalMetricsHint$()],$I$(4,1).c$$java_awt_geom_AffineTransform$O$O);
}}var key=Clazz.new_($I$(5,1).c$$java_awt_Font$java_awt_font_FontRenderContext,[font, frc]);
var cache=null;
var res=null;
if (C$.cacheRef != null ) {
cache=C$.cacheRef.get$();
if (cache != null ) {
res=cache.get$O(key);
}}if (res == null ) {
res=Clazz.new_(C$.c$$java_awt_Font$java_awt_font_FontRenderContext,[font, frc]);
if (cache == null ) {
cache=Clazz.new_($I$(6,1).c$$I,[10]);
C$.cacheRef=Clazz.new_($I$(7,1).c$$O,[cache]);
} else if (cache.size$() >= 512) {
cache.clear$();
}cache.put$O$O(key, res);
}return res;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ZERO_DELTA=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphLayout.SDCache, "SDKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'O',['font','java.awt.Font','frc','java.awt.font.FontRenderContext']]]

Clazz.newMeth(C$, 'c$$java_awt_Font$java_awt_font_FontRenderContext',  function (font, frc) {
;C$.$init$.apply(this);
this.font=font;
this.frc=frc;
this.hash=font.hashCode$() ^ frc.hashCode$();
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.hash;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
try {
var rhs=o;
return this.hash == rhs.hash && this.font.equals$O(rhs.font)  && this.frc.equals$java_awt_font_FontRenderContext(rhs.frc) ;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphLayout, "GVData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_count','_flags'],'O',['_glyphs','int[]','_positions','float[]','_indices','int[]']]]

Clazz.newMeth(C$, 'init$I',  function (size) {
this._count=0;
this._flags=-1;
if (this._glyphs == null  || this._glyphs.length < size ) {
if (size < 20) {
size=20;
}this._glyphs=Clazz.array(Integer.TYPE, [size]);
this._positions=Clazz.array(Float.TYPE, [size * 2 + 2]);
this._indices=Clazz.array(Integer.TYPE, [size]);
}});

Clazz.newMeth(C$, 'grow$',  function () {
this.grow$I((this._glyphs.length/4|0));
});

Clazz.newMeth(C$, 'grow$I',  function (delta) {
var size=this._glyphs.length + delta;
var nglyphs=Clazz.array(Integer.TYPE, [size]);
System.arraycopy$O$I$O$I$I(this._glyphs, 0, nglyphs, 0, this._count);
this._glyphs=nglyphs;
var npositions=Clazz.array(Float.TYPE, [size * 2 + 2]);
System.arraycopy$O$I$O$I$I(this._positions, 0, npositions, 0, this._count * 2 + 2);
this._positions=npositions;
var nindices=Clazz.array(Integer.TYPE, [size]);
System.arraycopy$O$I$O$I$I(this._indices, 0, nindices, 0, this._count);
this._indices=nindices;
});

Clazz.newMeth(C$, 'adjustPositions$java_awt_geom_AffineTransform',  function (invdtx) {
invdtx.transform$FA$I$FA$I$I(this._positions, 0, this._positions, 0, this._count);
});

Clazz.newMeth(C$, 'createGlyphVector$java_awt_Font$java_awt_font_FontRenderContext$sun_font_StandardGlyphVector',  function (font, frc, result) {
if (this._flags == -1) {
this._flags=0;
if (this._count > 1) {
var ltr=true;
var rtl=true;
var rtlix=this._count;
for (var i=0; i < this._count && (ltr || rtl ) ; ++i) {
var cx=this._indices[i];
ltr=ltr && (cx == i) ;
rtl=rtl && (cx == --rtlix) ;
}
if (rtl) this._flags|=4;
if (!rtl && !ltr ) this._flags|=8;
}this._flags|=2;
}var glyphs=Clazz.array(Integer.TYPE, [this._count]);
System.arraycopy$O$I$O$I$I(this._glyphs, 0, glyphs, 0, this._count);
var positions=null;
if ((this._flags & 2) != 0) {
positions=Clazz.array(Float.TYPE, [this._count * 2 + 2]);
System.arraycopy$O$I$O$I$I(this._positions, 0, positions, 0, positions.length);
}var indices=null;
if ((this._flags & 8) != 0) {
indices=Clazz.array(Integer.TYPE, [this._count]);
System.arraycopy$O$I$O$I$I(this._indices, 0, indices, 0, this._count);
}if (result == null ) {
result=Clazz.new_($I$(8,1).c$$java_awt_Font$java_awt_font_FontRenderContext$IA$FA$IA$I,[font, frc, glyphs, positions, indices, this._flags]);
} else {
result.initGlyphVector$java_awt_Font$java_awt_font_FontRenderContext$IA$FA$IA$I(font, frc, glyphs, positions, indices, this._flags);
}return result;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphLayout, "EngineRecord", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','limit','gmask','eflags'],'O',['key','sun.font.GlyphLayout.LayoutEngineKey','engine','sun.font.GlyphLayout.LayoutEngine']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.key=Clazz.new_($I$(9,1));
}, 1);

Clazz.newMeth(C$, 'init$I$I$sun_font_Font2D$I$I$I',  function (start, limit, font, script, lang, gmask) {
this.start=start;
this.limit=limit;
this.gmask=gmask;
this.key.init$sun_font_Font2D$I$I(font, script, lang);
this.eflags=0;
this.engine=this.b$['sun.font.GlyphLayout']._lef.getEngine$sun_font_GlyphLayout_LayoutEngineKey(this.key);
});

Clazz.newMeth(C$, 'layout$',  function () {
this.b$['sun.font.GlyphLayout']._textRecord.start=this.start;
this.b$['sun.font.GlyphLayout']._textRecord.limit=this.limit;
this.engine.layout$sun_font_FontStrikeDesc$FA$I$I$sun_font_TextRecord$I$java_awt_geom_Point2D_Float$sun_font_GlyphLayout_GVData(this.b$['sun.font.GlyphLayout']._sd, this.b$['sun.font.GlyphLayout']._mat, this.gmask, this.start - this.b$['sun.font.GlyphLayout']._offset, this.b$['sun.font.GlyphLayout']._textRecord, this.b$['sun.font.GlyphLayout']._typo_flags | this.eflags, this.b$['sun.font.GlyphLayout']._pt, this.b$['sun.font.GlyphLayout']._gvdata);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
