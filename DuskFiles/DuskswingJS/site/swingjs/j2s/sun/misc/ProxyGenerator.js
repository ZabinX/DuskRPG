(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},p$2={},p$3={},I$=[[0,'java.io.ByteArrayOutputStream','java.util.ArrayList','sun.misc.ProxyGenerator',['sun.misc.ProxyGenerator','.MethodInfo'],'java.io.DataOutputStream',['sun.misc.ProxyGenerator','.ExceptionTableEntry'],['sun.misc.ProxyGenerator','.PrimitiveTypeInfo'],'AssertionError','java.util.HashMap','java.lang.reflect.Array','InternalError',['sun.misc.ProxyGenerator','.ConstantPool','.IndirectEntry'],['sun.misc.ProxyGenerator','.ConstantPool','.ValueEntry'],'java.security.AccessController','sun.security.action.GetBooleanAction','NoSuchMethodError',['sun.misc.ProxyGenerator','.ConstantPool'],'java.nio.file.Paths','java.io.File','java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.nio.file.OpenOption',['sun.misc.ProxyGenerator','.FieldInfo'],['sun.misc.ProxyGenerator','.ProxyMethod'],'java.util.LinkedList','StringBuilder','Error']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProxyGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FieldInfo',2],['ExceptionTableEntry',10],['MethodInfo',2],['ProxyMethod',2],['PrimitiveTypeInfo',10],['ConstantPool',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cp=Clazz.new_($I$(17,1));
this.fields=Clazz.new_($I$(2,1));
this.methods=Clazz.new_($I$(2,1));
this.proxyMethods=Clazz.new_($I$(9,1));
this.proxyMethodCount=0;
},1);

C$.$fields$=[['I',['accessFlags','proxyMethodCount'],'S',['className'],'O',['interfaces','Class[]','cp','sun.misc.ProxyGenerator.ConstantPool','fields','java.util.List','+methods','proxyMethods','java.util.Map']]
,['Z',['saveGeneratedFiles'],'O',['hashCodeMethod','java.lang.reflect.Method','+equalsMethod','+toStringMethod']]]

Clazz.newMeth(C$, 'generateProxyClass$S$ClassA',  function (name, interfaces) {
return C$.generateProxyClass$S$ClassA$I(name, interfaces, (49));
}, 1);

Clazz.newMeth(C$, 'generateProxyClass$S$ClassA$I',  function (name, interfaces, accessFlags) {
var gen=Clazz.new_(C$.c$$S$ClassA$I,[name, interfaces, accessFlags]);
var classFile=p$1.generateClassFile.apply(gen, []);
if (C$.saveGeneratedFiles) {
$I$(14,"doPrivileged$java_security_PrivilegedAction",[((P$.ProxyGenerator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProxyGenerator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var i=this.$finals$.name.lastIndexOf$I(".");
var path;
if (i > 0) {
var dir=$I$(18,"get$S$SA",[this.$finals$.name.substring$I$I(0, i).replace$C$C(".", $I$(19).separatorChar), Clazz.array(String, -1, [])]);
$I$(20,"createDirectories$java_nio_file_Path$java_nio_file_attribute_FileAttributeA",[dir, Clazz.array($I$(21), -1, [])]);
path=dir.resolve$S(this.$finals$.name.substring$I$I(i + 1, this.$finals$.name.length$()) + ".class");
} else {
path=$I$(18,"get$S$SA",[this.$finals$.name + ".class", Clazz.array(String, -1, [])]);
}$I$(20,"write$java_nio_file_Path$BA$java_nio_file_OpenOptionA",[path, this.$finals$.classFile, Clazz.array($I$(22), -1, [])]);
return null;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(11,1).c$$S,["I/O exception saving generated file: " + e]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.ProxyGenerator$1.$init$,[this, {classFile:classFile,name:name}]))]);
}return classFile;
}, 1);

Clazz.newMeth(C$, 'c$$S$ClassA$I',  function (className, interfaces, accessFlags) {
;C$.$init$.apply(this);
this.className=className;
this.interfaces=interfaces;
this.accessFlags=accessFlags;
}, 1);

