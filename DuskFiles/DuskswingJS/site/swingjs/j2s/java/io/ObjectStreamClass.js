(function(){var P$=java.io,p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.lang.ref.ReferenceQueue','Thread','java.security.AccessController','java.io.ObjectStreamClass','Void','sun.misc.Unsafe','java.util.ArrayList','java.util.HashSet','java.io.Bits','InternalError','StringBuilder','java.io.ObjectStreamField',['sun.reflect.ReflectionFactory','.GetReflectionFactoryAction'],'sun.reflect.Reflection','sun.reflect.misc.ReflectUtil',['java.io.ObjectStreamClass','.Caches'],['java.io.ObjectStreamClass','.WeakClassKey'],['java.io.ObjectStreamClass','.EntryFuture'],'java.lang.ref.SoftReference','java.lang.reflect.Proxy','Enum','java.io.Externalizable',['java.io.ObjectStreamClass','.ExceptionInfo'],'java.io.ObjectOutputStream','java.io.ObjectInputStream',['java.io.ObjectStreamClass','.ClassDataSlot'],'java.util.Collections','java.util.Arrays',['java.io.ObjectStreamClass','.FieldReflectorKey'],['java.io.ObjectStreamClass','.FieldReflector']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ObjectStreamClass", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['Caches',10],['ExceptionInfo',10],['EntryFuture',10],['ClassDataSlot',8],['MemberSignature',10],['FieldReflector',10],['FieldReflectorKey',10],['WeakClassKey',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasBlockExternalData=true;
},1);

C$.$fields$=[['Z',['isProxy','isEnum','serializable','externalizable','hasWriteObjectData','hasBlockExternalData'],'I',['primDataSize','numObjFields'],'S',['name'],'O',['cl','Class','suid','Long','resolveEx','ClassNotFoundException','deserializeEx','java.io.ObjectStreamClass.ExceptionInfo','+serializeEx','+defaultSerializeEx','fields','java.io.ObjectStreamField[]','fieldRefl','java.io.ObjectStreamClass.FieldReflector','dataLayout','java.io.ObjectStreamClass.ClassDataSlot[]','cons','java.lang.reflect.Constructor','writeObjectMethod','java.lang.reflect.Method','+readObjectMethod','+readObjectNoDataMethod','+writeReplaceMethod','+readResolveMethod','localDesc','java.io.ObjectStreamClass','+superDesc']]
,['O',['NO_FIELDS','java.io.ObjectStreamField[]','+serialPersistentFields','reflFactory','sun.reflect.ReflectionFactory']]]

Clazz.newMeth(C$, 'lookup$Class',  function (cl) {
return C$.lookup$Class$Z(cl, false);
}, 1);

Clazz.newMeth(C$, 'lookupAny$Class',  function (cl) {
return C$.lookup$Class$Z(cl, true);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getSerialVersionUID$',  function () {
if (this.suid == null ) {
this.suid=$I$(4,"doPrivileged$java_security_PrivilegedAction",[((P$.ObjectStreamClass$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ObjectStreamClass$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Long.valueOf$J($I$(5).computeDefaultSUID$Class(this.b$['java.io.ObjectStreamClass'].cl));
});
})()
), Clazz.new_(P$.ObjectStreamClass$1.$init$,[this, null]))]);
}return this.suid.longValue$();
});

Clazz.newMeth(C$, 'forClass$',  function () {
if (this.cl == null ) {
return null;
}if (System.getSecurityManager$() != null ) {
var $caller=$I$(15).getCallerClass$();
if ($I$(16,"needsPackageAccessCheck$ClassLoader$ClassLoader",[$caller.getClassLoader$(), this.cl.getClassLoader$()])) {
$I$(16).checkPackageAccess$Class(this.cl);
}}return this.cl;
});

Clazz.newMeth(C$, 'getFields$',  function () {
return this.getFields$Z(true);
});

Clazz.newMeth(C$, 'getField$S',  function (name) {
return this.getField$S$Class(name, null);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name + ": static final long serialVersionUID = " + Long.$s(this.getSerialVersionUID$()) + "L;" ;
});

Clazz.newMeth(C$, 'lookup$Class$Z',  function (cl, all) {
if (!(all || Clazz.getClass(java.io.Serializable,[]).isAssignableFrom$Class(cl) )) {
return null;
}C$.processQueue$java_lang_ref_ReferenceQueue$java_util_concurrent_ConcurrentMap($I$(17).localDescsQueue, $I$(17).localDescs);
var key=Clazz.new_([cl, $I$(17).localDescsQueue],$I$(18,1).c$$Class$java_lang_ref_ReferenceQueue);
var ref=$I$(17).localDescs.get$O(key);
var entry=null;
if (ref != null ) {
entry=ref.get$();
}var future=null;
if (entry == null ) {
var newEntry=Clazz.new_($I$(19,1));
var newRef=Clazz.new_($I$(20,1).c$$O,[newEntry]);
do {
if (ref != null ) {
$I$(17).localDescs.remove$O$O(key, ref);
}ref=$I$(17).localDescs.putIfAbsent$O$O(key, newRef);
if (ref != null ) {
entry=ref.get$();
}} while (ref != null  && entry == null  );
if (entry == null ) {
future=newEntry;
}}if (Clazz.instanceOf(entry, "java.io.ObjectStreamClass")) {
return entry;
}if (Clazz.instanceOf(entry, "java.io.ObjectStreamClass.EntryFuture")) {
future=entry;
if (future.getOwner$() === $I$(3).currentThread$() ) {
entry=null;
} else {
entry=future.get$();
}}if (entry == null ) {
try {
entry=Clazz.new_(C$.c$$Class,[cl]);
} catch (th) {
entry=th;
}
if (future.set$O(entry)) {
$I$(17).localDescs.put$O$O(key, Clazz.new_($I$(20,1).c$$O,[entry]));
} else {
entry=future.get$();
}}if (Clazz.instanceOf(entry, "java.io.ObjectStreamClass")) {
return entry;
} else if (Clazz.instanceOf(entry, "java.lang.RuntimeException")) {
throw entry;
} else if (Clazz.instanceOf(entry, "java.lang.Error")) {
throw entry;
} else {
throw Clazz.new_($I$(11,1).c$$S,["unexpected entry: " + entry]);
}}, 1);

