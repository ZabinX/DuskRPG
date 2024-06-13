(function(){var P$=Clazz.newPackage("sun.reflect.misc"),p$1={},I$=[[0,'Error','java.security.AccessController','java.lang.reflect.Method','swingjs.JSUtil',['sun.reflect.misc.MethodUtil','.Signature'],'sun.reflect.misc.MethodUtil','InternalError','sun.reflect.misc.ReflectUtil','java.security.CodeSource','java.io.BufferedInputStream','sun.misc.IOUtils','java.security.AllPermission']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Trampoline");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'ensureInvocableMethod$java_lang_reflect_Method',  function (m) {
var clazz=m.getDeclaringClass$();
if (clazz.equals$O(Clazz.getClass($I$(2))) || clazz.equals$O(Clazz.getClass($I$(3))) || clazz.getName$().startsWith$S("java.lang.invoke.")  ) throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["invocation not supported"])]);
}, 1);

Clazz.newMeth(C$, 'invoke$java_lang_reflect_Method$O$OA',  function (m, obj, params) {
C$.ensureInvocableMethod$java_lang_reflect_Method(m);
return m.invoke$O$OA(obj, params);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
if (Clazz.getClass(C$).getClassLoader$() == null ) {
throw Clazz.new_($I$(1,1).c$$S,["Trampoline must not be defined by the bootstrap classloader"]);
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