Clazz.newMeth(C$, 'generateClassFile',  function () {
p$1.addProxyMethod$java_lang_reflect_Method$Class.apply(this, [C$.hashCodeMethod, Clazz.getClass(java.lang.Object)]);
p$1.addProxyMethod$java_lang_reflect_Method$Class.apply(this, [C$.equalsMethod, Clazz.getClass(java.lang.Object)]);
p$1.addProxyMethod$java_lang_reflect_Method$Class.apply(this, [C$.toStringMethod, Clazz.getClass(java.lang.Object)]);
for (var intf, $intf = 0, $$intf = this.interfaces; $intf<$$intf.length&&((intf=($$intf[$intf])),1);$intf++) {
for (var m, $m = 0, $$m = intf.getMethods$(); $m<$$m.length&&((m=($$m[$m])),1);$m++) {
p$1.addProxyMethod$java_lang_reflect_Method$Class.apply(this, [m, intf]);
}
}
for (var sigmethods, $sigmethods = this.proxyMethods.values$().iterator$(); $sigmethods.hasNext$()&&((sigmethods=($sigmethods.next$())),1);) {
C$.checkReturnTypes$java_util_List(sigmethods);
}
try {
this.methods.add$O(p$1.generateConstructor.apply(this, []));
for (var sigmethods, $sigmethods = this.proxyMethods.values$().iterator$(); $sigmethods.hasNext$()&&((sigmethods=($sigmethods.next$())),1);) {
for (var pm, $pm = sigmethods.iterator$(); $pm.hasNext$()&&((pm=($pm.next$())),1);) {
this.fields.add$O(Clazz.new_($I$(23,1).c$$S$S$I,[this, null, pm.methodFieldName, "Ljava/lang/reflect/Method;", 10]));
this.methods.add$O(p$2.generateMethod.apply(pm, []));
}
}
this.methods.add$O(p$1.generateStaticInitializer.apply(this, []));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(11,1).c$$S$Throwable,["unexpected I/O Exception", e]);
} else {
throw e;
}
}
if (this.methods.size$() > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["method limit exceeded"]);
}if (this.fields.size$() > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["field limit exceeded"]);
}this.cp.getClass$S(C$.dotToSlash$S(this.className));
this.cp.getClass$S("java/lang/reflect/Proxy");
for (var intf, $intf = 0, $$intf = this.interfaces; $intf<$$intf.length&&((intf=($$intf[$intf])),1);$intf++) {
this.cp.getClass$S(C$.dotToSlash$S(intf.getName$()));
}
this.cp.setReadOnly$();
var bout=Clazz.new_($I$(1,1));
var dout=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[bout]);
try {
dout.writeInt$I(-889275714);
dout.writeShort$I(0);
dout.writeShort$I(49);
this.cp.write$java_io_OutputStream(dout);
dout.writeShort$I(this.accessFlags);
dout.writeShort$I(this.cp.getClass$S(C$.dotToSlash$S(this.className)));
dout.writeShort$I(this.cp.getClass$S("java/lang/reflect/Proxy"));
dout.writeShort$I(this.interfaces.length);
for (var intf, $intf = 0, $$intf = this.interfaces; $intf<$$intf.length&&((intf=($$intf[$intf])),1);$intf++) {
dout.writeShort$I(this.cp.getClass$S(C$.dotToSlash$S(intf.getName$())));
}
dout.writeShort$I(this.fields.size$());
for (var f, $f = this.fields.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
f.write$java_io_DataOutputStream(dout);
}
dout.writeShort$I(this.methods.size$());
for (var m, $m = this.methods.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
m.write$java_io_DataOutputStream(dout);
}
dout.writeShort$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(11,1).c$$S$Throwable,["unexpected I/O Exception", e]);
} else {
throw e;
}
}
return bout.toByteArray$();
}, p$1);

Clazz.newMeth(C$, 'addProxyMethod$java_lang_reflect_Method$Class',  function (m, fromClass) {
var name=m.getName$();
var parameterTypes=m.getParameterTypes$();
var returnType=m.getReturnType$();
var exceptionTypes=m.getExceptionTypes$();
var sig=name + C$.getParameterDescriptors$ClassA(parameterTypes);
var sigmethods=this.proxyMethods.get$O(sig);
if (sigmethods != null ) {
for (var pm, $pm = sigmethods.iterator$(); $pm.hasNext$()&&((pm=($pm.next$())),1);) {
if (returnType === pm.returnType ) {
var legalExceptions=Clazz.new_($I$(2,1));
C$.collectCompatibleTypes$ClassA$ClassA$java_util_List(exceptionTypes, pm.exceptionTypes, legalExceptions);
C$.collectCompatibleTypes$ClassA$ClassA$java_util_List(pm.exceptionTypes, exceptionTypes, legalExceptions);
pm.exceptionTypes=Clazz.array(Class, [legalExceptions.size$()]);
pm.exceptionTypes=legalExceptions.toArray$OA(pm.exceptionTypes);
return;
}}
} else {
sigmethods=Clazz.new_($I$(2,1).c$$I,[3]);
this.proxyMethods.put$O$O(sig, sigmethods);
}sigmethods.add$O(Clazz.new_($I$(24,1).c$$S$ClassA$Class$ClassA$Class,[this, null, name, parameterTypes, returnType, exceptionTypes, fromClass]));
}, p$1);

Clazz.newMeth(C$, 'checkReturnTypes$java_util_List',  function (methods) {
if (methods.size$() < 2) {
return;
}var uncoveredReturnTypes=Clazz.new_($I$(25,1));
 nextNewReturnType : for (var pm, $pm = methods.iterator$(); $pm.hasNext$()&&((pm=($pm.next$())),1);) {
var newReturnType=pm.returnType;
if (newReturnType.isPrimitive$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["methods with same signature " + C$.getFriendlyMethodSignature$S$ClassA(pm.methodName, pm.parameterTypes) + " but incompatible return types: " + newReturnType.getName$() + " and others" ]);
}var added=false;
var liter=uncoveredReturnTypes.listIterator$();
while (liter.hasNext$()){
var uncoveredReturnType=liter.next$();
if (newReturnType.isAssignableFrom$Class(uncoveredReturnType)) {
Clazz.assert(C$, this, function(){return !added});
continue nextNewReturnType;
}if (uncoveredReturnType.isAssignableFrom$Class(newReturnType)) {
if (!added) {
liter.set$O(newReturnType);
added=true;
} else {
liter.remove$();
}}}
if (!added) {
uncoveredReturnTypes.add$O(newReturnType);
}}
if (uncoveredReturnTypes.size$() > 1) {
var pm=methods.get$I(0);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["methods with same signature " + C$.getFriendlyMethodSignature$S$ClassA(pm.methodName, pm.parameterTypes) + " but incompatible return types: " + uncoveredReturnTypes ]);
}}, 1);