Clazz.newMeth(C$, 'c$$Class',  function (cl) {
;C$.$init$.apply(this);
this.cl=cl;
this.name=cl.getName$();
this.isProxy=$I$(21).isProxyClass$Class(cl);
this.isEnum=Clazz.getClass($I$(22)).isAssignableFrom$Class(cl);
this.serializable=true;
this.externalizable=Clazz.getClass($I$(23),['readExternal$java_io_ObjectInput','writeExternal$java_io_ObjectOutput']).isAssignableFrom$Class(cl);
var superCl=cl.getSuperclass$();
this.superDesc=(superCl != null ) ? C$.lookup$Class$Z(superCl, false) : null;
this.localDesc=this;
if (this.serializable) {
$I$(4,"doPrivileged$java_security_PrivilegedAction",[((P$.ObjectStreamClass$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ObjectStreamClass$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['java.io.ObjectStreamClass'].isEnum) {
this.b$['java.io.ObjectStreamClass'].suid=Long.valueOf$J(0);
this.b$['java.io.ObjectStreamClass'].fields=$I$(5).NO_FIELDS;
return null;
}if (this.$finals$.cl.isArray$()) {
this.b$['java.io.ObjectStreamClass'].fields=$I$(5).NO_FIELDS;
return null;
}this.b$['java.io.ObjectStreamClass'].suid=$I$(5).getDeclaredSUID$Class(this.$finals$.cl);
try {
this.b$['java.io.ObjectStreamClass'].fields=$I$(5).getSerialFields$Class(this.$finals$.cl);
p$1.computeFieldOffsets.apply(this.b$['java.io.ObjectStreamClass'], []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.InvalidClassException")){
this.b$['java.io.ObjectStreamClass'].serializeEx=this.b$['java.io.ObjectStreamClass'].deserializeEx=Clazz.new_([e.classname, e.getMessage$()],$I$(24,1).c$$S$S);
this.b$['java.io.ObjectStreamClass'].fields=$I$(5).NO_FIELDS;
} else {
throw e;
}
}
if (this.b$['java.io.ObjectStreamClass'].externalizable) {
this.b$['java.io.ObjectStreamClass'].cons=$I$(5).getExternalizableConstructor$Class(this.$finals$.cl);
} else {
this.b$['java.io.ObjectStreamClass'].cons=$I$(5).getSerializableConstructor$Class(this.$finals$.cl);
this.b$['java.io.ObjectStreamClass'].writeObjectMethod=$I$(5,"getPrivateMethod$Class$S$ClassA$Class",[this.$finals$.cl, "writeObject", Clazz.array(Class, -1, [Clazz.getClass($I$(25))]), $I$(6).TYPE]);
this.b$['java.io.ObjectStreamClass'].readObjectMethod=$I$(5,"getPrivateMethod$Class$S$ClassA$Class",[this.$finals$.cl, "readObject", Clazz.array(Class, -1, [Clazz.getClass($I$(26))]), $I$(6).TYPE]);
this.b$['java.io.ObjectStreamClass'].readObjectNoDataMethod=$I$(5,"getPrivateMethod$Class$S$ClassA$Class",[this.$finals$.cl, "readObjectNoData", null, $I$(6).TYPE]);
this.b$['java.io.ObjectStreamClass'].hasWriteObjectData=(this.b$['java.io.ObjectStreamClass'].writeObjectMethod != null );
}this.b$['java.io.ObjectStreamClass'].writeReplaceMethod=$I$(5,"getInheritableMethod$Class$S$ClassA$Class",[this.$finals$.cl, "writeReplace", null, Clazz.getClass(java.lang.Object)]);
this.b$['java.io.ObjectStreamClass'].readResolveMethod=$I$(5,"getInheritableMethod$Class$S$ClassA$Class",[this.$finals$.cl, "readResolve", null, Clazz.getClass(java.lang.Object)]);
return null;
});
})()
), Clazz.new_(P$.ObjectStreamClass$2.$init$,[this, {cl:cl}]))]);
} else {
this.suid=Long.valueOf$J(0);
this.fields=C$.NO_FIELDS;
}try {
this.fieldRefl=C$.getReflector$java_io_ObjectStreamFieldA$java_io_ObjectStreamClass(this.fields, this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.InvalidClassException")){
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
} else {
throw ex;
}
}
if (this.deserializeEx == null ) {
if (this.isEnum) {
this.deserializeEx=Clazz.new_($I$(24,1).c$$S$S,[this.name, "enum type"]);
} else if (this.cons == null ) {
this.deserializeEx=Clazz.new_($I$(24,1).c$$S$S,[this.name, "no valid constructor"]);
}}for (var i=0; i < this.fields.length; i++) {
if (this.fields[i].getField$() == null ) {
this.defaultSerializeEx=Clazz.new_([this.name, "unmatched serializable field(s) declared"],$I$(24,1).c$$S$S);
}}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initProxy$Class$ClassNotFoundException$java_io_ObjectStreamClass',  function (cl, resolveEx, superDesc) {
this.cl=cl;
this.resolveEx=resolveEx;
this.superDesc=superDesc;
this.isProxy=true;
this.serializable=true;
this.suid=Long.valueOf$J(0);
this.fields=C$.NO_FIELDS;
if (cl != null ) {
this.localDesc=C$.lookup$Class$Z(cl, true);
if (!this.localDesc.isProxy) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["cannot bind proxy descriptor to a non-proxy class"]);
}this.name=this.localDesc.name;
this.externalizable=this.localDesc.externalizable;
this.cons=this.localDesc.cons;
this.writeReplaceMethod=this.localDesc.writeReplaceMethod;
this.readResolveMethod=this.localDesc.readResolveMethod;
this.deserializeEx=this.localDesc.deserializeEx;
}this.fieldRefl=C$.getReflector$java_io_ObjectStreamFieldA$java_io_ObjectStreamClass(this.fields, this.localDesc);
});

