(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream','gnu.jpdf.PDFStringHelper']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFInfo", null, 'gnu.jpdf.PDFObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['author','creator','title','subject','keywords']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$.apply(this, []);
this.title=title;
}, 1);

Clazz.newMeth(C$, 'getAuthor$',  function () {
return this.author;
});

Clazz.newMeth(C$, 'setAuthor$S',  function (v) {
this.author=v;
});

Clazz.newMeth(C$, 'getCreator$',  function () {
return this.creator;
});

Clazz.newMeth(C$, 'setCreator$S',  function (v) {
this.creator=v;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (v) {
this.title=v;
});

Clazz.newMeth(C$, 'getSubject$',  function () {
return this.subject;
});

Clazz.newMeth(C$, 'setSubject$S',  function (v) {
this.subject=v;
});

Clazz.newMeth(C$, 'getKeywords$',  function () {
return this.keywords;
});

Clazz.newMeth(C$, 'setKeywords$S',  function (v) {
this.keywords=v;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (os) {
this.writeStart$java_io_OutputStream(os);
if (this.author != null ) {
$I$(1,"write$java_io_OutputStream$S",[os, "/Author ("]);
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).makePDFString$S(this.author)]);
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}if (this.creator != null ) {
$I$(1,"write$java_io_OutputStream$S",[os, "/Creator ("]);
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).makePDFString$S(this.creator)]);
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}$I$(1).write$java_io_OutputStream$S(os, "/Producer ");
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).makePDFString$S("gnujpdf - gnujpdf.sourceforge.net")]);
$I$(1).write$java_io_OutputStream$S(os, "\n");
if (this.title != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Title ");
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).makePDFString$S(this.title)]);
$I$(1).write$java_io_OutputStream$S(os, "\n");
}if (this.subject != null ) {
$I$(1,"write$java_io_OutputStream$S",[os, "/Subject ("]);
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).makePDFString$S(this.subject)]);
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}if (this.keywords != null ) {
$I$(1,"write$java_io_OutputStream$S",[os, "/Keywords ("]);
$I$(1,"write$java_io_OutputStream$S",[os, $I$(2).makePDFString$S(this.keywords)]);
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}this.writeEnd$java_io_OutputStream(os);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