Clazz.newMeth(C$, 'generateConstructor',  function () {
var minfo=Clazz.new_([this, null, "<init>", "(Ljava/lang/reflect/InvocationHandler;)V", 1],$I$(4,1).c$$S$S$I);
var out=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[minfo.code]);
p$1.code_aload$I$java_io_DataOutputStream.apply(this, [0, out]);
p$1.code_aload$I$java_io_DataOutputStream.apply(this, [1, out]);
out.writeByte$I(183);
out.writeShort$I(this.cp.getMethodRef$S$S$S("java/lang/reflect/Proxy", "<init>", "(Ljava/lang/reflect/InvocationHandler;)V"));
out.writeByte$I(177);
minfo.maxStack=($s$[0] = 10, $s$[0]);
minfo.maxLocals=($s$[0] = 2, $s$[0]);
minfo.declaredExceptions=Clazz.array(Short.TYPE, [0]);
return minfo;
}, p$1);

Clazz.newMeth(C$, 'generateStaticInitializer',  function () {
var minfo=Clazz.new_([this, null, "<clinit>", "()V", 8],$I$(4,1).c$$S$S$I);
var localSlot0=1;
var pc;
var tryBegin=($s$[0] = 0, $s$[0]);
var tryEnd;
var out=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[minfo.code]);
for (var sigmethods, $sigmethods = this.proxyMethods.values$().iterator$(); $sigmethods.hasNext$()&&((sigmethods=($sigmethods.next$())),1);) {
for (var pm, $pm = sigmethods.iterator$(); $pm.hasNext$()&&((pm=($pm.next$())),1);) {
p$2.codeFieldInitialization$java_io_DataOutputStream.apply(pm, [out]);
}
}
out.writeByte$I(177);
tryEnd=pc=($s$[0] = minfo.code.size$(), $s$[0]);
minfo.exceptionTable.add$O(Clazz.new_([tryBegin, tryEnd, pc, this.cp.getClass$S("java/lang/NoSuchMethodException")],$I$(6,1).c$$H$H$H$H));
p$1.code_astore$I$java_io_DataOutputStream.apply(this, [localSlot0, out]);
out.writeByte$I(187);
out.writeShort$I(this.cp.getClass$S("java/lang/NoSuchMethodError"));
out.writeByte$I(89);
p$1.code_aload$I$java_io_DataOutputStream.apply(this, [localSlot0, out]);
out.writeByte$I(182);
out.writeShort$I(this.cp.getMethodRef$S$S$S("java/lang/Throwable", "getMessage", "()Ljava/lang/String;"));
out.writeByte$I(183);
out.writeShort$I(this.cp.getMethodRef$S$S$S("java/lang/NoSuchMethodError", "<init>", "(Ljava/lang/String;)V"));
out.writeByte$I(191);
pc=($s$[0] = minfo.code.size$(), $s$[0]);
minfo.exceptionTable.add$O(Clazz.new_([tryBegin, tryEnd, pc, this.cp.getClass$S("java/lang/ClassNotFoundException")],$I$(6,1).c$$H$H$H$H));
p$1.code_astore$I$java_io_DataOutputStream.apply(this, [localSlot0, out]);
out.writeByte$I(187);
out.writeShort$I(this.cp.getClass$S("java/lang/NoClassDefFoundError"));
out.writeByte$I(89);
p$1.code_aload$I$java_io_DataOutputStream.apply(this, [localSlot0, out]);
out.writeByte$I(182);
out.writeShort$I(this.cp.getMethodRef$S$S$S("java/lang/Throwable", "getMessage", "()Ljava/lang/String;"));
out.writeByte$I(183);
out.writeShort$I(this.cp.getMethodRef$S$S$S("java/lang/NoClassDefFoundError", "<init>", "(Ljava/lang/String;)V"));
out.writeByte$I(191);
if (minfo.code.size$() > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["code size limit exceeded"]);
}minfo.maxStack=($s$[0] = 10, $s$[0]);
minfo.maxLocals=($s$[0] = (localSlot0 + 1), $s$[0]);
minfo.declaredExceptions=Clazz.array(Short.TYPE, [0]);
return minfo;
}, p$1);

Clazz.newMeth(C$, 'code_iload$I$java_io_DataOutputStream',  function (lvar, out) {
p$1.codeLocalLoadStore$I$I$I$java_io_DataOutputStream.apply(this, [lvar, 21, 26, out]);
}, p$1);

Clazz.newMeth(C$, 'code_lload$I$java_io_DataOutputStream',  function (lvar, out) {
p$1.codeLocalLoadStore$I$I$I$java_io_DataOutputStream.apply(this, [lvar, 22, 30, out]);
}, p$1);

Clazz.newMeth(C$, 'code_fload$I$java_io_DataOutputStream',  function (lvar, out) {
p$1.codeLocalLoadStore$I$I$I$java_io_DataOutputStream.apply(this, [lvar, 23, 34, out]);
}, p$1);

Clazz.newMeth(C$, 'code_dload$I$java_io_DataOutputStream',  function (lvar, out) {
p$1.codeLocalLoadStore$I$I$I$java_io_DataOutputStream.apply(this, [lvar, 24, 38, out]);
}, p$1);

