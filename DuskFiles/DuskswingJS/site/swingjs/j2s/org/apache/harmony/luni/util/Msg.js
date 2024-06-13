(function(){var P$=Clazz.newPackage("org.apache.harmony.luni.util"),I$=[];
var C$=Clazz.newClass(P$, "Msg");
C$.bundle=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.bundle=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getString$S', function (msg) {
if (C$.bundle == null ) return msg;
try {
return C$.bundle.getString$S(msg);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return msg;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getString$S$O', function (msg, arg) {
return C$.getString$S$OA(msg, Clazz.array(java.lang.Object, -1, [arg]));
}, 1);

Clazz.newMeth(C$, 'getString$S$I', function (msg, arg) {
return C$.getString$S$OA(msg, Clazz.array(java.lang.Object, -1, [Integer.toString$I(arg)]));
}, 1);

Clazz.newMeth(C$, 'getString$S$C', function (msg, arg) {
return C$.getString$S$OA(msg, Clazz.array(java.lang.Object, -1, [String.valueOf$C(arg)]));
}, 1);

Clazz.newMeth(C$, 'getString$S$O$O', function (msg, arg1, arg2) {
return C$.getString$S$OA(msg, Clazz.array(java.lang.Object, -1, [arg1, arg2]));
}, 1);

Clazz.newMeth(C$, 'getString$S$OA', function (msg, args) {
var format=msg;
if (C$.bundle != null ) {
try {
format=C$.bundle.getString$S(msg);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
}return Clazz.load('org.apache.harmony.luni.util.MsgHelp').format$S$OA(format, args);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:59 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
