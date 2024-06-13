(function(){var P$=java.lang.reflect,I$=[[0,'java.lang.reflect.InvocationHandler','java.util.HashMap','java.util.Collections','java.util.HashSet','java.util.Arrays','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Proxy", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['h','java.lang.reflect.InvocationHandler']]
,['J',['nextUniqueNumber'],'O',['constructorParams','Class[]','loaderToCache','java.util.Map','nextUniqueNumberLock','java.lang.Object','proxyClasses','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_lang_reflect_InvocationHandler',  function (h) {
;C$.$init$.apply(this);
this.h=h;
}, 1);

Clazz.newMeth(C$, 'getProxyClass$ClassLoader$ClassA',  function (loader, interfaces) {
if (interfaces.length > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["interface limit exceeded"]);
}var proxyClass=null;
var interfaceNames=Clazz.array(String, [interfaces.length]);
var interfaceSet=Clazz.new_($I$(4,1));
for (var i=0; i < interfaces.length; i++) {
var interfaceName=interfaces[i].getName$();
var interfaceClass=Clazz.getClass(interfaces[i].$clazz$) ||null;
if (interfaceSet.contains$O(interfaceClass)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["repeated interface: " + interfaceClass.getName$()]);
}interfaceSet.add$O(interfaceClass);
interfaceNames[i]=interfaceName;
}
var key=$I$(5).asList$OA(interfaceNames);
var cache;

loader = "" + loader;
{
cache=C$.loaderToCache.get$O(loader);
if (cache == null ) {
cache=Clazz.new_($I$(2,1));
C$.loaderToCache.put$O$O(loader, cache);
}}{
do {
if (proxyClass != null ) {
return proxyClass;
} else {
break;
}} while (true);
}try {
var proxyPkg=null;
if (proxyPkg == null ) {
proxyPkg="";
}{
var num;
{
num=([C$.nextUniqueNumber,C$.nextUniqueNumber=Long.$inc(C$.nextUniqueNumber,1)][0]);
}var proxyName=proxyPkg + "$Proxy" + Long.$s(num) ;
try {
proxyClass=C$.defineClass0$ClassLoader$S$ClassA(loader, proxyName, interfaces);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassFormatError")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.toString()]);
} else {
throw e;
}
}
}C$.proxyClasses.put$O$O(proxyClass, null);
} finally {
{
if (proxyClass != null ) {
cache.put$O$O(key, proxyClass);
} else {
cache.remove$O(key);
}}}
return proxyClass;
}, 1);

Clazz.newMeth(C$, 'newProxyInstance$ClassLoader$ClassA$java_lang_reflect_InvocationHandler',  function (loader, interfaces, h) {
if (h == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var cl=C$.getProxyClass$ClassLoader$ClassA(loader, interfaces);
try {
var cons=cl.getConstructor$ClassA(C$.constructorParams);
return cons.newInstance$OA(Clazz.array(java.lang.Object, -1, [h]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
throw Clazz.new_([e.toString()],$I$(6,1).c$$S);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_([e.toString()],$I$(6,1).c$$S);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_([e.toString()],$I$(6,1).c$$S);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_([e.toString()],$I$(6,1).c$$S);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'isProxyClass$Class',  function (cl) {
if (cl == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return C$.proxyClasses.containsKey$O(cl);
}, 1);

Clazz.newMeth(C$, 'getInvocationHandler$O',  function (proxy) {
if (!C$.isProxyClass$Class(proxy.getClass$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["not a proxy instance"]);
}var p=proxy;
return p.h;
}, 1);

Clazz.newMeth(C$, 'defineClass0$ClassLoader$S$ClassA',  function (loader, name, interfaces) {
var cl=null;

cl = Clazz.getClass(Clazz.newClass(java.lang.reflect, name, null, 'java.lang.reflect.Proxy'));
var cl$ = cl.$clazz$;
cl$.$clinit$ = 1;
Clazz.newMeth(cl$, '$init$', function () {}, 1);
Clazz.newMeth(cl$, "c$$java_lang_reflect_InvocationHandler", function(h) { cl$.superclazz.c$$java_lang_reflect_InvocationHandler.apply(this, [h]);
cl$.$init$.apply(this);
}, 1);
for (var i=0; i < interfaces.length; i++) {
var methods=interfaces[i].getDeclaredMethods$();
for (var j=0; j < methods.length; j++) {
C$.setJSPrototype$Class$java_lang_reflect_Method$Z(cl, methods[j], interfaces[i].isAnnotation$());
}
if (methods.length == 1) C$.setJSPrototype$Class$java_lang_reflect_Method$Z(cl, methods[0], true);
}
return cl;
}, 1);

Clazz.newMeth(C$, 'setJSPrototype$Class$java_lang_reflect_Method$Z',  function (cl, m, add$) {
var mname=m.getSignature$();

var mname1 = (add$ ? mname.split("$")[0] + "$" : mname);
m.Class_ = cl; m.isProxy = true;
cl.$clazz$.prototype[mname] = cl.$clazz$.prototype[mname1] = function() { var args = new Array(arguments.length); for (var k = arguments.length; --k >= 0;)args[k] = arguments[k];
return(this.h.invoke$O$java_lang_reflect_Method$OA(this, m, args)); }
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.constructorParams=Clazz.array(Class, -1, [Clazz.getClass($I$(1),['invoke$O$java_lang_reflect_Method$OA'])]);
C$.loaderToCache=Clazz.new_($I$(2,1));
C$.nextUniqueNumber=0;
C$.nextUniqueNumberLock= Clazz.new_();
C$.proxyClasses=$I$(3,"synchronizedMap$java_util_Map",[Clazz.new_($I$(2,1))]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