Clazz.newMeth(C$, 'code_aload$I$java_io_DataOutputStream',  function (lvar, out) {
p$1.codeLocalLoadStore$I$I$I$java_io_DataOutputStream.apply(this, [lvar, 25, 42, out]);
}, p$1);

Clazz.newMeth(C$, 'code_astore$I$java_io_DataOutputStream',  function (lvar, out) {
p$1.codeLocalLoadStore$I$I$I$java_io_DataOutputStream.apply(this, [lvar, 58, 75, out]);
}, p$1);

Clazz.newMeth(C$, 'codeLocalLoadStore$I$I$I$java_io_DataOutputStream',  function (lvar, opcode, opcode_0, out) {
Clazz.assert(C$, this, function(){return lvar >= 0 && lvar <= 65535 });
if (lvar <= 3) {
out.writeByte$I(opcode_0 + lvar);
} else if (lvar <= 255) {
out.writeByte$I(opcode);
out.writeByte$I(lvar & 255);
} else {
out.writeByte$I(196);
out.writeByte$I(opcode);
out.writeShort$I(lvar & 65535);
}}, p$1);

Clazz.newMeth(C$, 'code_ldc$I$java_io_DataOutputStream',  function (index, out) {
Clazz.assert(C$, this, function(){return index >= 0 && index <= 65535 });
if (index <= 255) {
out.writeByte$I(18);
out.writeByte$I(index & 255);
} else {
out.writeByte$I(19);
out.writeShort$I(index & 65535);
}}, p$1);

Clazz.newMeth(C$, 'code_ipush$I$java_io_DataOutputStream',  function (value, out) {
if (value >= -1 && value <= 5 ) {
out.writeByte$I(3 + value);
} else if (value >= -128 && value <= 127 ) {
out.writeByte$I(16);
out.writeByte$I(value & 255);
} else if (value >= -32768 && value <= 32767 ) {
out.writeByte$I(17);
out.writeShort$I(value & 65535);
} else {
throw Clazz.new_($I$(8,1));
}}, p$1);

Clazz.newMeth(C$, 'codeClassForName$Class$java_io_DataOutputStream',  function (cl, out) {
p$1.code_ldc$I$java_io_DataOutputStream.apply(this, [this.cp.getString$S(cl.getName$()), out]);
out.writeByte$I(184);
out.writeShort$I(this.cp.getMethodRef$S$S$S("java/lang/Class", "forName", "(Ljava/lang/String;)Ljava/lang/Class;"));
}, p$1);

Clazz.newMeth(C$, 'dotToSlash$S',  function (name) {
return name.replace$C$C(".", "/");
}, 1);

Clazz.newMeth(C$, 'getMethodDescriptor$ClassA$Class',  function (parameterTypes, returnType) {
return C$.getParameterDescriptors$ClassA(parameterTypes) + ((returnType === Void.TYPE ) ? "V" : C$.getFieldType$Class(returnType));
}, 1);

Clazz.newMeth(C$, 'getParameterDescriptors$ClassA',  function (parameterTypes) {
var desc=Clazz.new_(["("],$I$(26,1).c$$S);
for (var i=0; i < parameterTypes.length; i++) {
desc.append$S(C$.getFieldType$Class(parameterTypes[i]));
}
desc.append$C(")");
return desc.toString();
}, 1);

Clazz.newMeth(C$, 'getFieldType$Class',  function (type) {
if (type.isPrimitive$()) {
return $I$(7).get$Class(type).baseTypeString;
} else if (type.isArray$()) {
return type.getName$().replace$C$C(".", "/");
} else {
return "L" + C$.dotToSlash$S(type.getName$()) + ";" ;
}}, 1);

Clazz.newMeth(C$, 'getFriendlyMethodSignature$S$ClassA',  function (name, parameterTypes) {
var sig=Clazz.new_($I$(26,1).c$$S,[name]);
sig.append$C("(");
for (var i=0; i < parameterTypes.length; i++) {
if (i > 0) {
sig.append$C(",");
}var parameterType=parameterTypes[i];
var dimensions=0;
while (parameterType.isArray$()){
parameterType=parameterType.getComponentType$();
++dimensions;
}
sig.append$S(parameterType.getName$());
while (dimensions-- > 0){
sig.append$S("[]");
}
}
sig.append$C(")");
return sig.toString();
}, 1);

Clazz.newMeth(C$, 'getWordsPerType$Class',  function (type) {
if (type === Long.TYPE  || type === Double.TYPE  ) {
return 2;
} else {
return 1;
}}, 1);

Clazz.newMeth(C$, 'collectCompatibleTypes$ClassA$ClassA$java_util_List',  function (from, $with, list) {
for (var fc, $fc = 0, $$fc = from; $fc<$$fc.length&&((fc=($$fc[$fc])),1);$fc++) {
if (!list.contains$O(fc)) {
for (var wc, $wc = 0, $$wc = $with; $wc<$$wc.length&&((wc=($$wc[$wc])),1);$wc++) {
if (wc.isAssignableFrom$Class(fc)) {
list.add$O(fc);
break;
}}
}}
}, 1);

