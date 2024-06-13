(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'sun.util.locale.provider.HostLocaleProviderAdapterImpl','sun.util.locale.provider.LocaleServiceProviderPool']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HostLocaleProviderAdapter", null, 'sun.util.locale.provider.AuxLocaleProviderAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAdapterType$',  function () {
return $I$(1).HOST;
});

Clazz.newMeth(C$, 'findInstalledProvider$Class',  function (c) {
try {
var getter=Clazz.getClass($I$(2)).getMethod$S$ClassA("get" + c.getSimpleName$(), null);
return getter.invoke$O$OA(null, null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException") || Clazz.exceptionOf(ex,"IllegalAccessException") || Clazz.exceptionOf(ex,"IllegalArgumentException") || Clazz.exceptionOf(ex,"java.lang.reflect.InvocationTargetException")){
$I$(3,"config$Class$S",[Clazz.getClass(C$), ex.toString()]);
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
