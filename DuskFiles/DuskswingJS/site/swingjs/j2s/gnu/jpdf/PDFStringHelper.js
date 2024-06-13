(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFStringHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makePDFString$S',  function (s) {
if (s.indexOf$S("(") > -1) s=C$.replace$S$S$S(s, "(", "\\(");
if (s.indexOf$S(")") > -1) s=C$.replace$S$S$S(s, ")", "\\)");
return "(" + s + ")" ;
}, 1);

Clazz.newMeth(C$, 'replace$S$S$S',  function (source, removeThis, replaceWith) {
var b=Clazz.new_($I$(1,1));
var p=0;
var c=0;
while (c > -1){
if ((c=source.indexOf$S$I(removeThis, p)) > -1) {
b.append$S(source.substring$I$I(p, c));
b.append$S(replaceWith);
p=c + 1;
}}
if (p < source.length$()) b.append$S(source.substring$I(p));
return b.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