Clazz.newMeth(C$, 'computeUniqueCatchList$ClassA',  function (exceptions) {
var uniqueList=Clazz.new_($I$(2,1));
uniqueList.add$O(Clazz.getClass($I$(27)));
uniqueList.add$O(Clazz.getClass(Clazz.load('RuntimeException')));
 nextException : for (var ex, $ex = 0, $$ex = exceptions; $ex<$$ex.length&&((ex=($$ex[$ex])),1);$ex++) {
if (ex.isAssignableFrom$Class(Clazz.getClass(Throwable))) {
uniqueList.clear$();
break;
} else if (!Clazz.getClass(Throwable).isAssignableFrom$Class(ex)) {
continue;
}for (var j=0; j < uniqueList.size$(); ) {
var ex2=uniqueList.get$I(j);
if (ex2.isAssignableFrom$Class(ex)) {
continue nextException;
} else if (ex.isAssignableFrom$Class(ex2)) {
uniqueList.remove$I(j);
} else {
++j;
}}
uniqueList.add$O(ex);
}
return uniqueList;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.saveGeneratedFiles=$I$(14,"doPrivileged$java_security_PrivilegedAction",[Clazz.new_($I$(15,1).c$$S,["sun.misc.ProxyGenerator.saveGeneratedFiles"])]).booleanValue$();
{
try {
C$.hashCodeMethod=Clazz.getClass(java.lang.Object).getMethod$S$ClassA("hashCode", Clazz.array(Class, -1, []));
C$.equalsMethod=Clazz.getClass(java.lang.Object).getMethod$S$ClassA("equals", Clazz.array(Class, -1, [Clazz.getClass(java.lang.Object)]));
C$.toStringMethod=Clazz.getClass(java.lang.Object).getMethod$S$ClassA("toString", Clazz.array(Class, -1, []));
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
throw Clazz.new_([e.getMessage$()],$I$(16,1).c$$S);
} else {
throw e;
}
}
};
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator, "FieldInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['accessFlags'],'S',['name','descriptor']]]

Clazz.newMeth(C$, 'c$$S$S$I',  function (name, descriptor, accessFlags) {
;C$.$init$.apply(this);
this.name=name;
this.descriptor=descriptor;
this.accessFlags=accessFlags;
this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(name);
this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(descriptor);
}, 1);

Clazz.newMeth(C$, 'write$java_io_DataOutputStream',  function (out) {
out.writeShort$I(this.accessFlags);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(this.name));
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(this.descriptor));
out.writeShort$I(0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator, "ExceptionTableEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['H',['startPc','endPc','handlerPc','catchType']]]

Clazz.newMeth(C$, 'c$$H$H$H$H',  function (startPc, endPc, handlerPc, catchType) {
;C$.$init$.apply(this);
this.startPc=startPc;
this.endPc=endPc;
this.handlerPc=handlerPc;
this.catchType=catchType;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator, "MethodInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.code=Clazz.new_($I$(1,1));
this.exceptionTable=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['accessFlags'],'H',['maxStack','maxLocals'],'S',['name','descriptor'],'O',['code','java.io.ByteArrayOutputStream','exceptionTable','java.util.List','declaredExceptions','short[]']]]

Clazz.newMeth(C$, 'c$$S$S$I',  function (name, descriptor, accessFlags) {
;C$.$init$.apply(this);
this.name=name;
this.descriptor=descriptor;
this.accessFlags=accessFlags;
this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(name);
this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(descriptor);
this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S("Code");
this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S("Exceptions");
}, 1);

Clazz.newMeth(C$, 'write$java_io_DataOutputStream',  function (out) {
out.writeShort$I(this.accessFlags);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(this.name));
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S(this.descriptor));
out.writeShort$I(2);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S("Code"));
out.writeInt$I(12 + this.code.size$() + 8 * this.exceptionTable.size$() );
out.writeShort$I(this.maxStack);
out.writeShort$I(this.maxLocals);
out.writeInt$I(this.code.size$());
this.code.writeTo$java_io_OutputStream(out);
out.writeShort$I(this.exceptionTable.size$());
for (var e, $e = this.exceptionTable.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
out.writeShort$I(e.startPc);
out.writeShort$I(e.endPc);
out.writeShort$I(e.handlerPc);
out.writeShort$I(e.catchType);
}
out.writeShort$I(0);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getUtf8$S("Exceptions"));
out.writeInt$I(2 + 2 * this.declaredExceptions.length);
out.writeShort$I(this.declaredExceptions.length);
for (var value, $value = 0, $$value = this.declaredExceptions; $value<$$value.length&&((value=($$value[$value])),1);$value++) {
out.writeShort$I(value);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator, "ProxyMethod", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['methodName','methodFieldName'],'O',['parameterTypes','Class[]','returnType','Class','exceptionTypes','Class[]','fromClass','Class']]]

Clazz.newMeth(C$, 'c$$S$ClassA$Class$ClassA$Class',  function (methodName, parameterTypes, returnType, exceptionTypes, fromClass) {
;C$.$init$.apply(this);
this.methodName=methodName;
this.parameterTypes=parameterTypes;
this.returnType=returnType;
this.exceptionTypes=exceptionTypes;
this.fromClass=fromClass;
this.methodFieldName="m" + this.b$['sun.misc.ProxyGenerator'].proxyMethodCount++;
}, 1);

