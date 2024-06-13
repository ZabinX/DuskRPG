(function(){var P$=Clazz.newPackage("javajs.async"),I$=[[0,'Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Async");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isJS$',  function () {
return (1 ? true :false);
}, 1);

Clazz.newMeth(C$, 'javaSleep$I',  function (ms) {
if (!C$.isJS$()) {
try {
$I$(1).sleep$J(ms);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
