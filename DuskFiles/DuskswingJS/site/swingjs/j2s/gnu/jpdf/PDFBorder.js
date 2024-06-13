(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFBorder", null, 'gnu.jpdf.PDFObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['width'],'H',['style'],'O',['dash','double[]']]]

Clazz.newMeth(C$, 'c$$H$D',  function (style, width) {
;C$.superclazz.c$$S.apply(this,["/Border"]);C$.$init$.apply(this);
this.style=style;
this.width=width;
}, 1);

Clazz.newMeth(C$, 'c$$D$DA',  function (width, dash) {
;C$.superclazz.c$$S.apply(this,["/Border"]);C$.$init$.apply(this);
this.style=1;
this.width=width;
this.dash=dash;
}, 1);

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
$I$(1,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.objser)]);
$I$(1).write$java_io_OutputStream$S(os, " 0 obj\n");
$I$(1).write$java_io_OutputStream$S(os, "[/S /");
$I$(1,"write$java_io_OutputStream$S",[os, "SDBIU".substring$I$I(this.style, this.style + 1)]);
$I$(1).write$java_io_OutputStream$S(os, " /W ");
$I$(1,"write$java_io_OutputStream$S",[os, Double.toString$D(this.width)]);
if (this.dash != null ) {
$I$(1).write$java_io_OutputStream$S(os, " /D [");
$I$(1,"write$java_io_OutputStream$S",[os, Double.toString$D(this.dash[0])]);
for (var i=1; i < this.dash.length; i++) {
$I$(1).write$java_io_OutputStream$S(os, " ");
$I$(1,"write$java_io_OutputStream$S",[os, Double.toString$D(this.dash[i])]);
}
$I$(1).write$java_io_OutputStream$S(os, "] ");
}$I$(1).write$java_io_OutputStream$S(os, "]\n");
$I$(1).write$java_io_OutputStream$S(os, "endobj\n");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