Clazz.newMeth(C$, 'generateMethod',  function () {
var desc=$I$(3).getMethodDescriptor$ClassA$Class(this.parameterTypes, this.returnType);
var minfo=Clazz.new_($I$(4,1).c$$S$S$I,[this, null, this.methodName, desc, 17]);
var parameterSlot=Clazz.array(Integer.TYPE, [this.parameterTypes.length]);
var nextSlot=1;
for (var i=0; i < parameterSlot.length; i++) {
parameterSlot[i]=nextSlot;
nextSlot+=$I$(3).getWordsPerType$Class(this.parameterTypes[i]);
}
var localSlot0=nextSlot;
var pc;
var tryBegin=($s$[0] = 0, $s$[0]);
var tryEnd;
var out=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[minfo.code]);
p$1.code_aload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [0, out]);
out.writeByte$I(180);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getFieldRef$S$S$S("java/lang/reflect/Proxy", "h", "Ljava/lang/reflect/InvocationHandler;"));
p$1.code_aload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [0, out]);
out.writeByte$I(178);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getFieldRef$S$S$S($I$(3).dotToSlash$S(this.b$['sun.misc.ProxyGenerator'].className), this.methodFieldName, "Ljava/lang/reflect/Method;"));
if (this.parameterTypes.length > 0) {
p$1.code_ipush$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [this.parameterTypes.length, out]);
out.writeByte$I(189);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getClass$S("java/lang/Object"));
for (var i=0; i < this.parameterTypes.length; i++) {
out.writeByte$I(89);
p$1.code_ipush$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [i, out]);
p$2.codeWrapArgument$Class$I$java_io_DataOutputStream.apply(this, [this.parameterTypes[i], parameterSlot[i], out]);
out.writeByte$I(83);
}
} else {
out.writeByte$I(1);
}out.writeByte$I(185);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getInterfaceMethodRef$S$S$S("java/lang/reflect/InvocationHandler", "invoke", "(Ljava/lang/Object;Ljava/lang/reflect/Method;[Ljava/lang/Object;)Ljava/lang/Object;"));
out.writeByte$I(4);
out.writeByte$I(0);
if (this.returnType === Void.TYPE ) {
out.writeByte$I(87);
out.writeByte$I(177);
} else {
p$2.codeUnwrapReturnValue$Class$java_io_DataOutputStream.apply(this, [this.returnType, out]);
}tryEnd=pc=($s$[0] = minfo.code.size$(), $s$[0]);
var catchList=$I$(3).computeUniqueCatchList$ClassA(this.exceptionTypes);
if (catchList.size$() > 0) {
for (var ex, $ex = catchList.iterator$(); $ex.hasNext$()&&((ex=($ex.next$())),1);) {
minfo.exceptionTable.add$O(Clazz.new_([tryBegin, tryEnd, pc, this.b$['sun.misc.ProxyGenerator'].cp.getClass$S($I$(3,"dotToSlash$S",[ex.getName$()]))],$I$(6,1).c$$H$H$H$H));
}
out.writeByte$I(191);
pc=($s$[0] = minfo.code.size$(), $s$[0]);
minfo.exceptionTable.add$O(Clazz.new_([tryBegin, tryEnd, pc, this.b$['sun.misc.ProxyGenerator'].cp.getClass$S("java/lang/Throwable")],$I$(6,1).c$$H$H$H$H));
p$1.code_astore$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [localSlot0, out]);
out.writeByte$I(187);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getClass$S("java/lang/reflect/UndeclaredThrowableException"));
out.writeByte$I(89);
p$1.code_aload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [localSlot0, out]);
out.writeByte$I(183);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getMethodRef$S$S$S("java/lang/reflect/UndeclaredThrowableException", "<init>", "(Ljava/lang/Throwable;)V"));
out.writeByte$I(191);
}if (minfo.code.size$() > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["code size limit exceeded"]);
}minfo.maxStack=($s$[0] = 10, $s$[0]);
minfo.maxLocals=($s$[0] = (localSlot0 + 1), $s$[0]);
minfo.declaredExceptions=Clazz.array(Short.TYPE, [this.exceptionTypes.length]);
for (var i=0; i < this.exceptionTypes.length; i++) {
minfo.declaredExceptions[i]=this.b$['sun.misc.ProxyGenerator'].cp.getClass$S($I$(3,"dotToSlash$S",[this.exceptionTypes[i].getName$()]));
}
return minfo;
}, p$2);

Clazz.newMeth(C$, 'codeWrapArgument$Class$I$java_io_DataOutputStream',  function (type, slot, out) {
if (type.isPrimitive$()) {
var prim=$I$(7).get$Class(type);
if (type === Integer.TYPE  || type === Boolean.TYPE   || type === Byte.TYPE   || type === Character.TYPE   || type === Short.TYPE  ) {
p$1.code_iload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [slot, out]);
} else if (type === Long.TYPE ) {
p$1.code_lload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [slot, out]);
} else if (type === Float.TYPE ) {
p$1.code_fload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [slot, out]);
} else if (type === Double.TYPE ) {
p$1.code_dload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [slot, out]);
} else {
throw Clazz.new_($I$(8,1));
}out.writeByte$I(184);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getMethodRef$S$S$S(prim.wrapperClassName, "valueOf", prim.wrapperValueOfDesc));
} else {
p$1.code_aload$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [slot, out]);
}}, p$2);

