(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardTextSource", null, 'sun.font.TextSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','len','cstart','clen','level','flags'],'O',['chars','char[]','font','java.awt.Font','frc','java.awt.font.FontRenderContext','cm','sun.font.CoreMetrics']]]

Clazz.newMeth(C$, 'c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics',  function (chars, start, len, cstart, clen, level, flags, font, frc, cm) {
Clazz.super_(C$, this);
if (chars == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad chars: null"]);
}if (cstart < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad cstart: " + cstart]);
}if (start < cstart) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad start: " + start + " for cstart: " + cstart ]);
}if (clen < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad clen: " + clen]);
}if (cstart + clen > chars.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad clen: " + clen + " cstart: " + cstart + " for array len: " + chars.length ]);
}if (len < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad len: " + len]);
}if ((start + len) > (cstart + clen)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad len: " + len + " start: " + start + " for cstart: " + cstart + " clen: " + clen ]);
}if (font == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad font: null"]);
}if (frc == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad frc: null"]);
}this.chars=chars.clone$();
this.start=start;
this.len=len;
this.cstart=cstart;
this.clen=clen;
this.level=level;
this.flags=flags;
this.font=font;
this.frc=frc;
if (cm != null ) {
this.cm=cm;
} else {
var metrics=font.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(chars, cstart, clen, frc);
this.cm=(metrics).cm;
}}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics',  function (chars, start, len, level, flags, font, frc, cm) {
C$.c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics.apply(this, [chars, start, len, start, len, level, flags, font, frc, cm]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I$java_awt_Font$java_awt_font_FontRenderContext',  function (chars, level, flags, font, frc) {
C$.c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics.apply(this, [chars, 0, chars.length, 0, chars.length, level, flags, font, frc, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$java_awt_Font$java_awt_font_FontRenderContext',  function (str, level, flags, font, frc) {
C$.c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics.apply(this, [str.toCharArray$(), 0, str.length$(), 0, str.length$(), level, flags, font, frc, null]);
}, 1);

Clazz.newMeth(C$, 'getChars$',  function () {
return this.chars.clone$();
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.len;
});

Clazz.newMeth(C$, 'getContextStart$',  function () {
return this.cstart;
});

Clazz.newMeth(C$, 'getContextLength$',  function () {
return this.clen;
});

Clazz.newMeth(C$, 'getLayoutFlags$',  function () {
return this.flags;
});

Clazz.newMeth(C$, 'getBidiLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'getFRC$',  function () {
return this.frc;
});

Clazz.newMeth(C$, 'getCoreMetrics$',  function () {
return this.cm;
});

Clazz.newMeth(C$, 'getSubSource$I$I$I',  function (start, length, dir) {
if (start < 0 || length < 0  || (start + length) > this.len ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad start (" + start + ") or length (" + length + ")" ]);
}var level=this.level;
if (dir != 2) {
var ltr=(this.flags & 8) == 0;
if (!(dir == 0 && ltr ) && !(dir == 1 && !ltr ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["direction flag is invalid"]);
}level=ltr ? 0 : 1;
}return Clazz.new_(C$.c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics,[this.chars, this.start + start, length, this.cstart, this.clen, level, this.flags, this.font, this.frc, this.cm]);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.toString$Z(true);
});

Clazz.newMeth(C$, 'toString$Z',  function (withContext) {
var buf=Clazz.new_([C$.superclazz.prototype.toString.apply(this, [])],$I$(1,1).c$$S);
buf.append$S("[start:");
buf.append$I(this.start);
buf.append$S(", len:");
buf.append$I(this.len);
buf.append$S(", cstart:");
buf.append$I(this.cstart);
buf.append$S(", clen:");
buf.append$I(this.clen);
buf.append$S(", chars:\"");
var chStart;
var chLimit;
if (withContext == true ) {
chStart=this.cstart;
chLimit=this.cstart + this.clen;
} else {
chStart=this.start;
chLimit=this.start + this.len;
}for (var i=chStart; i < chLimit; ++i) {
if (i > chStart) {
buf.append$S(" ");
}buf.append$S(Integer.toHexString$I(this.chars[i].$c()));
}
buf.append$S("\"");
buf.append$S(", level:");
buf.append$I(this.level);
buf.append$S(", flags:");
buf.append$I(this.flags);
buf.append$S(", font:");
buf.append$O(this.font);
buf.append$S(", frc:");
buf.append$O(this.frc);
buf.append$S(", cm:");
buf.append$O(this.cm);
buf.append$S("]");
return buf.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
