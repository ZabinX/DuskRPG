(function(){var P$=java.io,p$1={},p$2={},p$3={},p$4={},I$=[[0,'java.io.Bits','java.security.AccessController',['java.io.ObjectInputStream','.ValidationList','.Callback'],['java.io.ObjectInputStream','.PeekInputStream'],'java.io.DataInputStream','java.io.ObjectInputStream','StringBuilder',['java.io.ObjectInputStream','.HandleTable','.HandleList'],'InternalError','java.util.Arrays','java.util.HashMap',['java.io.ObjectInputStream','.BlockDataInputStream'],['java.io.ObjectInputStream','.HandleTable'],['java.io.ObjectInputStream','.ValidationList'],['java.io.ObjectInputStream','.GetFieldImpl'],'IllegalAccessError','java.lang.reflect.Proxy','java.io.ObjectStreamClass','sun.reflect.misc.ReflectUtil','java.lang.reflect.Array','Enum','java.io.SerialCallbackContext','javajs.util.BC','sun.misc.VM','AssertionError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ObjectInputStream", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.io.InputStream', ['java.io.ObjectInput', 'java.io.ObjectStreamConstants']);
C$.$classes$=[['GetField',1033],['GetFieldImpl',2],['ValidationList',10],['PeekInputStream',10],['BlockDataInputStream',2],['HandleTable',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.passHandle=-1;
this.defaultDataEnd=false;
},1);

C$.$fields$=[['Z',['closed','defaultDataEnd','enableOverride','enableResolve'],'I',['depth','passHandle'],'O',['bin','java.io.ObjectInputStream.BlockDataInputStream','vlist','java.io.ObjectInputStream.ValidationList','handles','java.io.ObjectInputStream.HandleTable','primVals','byte[]','curContext','java.io.SerialCallbackContext']]
,['O',['unsharedMarker','java.lang.Object','primClasses','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
Clazz.super_(C$, this);
p$2.verifySubclass.apply(this, []);
this.bin=Clazz.new_($I$(12,1).c$$java_io_InputStream,[this, null, $in]);
this.handles=Clazz.new_($I$(13,1).c$$I,[10]);
this.vlist=Clazz.new_($I$(14,1));
this.enableOverride=false;
this.readStreamHeader$();
this.bin.setBlockDataMode$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.bin=null;
this.handles=null;
this.vlist=null;
this.enableOverride=true;
}, 1);

Clazz.newMeth(C$, 'readObject$',  function () {
if (this.enableOverride) {
return this.readObjectOverride$();
}var outerHandle=this.passHandle;
try {
var obj=p$2.readObject0$Z.apply(this, [false]);
this.handles.markDependency$I$I(outerHandle, this.passHandle);
var ex=this.handles.lookupException$I(this.passHandle);
if (ex != null ) {
throw ex;
}if (this.depth == 0) {
this.vlist.doCallbacks$();
}return obj;
} finally {
this.passHandle=outerHandle;
if (this.closed && this.depth == 0 ) {
p$2.clear.apply(this, []);
}}
});

Clazz.newMeth(C$, 'readObjectOverride$',  function () {
return null;
});

Clazz.newMeth(C$, 'readUnshared$',  function () {
var outerHandle=this.passHandle;
try {
var obj=p$2.readObject0$Z.apply(this, [true]);
this.handles.markDependency$I$I(outerHandle, this.passHandle);
var ex=this.handles.lookupException$I(this.passHandle);
if (ex != null ) {
throw ex;
}if (this.depth == 0) {
this.vlist.doCallbacks$();
}return obj;
} finally {
this.passHandle=outerHandle;
if (this.closed && this.depth == 0 ) {
p$2.clear.apply(this, []);
}}
});

Clazz.newMeth(C$, 'defaultReadObject$',  function () {
var ctx=this.curContext;
if (ctx == null ) {
throw Clazz.new_(Clazz.load('java.io.NotActiveException').c$$S,["not in call to readObject"]);
}var curObj=ctx.getObj$();
var curDesc=ctx.getDesc$();
this.bin.setBlockDataMode$Z(false);
p$2.defaultReadFields$O$java_io_ObjectStreamClass.apply(this, [curObj, curDesc]);
this.bin.setBlockDataMode$Z(true);
if (!curDesc.hasWriteObjectData$()) {
this.defaultDataEnd=true;
}var ex=this.handles.lookupException$I(this.passHandle);
if (ex != null ) {
throw ex;
}});

Clazz.newMeth(C$, 'readFields$',  function () {
var ctx=this.curContext;
if (ctx == null ) {
throw Clazz.new_(Clazz.load('java.io.NotActiveException').c$$S,["not in call to readObject"]);
}var curObj=ctx.getObj$();
var curDesc=ctx.getDesc$();
this.bin.setBlockDataMode$Z(false);
var getField=Clazz.new_($I$(15,1).c$$java_io_ObjectStreamClass,[this, null, curDesc]);
getField.readFields$();
this.bin.setBlockDataMode$Z(true);
if (!curDesc.hasWriteObjectData$()) {
this.defaultDataEnd=true;
}return getField;
});

Clazz.newMeth(C$, 'registerValidation$java_io_ObjectInputValidation$I',  function (obj, prio) {
if (this.depth == 0) {
throw Clazz.new_(Clazz.load('java.io.NotActiveException').c$$S,["stream inactive"]);
}this.vlist.register$java_io_ObjectInputValidation$I(obj, prio);
});

Clazz.newMeth(C$, 'resolveClass$java_io_ObjectStreamClass',  function (desc) {
var name=desc.getName$();
try {
return Clazz.forName(name, false, C$.latestUserDefinedLoader$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
var cl=C$.primClasses.get$O(name);
if (cl != null ) {
return cl;
} else {
throw ex;
}} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'resolveProxyClass$SA',  function (interfaces) {
var latestLoader=C$.latestUserDefinedLoader$();
var nonPublicLoader=null;
var hasNonPublicInterface=false;
var classObjs=Clazz.array(Class, [interfaces.length]);
for (var i=0; i < interfaces.length; i++) {
var cl=Clazz.forName(interfaces[i], false, latestLoader);
if ((cl.getModifiers$() & 1) == 0) {
if (hasNonPublicInterface) {
if (nonPublicLoader !== cl.getClassLoader$() ) {
throw Clazz.new_($I$(16,1).c$$S,["conflicting non-public interface class loaders"]);
}} else {
nonPublicLoader=cl.getClassLoader$();
hasNonPublicInterface=true;
}}classObjs[i]=cl;
}
try {
return $I$(17).getProxyClass$ClassLoader$ClassA(hasNonPublicInterface ? nonPublicLoader : latestLoader, classObjs);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S$Throwable,[null, e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'resolveObject$O',  function (obj) {
return obj;
});

Clazz.newMeth(C$, 'enableResolveObject$Z',  function (enable) {
if (enable == this.enableResolve ) {
return enable;
}if (enable) {
}this.enableResolve=enable;
return !this.enableResolve;
});

Clazz.newMeth(C$, 'readStreamHeader$',  function () {
var s0=this.bin.readShort$();
var s1=this.bin.readShort$();
if (s0 != -21267 || s1 != 5 ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid stream header: %04X%04X", Clazz.array(java.lang.Object, -1, [Short.valueOf$H(s0), Short.valueOf$H(s1)]))]);
}});

Clazz.newMeth(C$, 'readClassDescriptor$',  function () {
var desc=Clazz.new_($I$(18,1));
desc.readNonProxy$java_io_ObjectInputStream(this);
return desc;
});

Clazz.newMeth(C$, 'read$',  function () {
return this.bin.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (buf, off, len) {
if (buf == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var endoff=off + len;
if (off < 0 || len < 0  || endoff > buf.length  || endoff < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}return this.bin.read$BA$I$I$Z(buf, off, len, false);
});

Clazz.newMeth(C$, 'available$',  function () {
return this.bin.available$();
});

Clazz.newMeth(C$, 'close$',  function () {
this.closed=true;
if (this.depth == 0) {
p$2.clear.apply(this, []);
}this.bin.close$();
});

Clazz.newMeth(C$, 'readBoolean$',  function () {
return this.bin.readBoolean$();
});

Clazz.newMeth(C$, 'readByte$',  function () {
return this.bin.readByte$();
});

Clazz.newMeth(C$, 'readUnsignedByte$',  function () {
return this.bin.readUnsignedByte$();
});

Clazz.newMeth(C$, 'readChar$',  function () {
return this.bin.readChar$();
});

Clazz.newMeth(C$, 'readShort$',  function () {
return this.bin.readShort$();
});

Clazz.newMeth(C$, 'readUnsignedShort$',  function () {
return this.bin.readUnsignedShort$();
});

Clazz.newMeth(C$, 'readInt$',  function () {
return this.bin.readInt$();
});

Clazz.newMeth(C$, 'readLong$',  function () {
return this.bin.readLong$();
});

Clazz.newMeth(C$, 'readFloat$',  function () {
return this.bin.readFloat$();
});

Clazz.newMeth(C$, 'readDouble$',  function () {
return this.bin.readDouble$();
});

Clazz.newMeth(C$, 'readFully$BA',  function (buf) {
this.bin.readFully$BA$I$I$Z(buf, 0, buf.length, false);
});

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (buf, off, len) {
var endoff=off + len;
if (off < 0 || len < 0  || endoff > buf.length  || endoff < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}this.bin.readFully$BA$I$I$Z(buf, off, len, false);
});

Clazz.newMeth(C$, 'skipBytes$I',  function (len) {
return this.bin.skipBytes$I(len);
});

Clazz.newMeth(C$, 'readLine$',  function () {
return this.bin.readLine$();
});

Clazz.newMeth(C$, 'readUTF$',  function () {
return this.bin.readUTF$();
});

Clazz.newMeth(C$, 'verifySubclass',  function () {
var cl=this.getClass$();
if (cl === Clazz.getClass(C$) ) {
return;
}}, p$2);

Clazz.newMeth(C$, 'auditSubclass$Class',  function (subcl) {
var result=$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.ObjectInputStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ObjectInputStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
for (var cl=this.$finals$.subcl; cl !== Clazz.getClass($I$(6)) ; cl=cl.getSuperclass$()) {
try {
cl.getDeclaredMethod$S$ClassA("readUnshared", null);
return Boolean.FALSE;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
} else {
throw ex;
}
}
try {
cl.getDeclaredMethod$S$ClassA("readFields", null);
return Boolean.FALSE;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
} else {
throw ex;
}
}
}
return Boolean.TRUE;
});
})()
), Clazz.new_(P$.ObjectInputStream$1.$init$,[this, {subcl:subcl}]))]);
return result.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'clear',  function () {
this.handles.clear$();
this.vlist.clear$();
}, p$2);

Clazz.newMeth(C$, 'readObject0$Z',  function (unshared) {
var oldMode=this.bin.getBlockDataMode$();
if (oldMode) {
var remain=this.bin.currentBlockRemaining$();
if (remain > 0) {
throw Clazz.new_(Clazz.load('java.io.OptionalDataException').c$$I,[remain]);
} else if (this.defaultDataEnd) {
throw Clazz.new_(Clazz.load('java.io.OptionalDataException').c$$Z,[true]);
}this.bin.setBlockDataMode$Z(false);
}var tc;
while ((tc=this.bin.peekByte$()) == 121){
this.bin.readByte$();
p$2.handleReset.apply(this, []);
}
++this.depth;
try {
switch (tc) {
case 112:
return p$2.readNull.apply(this, []);
case 113:
return p$2.readHandle$Z.apply(this, [unshared]);
case 118:
return p$2.readClass$Z.apply(this, [unshared]);
case 114:
case 125:
return p$2.readClassDesc$Z.apply(this, [unshared]);
case 116:
case 124:
return p$2.checkResolve$O.apply(this, [p$2.readString$Z.apply(this, [unshared])]);
case 117:
return p$2.checkResolve$O.apply(this, [p$2.readArray$Z.apply(this, [unshared])]);
case 126:
return p$2.checkResolve$O.apply(this, [p$2.readEnum$Z.apply(this, [unshared])]);
case 115:
return p$2.checkResolve$O.apply(this, [p$2.readOrdinaryObject$Z.apply(this, [unshared])]);
case 123:
var ex=p$2.readFatalException.apply(this, []);
throw Clazz.new_(Clazz.load('java.io.WriteAbortedException').c$$S$Exception,["writing aborted", ex]);
case 119:
case 122:
if (oldMode) {
this.bin.setBlockDataMode$Z(true);
this.bin.peek$();
throw Clazz.new_(Clazz.load('java.io.OptionalDataException').c$$I,[this.bin.currentBlockRemaining$()]);
} else {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["unexpected block data"]);
}case 120:
if (oldMode) {
throw Clazz.new_(Clazz.load('java.io.OptionalDataException').c$$Z,[true]);
} else {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["unexpected end of block data"]);
}default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid type code: %02X", Clazz.array(java.lang.Object, -1, [Byte.valueOf$B(tc)]))]);
}
} finally {
--this.depth;
this.bin.setBlockDataMode$Z(oldMode);
}
}, p$2);