Clazz.newMeth(C$, 'initNonProxy$java_io_ObjectStreamClass$Class$ClassNotFoundException$java_io_ObjectStreamClass',  function (model, cl, resolveEx, superDesc) {
this.cl=cl;
this.resolveEx=resolveEx;
this.superDesc=superDesc;
this.name=model.name;
this.suid=Long.valueOf$J(model.getSerialVersionUID$());
this.isProxy=false;
this.isEnum=model.isEnum;
this.serializable=model.serializable;
this.externalizable=model.externalizable;
this.hasBlockExternalData=model.hasBlockExternalData;
this.hasWriteObjectData=model.hasWriteObjectData;
this.fields=model.fields;
this.primDataSize=model.primDataSize;
this.numObjFields=model.numObjFields;
if (cl != null ) {
this.localDesc=C$.lookup$Class$Z(cl, true);
if (this.localDesc.isProxy) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["cannot bind non-proxy descriptor to a proxy class"]);
}if (this.isEnum != this.localDesc.isEnum ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,[this.isEnum ? "cannot bind enum descriptor to a non-enum class" : "cannot bind non-enum descriptor to an enum class"]);
}if (this.serializable == this.localDesc.serializable  && !cl.isArray$()  && Long.$ne(this.suid.longValue$(),this.localDesc.getSerialVersionUID$() ) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.localDesc.name, "local class incompatible: stream classdesc serialVersionUID = " + this.suid + ", local class serialVersionUID = " + Long.$s(this.localDesc.getSerialVersionUID$()) ]);
}if (!C$.classNamesEqual$S$S(this.name, this.localDesc.name)) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.localDesc.name, "local class name incompatible with stream class name \"" + this.name + "\"" ]);
}if (!this.isEnum) {
if ((this.serializable == this.localDesc.serializable ) && (this.externalizable != this.localDesc.externalizable ) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.localDesc.name, "Serializable incompatible with Externalizable"]);
}if ((this.serializable != this.localDesc.serializable ) || (this.externalizable != this.localDesc.externalizable ) || !(this.serializable || this.externalizable )  ) {
this.deserializeEx=Clazz.new_($I$(24,1).c$$S$S,[this.localDesc.name, "class invalid for deserialization"]);
}}this.cons=this.localDesc.cons;
this.writeObjectMethod=this.localDesc.writeObjectMethod;
this.readObjectMethod=this.localDesc.readObjectMethod;
this.readObjectNoDataMethod=this.localDesc.readObjectNoDataMethod;
this.writeReplaceMethod=this.localDesc.writeReplaceMethod;
this.readResolveMethod=this.localDesc.readResolveMethod;
if (this.deserializeEx == null ) {
this.deserializeEx=this.localDesc.deserializeEx;
}}this.fieldRefl=C$.getReflector$java_io_ObjectStreamFieldA$java_io_ObjectStreamClass(this.fields, this.localDesc);
this.fields=this.fieldRefl.getFields$();
});

Clazz.newMeth(C$, 'readNonProxy$java_io_ObjectInputStream',  function ($in) {
this.name=$in.readUTF$();
this.suid=Long.valueOf$J($in.readLong$());
this.isProxy=false;
var flags=$in.readByte$();
this.hasWriteObjectData=((flags & 1) != 0);
this.hasBlockExternalData=((flags & 8) != 0);
this.externalizable=((flags & 4) != 0);
var sflag=((flags & 2) != 0);
if (this.externalizable && sflag ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.name, "serializable and externalizable flags conflict"]);
}this.serializable=this.externalizable || sflag ;
this.isEnum=((flags & 16) != 0);
if (this.isEnum && Long.$ne(this.suid.longValue$(),0 ) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.name, "enum descriptor has non-zero serialVersionUID: " + this.suid]);
}var numFields=$in.readShort$();
if (this.isEnum && numFields != 0 ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.name, "enum descriptor has non-zero field count: " + numFields]);
}this.fields=(numFields > 0) ? Clazz.array($I$(13), [numFields]) : C$.NO_FIELDS;
for (var i=0; i < numFields; i++) {
var tcode=String.fromCharCode($in.readByte$());
var fname=$in.readUTF$();
var signature=((tcode == "L") || (tcode == "[") ) ? $in.readTypeString$() :  String.instantialize(Clazz.array(Character.TYPE, -1, [tcode]));
try {
this.fields[i]=Clazz.new_($I$(13,1).c$$S$S$Z,[fname, signature, false]);
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.name, "invalid descriptor for field " + fname]).initCause$Throwable(e);
} else {
throw e;
}
}
}
p$1.computeFieldOffsets.apply(this, []);
});

Clazz.newMeth(C$, 'writeNonProxy$java_io_ObjectOutputStream',  function (out) {
out.writeUTF$S(this.name);
out.writeLong$J(this.getSerialVersionUID$());
var flags=($b$[0] = 0, $b$[0]);
if (this.externalizable) {
flags|=4;
var protocol=out.getProtocolVersion$();
if (protocol != 1) {
flags|=8;
}} else if (this.serializable) {
flags|=2;
}if (this.hasWriteObjectData) {
flags|=1;
}if (this.isEnum) {
flags|=16;
}out.writeByte$I(flags);
out.writeShort$I(this.fields.length);
for (var i=0; i < this.fields.length; i++) {
var f=this.fields[i];
out.writeByte$I(f.getTypeCode$().$c());
out.writeUTF$S(f.getName$());
if (!f.isPrimitive$()) {
out.writeTypeString$S(f.getTypeString$());
}}
});

Clazz.newMeth(C$, 'getResolveException$',  function () {
return this.resolveEx;
});

Clazz.newMeth(C$, 'checkDeserialize$',  function () {
if (this.deserializeEx != null ) {
throw this.deserializeEx.newInvalidClassException$();
}});

Clazz.newMeth(C$, 'checkSerialize$',  function () {
if (this.serializeEx != null ) {
throw this.serializeEx.newInvalidClassException$();
}});

Clazz.newMeth(C$, 'checkDefaultSerialize$',  function () {
if (this.defaultSerializeEx != null ) {
throw this.defaultSerializeEx.newInvalidClassException$();
}});

Clazz.newMeth(C$, 'getSuperDesc$',  function () {
return this.superDesc;
});

Clazz.newMeth(C$, 'getLocalDesc$',  function () {
return this.localDesc;
});

Clazz.newMeth(C$, 'getFields$Z',  function (copy) {
return copy ? this.fields.clone$() : this.fields;
});

