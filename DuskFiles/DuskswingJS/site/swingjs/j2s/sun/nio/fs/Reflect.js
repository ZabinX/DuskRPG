(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.security.AccessController','AssertionError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Reflect");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAccessible$java_lang_reflect_AccessibleObject',  function (ao) {
$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.Reflect$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Reflect$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.ao.setAccessible$Z(true);
return null;
});
})()
), Clazz.new_(P$.Reflect$1.$init$,[this, {ao:ao}]))]);
}, 1);

Clazz.newMeth(C$, 'lookupField$S$S',  function (className, fieldName) {
try {
var cl=Clazz.forName(className);
var f=cl.getDeclaredField$S(fieldName);
C$.setAccessible$java_lang_reflect_AccessibleObject(f);
return f;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[x]);
}
} else if (Clazz.exceptionOf(e$$,"NoSuchFieldException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[x]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