Clazz.newMeth(C$, 'checkResolve$O',  function (obj) {
if (!this.enableResolve || this.handles.lookupException$I(this.passHandle) != null  ) {
return obj;
}var rep=this.resolveObject$O(obj);
if (rep !== obj ) {
this.handles.setObject$I$O(this.passHandle, rep);
}return rep;
}, p$2);

Clazz.newMeth(C$, 'readTypeString$',  function () {
var oldHandle=this.passHandle;
try {
var tc=this.bin.peekByte$();
switch (tc) {
case 112:
return p$2.readNull.apply(this, []);
case 113:
return p$2.readHandle$Z.apply(this, [false]);
case 116:
case 124:
return p$2.readString$Z.apply(this, [false]);
default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid type code: %02X", Clazz.array(java.lang.Object, -1, [Byte.valueOf$B(tc)]))]);
}
} finally {
this.passHandle=oldHandle;
}
});

Clazz.newMeth(C$, 'readNull',  function () {
if (this.bin.readByte$() != 112) {
throw Clazz.new_($I$(9,1));
}this.passHandle=-1;
return null;
}, p$2);

Clazz.newMeth(C$, 'readHandle$Z',  function (unshared) {
if (this.bin.readByte$() != 113) {
throw Clazz.new_($I$(9,1));
}this.passHandle=this.bin.readInt$() - 8257536;
if (this.passHandle < 0 || this.passHandle >= this.handles.size$() ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid handle value: %08X", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.passHandle + 8257536)]))]);
}if (unshared) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["cannot read back reference as unshared"]);
}var obj=this.handles.lookupObject$I(this.passHandle);
if (obj === C$.unsharedMarker ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["cannot read back reference to unshared object"]);
}return obj;
}, p$2);