Clazz.newMeth(C$, 'codeUnwrapReturnValue$Class$java_io_DataOutputStream',  function (type, out) {
if (type.isPrimitive$()) {
var prim=$I$(7).get$Class(type);
out.writeByte$I(192);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getClass$S(prim.wrapperClassName));
out.writeByte$I(182);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getMethodRef$S$S$S(prim.wrapperClassName, prim.unwrapMethodName, prim.unwrapMethodDesc));
if (type === Integer.TYPE  || type === Boolean.TYPE   || type === Byte.TYPE   || type === Character.TYPE   || type === Short.TYPE  ) {
out.writeByte$I(172);
} else if (type === Long.TYPE ) {
out.writeByte$I(173);
} else if (type === Float.TYPE ) {
out.writeByte$I(174);
} else if (type === Double.TYPE ) {
out.writeByte$I(175);
} else {
throw Clazz.new_($I$(8,1));
}} else {
out.writeByte$I(192);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getClass$S($I$(3,"dotToSlash$S",[type.getName$()])));
out.writeByte$I(176);
}}, p$2);

Clazz.newMeth(C$, 'codeFieldInitialization$java_io_DataOutputStream',  function (out) {
p$1.codeClassForName$Class$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [this.fromClass, out]);
p$1.code_ldc$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [this.b$['sun.misc.ProxyGenerator'].cp.getString$S(this.methodName), out]);
p$1.code_ipush$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [this.parameterTypes.length, out]);
out.writeByte$I(189);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getClass$S("java/lang/Class"));
for (var i=0; i < this.parameterTypes.length; i++) {
out.writeByte$I(89);
p$1.code_ipush$I$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [i, out]);
if (this.parameterTypes[i].isPrimitive$()) {
var prim=$I$(7).get$Class(this.parameterTypes[i]);
out.writeByte$I(178);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getFieldRef$S$S$S(prim.wrapperClassName, "TYPE", "Ljava/lang/Class;"));
} else {
p$1.codeClassForName$Class$java_io_DataOutputStream.apply(this.b$['sun.misc.ProxyGenerator'], [this.parameterTypes[i], out]);
}out.writeByte$I(83);
}
out.writeByte$I(182);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getMethodRef$S$S$S("java/lang/Class", "getMethod", "(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;"));
out.writeByte$I(179);
out.writeShort$I(this.b$['sun.misc.ProxyGenerator'].cp.getFieldRef$S$S$S($I$(3).dotToSlash$S(this.b$['sun.misc.ProxyGenerator'].className), this.methodFieldName, "Ljava/lang/reflect/Method;"));
}, p$2);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator, "PrimitiveTypeInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['baseTypeString','wrapperClassName','wrapperValueOfDesc','unwrapMethodName','unwrapMethodDesc']]
,['O',['table','java.util.Map']]]

Clazz.newMeth(C$, 'add$Class$Class',  function (primitiveClass, wrapperClass) {
C$.table.put$O$O(primitiveClass, Clazz.new_(C$.c$$Class$Class,[primitiveClass, wrapperClass]));
}, 1);

Clazz.newMeth(C$, 'c$$Class$Class',  function (primitiveClass, wrapperClass) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return primitiveClass.isPrimitive$()});
this.baseTypeString=Clazz.array(primitiveClass, 0).getClass$().getName$().substring$I(1);
this.wrapperClassName=$I$(3,"dotToSlash$S",[wrapperClass.getName$()]);
this.wrapperValueOfDesc="(" + this.baseTypeString + ")L" + this.wrapperClassName + ";" ;
this.unwrapMethodName=primitiveClass.getName$() + "Value";
this.unwrapMethodDesc="()" + this.baseTypeString;
}, 1);

Clazz.newMeth(C$, 'get$Class',  function (cl) {
return C$.table.get$O(cl);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.table=Clazz.new_($I$(9,1));
{
C$.add$Class$Class(Byte.TYPE, Clazz.getClass(Byte));
C$.add$Class$Class(Character.TYPE, Clazz.getClass(Character));
C$.add$Class$Class(Double.TYPE, Clazz.getClass(Double));
C$.add$Class$Class(Float.TYPE, Clazz.getClass(Float));
C$.add$Class$Class(Integer.TYPE, Clazz.getClass(Integer));
C$.add$Class$Class(Long.TYPE, Clazz.getClass(Long));
C$.add$Class$Class(Short.TYPE, Clazz.getClass(Short));
C$.add$Class$Class(Boolean.TYPE, Clazz.getClass(Boolean));
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator, "ConstantPool", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Entry',1034],['ValueEntry',10],['IndirectEntry',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pool=Clazz.new_($I$(2,1).c$$I,[32]);
this.map=Clazz.new_($I$(9,1).c$$I,[16]);
this.readOnly=false;
},1);

C$.$fields$=[['Z',['readOnly'],'O',['pool','java.util.List','map','java.util.Map']]]

Clazz.newMeth(C$, 'getUtf8$S',  function (s) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return p$3.getValue$O.apply(this, [s]);
});

Clazz.newMeth(C$, 'getInteger$I',  function (i) {
return p$3.getValue$O.apply(this, [ new Integer(i)]);
});

Clazz.newMeth(C$, 'getFloat$F',  function (f) {
return p$3.getValue$O.apply(this, [ new Float(f)]);
});

Clazz.newMeth(C$, 'getClass$S',  function (name) {
var utf8Index=this.getUtf8$S(name);
return p$3.getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry.apply(this, [Clazz.new_($I$(12,1).c$$I$H,[7, utf8Index])]);
});

Clazz.newMeth(C$, 'getString$S',  function (s) {
var utf8Index=this.getUtf8$S(s);
return p$3.getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry.apply(this, [Clazz.new_($I$(12,1).c$$I$H,[8, utf8Index])]);
});

