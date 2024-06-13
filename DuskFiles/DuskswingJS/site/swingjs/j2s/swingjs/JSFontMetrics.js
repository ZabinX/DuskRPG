(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSFontMetrics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fontLeading$java_awt_Font',  function (font) {
switch (font.getName$()) {
default:
case "SansSerif":
case "Dialog":
return font.getSize2D$() * 0.0327;
case "Serif":
return font.getSize2D$() * 0.0425;
case "Monospaced":
return 0;
}
}, 1);

Clazz.newMeth(C$, 'fontAscent$java_awt_Font',  function (font) {
return font.getSize2D$() * 1.005371;
}, 1);

Clazz.newMeth(C$, 'fontDescent$java_awt_Font',  function (font) {
switch (font.getName$()) {
default:
return font.getSize2D$() * 0.2197;
case "Monospaced":
return font.getSize2D$() * 0.3003;
}
}, 1);

Clazz.newMeth(C$, 'charsToGlyphs$I$CA$IA',  function (count, text, glyphs) {
for (var i=0; i < count; i++) glyphs[i]=text[i].$c();

}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
