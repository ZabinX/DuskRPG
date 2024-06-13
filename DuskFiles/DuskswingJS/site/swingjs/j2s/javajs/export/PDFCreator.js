(function(){var P$=Clazz.newPackage("javajs.export"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.export.PDFObject','javajs.util.SB']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFCreator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pt','xrefPt','count','height','width'],'O',['os','java.io.OutputStream','indirectObjects','javajs.util.Lst','root','javajs.export.PDFObject','+graphics','fonts','java.util.Map','+images']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutputStream$java_io_OutputStream',  function (os) {
this.os=os;
});

Clazz.newMeth(C$, 'newDocument$I$I$Z',  function (paperWidth, paperHeight, isLandscape) {
this.width=(isLandscape ? paperHeight : paperWidth);
this.height=(isLandscape ? paperWidth : paperHeight);
System.out.println$S("Creating PDF with width=" + this.width + " and height=" + this.height );
this.fonts=Clazz.new_($I$(1,1));
this.indirectObjects=Clazz.new_($I$(2,1));
this.root=p$1.newObject$S.apply(this, ["Catalog"]);
var pages=p$1.newObject$S.apply(this, ["Pages"]);
var page=p$1.newObject$S.apply(this, ["Page"]);
var pageContents=p$1.newObject$S.apply(this, [null]);
this.graphics=p$1.newObject$S.apply(this, ["XObject"]);
this.root.addDef$S$O("Pages", pages.getRef$());
pages.addDef$S$O("Count", "1");
pages.addDef$S$O("Kids", "[ " + page.getRef$() + " ]" );
page.addDef$S$O("Parent", pages.getRef$());
page.addDef$S$O("MediaBox", "[ 0 0 " + paperWidth + " " + paperHeight + " ]" );
if (isLandscape) page.addDef$S$O("Rotate", "90");
pageContents.addDef$S$O("Length", "?");
pageContents.append$S((isLandscape ? "q 0 1 1 0 0 0 " : "q 1 0 0 -1 0 " + (paperHeight)) + " cm /" + this.graphics.getID$() + " Do Q" );
page.addDef$S$O("Contents", pageContents.getRef$());
p$1.addProcSet$javajs_export_PDFObject.apply(this, [page]);
p$1.addProcSet$javajs_export_PDFObject.apply(this, [this.graphics]);
this.graphics.addDef$S$O("Subtype", "/Form");
this.graphics.addDef$S$O("FormType", "1");
this.graphics.addDef$S$O("BBox", "[0 0 " + this.width + " " + this.height + "]" );
this.graphics.addDef$S$O("Matrix", "[1 0 0 1 0 0]");
this.graphics.addDef$S$O("Length", "?");
page.addResource$S$S$S("XObject", this.graphics.getID$(), this.graphics.getRef$());
this.g$S("q 1 w 1 J 1 j 10 M []0 d q ");
p$1.clip$I$I$I$I.apply(this, [0, 0, this.width, this.height]);
});

Clazz.newMeth(C$, 'addProcSet$javajs_export_PDFObject',  function (o) {
o.addResource$S$S$S(null, "ProcSet", "[/PDF /Text /ImageB /ImageC /ImageI]");
}, p$1);

Clazz.newMeth(C$, 'clip$I$I$I$I',  function (x1, y1, x2, y2) {
this.moveto$I$I(x1, y1);
this.lineto$I$I(x2, y1);
this.lineto$I$I(x2, y2);
this.lineto$I$I(x1, y2);
this.g$S("h W n");
}, p$1);

Clazz.newMeth(C$, 'moveto$I$I',  function (x, y) {
this.g$S(x + " " + y + " m" );
});

Clazz.newMeth(C$, 'lineto$I$I',  function (x, y) {
this.g$S(x + " " + y + " l" );
});

Clazz.newMeth(C$, 'newObject$S',  function (type) {
var o=Clazz.new_($I$(3,1).c$$I,[++this.count]);
if (type != null ) o.addDef$S$O("Type", "/" + type);
this.indirectObjects.addLast$O(o);
return o;
}, p$1);

Clazz.newMeth(C$, 'addInfo$java_util_Map',  function (data) {
var info=Clazz.new_($I$(1,1));
for (var e, $e = data.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var value="(" + e.getValue$().replace$C$C(")", "_").replace$C$C("(", "_") + ")" ;
info.put$O$O(e.getKey$(), value);
}
this.root.addDef$S$O("Info", info);
});

Clazz.newMeth(C$, 'addFontResource$S',  function (fname) {
var f=p$1.newObject$S.apply(this, ["Font"]);
this.fonts.put$O$O(fname, f);
f.addDef$S$O("BaseFont", fname);
f.addDef$S$O("Encoding", "/WinAnsiEncoding");
f.addDef$S$O("Subtype", "/Type1");
this.graphics.addResource$S$S$S("Font", f.getID$(), f.getRef$());
return f;
}, p$1);

