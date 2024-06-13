(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','gnu.jpdf.PDFStream','gnu.jpdf.PDFStringHelper']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFOutline", null, 'gnu.jpdf.PDFObject', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['destMode'],'I',['l','b','r','t'],'S',['title'],'O',['outlines','java.util.Vector','parent','gnu.jpdf.PDFOutline','dest','gnu.jpdf.PDFPage']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["/Outlines"]);C$.$init$.apply(this);
this.outlines=Clazz.new_($I$(1,1));
this.title=null;
this.dest=null;
this.destMode=false;
}, 1);

Clazz.newMeth(C$, 'c$$S$gnu_jpdf_PDFPage',  function (title, dest) {
C$.c$.apply(this, []);
this.title=title;
this.dest=dest;
}, 1);

Clazz.newMeth(C$, 'c$$S$gnu_jpdf_PDFPage$I$I$I$I',  function (title, dest, l, b, r, t) {
C$.c$$S$gnu_jpdf_PDFPage.apply(this, [title, dest]);
this.destMode=true;
this.l=l;
this.b=b;
this.r=r;
this.t=t;
}, 1);

Clazz.newMeth(C$, 'add$S$gnu_jpdf_PDFPage',  function (title, dest) {
var outline=Clazz.new_(C$.c$$S$gnu_jpdf_PDFPage,[title, dest]);
this.pdfDocument.add$gnu_jpdf_PDFObject(outline);
this.add$gnu_jpdf_PDFOutline(outline);
return outline;
});

Clazz.newMeth(C$, 'add$S$gnu_jpdf_PDFPage$I$I$I$I',  function (title, dest, x, y, w, h) {
var xy1=dest.cxy$I$I(x, y + h);
var xy2=dest.cxy$I$I(x + w, y);
var outline=Clazz.new_(C$.c$$S$gnu_jpdf_PDFPage$I$I$I$I,[title, dest, xy1[0], xy1[1], xy2[0], xy2[1]]);
this.pdfDocument.add$gnu_jpdf_PDFObject(outline);
this.add$gnu_jpdf_PDFOutline(outline);
return outline;
});

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFOutline',  function (outline) {
this.outlines.addElement$O(outline);
outline.parent=this;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
this.writeStart$java_io_OutputStream(os);
if (this.parent != null ) {
$I$(2).write$java_io_OutputStream$S(os, "/Title ");
$I$(2,"write$java_io_OutputStream$S",[os, $I$(3).makePDFString$S(this.title)]);
$I$(2).write$java_io_OutputStream$S(os, "\n/Dest [");
$I$(2,"write$java_io_OutputStream$S",[os, this.dest.toString()]);
if (this.destMode == false ) {
$I$(2).write$java_io_OutputStream$S(os, " /Fit]\n/Parent ");
} else {
$I$(2).write$java_io_OutputStream$S(os, " /FitR ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.l)]);
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.b)]);
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.r)]);
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.t)]);
$I$(2).write$java_io_OutputStream$S(os, "]\n/Parent ");
}$I$(2,"write$java_io_OutputStream$S",[os, this.parent.toString()]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
}if (this.parent == null ) {
$I$(2).write$java_io_OutputStream$S(os, "/Count ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.outlines.size$())]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
} else {
var c=this.descendants$();
if (c > 0) {
$I$(2).write$java_io_OutputStream$S(os, "/Count ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(-c)]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
}}if (this.outlines.size$() > 0) {
$I$(2).write$java_io_OutputStream$S(os, "/First ");
$I$(2,"write$java_io_OutputStream$S",[os, this.outlines.elementAt$I(0).toString()]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
$I$(2).write$java_io_OutputStream$S(os, "/Last ");
$I$(2,"write$java_io_OutputStream$S",[os, this.outlines.elementAt$I(this.outlines.size$() - 1).toString()]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
}if (this.parent != null ) {
var index=this.parent.getIndex$gnu_jpdf_PDFOutline(this);
if (index > 0) {
$I$(2).write$java_io_OutputStream$S(os, "/Prev ");
$I$(2,"write$java_io_OutputStream$S",[os, this.parent.getNode$I(index - 1).toString()]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
}if (index < this.parent.getLast$()) {
$I$(2).write$java_io_OutputStream$S(os, "/Next ");
$I$(2,"write$java_io_OutputStream$S",[os, this.parent.getNode$I(index + 1).toString()]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
}}this.writeEnd$java_io_OutputStream(os);
});

Clazz.newMeth(C$, 'getIndex$gnu_jpdf_PDFOutline',  function (outline) {
return this.outlines.indexOf$O(outline);
});

Clazz.newMeth(C$, 'getLast$',  function () {
return this.outlines.size$() - 1;
});

Clazz.newMeth(C$, 'getNode$I',  function (i) {
return (this.outlines.elementAt$I(i));
});

Clazz.newMeth(C$, 'elements$',  function () {
return this.outlines.elements$();
});

Clazz.newMeth(C$, 'descendants$',  function () {
var c=this.outlines.size$();
for (var o, $o = this.outlines.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
c+=o.descendants$();
}
return c;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
