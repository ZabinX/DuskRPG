(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Util");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stripLeadingHyphens$S',  function (str) {
if (str == null ) {
return null;
}if (str.startsWith$S("--")) {
return str.substring$I$I(2, str.length$());
} else if (str.startsWith$S("-")) {
return str.substring$I$I(1, str.length$());
}return str;
}, 1);

Clazz.newMeth(C$, 'stripLeadingAndTrailingQuotes$S',  function (str) {
var length=str.length$();
if (length > 1 && str.startsWith$S("\"")  && str.endsWith$S("\"")  && str.substring$I$I(1, length - 1).indexOf$I("\"") == -1 ) {
str=str.substring$I$I(1, length - 1);
}return str;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