Clazz.newMeth(C$, 'readClass$Z',  function (unshared) {
if (this.bin.readByte$() != 118) {
throw Clazz.new_($I$(9,1));
}var desc=p$2.readClassDesc$Z.apply(this, [false]);
var cl=desc.forClass$();
this.passHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : cl);
var resolveEx=desc.getResolveException$();
if (resolveEx != null ) {
this.handles.markException$I$ClassNotFoundException(this.passHandle, resolveEx);
}this.handles.finish$I(this.passHandle);
return cl;
}, p$2);

Clazz.newMeth(C$, 'readClassDesc$Z',  function (unshared) {
var tc=this.bin.peekByte$();
switch (tc) {
case 112:
return p$2.readNull.apply(this, []);
case 113:
return p$2.readHandle$Z.apply(this, [unshared]);
case 125:
return p$2.readProxyDesc$Z.apply(this, [unshared]);
case 114:
return p$2.readNonProxyDesc$Z.apply(this, [unshared]);
default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid type code: %02X", Clazz.array(java.lang.Object, -1, [Byte.valueOf$B(tc)]))]);
}
}, p$2);

Clazz.newMeth(C$, 'isCustomSubclass',  function () {
return this.getClass$().getClassLoader$() !== Clazz.getClass(C$).getClassLoader$() ;
}, p$2);

Clazz.newMeth(C$, 'readProxyDesc$Z',  function (unshared) {
if (this.bin.readByte$() != 125) {
throw Clazz.new_($I$(9,1));
}var desc=Clazz.new_($I$(18,1));
var descHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : desc);
this.passHandle=-1;
var numIfaces=this.bin.readInt$();
var ifaces=Clazz.array(String, [numIfaces]);
for (var i=0; i < numIfaces; i++) {
ifaces[i]=this.bin.readUTF$();
}
var cl=null;
var resolveEx=null;
this.bin.setBlockDataMode$Z(true);
try {
if ((cl=this.resolveProxyClass$SA(ifaces)) == null ) {
resolveEx=Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,["null class"]);
} else if (!$I$(17).isProxyClass$Class(cl)) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["Not a proxy"]);
} else {
$I$(19,"checkProxyPackageAccess$ClassLoader$ClassA",[this.getClass$().getClassLoader$(), cl.getInterfaces$()]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
resolveEx=ex;
} else {
throw ex;
}
}
p$2.skipCustomData.apply(this, []);
desc.initProxy$Class$ClassNotFoundException$java_io_ObjectStreamClass(cl, resolveEx, p$2.readClassDesc$Z.apply(this, [false]));
this.handles.finish$I(descHandle);
this.passHandle=descHandle;
return desc;
}, p$2);

Clazz.newMeth(C$, 'readNonProxyDesc$Z',  function (unshared) {
if (this.bin.readByte$() != 114) {
throw Clazz.new_($I$(9,1));
}var desc=Clazz.new_($I$(18,1));
var descHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : desc);
this.passHandle=-1;
var readDesc=null;
try {
readDesc=this.readClassDescriptor$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["failed to read class descriptor"]).initCause$Throwable(ex);
} else {
throw ex;
}
}
var cl=null;
var resolveEx=null;
this.bin.setBlockDataMode$Z(true);
var checksRequired=p$2.isCustomSubclass.apply(this, []);
try {
if ((cl=this.resolveClass$java_io_ObjectStreamClass(readDesc)) == null ) {
resolveEx=Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,["null class"]);
} else if (checksRequired) {
$I$(19).checkPackageAccess$Class(cl);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
resolveEx=ex;
} else {
throw ex;
}
}
p$2.skipCustomData.apply(this, []);
desc.initNonProxy$java_io_ObjectStreamClass$Class$ClassNotFoundException$java_io_ObjectStreamClass(readDesc, cl, resolveEx, p$2.readClassDesc$Z.apply(this, [false]));
this.handles.finish$I(descHandle);
this.passHandle=descHandle;
return desc;
}, p$2);

Clazz.newMeth(C$, 'readString$Z',  function (unshared) {
var str;
var tc=this.bin.readByte$();
switch (tc) {
case 116:
str=this.bin.readUTF$();
break;
case 124:
str=this.bin.readLongUTF$();
break;
default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid type code: %02X", Clazz.array(java.lang.Object, -1, [Byte.valueOf$B(tc)]))]);
}
this.passHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : str);
this.handles.finish$I(this.passHandle);
return str;
}, p$2);

Clazz.newMeth(C$, 'readArray$Z',  function (unshared) {
if (this.bin.readByte$() != 117) {
throw Clazz.new_($I$(9,1));
}var desc=p$2.readClassDesc$Z.apply(this, [false]);
var len=this.bin.readInt$();
var array=null;
var cl;
var ccl=null;
if ((cl=desc.forClass$()) != null ) {
ccl=cl.getComponentType$();
array=Clazz.array(ccl, len);
}var arrayHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : array);
var resolveEx=desc.getResolveException$();
if (resolveEx != null ) {
this.handles.markException$I$ClassNotFoundException(arrayHandle, resolveEx);
}if (ccl == null ) {
for (var i=0; i < len; i++) {
p$2.readObject0$Z.apply(this, [false]);
}
} else if (ccl.isPrimitive$()) {
if (ccl === Integer.TYPE ) {
this.bin.readInts$IA$I$I(array, 0, len);
} else if (ccl === Byte.TYPE ) {
this.bin.readFully$BA$I$I$Z(array, 0, len, true);
} else if (ccl === Long.TYPE ) {
this.bin.readLongs$JA$I$I(array, 0, len);
} else if (ccl === Float.TYPE ) {
this.bin.readFloats$FA$I$I(array, 0, len);
} else if (ccl === Double.TYPE ) {
this.bin.readDoubles$DA$I$I(array, 0, len);
} else if (ccl === Short.TYPE ) {
this.bin.readShorts$HA$I$I(array, 0, len);
} else if (ccl === Character.TYPE ) {
this.bin.readChars$CA$I$I(array, 0, len);
} else if (ccl === Boolean.TYPE ) {
this.bin.readBooleans$ZA$I$I(array, 0, len);
} else {
throw Clazz.new_($I$(9,1));
}} else {
var oa=array;
for (var i=0; i < len; i++) {
oa[i]=p$2.readObject0$Z.apply(this, [false]);
this.handles.markDependency$I$I(arrayHandle, this.passHandle);
}
}this.handles.finish$I(arrayHandle);
this.passHandle=arrayHandle;
return array;
}, p$2);

Clazz.newMeth(C$, 'readEnum$Z',  function (unshared) {
if (this.bin.readByte$() != 126) {
throw Clazz.new_($I$(9,1));
}var desc=p$2.readClassDesc$Z.apply(this, [false]);
if (!desc.isEnum$()) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["non-enum class: " + desc]);
}var enumHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : null);
var resolveEx=desc.getResolveException$();
if (resolveEx != null ) {
this.handles.markException$I$ClassNotFoundException(enumHandle, resolveEx);
}var name=p$2.readString$Z.apply(this, [false]);
var result=null;
var cl=desc.forClass$();
if (cl != null ) {
try {
var en=$I$(21).valueOf$Class$S(cl, name);
result=en;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["enum constant " + name + " does not exist in " + cl ]).initCause$Throwable(ex);
} else {
throw ex;
}
}
if (!unshared) {
this.handles.setObject$I$O(enumHandle, result);
}}this.handles.finish$I(enumHandle);
this.passHandle=enumHandle;
return result;
}, p$2);

