(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},p$2={},I$=[[0,'javax.swing.JPanel','java.io.File','java.io.FileOutputStream','java.awt.event.WindowAdapter','java.awt.BorderLayout','gnu.jpdf.TestMenuBar','gnu.jpdf.PDFJob','gnu.jpdf.TestPanel','javax.swing.JScrollPane','java.awt.Dimension','java.awt.Toolkit','javax.swing.JOptionPane','gnu.jpdf.HelpFrame','java.awt.JobAttributes','java.awt.Color','java.awt.Point','java.awt.Font','gnu.jpdf.BoundingBox','java.awt.MediaTracker','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','javax.swing.JTextArea','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFTest", null, 'javax.swing.JFrame', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pane=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['pdfDocumentAlreadyDone'],'I',['currentPage'],'O',['pane','javax.swing.JPanel','documentDimension','java.awt.Dimension','job','gnu.jpdf.PDFJob','drawingArea','gnu.jpdf.TestPanel','menuBar','gnu.jpdf.TestMenuBar']]
,['Z',['noWindow'],'S',['outputPdfFile','sampleImageFile']]]

Clazz.newMeth(C$, 'c$$S$S$Z',  function (outputPdfFile, sampleImageFile, noWindow) {
Clazz.super_(C$, this);
var file=null;
var fileOutputStream=null;
try {
file=Clazz.new_($I$(2,1).c$$S,[outputPdfFile]);
fileOutputStream=Clazz.new_($I$(3,1).c$$java_io_File,[file]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error!! - Invalid output file path: " + outputPdfFile);
C$.usage$();
System.exit$I(1);
} else {
throw e;
}
}
System.out.println$S("GNU JPDF creating " + file);
this.addWindowListener$java_awt_event_WindowListener(((P$.PDFTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PDFTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
System.exit$I(0);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.PDFTest$1)));
var contentPane=this.getContentPane$();
this.pane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
this.menuBar=Clazz.new_($I$(6,1).c$$java_awt_event_ActionListener,[this]);
this.setJMenuBar$javax_swing_JMenuBar(this.menuBar);
var pdfGraphics=null;
this.job=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[fileOutputStream]);
pdfGraphics=this.job.getGraphics$();
var d=this.job.getPageDimension$();
this.documentDimension=d;
var w=(d.getWidth$()|0);
var h=(d.getHeight$()|0);
this.drawingArea=Clazz.new_($I$(8,1));
var scrollPane=Clazz.new_($I$(9,1).c$$java_awt_Component$I$I,[this.drawingArea, 22, 32]);
this.drawingArea.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[1000, 1000]));
this.pane.add$java_awt_Component$O(scrollPane, "Center");
contentPane.add$java_awt_Component(this.pane);
this.setTitle$S("PDF Test Application");
var toolkit=$I$(11).getDefaultToolkit$();
var screenSize=toolkit.getScreenSize$();
this.setLocation$I$I(50, 50);
this.setSize$I$I(w, (h/2|0));
this.setVisible$Z(true);
this.toFront$();
p$1.doFirstPage$java_awt_Graphics.apply(this, [pdfGraphics]);
this.currentPage=1;
if (fileOutputStream != null ) {
try {
fileOutputStream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
fileOutputStream=null;
}this.drawingArea.repaint$();
this.pane.revalidate$();
}, 1);

Clazz.newMeth(C$, 'doFirstPage$java_awt_Graphics',  function (pdfGraphics) {
var d=this.documentDimension;
var img=this.drawingArea.createImage$I$I((d.getWidth$()|0), (d.getHeight$()|0));
if (img == null ) {
System.out.println$S("Error!! - drawing image is null");
System.exit$I(1);
}this.drawingArea.setImage$java_awt_Image(img);
var javaGraphics=img.getGraphics$();
p$1.doTest$java_awt_Graphics$java_awt_Dimension.apply(this, [javaGraphics, d]);
javaGraphics.dispose$();
if ((!this.pdfDocumentAlreadyDone) && (pdfGraphics != null ) ) {
p$1.doTest$java_awt_Graphics$java_awt_Dimension.apply(this, [pdfGraphics, d]);
pdfGraphics.dispose$();
pdfGraphics=this.job.getGraphics$();
p$1.doSecondPageTest$java_awt_Graphics.apply(this, [pdfGraphics]);
pdfGraphics.dispose$();
this.job.end$();
}this.currentPage=1;
this.drawingArea.repaint$();
this.drawingArea.revalidate$();
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var source=e.getSource$();
if (source === this.menuBar.close ) {
System.exit$I(0);
}if (source === this.menuBar.printer ) {
p$1.printPdf.apply(this, []);
return;
}if (source === this.menuBar.helpTopics ) {
System.out.println$S("Help..");
p$1.showHelp.apply(this, []);
return;
}if (source === this.menuBar.aboutApp ) {
System.out.println$S("About...");
p$1.showAboutBox.apply(this, []);
return;
}if (source === this.menuBar.viewFirstPage ) {
if (this.currentPage != 1) {
p$1.doFirstPage$java_awt_Graphics.apply(this, [null]);
return;
}}if (source === this.menuBar.viewSecondPage ) {
if (this.currentPage != 2) {
p$1.doSecondPage.apply(this, []);
return;
}}});

