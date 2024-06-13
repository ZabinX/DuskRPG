(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','gnu.jpdf.PDFPageList','gnu.jpdf.PDFCatalog','gnu.jpdf.PDFInfo','gnu.jpdf.PDFOutline','gnu.jpdf.PDFFont','gnu.jpdf.PDFOutput']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFDocument", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fontid=0;
this.imageid=0;
},1);

C$.$fields$=[['I',['objser','fontid','imageid'],'O',['objects','java.util.Vector','catalog','gnu.jpdf.PDFCatalog','info','gnu.jpdf.PDFInfo','pdfPageList','gnu.jpdf.PDFPageList','outline','gnu.jpdf.PDFOutline','defaultOutlineBorder','gnu.jpdf.PDFObject','fonts','java.util.Vector']]
,['O',['PDF_PAGE_MODES','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (pagemode) {
;C$.$init$.apply(this);
this.objser=1;
this.objects=Clazz.new_($I$(1,1));
this.fonts=Clazz.new_($I$(1,1));
this.add$gnu_jpdf_PDFObject(this.pdfPageList=Clazz.new_($I$(2,1)));
this.add$gnu_jpdf_PDFObject(this.catalog=Clazz.new_($I$(3,1).c$$gnu_jpdf_PDFPageList$I,[this.pdfPageList, pagemode]));
this.add$gnu_jpdf_PDFObject(this.info=Clazz.new_($I$(4,1)));
this.add$gnu_jpdf_PDFObject(this.getOutline$());
}, 1);

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFObject',  function (obj) {
this.objects.addElement$O(obj);
obj.objser=this.objser++;
obj.pdfDocument=this;
if (Clazz.instanceOf(obj, "gnu.jpdf.PDFPage")) this.pdfPageList.add$gnu_jpdf_PDFPage(obj);
return obj.objser;
});

Clazz.newMeth(C$, 'getPage$I',  function (page) {
return this.pdfPageList.getPage$I(page);
});

Clazz.newMeth(C$, 'getOutline$',  function () {
if (this.outline == null ) {
this.outline=Clazz.new_($I$(5,1));
this.catalog.setOutline$gnu_jpdf_PDFOutline(this.outline);
}return this.outline;
});

Clazz.newMeth(C$, 'getFont$S$S$I',  function (type, font, style) {
for (var ft, $ft = this.fonts.iterator$(); $ft.hasNext$()&&((ft=($ft.next$())),1);) {
if (ft.equals$S$S$I(type, font, style)) return ft;
}
++this.fontid;
var ft=Clazz.new_($I$(6,1).c$$S$S$S$I,["/F" + this.fontid, type, font, style]);
this.add$gnu_jpdf_PDFObject(ft);
this.fonts.addElement$O(ft);
return ft;
});

Clazz.newMeth(C$, 'setImageName$gnu_jpdf_PDFImage',  function (img) {
++this.imageid;
img.setName$S("/Image" + this.imageid);
return img.getName$();
});

Clazz.newMeth(C$, 'setPDFInfo$gnu_jpdf_PDFInfo',  function (info) {
this.info=info;
});

Clazz.newMeth(C$, 'getPDFInfo$',  function () {
return this.info;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
var pos=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[os]);
for (var o, $o = this.objects.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
pos.write$gnu_jpdf_PDFObject(o);
}
pos.close$();
os.flush$();
});

C$.$static$=function(){C$.$static$=0;
C$.PDF_PAGE_MODES=Clazz.array(String, -1, ["/UseNone", "/UseOutlines", "/UseThumbs", "/FullScreen"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