Clazz.newMeth(C$, 'readOrdinaryObject$Z',  function (unshared) {
if (this.bin.readByte$() != 115) {
throw Clazz.new_($I$(9,1));
}var desc=p$2.readClassDesc$Z.apply(this, [false]);
desc.checkDeserialize$();
var cl=desc.forClass$();
if (cl === Clazz.getClass(String)  || cl === Clazz.getClass(Class)   || cl === Clazz.getClass($I$(18))  ) {
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["invalid class descriptor"]);
}var obj;
try {
obj=desc.isInstantiable$() ? desc.newInstance$() : null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S$S,[desc.forClass$().getName$(), "unable to create instance"]).initCause$Throwable(ex);
} else {
throw ex;
}
}
this.passHandle=this.handles.assign$O(unshared ? C$.unsharedMarker : obj);
var resolveEx=desc.getResolveException$();
if (resolveEx != null ) {
this.handles.markException$I$ClassNotFoundException(this.passHandle, resolveEx);
}if (desc.isExternalizable$()) {
p$2.readExternalData$java_io_Externalizable$java_io_ObjectStreamClass.apply(this, [obj, desc]);
} else {
p$2.readSerialData$O$java_io_ObjectStreamClass.apply(this, [obj, desc]);
}this.handles.finish$I(this.passHandle);
if (obj != null  && this.handles.lookupException$I(this.passHandle) == null   && desc.hasReadResolveMethod$() ) {
var rep=desc.invokeReadResolve$O(obj);
if (unshared && rep.getClass$().isArray$() ) {
rep=C$.cloneArray$O(rep);
}if (rep !== obj ) {
this.handles.setObject$I$O(this.passHandle, obj=rep);
}}return obj;
}, p$2);

Clazz.newMeth(C$, 'readExternalData$java_io_Externalizable$java_io_ObjectStreamClass',  function (obj, desc) {
var oldContext=this.curContext;
this.curContext=null;
try {
var blocked=desc.hasBlockExternalData$();
if (blocked) {
this.bin.setBlockDataMode$Z(true);
}if (obj != null ) {
try {
obj.readExternal$java_io_ObjectInput(this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
this.handles.markException$I$ClassNotFoundException(this.passHandle, ex);
} else {
throw ex;
}
}
}if (blocked) {
p$2.skipCustomData.apply(this, []);
}} finally {
this.curContext=oldContext;
}
}, p$2);

Clazz.newMeth(C$, 'readSerialData$O$java_io_ObjectStreamClass',  function (obj, desc) {
var slots=desc.getClassDataLayout$();
for (var i=0; i < slots.length; i++) {
var slotDesc=slots[i].desc;
if (slots[i].hasData) {
if (obj != null  && slotDesc.hasReadObjectMethod$()  && this.handles.lookupException$I(this.passHandle) == null  ) {
var oldContext=this.curContext;
try {
this.curContext=Clazz.new_($I$(22,1).c$$O$java_io_ObjectStreamClass,[obj, slotDesc]);
this.bin.setBlockDataMode$Z(true);
slotDesc.invokeReadObject$O$java_io_ObjectInputStream(obj, this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
this.handles.markException$I$ClassNotFoundException(this.passHandle, ex);
} else {
throw ex;
}
} finally {
this.curContext.setUsed$();
this.curContext=oldContext;
}
this.defaultDataEnd=false;
} else {
p$2.defaultReadFields$O$java_io_ObjectStreamClass.apply(this, [obj, slotDesc]);
}if (slotDesc.hasWriteObjectData$()) {
p$2.skipCustomData.apply(this, []);
} else {
this.bin.setBlockDataMode$Z(false);
}} else {
if (obj != null  && slotDesc.hasReadObjectNoDataMethod$()  && this.handles.lookupException$I(this.passHandle) == null  ) {
slotDesc.invokeReadObjectNoData$O(obj);
}}}
}, p$2);

Clazz.newMeth(C$, 'skipCustomData',  function () {
var oldHandle=this.passHandle;
for (; ; ) {
if (this.bin.getBlockDataMode$()) {
this.bin.skipBlockData$();
this.bin.setBlockDataMode$Z(false);
}switch (this.bin.peekByte$()) {
case 119:
case 122:
this.bin.setBlockDataMode$Z(true);
break;
case 120:
this.bin.readByte$();
this.passHandle=oldHandle;
return;
default:
p$2.readObject0$Z.apply(this, [false]);
break;
}
}
}, p$2);

Clazz.newMeth(C$, 'defaultReadFields$O$java_io_ObjectStreamClass',  function (obj, desc) {
var cl=desc.forClass$();
if (cl != null  && obj != null   && !cl.isInstance$O(obj) ) {
throw Clazz.new_(Clazz.load('ClassCastException'));
}var primDataSize=desc.getPrimDataSize$();
if (this.primVals == null  || this.primVals.length < primDataSize ) {
this.primVals=Clazz.array(Byte.TYPE, [primDataSize]);
}this.bin.readFully$BA$I$I$Z(this.primVals, 0, primDataSize, false);
if (obj != null ) {
desc.setPrimFieldValues$O$BA(obj, this.primVals);
}var objHandle=this.passHandle;
var fields=desc.getFields$Z(false);
var objVals=Clazz.array(java.lang.Object, [desc.getNumObjFields$()]);
var numPrimFields=fields.length - objVals.length;
for (var i=0; i < objVals.length; i++) {
var f=fields[numPrimFields + i];
objVals[i]=p$2.readObject0$Z.apply(this, [f.isUnshared$()]);
if (f.getField$() != null ) {
this.handles.markDependency$I$I(objHandle, this.passHandle);
}}
if (obj != null ) {
desc.setObjFieldValues$O$OA(obj, objVals);
}this.passHandle=objHandle;
}, p$2);

Clazz.newMeth(C$, 'readFatalException',  function () {
if (this.bin.readByte$() != 123) {
throw Clazz.new_($I$(9,1));
}p$2.clear.apply(this, []);
return p$2.readObject0$Z.apply(this, [false]);
}, p$2);

Clazz.newMeth(C$, 'handleReset',  function () {
if (this.depth > 0) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["unexpected reset; recursion depth: " + this.depth]);
}p$2.clear.apply(this, []);
}, p$2);

Clazz.newMeth(C$, 'bytesToFloats$BA$I$FA$I$I',  function (src, srcpos, dst, dstpos, nfloats) {
$I$(23).bytesToFloats$BA$I$FA$I$I(src, srcpos, dst, dstpos, nfloats);
}, 1);

Clazz.newMeth(C$, 'bytesToDoubles$BA$I$DA$I$I',  function (src, srcpos, dst, dstpos, ndoubles) {
$I$(23).bytesToDouble$BA$I$DA$I$I(src, srcpos, dst, dstpos, ndoubles);
}, 1);

Clazz.newMeth(C$, 'latestUserDefinedLoader$',  function () {
return $I$(24).latestUserDefinedLoader$();
}, 1);

