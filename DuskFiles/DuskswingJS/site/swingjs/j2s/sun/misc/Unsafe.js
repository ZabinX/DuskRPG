(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.lang.reflect.Modifier','IllegalAccessError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Unsafe");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['ARRAY_BOOLEAN_BASE_OFFSET','ARRAY_BYTE_BASE_OFFSET','ARRAY_SHORT_BASE_OFFSET','ARRAY_CHAR_BASE_OFFSET','ARRAY_INT_BASE_OFFSET','ARRAY_LONG_BASE_OFFSET','ARRAY_FLOAT_BASE_OFFSET','ARRAY_DOUBLE_BASE_OFFSET','ARRAY_OBJECT_BASE_OFFSET','ARRAY_BOOLEAN_INDEX_SCALE','ARRAY_BYTE_INDEX_SCALE','ARRAY_SHORT_INDEX_SCALE','ARRAY_CHAR_INDEX_SCALE','ARRAY_INT_INDEX_SCALE','ARRAY_LONG_INDEX_SCALE','ARRAY_FLOAT_INDEX_SCALE','ARRAY_DOUBLE_INDEX_SCALE','ARRAY_OBJECT_INDEX_SCALE','ADDRESS_SIZE'],'O',['theUnsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUnsafe$',  function () {
return C$.theUnsafe;
}, 1);

Clazz.newMeth(C$, 'getInt$O$J',  function (o, offset) {
return o[offset] ||0;
});

Clazz.newMeth(C$, 'putInt$O$J$I',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getObject$O$J',  function (o, offset) {
return o[offset] ||null;
});

Clazz.newMeth(C$, 'putObject$O$J$O',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getBoolean$O$J',  function (o, offset) {
return o[offset] ||false;
});

Clazz.newMeth(C$, 'putBoolean$O$J$Z',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getByte$O$J',  function (o, offset) {
return $b$[0] = o[offset] ||0, $b$[0];
});

Clazz.newMeth(C$, 'putByte$O$J$B',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getShort$O$J',  function (o, offset) {
return $s$[0] = o[offset] ||0, $s$[0];
});

Clazz.newMeth(C$, 'putShort$O$J$H',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getChar$O$J',  function (o, offset) {
return String.fromCharCode(o[offset] ||0);
});

Clazz.newMeth(C$, 'putChar$O$J$C',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getLong$O$J',  function (o, offset) {
return o[offset] ||0;
});

Clazz.newMeth(C$, 'putLong$O$J$J',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getFloat$O$J',  function (o, offset) {
return o[offset] ||0;
});

Clazz.newMeth(C$, 'putFloat$O$J$F',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getDouble$O$J',  function (o, offset) {
return o[offset] ||0;
});

Clazz.newMeth(C$, 'putDouble$O$J$D',  function (o, offset, x) {

o[offset] = x
});

Clazz.newMeth(C$, 'getInt$O$I',  function (o, offset) {
return this.getInt$O$J(o, offset);
});

Clazz.newMeth(C$, 'putInt$O$I$I',  function (o, offset, x) {
this.putInt$O$J$I(o, offset, x);
});

Clazz.newMeth(C$, 'getObject$O$I',  function (o, offset) {
return this.getObject$O$J(o, offset);
});

Clazz.newMeth(C$, 'putObject$O$I$O',  function (o, offset, x) {
this.putObject$O$J$O(o, offset, x);
});

Clazz.newMeth(C$, 'getBoolean$O$I',  function (o, offset) {
return this.getBoolean$O$J(o, offset);
});

Clazz.newMeth(C$, 'putBoolean$O$I$Z',  function (o, offset, x) {
this.putBoolean$O$J$Z(o, offset, x);
});

Clazz.newMeth(C$, 'getByte$O$I',  function (o, offset) {
return this.getByte$O$J(o, offset);
});

Clazz.newMeth(C$, 'putByte$O$I$B',  function (o, offset, x) {
this.putByte$O$J$B(o, offset, x);
});

Clazz.newMeth(C$, 'getShort$O$I',  function (o, offset) {
return this.getShort$O$J(o, offset);
});

Clazz.newMeth(C$, 'putShort$O$I$H',  function (o, offset, x) {
this.putShort$O$J$H(o, offset, x);
});

Clazz.newMeth(C$, 'getChar$O$I',  function (o, offset) {
return this.getChar$O$J(o, offset);
});

Clazz.newMeth(C$, 'putChar$O$I$C',  function (o, offset, x) {
this.putChar$O$J$C(o, offset, x);
});

