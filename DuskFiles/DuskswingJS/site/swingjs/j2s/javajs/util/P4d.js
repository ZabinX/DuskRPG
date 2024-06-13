(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "P4d", null, 'javajs.util.T4d');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'new4$D$D$D$D',  function (x, y, z, w) {
var pt=Clazz.new_(C$);
pt.set4$D$D$D$D(x, y, z, w);
return pt;
}, 1);

Clazz.newMeth(C$, 'newPt$javajs_util_P4d',  function (value) {
var pt=Clazz.new_(C$);
pt.set4$D$D$D$D(value.x, value.y, value.z, value.w);
return pt;
}, 1);

Clazz.newMeth(C$, 'distance4$javajs_util_P4d',  function (p1) {
var dx=this.x - p1.x;
var dy=this.y - p1.y;
var dz=this.z - p1.z;
var dw=this.w - p1.w;
return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
