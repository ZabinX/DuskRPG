(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream','StringBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFObject", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['objser'],'S',['type'],'O',['pdfDocument','gnu.jpdf.PDFDocument']]]

Clazz.newMeth(C$, 'c$$S',  function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getSerialID$',  function () {
return this.objser;
});

Clazz.newMeth(C$, 'getPDFDocument$',  function () {
return this.pdfDocument;
});

Clazz.newMeth(C$, 'writeStart$java_io_OutputStream',  function (os) {
$I$(1,"write$java_io_OutputStream$S",[os, Integer.toString$I(this.objser)]);
$I$(1).write$java_io_OutputStream$S(os, " 0 obj\n<<\n");
if (this.type != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Type ");
$I$(1).write$java_io_OutputStream$S(os, this.type);
$I$(1).write$java_io_OutputStream$S(os, "\n");
}});

Clazz.newMeth(C$, 'writeEnd$java_io_OutputStream',  function (os) {
$I$(1).write$java_io_OutputStream$S(os, ">>\nendobj\n");
});

Clazz.newMeth(C$, 'toString',  function () {
return "" + this.objser + " 0 R" ;
});

Clazz.newMeth(C$, 'toArray$java_util_Vector',  function (v) {
if (v.size$() == 0) return "";
var b=Clazz.new_($I$(2,1));
var bs="[";
for (var x, $x = v.iterator$(); $x.hasNext$()&&((x=($x.next$())),1);) {
b.append$S(bs);
b.append$S(x.toString());
bs=" ";
}
b.append$S("]");
return b.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
