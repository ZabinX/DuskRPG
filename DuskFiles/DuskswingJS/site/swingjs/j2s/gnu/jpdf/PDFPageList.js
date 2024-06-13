(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','gnu.jpdf.PDFStream','gnu.jpdf.PDFObject']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFPageList", null, 'gnu.jpdf.PDFObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pages','java.util.Vector']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["/Pages"]);C$.$init$.apply(this);
this.pages=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFPage',  function (page) {
this.pages.addElement$O(page);
page.pdfPageList=this;
});

Clazz.newMeth(C$, 'getPage$I',  function (page) {
return (this.pages.elementAt$I(page));
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(2).write$java_io_OutputStream$S(os, "/Kids ");
$I$(2,"write$java_io_OutputStream$S",[os, $I$(3).toArray$java_util_Vector(this.pages)]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
$I$(2).write$java_io_OutputStream$S(os, "/Count ");
$I$(2,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.pages.size$())]);
$I$(2).write$java_io_OutputStream$S(os, "\n");
this.writeEnd$java_io_OutputStream(os);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
