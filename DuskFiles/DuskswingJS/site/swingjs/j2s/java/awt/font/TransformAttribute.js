(function(){var P$=Clazz.newPackage("java.awt.font"),p$1={},I$=[[0,'java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransformAttribute", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['transform','java.awt.geom.AffineTransform']]
,['O',['IDENTITY','java.awt.font.TransformAttribute']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform',  function (transform) {
;C$.$init$.apply(this);
if (transform != null  && !transform.isIdentity$() ) {
this.transform=Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform,[transform]);
}}, 1);

Clazz.newMeth(C$, 'getTransform$',  function () {
var at=this.transform;
return (at == null ) ? Clazz.new_($I$(1,1)) : Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform,[at]);
});

Clazz.newMeth(C$, 'isIdentity$',  function () {
return this.transform == null ;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
if (this.transform == null ) {
this.transform=Clazz.new_($I$(1,1));
}s.defaultWriteObject$();
}, p$1);

Clazz.newMeth(C$, 'readResolve',  function () {
if (this.transform == null  || this.transform.isIdentity$() ) {
return C$.IDENTITY;
}return this;
}, p$1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.transform == null  ? 0 : this.transform.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
if (rhs != null ) {
try {
var that=rhs;
if (this.transform == null ) {
return that.transform == null ;
}return this.transform.equals$O(that.transform);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.IDENTITY=Clazz.new_(C$.c$$java_awt_geom_AffineTransform,[null]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