Clazz.newMeth(C$, 'showAboutBox',  function () {
$I$(12).showMessageDialog$java_awt_Component$O(this, "gnujpdf test application, by Eric Z. Beard.  http://gnujpdf.sourceforge.net");
}, p$1);

Clazz.newMeth(C$, 'showHelp',  function () {
var helpFrame=Clazz.new_($I$(13,1));
}, p$1);

Clazz.newMeth(C$, 'printPdf',  function () {
System.out.println$S("Printing...");
var jobAttributes=Clazz.new_($I$(14,1));
var toolkit=$I$(11).getDefaultToolkit$();
var pjob=toolkit.getPrintJob$java_awt_JSFrame$S$java_awt_JobAttributes$java_awt_PageAttributes(this, "PDF Test Print", jobAttributes, null);
if (pjob != null ) {
var printGraphics=pjob.getGraphics$();
if (this.currentPage == 1) {
p$1.doTest$java_awt_Graphics$java_awt_Dimension.apply(this, [printGraphics, this.documentDimension]);
printGraphics.dispose$();
pjob.end$();
} else {
p$1.doSecondPageTest$java_awt_Graphics.apply(this, [printGraphics]);
printGraphics.dispose$();
pjob.end$();
}} else {
System.err.println$S("Can\'t print: printjob null");
}}, p$1);

Clazz.newMeth(C$, 'doTest$java_awt_Graphics$java_awt_Dimension',  function (g, d) {
g.setColor$java_awt_Color($I$(15).white);
g.fillRect$I$I$I$I(0, 0, d.width, d.height);
g.setColor$java_awt_Color($I$(15).black);
var boxUpperLeft=Clazz.new_($I$(16,1).c$$I$I,[60, 60]);
var boxSize=Clazz.new_($I$(10,1).c$$I$I,[200, 200]);
var f=Clazz.new_($I$(17,1).c$$S$I$I,["TimesRoman", 0, 14]);
g.setFont$java_awt_Font(f);
var fm=g.getFontMetrics$java_awt_Font(f);
var box=Clazz.new_($I$(18,1).c$$java_awt_Point$java_awt_Dimension,[boxUpperLeft, boxSize]);
var string="Hello World! this is a really long string";
var padding=10;
var child=null;
try {
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(string, 3, 2, fm, padding);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
g.drawRect$I$I$I$I(60, 60, 200, 200);
g.drawRect$I$I$I$I((child.getLocation$().getX$()|0) + 60, (child.getLocation$().getY$()|0) + 60, (child.getSize$().getWidth$()|0), (child.getSize$().getHeight$()|0));
var p=child.getDrawingPoint$();
var x=(p.getX$()|0);
var y=(p.getY$()|0);
g.drawLine$I$I$I$I(x, y, x + ((child.getSize$().getWidth$()|0) - padding * 2), y);
try {
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 3);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
var b1=Clazz.new_([Clazz.new_($I$(16,1).c$$I$I,[300, 60]), Clazz.new_($I$(10,1).c$$I$I,[200, 200])],$I$(18,1).c$$java_awt_Point$java_awt_Dimension);
g.drawRect$I$I$I$I((b1.getAbsoluteLocation$().getX$()|0), (b1.getAbsoluteLocation$().getY$()|0), (b1.getSize$().getWidth$()|0), (b1.getSize$().getHeight$()|0));
var b2=Clazz.new_([Clazz.new_($I$(16,1).c$$I$I,[10, 10]), Clazz.new_($I$(10,1).c$$I$I,[100, 100])],$I$(18,1).c$$java_awt_Point$java_awt_Dimension);
b1.add$gnu_jpdf_BoundingBox(b2);
g.drawRect$I$I$I$I((b2.getAbsoluteLocation$().getX$()|0), (b2.getAbsoluteLocation$().getY$()|0), (b2.getSize$().getWidth$()|0), (b2.getSize$().getHeight$()|0));
try {
var b3=b2.getStringBounds$S$I$I$java_awt_FontMetrics$I(string, 3, 2, fm, padding);
g.drawRect$I$I$I$I((b3.getAbsoluteLocation$().getX$()|0), (b3.getAbsoluteLocation$().getY$()|0), (b3.getSize$().getWidth$()|0), (b3.getSize$().getHeight$()|0));
var pt=b3.getDrawingPoint$();
var px=(pt.getX$()|0);
var py=(pt.getY$()|0);
b3.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 3);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
} else {
throw stle;
}
}
p$1.drawStringsInBox$java_awt_Graphics.apply(this, [g]);
p$1.drawSampleImage$java_awt_Graphics$java_awt_Dimension.apply(this, [g, d]);
}, p$1);

