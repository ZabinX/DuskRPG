(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSPrintLayout");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageableX=0;
this.imageableY=0;
this.paperHeight=((Math.min(11.0, 11.69) * 72)|0);
this.paperWidth=((Math.min(8.5, 8.27) * 72)|0);
this.imageableHeight=this.paperHeight;
this.imageableWidth=this.paperWidth;
this.layout="portrait";
this.asPDF=true;
},1);

C$.$fields$=[['Z',['asPDF'],'I',['imageableX','imageableY','paperHeight','paperWidth','imageableHeight','imageableWidth'],'S',['layout'],'O',['paper','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.asPDF=true;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