Clazz.newMeth(C$, 'getField$S$Class',  function (name, type) {
for (var i=0; i < this.fields.length; i++) {
var f=this.fields[i];
if (f.getName$().equals$O(name)) {
if (type == null  || (type === Clazz.getClass(java.lang.Object)  && !f.isPrimitive$() ) ) {
return f;
}var ftype=f.getType$();
if (ftype != null  && type.isAssignableFrom$Class(ftype) ) {
return f;
}}}
return null;
});

Clazz.newMeth(C$, 'isProxy$',  function () {
return this.isProxy;
});

Clazz.newMeth(C$, 'isEnum$',  function () {
return this.isEnum;
});

Clazz.newMeth(C$, 'isExternalizable$',  function () {
return this.externalizable;
});

Clazz.newMeth(C$, 'isSerializable$',  function () {
return this.serializable;
});

Clazz.newMeth(C$, 'hasBlockExternalData$',  function () {
return this.hasBlockExternalData;
});

Clazz.newMeth(C$, 'hasWriteObjectData$',  function () {
return this.hasWriteObjectData;
});

Clazz.newMeth(C$, 'isInstantiable$',  function () {
return (this.cons != null );
});

Clazz.newMeth(C$, 'hasWriteObjectMethod$',  function () {
return (this.writeObjectMethod != null );
});

Clazz.newMeth(C$, 'hasReadObjectMethod$',  function () {
return (this.readObjectMethod != null );
});

Clazz.newMeth(C$, 'hasReadObjectNoDataMethod$',  function () {
return (this.readObjectNoDataMethod != null );
});

Clazz.newMeth(C$, 'hasWriteReplaceMethod$',  function () {
return (this.writeReplaceMethod != null );
});

Clazz.newMeth(C$, 'hasReadResolveMethod$',  function () {
return (this.readResolveMethod != null );
});

Clazz.newMeth(C$, 'newInstance$',  function () {
if (this.cons != null ) {
try {
return this.cons.newInstance$OA(Clazz.array(java.lang.Object, -1, []));
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalAccessException")){
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
} else {
throw ex;
}
}
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}});

