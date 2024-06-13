(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream','gnu.jpdf.PDFDocument']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFCatalog", null, 'gnu.jpdf.PDFObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pagemode'],'O',['pdfPageList','gnu.jpdf.PDFPageList','outlines','gnu.jpdf.PDFOutline']]]

Clazz.newMeth(C$, 'c$$gnu_jpdf_PDFPageList$I',  function (pdfPageList, pagemode) {
;C$.superclazz.c$$S.apply(this,["/Catalog"]);C$.$init$.apply(this);
this.pdfPageList=pdfPageList;
this.pagemode=pagemode;
}, 1);

Clazz.newMeth(C$, 'setOutline$gnu_jpdf_PDFOutline',  function (outline) {
this.outlines=outline;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(1).write$java_io_OutputStream$S(os, "/Pages ");
$I$(1,"write$java_io_OutputStream$S",[os, this.pdfPageList.toString()]);
$I$(1).write$java_io_OutputStream$S(os, "\n");
if (this.outlines != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Outlines ");
$I$(1,"write$java_io_OutputStream$S",[os, this.outlines.toString()]);
$I$(1).write$java_io_OutputStream$S(os, "\n");
}$I$(1).write$java_io_OutputStream$S(os, "/PageMode ");
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).PDF_PAGE_MODES[this.pagemode]]);
$I$(1).write$java_io_OutputStream$S(os, "\n");
this.writeEnd$java_io_OutputStream(os);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