Clazz.newMeth(C$, 'cloneArray$O',  function (array) {
if (Clazz.instanceOf(array, Clazz.array(java.lang.Object, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Boolean.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Byte.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Character.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Double.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Float.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Integer.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Long.TYPE, -1))) {
return (array).clone$();
} else if (Clazz.instanceOf(array, Clazz.array(Short.TYPE, -1))) {
return (array).clone$();
} else {
throw Clazz.new_($I$(25,1));
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.unsharedMarker= Clazz.new_();
C$.primClasses=Clazz.new_($I$(11,1).c$$I$F,[8, 1.0]);
{
C$.primClasses.put$O$O("boolean", Boolean.TYPE);
C$.primClasses.put$O$O("byte", Byte.TYPE);
C$.primClasses.put$O$O("char", Character.TYPE);
C$.primClasses.put$O$O("short", Short.TYPE);
C$.primClasses.put$O$O("int", Integer.TYPE);
C$.primClasses.put$O$O("long", Long.TYPE);
C$.primClasses.put$O$O("float", Float.TYPE);
C$.primClasses.put$O$O("double", Double.TYPE);
C$.primClasses.put$O$O("void", Void.TYPE);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream, "GetField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream, "GetFieldImpl", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.io.ObjectInputStream','.GetField']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['desc','java.io.ObjectStreamClass','primVals','byte[]','objVals','Object[]','objHandles','int[]']]]

Clazz.newMeth(C$, 'c$$java_io_ObjectStreamClass',  function (desc) {
Clazz.super_(C$, this);
this.desc=desc;
this.primVals=Clazz.array(Byte.TYPE, [desc.getPrimDataSize$()]);
this.objVals=Clazz.array(java.lang.Object, [desc.getNumObjFields$()]);
this.objHandles=Clazz.array(Integer.TYPE, [this.objVals.length]);
}, 1);

Clazz.newMeth(C$, 'getObjectStreamClass$',  function () {
return this.desc;
});

Clazz.newMeth(C$, 'defaulted$S',  function (name) {
return (p$1.getFieldOffset$S$Class.apply(this, [name, null]) < 0);
});

Clazz.newMeth(C$, 'get$S$Z',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Boolean.TYPE]);
return (off >= 0) ? $I$(1).getBoolean$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$B',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Byte.TYPE]);
return (off >= 0) ? this.primVals[off] : val;
});

Clazz.newMeth(C$, 'get$S$C',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Character.TYPE]);
return (off >= 0) ? $I$(1).getChar$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$H',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Short.TYPE]);
return (off >= 0) ? $I$(1).getShort$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$I',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Integer.TYPE]);
return (off >= 0) ? $I$(1).getInt$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$F',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Float.TYPE]);
return (off >= 0) ? $I$(1).getFloat$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$J',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Long.TYPE]);
return (off >= 0) ? $I$(1).getLong$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$D',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Double.TYPE]);
return (off >= 0) ? $I$(1).getDouble$BA$I(this.primVals, off) : val;
});

Clazz.newMeth(C$, 'get$S$O',  function (name, val) {
var off=p$1.getFieldOffset$S$Class.apply(this, [name, Clazz.getClass(java.lang.Object)]);
if (off >= 0) {
var objHandle=this.objHandles[off];
this.b$['java.io.ObjectInputStream'].handles.markDependency$I$I(this.b$['java.io.ObjectInputStream'].passHandle, objHandle);
return (this.b$['java.io.ObjectInputStream'].handles.lookupException$I(objHandle) == null ) ? this.objVals[off] : null;
} else {
return val;
}});

Clazz.newMeth(C$, 'readFields$',  function () {
this.b$['java.io.ObjectInputStream'].bin.readFully$BA$I$I$Z(this.primVals, 0, this.primVals.length, false);
var oldHandle=this.b$['java.io.ObjectInputStream'].passHandle;
var fields=this.desc.getFields$Z(false);
var numPrimFields=fields.length - this.objVals.length;
for (var i=0; i < this.objVals.length; i++) {
this.objVals[i]=p$2.readObject0$Z.apply(this.b$['java.io.ObjectInputStream'], [fields[numPrimFields + i].isUnshared$()]);
this.objHandles[i]=this.b$['java.io.ObjectInputStream'].passHandle;
}
this.b$['java.io.ObjectInputStream'].passHandle=oldHandle;
});

Clazz.newMeth(C$, 'getFieldOffset$S$Class',  function (name, type) {
var field=this.desc.getField$S$Class(name, type);
if (field != null ) {
return field.getOffset$();
} else if (this.desc.getLocalDesc$().getField$S$Class(name, type) != null ) {
return -1;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no such field " + name + " with type " + type ]);
}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream, "ValidationList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Callback',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['list','java.io.ObjectInputStream.ValidationList.Callback']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'register$java_io_ObjectInputValidation$I',  function (obj, priority) {
if (obj == null ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["null callback"]);
}var prev=null;
var cur=this.list;
while (cur != null  && priority < cur.priority ){
prev=cur;
cur=cur.next;
}
var acc=$I$(2).getContext$();
if (prev != null ) {
prev.next=Clazz.new_($I$(3,1).c$$java_io_ObjectInputValidation$I$java_io_ObjectInputStream_ValidationList_Callback$java_security_AccessControlContext,[obj, priority, cur, acc]);
} else {
this.list=Clazz.new_($I$(3,1).c$$java_io_ObjectInputValidation$I$java_io_ObjectInputStream_ValidationList_Callback$java_security_AccessControlContext,[obj, priority, this.list, acc]);
}});

Clazz.newMeth(C$, 'doCallbacks$',  function () {
try {
while (this.list != null ){
$I$(2,"doPrivileged$java_security_PrivilegedExceptionAction$java_security_AccessControlContext",[((P$.ObjectInputStream$ValidationList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ObjectInputStream$ValidationList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['java.io.ObjectInputStream.ValidationList'].list.obj.validateObject$();
return null;
});
})()
), Clazz.new_(P$.ObjectInputStream$ValidationList$1.$init$,[this, null])), this.list.acc]);
this.list=this.list.next;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.security.PrivilegedActionException")){
this.list=null;
throw ex.getException$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'clear$',  function () {
this.list=null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream.ValidationList, "Callback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['priority'],'O',['obj','java.io.ObjectInputValidation','next','java.io.ObjectInputStream.ValidationList.Callback','acc','java.security.AccessControlContext']]]

Clazz.newMeth(C$, 'c$$java_io_ObjectInputValidation$I$java_io_ObjectInputStream_ValidationList_Callback$java_security_AccessControlContext',  function (obj, priority, next, acc) {
;C$.$init$.apply(this);
this.obj=obj;
this.priority=priority;
this.next=next;
this.acc=acc;
}, 1);

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream, "PeekInputStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.peekb=-1;
},1);

C$.$fields$=[['I',['peekb'],'O',['$in','java.io.InputStream']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
Clazz.super_(C$, this);
this.$in=$in;
}, 1);

Clazz.newMeth(C$, 'peek$',  function () {
return (this.peekb >= 0) ? this.peekb : (this.peekb=this.$in.read$());
});

Clazz.newMeth(C$, 'read$',  function () {
if (this.peekb >= 0) {
var v=this.peekb;
this.peekb=-1;
return v;
} else {
return this.$in.read$();
}});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if (len == 0) {
return 0;
} else if (this.peekb < 0) {
return this.$in.read$BA$I$I(b, off, len);
} else {
b[off++]=(this.peekb|0);
--len;
this.peekb=-1;
var n=this.$in.read$BA$I$I(b, off, len);
return (n >= 0) ? (n + 1) : 1;
}});

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (b, off, len) {
var n=0;
while (n < len){
var count=this.read$BA$I$I(b, off + n, len - n);
if (count < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}n+=count;
}
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$le(n,0 )) {
return 0;
}var skipped=0;
if (this.peekb >= 0) {
this.peekb=-1;
++skipped;
(n=Long.$inc(n,-1));
}return Long.$add(skipped,this.skip$J(n));
});