Clazz.newMeth(C$, 'getLong$O$I',  function (o, offset) {
return this.getLong$O$J(o, offset);
});

Clazz.newMeth(C$, 'putLong$O$I$J',  function (o, offset, x) {
this.putLong$O$J$J(o, offset, x);
});

Clazz.newMeth(C$, 'getFloat$O$I',  function (o, offset) {
return this.getFloat$O$J(o, offset);
});

Clazz.newMeth(C$, 'putFloat$O$I$F',  function (o, offset, x) {
this.putFloat$O$J$F(o, offset, x);
});

Clazz.newMeth(C$, 'getDouble$O$I',  function (o, offset) {
return this.getDouble$O$J(o, offset);
});

Clazz.newMeth(C$, 'putDouble$O$I$D',  function (o, offset, x) {
this.putDouble$O$J$D(o, offset, x);
});

Clazz.newMeth(C$, 'getByte$J',  function (address) {
return $b$[0] = C$.a[address] ||0, $b$[0];
});

Clazz.newMeth(C$, 'putByte$J$B',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getShort$J',  function (address) {
return $s$[0] = C$.a[address] ||0, $s$[0];
});

Clazz.newMeth(C$, 'putShort$J$H',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getChar$J',  function (address) {
return String.fromCharCode(C$.a[address] ||0);
});

Clazz.newMeth(C$, 'putChar$J$C',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getInt$J',  function (address) {
return C$.a[address] ||0;
});

Clazz.newMeth(C$, 'putInt$J$I',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getLong$J',  function (address) {
return C$.a[address] ||0;
});

Clazz.newMeth(C$, 'putLong$J$J',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getFloat$J',  function (address) {
return C$.a[address] ||0;
});

Clazz.newMeth(C$, 'putFloat$J$F',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getDouble$J',  function (address) {
return C$.a[address] ||0;
});

Clazz.newMeth(C$, 'putDouble$J$D',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'getAddress$J',  function (address) {
return address;
});

Clazz.newMeth(C$, 'putAddress$J$J',  function (address, x) {

C$.a[address] = x
});

Clazz.newMeth(C$, 'allocateMemory$J',  function (bytes) {

C$.a = [];
return bytes;
});

Clazz.newMeth(C$, 'reallocateMemory$J$J',  function (address, bytes) {
return bytes;
});

Clazz.newMeth(C$, 'setMemory$O$J$J$B',  function (o, offset, bytes, value) {
for (var i=0; Long.$lt(i,bytes ); ([i,i=Long.$inc(i,1)][0])) {

C$.a[offset++] = value
}
});

Clazz.newMeth(C$, 'setMemory$J$J$B',  function (address, bytes, value) {
this.setMemory$O$J$J$B(null, address, bytes, value);
});

Clazz.newMeth(C$, 'copyMemory$O$J$O$J$J',  function (srcBase, srcOffset, destBase, destOffset, bytes) {
for (var i=0; Long.$lt(i,bytes ); ([i,i=Long.$inc(i,1)][0])) {

C$.a[destOffset++] = C$.a[srcOffset++]
}
});

Clazz.newMeth(C$, 'copyMemory$J$J$J',  function (srcAddress, destAddress, bytes) {
this.copyMemory$O$J$O$J$J(null, srcAddress, null, destAddress, bytes);
});

Clazz.newMeth(C$, 'freeMemory$J',  function (address) {
});

Clazz.newMeth(C$, 'fieldOffset$java_lang_reflect_Field',  function (f) {
if ($I$(1,"isStatic$I",[f.getModifiers$()])) return Long.$ival(this.staticFieldOffset$java_lang_reflect_Field(f));
 else return Long.$ival(this.objectFieldOffset$java_lang_reflect_Field(f));
});

Clazz.newMeth(C$, 'staticFieldBase$Class',  function (c) {
var fields=c.getDeclaredFields$();
for (var i=0; i < fields.length; i++) {
if ($I$(1,"isStatic$I",[fields[i].getModifiers$()])) {
return this.staticFieldBase$java_lang_reflect_Field(fields[i]);
}}
return null;
});

Clazz.newMeth(C$, 'staticFieldOffset$java_lang_reflect_Field',  function (f) {
var name=f.getName$();
return 1 ? name :0;
});

Clazz.newMeth(C$, 'objectFieldOffset$java_lang_reflect_Field',  function (f) {
var name=f.getName$();
return 1 ? name :0;
});

