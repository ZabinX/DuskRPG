(function(){var P$=Clazz.newPackage("sun.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FontStrikeDesc");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['style','aaHint','fmHint','hashCode','valuemask'],'O',['devTx','java.awt.geom.AffineTransform','+glyphTx']]]

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hashCode == 0) {
this.hashCode=this.glyphTx.hashCode$() + this.devTx.hashCode$() + this.valuemask ;
}return this.hashCode;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
try {
var desc=obj;
return (desc.valuemask == this.valuemask && desc.glyphTx.equals$O(this.glyphTx)  && desc.devTx.equals$O(this.devTx) );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAAHintIntVal$O$sun_font_Font2D$I',  function (aa, font2D, ptSize) {
return 1;
}, 1);

Clazz.newMeth(C$, 'getAAHintIntVal$sun_font_Font2D$java_awt_Font$java_awt_font_FontRenderContext',  function (font2D, font, frc) {
return 2;
}, 1);

Clazz.newMeth(C$, 'getFMHintIntVal$O',  function (fm) {
return 1;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform$I$I$I',  function (devAt, at, fStyle, aa, fm) {
;C$.$init$.apply(this);
this.devTx=devAt;
this.glyphTx=at;
this.style=fStyle;
this.aaHint=aa;
this.fmHint=fm;
this.valuemask=fStyle;
switch (aa) {
case 1:
break;
case 2:
this.valuemask|=16;
break;
case 4:
case 5:
this.valuemask|=32;
break;
case 6:
case 7:
this.valuemask|=64;
break;
default:
break;
}
if (fm == 2) {
this.valuemask|=256;
}}, 1);

Clazz.newMeth(C$, 'c$$sun_font_FontStrikeDesc',  function (desc) {
;C$.$init$.apply(this);
this.devTx=desc.devTx;
this.glyphTx=desc.glyphTx.clone$();
this.style=desc.style;
this.aaHint=desc.aaHint;
this.fmHint=desc.fmHint;
this.hashCode=desc.hashCode;
this.valuemask=desc.valuemask;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "FontStrikeDesc: Style=" + this.style + " AA=" + this.aaHint + " FM=" + this.fmHint + " devTx=" + this.devTx + " devTx.FontTx.ptSize=" + this.glyphTx ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