Clazz.newMeth(C$, 'available$',  function () {
return this.$in.available$() + ((this.peekb >= 0) ? 1 : 0);
});

Clazz.newMeth(C$, 'close$',  function () {
this.$in.close$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream, "BlockDataInputStream", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.io.InputStream', 'java.io.DataInput');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buf=Clazz.array(Byte.TYPE, [1024]);
this.hbuf=Clazz.array(Byte.TYPE, [5]);
this.cbuf=Clazz.array(Character.TYPE, [256]);
this.blkmode=false;
this.pos=0;
this.end=-1;
this.unread=0;
},1);

C$.$fields$=[['Z',['blkmode'],'I',['pos','end','unread'],'O',['buf','byte[]','+hbuf','cbuf','char[]','$in','java.io.ObjectInputStream.PeekInputStream','din','java.io.DataInputStream']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
Clazz.super_(C$, this);
this.$in=Clazz.new_($I$(4,1).c$$java_io_InputStream,[$in]);
this.din=Clazz.new_($I$(5,1).c$$java_io_InputStream,[this]);
}, 1);

Clazz.newMeth(C$, 'setBlockDataMode$Z',  function (newmode) {
if (this.blkmode == newmode ) {
return this.blkmode;
}if (newmode) {
this.pos=0;
this.end=0;
this.unread=0;
} else if (this.pos < this.end) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["unread block data"]);
}this.blkmode=newmode;
return !this.blkmode;
});

Clazz.newMeth(C$, 'getBlockDataMode$',  function () {
return this.blkmode;
});

Clazz.newMeth(C$, 'skipBlockData$',  function () {
if (!this.blkmode) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["not in block data mode"]);
}while (this.end >= 0){
p$3.refill.apply(this, []);
}
});

Clazz.newMeth(C$, 'readBlockHeader$Z',  function (canBlock) {
if (this.b$['java.io.ObjectInputStream'].defaultDataEnd) {
return -1;
}try {
for (; ; ) {
var avail=canBlock ? 2147483647 : this.$in.available$();
if (avail == 0) {
return -2;
}var tc=this.$in.peek$();
switch (tc) {
case 119:
if (avail < 2) {
return -2;
}this.$in.readFully$BA$I$I(this.hbuf, 0, 2);
return this.hbuf[1] & 255;
case 122:
if (avail < 5) {
return -2;
}this.$in.readFully$BA$I$I(this.hbuf, 0, 5);
var len=$I$(1).getInt$BA$I(this.hbuf, 1);
if (len < 0) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["illegal block data header length: " + len]);
}return len;
case 121:
this.$in.read$();
p$2.handleReset.apply(this.b$['java.io.ObjectInputStream'], []);
break;
default:
if (tc >= 0 && (tc < 112 || tc > 126 ) ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[String.format$S$OA("invalid type code: %02X", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(tc)]))]);
}return -1;
}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.EOFException")){
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["unexpected EOF while reading block data header"]);
} else {
throw ex;
}
}
}, p$3);

Clazz.newMeth(C$, 'refill',  function () {
try {
do {
this.pos=0;
if (this.unread > 0) {
var n=this.$in.read$BA$I$I(this.buf, 0, Math.min(this.unread, 1024));
if (n >= 0) {
this.end=n;
this.unread-=n;
} else {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["unexpected EOF in middle of data block"]);
}} else {
var n=p$3.readBlockHeader$Z.apply(this, [true]);
if (n >= 0) {
this.end=0;
this.unread=n;
} else {
this.end=-1;
this.unread=0;
}}} while (this.pos == this.end);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
this.pos=0;
this.end=-1;
this.unread=0;
throw ex;
} else {
throw ex;
}
}
}, p$3);

Clazz.newMeth(C$, 'currentBlockRemaining$',  function () {
if (this.blkmode) {
return (this.end >= 0) ? (this.end - this.pos) + this.unread : 0;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, 'peek$',  function () {
if (this.blkmode) {
if (this.pos == this.end) {
p$3.refill.apply(this, []);
}return (this.end >= 0) ? (this.buf[this.pos] & 255) : -1;
} else {
return this.$in.peek$();
}});

Clazz.newMeth(C$, 'peekByte$',  function () {
var val=this.peek$();
if (val < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return ($b$[0] = val, $b$[0]);
});

Clazz.newMeth(C$, 'read$',  function () {
if (this.blkmode) {
if (this.pos == this.end) {
p$3.refill.apply(this, []);
}return (this.end >= 0) ? (this.buf[this.pos++] & 255) : -1;
} else {
return this.$in.read$();
}});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
return this.read$BA$I$I$Z(b, off, len, false);
});

Clazz.newMeth(C$, 'skip$J',  function (len) {
var remain=len;
while (Long.$gt(remain,0 )){
if (this.blkmode) {
if (this.pos == this.end) {
p$3.refill.apply(this, []);
}if (this.end < 0) {
break;
}var nread=Long.$ival(Math.min$J$J(remain, this.end - this.pos));
(remain=Long.$sub(remain,(nread)));
this.pos+=nread;
} else {
var nread=Long.$ival(Math.min$J$J(remain, 1024));
if ((nread=this.$in.read$BA$I$I(this.buf, 0, nread)) < 0) {
break;
}(remain=Long.$sub(remain,(nread)));
}}
return Long.$sub(len,remain);
});

Clazz.newMeth(C$, 'available$',  function () {
if (this.blkmode) {
if ((this.pos == this.end) && (this.unread == 0) ) {
var n;
while ((n=p$3.readBlockHeader$Z.apply(this, [false])) == 0);
switch (n) {
case -2:
break;
case -1:
this.pos=0;
this.end=-1;
break;
default:
this.pos=0;
this.end=0;
this.unread=n;
break;
}
}var unreadAvail=(this.unread > 0) ? Math.min(this.$in.available$(), this.unread) : 0;
return (this.end >= 0) ? (this.end - this.pos) + unreadAvail : 0;
} else {
return this.$in.available$();
}});

Clazz.newMeth(C$, 'close$',  function () {
if (this.blkmode) {
this.pos=0;
this.end=-1;
this.unread=0;
}this.$in.close$();
});

Clazz.newMeth(C$, 'read$BA$I$I$Z',  function (b, off, len, copy) {
if (len == 0) {
return 0;
} else if (this.blkmode) {
if (this.pos == this.end) {
p$3.refill.apply(this, []);
}if (this.end < 0) {
return -1;
}var nread=Math.min(len, this.end - this.pos);
System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, off, nread);
this.pos+=nread;
return nread;
} else if (copy) {
var nread=this.$in.read$BA$I$I(this.buf, 0, Math.min(len, 1024));
if (nread > 0) {
System.arraycopy$O$I$O$I$I(this.buf, 0, b, off, nread);
}return nread;
} else {
return this.$in.read$BA$I$I(b, off, len);
}});

Clazz.newMeth(C$, 'readFully$BA',  function (b) {
this.readFully$BA$I$I$Z(b, 0, b.length, false);
});

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (b, off, len) {
this.readFully$BA$I$I$Z(b, off, len, false);
});

Clazz.newMeth(C$, 'readFully$BA$I$I$Z',  function (b, off, len, copy) {
while (len > 0){
var n=this.read$BA$I$I$Z(b, off, len, copy);
if (n < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}off+=n;
len-=n;
}
});

Clazz.newMeth(C$, 'skipBytes$I',  function (n) {
return this.din.skipBytes$I(n);
});