Clazz.newMeth(C$, 'drawStringsInBox$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(15).black);
var box=Clazz.new_([Clazz.new_($I$(16,1).c$$I$I,[20, 300]), Clazz.new_($I$(10,1).c$$I$I,[250, 250])],$I$(18,1).c$$java_awt_Point$java_awt_Dimension);
g.drawRect$I$I$I$I((box.getAbsoluteLocation$().getX$()|0), (box.getAbsoluteLocation$().getY$()|0), (box.getSize$().getWidth$()|0), (box.getSize$().getHeight$()|0));
var f=Clazz.new_($I$(17,1).c$$S$I$I,["Helvetica", 0, 12]);
g.setFont$java_awt_Font(f);
var fm=g.getFontMetrics$();
var line1="Line 1";
var line2="Line 2";
var line3="Line 3 realllllly loooooong   .h gkjhg kjh gkjh gkjhg kjhg kjhg kjh gk jbhg";
var padding=5;
var child=null;
try {
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(line1, 4, 1, fm, padding);
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 4);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
box.subtract$gnu_jpdf_BoundingBox$I(child, 7);
try {
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(line2, 4, 1, fm, padding);
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 4);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
box.subtract$gnu_jpdf_BoundingBox$I(child, 7);
try {
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(line3, 4, 1, fm, padding);
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 4);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
box.subtract$gnu_jpdf_BoundingBox$I(child, 7);
try {
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(line1, 5, 2, fm, padding);
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 5);
box.subtract$gnu_jpdf_BoundingBox$I(child, 6);
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(line2, 5, 2, fm, padding);
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 5);
box.subtract$gnu_jpdf_BoundingBox$I(child, 6);
child=box.getStringBounds$S$I$I$java_awt_FontMetrics$I(line3, 5, 2, fm, padding);
child.drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, 5);
box.subtract$gnu_jpdf_BoundingBox$I(child, 6);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
}, p$1);

