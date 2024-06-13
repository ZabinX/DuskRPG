(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','java.io.ByteArrayOutputStream','gnu.jpdf.PDFStream','gnu.jpdf.PDFXref']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFOutput");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset'],'O',['os','java.io.OutputStream','baos','java.io.ByteArrayOutputStream','offsets','java.util.Vector','rootID','gnu.jpdf.PDFObject','+infoID']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (os) {
;C$.$init$.apply(this);
this.os=os;
this.offset=0;
this.offsets=Clazz.new_($I$(1,1));
this.baos=Clazz.new_($I$(2,1));
$I$(3).write$java_io_OutputStream$S(this.baos, "%PDF-1.2\n");
$I$(3).write$java_io_OutputStream$S(this.baos, "%\u00e2\u00e3\u00cf\u00d3\n");
this.offset=this.baos.size$();
this.baos.writeTo$java_io_OutputStream(os);
}, 1);

Clazz.newMeth(C$, 'write$gnu_jpdf_PDFObject',  function (ob) {
if (Clazz.instanceOf(ob, "gnu.jpdf.PDFCatalog")) this.rootID=ob;
if (Clazz.instanceOf(ob, "gnu.jpdf.PDFInfo")) this.infoID=ob;
this.offsets.addElement$O(Clazz.new_([ob.getSerialID$(), this.offset],$I$(4,1).c$$I$I));
this.baos.reset$();
ob.write$java_io_OutputStream(this.baos);
this.offset+=this.baos.size$();
this.baos.writeTo$java_io_OutputStream(this.os);
});

Clazz.newMeth(C$, 'close$',  function () {
this.os.flush$();
this.baos.reset$();
$I$(3).write$java_io_OutputStream$S(this.baos, "xref\n");
var firstid=0;
var lastid=-1;
var block=Clazz.new_($I$(1,1));
block.addElement$O(Clazz.new_($I$(4,1).c$$I$I$I,[0, 0, 65535]));
for (var x, $x = this.offsets.iterator$(); $x.hasNext$()&&((x=($x.next$())),1);) {
if (firstid == -1) firstid=x.id;
if (lastid > -1 && x.id != (lastid + 1) ) {
this.writeblock$I$java_util_Vector(firstid, block);
block.removeAllElements$();
firstid=-1;
}block.addElement$O(x);
lastid=x.id;
}
if (firstid > -1) this.writeblock$I$java_util_Vector(firstid, block);
$I$(3).write$java_io_OutputStream$S(this.baos, "trailer\n<<\n");
$I$(3).write$java_io_OutputStream$S(this.baos, "/Size ");
$I$(3,"write$java_io_OutputStream$S",[this.baos, Integer.toString$I(this.offsets.size$() + 1)]);
$I$(3).write$java_io_OutputStream$S(this.baos, "\n");
if (this.rootID != null ) {
$I$(3).write$java_io_OutputStream$S(this.baos, "/Root ");
$I$(3,"write$java_io_OutputStream$S",[this.baos, this.rootID.toString()]);
$I$(3).write$java_io_OutputStream$S(this.baos, "\n");
} else throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Root object is not present in document"]);
if (this.infoID != null ) {
$I$(3).write$java_io_OutputStream$S(this.baos, "/Info ");
$I$(3,"write$java_io_OutputStream$S",[this.baos, this.infoID.toString()]);
$I$(3).write$java_io_OutputStream$S(this.baos, "\n");
}$I$(3).write$java_io_OutputStream$S(this.baos, ">>\nstartxref\n");
$I$(3,"write$java_io_OutputStream$S",[this.baos, Integer.toString$I(this.offset)]);
$I$(3).write$java_io_OutputStream$S(this.baos, "\n%%EOF\n");
this.baos.writeTo$java_io_OutputStream(this.os);
this.os.flush$();
});

Clazz.newMeth(C$, 'writeblock$I$java_util_Vector',  function (firstid, block) {
$I$(3,"write$java_io_OutputStream$S",[this.baos, Integer.toString$I(firstid)]);
$I$(3).write$java_io_OutputStream$S(this.baos, " ");
$I$(3,"write$java_io_OutputStream$S",[this.baos, Integer.toString$I(block.size$())]);
$I$(3).write$java_io_OutputStream$S(this.baos, "\n");
for (var x, $x = block.iterator$(); $x.hasNext$()&&((x=($x.next$())),1);) {
$I$(3,"write$java_io_OutputStream$S",[this.baos, x.toString()]);
$I$(3).write$java_io_OutputStream$S(this.baos, "\n");
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