Clazz.newMeth(C$, 'staticFieldBase$java_lang_reflect_Field',  function (f) {
return Integer.valueOf$I(0);
});

Clazz.newMeth(C$, 'shouldBeInitialized$Class',  function (c) {
return true;
});

Clazz.newMeth(C$, 'ensureClassInitialized$Class',  function (c) {
});

Clazz.newMeth(C$, 'arrayBaseOffset$Class',  function (arrayClass) {
return 0;
});

Clazz.newMeth(C$, 'arrayIndexScale$Class',  function (arrayClass) {
return 0;
});

Clazz.newMeth(C$, 'addressSize$',  function () {
return 4;
});

Clazz.newMeth(C$, 'pageSize$',  function () {
return 1024;
});

Clazz.newMeth(C$, 'defineClass$S$BA$I$I$ClassLoader$java_security_ProtectionDomain',  function (name, b, off, len, loader, protectionDomain) {
return null;
});

Clazz.newMeth(C$, 'defineAnonymousClass$Class$BA$OA',  function (hostClass, data, cpPatches) {
return null;
});

Clazz.newMeth(C$, 'allocateInstance$Class',  function (cls) {
return null;
});

Clazz.newMeth(C$, 'monitorEnter$O',  function (o) {
});

Clazz.newMeth(C$, 'monitorExit$O',  function (o) {
});

Clazz.newMeth(C$, 'tryMonitorEnter$O',  function (o) {
return true;
});

Clazz.newMeth(C$, 'throwException$Throwable',  function (ee) {
throw ee;
});

Clazz.newMeth(C$, 'compareAndSwapObject$O$J$O$O',  function (o, offset, expected, x) {

if (o[offset] != expected) return false;
o[offset] = x;
return true;
});

Clazz.newMeth(C$, 'compareAndSwapInt$O$J$I$I',  function (o, offset, expected, x) {

if (o[offset] != expected) return false;
o[offset] = x;
return true;
});

Clazz.newMeth(C$, 'compareAndSwapLong$O$J$J$J',  function (o, offset, expected, x) {

if (o[offset] != expected) return false;
o[offset] = x;
return true;
});

Clazz.newMeth(C$, 'getObjectVolatile$O$J',  function (o, offset) {
return this.getObject$O$J(o, offset);
});

Clazz.newMeth(C$, 'putObjectVolatile$O$J$O',  function (o, offset, x) {
this.putObject$O$J$O(o, offset, x);
});

Clazz.newMeth(C$, 'getIntVolatile$O$J',  function (o, offset) {
return this.getInt$O$J(o, offset);
});

Clazz.newMeth(C$, 'putIntVolatile$O$J$I',  function (o, offset, x) {
this.putInt$O$J$I(o, offset, x);
});

Clazz.newMeth(C$, 'getBooleanVolatile$O$J',  function (o, offset) {
return this.getBoolean$O$J(o, offset);
});

Clazz.newMeth(C$, 'putBooleanVolatile$O$J$Z',  function (o, offset, x) {
this.putBoolean$O$J$Z(o, offset, x);
});

Clazz.newMeth(C$, 'getByteVolatile$O$J',  function (o, offset) {
return this.getByte$O$J(o, offset);
});

Clazz.newMeth(C$, 'putByteVolatile$O$J$B',  function (o, offset, x) {
this.putByte$O$J$B(o, offset, x);
});

Clazz.newMeth(C$, 'getShortVolatile$O$J',  function (o, offset) {
return this.getShort$O$J(o, offset);
});

Clazz.newMeth(C$, 'putShortVolatile$O$J$H',  function (o, offset, x) {
this.putShort$O$J$H(o, offset, x);
});

Clazz.newMeth(C$, 'getCharVolatile$O$J',  function (o, offset) {
return this.getChar$O$J(o, offset);
});

Clazz.newMeth(C$, 'putCharVolatile$O$J$C',  function (o, offset, x) {
this.putChar$O$J$C(o, offset, x);
});

Clazz.newMeth(C$, 'getLongVolatile$O$J',  function (o, offset) {
return this.getLong$O$J(o, offset);
});

Clazz.newMeth(C$, 'putLongVolatile$O$J$J',  function (o, offset, x) {
this.putLong$O$J$J(o, offset, x);
});

Clazz.newMeth(C$, 'getFloatVolatile$O$J',  function (o, offset) {
return this.getFloat$O$J(o, offset);
});

Clazz.newMeth(C$, 'putFloatVolatile$O$J$F',  function (o, offset, x) {
this.putFloat$O$J$F(o, offset, x);
});

