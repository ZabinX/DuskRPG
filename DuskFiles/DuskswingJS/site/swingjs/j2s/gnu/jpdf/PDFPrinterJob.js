(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'javax.print.attribute.HashPrintRequestAttributeSet','gnu.jpdf.PDFInfo','javax.print.attribute.standard.Copies','javax.print.attribute.standard.JobName','javax.print.attribute.standard.RequestingUserName','java.io.File','java.io.FileOutputStream','gnu.jpdf.PDFJob','javax.swing.JFileChooser','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFPrinterJob", null, 'java.awt.print.PrinterJob');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pageable=null;
},1);

C$.$fields$=[['O',['attributes','javax.print.attribute.PrintRequestAttributeSet','info','gnu.jpdf.PDFInfo','pageable','java.awt.print.Pageable','pageFormat','java.awt.print.PageFormat','printable','java.awt.print.Printable','printJob','gnu.jpdf.PDFJob']]
,['O',['fileChooser','javax.swing.JFileChooser']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.attributes=Clazz.new_($I$(1,1));
this.info=Clazz.new_($I$(2,1));
this.setJobName$S("Java Printing");
}, 1);

Clazz.newMeth(C$, 'cancel$',  function () {
});

Clazz.newMeth(C$, 'defaultPage$java_awt_print_PageFormat',  function (page) {
return this.validatePage$java_awt_print_PageFormat(page);
});

Clazz.newMeth(C$, 'getCopies$',  function () {
return (this.attributes.get$Class(Clazz.getClass($I$(3)))).getValue$();
});

Clazz.newMeth(C$, 'getJobName$',  function () {
return (this.attributes.get$Class(Clazz.getClass($I$(4)))).getValue$();
});

Clazz.newMeth(C$, 'getPrinterJob$',  function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getUserName$',  function () {
return (this.attributes.get$Class(Clazz.getClass($I$(5)))).getValue$();
});

Clazz.newMeth(C$, 'isCancelled$',  function () {
return false;
});

Clazz.newMeth(C$, 'pageDialog$java_awt_print_PageFormat',  function (page) {
return page.clone$();
});

Clazz.newMeth(C$, 'print$S',  function (pathname) {
var pageCount;
var file=null;
var fileOutputStream=null;
try {
file=Clazz.new_($I$(6,1).c$$S,[pathname]);
fileOutputStream=Clazz.new_($I$(7,1).c$$java_io_File,[file]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error!! - Invalid output file path: " + pathname);
} else {
throw e;
}
}
System.out.println$S("GNU JPDF creating " + file);
var pdfGraphics=null;
this.printJob=Clazz.new_($I$(8,1).c$$java_io_OutputStream,[fileOutputStream]);
if (this.info != null ) {
this.printJob.getPDFDocument$().setPDFInfo$gnu_jpdf_PDFInfo(this.info);
}pageCount=(this.pageable == null  ? -1 : this.pageable.getNumberOfPages$());
for (var pageIndex=0; pageCount < 0 || pageIndex < pageCount ; pageIndex++) {
if (this.pageable != null ) this.pageFormat=this.pageable.getPageFormat$I(pageIndex);
if (this.pageFormat == null ) this.pageFormat=this.defaultPage$();
pdfGraphics=this.printJob.getGraphics$java_awt_print_PageFormat(this.pageFormat);
if (this.pageable != null ) this.printable=this.pageable.getPrintable$I(pageIndex);
if (this.printable.print$java_awt_Graphics$java_awt_print_PageFormat$I(pdfGraphics, this.pageFormat, pageIndex) == 1) pageCount=0;
pdfGraphics.dispose$();
}
this.printJob.end$();
System.out.println$S("GNU JPDF created: " + file);
});

Clazz.newMeth(C$, 'print$',  function () {
var file;
var path;
var jobName=this.getJobName$();
if (C$.fileChooser == null ) {
C$.fileChooser=Clazz.new_($I$(9,1));
C$.fileChooser.setMultiSelectionEnabled$Z(false);
C$.fileChooser.setFileSelectionMode$I(0);
}if (jobName.equals$O("")) {
jobName="Java Printing";
}jobName=jobName.replaceAll$S$S("\\\\", "-");
jobName=jobName.replaceAll$S$S("/", "-");
path=C$.fileChooser.getCurrentDirectory$();
file=Clazz.new_($I$(6,1).c$$java_io_File$S,[path, jobName + ".pdf"]);
C$.fileChooser.setSelectedFile$java_io_File(file);
if (C$.fileChooser.showSaveDialog$java_awt_Component(null) == 0) {
file=C$.fileChooser.getSelectedFile$();
var s=file.getAbsolutePath$();
if (!s.endsWith$S(".pdf")) s+=".pdf";
this.print$S(s);
}});

Clazz.newMeth(C$, 'printDialog$',  function () {
return true;
});

Clazz.newMeth(C$, 'setAuthor$S',  function (author) {
this.info.setAuthor$S(author);
});

Clazz.newMeth(C$, 'setCopies$I',  function (copies) {
this.attributes.add$javax_print_attribute_Attribute(Clazz.new_($I$(3,1).c$$I,[copies]));
});

Clazz.newMeth(C$, 'setCreator$S',  function (creator) {
this.info.setCreator$S(creator);
});

Clazz.newMeth(C$, 'setJobName$S',  function (jobName) {
this.attributes.add$javax_print_attribute_Attribute(Clazz.new_([jobName, $I$(10).getDefault$()],$I$(4,1).c$$S$java_util_Locale));
if (this.info.getTitle$() == null ) {
this.info.setTitle$S(jobName);
}});

Clazz.newMeth(C$, 'setPageable$java_awt_print_Pageable',  function (document) {
if (document == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Pageable cannot be null."]);
}this.pageable=document;
});

Clazz.newMeth(C$, 'setPrintable$java_awt_print_Printable',  function (painter) {
this.printable=painter;
});

Clazz.newMeth(C$, 'setPrintable$java_awt_print_Printable$java_awt_print_PageFormat',  function (painter, format) {
this.printable=painter;
this.pageFormat=format;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.info.setTitle$S(title);
});

Clazz.newMeth(C$, 'validatePage$java_awt_print_PageFormat',  function (page) {
return page.clone$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