Clazz.newMeth(C$, 'getFieldRef$S$S$S',  function (className, name, descriptor) {
var classIndex=this.getClass$S(className);
var nameAndTypeIndex=this.getNameAndType$S$S(name, descriptor);
return p$3.getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry.apply(this, [Clazz.new_($I$(12,1).c$$I$H$H,[9, classIndex, nameAndTypeIndex])]);
});

Clazz.newMeth(C$, 'getMethodRef$S$S$S',  function (className, name, descriptor) {
var classIndex=this.getClass$S(className);
var nameAndTypeIndex=this.getNameAndType$S$S(name, descriptor);
return p$3.getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry.apply(this, [Clazz.new_($I$(12,1).c$$I$H$H,[10, classIndex, nameAndTypeIndex])]);
});

Clazz.newMeth(C$, 'getInterfaceMethodRef$S$S$S',  function (className, name, descriptor) {
var classIndex=this.getClass$S(className);
var nameAndTypeIndex=this.getNameAndType$S$S(name, descriptor);
return p$3.getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry.apply(this, [Clazz.new_($I$(12,1).c$$I$H$H,[11, classIndex, nameAndTypeIndex])]);
});

Clazz.newMeth(C$, 'getNameAndType$S$S',  function (name, descriptor) {
var nameIndex=this.getUtf8$S(name);
var descriptorIndex=this.getUtf8$S(descriptor);
return p$3.getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry.apply(this, [Clazz.new_($I$(12,1).c$$I$H$H,[12, nameIndex, descriptorIndex])]);
});

Clazz.newMeth(C$, 'setReadOnly$',  function () {
this.readOnly=true;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (out) {
var dataOut=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[out]);
dataOut.writeShort$I(this.pool.size$() + 1);
for (var e, $e = this.pool.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
e.write$java_io_DataOutputStream(dataOut);
}
});

Clazz.newMeth(C$, 'addEntry$sun_misc_ProxyGenerator_ConstantPool_Entry',  function (entry) {
this.pool.add$O(entry);
if (this.pool.size$() >= 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["constant pool size limit exceeded"]);
}return ($s$[0] = this.pool.size$(), $s$[0]);
}, p$3);

Clazz.newMeth(C$, 'getValue$O',  function (key) {
var index=this.map.get$O(key);
if (index != null ) {
return index.shortValue$();
} else {
if (this.readOnly) {
throw Clazz.new_($I$(11,1).c$$S,["late constant pool addition: " + key]);
}var i=p$3.addEntry$sun_misc_ProxyGenerator_ConstantPool_Entry.apply(this, [Clazz.new_($I$(13,1).c$$O,[key])]);
this.map.put$O$O(key,  new Short(i));
return i;
}}, p$3);

Clazz.newMeth(C$, 'getIndirect$sun_misc_ProxyGenerator_ConstantPool_IndirectEntry',  function (e) {
var index=this.map.get$O(e);
if (index != null ) {
return index.shortValue$();
} else {
if (this.readOnly) {
throw Clazz.new_($I$(11,1).c$$S,["late constant pool addition"]);
}var i=p$3.addEntry$sun_misc_ProxyGenerator_ConstantPool_Entry.apply(this, [e]);
this.map.put$O$O(e,  new Short(i));
return i;
}}, p$3);
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator.ConstantPool, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator.ConstantPool, "ValueEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.misc.ProxyGenerator','.ConstantPool','.Entry']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O',  function (value) {
Clazz.super_(C$, this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'write$java_io_DataOutputStream',  function (out) {
if (Clazz.instanceOf(this.value, "java.lang.String")) {
out.writeByte$I(1);
out.writeUTF$S(this.value);
} else if (Clazz.instanceOf(this.value, "java.lang.Integer")) {
out.writeByte$I(3);
out.writeInt$I((this.value).intValue$());
} else if (Clazz.instanceOf(this.value, "java.lang.Float")) {
out.writeByte$I(4);
out.writeFloat$F((this.value).floatValue$());
} else if (Clazz.instanceOf(this.value, "java.lang.Long")) {
out.writeByte$I(5);
out.writeLong$J((this.value).longValue$());
} else if (Clazz.instanceOf(this.value, "java.lang.Double")) {
out.writeDouble$D(6);
out.writeDouble$D((this.value).doubleValue$());
} else {
throw Clazz.new_($I$(11,1).c$$S,["bogus value entry: " + this.value]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProxyGenerator.ConstantPool, "IndirectEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.misc.ProxyGenerator','.ConstantPool','.Entry']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tag'],'H',['index0','index1']]]

Clazz.newMeth(C$, 'c$$I$H',  function (tag, index) {
Clazz.super_(C$, this);
this.tag=tag;
this.index0=index;
this.index1=($s$[0] = 0, $s$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$H$H',  function (tag, index0, index1) {
Clazz.super_(C$, this);
this.tag=tag;
this.index0=index0;
this.index1=index1;
}, 1);

Clazz.newMeth(C$, 'write$java_io_DataOutputStream',  function (out) {
out.writeByte$I(this.tag);
out.writeShort$I(this.index0);
if (this.tag == 9 || this.tag == 10  || this.tag == 11  || this.tag == 12 ) {
out.writeShort$I(this.index1);
}});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.tag + this.index0 + this.index1 ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "sun.misc.ProxyGenerator.ConstantPool.IndirectEntry")) {
var other=obj;
if (this.tag == other.tag && this.index0 == other.index0  && this.index1 == other.index1 ) {
return true;
}}return false;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