Clazz.newMeth(C$, 'drawSampleImage$java_awt_Graphics$java_awt_Dimension',  function (g, d) {
try {
if (C$.sampleImageFile == null ) return;
var toolkit=$I$(11).getDefaultToolkit$();
var img=toolkit.createImage$S(C$.sampleImageFile);
var tracker=Clazz.new_($I$(19,1).c$$java_awt_Component,[this.drawingArea]);
tracker.addImage$java_awt_Image$I(img, 0);
try {
tracker.waitForID$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
g.drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(img, 10, 10, img.getWidth$java_awt_image_ImageObserver(this.drawingArea), img.getHeight$java_awt_image_ImageObserver(this.drawingArea), $I$(15).green, this.drawingArea);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'doSecondPage',  function () {
var d=this.documentDimension;
var img=this.drawingArea.createImage$I$I((d.getWidth$()|0), (d.getHeight$()|0));
if (img == null ) {
System.out.println$S("Error!! - drawing image is null");
System.exit$I(1);
}this.drawingArea.setImage$java_awt_Image(img);
var javaGraphics=img.getGraphics$();
p$1.doSecondPageTest$java_awt_Graphics.apply(this, [javaGraphics]);
javaGraphics.dispose$();
this.currentPage=2;
this.drawingArea.repaint$();
this.drawingArea.revalidate$();
}, p$1);

Clazz.newMeth(C$, 'doSecondPageTest$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(15).white);
g.fillRect$I$I$I$I(0, 0, this.documentDimension.width, this.documentDimension.height);
g.setColor$java_awt_Color($I$(15).black);
g.drawLine$I$I$I$I(10, 10, 50, 50);
g.drawRect$I$I$I$I(30, 10, 10, 10);
g.fillRect$I$I$I$I(30, 90, 10, 10);
var xp=Clazz.array(Integer.TYPE, -1, [10, 10, 20, 15, 20]);
var yp=Clazz.array(Integer.TYPE, -1, [50, 60, 60, 55, 50]);
var np=xp.length;
g.drawPolygon$IA$IA$I(xp, yp, np);
xp=Clazz.array(Integer.TYPE, -1, [60, 60, 70, 65, 70]);
yp=Clazz.array(Integer.TYPE, -1, [80, 90, 90, 85, 80]);
np=xp.length;
g.drawPolyline$IA$IA$I(xp, yp, np);
xp=Clazz.array(Integer.TYPE, -1, [60, 60, 70, 65, 70]);
yp=Clazz.array(Integer.TYPE, -1, [50, 60, 60, 55, 50]);
np=xp.length;
g.fillPolygon$IA$IA$I(xp, yp, np);
g.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["SansSerif", 0, 12]));
g.drawString$S$I$I("This is a simple string", 10, 120);
g.drawString$S$I$I("This is a (complex) string", 10, 130);
g.drawString$S$I$I("(complex) string (with ( (multiple brackets ))", 10, 140);
g.drawRect$I$I$I$I(200, 60, 50, 50);
g.drawLine$I$I$I$I(200, 60, 250, 110);
g.drawLine$I$I$I$I(200, 110, 250, 60);
g.drawLine$I$I$I$I(200, 85, 225, 60);
g.drawArc$I$I$I$I$I$I(200, 60, 50, 50, 45, 180);
g.drawArc$I$I$I$I$I$I(100, 400, 100, 200, 0, 360);
g.drawOval$I$I$I$I(200, 400, 100, 200);
g.fillOval$I$I$I$I(300, 400, 100, 200);
g.drawRect$I$I$I$I(300, 50, 80, 40);
g.drawLine$I$I$I$I(300, 50, 380, 90);
g.drawLine$I$I$I$I(300, 90, 380, 50);
g.drawArc$I$I$I$I$I$I(300, 50, 80, 40, 135, 180);
g.drawRect$I$I$I$I(400, 50, 40, 80);
g.drawLine$I$I$I$I(400, 50, 440, 130);
g.drawLine$I$I$I$I(400, 130, 440, 50);
g.setColor$java_awt_Color($I$(15).blue);
g.fillArc$I$I$I$I$I$I(400, 50, 40, 80, 135, 180);
g.setColor$java_awt_Color($I$(15).black);
g.drawRect$I$I$I$I(400, 150, 40, 80);
g.drawLine$I$I$I$I(400, 150, 440, 230);
g.drawLine$I$I$I$I(400, 230, 440, 150);
g.setColor$java_awt_Color($I$(15).blue);
g.fillArc$I$I$I$I$I$I(400, 150, 40, 80, 135, 225);
g.setColor$java_awt_Color($I$(15).black);
var fonts=Clazz.array(String, -1, ["SansSerif", "Monospaced", "TimesRoman", "Helvetica", "Courier", "Dialog", "DialogInput"]);
var modes=Clazz.array(String, -1, ["Plain", "Bold", "Italic", "Bold+Italic"]);
var imodes=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
var ty=170;
for (var i=0; i < modes.length; i++) g.drawString$S$I$I(modes[i], 100 + (50 * i), ty - 14);

var fm=g.getFontMetrics$();
for (var i=0; i < fonts.length; i++) g.drawString$S$I$I(fonts[i], 98 - fm.stringWidth$S(fonts[i]), ty + (12 * i));

var cf=g.getFont$();
for (var i=0; i < fonts.length; i++) {
for (var j=0; j < modes.length; j++) {
g.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,[fonts[i], imodes[j], 10]));
g.drawString$S$I$I(modes[j], 100 + (50 * j), ty);
}
ty+=12;
}
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
args=Clazz.array(String, -1, ["-pdf", "c:/temp/test/gnu-test.pdf", "-img", null]);
if ((args != null ) && (args.length > 0) ) {
var len=args.length;
for (var i=0; i < len; i++) {
if (args[i] == null ) continue;
if (args[i].equals$O("-nw")) {
C$.noWindow=true;
}if (args[i].equals$O("-pdf")) {
if (len > (i + 1)) {
C$.outputPdfFile=args[i + 1];
}}if (args[i].equals$O("-img")) {
if (len > (i + 1)) {
C$.sampleImageFile=args[i + 1];
}}}
} else {
C$.usage$();
System.exit$I(1);
}if (C$.outputPdfFile == null ) {
System.err.println$S("No output file specified");
C$.usage$();
System.exit$I(1);
}var window=Clazz.new_(C$.c$$S$S$Z,[C$.outputPdfFile, C$.sampleImageFile, C$.noWindow]);
}, 1);

Clazz.newMeth(C$, 'usage$',  function () {
System.out.println$S("PDFTest Usage:");
System.out.println$();
System.out.print$S("java -classpath <$CLASSPATH> gnu.jpdf.PDFTest -pdf ");
System.out.print$S("<output-file-path> -img <path-to-image>");
System.out.println$();
System.out.println$();
System.out.println$S("This will produce the pdf file generated at ");
System.out.println$S("<output-file-path> (which should end in \'.pdf\') and ");
System.out.println$S("use the image at <path-to-image>.  Use a small jpg ");
System.out.println$S("preferably since the compression is not so good ");
System.out.println$S("and a pdf file will typically be 10 times as big as ");
System.out.println$S("the image used as a sample.");
System.out.println$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