Clazz.newMeth(C$, 'addImageResource$O$I$I$IA$Z',  function (newImage, width, height, buffer, isRGB) {
var imageObj=p$1.newObject$S.apply(this, ["XObject"]);
if (this.images == null ) this.images=Clazz.new_($I$(1,1));
this.images.put$O$O(newImage, imageObj);
imageObj.addDef$S$O("Subtype", "/Image");
imageObj.addDef$S$O("Length", "?");
imageObj.addDef$S$O("ColorSpace", isRGB ? "/DeviceRGB" : "/DeviceGray");
imageObj.addDef$S$O("BitsPerComponent", "8");
imageObj.addDef$S$O("Width", "" + width);
imageObj.addDef$S$O("Height", "" + height);
this.graphics.addResource$S$S$S("XObject", imageObj.getID$(), imageObj.getRef$());
var n=buffer.length;
var stream=Clazz.array(Byte.TYPE, [n * (isRGB ? 3 : 1)]);
if (isRGB) {
for (var i=0, pt=0; i < n; i++) {
stream[pt++]=(((buffer[i] >> 16) & 255)|0);
stream[pt++]=(((buffer[i] >> 8) & 255)|0);
stream[pt++]=((buffer[i] & 255)|0);
}
} else {
for (var i=0; i < n; i++) stream[i]=(buffer[i]|0);

}imageObj.setStream$BA(stream);
this.graphics.addResource$S$S$S("XObject", imageObj.getID$(), imageObj.getRef$());
});

Clazz.newMeth(C$, 'g$S',  function (cmd) {
this.graphics.append$S(cmd).appendC$C("\n");
});

Clazz.newMeth(C$, 'output$S',  function (s) {
var b=s.getBytes$();
this.os.write$BA$I$I(b, 0, b.length);
this.pt+=b.length;
}, p$1);

Clazz.newMeth(C$, 'closeDocument$',  function () {
this.g$S("Q Q");
p$1.outputHeader.apply(this, []);
p$1.writeObjects.apply(this, []);
p$1.writeXRefTable.apply(this, []);
p$1.writeTrailer.apply(this, []);
this.os.flush$();
this.os.close$();
});

Clazz.newMeth(C$, 'outputHeader',  function () {
p$1.output$S.apply(this, ["%PDF-1.3\n%"]);
var b=Clazz.array(Byte.TYPE, -1, [-1, -1, -1, -1]);
this.os.write$BA$I$I(b, 0, b.length);
this.pt+=4;
p$1.output$S.apply(this, ["\n"]);
}, p$1);

Clazz.newMeth(C$, 'writeTrailer',  function () {
var trailer=Clazz.new_($I$(3,1).c$$I,[-2]);
p$1.output$S.apply(this, ["trailer"]);
trailer.addDef$S$O("Size", "" + this.indirectObjects.size$());
trailer.addDef$S$O("Root", this.root.getRef$());
trailer.output$java_io_OutputStream(this.os);
p$1.output$S.apply(this, ["startxref\n"]);
p$1.output$S.apply(this, ["" + this.xrefPt + "\n" ]);
p$1.output$S.apply(this, ["%%EOF\n"]);
}, p$1);

Clazz.newMeth(C$, 'writeObjects',  function () {
var nObj=this.indirectObjects.size$();
for (var i=0; i < nObj; i++) {
var o=this.indirectObjects.get$I(i);
if (!o.isFont$()) continue;
o.pt=this.pt;
this.pt+=o.output$java_io_OutputStream(this.os);
}
for (var i=0; i < nObj; i++) {
var o=this.indirectObjects.get$I(i);
if (o.isFont$()) continue;
o.pt=this.pt;
this.pt+=o.output$java_io_OutputStream(this.os);
}
}, p$1);

Clazz.newMeth(C$, 'writeXRefTable',  function () {
this.xrefPt=this.pt;
var nObj=this.indirectObjects.size$();
var sb=Clazz.new_($I$(4,1));
sb.append$S("xref\n0 " + (nObj + 1) + "\n0000000000 65535 f\r\n" );
for (var i=0; i < nObj; i++) {
var o=this.indirectObjects.get$I(i);
var s="0000000000" + o.pt;
sb.append$S(s.substring$I(s.length$() - 10));
sb.append$S(" 00000 n\r\n");
}
p$1.output$S.apply(this, [sb.toString()]);
}, p$1);

Clazz.newMeth(C$, 'canDoLineTo$',  function () {
return true;
});

Clazz.newMeth(C$, 'fill$',  function () {
this.g$S("f");
});

Clazz.newMeth(C$, 'stroke$',  function () {
this.g$S("S");
});

