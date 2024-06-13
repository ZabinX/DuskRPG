(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Dimension", null, 'java.awt.geom.Dimension2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dimension',  function (d) {
C$.c$$I$I.apply(this, [d.width, d.height]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (width, height) {
Clazz.super_(C$, this);
this.width=width;
this.height=height;
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return Clazz.new_(C$.c$$I$I,[this.width, this.height]);
});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (d) {
this.width=d.width;
this.height=d.height;
});

Clazz.newMeth(C$, 'setSize$I$I',  function (width, height) {
this.width=width;
this.height=height;
});

Clazz.newMeth(C$, 'setSize$D$D',  function (width, height) {
this.width=(Math.ceil(width)|0);
this.height=(Math.ceil(height)|0);
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "java.awt.Dimension")) {
var d=obj;
return (this.width == d.width) && (this.height == d.height) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var sum=this.width + this.height;
return (sum * (sum + 1)/2|0) + this.width;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[width=" + this.width + ",height=" + this.height + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
