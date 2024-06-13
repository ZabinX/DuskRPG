(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "T3i", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['x','y','z']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$I$I$I',  function (x, y, z) {
this.x=x;
this.y=y;
this.z=z;
});

Clazz.newMeth(C$, 'setT$javajs_util_T3i',  function (t1) {
this.x=t1.x;
this.y=t1.y;
this.z=t1.z;
});

Clazz.newMeth(C$, 'add$javajs_util_T3i',  function (t) {
this.x+=t.x;
this.y+=t.y;
this.z+=t.z;
});

Clazz.newMeth(C$, 'scaleAdd$I$javajs_util_T3i$javajs_util_T3i',  function (s, t1, t2) {
this.x=s * t1.x + t2.x;
this.y=s * t1.y + t2.y;
this.z=s * t1.z + t2.z;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.x ^ this.y ^ this.z ;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.T3i"))) return false;
var t=o;
return (this.x == t.x && this.y == t.y  && this.z == t.z );
});

Clazz.newMeth(C$, 'toString',  function () {
return "(" + this.x + ", " + this.y + ", " + this.z + ")" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
