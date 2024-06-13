(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.FileOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSPrintJob", null, 'gnu.jpdf.PDFJob');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['fileName','jobTitle'],'O',['jobAttributes','java.awt.JobAttributes','pageAttributes','java.awt.PageAttributes','properties','java.util.Properties']]]

Clazz.newMeth(C$, 'setAttributes$S$java_awt_JobAttributes$java_awt_PageAttributes',  function (jobtitle, jobAttributes, pageAttributes) {
p$1.setFile$S.apply(this, [jobtitle]);
this.jobAttributes=jobAttributes;
this.pageAttributes=pageAttributes;
});

Clazz.newMeth(C$, 'setProperties$S$java_util_Properties',  function (jobtitle, properties) {
p$1.setFile$S.apply(this, [jobtitle]);
this.properties=properties;
});

Clazz.newMeth(C$, 'setFile$S',  function (jobtitle) {
this.fileName=this.jobTitle=jobtitle;
if (this.fileName != null  && !this.fileName.endsWith$S(".pdf") ) this.fileName+=".pdf";
try {
this.os=(this.fileName == null  ? Clazz.new_($I$(1,1)) : Clazz.new_($I$(2,1).c$$S,[this.fileName]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getOutputStream$',  function () {
return this.os;
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
var name=(this.pageAttributes != null  ? this.pageAttributes.getOrientationRequested$().toString() : this.properties != null  ? this.properties.getProperty$S("orientation") : null);
return this.getGraphics$I("landscape".equals$O(name) ? 0 : 1);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
