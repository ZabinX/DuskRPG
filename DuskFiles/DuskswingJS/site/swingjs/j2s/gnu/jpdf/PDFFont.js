(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFFont", null, 'gnu.jpdf.PDFObject', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['style'],'S',['name','$type','font','javaFont']]
,['O',['base14','String[][]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$S$S$I.apply(this, ["/F1", "/Type1", "Helvetica", 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I',  function (name, type, font, style) {
;C$.superclazz.c$$S.apply(this,["/Font"]);C$.$init$.apply(this);
this.name=name;
this.$type=type;
this.style=style;
var f=font.toLowerCase$();
this.font=C$.base14[0][1];
this.javaFont=C$.base14[0][0];
for (var i=0; i < C$.base14.length; i++) {
if (C$.base14[i][0].equals$O(f)) {
this.javaFont=C$.base14[i][0];
this.font=C$.base14[i][1 + style];
break;
}}
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.$type;
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'getStyle$',  function () {
return this.style;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(1).write$java_io_OutputStream$S(os, "/Subtype ");
$I$(1).write$java_io_OutputStream$S(os, this.$type);
$I$(1).write$java_io_OutputStream$S(os, "\n/Name ");
$I$(1).write$java_io_OutputStream$S(os, this.name);
$I$(1).write$java_io_OutputStream$S(os, "\n/BaseFont ");
$I$(1).write$java_io_OutputStream$S(os, this.font);
$I$(1).write$java_io_OutputStream$S(os, "\n/Encoding ");
$I$(1).write$java_io_OutputStream$S(os, "/WinAnsiEncoding");
$I$(1).write$java_io_OutputStream$S(os, "\n");
this.writeEnd$java_io_OutputStream(os);
});

Clazz.newMeth(C$, 'equals$S$S$I',  function (type, font, style) {
return this.$type.equals$O(type) && (this.font.equalsIgnoreCase$S(font) || this.javaFont.equalsIgnoreCase$S(font) ) ;
});

C$.$static$=function(){C$.$static$=0;
C$.base14=Clazz.array(String, -2, [Clazz.array(String, -1, ["arial", "/Helvetica", "/Helvetica-Bold", "/Helvetica-Oblique", "/Helvetica-BoldOblique"]), Clazz.array(String, -1, ["sansserif", "/Helvetica", "/Helvetica-Bold", "/Helvetica-Oblique", "/Helvetica-BoldOblique"]), Clazz.array(String, -1, ["monospaced", "/Courier", "/Courier-Bold", "/Courier-Oblique", "/Courier-BoldOblique"]), Clazz.array(String, -1, ["timesroman", "/Times-Roman", "/Times-Bold", "/Times-Italic", "/Times-BoldItalic"]), Clazz.array(String, -1, ["serif", "/Times-Roman", "/Times-Bold", "/Times-Italic", "/Times-BoldItalic"]), Clazz.array(String, -1, ["courier", "/Courier", "/Courier-Bold", "/Courier-Oblique", "/Courier-BoldOblique"]), Clazz.array(String, -1, ["helvetica", "/Helvetica", "/Helvetica-Bold", "/Helvetica-Oblique", "/Helvetica-BoldOblique"]), Clazz.array(String, -1, ["dialog", "/Courier", "/Courier-Bold", "/Courier-Oblique", "/Courier-BoldOblique"]), Clazz.array(String, -1, ["dialoginput", "/Courier", "/Courier-Bold", "/Courier-Oblique", "/Courier-BoldOblique"])]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