Clazz.newMeth(C$, 'invokeWriteObject$O$java_io_ObjectOutputStream',  function (obj, out) {
if (this.writeObjectMethod != null ) {
try {
this.writeObjectMethod.invoke$O$OA(obj, Clazz.array(java.lang.Object, -1, [out]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
var th=ex.getTargetException$();
if (Clazz.instanceOf(th, "java.io.IOException")) {
throw th;
} else {
C$.throwMiscException$Throwable(th);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}});

Clazz.newMeth(C$, 'invokeReadObject$O$java_io_ObjectInputStream',  function (obj, $in) {
if (this.readObjectMethod != null ) {
try {
this.readObjectMethod.invoke$O$OA(obj, Clazz.array(java.lang.Object, -1, [$in]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
var th=ex.getTargetException$();
if (Clazz.instanceOf(th, "java.lang.ClassNotFoundException")) {
throw th;
} else if (Clazz.instanceOf(th, "java.io.IOException")) {
throw th;
} else {
C$.throwMiscException$Throwable(th);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}});

Clazz.newMeth(C$, 'invokeReadObjectNoData$O',  function (obj) {
if (this.readObjectNoDataMethod != null ) {
try {
this.readObjectNoDataMethod.invoke$O$OA(obj, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
var th=ex.getTargetException$();
if (Clazz.instanceOf(th, "java.io.ObjectStreamException")) {
throw th;
} else {
C$.throwMiscException$Throwable(th);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}});

Clazz.newMeth(C$, 'invokeWriteReplace$O',  function (obj) {
if (this.writeReplaceMethod != null ) {
try {
return this.writeReplaceMethod.invoke$O$OA(obj, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
var th=ex.getTargetException$();
if (Clazz.instanceOf(th, "java.io.ObjectStreamException")) {
throw th;
} else {
C$.throwMiscException$Throwable(th);
throw Clazz.new_($I$(11,1).c$$Throwable,[th]);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}});

Clazz.newMeth(C$, 'invokeReadResolve$O',  function (obj) {
if (this.readResolveMethod != null ) {
try {
return this.readResolveMethod.invoke$O$OA(obj, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
var th=ex.getTargetException$();
if (Clazz.instanceOf(th, "java.io.ObjectStreamException")) {
throw th;
} else {
C$.throwMiscException$Throwable(th);
throw Clazz.new_($I$(11,1).c$$Throwable,[th]);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
throw Clazz.new_($I$(11,1).c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}});

Clazz.newMeth(C$, 'getClassDataLayout$',  function () {
if (this.dataLayout == null ) {
this.dataLayout=p$1.getClassDataLayout0.apply(this, []);
}return this.dataLayout;
});

Clazz.newMeth(C$, 'getClassDataLayout0',  function () {
var slots=Clazz.new_($I$(8,1));
var start=this.cl;
var end=this.cl;
while (end != null  && Clazz.getClass(java.io.Serializable,[]).isAssignableFrom$Class(end) ){
end=end.getSuperclass$();
}
var oscNames=Clazz.new_($I$(9,1).c$$I,[3]);
for (var d=this; d != null ; d=d.superDesc) {
if (oscNames.contains$O(d.name)) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["Circular reference."]);
} else {
oscNames.add$O(d.name);
}var searchName=(d.cl != null ) ? d.cl.getName$() : d.name;
var match=null;
for (var c=start; c !== end ; c=c.getSuperclass$()) {
if (searchName.equals$O(c.getName$())) {
match=c;
break;
}}
if (match != null ) {
for (var c=start; c !== match ; c=c.getSuperclass$()) {
slots.add$O(Clazz.new_([C$.lookup$Class$Z(c, true), false],$I$(27,1).c$$java_io_ObjectStreamClass$Z));
}
start=match.getSuperclass$();
}slots.add$O(Clazz.new_([p$1.getVariantFor$Class.apply(d, [match]), true],$I$(27,1).c$$java_io_ObjectStreamClass$Z));
}
for (var c=start; c !== end ; c=c.getSuperclass$()) {
slots.add$O(Clazz.new_([C$.lookup$Class$Z(c, true), false],$I$(27,1).c$$java_io_ObjectStreamClass$Z));
}
$I$(28).reverse$java_util_List(slots);
return slots.toArray$OA(Clazz.array($I$(27), [slots.size$()]));
}, p$1);

Clazz.newMeth(C$, 'getPrimDataSize$',  function () {
return this.primDataSize;
});

Clazz.newMeth(C$, 'getNumObjFields$',  function () {
return this.numObjFields;
});

Clazz.newMeth(C$, 'getPrimFieldValues$O$BA',  function (obj, buf) {
this.fieldRefl.getPrimFieldValues$O$BA(obj, buf);
});

Clazz.newMeth(C$, 'setPrimFieldValues$O$BA',  function (obj, buf) {
this.fieldRefl.setPrimFieldValues$O$BA(obj, buf);
});

Clazz.newMeth(C$, 'getObjFieldValues$O$OA',  function (obj, vals) {
this.fieldRefl.getObjFieldValues$O$OA(obj, vals);
});

Clazz.newMeth(C$, 'setObjFieldValues$O$OA',  function (obj, vals) {
this.fieldRefl.setObjFieldValues$O$OA(obj, vals);
});

Clazz.newMeth(C$, 'computeFieldOffsets',  function () {
this.primDataSize=0;
this.numObjFields=0;
var firstObjIndex=-1;
for (var i=0; i < this.fields.length; i++) {
var f=this.fields[i];
switch ((f.getTypeCode$()).$c()) {
case 90:
case 66:
f.setOffset$I(this.primDataSize++);
break;
case 67:
case 83:
f.setOffset$I(this.primDataSize);
this.primDataSize+=2;
break;
case 73:
case 70:
f.setOffset$I(this.primDataSize);
this.primDataSize+=4;
break;
case 74:
case 68:
f.setOffset$I(this.primDataSize);
this.primDataSize+=8;
break;
case 91:
case 76:
f.setOffset$I(this.numObjFields++);
if (firstObjIndex == -1) {
firstObjIndex=i;
}break;
default:
throw Clazz.new_($I$(11,1));
}
}
if (firstObjIndex != -1 && firstObjIndex + this.numObjFields != this.fields.length ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.name, "illegal field order"]);
}}, p$1);

Clazz.newMeth(C$, 'getVariantFor$Class',  function (cl) {
if (this.cl === cl ) {
return this;
}var desc=Clazz.new_(C$);
if (this.isProxy) {
desc.initProxy$Class$ClassNotFoundException$java_io_ObjectStreamClass(cl, null, this.superDesc);
} else {
desc.initNonProxy$java_io_ObjectStreamClass$Class$ClassNotFoundException$java_io_ObjectStreamClass(this, cl, null, this.superDesc);
}return desc;
}, p$1);

Clazz.newMeth(C$, 'getExternalizableConstructor$Class',  function (cl) {
try {
var cons=cl.getDeclaredConstructor$ClassA(null);
cons.setAccessible$Z(true);
return ((cons.getModifiers$() & 1) != 0) ? cons : null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getSerializableConstructor$Class',  function (cl) {
var initCl=cl;
while (Clazz.getClass(java.io.Serializable,[]).isAssignableFrom$Class(initCl)){
if ((initCl=initCl.getSuperclass$()) == null ) {
return null;
}}
try {
var cons=initCl.getDeclaredConstructor$ClassA(null);
var mods=cons.getModifiers$();
if ((mods & 2) != 0 || ((mods & (5)) == 0 && !C$.packageEquals$Class$Class(cl, initCl) ) ) {
return null;
}cons=C$.reflFactory.newConstructorForSerialization$Class$java_lang_reflect_Constructor(cl, cons);
cons.setAccessible$Z(true);
return cons;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getInheritableMethod$Class$S$ClassA$Class',  function (cl, name, argTypes, returnType) {
var meth=null;
var defCl=cl;
while (defCl != null ){
try {
meth=defCl.getDeclaredMethod$S$ClassA(name, argTypes);
break;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
defCl=defCl.getSuperclass$();
} else {
throw ex;
}
}
}
if ((meth == null ) || (meth.getReturnType$() !== returnType ) ) {
return null;
}meth.setAccessible$Z(true);
var mods=meth.getModifiers$();
if ((mods & (1032)) != 0) {
return null;
} else if ((mods & (5)) != 0) {
return meth;
} else if ((mods & 2) != 0) {
return (cl === defCl ) ? meth : null;
} else {
return C$.packageEquals$Class$Class(cl, defCl) ? meth : null;
}}, 1);

Clazz.newMeth(C$, 'getPrivateMethod$Class$S$ClassA$Class',  function (cl, name, argTypes, returnType) {
try {
var meth=cl.getDeclaredMethod$S$ClassA(name, argTypes);
meth.setAccessible$Z(true);
var mods=meth.getModifiers$();
return ((meth.getReturnType$() === returnType ) && ((mods & 8) == 0) && ((mods & 2) != 0)  ) ? meth : null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'packageEquals$Class$Class',  function (cl1, cl2) {
return (cl1.getClassLoader$() === cl2.getClassLoader$()  && C$.getPackageName$Class(cl1).equals$O(C$.getPackageName$Class(cl2)) );
}, 1);

Clazz.newMeth(C$, 'getPackageName$Class',  function (cl) {
var s=cl.getName$();
var i=s.lastIndexOf$I("[");
if (i >= 0) {
s=s.substring$I(i + 2);
}i=s.lastIndexOf$I(".");
return (i >= 0) ? s.substring$I$I(0, i) : "";
}, 1);

Clazz.newMeth(C$, 'classNamesEqual$S$S',  function (name1, name2) {
name1=name1.substring$I(name1.lastIndexOf$I(".") + 1);
name2=name2.substring$I(name2.lastIndexOf$I(".") + 1);
return name1.equals$O(name2);
}, 1);

Clazz.newMeth(C$, 'getClassSignature$Class',  function (cl) {
var sbuf=Clazz.new_($I$(12,1));
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
} else if (cl === $I$(6).TYPE ) {
sbuf.append$C("V");
} else {
throw Clazz.new_($I$(11,1));
}} else {
sbuf.append$S('L' + cl.getName$().replace$C$C(".", "/") + ';' );
}return sbuf.toString();
}, 1);

Clazz.newMeth(C$, 'getMethodSignature$ClassA$Class',  function (paramTypes, retType) {
var sbuf=Clazz.new_($I$(12,1));
sbuf.append$C("(");
for (var i=0; i < paramTypes.length; i++) {
sbuf.append$S(C$.getClassSignature$Class(paramTypes[i]));
}
sbuf.append$C(")");
sbuf.append$S(C$.getClassSignature$Class(retType));
return sbuf.toString();
}, 1);

Clazz.newMeth(C$, 'throwMiscException$Throwable',  function (th) {
if (Clazz.instanceOf(th, "java.lang.RuntimeException")) {
throw th;
} else if (Clazz.instanceOf(th, "java.lang.Error")) {
throw th;
} else {
var ex=Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected exception type"]);
ex.initCause$Throwable(th);
throw ex;
}}, 1);

Clazz.newMeth(C$, 'getSerialFields$Class',  function (cl) {
var fields;
if (Clazz.getClass(java.io.Serializable,[]).isAssignableFrom$Class(cl) && !Clazz.getClass($I$(23),['readExternal$java_io_ObjectInput','writeExternal$java_io_ObjectOutput']).isAssignableFrom$Class(cl) && !$I$(21).isProxyClass$Class(cl) && !cl.isInterface$()  ) {
if ((fields=C$.getDeclaredSerialFields$Class(cl)) == null ) {
fields=C$.getDefaultSerialFields$Class(cl);
}$I$(29).sort$OA(fields);
} else {
fields=C$.NO_FIELDS;
}return fields;
}, 1);

Clazz.newMeth(C$, 'getDeclaredSerialFields$Class',  function (cl) {
var serialPersistentFields=null;
try {
var f=cl.getDeclaredField$S("serialPersistentFields");
var mask=26;
if ((f.getModifiers$() & mask) == mask) {
f.setAccessible$Z(true);
serialPersistentFields=f.get$O(null);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (serialPersistentFields == null ) {
return null;
} else if (serialPersistentFields.length == 0) {
return C$.NO_FIELDS;
}var boundFields=Clazz.array($I$(13), [serialPersistentFields.length]);
var fieldNames=Clazz.new_($I$(9,1).c$$I,[serialPersistentFields.length]);
for (var i=0; i < serialPersistentFields.length; i++) {
var spf=serialPersistentFields[i];
var fname=spf.getName$();
if (fieldNames.contains$O(fname)) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["multiple serializable fields named " + fname]);
}fieldNames.add$O(fname);
try {
var f=cl.getDeclaredField$S(fname);
if ((f.getType$() === spf.getType$() ) && ((f.getModifiers$() & 8) == 0) ) {
boundFields[i]=Clazz.new_([f, spf.isUnshared$(), true],$I$(13,1).c$$java_lang_reflect_Field$Z$Z);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchFieldException")){
} else {
throw ex;
}
}
if (boundFields[i] == null ) {
boundFields[i]=Clazz.new_([fname, spf.getType$(), spf.isUnshared$()],$I$(13,1).c$$S$Class$Z);
}}
return boundFields;
}, 1);

Clazz.newMeth(C$, 'getDefaultSerialFields$Class',  function (cl) {
var clFields=cl.getDeclaredFields$();
var list=Clazz.new_($I$(8,1));
var mask=136;
for (var i=0; i < clFields.length; i++) {
if ((clFields[i].getModifiers$() & mask) == 0) {
list.add$O(Clazz.new_($I$(13,1).c$$java_lang_reflect_Field$Z$Z,[clFields[i], false, true]));
}}
var size=list.size$();
return (size == 0) ? C$.NO_FIELDS : list.toArray$OA(Clazz.array($I$(13), [size]));
}, 1);

Clazz.newMeth(C$, 'getDeclaredSUID$Class',  function (cl) {
return Long.valueOf$J(1);
}, 1);

Clazz.newMeth(C$, 'computeDefaultSUID$Class',  function (cl) {
if (false && !Clazz.getClass(java.io.Serializable,[]).isAssignableFrom$Class(cl)  || $I$(21).isProxyClass$Class(cl) ) {
return 0;
}return 1;
}, 1);

Clazz.newMeth(C$, 'getReflector$java_io_ObjectStreamFieldA$java_io_ObjectStreamClass',  function (fields, localDesc) {
var cl=(localDesc != null  && fields.length > 0 ) ? localDesc.cl : null;
C$.processQueue$java_lang_ref_ReferenceQueue$java_util_concurrent_ConcurrentMap($I$(17).reflectorsQueue, $I$(17).reflectors);
var key=Clazz.new_([cl, fields, $I$(17).reflectorsQueue],$I$(30,1).c$$Class$java_io_ObjectStreamFieldA$java_lang_ref_ReferenceQueue);
var ref=$I$(17).reflectors.get$O(key);
var entry=null;
if (ref != null ) {
entry=ref.get$();
}var future=null;
if (entry == null ) {
var newEntry=Clazz.new_($I$(19,1));
var newRef=Clazz.new_($I$(20,1).c$$O,[newEntry]);
do {
if (ref != null ) {
$I$(17).reflectors.remove$O$O(key, ref);
}ref=$I$(17).reflectors.putIfAbsent$O$O(key, newRef);
if (ref != null ) {
entry=ref.get$();
}} while (ref != null  && entry == null  );
if (entry == null ) {
future=newEntry;
}}if (Clazz.instanceOf(entry, "java.io.ObjectStreamClass.FieldReflector")) {
return entry;
} else if (Clazz.instanceOf(entry, "java.io.ObjectStreamClass.EntryFuture")) {
entry=(entry).get$();
} else if (entry == null ) {
try {
entry=Clazz.new_([C$.matchFields$java_io_ObjectStreamFieldA$java_io_ObjectStreamClass(fields, localDesc)],$I$(31,1).c$$java_io_ObjectStreamFieldA);
} catch (th) {
entry=th;
}
future.set$O(entry);
$I$(17).reflectors.put$O$O(key, Clazz.new_($I$(20,1).c$$O,[entry]));
}if (Clazz.instanceOf(entry, "java.io.ObjectStreamClass.FieldReflector")) {
return entry;
} else if (Clazz.instanceOf(entry, "java.io.InvalidClassException")) {
throw entry;
} else if (Clazz.instanceOf(entry, "java.lang.RuntimeException")) {
throw entry;
} else if (Clazz.instanceOf(entry, "java.lang.Error")) {
throw entry;
} else {
throw Clazz.new_($I$(11,1).c$$S,["unexpected entry: " + entry]);
}}, 1);

Clazz.newMeth(C$, 'matchFields$java_io_ObjectStreamFieldA$java_io_ObjectStreamClass',  function (fields, localDesc) {
var localFields=(localDesc != null ) ? localDesc.fields : C$.NO_FIELDS;
var matches=Clazz.array($I$(13), [fields.length]);
for (var i=0; i < fields.length; i++) {
var f=fields[i];
var m=null;
for (var j=0; j < localFields.length; j++) {
var lf=localFields[j];
if (f.getName$().equals$O(lf.getName$())) {
if ((f.isPrimitive$() || lf.isPrimitive$() ) && f.getTypeCode$() != lf.getTypeCode$() ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[localDesc.name, "incompatible types for field " + f.getName$()]);
}if (lf.getField$() != null ) {
m=Clazz.new_([lf.getField$(), lf.isUnshared$(), false],$I$(13,1).c$$java_lang_reflect_Field$Z$Z);
} else {
m=Clazz.new_([lf.getName$(), lf.getSignature$(), lf.isUnshared$()],$I$(13,1).c$$S$S$Z);
}}}
if (m == null ) {
m=Clazz.new_([f.getName$(), f.getSignature$(), false],$I$(13,1).c$$S$S$Z);
}m.setOffset$I(f.getOffset$());
matches[i]=m;
}
return matches;
}, 1);

Clazz.newMeth(C$, 'processQueue$java_lang_ref_ReferenceQueue$java_util_concurrent_ConcurrentMap',  function (queue, map) {
var ref;
while ((ref=queue.poll$()) != null ){
map.remove$O(ref);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NO_FIELDS=Clazz.array($I$(13), [0]);
C$.serialPersistentFields=C$.NO_FIELDS;
C$.reflFactory=$I$(4,"doPrivileged$java_security_PrivilegedAction",[Clazz.new_($I$(14,1))]);
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "Caches", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['localDescs','java.util.concurrent.ConcurrentMap','+reflectors','localDescsQueue','java.lang.ref.ReferenceQueue','+reflectorsQueue']]]

C$.$static$=function(){C$.$static$=0;
C$.localDescs=Clazz.new_($I$(1,1));
C$.reflectors=Clazz.new_($I$(1,1));
C$.localDescsQueue=Clazz.new_($I$(2,1));
C$.reflectorsQueue=Clazz.new_($I$(2,1));
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "ExceptionInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['className','message']]]

Clazz.newMeth(C$, 'c$$S$S',  function (cn, msg) {
;C$.$init$.apply(this);
this.className=cn;
this.message=msg;
}, 1);

Clazz.newMeth(C$, 'newInvalidClassException$',  function () {
return Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[this.className, this.message]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "EntryFuture", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.owner=$I$(3).currentThread$();
this.entry=C$.unset;
},1);

C$.$fields$=[['O',['owner','Thread','entry','java.lang.Object']]
,['O',['unset','java.lang.Object']]]

Clazz.newMeth(C$, 'set$O',  function (entry) {
if (this.entry !== C$.unset ) {
return false;
}this.entry=entry;
this.notifyAll$();
return true;
});

Clazz.newMeth(C$, 'get$',  function () {
var interrupted=false;
while (this.entry === C$.unset ){
try {
this.wait$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
interrupted=true;
} else {
throw ex;
}
}
}
if (interrupted) {
$I$(4,"doPrivileged$java_security_PrivilegedAction",[((P$.ObjectStreamClass$EntryFuture$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ObjectStreamClass$EntryFuture$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(3).currentThread$().interrupt$();
return null;
});
})()
), Clazz.new_(P$.ObjectStreamClass$EntryFuture$1.$init$,[this, null]))]);
}return this.entry;
});

Clazz.newMeth(C$, 'getOwner$',  function () {
return this.owner;
});

C$.$static$=function(){C$.$static$=0;
C$.unset= Clazz.new_();
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "ClassDataSlot", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasData'],'O',['desc','java.io.ObjectStreamClass']]]

Clazz.newMeth(C$, 'c$$java_io_ObjectStreamClass$Z',  function (desc, hasData) {
;C$.$init$.apply(this);
this.desc=desc;
this.hasData=hasData;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "MemberSignature", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','signature'],'O',['member','java.lang.reflect.Member']]]

Clazz.newMeth(C$, 'c$$java_lang_reflect_Field',  function (field) {
;C$.$init$.apply(this);
this.member=field;
this.name=field.getName$();
this.signature=$I$(5,"getClassSignature$Class",[field.getType$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_lang_reflect_Constructor',  function (cons) {
;C$.$init$.apply(this);
this.member=cons;
this.name=cons.getName$();
this.signature=$I$(5,"getMethodSignature$ClassA$Class",[cons.getParameterTypes$(), $I$(6).TYPE]);
}, 1);

Clazz.newMeth(C$, 'c$$java_lang_reflect_Method',  function (meth) {
;C$.$init$.apply(this);
this.member=meth;
this.name=meth.getName$();
this.signature=$I$(5,"getMethodSignature$ClassA$Class",[meth.getParameterTypes$(), meth.getReturnType$()]);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "FieldReflector", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numPrimFields'],'O',['fields','java.io.ObjectStreamField[]','readKeys','long[]','+writeKeys','offsets','int[]','typeCodes','char[]','types','Class[]']]
,['O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$java_io_ObjectStreamFieldA',  function (fields) {
;C$.$init$.apply(this);
this.fields=fields;
var nfields=fields.length;
this.readKeys=[] ||Clazz.array(Long.TYPE, [nfields]);
this.writeKeys=[] ||Clazz.array(Long.TYPE, [nfields]);
this.offsets=[] ||Clazz.array(Integer.TYPE, [nfields]);
this.typeCodes=Clazz.array(Character.TYPE, [nfields]);
var typeList=Clazz.new_($I$(8,1));
var usedKeys=Clazz.new_($I$(9,1));
for (var i=0; i < nfields; i++) {
var f=fields[i];
var rf=f.getField$();
var key=(rf != null ) ? C$.unsafe.objectFieldOffset$java_lang_reflect_Field(rf) : -1;
this.readKeys[i]=key;
this.writeKeys[i]=usedKeys.add$O(Long.valueOf$J(key)) ? key : -1;
this.offsets[i]=f.getOffset$();
this.typeCodes[i]=f.getTypeCode$();
if (!f.isPrimitive$()) {
typeList.add$O((rf != null ) ? rf.getType$() : null);
}}
this.types=typeList.toArray$OA(Clazz.array(Class, [typeList.size$()]));
this.numPrimFields=nfields - this.types.length;
}, 1);

Clazz.newMeth(C$, 'getFields$',  function () {
return this.fields;
});

Clazz.newMeth(C$, 'getPrimFieldValues$O$BA',  function (obj, buf) {
if (obj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}for (var i=0; i < this.numPrimFields; i++) {
var key=this.readKeys[i];
var off=this.offsets[i];
switch ((this.typeCodes[i]).$c()) {
case 90:
$I$(10,"putBoolean$BA$I$Z",[buf, off, C$.unsafe.getBoolean$O$J(obj, key)]);
break;
case 66:
buf[off]=C$.unsafe.getByte$O$J(obj, key);
break;
case 67:
$I$(10,"putChar$BA$I$C",[buf, off, C$.unsafe.getChar$O$J(obj, key)]);
break;
case 83:
$I$(10,"putShort$BA$I$H",[buf, off, C$.unsafe.getShort$O$J(obj, key)]);
break;
case 73:
$I$(10,"putInt$BA$I$I",[buf, off, C$.unsafe.getInt$O$J(obj, key)]);
break;
case 70:
$I$(10,"putFloat$BA$I$F",[buf, off, C$.unsafe.getFloat$O$J(obj, key)]);
break;
case 74:
$I$(10,"putLong$BA$I$J",[buf, off, C$.unsafe.getLong$O$J(obj, key)]);
break;
case 68:
$I$(10,"putDouble$BA$I$D",[buf, off, C$.unsafe.getDouble$O$J(obj, key)]);
break;
default:
throw Clazz.new_($I$(11,1));
}
}
});

Clazz.newMeth(C$, 'setPrimFieldValues$O$BA',  function (obj, buf) {
if (obj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}for (var i=0; i < this.numPrimFields; i++) {
var key=this.writeKeys[i];
if (Long.$eq(key,-1 )) {
continue;
}var off=this.offsets[i];
switch ((this.typeCodes[i]).$c()) {
case 90:
C$.unsafe.putBoolean$O$J$Z(obj, key, $I$(10).getBoolean$BA$I(buf, off));
break;
case 66:
C$.unsafe.putByte$O$J$B(obj, key, buf[off]);
break;
case 67:
C$.unsafe.putChar$O$J$C(obj, key, $I$(10).getChar$BA$I(buf, off));
break;
case 83:
C$.unsafe.putShort$O$J$H(obj, key, $I$(10).getShort$BA$I(buf, off));
break;
case 73:
C$.unsafe.putInt$O$J$I(obj, key, $I$(10).getInt$BA$I(buf, off));
break;
case 70:
C$.unsafe.putFloat$O$J$F(obj, key, $I$(10).getFloat$BA$I(buf, off));
break;
case 74:
C$.unsafe.putLong$O$J$J(obj, key, $I$(10).getLong$BA$I(buf, off));
break;
case 68:
C$.unsafe.putDouble$O$J$D(obj, key, $I$(10).getDouble$BA$I(buf, off));
break;
default:
throw Clazz.new_($I$(11,1));
}
}
});

Clazz.newMeth(C$, 'getObjFieldValues$O$OA',  function (obj, vals) {
if (obj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}for (var i=this.numPrimFields; i < this.fields.length; i++) {
switch ((this.typeCodes[i]).$c()) {
case 76:
case 91:
vals[this.offsets[i]]=C$.unsafe.getObject$O$J(obj, this.readKeys[i]);
break;
default:
throw Clazz.new_($I$(11,1));
}
}
});

Clazz.newMeth(C$, 'setObjFieldValues$O$OA',  function (obj, vals) {
if (obj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}for (var i=this.numPrimFields; i < this.fields.length; i++) {
var key=this.writeKeys[i];
if (Long.$eq(key,-1 )) {
continue;
}switch ((this.typeCodes[i]).$c()) {
case 76:
case 91:
var val=vals[this.offsets[i]];
if (val != null  && !this.types[i - this.numPrimFields].isInstance$O(val) ) {
var f=this.fields[i].getField$();
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["cannot assign instance of " + val.getClass$().getName$() + " to field " + f.getDeclaringClass$().getName$() + "." + f.getName$() + " of type " + f.getType$().getName$() + " in instance of " + obj.getClass$().getName$() ]);
}C$.unsafe.putObject$O$J$O(obj, key, val);
break;
default:
throw Clazz.new_($I$(11,1));
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(7).getUnsafe$();
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "FieldReflectorKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.lang.ref.WeakReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['nullClass'],'I',['hash'],'S',['sigs']]]

Clazz.newMeth(C$, 'c$$Class$java_io_ObjectStreamFieldA$java_lang_ref_ReferenceQueue',  function (cl, fields, queue) {
;C$.superclazz.c$$O$java_lang_ref_ReferenceQueue.apply(this,[cl, queue]);C$.$init$.apply(this);
this.nullClass=(cl == null );
var sbuf=Clazz.new_($I$(12,1));
for (var i=0; i < fields.length; i++) {
var f=fields[i];
sbuf.append$S(f.getName$()).append$S(f.getSignature$());
}
this.sigs=sbuf.toString();
this.hash=System.identityHashCode$O(cl) + this.sigs.hashCode$();
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.hash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.io.ObjectStreamClass.FieldReflectorKey")) {
var other=obj;
var referent;
return (this.nullClass ? other.nullClass : ((referent=this.get$()) != null ) && (referent === other.get$() ) ) && this.sigs.equals$O(other.sigs) ;
} else {
return false;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectStreamClass, "WeakClassKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.lang.ref.WeakReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash']]]

Clazz.newMeth(C$, 'c$$Class$java_lang_ref_ReferenceQueue',  function (cl, refQueue) {
;C$.superclazz.c$$O$java_lang_ref_ReferenceQueue.apply(this,[cl, refQueue]);C$.$init$.apply(this);
this.hash=System.identityHashCode$O(cl);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.hash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.io.ObjectStreamClass.WeakClassKey")) {
var referent=this.get$();
return (referent != null ) && (referent === (obj).get$() ) ;
} else {
return false;
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
