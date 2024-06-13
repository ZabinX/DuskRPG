(function(){var P$=Clazz.newPackage("org.apache.harmony.luni.util"),I$=[];
var C$=Clazz.newClass(P$, "MsgHelp");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'format$S$OA', function (format, args) {
var answer=Clazz.new_(Clazz.load('StringBuilder').c$$I,[format.length$() + (args.length * 20)]);
var argStrings=Clazz.array(String, [args.length]);
for (var i=0; i < args.length; ++i) {
if (args[i] == null ) argStrings[i]="<null>";
 else argStrings[i]=args[i].toString();
}
var lastI=0;
for (var i=format.indexOf$I$I("{", 0); i >= 0; i=format.indexOf$I$I("{", lastI)) {
if (i != 0 && format.charAt$I(i - 1) == "\\" ) {
if (i != 1) answer.append$S(format.substring$I$I(lastI, i - 1));
answer.append$C("{");
lastI=i + 1;
} else {
if (i > format.length$() - 3) {
answer.append$S(format.substring$I$I(lastI, format.length$()));
lastI=format.length$();
} else {
var argnum=($b$[0] = ((format.charCodeAt$I(i + 1)) - 48), $b$[0]);
if (argnum < 0 || format.charAt$I(i + 2) != "}" ) {
answer.append$S(format.substring$I$I(lastI, i + 1));
lastI=i + 1;
} else {
answer.append$S(format.substring$I$I(lastI, i));
if (argnum >= argStrings.length) answer.append$S("<missing argument>");
 else answer.append$S(argStrings[argnum]);
lastI=i + 3;
}}}}
if (lastI < format.length$()) answer.append$S(format.substring$I$I(lastI, format.length$()));
return answer.toString();
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale$S', function (locale, resource) {
return Clazz.load('java.util.ResourceBundle').getBundle$S(resource);
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:59 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
