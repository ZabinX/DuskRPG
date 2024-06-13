(function(){var P$=Clazz.newPackage("java.awt.print"),I$=[[0,'java.awt.AWTError','java.awt.print.PageFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrinterJob");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPrinterJob$',  function () {
var nm=System.getProperty$S$S("java.awt.printerjob", null);
try {
return Clazz.forName(nm).newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
throw Clazz.new_($I$(1,1).c$$S,["PrinterJob not found: " + nm]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_($I$(1,1).c$$S,["Could not instantiate PrinterJob: " + nm]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(1,1).c$$S,["Could not access PrinterJob: " + nm]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'printDialog$javax_print_attribute_PrintRequestAttributeSet',  function (attributes) {
if (attributes == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["attributes"]);
}return this.printDialog$();
});

Clazz.newMeth(C$, 'pageDialog$javax_print_attribute_PrintRequestAttributeSet',  function (attributes) {
if (attributes == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["attributes"]);
}return this.pageDialog$java_awt_print_PageFormat(this.defaultPage$());
});

Clazz.newMeth(C$, 'defaultPage$',  function () {
return this.defaultPage$java_awt_print_PageFormat(Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'getPageFormat$javax_print_attribute_PrintRequestAttributeSet',  function (attributes) {
var pf=this.defaultPage$();
return pf;
});

Clazz.newMeth(C$, 'print$javax_print_attribute_PrintRequestAttributeSet',  function (attributes) {
this.print$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