Clazz.newMeth(C$, 'readBoolean$',  function () {
var v=this.read$();
if (v < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return (v != 0);
});

Clazz.newMeth(C$, 'readByte$',  function () {
var v=this.read$();
if (v < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return ($b$[0] = v, $b$[0]);
});

Clazz.newMeth(C$, 'readUnsignedByte$',  function () {
var v=this.read$();
if (v < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return v;
});

Clazz.newMeth(C$, 'readChar$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 2);
} else if (this.end - this.pos < 2) {
return this.din.readChar$();
}var v=$I$(1).getChar$BA$I(this.buf, this.pos);
this.pos+=2;
return v;
});

Clazz.newMeth(C$, 'readShort$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 2);
} else if (this.end - this.pos < 2) {
return this.din.readShort$();
}var v=$I$(1).getShort$BA$I(this.buf, this.pos);
this.pos+=2;
return v;
});

Clazz.newMeth(C$, 'readUnsignedShort$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 2);
} else if (this.end - this.pos < 2) {
return this.din.readUnsignedShort$();
}var v=$I$(1).getShort$BA$I(this.buf, this.pos) & 65535;
this.pos+=2;
return v;
});

Clazz.newMeth(C$, 'readInt$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 4);
} else if (this.end - this.pos < 4) {
return this.din.readInt$();
}var v=$I$(1).getInt$BA$I(this.buf, this.pos);
this.pos+=4;
return v;
});

Clazz.newMeth(C$, 'readFloat$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 4);
} else if (this.end - this.pos < 4) {
return this.din.readFloat$();
}var v=$I$(1).getFloat$BA$I(this.buf, this.pos);
this.pos+=4;
return v;
});

Clazz.newMeth(C$, 'readLong$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 8);
} else if (this.end - this.pos < 8) {
return this.din.readLong$();
}var v=$I$(1).getLong$BA$I(this.buf, this.pos);
this.pos+=8;
return v;
});

Clazz.newMeth(C$, 'readDouble$',  function () {
if (!this.blkmode) {
this.pos=0;
this.$in.readFully$BA$I$I(this.buf, 0, 8);
} else if (this.end - this.pos < 8) {
return this.din.readDouble$();
}var v=$I$(1).getDouble$BA$I(this.buf, this.pos);
this.pos+=8;
return v;
});

Clazz.newMeth(C$, 'readUTF$',  function () {
return p$3.readUTFBody$J.apply(this, [this.readUnsignedShort$()]);
});

Clazz.newMeth(C$, 'readLine$',  function () {
return this.din.readLine$();
});

Clazz.newMeth(C$, 'readBooleans$ZA$I$I',  function (v, off, len) {
var stop;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
var span=Math.min(endoff - off, 1024);
this.$in.readFully$BA$I$I(this.buf, 0, span);
stop=off + span;
this.pos=0;
} else if (this.end - this.pos < 1) {
v[off++]=this.din.readBoolean$();
continue;
} else {
stop=Math.min(endoff, off + this.end - this.pos);
}while (off < stop){
v[off++]=$I$(1).getBoolean$BA$I(this.buf, this.pos++);
}
}
});

Clazz.newMeth(C$, 'readChars$CA$I$I',  function (v, off, len) {
var stop;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
var span=Math.min(endoff - off, 512);
this.$in.readFully$BA$I$I(this.buf, 0, span << 1);
stop=off + span;
this.pos=0;
} else if (this.end - this.pos < 2) {
v[off++]=this.din.readChar$();
continue;
} else {
stop=Math.min(endoff, off + ((this.end - this.pos) >> 1));
}while (off < stop){
v[off++]=$I$(1).getChar$BA$I(this.buf, this.pos);
this.pos+=2;
}
}
});

Clazz.newMeth(C$, 'readShorts$HA$I$I',  function (v, off, len) {
var stop;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
var span=Math.min(endoff - off, 512);
this.$in.readFully$BA$I$I(this.buf, 0, span << 1);
stop=off + span;
this.pos=0;
} else if (this.end - this.pos < 2) {
v[off++]=this.din.readShort$();
continue;
} else {
stop=Math.min(endoff, off + ((this.end - this.pos) >> 1));
}while (off < stop){
v[off++]=$I$(1).getShort$BA$I(this.buf, this.pos);
this.pos+=2;
}
}
});

Clazz.newMeth(C$, 'readInts$IA$I$I',  function (v, off, len) {
var stop;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
var span=Math.min(endoff - off, 256);
this.$in.readFully$BA$I$I(this.buf, 0, span << 2);
stop=off + span;
this.pos=0;
} else if (this.end - this.pos < 4) {
v[off++]=this.din.readInt$();
continue;
} else {
stop=Math.min(endoff, off + ((this.end - this.pos) >> 2));
}while (off < stop){
v[off++]=$I$(1).getInt$BA$I(this.buf, this.pos);
this.pos+=4;
}
}
});

Clazz.newMeth(C$, 'readFloats$FA$I$I',  function (v, off, len) {
var span;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
span=Math.min(endoff - off, 256);
this.$in.readFully$BA$I$I(this.buf, 0, span << 2);
this.pos=0;
} else if (this.end - this.pos < 4) {
v[off++]=this.din.readFloat$();
continue;
} else {
span=Math.min(endoff - off, ((this.end - this.pos) >> 2));
}$I$(6).bytesToFloats$BA$I$FA$I$I(this.buf, this.pos, v, off, span);
off+=span;
this.pos+=span << 2;
}
});

Clazz.newMeth(C$, 'readLongs$JA$I$I',  function (v, off, len) {
var stop;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
var span=Math.min(endoff - off, 128);
this.$in.readFully$BA$I$I(this.buf, 0, span << 3);
stop=off + span;
this.pos=0;
} else if (this.end - this.pos < 8) {
v[off++]=this.din.readLong$();
continue;
} else {
stop=Math.min(endoff, off + ((this.end - this.pos) >> 3));
}while (off < stop){
v[off++]=$I$(1).getLong$BA$I(this.buf, this.pos);
this.pos+=8;
}
}
});

Clazz.newMeth(C$, 'readDoubles$DA$I$I',  function (v, off, len) {
var span;
var endoff=off + len;
while (off < endoff){
if (!this.blkmode) {
span=Math.min(endoff - off, 128);
this.$in.readFully$BA$I$I(this.buf, 0, span << 3);
this.pos=0;
} else if (this.end - this.pos < 8) {
v[off++]=this.din.readDouble$();
continue;
} else {
span=Math.min(endoff - off, ((this.end - this.pos) >> 3));
}$I$(6).bytesToDoubles$BA$I$DA$I$I(this.buf, this.pos, v, off, span);
off+=span;
this.pos+=span << 3;
}
});

Clazz.newMeth(C$, 'readLongUTF$',  function () {
return p$3.readUTFBody$J.apply(this, [this.readLong$()]);
});

Clazz.newMeth(C$, 'readUTFBody$J',  function (utflen) {
var sbuf=Clazz.new_($I$(7,1));
if (!this.blkmode) {
this.end=this.pos=0;
}while (Long.$gt(utflen,0 )){
var avail=this.end - this.pos;
if (avail >= 3 || Long.$eq(avail,utflen ) ) {
(utflen=Long.$sub(utflen,(p$3.readUTFSpan$StringBuilder$J.apply(this, [sbuf, utflen]))));
} else {
if (this.blkmode) {
(utflen=Long.$sub(utflen,(p$3.readUTFChar$StringBuilder$J.apply(this, [sbuf, utflen]))));
} else {
if (avail > 0) {
System.arraycopy$O$I$O$I$I(this.buf, this.pos, this.buf, 0, avail);
}this.pos=0;
this.end=Long.$ival(Math.min$J$J(1024, utflen));
this.$in.readFully$BA$I$I(this.buf, avail, this.end - avail);
}}}
return sbuf.toString();
}, p$3);

