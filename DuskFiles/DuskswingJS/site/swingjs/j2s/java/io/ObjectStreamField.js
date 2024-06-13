(function(){var P$=java.io,I$=[[0,'sun.reflect.Reflection','sun.reflect.misc.ReflectUtil','StringBuilder','Void','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ObjectStreamField", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
},1);

C$.$fields$=[['Z',['unshared'],'I',['offset'],'S',['name','signature'],'O',['type','Class','field','java.lang.reflect.Field']]]

Clazz.newMeth(C$, 'c$$S$Class',  function (name, type) {
C$.c$$S$Class$Z.apply(this, [name, type, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class$Z',  function (name, type, unshared) {
;C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.name=name;
this.type=type;
this.unshared=unshared;
this.signature=C$.getClassSignature$Class(type).intern$();
this.field=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z',  function (name, signature, unshared) {
;C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.name=name;
this.signature=signature.intern$();
this.unshared=unshared;
this.field=null;
switch ((signature.charCodeAt$I(0))) {
case 90:
this.type=Boolean.TYPE;
break;
case 66:
this.type=Byte.TYPE;
break;
case 67:
this.type=Character.TYPE;
break;
case 83:
this.type=Short.TYPE;
break;
case 73:
this.type=Integer.TYPE;
break;
case 74:
this.type=Long.TYPE;
break;
case 70:
this.type=Float.TYPE;
break;
case 68:
this.type=Double.TYPE;
break;
case 76:
case 91:
this.type=Clazz.getClass(java.lang.Object);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal signature"]);
}
}, 1);

Clazz.newMeth(C$, 'c$$java_lang_reflect_Field$Z$Z',  function (field, unshared, showType) {
;C$.$init$.apply(this);
this.field=field;
this.unshared=unshared;
this.name=field.getName$();
var ftype=field.getType$();
this.type=(showType || ftype.isPrimitive$() ) ? ftype : Clazz.getClass(java.lang.Object);
this.signature=C$.getClassSignature$Class(ftype).intern$();
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getType$',  function () {
if (System.getSecurityManager$() != null ) {
var $caller=$I$(1).getCallerClass$();
if ($I$(2,"needsPackageAccessCheck$ClassLoader$ClassLoader",[$caller.getClassLoader$(), this.type.getClassLoader$()])) {
$I$(2).checkPackageAccess$Class(this.type);
}}return this.type;
});

Clazz.newMeth(C$, 'getTypeCode$',  function () {
return this.signature.charAt$I(0);
});

Clazz.newMeth(C$, 'getTypeString$',  function () {
return this.isPrimitive$() ? null : this.signature;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$I',  function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'isPrimitive$',  function () {
var tcode=this.signature.charAt$I(0);
return ((tcode != "L") && (tcode != "[") );
});

Clazz.newMeth(C$, 'isUnshared$',  function () {
return this.unshared;
});

Clazz.newMeth(C$, 'compareTo$O',  function (obj) {
var other=obj;
var isPrim=this.isPrimitive$();
if (isPrim != other.isPrimitive$() ) {
return isPrim ? -1 : 1;
}return this.name.compareTo$S(other.name);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.signature + ' ' + this.name ;
});

Clazz.newMeth(C$, 'getField$',  function () {
return this.field;
});

Clazz.newMeth(C$, 'getSignature$',  function () {
return this.signature;
});

Clazz.newMeth(C$, 'getClassSignature$Class',  function (cl) {
var sbuf=Clazz.new_($I$(3,1));
while (cl.isArray$()){
sbuf.append$C("[");
cl=cl.getComponentType$();
}
if (cl.isPrimitive$()) {
if (cl === Integer.TYPE ) {
sbuf.append$C("I");
} else if (cl === Byte.TYPE ) {
sbuf.append$C("B");
} else if (cl === Long.TYPE ) {
sbuf.append$C("J");
} else if (cl === Float.TYPE ) {
sbuf.append$C("F");
} else if (cl === Double.TYPE ) {
sbuf.append$C("D");
} else if (cl === Short.TYPE ) {
sbuf.append$C("S");
} else if (cl === Character.TYPE ) {
sbuf.append$C("C");
} else if (cl === Boolean.TYPE ) {
sbuf.append$C("Z");
} else if (cl === $I$(4).TYPE ) {
sbuf.append$C("V");
} else {
throw Clazz.new_($I$(5,1));
}} else {
sbuf.append$S('L' + cl.getName$().replace$C$C(".", "/") + ';' );
}return sbuf.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
