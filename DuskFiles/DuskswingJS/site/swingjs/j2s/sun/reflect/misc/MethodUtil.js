(function(){var P$=Clazz.newPackage("sun.reflect.misc"),p$1={},I$=[[0,'Error','java.security.AccessController','java.lang.reflect.Method','swingjs.JSUtil',['sun.reflect.misc.MethodUtil','.Signature'],'sun.reflect.misc.MethodUtil','InternalError','sun.reflect.misc.ReflectUtil','java.security.CodeSource','java.io.BufferedInputStream','sun.misc.IOUtils','java.security.AllPermission']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MethodUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.security.SecureClassLoader');
C$.$classes$=[['Signature',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['bounce','java.lang.reflect.Method']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMethod$Class$S$ClassA',  function (cls, name, args) {
return cls.getMethod$S$ClassA(name, args);
}, 1);

Clazz.newMeth(C$, 'getMethods$Class',  function (cls) {
return cls.getMethods$();
}, 1);

Clazz.newMeth(C$, 'getPublicMethods$Class',  function (cls) {
return cls.getMethods$();
}, 1);

Clazz.newMeth(C$, 'getInterfaceMethods$Class$java_util_Map',  function (cls, sigs) {
$I$(4).notImplemented$S(null);
var intfs=cls.getInterfaces$();
for (var i=0; i < intfs.length; i++) {
var intf=intfs[i];
var done=C$.getInternalPublicMethods$Class$java_util_Map(intf, sigs);
if (!done) {
C$.getInterfaceMethods$Class$java_util_Map(intf, sigs);
}}
}, 1);

Clazz.newMeth(C$, 'getInternalPublicMethods$Class$java_util_Map',  function (cls, sigs) {
var methods=null;
try {
methods=cls.getMethods$();
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
return false;
} else {
throw se;
}
}
var done=true;
if (done) {
for (var i=0; i < methods.length; i++) {
C$.addMethod$java_util_Map$java_lang_reflect_Method(sigs, methods[i]);
}
} else {
for (var i=0; i < methods.length; i++) {
var dc=methods[i].getDeclaringClass$();
if (cls.equals$O(dc)) {
C$.addMethod$java_util_Map$java_lang_reflect_Method(sigs, methods[i]);
}}
}return done;
}, 1);

Clazz.newMeth(C$, 'addMethod$java_util_Map$java_lang_reflect_Method',  function (sigs, method) {
var signature=Clazz.new_($I$(5,1).c$$java_lang_reflect_Method,[method]);
if (!sigs.containsKey$O(signature)) {
sigs.put$O$O(signature, method);
} else if (!method.getDeclaringClass$().isInterface$()) {
var old=sigs.get$O(signature);
if (old.getDeclaringClass$().isInterface$()) {
sigs.put$O$O(signature, method);
}}}, 1);

Clazz.newMeth(C$, 'invoke$java_lang_reflect_Method$O$OA',  function (m, obj, params) {
try {
return C$.bounce.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [m, obj, params]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ie = e$$;
{
var t=ie.getCause$();
if (Clazz.instanceOf(t, "java.lang.reflect.InvocationTargetException")) {
throw t;
} else if (Clazz.instanceOf(t, "java.lang.IllegalAccessException")) {
throw t;
} else if (Clazz.instanceOf(t, "java.lang.RuntimeException")) {
throw t;
} else if (Clazz.instanceOf(t, "java.lang.Error")) {
throw t;
} else {
throw Clazz.new_($I$(1,1).c$$S$Throwable,["Unexpected invocation error", t]);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
throw Clazz.new_($I$(1,1).c$$S$Throwable,["Unexpected invocation error", iae]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'getTrampoline$',  function () {
try {
return $I$(2,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.MethodUtil$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MethodUtil$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var t=$I$(6).getTrampolineClass$();
var types=Clazz.array(Class, -1, [Clazz.getClass($I$(3)), Clazz.getClass(java.lang.Object), Clazz.array(java.lang.Object, -1)]);
var b=t.getDeclaredMethod$S$ClassA("invoke", types);
b.setAccessible$Z(true);
return b;
});
})()
), Clazz.new_(P$.MethodUtil$1.$init$,[this, null]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(7,1).c$$S$Throwable,["bouncer cannot be found", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'loadClass$S$Z',  function (name, resolve) {
$I$(8).checkPackageAccess$S(name);
var c=this.findLoadedClass$S(name);
if (c == null ) {
try {
c=this.findClass$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
if (c == null ) {
c=this.getParent$().loadClass$S(name);
}}if (resolve) {
this.resolveClass$Class(c);
}return c;
});

Clazz.newMeth(C$, 'findClass$S',  function (name) {
if (!name.startsWith$S("sun.reflect.misc.")) {
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,[name]);
}var path=name.replace$C$C(".", "/").concat$S(".class");
var res=this.getResource$S(path);
if (res != null ) {
try {
return p$1.defineClass$S$java_net_URL.apply(this, [name, res]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S$Throwable,[name, e]);
} else {
throw e;
}
}
} else {
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,[name]);
}});

Clazz.newMeth(C$, 'defineClass$S$java_net_URL',  function (name, url) {
var b=C$.getBytes$java_net_URL(url);
var cs=Clazz.new_($I$(9,1).c$$java_net_URL$java_security_cert_CertificateA,[null, null]);
if (!name.equals$O("sun.reflect.misc.Trampoline")) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["MethodUtil: bad name " + name]);
}return this.defineClass$S$BA$I$I$java_security_CodeSource(name, b, 0, b.length, cs);
}, p$1);

Clazz.newMeth(C$, 'getBytes$java_net_URL',  function (url) {
var uc=url.openConnection$();
if (Clazz.instanceOf(uc, "java.net.HttpURLConnection")) {
var huc=uc;
var code=huc.getResponseCode$();
if (code >= 400) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["open HTTP connection failed."]);
}}var len=uc.getContentLength$();
var $in=Clazz.new_([uc.getInputStream$()],$I$(10,1).c$$java_io_InputStream);
var b;
try {
b=$I$(11).readFully$java_io_InputStream$I$Z($in, len, true);
} finally {
$in.close$();
}
return b;
}, 1);

Clazz.newMeth(C$, 'getPermissions$java_security_CodeSource',  function (codesource) {
var perms=C$.superclazz.prototype.getPermissions$java_security_CodeSource.apply(this, [codesource]);
perms.add$java_security_Permission(Clazz.new_($I$(12,1)));
return perms;
});

Clazz.newMeth(C$, 'getTrampolineClass$',  function () {
try {
return Clazz.forName("sun.reflect.misc.Trampoline", true, Clazz.new_(C$));
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.bounce=C$.getTrampoline$();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.MethodUtil, "Signature", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hashCode=0;
},1);

C$.$fields$=[['I',['hashCode'],'S',['methodName'],'O',['argClasses','Class[]']]]

Clazz.newMeth(C$, 'c$$java_lang_reflect_Method',  function (m) {
;C$.$init$.apply(this);
this.methodName=m.getName$();
this.argClasses=m.getParameterTypes$();
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o2) {
if (this === o2 ) {
return true;
}var that=o2;
if (!(this.methodName.equals$O(that.methodName))) {
return false;
}if (this.argClasses.length != that.argClasses.length) {
return false;
}for (var i=0; i < this.argClasses.length; i++) {
if (!(this.argClasses[i] === that.argClasses[i] )) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hashCode == 0) {
var result=17;
result=37 * result + this.methodName.hashCode$();
if (this.argClasses != null ) {
for (var i=0; i < this.argClasses.length; i++) {
result=37 * result + ((this.argClasses[i] == null ) ? 0 : this.argClasses[i].hashCode$());
}
}this.hashCode=result;
}return this.hashCode;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