Clazz.newMeth(C$, 'getDoubleVolatile$O$J',  function (o, offset) {
return this.getDouble$O$J(o, offset);
});

Clazz.newMeth(C$, 'putDoubleVolatile$O$J$D',  function (o, offset, x) {
this.putDouble$O$J$D(o, offset, x);
});

Clazz.newMeth(C$, 'putOrderedObject$O$J$O',  function (o, offset, x) {
this.putObject$O$J$O(o, offset, x);
});

Clazz.newMeth(C$, 'putOrderedInt$O$J$I',  function (o, offset, x) {
this.putInt$O$J$I(o, offset, x);
});

Clazz.newMeth(C$, 'putOrderedLong$O$J$J',  function (o, offset, x) {
this.putLong$O$J$J(o, offset, x);
});

Clazz.newMeth(C$, 'unpark$O',  function (thread) {
});

Clazz.newMeth(C$, 'park$Z$J',  function (isAbsolute, time) {
});

Clazz.newMeth(C$, 'getLoadAverage$DA$I',  function (loadavg, nelems) {
return -1;
});

Clazz.newMeth(C$, 'getAndAddInt$O$J$I',  function (o, offset, delta) {
var v;
do {
v=this.getIntVolatile$O$J(o, offset);
} while (!this.compareAndSwapInt$O$J$I$I(o, offset, v, v + delta));
return v;
});

Clazz.newMeth(C$, 'getAndAddLong$O$J$J',  function (o, offset, delta) {
var v;
do {
v=this.getLongVolatile$O$J(o, offset);
} while (!this.compareAndSwapLong$O$J$J$J(o, offset, v, Long.$add(v,delta)));
return v;
});

Clazz.newMeth(C$, 'getAndSetInt$O$J$I',  function (o, offset, newValue) {
var v;
do {
v=this.getIntVolatile$O$J(o, offset);
} while (!this.compareAndSwapInt$O$J$I$I(o, offset, v, newValue));
return v;
});

Clazz.newMeth(C$, 'getAndSetLong$O$J$J',  function (o, offset, newValue) {
var v;
do {
v=this.getLongVolatile$O$J(o, offset);
} while (!this.compareAndSwapLong$O$J$J$J(o, offset, v, newValue));
return v;
});

Clazz.newMeth(C$, 'getAndSetObject$O$J$O',  function (o, offset, newValue) {
var v;
do {
v=this.getObjectVolatile$O$J(o, offset);
} while (!this.compareAndSwapObject$O$J$O$O(o, offset, v, newValue));
return v;
});

Clazz.newMeth(C$, 'loadFence$',  function () {
});

Clazz.newMeth(C$, 'storeFence$',  function () {
});

Clazz.newMeth(C$, 'fullFence$',  function () {
});

Clazz.newMeth(C$, 'throwIllegalAccessError$',  function () {
throw Clazz.new_($I$(2,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.theUnsafe=Clazz.new_(C$);
C$.ARRAY_BOOLEAN_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Boolean.TYPE, -1));
C$.ARRAY_BYTE_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Byte.TYPE, -1));
C$.ARRAY_SHORT_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Short.TYPE, -1));
C$.ARRAY_CHAR_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Character.TYPE, -1));
C$.ARRAY_INT_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Integer.TYPE, -1));
C$.ARRAY_LONG_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Long.TYPE, -1));
C$.ARRAY_FLOAT_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Float.TYPE, -1));
C$.ARRAY_DOUBLE_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(Double.TYPE, -1));
C$.ARRAY_OBJECT_BASE_OFFSET=C$.theUnsafe.arrayBaseOffset$Class(Clazz.array(java.lang.Object, -1));
C$.ARRAY_BOOLEAN_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Boolean.TYPE, -1));
C$.ARRAY_BYTE_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Byte.TYPE, -1));
C$.ARRAY_SHORT_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Short.TYPE, -1));
C$.ARRAY_CHAR_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Character.TYPE, -1));
C$.ARRAY_INT_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Integer.TYPE, -1));
C$.ARRAY_LONG_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Long.TYPE, -1));
C$.ARRAY_FLOAT_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Float.TYPE, -1));
C$.ARRAY_DOUBLE_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(Double.TYPE, -1));
C$.ARRAY_OBJECT_INDEX_SCALE=C$.theUnsafe.arrayIndexScale$Class(Clazz.array(java.lang.Object, -1));
C$.ADDRESS_SIZE=C$.theUnsafe.addressSize$();
};
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
