(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},I$=[[0,'javajs.export.PDFCreator','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PdfEncoder", null, 'javajs.img.ImageEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isLandscape'],'S',['comment'],'O',['pdf','javajs.export.PDFCreator']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setParams$java_util_Map',  function (params) {
this.isLandscape=(this.quality > 1);
this.comment="Jmol " + params.get$O("comment");
});

Clazz.newMeth(C$, 'generate$',  function () {
this.pdf=Clazz.new_($I$(1,1));
var pageWidth=576;
var pageHeight=792;
this.pdf.setOutputStream$java_io_OutputStream(this.out);
this.pdf.newDocument$I$I$Z(pageWidth, pageHeight, this.isLandscape);
p$1.addMyImage$I$I.apply(this, [pageWidth, pageHeight]);
var ht=Clazz.new_($I$(2,1));
if (this.comment != null ) ht.put$O$O("Producer", this.comment);
ht.put$O$O("Author", "JMol");
ht.put$O$O("CreationDate", this.date);
this.pdf.addInfo$java_util_Map(ht);
this.pdf.closeDocument$();
});

Clazz.newMeth(C$, 'addMyImage$I$I',  function (pageWidth, pageHeight) {
this.pdf.addImageResource$O$I$I$IA$Z("img1", this.width, this.height, this.pixels, true);
var w=(this.isLandscape ? pageHeight : pageWidth);
var h=(this.isLandscape ? pageWidth : pageHeight);
var iw=this.width;
var ih=this.height;
if (iw > 0.9 * w ) {
ih=((ih * 0.9 * w  / iw)|0);
iw=((w * 0.9)|0);
}if (ih > 0.9 * h ) {
iw=((iw * 0.9 * h  / ih)|0);
ih=((h * 0.9)|0);
}var x=0;
var y=0;
var x1=iw;
var y1=ih;
if (w > iw) {
x=((w - iw)/2|0);
x1=iw + x;
}if (h > ih) {
y=((h - ih)/2|0);
y1=ih + y;
}this.pdf.drawImage$O$I$I$I$I$I$I$I$I("img1", x, y, x1, y1, 0, 0, this.width, this.height);
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