Clazz.newMeth(C$, 'readUTFSpan$StringBuilder$J',  function (sbuf, utflen) {
var cpos=0;
var start=this.pos;
var avail=Math.min(this.end - this.pos, 256);
var stop=this.pos + ((Long.$gt(utflen,avail )) ? avail - 2 : Long.$ival(utflen));
var outOfBounds=false;
try {
while (this.pos < stop){
var b1;
var b2;
var b3;
b1=this.buf[this.pos++] & 255;
switch (b1 >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
this.cbuf[cpos++]=String.fromCharCode(b1);
break;
case 12:
case 13:
b2=this.buf[this.pos++];
if ((b2 & 192) != 128) {
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}this.cbuf[cpos++]=String.fromCharCode((((b1 & 31) << 6) | ((b2 & 63) << 0)));
break;
case 14:
b3=this.buf[this.pos + 1];
b2=this.buf[this.pos + 0];
this.pos+=2;
if ((b2 & 192) != 128 || (b3 & 192) != 128 ) {
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}this.cbuf[cpos++]=String.fromCharCode((((b1 & 15) << 12) | ((b2 & 63) << 6) | ((b3 & 63) << 0) ));
break;
default:
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
outOfBounds=true;
} else {
throw ex;
}
} finally {
if (outOfBounds || Long.$gt((this.pos - start),utflen ) ) {
this.pos=start + Long.$ival(utflen);
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}}
sbuf.append$CA$I$I(this.cbuf, 0, cpos);
return this.pos - start;
}, p$3);

Clazz.newMeth(C$, 'readUTFChar$StringBuilder$J',  function (sbuf, utflen) {
var b1;
var b2;
var b3;
b1=this.readByte$() & 255;
switch (b1 >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
sbuf.append$C(String.fromCharCode(b1));
return 1;
case 12:
case 13:
if (Long.$lt(utflen,2 )) {
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}b2=this.readByte$();
if ((b2 & 192) != 128) {
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}sbuf.append$C(String.fromCharCode((((b1 & 31) << 6) | ((b2 & 63) << 0))));
return 2;
case 14:
if (Long.$lt(utflen,3 )) {
if (Long.$eq(utflen,2 )) {
this.readByte$();
}throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}b2=this.readByte$();
b3=this.readByte$();
if ((b2 & 192) != 128 || (b3 & 192) != 128 ) {
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}sbuf.append$C(String.fromCharCode((((b1 & 15) << 12) | ((b2 & 63) << 6) | ((b3 & 63) << 0) )));
return 3;
default:
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException'));
}
}, p$3);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream, "HandleTable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['HandleList',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lowDep=-1;
this.size=0;
},1);

C$.$fields$=[['I',['lowDep','size'],'O',['status','byte[]','entries','Object[]','deps','java.io.ObjectInputStream.HandleTable.HandleList[]']]]

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.$init$.apply(this);
this.status=Clazz.array(Byte.TYPE, [initialCapacity]);
this.entries=Clazz.array(java.lang.Object, [initialCapacity]);
this.deps=Clazz.array($I$(8), [initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'assign$O',  function (obj) {
if (this.size >= this.entries.length) {
p$4.grow.apply(this, []);
}this.status[this.size]=2;
this.entries[this.size]=obj;
return this.size++;
});

Clazz.newMeth(C$, 'markDependency$I$I',  function (dependent, target) {
if (dependent == -1 || target == -1 ) {
return;
}switch (this.status[dependent]) {
case 2:
switch (this.status[target]) {
case 1:
break;
case 3:
this.markException$I$ClassNotFoundException(dependent, this.entries[target]);
break;
case 2:
if (this.deps[target] == null ) {
this.deps[target]=Clazz.new_($I$(8,1));
}this.deps[target].add$I(dependent);
if (this.lowDep < 0 || this.lowDep > target ) {
this.lowDep=target;
}break;
default:
throw Clazz.new_($I$(9,1));
}
break;
case 3:
break;
default:
throw Clazz.new_($I$(9,1));
}
});

Clazz.newMeth(C$, 'markException$I$ClassNotFoundException',  function (handle, ex) {
switch (this.status[handle]) {
case 2:
this.status[handle]=3;
this.entries[handle]=ex;
var dlist=this.deps[handle];
if (dlist != null ) {
var ndeps=dlist.size$();
for (var i=0; i < ndeps; i++) {
this.markException$I$ClassNotFoundException(dlist.get$I(i), ex);
}
this.deps[handle]=null;
}break;
case 3:
break;
default:
throw Clazz.new_($I$(9,1));
}
});

Clazz.newMeth(C$, 'finish$I',  function (handle) {
var end;
if (this.lowDep < 0) {
end=handle + 1;
} else if (this.lowDep >= handle) {
end=this.size;
this.lowDep=-1;
} else {
return;
}for (var i=handle; i < end; i++) {
switch (this.status[i]) {
case 2:
this.status[i]=1;
this.deps[i]=null;
break;
case 1:
case 3:
break;
default:
throw Clazz.new_($I$(9,1));
}
}
});

Clazz.newMeth(C$, 'setObject$I$O',  function (handle, obj) {
switch (this.status[handle]) {
case 2:
case 1:
this.entries[handle]=obj;
break;
case 3:
break;
default:
throw Clazz.new_($I$(9,1));
}
});

Clazz.newMeth(C$, 'lookupObject$I',  function (handle) {
return (handle != -1 && this.status[handle] != 3 ) ? this.entries[handle] : null;
});

Clazz.newMeth(C$, 'lookupException$I',  function (handle) {
return (handle != -1 && this.status[handle] == 3 ) ? this.entries[handle] : null;
});

Clazz.newMeth(C$, 'clear$',  function () {
$I$(10).fill$BA$I$I$B(this.status, 0, this.size, 0);
$I$(10).fill$OA$I$I$O(this.entries, 0, this.size, null);
$I$(10).fill$OA$I$I$O(this.deps, 0, this.size, null);
this.lowDep=-1;
this.size=0;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'grow',  function () {
var newCapacity=(this.entries.length << 1) + 1;
var newStatus=Clazz.array(Byte.TYPE, [newCapacity]);
var newEntries=Clazz.array(java.lang.Object, [newCapacity]);
var newDeps=Clazz.array($I$(8), [newCapacity]);
System.arraycopy$O$I$O$I$I(this.status, 0, newStatus, 0, this.size);
System.arraycopy$O$I$O$I$I(this.entries, 0, newEntries, 0, this.size);
System.arraycopy$O$I$O$I$I(this.deps, 0, newDeps, 0, this.size);
this.status=newStatus;
this.entries=newEntries;
this.deps=newDeps;
}, p$4);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectInputStream.HandleTable, "HandleList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.list=Clazz.array(Integer.TYPE, [4]);
this.size=0;
},1);

C$.$fields$=[['I',['size'],'O',['list','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$I',  function (handle) {
if (this.size >= this.list.length) {
var newList=Clazz.array(Integer.TYPE, [this.list.length << 1]);
System.arraycopy$O$I$O$I$I(this.list, 0, newList, 0, this.list.length);
this.list=newList;
}this.list[this.size++]=handle;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
if (index >= this.size) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}return this.list[index];
});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
