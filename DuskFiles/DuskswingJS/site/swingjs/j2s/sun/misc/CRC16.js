(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CRC16");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, 'update$B',  function (aByte) {
var a;
var b;
a=(aByte|0);
for (var count=7; count >= 0; count--) {
a=a << 1;
b=(a >>> 8) & 1;
if ((this.value & 32768) != 0) {
this.value=((this.value << 1) + b) ^ 4129;
} else {
this.value=(this.value << 1) + b;
}}
this.value=this.value & 65535;
return;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.value=0;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
