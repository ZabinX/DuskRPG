(function(){var P$=Clazz.newPackage("gov.nist.jama.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Maths");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hypot$D$D',  function (a, b) {
var r;
if (Math.abs(a) > Math.abs(b) ) {
r=b / a;
r=Math.abs(a) * Math.sqrt(1 + r * r);
} else if (b != 0 ) {
r=a / b;
r=Math.abs(b) * Math.sqrt(1 + r * r);
} else {
r=0.0;
}return r;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