Clazz.newMeth(C$, 'doCircle$I$I$I$Z',  function (x, y, r, doFill) {
var d=r * 4 * (Math.sqrt(2) - 1)  / 3;
var dx=x;
var dy=y;
this.g$S((new Double(dx + r).toString()) + " " + new Double(dy).toString() + " m" );
this.g$S((new Double(dx + r).toString()) + " " + new Double((dy + d)).toString() + " " + new Double((dx + d)).toString() + " " + new Double((dy + r)).toString() + " " + new Double((dx)).toString() + " " + new Double((dy + r)).toString() + " " + " c" );
this.g$S((new Double(dx - d).toString()) + " " + new Double((dy + r)).toString() + " " + new Double((dx - r)).toString() + " " + new Double((dy + d)).toString() + " " + new Double((dx - r)).toString() + " " + new Double((dy)).toString() + " c" );
this.g$S((new Double(dx - r).toString()) + " " + new Double((dy - d)).toString() + " " + new Double((dx - d)).toString() + " " + new Double((dy - r)).toString() + " " + new Double((dx)).toString() + " " + new Double((dy - r)).toString() + " c" );
this.g$S((new Double(dx + d).toString()) + " " + new Double((dy - r)).toString() + " " + new Double((dx + r)).toString() + " " + new Double((dy - d)).toString() + " " + new Double((dx + r)).toString() + " " + new Double((dy)).toString() + " c" );
this.g$S(doFill ? "f" : "s");
});

Clazz.newMeth(C$, 'doPolygon$IA$IA$I$Z',  function (axPoints, ayPoints, nPoints, doFill) {
this.moveto$I$I(axPoints[0], ayPoints[0]);
for (var i=1; i < nPoints; i++) this.lineto$I$I(axPoints[i], ayPoints[i]);

this.g$S(doFill ? "f" : "s");
});

Clazz.newMeth(C$, 'doRect$I$I$I$I$Z',  function (x, y, width, height, doFill) {
this.g$S(x + " " + y + " " + width + " " + height + " re " + (doFill ? "f" : "s") );
});

Clazz.newMeth(C$, 'drawImage$O$I$I$I$I$I$I$I$I',  function (image, destX0, destY0, destX1, destY1, srcX0, srcY0, srcX1, srcY1) {
var imageObj=this.images.get$O(image);
if (imageObj == null ) return;
this.g$S("q");
p$1.clip$I$I$I$I.apply(this, [destX0, destY0, destX1, destY1]);
var iw=Double.parseDouble$S(imageObj.getDef$S("Width"));
var ih=Double.parseDouble$S(imageObj.getDef$S("Height"));
var dw=(destX1 - destX0 + 1);
var dh=(destY1 - destY0 + 1);
var sw=(srcX1 - srcX0 + 1);
var sh=(srcY1 - srcY0 + 1);
var scaleX=dw / sw;
var scaleY=dh / sh;
var transX=destX0 - srcX0 * scaleX;
var transY=destY0 + (ih - srcY0) * scaleY;
this.g$S(new Double(scaleX * iw).toString() + " 0 0 " + new Double(-scaleY * ih).toString() + " " + new Double(transX).toString() + " " + new Double(transY).toString() + " cm");
this.g$S("/" + imageObj.getID$() + " Do" );
this.g$S("Q");
});

Clazz.newMeth(C$, 'drawStringRotated$S$I$I$I',  function (s, x, y, angle) {
this.g$S("q " + this.getRotation$I(angle) + " " + x + " " + y + " cm BT(" + s + ")Tj ET Q" );
});

Clazz.newMeth(C$, 'getRotation$I',  function (angle) {
var cos=0;
var sin=0;
switch (angle) {
case 0:
cos=1;
break;
case 90:
sin=1;
break;
case -90:
sin=-1;
break;
case 180:
cos=-1;
break;
default:
var a=(angle * (0.017453292519943295));
cos=Math.cos(a);
sin=Math.sin(a);
if (Math.abs(cos) < 1.0E-4 ) cos=0;
if (Math.abs(sin) < 1.0E-4 ) sin=0;
}
return new Float(cos).toString() + " " + new Float(sin).toString() + " " + new Float(sin).toString() + " " + new Float(-cos).toString() ;
});

Clazz.newMeth(C$, 'setColor$FA$Z',  function (rgb, isFill) {
this.g$S(new Float(rgb[0]).toString() + " " + new Float(rgb[1]).toString() + " " + new Float(rgb[2]).toString() + (isFill ? " rg" : " RG") );
});

Clazz.newMeth(C$, 'setFont$S$F',  function (fname, size) {
var f=this.fonts.get$O(fname);
if (f == null ) f=p$1.addFontResource$S.apply(this, [fname]);
this.g$S("/" + f.getID$() + " " + new Float(size).toString() + " Tf" );
});

Clazz.newMeth(C$, 'setLineWidth$F',  function (width) {
this.g$S(new Float(width).toString() + " w");
});

Clazz.newMeth(C$, 'translateScale$F$F$F',  function (x, y, scale) {
this.g$S(new Float(scale).toString() + " 0 0 " + new Float(scale).toString() + " " + new Float(x).toString() + " " + new Float(y).toString() + " cm" );
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
